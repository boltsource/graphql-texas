import React from 'react'
import styled from '@emotion/styled'

import BaseLayout from '../components/base-layout'
import FeatureEventHero from '../components/feature-event-hero'
import IntroductionTitleText from '../components/introduction-title-text'
import OurSpeakers from '../components/our-speakers'
import Schedule from '../components/schedule'
import Sponsors from '../components/sponsors'
import CtaBanner from '../components/cta-banner'
import Seo from '../components/seo'

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
      <Seo {...pageContext} />
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
