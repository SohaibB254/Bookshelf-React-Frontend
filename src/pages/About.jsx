import React, { useState } from "react";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import ChatWidget from "../components/Chatwidget";
import Stats from "../components/Stats";
import OurMission from "../components/OurMission";

const About = () => {
  return (
    <>
      <div id="aboutContainer" className="text-[32px] sm:px-8 font-inter  lg:pt-8">
        <div
          id="aboutContentContainer"
          className={` text-[0.7em]  relative dark:text-gray-400  lg:mt-8 font-inter flex-wrap items-center justify-center  gap-10 flex flex-col px-8 py-8  rounded-md`}
        >
          {/* Theme Switcher */}


          <div className=" fade-elm flex my-10 lg:flex-nowrap justify-between flex-wrap  gap-4">
            <div
              className={` group cursor-pointer   rounded-md lg:w-1/2 p-2 `}
            >
              <h1 className="text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3 pb-2">
                About BookShelf
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className=" "
              >
                BookShelf began as a passion project between two college friends
                who believed stories deserve a kingdom of their own. From
                ancient classics to thrilling modern fiction, we’ve built a
                space where every reader finds a home. What started as a garage
                library is now a growing community of thousands of
                story-seekers.
              </motion.p>
              <button className=" text-[var(--comp)] italic text-[0.7em]  my-3  transition">
                See More--&gt;
              </button>
            </div>

            <div
              className={`group cursor-pointer   rounded-md  `}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                }}
                className="lg:w-[500px] rounded-md overflow-hidden"
              >
              <img className="h-full w-full" src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg" alt="" />
              </motion.div>
            </div>
          </div>
          <div className=" fade-elm flex my-10 lg:flex-nowrap justify-between flex-wrap flex-row-reverse  gap-4">
            <div
              className={` group cursor-pointer  rounded-md lg:w-1/2 p-2 `}
            >
              <h1 className="text-[1.2em] text-[#24BF6C] font-semibold border-b mb-3 pb-2">
                Community
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                                    delay: 0.5,
                }}
              >
                BookShelf began as a passion project between two college friends
                who believed stories deserve a kingdom of their own. From
                ancient classics to thrilling modern fiction, we’ve built a
                space where every reader finds a home. What started as a garage
                library is now a growing community of thousands of
                story-seekers.
              </motion.p>
              <button className="text-[var(--comp)] italic text-[0.7em]  my-3  transition">
                See More--&gt;
              </button>
            </div>

            <div
              className={`group cursor-pointer  rounded-md  `}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7,
                }}
                className="lg:w-[500px] rounded-md overflow-hidden"
              >
              <img className="h-full w-full" src="https://images.pexels.com/photos/2098691/pexels-photo-2098691.jpeg" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget />
      <OurMission/>
      <Stats/>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default About;
