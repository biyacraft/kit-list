'use client'

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useTheme } from "next-themes";

import {GitHubLogoIcon, HeartFilledIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Coffee, MailIcon } from "lucide-react";
import { CopyButton } from "./copy-button";
import { Button } from "./ui/button";

export function Header() {
  const theme = useTheme()
  const toggleTheme = () =>{
    if (theme.theme === "light") {
      theme.setTheme("dark");
  }
  else if (theme.theme === "dark") {
    theme.setTheme("light");
  }}
  return (
    <div className="md:fixed fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-black backdrop-filter backdrop-blur-sm bg-opacity-25 outline outline-2 outline-black/35 dark:outline-white/30">
      <Link href="/" className="font-sans bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text text-xl md:text-2xl lg:text-3xl">
        <div className="font-bold ">Kit List</div>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/abakiya/kit-list"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <GitHubLogoIcon/>
        </Link>
        {(theme.theme==="light")?
        <a className="text-sm font-medium bg-transparent cursor-pointer" onClick={toggleTheme}>
          <MoonIcon />
        </a>:
        <a className="text-sm font-medium bg-transparent cursor-pointer" onClick={toggleTheme}>
          <SunIcon />
        </a>
        }
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="hover:bg-transparent p-0 text-sm font-medium"
            >
              About
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              The Kits listed here are what I mostly use for my Projects 
              <br />
              <br />
              Feel free to create your own kit list by contributing on {" "}
              <a href="https://github.com/abakiya/kit-list" className="underline">
              GitHub. 
              </a>
              <br />
              <br />
              <br />
              
              <div className="flex justify-center items-center gap-2">
                <MailIcon className="size-6 p-4" />
                <div className="p-4">
                <CopyButton content={"ayalkbettesfahun@gmail.com"} />
                </div>
                <div><div>Want to chat more</div>
                <div>Send me an email</div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex items-center space-x-1 gap-1 mt-8 justify-center">
                <div>Made with</div>
                <HeartFilledIcon className="mt-1" /> 
                <div>and</div>
                <Coffee className="size-4"/>
                <Link href="https://github.com/abakiya/kit-list">by Abakiya </Link>
              </div>
              
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
