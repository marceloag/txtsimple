"use client";
import { useState } from "react";
//👇 Import Open Sans font
import { Poppins } from "next/font/google";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

function Textarea({ settings, setCurrentText }) {
  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  return (
    <textarea
      className={
        "h-screen bg-[#282C34] border-t-0 border-r-0 border-b-0 border-solid border-[10px] border-[#21252B] text-slate-400 px-10 py-6 w-11/12 focus:border-slate-600 outline-none focus:outline-none placeholder-[#75777F] text-xl transition-all ease-in-out duration-[500ms] resize-none" +
        poppins.className
      }
      placeholder='Start Writing...'
      resize='none'
      onChange={handleChange}
    ></textarea>
  );
}

export default Textarea;

//
