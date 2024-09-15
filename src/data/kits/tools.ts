import primereact from "@/assets/images/primereact.png";
import { StaticImageData } from "next/image";
import ayalkbetsIcon from "@/assets/images/abio.ico";

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
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["UI"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["UI"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["UI"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["UI"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Primereact UI Library',
        image : primereact,
        tags: ["UI"],
        url: 'http://primereact.dev',
        author: {
            name: "Abakiya",
            url: "https://abakiya.vercel.app",
            avatar: ayalkbetsIcon,
          },
    }
]