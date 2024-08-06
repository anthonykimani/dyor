import { cn } from "@/lib/utils";
import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bentogrid";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { LiveshowInterface } from "@/types/interface";

async function getData() {
    const query = `*[_type == 'liveshow'] | order(_createdAt desc){
        title,
        description,
        "currentSlug": slug.current,
        "imageUrl": image.imageUrl.asset._ref,
        "imageUrlLink": image.imageUrlLink,
        "dateTime": _createdAt,
        "mediumLink": link.mediumLink,
        "youtubeLink": link.youtubeLink,
        "githubLink": link.githubLink,
        "projectLink": link.projectLink,
        "twitterLink": socials.twitterLink,
        "discordLink": socials.discordLink,
        "telegramLink": socials.telegramLink,
        "liveshowType": category.liveshowType,
        "liveshowEcosystem": category.liveshowEcosystem,
        "authorName":author.name,
        "authorRole":author.role,
        "authorImageUrl": author.imageUrl.asset._ref,
        "authorImageUrlLink": author.imageUrlLink,
        "authorLink":author.authorLink,
        content,
        "updatedAt": _updatedAt,
    }`;
  
    const data = await client.fetch(query, {}, { cache: "no-store" });
    return data;
  }

export async function LiveShowContainer() {
    const data = await getData();
  return (
    <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[20rem]">
      {data.map((liveshow: LiveshowInterface) => (
        <BentoGridItem
        currentSlug={liveshow.currentSlug}
        image={liveshow.imageUrl}
          key={liveshow.id}
          title={liveshow.title}
          description={liveshow.description}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVy4qauOv9wN1ebErEuS2HJki_3_8epSBLw&s" alt="" width={0} height={0} className="w-full h-full object-cover" />
  </div>
);


const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
