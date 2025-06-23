import React from "react";
import logo from "../assets/logo.svg";
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import google_plus_icon from "../assets/google_plus_icon.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-4 bg-black border-t border-yellow-700 text-yellow-400">
      <img src={logo} alt="Logo" className="h-6" />
      <p className="flex-1 pl-4 text-sm max-sm:hidden">
        © AlokChauhan.dev | All rights reserved
      </p>
      <div className="flex gap-3">
        <img
          src={facebook_icon}
          alt="Facebook"
          className="h-5 hover:brightness-125"
        />
        <img
          src={twitter_icon}
          alt="Twitter"
          className="h-5 hover:brightness-125"
        />
        <img
          src={google_plus_icon}
          alt="Google+"
          className="h-5 hover:brightness-125"
        />
      </div>
    </div>
  );
};

export default Footer;
