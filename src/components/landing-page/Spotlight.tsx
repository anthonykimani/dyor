import { client, urlFor } from "@/lib/sanity";
import { SpotlightInterface } from "@/types/interface";
import Link from "next/link";
import { format } from "date-fns";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

async function getData() {
  const query = `*[_type == 'spotlight'] | order(_createdAt desc){
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
      "articleType": category.articleType,
      "articleEcosystem": category.articleEcosystem,
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

export const Spotlight = async () => {
  const data = await getData();
  return (
    <section id="about" className="container py-24 sm:py-24">
      <div className="bg-muted-foreground/10 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Spotlight
                </span>
              </h2>

              <div className="">
                <div className="mx-auto max-w-7xl">
                 
                  <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data.map((spotlight: SpotlightInterface) => (
                      <article
                        key={spotlight.id}
                        className="flex flex-col items-start justify-between hover:bg-muted-foreground/10 p-5 rounded-xl"
                      >
                        <div className="relative w-full">
                          {
                            spotlight.imageUrl ? <img
                            src={urlFor(spotlight.imageUrl).url()}
                            alt=""
                            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                          /> : <img
                          src={spotlight.imageUrlLink}
                          alt=""
                          className="aspect-[16/9] w-full rounded-2xl bg-red-300 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                          }
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="max-w-xl">
                          <div className="mt-8 flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={spotlight.dateTime}
                              className="text-gray-500"
                            >
                              {format(new Date(spotlight.dateTime), "PP")}
                            </time>
                            <a
                              href={spotlight.spotlightType}
                              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                              {spotlight.spotlightType}
                            </a>
                          </div>
                          <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                              <Link href={`/spotlight/${spotlight.currentSlug}`}>
                                <span className="absolute inset-0" />
                                {spotlight.title}
                              </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                              {spotlight.description}
                            </p>
                          </div>
                         
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
