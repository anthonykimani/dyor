export default {
  name: 'liveshow',
  type: 'document',
  title: 'Liveshow',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Liveshow Episode',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Liveshow Episode',
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
      title: 'Podcast Episode Link',
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
          name: 'mediumLink',
          type: 'string',
          title: 'Medium Blog Episode Link'
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
      name: 'category',
      type: 'object',
      title: 'Technology Category',
      fields: [
        {
          name: 'podcastType',
          type: 'string',
          title: 'Podcast Type',
        },
        {
          name: 'podcastEcosystem',
          type: 'string',
          title: 'Podcast Ecosystem',
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
      name: 'guest',
      type: 'object',
      title: 'Guest Interviewer',
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
          title: 'Image Url (Optional)',
        },
        {
          name: 'imageUrlLink',
          type: 'string',
          title: 'Image Url Link (Optional)',
        },
        {
          name: 'guestLink',
          type: 'string',
          title: 'Guest Link',
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
