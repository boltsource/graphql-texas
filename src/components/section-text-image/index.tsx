import React from 'react'
import GraphImg from 'graphcms-image'
import styled from '@emotion/styled'

import ParagraphText from '../paragraph-text'
import { TextRichType } from '../../types'

const StyledGraphImage = styled(GraphImg)`
  max-width: 301px;
  @media (min-width: 1024px) {
    max-width: 409px;
  }
`

interface SectionTextImageProps {
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
}

const SectionTextImage = (props: SectionTextImageProps) => {
  return (
    <div className="my-32 lg:flex lg:flex-row-reverse">
      <div className="mb-10 lg:mb-0 lg:w-2/5 lg:pb-5">
        {props?.secondarySectionImage && (
          <StyledGraphImage image={props.secondarySectionImage} />
        )}
      </div>
      <div className="lg:w-3/5 lg:flex lg:flex-col justify-end lg:pr-10">
        <p className="text-center lg:text-left lg:flex lg:flex-col">
          {props.secondarySectionText &&
            props.secondarySectionText?.raw?.children?.map(p => (
              <ParagraphText
                key={JSON.stringify(p)}
                {...p}
                additionalClassNames="font-poppins text-white text-base"
              />
            ))}
        </p>
      </div>
    </div>
  )
}

export default SectionTextImage
