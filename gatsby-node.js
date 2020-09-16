/* eslint-disable no-unused-vars */ // TODO: remove these eslint
/* eslint-disable consistent-return */
const _ = require('lodash')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      gcms {
        pages {
          slug {
            id
            path
          }
          titleTag
          metaDescription
          metaKeywords
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
            profileImage {
              url
            }
            name
            role
            companyName
            githubLink
            twitterLink
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve('./src/templates/page.tsx')

  // Only publish pages with a `status === 'publish'` in production. This
  // excludes drafts, future posts, etc. They will appear in development,
  // but not in a production build.
  const allPages = data.gcms.pages
  // const pages =
  //   process.env.NODE_ENV === 'production'
  //     ? getOnlyPublished(allPages)
  //     : allPages

  // Call `createPage()` once per GraphCMS page
  _.each(allPages, page => {
    if (page.slug.path === '/') {
      createPage({
        path: `/`,
        component: pageTemplate,
        context: {
          ...page,
        },
      })
    } else {
      createPage({
        path: `/${page.slug.path}/`,
        component: pageTemplate,
        context: {
          ...page,
        },
      })
    }
  })
}
