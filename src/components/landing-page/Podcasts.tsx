import { Button } from "@/components/ui/button";
import Image from "next/image";
import pilot from "../../assets/pilot.png";
import { client, urlFor } from "@/lib/sanity";
import { PodcastInterface } from "@/types/interface";

async function getData() {
  const query = `*[_type == 'podcast'] | order(_createdAt desc){
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
      "podcastType": category.podcastType,
      "podcastEcosystem": category.podcastEcosystem,
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

export const Podcasts = async () => {
  const data = await getData();
  return (
    <section id="cta" className="bg-muted/50 py-16 ">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold py-6 ">
          Podcast Episodes
        </h2>

        {/* Featured Podcast */}
        <div className="grid grid-cols-1 md:grid-cols-5  place-items-start">
          {data
            .filter((podcast: PodcastInterface) => podcast.podcastType === "Guides")
            .map((podcast: PodcastInterface) => (
              <div key={podcast.id} className="flex flex-col col-span-3 gap-4">
                {podcast.imageUrl ? (
                  <Image
                    src={urlFor(podcast.imageUrl).url()}
                    alt="Blog Post Image"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover aspect-square"
                  />
                ) : (
                  <Image
                    src={podcast.imageUrlLink}
                    alt="Podcast Cover Art"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover aspect-square"
                  />
                )}
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">{podcast.title}</h1>
                  <p className="text-muted-foreground">Hosted by {podcast.authorName}</p>
                  <p className="text-sm leading-relaxed">
                    {podcast.description}
                  </p>
                </div>
              </div>
            ))}
          <div className="space-y-8 col-span-2">
            {data.map((podcast: PodcastInterface) => (
              <div
                key={podcast.id}
                className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4 last:border-b-0 items-center sm:items-start"
              >
                {podcast.imageUrl ? (
                  <Image
                    src={urlFor(podcast.imageUrl).url()}
                    alt="Blog Post Image"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover aspect-square"
                  />
                ) : (
                  <Image
                    src={podcast.imageUrlLink}
                    alt="Blog Post Image"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover aspect-square"
                  />
                )}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">{podcast.title}</h3>
                  <p className="text-muted-foreground">
                    Guest: {podcast.authorName} {podcast.authorRole}
                  </p>
                  <p className="text-sm leading-relaxed">
                    {podcast.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
