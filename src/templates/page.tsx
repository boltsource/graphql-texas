import React from 'react'
import styled from '@emotion/styled'

import BaseLayout from '../components/base-layout'
import FeatureEventHero from '../components/feature-event-hero'
import IntroductionTitleText from '../components/introduction-title-text'
import OurSpeakers from '../components/our-speakers'
import Schedule from '../components/schedule'
import Sponsors from '../components/sponsors'
import CtaBanner from '../components/cta-banner'
import { Helmet } from 'react-helmet'

import { TextRichType, FeatureEventType } from '../types'

const SvgGeometry = styled.svg`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    width: 100%;
    right: 0;
    left: 0;
    height: auto;
    display: flex;
    max-height: 1442px;
  }
`

const GeometryDecoration = (props: any) => {
  return (
    <SvgGeometry viewBox="0 0 1440 797" fill="none" {...props}>
      <path
        d="M1430 10v770.036L38.718 10H1430z"
        stroke="#451040"
        strokeOpacity={0.6}
        strokeWidth={20}
      />
    </SvgGeometry>
  )
}

type TemplateProps = {
  ogImage?: any
  slug: {
    id: string
    path: string
  }
  copyright?: string
  titleTag: string
  metaDescription: string
  metaKeywords: string
  featureEvent: FeatureEventType
  mainSectionTitle: string
  mainSectionDescription: {
    raw?: {
      children?: {
        type: 'paragraph'
        children?: TextRichType[]
      }[]
    }
  }
  ourSpeakers: {
    id: string
    profileImage: {
      handle: string
      width: number
      height: number
    }
    name: string
    role: string
    companyName: string
    githubLink: string
    twitterLink: string
  }[]
  secondarySectionText: {
    raw?: {
      children?: {
        type: 'paragraph'
        children?: TextRichType[]
      }[]
    }
  }
  secondarySectionImage: {
    handle: string
    width: number
    height: number
  }
  sponsors?: {
    id: string
    websiteLink: string
    altDescription: string
    sponsorLogo: {
      handle: string
      width: number
      height: number
    }
  }[]
  bannerCTA: {
    ctaLink?: string
    bannerTitle: string
    bannerDescription: {
      raw?: {
        children?: {
          type: 'paragraph'
          children?: TextRichType[]
        }[]
      }
    }
  }
}

const PageTemplate = ({ pageContext }: { pageContext: TemplateProps }) => {
  return (
    <BaseLayout>
      <Helmet>
        <html lang="en" amp />
        <body className="root bg-primary" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://graphql-texas.org" />
        <title>{pageContext.titleTag || ''}</title>
        <meta name="description" content={pageContext.metaDescription || ''} />
        <meta name="keywords" content={pageContext.metaKeywords || ''} />
        <meta property="og:title" content={pageContext.titleTag || ''} />
        <meta property="og:url" content="https://graphql-texas.org" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={pageContext.metaDescription || ''}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageContext.titleTag || ''} />
        <meta
          name="twitter:description"
          content={pageContext.metaDescription || ''}
        />
        <meta name="twitter:url" content="https://graphql-texas.org" />
        <meta name="twitter:site" content="`@BoltSourceIO" />
        {/* <meta
          property="twitter:image"
          content={`https://graphql-texas.org/og-images/page/${pageContext.fileName}.png`}
        /> */}
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
      </Helmet>
      <GeometryDecoration />
      <div className="container">
        <FeatureEventHero {...pageContext.featureEvent} />
        <IntroductionTitleText
          title={pageContext.mainSectionTitle}
          text={pageContext.mainSectionDescription}
        />
        <OurSpeakers ourSpeakers={pageContext.ourSpeakers} />
        <Schedule
          speakers={pageContext?.featureEvent?.speakers}
          {...pageContext.featureEvent.schedule}
        />
        <Sponsors sponsors={pageContext?.sponsors} />
        <CtaBanner {...pageContext.bannerCTA} />
      </div>
    </BaseLayout>
  )
}

export default PageTemplate
