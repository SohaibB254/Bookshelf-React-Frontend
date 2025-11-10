import React from "react";
import Footer from "./Footer";
import { blogsData } from "../data/blogs";
import { Link, useParams } from "react-router";
const BlogDetails = () => {
  const { id } = useParams()
  const thisBlog = blogsData.find(item => item.id === id);
  const recentPosts = blogsData.slice(2,5)

  return (
    <>
    <div className=" flex gap-10 lg:px-12 sm:px-2">
      {/* Blog Details */}
      <div className="lg:w-[50vw] w-[100vw]">
        <div id="blog" className=" lg:w-[50vw] w-full  my-4 border dark:border-gray-700 border-b-0 rounded-b-none rounded-md p-2 overflow-hidden"
        >
          <div id="img" className="rounded-md overflow-hidden bg-gray-500">
            <img
              className="w-full lg:h-auto"
              src={thisBlog.image_url}
              alt="Blog post image"
            />
          </div>
          <div id="text" className="flex flex-col gap-2">
            <div
              id="blogStats"
              className="flex lg:gap-5 gap-2 text-xs my-2 sm:text-sm items-center text-[var(--baseColor)]"
            >
              <span className="flex gap-1 items-center whitespace-nowrap">
                <i className="fa-regular fa-calendar-days"></i>{thisBlog.date_published}
              </span>
              <span className="flex gap-1 items-center whitespace-nowrap">
                <i className="fa-regular fa-user"></i> By {thisBlog.username}
              </span>
              <span className="flex gap-1 items-center whitespace-nowrap">
                <i className="fa-regular fa-eye"></i> {thisBlog.views} Views
              </span>
              <span className="flex gap-1 items-center whitespace-nowrap">
                <i className="fa-regular fa-comment"></i> {thisBlog.comments} Comments
              </span>
            </div>
            <h1 className="sm:text-3xl text-xl dark:text-[var(--lighter)]  text-[var(--darker)] font-bold">
             {thisBlog.title}
            </h1>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellat praesentium similique commodi! Autem laborum tempore
              illum corrupti ea consectetur, alias optio cum harum mollitia
              quibusdam numquam architecto distinctio ratione tenetur sunt nisi
              iusto delectus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dicta velit ab adipisci culpa repellendus, tempora odio enim
              quo labore molestias suscipit neque doloremque aliquam veniam
              sequi, error reiciendis eveniet aperiam!
            </p>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellat praesentium similique commodi! Autem laborum tempore
              illum corrupti ea consectetur, alias optio cum harum mollitia
              quibusdam numquam architecto distinctio ratione tenetur sunt nisi
              iusto delectus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dicta velit ab adipisci culpa repellendus, tempora odio enim
              quo labore molestias suscipit neque doloremque aliquam veniam
              sequi, error reiciendis eveniet aperiam!
            </p>
            <h1 className="sm:text-2xl px-2 text-xl dark:text-[var(--lighter)]  text-[var(--darker)] py-3 dark:bg-gray-800 bg-gray-100 border-l-4 border-[var(--darker)] italic font-bold">
             {thisBlog.quotes.join(', ')}
            </h1>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellat praesentium similique commodi! Autem laborum tempore
              illum corrupti ea consectetur, alias optio cum harum mollitia
              quibusdam numquam architecto distinctio ratione tenetur sunt nisi
              iusto delectus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dicta velit ab adipisci culpa repellendus, tempora odio enim
              quo labore molestias suscipit neque doloremque aliquam veniam
              sequi, error reiciendis eveniet aperiam!
            </p>
            <p className="text-sm text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              repellat praesentium similique commodi! Autem laborum tempore
              illum corrupti ea consectetur, alias optio cum harum mollitia
              quibusdam numquam architecto distinctio ratione tenetur sunt nisi
              iusto delectus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dicta velit ab adipisci culpa repellendus, tempora odio enim
              quo labore molestias suscipit neque doloremque aliquam veniam
              sequi, error reiciendis eveniet aperiam!
            </p>
          </div>
        </div>
        {/* User Details */}
        <div className="py-2 px-3 dark:bg-gray-800 bg-gray-100 flex gap-3 items-center">
          <div
            className="sm:w-36 sm:h-36 w-24 h-24 flex-shrink-0 bg-gray-400 rounded-md overflow-hidden"
            id="userImg"
          >
            <img
              className="object-cover h-full w-full"
               src={thisBlog.user_pfp}
              alt=""
            />
          </div>
          <div id="userDetails" className="flex flex-col gap-3">
            <h1 className="text-xl text-[var(--darker)] dark:text-[var(--lighter)]  font-semibold">
              {thisBlog.username}
            </h1>
            <p className="text-sm hidden sm:block text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              beatae aut atque tenetur at adipisci deserunt possimus quisquam
              dicta illum?
            </p>
            <div className="socials flex gap-2 text-white text-sm ">
              <i class="fa-solid fa-envelope p-2  flex-shrink-0 bg-green-500 rounded-sm"></i>
              <i class="fa-brands fa-x-twitter p-2  flex-shrink-0 bg-green-500 rounded-sm"></i>
              <i class="fa-brands fa-facebook-f p-2 px-3 flex-shrink-0 bg-green-500 rounded-sm"></i>
              <i class="fa-brands fa-youtube p-2  flex-shrink-0 bg-green-500 rounded-sm"></i>
            </div>
          </div>
        </div>
        {/* comment section */}
        <div className="w-full  p-3 px-0">
          <form className="flex flex-col gap-2 h-full py-4 px-6 w-full border border-t-0 rounded-t-none rounded-md  dark:border-gray-700 border-gray-300">
            <h1 className="sm:text-2xl text-xl dark:text-[var(--lighter)]  text-[var(--darker)] font-semibold">
              Add a comment
            </h1>
            <input
              className="border dark:bg-gray-800 dark:border-gray-700 border-gray-400 text-xs sm:text-base outline-none rounded-sm  transition  p-2 "
              type="text"
              name="username"
              id="username"
              placeholder="Your Name"
            />
            <input
              className="border dark:bg-gray-800 dark:border-gray-700 border-gray-400 text-xs sm:text-base outline-none rounded-sm  transition  p-2 "
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <textarea
              className="w-full dark:bg-gray-800 dark:border-gray-700 border-gray-400 text-xs sm:text-base outline-none rounded-sm   border p-2 h-full "
              name="message"
              id="message"
              placeholder="Write your comment"
            ></textarea>

            <button className="u-btn cursor-pointer w-fit rounded-sm">
              Add comment
            </button>
          </form>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-full hidden lg:inline-block p-2 my-4">
        <div
          id="blogSidebar"
          className="flex flex-col gap-2 border dark:border-gray-700 rounded-md p-2  px-4 "
        >
          <div className="blogsearch w-full flex items-center h-10 gap-2">
           <input
            className="p-3 w-full h-full dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 outline-none border"
            type="search"
            name="search"
            placeholder="Search Blog"
            id=""
          />
          <i class="fa-solid fa-magnifying-glass bg-[var(--baseColor)] p-3 rounded-r h-full   text-white font-bold cursor-pointer hover:bg-[var(--lighter)] text-xl"></i>
          </div>

          <span className="w-full p-3 text-xl border dark:border-gray-700  hover:bg-[var(--baseColor)] dark:text-gray-300 hover:text-white transition flex gap-1 items-center">
            <i className="fa-solid fa-plus"></i>About
          </span>
          <span className="w-full p-3 text-xl border dark:border-gray-700  hover:bg-[var(--baseColor)] dark:text-gray-300 hover:text-white transition flex gap-1 items-center">
            <i className="fa-solid fa-plus"></i>Contact
          </span>
          <span className="w-full p-3 text-xl border dark:border-gray-700  hover:bg-[var(--baseColor)] dark:text-gray-300 hover:text-white transition flex gap-1 items-center">
            <i className="fa-solid fa-plus"></i>Blog
          </span>
          <span className="w-full p-3 text-xl border dark:border-gray-700  hover:bg-[var(--baseColor)] dark:text-gray-300 hover:text-white transition flex gap-1 items-center">
            <i className="fa-solid fa-plus"></i>Feedback
          </span>
        </div>
        <div id="recentPosts" className="w-1/2">
          <h1 className="text-xl dark:text-[var(--lighter)]  text-[var(--darker)] font-semibold">
            Recent Posts
          </h1>
        {
          recentPosts.map((post)=>{
            return (
              <div key={post.id} className="py-2  px-3  flex lg:gap-3 items-center">
            <div
              className="lg:w-36 lg:h-28 w-24 h-20 lg:flex-shrink-0 bg-gray-400 rounded-md overflow-hidden"

            >
              <img
                className="object-fill h-full w-full"
                src={post.image_url}
                alt="Recent post image"
              />
            </div>
            <div id="recentPostDetails" className="flex flex-col gap-3">
              <Link to={`/blog/details/${encodeURIComponent(post.id)}`} className="lg:text-xl hover:text-[var(--lighter)] max-w-full dark:text-[var(--lighter)] text-[var(--darker)] font-semibold">
                {post.title}
              </Link>

              <div
                id="blogStats"
                className="flex lg:gap-5 gap-2 text-sm items-center text-[var(--baseColor)]"
              >
                <span className="flex gap-1 items-center whitespace-nowrap">
                  <i className="fa-regular fa-calendar-days"></i>{post.date_published}
                </span>
                <span className="flex gap-1 items-center whitespace-nowrap">
                  <i className="fa-regular fa-user truncate"></i> By {post.username}
                </span>
              </div>
            </div>
          </div>
            )
          })
        }


        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogDetails;
