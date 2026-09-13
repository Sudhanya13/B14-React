import React from "react";

export default function Banner() {
  return (
    <div className="container mx-auto items-center flex justify-between  py-5 px-8 ">
      <div className="flex flex-col gap-6  max-w-xl">
        <h1 className="  font-bold leading-tight">
          <span className="text-black-500 text-5xl"> Build Your Ideal </span>
          <br />
          <span className="text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            {" "}
            Development Stack
          </span>
        </h1>

        <p className="text-[16px]  text-[#475569]">
          Explore Frontend,Backend Database tooling options <br />
          and compare them side by side and put together the stack that fits
          your <br /> next project. side by side
        </p>
        <div className=" flex gap-3">
          <button className="  h-[38px] w-[180px]   btn border-none bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white">
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
