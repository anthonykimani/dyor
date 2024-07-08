"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import pilot from "../../assets/pilot.png";


export const Podcasts = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 ">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold py-6 ">Podcast Episodes</h2>

        {/* Featured Podcast */}
        <div className="grid grid-cols-1 md:grid-cols-5  place-items-start">
          <div className="flex flex-col col-span-3 gap-4">
            <Image
              src={pilot}
              alt="Podcast Cover Art"
              width={600}
              height={600}
              className="rounded-lg object-cover aspect-square"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">The Coding Podcast</h1>
              <p className="text-muted-foreground">Hosted by Jane Doe</p>
              <p className="text-sm leading-relaxed">
                Join us as we dive into the latest trends and technologies in
                the world of software development. From cutting-edge frameworks
                to best practices, we cover it all with insightful interviews
                and lively discussions.
              </p>
            </div>
          </div>
          <div className="space-y-8 col-span-2">
            <div className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4 last:border-b-0">
              <Image
                src={pilot}
                alt="Episode 42 Cover Art"
                width={100}
                height={100}
                className="rounded-lg object-cover aspect-square"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">
                  Episode 42: Serverless Architecture
                </h3>
                <p className="text-muted-foreground">
                  Guest: John Smith, Cloud Architect
                </p>
                <p className="text-sm leading-relaxed">
                  In this episode, we explore the benefits and challenges of
                  serverless architecture, and discuss how it's transforming the
                  way we build and deploy applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4 last:border-b-0">
              <Image
                src={pilot}
                alt="Episode 41 Cover Art"
                width={100}
                height={100}
                className="rounded-lg object-cover aspect-square"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">
                  Episode 41: Mastering React Hooks
                </h3>
                <p className="text-muted-foreground">
                  Guest: Sarah Lee, Frontend Engineer
                </p>
                <p className="text-sm leading-relaxed">
                  We dive deep into the world of React Hooks, discussing best
                  practices, common pitfalls, and how to leverage them to build
                  more efficient and maintainable React applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4 last:border-b-0">
              <Image
                src={pilot}
                alt="Episode 40 Cover Art"
                width={100}
                height={100}
                className="rounded-lg object-cover aspect-square"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">
                  Episode 40: The Future of JavaScript
                </h3>
                <p className="text-muted-foreground">
                  Guest: Michael Johnson, Language Enthusiast
                </p>
                <p className="text-sm leading-relaxed">
                  In this episode, we explore the latest developments in the
                  JavaScript ecosystem, including emerging features, performance
                  improvements, and the impact of WebAssembly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
