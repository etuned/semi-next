import { ImEqualizer2 } from 'react-icons/im'

export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    icon: ImEqualizer2,
    __experimental_actions: ['update',  'create', /* 'delete', */ 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Site Name',
        description: 'The site title that shows in the navigation.'
      },
      {
        name: 'heroImage',
        type: 'mainImage',
        title: 'Hero Image',
        description: 'Shows on the Index page.'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Describe your website for search engines and social media. This will show on Google search.'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Keywords',
        description: 'Add keywords that describes your blog.',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      }
    ]
  }
  