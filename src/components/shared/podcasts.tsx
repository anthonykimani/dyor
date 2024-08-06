import { client, urlFor } from "@/lib/sanity";
import { PodcastInterface } from "@/types/interface";
import Link from "next/link"
import { format } from "date-fns";


async function getData() {
  const query = `*[_type == 'course'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      content,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      date,
      category,
      link,
      "categoryTitle":category.title,
      "authorName":author.name,
      "authorRole":author.role,
      "authorImageUrl": author.imageUrl.asset._ref,
  }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

const Courses = async () => {
  const data = await getData();

  return (
    <div className="bg-white py-24 sm:py-32 font-DM">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses to advance your Blockchain Studies</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((course: PodcastInterface) => (
            <Link href={`/course/${course.currentSlug}`}
              key={course.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={urlFor(course.imageUrl).url()} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={format(new Date(course.dateTime), "PP")} className="mr-8">
                  {format(new Date(course.dateTime), "PP")}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img src={urlFor(course.authorImageUrl).url()} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {course.authorName}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span>
                  <span className="absolute inset-0" />
                  {course.title}
                </span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses