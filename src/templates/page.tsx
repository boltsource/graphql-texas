import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'

import BaseLayout from '../components/base-layout'
import FeatureEventHero from '../components/feature-event-hero'
import IntroductionTitleText from '../components/introduction-title-text'

import { TextRichType, FeatureEventType } from '../types'

const GeometryDecoration = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    width: 100%;
    right: 0;
    left: 0;
    height: 50rem;
    display: flex;
    background-color: transparent;
    border-top: 10px solid #024d5f;
    border-right: 10px solid #024d5f;
  }
`

type TemplateProps = {
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
    profileImage: {
      url: string
    }
    name: string
    role: string
    companyName: string
    githubLink: string
    twitterLink: string
  }
}

const PageTemplate = ({ pageContext }: { pageContext: TemplateProps }) => {
  return (
    <BaseLayout>
      <GeometryDecoration />
      <div className="container">
        <FeatureEventHero {...pageContext.featureEvent} />
        <IntroductionTitleText
          title={pageContext.mainSectionTitle}
          text={pageContext.mainSectionDescription}
        />
      </div>
    </BaseLayout>
  )
}

export default PageTemplate
