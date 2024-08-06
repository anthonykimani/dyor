import { client, urlFor } from "@/lib/sanity";
import { Article } from "@/types/interface";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'article'] | order(_createdAt desc){
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

const Articles = async () => {
  const data = await getData();
  return (
    <div className=" py-24 sm:py-32 font-DM">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((article: Article) => (
            <Link
              href={`/article/${article.currentSlug}`}
              key={article.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                {article.imageUrl ? (
                  <Image
                    src={urlFor(article.imageUrl).url()}
                    alt="Blog Post Image"
                    width={0}
                    height={0}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                ) : (
                  <Image
                    src={article.imageUrlLink}
                    alt="Blog Post Image"
                    width={0}
                    height={0}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl group">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={format(new Date(article.dateTime), "PP")}
                    className="text-gray-500"
                  >
                    {format(new Date(article.dateTime), "PP")}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {article.articleType}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-400 group-hover:text-white">
                    <span>
                      <span className="absolute inset-0" />
                      {article.title}
                    </span>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 group-hover:text-gray-400">
                    {article.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                {article.imageUrl ? (
                  <Image
                    src={urlFor(article.imageUrl).url()}
                    alt="Blog Post Image"
                    width={0}
                    height={0}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                ) : (
                  <Image
                    src={article.imageUrlLink}
                    alt="Blog Post Image"
                    width={0}
                    height={0}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                )}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-400 group-hover:text-white">
                      <a href={article.authorName}>
                        <span className="absolute inset-0 " />
                        {article.authorName}
                      </a>
                    </p>
                    <p className="text-gray-600 group-hover:text-gray-400">{article.authorRole}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Articles;
