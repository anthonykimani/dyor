export default {
  name: 'airdrop',
  type: 'document',
  title: 'Airdrop',
  fields: [
    {
      name: "id",
      type: "number",
      title: "Id"
    },
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
      name: 'imageUrl',
      type: 'image',
      title: 'Image Url',
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
      type: 'url',
      title: 'Airdrop Guide Link',
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
        {
          name: 'href',
          type: 'string',
          title: 'Href',
        },
      ],
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author',
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
          name: 'href',
          type: 'string',
          title: 'Href',
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
