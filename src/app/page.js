"use client";
import Image from "next/image";
import { useState } from "react";
import Textarea from "./components/Textarea";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [settings, setSettings] = useState({
    rows: 5,
    cols: 50,
    placeholder: "Enter your text here",
    value: "",
    fontSize: 16,
  });
  const countWords = (text) =>
    text.split(/\s+/).filter((word) => word !== "").length;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentText);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[#282C34]'>
      <Textarea settings setCurrentText={setCurrentText} />
      <div className='absolute bottom-10 text-6xl font-black text-[#75777F] flex flex-row'>
        <span className='flex flex-col items-center justify-center'>
          {currentText.length} <span className='text-sm font-mono'>Char</span>
        </span>
        <span>-</span>
        <span className='flex flex-col items-center justify-center'>
          {countWords(currentText)}
          <span className='text-sm font-mono'>Words</span>
        </span>
      </div>
      <div className='absolute top-5 right-5'>
        <button className='text-[#75777F]' onClick={copyToClipboard}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z'
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
