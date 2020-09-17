import React from 'react'
import styled from '@emotion/styled'

import ParagraphText from '../paragraph-text'

import { TextRichType } from '../types'

const StyledAnchor = styled.a`
  max-width: 250px;
  @media (min-width: 1024px) {
    min-width: 17.75rem;
  }
`

const BackgroundContainer = styled.div`
  @media (max-width: 1023px) {
    &:before {
      content: '';
      background-color: #024959;
      left: 0;
      right: 0;
      height: 279px;
      position: absolute;
  }
`

interface CtaBannerProps {
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

const CtaBanner = (props: CtaBannerProps) => {
  return (
    <div className="lg:my-20">
      <BackgroundContainer className="h-10 w-full bg-quinary lg:hidden" />
      <BackgroundContainer className="pb-10">
        <div className="flex flex-col items-center lg:bg-quinary lg:py-20 lg:rounded-lg">
          <div className="flex flex-col items-center relative lg:max-w-lg">
            <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2">{`<${props?.bannerTitle ||
              ''} />`}</h3>
            <p className="font-poppins text-base text-white text-center mt-8">
              {props.bannerDescription &&
                props.bannerDescription?.raw?.children?.map(p => (
                  <ParagraphText
                    key={JSON.stringify(p)}
                    {...p}
                    className="font-normal"
                  />
                ))}
            </p>
            <StyledAnchor
              href={props?.ctaLink}
              target="_blank"
              className="bg-quinary text-white font-normal font-poppins py-3 px-10 lg:px-6 border-white border-2 text-base mt-10 text-center cursor-pointer"
            >
              Become a sponsor
            </StyledAnchor>
          </div>
        </div>
      </BackgroundContainer>
    </div>
  )
}

export default CtaBanner
