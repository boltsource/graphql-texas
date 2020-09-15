import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import BaseLayout from '../components/base-layout'
import FeatureEventHero from '../components/feature-event-hero'

import { TextRichType, FeatureEventType } from '../types'

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
    raw?: TextRichType[]
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
      <div className={`container font-sans text-gray-800`}>
        <FeatureEventHero {...pageContext.featureEvent} />
      </div>
    </BaseLayout>
  )
}

export default PageTemplate
