import React from "react";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <>
      {" "}
      <div
        id="policyContainer"
        className="px-4 sm:px-12 py-10 font-inter  flex flex-col gap-10"
      >
        <h1 className=" text-[var(--darker)] dark:text-[var(--lighter)] text-center   sm:text-3xl text-xl font-semibold">
           Privacy Policy
        </h1>
        <div>
          <div className="flex-col flex gap-4">
            <h1 className="text-[var(--baseColor)] text-xl text-left underline">
              Who We Are and What This Policy Covers
            </h1>
            <p className="sm:text-[18px] font-normal text-zinc-500 text-sm w-full sm:w-1/2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              neque tenetur asperiores nesciunt voluptatem blanditiis magnam
              atque modi itaque perspiciatis minima, hic mollitia exercitationem
              vitae maxime vel consequatur assumenda accusantium tempora
              molestias. Deserunt quasi consequatur blanditiis repudiandae
              veritatis ratione, tempora quos in, vitae officiis obcaecati! Nemo
              recusandae voluptatum dignissimos explicabo commodi aut tempora,
              cum hic beatae quaerat voluptatem. Quisquam veniam aliquam
              architecto maiores placeat iste sint voluptate at! Fugiat
              corporis, neque voluptate harum voluptatum earum modi quia
              accusantium error libero ut maiores porro praesentium mollitia.
              Accusantium dolorum nobis rerum impedit. Laborum cupiditate qui
              nostrum? Fugiat mollitia nulla ipsa cumque ullam.
            </p>
          </div>
          <div className="flex-col flex gap-4">
            <h1 className="text-[var(--baseColor)] text-xl text-left underline">
              What Personal Information We Collect
            </h1>
            <p className="sm:text-[18px] font-normal flex items-center gap-3 text-zinc-500 text-sm w-full sm:w-1/2 ">
              <i className="fa-solid text-green-500 text-xl fa-check"></i> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error neque
              tenetur asperiores nesciunt voluptatem blanditiis magnam atque
            </p>
            <p className="sm:text-[18px] font-normal flex items-center gap-3 text-zinc-500 text-sm w-full sm:w-1/2 ">
              <i className="fa-solid text-green-500 text-xl fa-check"></i> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error neque
              tenetur asperiores nesciunt voluptatem blanditiis magnam atque
            </p>
            <p className="sm:text-[18px] font-normal flex items-center gap-3 text-zinc-500 text-sm w-full sm:w-1/2 ">
              <i className="fa-solid text-green-500 text-xl fa-check"></i> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error neque
              tenetur asperiores nesciunt voluptatem blanditiis magnam atque
            </p>
            <p className="sm:text-[18px] font-normal flex items-center gap-3 text-zinc-500 text-sm w-full sm:w-1/2 ">
              <i className="fa-solid text-green-500 text-xl fa-check"></i> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error neque
              tenetur asperiores nesciunt voluptatem blanditiis magnam atque
            </p>
            <p className="sm:text-[18px] font-normal flex items-center gap-3 text-zinc-500 text-sm w-full sm:w-1/2 ">
              <i className="fa-solid text-green-500 text-xl fa-check"></i> Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Error neque
              tenetur asperiores nesciunt voluptatem blanditiis magnam atque
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Policy;
