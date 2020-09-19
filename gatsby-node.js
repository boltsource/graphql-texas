/* eslint-disable no-unused-vars */ // TODO: remove these eslint
/* eslint-disable consistent-return */
const _ = require('lodash')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')
// const { createPrinterNode } = require('gatsby-plugin-printer')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allGraphCmsPage {
        edges {
          node {
            id
            titleTag
            metaDescription
            metaKeywords
            copyright
            slug {
              id
              path
            }
            featureEvent {
              eventImage {
                handle
                width
                height
              }
              meetupLink
              eventDate
              name {
                raw
              }
              sponsorInfo {
                raw
              }
              schedule {
                timeSections {
                  author
                  id
                  title
                  eventDateTime
                  description {
                    raw
                  }
                }
              }
            }
            mainSectionTitle
            mainSectionDescription {
              raw
            }
            ourSpeakers {
              id
              profileImage {
                handle
                width
                height
              }
              name
              role
              companyName
              githubLink
              twitterLink
            }
            secondarySectionText {
              raw
            }
            secondarySectionImage {
              handle
              width
              height
            }
            sponsors {
              id
              websiteLink
              altDescription
              sponsorLogo {
                handle
                width
                height
              }
            }
            bannerCTA {
              ctaLink
              bannerTitle
              bannerDescription {
                raw
              }
            }
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve('./src/templates/page.tsx')

  // Only publish pages with a `status === 'publish'` in production. This
  // excludes drafts, future posts, etc. They will appear in development,
  // but not in a production build.
  const allPages = data.allGraphCmsPage.edges.map(edge => edge.node)
  // const pages =
  //   process.env.NODE_ENV === 'production'
  //     ? getOnlyPublished(allPages)
  //     : allPages

  // Call `createPage()` once per GraphCMS page
  _.each(allPages, ({ id, ...page }) => {
    const fileName = `${page.slug.path === '/' ? 'index' : page.slug.path}`
    // createPrinterNode({
    //   id,
    //   fileName, // the filename of the image to be generated
    //   outputDir: 'og-images/page', // relative to the 'public' folder.
    //   data: {
    //     // The data you wish to pass down to the react component to be rendered
    //     title: pageTemplate.titleTag,
    //     description: pageTemplate.metaDescription,
    //   },
    //   component: require.resolve('./src/templates/page.tsx'), // the react component to be used.
    // })
    if (page.slug.path === '/') {
      createPage({
        path: '/',
        component: pageTemplate,
        context: {
          id,
          ...page,
          fileName,
        },
      })
    } else {
      createPage({
        path: `/${page.slug.path}/`,
        component: pageTemplate,
        context: {
          ...page,
          // fileName,
        },
      })
    }
  })
}
