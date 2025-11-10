import { motion, scale } from "motion/react";

import React from "react";

const Testimonials = () => {
  const TestData = [
    {
      id: 1,
      name: "Ayesha Khan",
      profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
      message:
        "The website is very easy to use, and I really enjoyed how simple the checkout process was. The overall navigation felt smooth, and I could quickly find the books I wanted without wasting time. Definitely recommend to everyone.",
      rating: "4.5/5",
    },
    {
      id: 2,
      name: "David Johnson",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      message:
        "I found the collection of books to be excellent and diverse, covering almost every category I like. The only issue I had was that delivery took slightly longer than expected, but apart from that, the experience was very positive.",
      rating: "3.5/5",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
      message:
        "The online reading feature is simply amazing. I can read books on the go without carrying anything heavy, which makes it so convenient. The text is clear and smooth, and the overall system feels professional and very well-built.",
      rating: "5/5",
    },
    {
      id: 4,
      name: "Ali Raza",
      profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
      message:
        "I liked the affordable pricing system and the membership options available on this website. However, I feel that more languages should be introduced to cater to a larger audience. Despite that, the platform is definitely worth using regularly.",
      rating: "3.5/5",
    },
    {
      id: 5,
      name: "Emma Brown",
      profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
      message:
        "When I faced a small issue with my account, the customer support team was quick to help me resolve it. They responded politely and professionally, which left me very satisfied with the overall service provided by this platform.",
      rating: "4/5",
    },
    {
      id: 6,
      name: "Hassan Malik",
      profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
      message:
        "The dashboard has a clean design that looks very modern and is easy to navigate. It also works smoothly on both desktop and mobile screens, which is a big plus. Overall, I am impressed with the functionality and layout.",
      rating: "4.5/5",
    },
    {
      id: 7,
      name: "Olivia Taylor",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      message:
        "Some of the books in the collection seem a little outdated, but the variety is still impressive overall. I really like how the library system works, especially the reading progress tracker. It makes reading feel more organized and enjoyable.",
      rating: "3.5/5",
    },
    {
      id: 8,
      name: "Noah Williams",
      profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
      message:
        "The performance of the site is smooth and fast, and I had no issues while browsing or making a purchase. I especially like that it is mobile-friendly, which makes it easy to shop or read anytime, anywhere without problems.",
      rating: "4/5",
    },
    {
      id: 9,
      name: "Fatima Noor",
      profilePic: "https://randomuser.me/api/portraits/women/37.jpg",
      message:
        "I love the ability to track my reading habits directly on the platform. It motivates me to stay consistent and finish the books I start. The interface is sleek, and the features feel carefully designed with readers in mind.",
      rating: "4.5/5",
    },
    {
      id: 10,
      name: "Ethan Wilson",
      profilePic: "https://randomuser.me/api/portraits/men/59.jpg",
      message:
        "Overall, the service is very good and I enjoyed my experience with it. The only improvement I would suggest is to add more payment options for convenience. Apart from that, everything worked well and I would use it again.",
      rating: "3.5/5",
    },
  ];

  return (
    <div className="sm:px-12 px-4 py-5 bg-gray-100 dark:bg-gray-800 ">
      <h1 className="sm:text-3xl text-xl text-[var(--darker)] dark:text-[var(--lighter)] font-semibold mt-10">Testimonials</h1>
      <p className="py-4 columns-2 text-xs text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
        dolorum recusandae? Voluptates minima labore inventore explicabo veniam
        totam optio?
      </p>
      <div id="TestContainer" className="px-8  py-8 overflow-hidden">
        <motion.div
          id="cardMover"
          animate={{ x: ["0%", "-100%", "0%"] }}
          transition={{
            duration: 20, // speed of scroll
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="flex gap-10"
            drag="x"
            dragConstraints={{ left: -1900, right: 0 }}
          >
            {TestData.map((user) => {
              return (
                <motion.div
                  key={user.id}
                  id="TestCard"
                  whileHover={{ scale: 1.03 }}
                  className=" py-3 px-8 relative flex flex-col gap-2 flex-shrink-0 w-[300px] dark:shadow-gray-700  rounded-md dark:bg-gray-900 bg-white shadow-md "
                >
                  <div
                    id="pfp"
                    className="w-16 h-16 bg-gray-300 overflow-hidden  absolute -top-5 -left-6 rounded-full"
                  >
                    <img
                      src={user.profilePic}
                      className="object-cover h-full w-full"
                      alt="Testimonial user pfp"
                    />
                  </div>
                  <div id="name" className="text-sm text-zinc-500 text-center">
                    <h1>{user.name}</h1>
                  </div>
                  <div id="comment" className="text-base text-[var(--darker)] dark:text-gray-300">
                    <p>{user.message}</p>
                  </div>
                  <div id="rating" className="text-center text-zinc-500">
                    {user.rating} ⭐
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
