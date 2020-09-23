/* eslint-disable no-unused-vars */ // TODO: remove these eslint
/* eslint-disable consistent-return */
const _ = require('lodash')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')
// const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images')

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
                id
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
      allGraphCmsEvent {
        edges {
          node {
            eventDate
            id
            schedule {
              id
              timeSections {
                author
                id
                title
                youtube
                eventDateTime
                description {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve('./src/templates/page.tsx')
  const pastEventsTemplate = path.resolve('./src/templates/past-events.tsx')

  const allPages = data.allGraphCmsPage.edges.map(edge => edge.node)
  const allEvents = data.allGraphCmsEvent.edges.map(edge => edge.node)

  // Call `createPage()` once per GraphCMS page
  _.each(allPages, ({ id, ...page }) => {
    const fileName = `${page.slug.path === '/' ? 'index' : page.slug.path}`
    if (page.slug.path === '/') {
      createPage({
        path: '/',
        component: pageTemplate,
        context: {
          id,
          ...page,
        },
      })
    } else if (page.slug.path === 'past-events') {
      createPage({
        path: page.slug.path,
        component: pastEventsTemplate,
        context: {
          id,
          allEvents,
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
