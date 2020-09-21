import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = data => {
  const { ogImageDefault } = useStaticQuery(
    graphql`
      query {
        ogImageDefault: file(absolutePath: { regex: "/images/social/" }) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `,
  )

  const ogImage = `https://www.graphql-texas.org${ogImageDefault.childImageSharp.fixed.src}`
  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang: 'en',
      }}
      defaultTitle={data?.titleTag || ''}
      titleTemplate={`%s`}
    >
      {/* General tags */}
      {/* <meta name="image" content={image} /> */}
      <meta name="description" content={data?.metaDescription || ''} />
      <body className="root bg-primary" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://graphql-texas.org" />
      <title>{data?.titleTag || ''}</title>
      <meta name="description" content={data?.metaDescription || ''} />
      <meta name="keywords" content={data?.metaKeywords || ''} />
      <meta property="og:title" content={data?.titleTag || ''} />
      <meta property="og:url" content="https://graphql-texas.org" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={data?.metaDescription || ''} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={ogImage} />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={data?.titleTag || ''} />
      <meta property="og:type" content={`website`} />
      <meta property="og:url" content="https://graphql-texas.org" />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:description" content={data?.metaDescription || ''} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@BoltSourceIO" />
      <meta name="twitter:title" content={data?.titleTag || ''} />
      {/* <meta name="twitter:image" content={image} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={data?.metaDescription || ''} />
      <meta name="twitter:url" content="https://graphql-texas.org" />
      <meta name="twitter:site" content="`@BoltSourceIO" />
    </Helmet>
  )
}

export default SEO
