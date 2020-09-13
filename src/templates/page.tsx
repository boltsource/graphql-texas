import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import BaseLayout from '../components/base-layout'

type TextRich =
  | {
      bold: string
      text: string
    }
  | {
      bold: string
      text: string
    }
  | {
      text: string
    }

type TemplateProps = {
  slug: {
    id: string
    path: string
  }
  titleTag: string
  metaDescription: string
  metaKeywords: string
  featureEvent: {
    eventDate: string
    name: {
      raw?: {
        type: 'paragraph'
        children?: TextRich[]
      }[]
    }
    sponsorInfo: {
      raw?: {
        type: string
        children?:
          | {
              bold: string
              text: string
            }[]
          | {
              bold: string
              text: string
            }[]
      }[]
    }
    schedule: {
      timeSections: {
        title: string
        eventDateTime: string
        description: {
          raw?: TextRich[]
        }
      }
    }
  }
  mainSectionTitle: string
  mainSectionDescription: {
    raw?: TextRich[]
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

const PageTemplate = (data: TemplateProps) => {
  return (
    <BaseLayout>
      <div className={`container font-sans text-gray-800 p-4`}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </BaseLayout>
  )
}

export default PageTemplate
