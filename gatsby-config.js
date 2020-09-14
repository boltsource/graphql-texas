/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'BoltSource',
    description:
      'We partner with companies to build amazing digital experiences.  Expert software engineers for web, mobile, and cloud native',
    author: '@boltsourceio',
    siteUrl: 'https://boltsource.io',
    keywords:
      'consulting,contracting,software development,software engineering,engineering leadership,product development,software as a service, saas,graphql,reactjs,react native,kubernetes,cloud native,software architecture,consultants,contractors',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-theme-tailwindcss',
      options: {
        postCssPlugins: [require('autoprefixer')],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-manifest',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400', '600', '700'],
            },
            {
              family: 'Poppins',
              variants: ['400'],
            },
          ],
        },
      },
    },
  ],
}
