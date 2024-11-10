import primereact from "@/assets/images/primereact.png";
import { StaticImageData } from "next/image";
import ayalkbetsIcon from "@/assets/images/abio.ico";
import imgsrc from "@/assets/images/imgsrc.png";
import decagon from "@/assets/images/decagon.png";
import gsap from "@/assets/images/gsap.png";
import twingate from "@/assets/images/twingate.png";
import seesaw from "@/assets/images/seesaw.png";
import supercreative from "@/assets/images/supercreative.png";
import superpower from "@/assets/images/superpower.png";
import openhomes from "@/assets/images/openhomes.png";
import markflow from "@/assets/images/markflow.png";

export type Kit = {
    title?: string;
    image: StaticImageData,
    author: {
      name: string;
      url: string;
      avatar?: StaticImageData;
    };
  };
//
export const toolsKit = [
    {
        title: 'Image Src',
        image : imgsrc,
        tags: ["Tools"],
        url: 'https://imgsrc.io',
        author: {
            name: "biyacraft",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Decagon AI',
        image : decagon,
        tags: ["Tools"],
        url: 'https://decagon.ai',
        author: {
            name: "biyacraft",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'GSAP',
        image : gsap,
        tags: ["Tools"],
        url: 'https://gsap.com',
        author: {
            name: "biyacraft",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Twingate',
        image : twingate,
        tags: ["Tools"],
        url: 'https://twingate.com',
        author: {
            name: "biyacraft",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["Tools"],
        url: 'https://primereact.dev',
        author: {
            name: "biyacraft",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
      title: 'See + Saw',
      image : seesaw,
      tags: ["Tools"],
      url: 'https://seesaw.website',
      author: {
          name: "biyacraft",
          url: "https://biyacraft.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Supercreative',
      image : supercreative,
      tags: ["Tools"],
      url: 'https://supercreative.design',
      author: {
          name: "biyacraft",
          url: "https://biyacraft.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Superpower',
      image : superpower,
      tags: ["Tools"],
      url: 'https://superpower.com',
      author: {
          name: "biyacraft",
          url: "https://biyacraft.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Open Homes',
      image : openhomes,
      tags: ["Tools"],
      url: 'https://openhomes.xyz',
      author: {
          name: "biyacraft",
          url: "https://biyacraft.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Markflow',
      image : markflow,
      tags: ["Tools"],
      url: 'https://markflow.app',
      author: {
          name: "biyacraft",
          url: "https://biyacraft.vercel.app",
          avatar: ayalkbetsIcon,
        },
    }
]