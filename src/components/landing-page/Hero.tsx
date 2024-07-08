"use client";

import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import pilot from "../../assets/pilot.png";


const carouselItems = [
  {
    title: "Unlocking the Power of React Hooks",
    description: "Discover how React Hooks can revolutionize your development workflow.",
    link: "#",
    image: pilot,
  },
  {
    title: "Mastering Responsive Design with CSS",
    description: "Learn how to create stunning responsive layouts with modern CSS techniques.",
    link: "#",
    image: pilot,
  },
  {
    title: "Optimizing Your Next.js Application",
    description: "Discover techniques to boost the performance of your Next.js-powered websites.",
    link: "#",
    image: pilot,
  },
];

const latestPosts = [
  {
    title: "Unlocking the Power of React Hooks",
    category: "news",
    link: "#",
    created_at: "2021-09-01",
    image: pilot,
  },
  {
    title: "Exploring the Latest CSS Features",
    category: "articles",
    link: "#",
    created_at: "2021-09-01",
    image: pilot,
  },
  {
    title: "Optimizing Your Next.js Application",
    category: "podcasts",
    link: "#",
    created_at: "2021-09-01",
    image: pilot,
  },
];

export const Hero = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-3  md:gap-16">
        <div className="col-span-2">
          <Carousel className="rounded-lg">
          <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt="Blog Post Image"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-white/80">{item.description}</p>
                      <Link
                        href={item.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground"
                        prefetch={false}
                      >
                        Read More
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="space-y-6">
          <div className="grid gap-4">
            <h2 className="font-bold text-2xl">Latest Posts</h2>
            {
              latestPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.link}
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-lg bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <div className="h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt="Blog Post Image"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium group-hover:text-primary">
                      {post.title}
                    </h4>
                    <p className="line-clamp-2 text-muted-foreground">
                      {post.category}
                    </p>
                  </div>
                </Link>
              ))
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};
