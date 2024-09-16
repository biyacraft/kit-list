"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getSections } from "@/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchInput } from "@/components/search-input";
import { MenuIcon } from "lucide-react";


const allSections = getSections();

export function MiniMenu() {
    const router = useRouter();
    const [sections, setSections] = useState(allSections);
    const [menu, setMenu] = useState("disappear");

    const handleClick = (tag: string) => {
        router.push("/", { scroll: false });

        const element = document.getElementById(tag);
        if (!element) return;

        window.scrollTo({
            top: element.offsetTop - 56,
            behavior: "smooth",
        });

        // Run the handleClick function first
        clearSearch();
    };

    const toggleAppear = () => {
        if (menu === "appear") {
            setMenu("disappear");
        }
        else if (menu === "disappear") {
            setMenu("appear");
        }
    }

    const clearSearch = () => {
        // Clear the search input
        setSections(allSections);
    };
    return (
        <div className="z-20">
            {menu === "appear" ? 
            <>
                <aside className="w-48 p-4 flex flex-col justify-end md:hidden fixed right-8 top-14 mt-0.4 bg-black bg-opacity-60 dark:bg-[#242422] dark:bg-opacity-90 rounded-b-2xl">
                    {/* Search input */}
                    <SearchInput onSearch={(term) => setSections(allSections.filter((section) => section.tag.toLowerCase().includes(term)))} clearSearch={clearSearch} />
                    <Separator className="mb-4 -mt-1 z-10" />
                    <ScrollArea className="flex-grow">
                        <div className="space-y-1">
                            {sections.map((section) => (
                                <Button
                                    onClick={() => handleClick(section.tag)}
                                    key={section.tag}
                                    variant="ghost"
                                    className="w-full justify-start text-gray-300"
                                >
                                    {section.tag}
                                    <span className="ml-auto text-[#878787]">
                                        {section.kits.length}
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                    <Separator className="my-4" />
                </aside>
                <Button
                    onClick={toggleAppear}
                    className="size-[48px] bg-[#ddddd9] hover:bg-[#b6b6b3] text-black border border-black rounded-full font-medium md:hidden fixed bottom-4 right-6 z-10 backdrop-blur-lg dark:bg-[#2c2c1f] dark:text-white dark:border-gray-600"
                    variant="outline"
                    size="icon"
                >
                    <MenuIcon className="w-4 h-4" />
                </Button>

            </> : 
            <>
                <Button
                    onClick={toggleAppear}
                    className="size-[48px] bg-[#ddddd9] hover:bg-[#b6b6b3] text-black border border-black rounded-full font-medium md:hidden fixed bottom-4 right-6 z-10 backdrop-blur-lg dark:bg-[#2c2c1f] dark:text-white dark:border-gray-600"
                    variant="outline"
                    size="icon"
                >
                    <MenuIcon className="w-4 h-4" />
                </Button>
            </>}
        </div>
    );
}