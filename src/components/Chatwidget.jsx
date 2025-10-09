import { useState } from "react";
import { Headset } from "lucide-react";
import ChatBox from "./ChatBox";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-6 z-20">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--baseColor)] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Headset   className="w-6 h-6" />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 dark:shadow-gray-700 border p-4">
          <ChatBox onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
