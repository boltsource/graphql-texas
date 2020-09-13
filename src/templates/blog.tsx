import React from 'react'
import { graphql, Link } from 'gatsby'
// import styled from '@emotion/styled'
import Img, { FixedObject } from 'gatsby-image'
// import Img from '../components/image'

import BaseLayout from '../components/base-layout'

interface TemplateProps {
  data: {}
  pageContext: {}
}

interface PostCardProps {}

const PostCard = ({}: // slug,
// title,
// featureImage,
// author,
// excerpt,
// tags,
// timeReading,
// date
PostCardProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white mb-6">
      <div className="px-2 pb-5">
        {/* <Link className="text-4xl justify-between font-bold" to={slug}><h1>{ title }</h1></Link> */}
        <div className="flex items-center">
          <div className="text-sm">
            {/* <div
              className="text-gray-900 leading-none text-xl font-bold"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            /> */}
            {/* <span className="font-thin text-gray-700">(7 hours ago)</span> */}
          </div>
        </div>
      </div>
      <div className="flex items-center pb-5 px-5">
        <div className="w-1/3 flex">
          <div className="text-sm">{/* <span>{`${date}`}</span> */}</div>
        </div>
        <div className="w-1/3"></div>
        <div className="w-1/3 float-right text-right">
          <div className="text-sm">
            {/* <span>{`${timeReading} min read`}</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

// @ts-ignore
const BlogTemplate = ({ data, pageContext }: TemplateProps) => {
  return (
    <BaseLayout>
      <div className={`container`}>
        <div className={`p-4 md:flex md:flex-col md:items-center`}>
          {/* {nodes.map(({ id, slug, title, featured_media, author, excerpt, tags, acf, date}) => {
            return (
                <PostCard
                  key={id}
                  slug={slug}
                  title={title}
                  featureImage={featured_media.localFile.childImageSharp.fixed}
                  author={author.avatar_urls.wordpress_96}
                  excerpt={excerpt}
                  tags={tags}
                  timeReading={acf.time_reading}
                  date={date}
                />
              )
          })} */}
        </div>
      </div>
    </BaseLayout>
  )
}

// export const query = graphql`
// `

export default BlogTemplate
