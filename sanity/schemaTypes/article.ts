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
          type: 'image',
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
          title: 'X formely Twitter',
        },
        {
          name: 'discord',
          type: 'string',
          title: 'Discord',
        },
        {
          name: 'telegram',
          type: 'string',
          title: 'Telegram',
        }
      ]
    },
    {
      name: 'category',
      type: 'object',
      title: 'Category',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
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
