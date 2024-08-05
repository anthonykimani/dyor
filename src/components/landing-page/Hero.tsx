
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
import { client, urlFor } from "@/lib/sanity";
import { Article } from "@/types/interface";

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

const Hero = async () => {

  const data = await getData();
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-3  md:gap-16">
        <div className="col-span-2">
          <Carousel className="rounded-lg">
          <CarouselContent>
              {data.map((article: Article) => (
                <CarouselItem key={article.id}>
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    {article.imageUrl ? <Image
                      src={urlFor(article.imageUrl).url()}
                      alt="Blog Post Image"
                      width={0}
                      height={0}
                      className="object-cover w-full h-full"
                    /> : <Image
                    src={article.imageUrlLink}
                    alt="Blog Post Image"
                    width={0}
                    height={0}
                    className="object-cover w-full h-full"
                  />}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">{article.title}</h3>
                      <p className="mt-2 text-white/80">{article.description}</p>
                      <Link
                        href={`/article/${article.currentSlug}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white"
                        prefetch={true}
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
            <h2 className="font-bold text-2xl">Latest Articles</h2>
            {
              data.map((article:Article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.currentSlug}`}
                  className="group grid grid-cols-[48px_1fr] items-start gap-4 rounded-lg bg-muted p-4 transition-colors hover:bg-muted-foreground/10"
                  prefetch={false}
                >
                  <div className="h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                      src={urlFor(article.imageUrl).url()}
                      alt="Blog article Image"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium group-hover:text-primary">
                      {article.title}
                    </h4>
                    <p className="line-clamp-2 text-muted-foreground">
                      {article.description}
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

export default Hero;
