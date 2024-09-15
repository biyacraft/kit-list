"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";
import ayalkbetsIcon from "@/assets/images/abio.ico";
import Image from "next/image";


export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <a
      href="https://abakiya.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex fixed overflow-hidden animate-in slide-in-from-bottom-full z-50 bottom-2 md:bottom-4 right-2 md:right-4 w-[calc(100vw-16px)] max-w-[350px] border border-border p-4 transition-all bg-background h-[88px] group">
        <div className="flex items-center justify-center size-16 rounded-full">
          <Image src={ayalkbetsIcon} alt="" className="rounded-full"  />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-0.5 pl-[40px]">
            <div className="flex space-x-2 items-center">
              <span className="text-sm font-medium">Made by ab4io</span>
            </div>
            <p className="text-xs text-[#878787]">
              An all-in-one tool for freelancers to monitor financial health,
              time-track, and send invoices. ↗
            </p>
          </div>

          <button
            type="button"
            className="absolute right-1.5 top-1.5 text-[#878787] hidden group-hover:block"
            onClick={handleClose}
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
