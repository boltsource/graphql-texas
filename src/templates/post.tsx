import React from 'react'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import BaseLayout from '../components/base-layout'

type TemplateProps = {
  data: {}
}

const BlogPostTemplate = ({ data }: TemplateProps) => {
  return (
    <BaseLayout>
      <div className={`container font-sans text-gray-800`}>
        {/* <Img 
          fluid={featured_media.localFile.childImageSharp.fluid}
          className="w-full"
          placeholderStyle={{ backgroundColor: `white` }}
        /> */}
        {/* <Link to={slug} className={`text-4xl font-sans text-gray-800 font-bold`}>{title}</Link> */}
        {/* <p className={`font-sans text-1xl mb-4`}>{date}</p> */}
      </div>
    </BaseLayout>
  )
}

// export const query = graphql`
// `

export default BlogPostTemplate
