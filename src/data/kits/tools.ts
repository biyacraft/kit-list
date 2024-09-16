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


export type Kit = {
    title?: string;
    image: StaticImageData,
    author: {
      name: string;
      url: string;
      avatar?: StaticImageData;
    };
  };

export const toolsKit = [
    {
        title: 'Image Src',
        image : imgsrc,
        tags: ["Tools"],
        url: 'http://imgsrc.io',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Decagon AI',
        image : decagon,
        tags: ["Tools"],
        url: 'http://decagon.ai',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'GSAP',
        image : gsap,
        tags: ["Tools"],
        url: 'http://gsap.com',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Twingate',
        image : twingate,
        tags: ["Tools"],
        url: 'http://twingate.com',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["Tools"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
      title: 'See + Saw',
      image : seesaw,
      tags: ["Tools"],
      url: 'http://seesaw.website',
      author: {
          name: "Abakiya",
          url: "https://abakiya.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Supercreative',
      image : supercreative,
      tags: ["Tools"],
      url: 'http://supercreative.design',
      author: {
          name: "Abakiya",
          url: "https://abakiya.vercel.app",
          avatar: ayalkbetsIcon,
        },
    },
    {
      title: 'Superpower',
      image : superpower,
      tags: ["Tools"],
      url: 'http://superpower.com',
      author: {
          name: "Abakiya",
          url: "https://abakiya.vercel.app",
          avatar: ayalkbetsIcon,
        },
    }
]