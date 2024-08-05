export interface Article {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    imageUrlLink: string;
    description: string;
    dateTime: string;
    mediumLink: string;
    youtubeLink: string;
    githubLink: string;
    projectLink: string;
    twitterLink: string;
    discordLink: string;
    telegramLink: string;
    articleType: string;
    articleEcosystem: string;
    authorName: string;
    authorRole: string;
    authorImageUrl: any;
    authorImageUrlLink: any;
    authorLink: string;
    headings?: Array<HTMLHeadElement | string>;
    content: any; // Specify a more detailed type if you know the structure of items in the array
  }

  export interface SpotlightInterface {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    imageUrlLink: string;
    description: string;
    dateTime: string;
    mediumLink: string;
    youtubeLink: string;
    githubLink: string;
    projectLink: string;
    twitterLink: string;
    discordLink: string;
    telegramLink: string;
    spotlightType: string;
    spotlightEcosystem: string;
    authorName: string;
    authorRole: string;
    authorImageUrl: any;
    authorImageUrlLink: any;
    authorLink: string;
    headings?: Array<HTMLHeadElement | string>;
    content: any; // Specify a more detailed type if you know the structure of items in the array
  }

  export interface PodcastInterface {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    imageUrlLink: string;
    description: string;
    dateTime: string;
    mediumLink: string;
    youtubeLink: string;
    githubLink: string;
    projectLink: string;
    twitterLink: string;
    discordLink: string;
    telegramLink: string;
    podcastType: string;
    podcastEcosystem: string;
    authorName: string;
    authorRole: string;
    authorImageUrl: any;
    authorImageUrlLink: any;
    authorLink: string;
    headings?: Array<HTMLHeadElement | string>;
    content: any; // Specify a more detailed type if you know the structure of items in the array
  }
