'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

import {EyeOpenIcon, GitHubLogoIcon, HeartFilledIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Coffee, MailCheckIcon } from "lucide-react";
import { CopyButton } from "./copy-button";



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
    <div className="flex flex-col">
    <div className="md:fixed fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-black backdrop-filter backdrop-blur-sm bg-opacity-20">
      <Link href="/" className="font-medium font-sans text-md">
        Kit List
      </Link>
      <div>
      <EyeOpenIcon />
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/abakiya/kitlist"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <GitHubLogoIcon/>
        </Link>
        {(theme.theme==="light")?
        <Link href="/" className="text-sm font-medium" onClick={toggleTheme}>
          <MoonIcon />
        </Link>:
        <Link href="/" className="text-sm font-medium" onClick={toggleTheme}>
          <SunIcon />
        </Link>
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
              
              The Kits listed here is what I mostly use for my Projects <br />
              <br />
              
              Feel free to create your own kit list using by contributing to 
              <a href="https://github.com/abakiya/kit-list" className="underline">
                kit-list repository
              </a>
              on GitHub.
              <br />
              <br />
              <br />
              <Link href="https://git.new/cd">
                <Button
                  className="w-full bg-white text-black rounded-full"
                  variant="outline"
                >
                  Submit
                </Button>
              </Link>
              <div className="flex items-center space-x-1 gap-1 mt-8 justify-center">
                <div>Made with</div>
                <HeartFilledIcon /> 
                <div>and</div>
                <Coffee className="size-4"/>
                <div>by Abakiya</div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MailCheckIcon className="size-4" />
                <div>ayalkbettesfahun@gmail.com</div>
              <CopyButton content={"ayalkbettesfahun@gmail.com"} />
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <Separator className="" />
    </div>
  );
}
