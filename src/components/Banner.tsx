import React from "react";

export default function Banner() {
  return (
    <div className="container mx-auto items-center flex justify-between  py-5 px-8 ">
      <div className="flex flex-col gap-6  max-w-xl">
        <h1 className="  font-bold leading-tight">
          <span className="text-black-500 text-7xl"> Build Your Ideal </span>
          <br />
          <span className="text-pink-500 text-7xl"> Development Stack</span>
        </h1>

        <p className="text-[20px]  text-gray-400">
          Explore Frontend,Backend Database tooling options and compare them
          side by side
        </p>
        <div className=" flex gap-3">
          <button className="btn  bg-pink-500 h-[38px] w-[200px]">
            Explore Technologies
          </button>
          <button className="btn   bg-white h-[38px] w-[200px]">
            Learn More
          </button>
        </div>
      </div>

      {/* <div className="  "> */}
      <img className="w-[40%] " src="/banner-stack.png" alt="hero" />
      {/* </div> */}
    </div>
  );
}
