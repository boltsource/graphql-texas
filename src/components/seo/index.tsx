import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = data => {
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
      <meta
        property="og:image"
        content="https://og-image.vercel.app/og-image.png"
      />
      <meta
        property="twitter:image"
        content="https://og-image.vercel.app/og-image.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
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
