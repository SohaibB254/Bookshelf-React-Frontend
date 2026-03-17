import React, { useState } from "react";
 const dummyResponses = {
  "hi": "Hello! 👋 How can I help you today?",
  "books": "We have books in Fiction, Science, and History categories.",
  "store": "Our store is open 24/7 online! 📚",
  "default": "Sorry, I didn’t understand that. Try asking about 'books' or 'store'.",
};

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Bookstore Assistant. Ask me something!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);

    // Simple AI logic (mock)
    const response =
      dummyResponses[input.toLowerCase()] || dummyResponses["default"];

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 600);

    setInput("");
  };

  return (
    <div className="flex flex-col h-80 ">
      {/* Header */}
      <div className="flex justify-between items-center bg-[var(--baseColor)] text-gray-300 p-2 rounded-t-md">
        <h3 className="font-semibold flex flex-col items-start">Bookstore Assistant
            <button
    onClick={() => setMessages([])}
    className="text-sm  hover:text-red-800"
  >
    Clear chat
  </button>
        </h3>

        <button className="self-start" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md max-w-[75%] ${
              msg.sender === "user"
                ? "ml-auto bg-[var(--baseColor)] dark:text-gray-300  text-right"
                : "bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 border "
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-2 border-t">
        <input
          type="text"
          className="flex-1 border dark:border-gray-700 outline-none dark:bg-gray-800 dark:text-gray-300 rounded-md px-2 py-1 text-sm"
          placeholder="Try asking something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-[var(--baseColor)] text-white px-3 py-1 rounded-md hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;