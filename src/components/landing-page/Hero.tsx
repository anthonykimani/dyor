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
import { format } from "date-fns";

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
    <section className="font-DM w-full pt-12 md:pt-24 lg:pt-32 flex flex-col items-center container py-24 sm:py-24">
      <div className="my-10">
        <h2 className="text-white text-center text-3xl xsm:text-[40px] md:text-4xl font-bold my-10 ">
          We cover narratives that happen the fast-paced crypto landscape
        </h2>
        <h4 className="text-[#8a96abb6] text-center text-base">
          Discovered latest top-notch stories from world wide community, quality
          informative podcast and verified creators.
        </h4>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around">
        <div className="space-y-6 w-full md:w-[50%] pr-4">
          <div className="grid gap-4">
            <h2 className="font-semibold text-2xl font-poppins">
              Trending News
            </h2>
            {data.map((article: Article) => (
              <Link
                key={article.id}
                href={`/article/${article.currentSlug}`}
                className="group flex rounded-lg transition-colors hover:bg-muted-foreground/10 p-2"
                prefetch={false}
              >
                <div className="w-[400px] h-[160px] overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(article.imageUrl).url()}
                    alt="Blog article Image"
                    width={0}
                    height={0}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="w-full p-5 flex flex-col justify-around">
                  <time dateTime={article.dateTime} className="text-gray-500 ">
                    {format(new Date(article.dateTime), "PPpp")}
                  </time>
                  <h4 className="text-lg font-medium group-hover:text-primary">
                    {article.title}
                  </h4>
                  <p className="line-clamp-2 text-muted-foreground">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[50%] px-16">
          <Carousel className="rounded-lg">
            <CarouselContent>
              {data.map((article: Article) => (
                <CarouselItem key={article.id}>
                  <div className="relative h-[600px] w-[600px] overflow-hidden rounded-lg">
                    {article.imageUrl ? (
                      <Image
                        src={urlFor(article.imageUrl).url()}
                        alt="Blog Post Image"
                        width={0}
                        height={0}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <Image
                        src={article.imageUrlLink}
                        alt="Blog Post Image"
                        width={0}
                        height={0}
                        className="object-cover w-full h-full"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-white/80">
                        {article.description}
                      </p>
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
      </div>
    </section>
  );
};

export default Hero;
