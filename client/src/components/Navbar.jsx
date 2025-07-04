import React from "react";
import logo from "../assets/logo.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={logo} alt="Logo" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get Started
          <img src={arrow_icon} alt="arrow" className="w-3 sm:w-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
