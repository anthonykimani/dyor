export default {
  name: 'airdrop',
  type: 'document',
  title: 'Airdrop',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Airdrop Guide',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Airdrop Guide',
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
      title: 'Airdrop Episode Link',
      fields: [
        {
          name: 'spotifyLink',
          type: 'string',
          title: 'Spotify Episode Link'
        },
        {
          name: 'youtubeLink',
          type: 'string',
          title: 'Youtube Episode Link'
        },
        {
          name: 'airdropLink',
          type: 'string',
          title: 'Airdrop Link'
        },
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
