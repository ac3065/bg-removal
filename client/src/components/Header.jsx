import React from "react";
import upload_btn_icon from "../assets/upload_btn_icon.svg";
import header_img from "../assets/header_img.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 bg-[#1E1E1E] text-[#f4c76f]">
      {/* ---Left Side--- */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-[#ffe399]">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>
        <p className="my-6 text-[15px] text-neutral-300">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
          <br className="max-sm:hidden" />
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-[#f6d365] to-[#fda085] m-auto hover:scale-105 transition-all duration-700 shadow-lg shadow-yellow-400/30"
            htmlFor="upload1"
          >
            <img width={20} src={upload_btn_icon} alt="" />
            <p className="text-black font-semibold text-sm">
              Upload your image
            </p>
          </label>
        </div>
      </div>

      {/* ---Right Side--- */}
      <div className="w-full max-w-md">
        <img
          src={header_img}
          alt=""
          className="rounded-xl shadow-md shadow-yellow-700/20"
        />
      </div>
    </div>
  );
};

export default Header;
