# Kit List

**Kit List** is a a curated list of resources that enhance workflows for  productivity, development, design, and other daily activities.

## Features

- Tools for productivity
- Resources for development
- Design tools and resources
- Daily activity management
- Open for contributions

## How to Contribute

We welcome contributions to the Kit List! If you have a useful tool or resource you'd like to share, you can contribute by adding it to the **Kit List** repository.

### Contribution Steps

1. **Fork the repository** to your GitHub account.
2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/biyacraft/kit-list.git
   cd kit-list```
3. **Navigate to the src/data/kits directory** This is where the list of kits is stored.
```
cd src/data/kits
```
4. **Create a new .ts file for your kit** Name the file according to the kit's name, using lowercase and (e.g. myawesomekit.ts).

5. **Structure your file similarly to the existing ones in the kits directory** Here’s an example format:
```
import animata from "@/assets/images/animata.png";
import svgl from "@/assets/images/svgl.png";
export const uiuxKit = [
    {
        title: 'Animata',
        image : animata,
        tags: ["UI/UX"],
        url: 'https://animata.design',
        author: {
            name: "Biya",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
    {
        title: 'Svgl',
        image : svgl,
        tags: ["UI/UX"],
        url: 'https://svgl.app',
        author: {
            name: "Biya",
            url: "https://biyacraft.vercel.app",
            avatar: ayalkbetsIcon,
          },
    },
]
```
6. ***Navigate to the src/data/index.ts file*** This is where import the data you added. The code should look something like this:
``` 
export const kits = [
  ...toolsKit,
  ...frontendKit,
  ...backendKit,
  ...databaseKit,
  ...productivityKit,
  ...uiuxKit,
  ...portfolioKit,
  ...threeDKit,
  ...yourkitname,
];
```
7. ***Add an image of the website and avatar of your self*** 
Add an image (screenshot) of the website and your avatar which is displayed on the card to the src/assets/image directory. Name the image file to match the website's name and your name respectively, using lowercase (e.g., myawesomekit.png).
8. ***Commit your changes***
9. ***Push your changes to your GitHub fork***
10. ***Submit a Pull Request***