export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Article',
      options: {
        source: 'title',
      },
    },
    {
      name:'image',
      type: 'object',
      title: 'Image (Image fields are Optional)',
      fields: [
        {
          name: 'imageUrl',
          type: 'image',
          title: 'Image Url (Optional)',
        },
        {
          name: 'imageUrlLink',
          type: 'string',
          title: 'Image Url Link (Optional)',
        },
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'link',
      type: 'object',
      title: 'Blog Link',
      fields: [
        {
          name: 'mediumLink',
          type: 'string',
          title: 'Medium Episode Link'
        },
        {
          name: 'youtubeLink',
          type: 'string',
          title: 'Youtube Link'
        },
        {
          name: 'githubLink',
          type: 'string',
          title: 'Github Link'
        },
        {
          name: 'projectLink',
          type: 'string',
          title: 'Project Link'
        },
      ]
    },
    {
      name: 'socials',
      type: 'object',
      title: 'Social Media Handles (Optional)',
      fields: [
        {
          name: 'twitter',
          type: 'string',
          title: 'X formely Twitter Post Link',
        },
        {
          name: 'discord',
          type: 'string',
          title: 'Discord Post Link',
        },
        {
          name: 'telegram',
          type: 'string',
          title: 'Telegram Post Link',
        }
      ]
    },
    {
      name: 'category',
      type: 'object',
      title: 'Category',
      fields: [
        {
          name: 'articleType',
          type: 'string',
          title: 'Article Type',
        },
        {
          name: 'articleEcosystem',
          type: 'string',
          title: 'Article Ecosystem',
        },
      ],
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author of Article (Optional)',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'role',
          type: 'string',
          title: 'Role',
        },
        {
          name: 'imageUrl',
          type: 'image',
          title: 'Image Url',
        },
        {
          name: 'imageUrlLink',
          type: 'string',
          title: 'Image Url Link (Optional)',
        },
        {
          name: 'authorLink',
          type: 'string',
          title: 'Author Link',
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
