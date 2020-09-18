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

const InnerContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Container = styled.div`
  max-width: 1110px;
`

const ImageContainer = styled.div`
  max-width: 409px;
  @media (min-width: 1024px) {
    margin-left: 35px;
    margin-top: 17px;
  }
`

const SectionTextImage = (props: SectionTextImageProps) => {
  return (
    <InnerContainer>
      <Container className="my-32 lg:mb-20 lg:mt-16 lg:flex lg:flex-row-reverse">
        <div className="mb-10 lg:w-2/5 lg:pb-5 lg:flex lg:flex-col lg:items-right">
          <ImageContainer>
            {props?.secondarySectionImage && (
              <StyledGraphImage image={props.secondarySectionImage} />
            )}
          </ImageContainer>
        </div>
        <div className="lg:w-3/5 lg:flex lg:flex-col lg:pb-6 justify-end lg:pr-10">
          <p className="text-center lg:text-left lg:flex lg:flex-col lg:pl-2">
            {props.secondarySectionText &&
              props.secondarySectionText?.raw?.children?.map(p => (
                <ParagraphText
                  key={JSON.stringify(p)}
                  {...p}
                  additionalClassNames="font-poppins text-white text-base lg:mb-10"
                />
              ))}
          </p>
        </div>
      </Container>
    </InnerContainer>
  )
}

export default SectionTextImage
