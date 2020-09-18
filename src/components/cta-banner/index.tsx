import React from 'react'
import styled from '@emotion/styled'

import ParagraphText from '../paragraph-text'

import { TextRichType } from '../types'

const StyledAnchor = styled.a`
  max-width: 250px;
  width: 100%;
  @media (min-width: 1024px) {
    max-width: 250px;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
  }
`

const BackgroundContainer = styled.div`
  max-width: 1110px;
  width: 100%;
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

const StyledContainer = styled(BackgroundContainer)``

const InnerContainer = styled.div`
  position: relative;
  border-radius: 30px;
  @media (min-width: 1024px) {
    margin-top: 10px;
    min-height: 370px;
    justify-content: center;
    &:before {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='129' height='130' viewBox='0 0 129 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg style='mix-blend-mode:overlay'%3E%3Ccircle cx='3.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='127' r='3' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A");
      width: 128px;
      height: 130px;
      right: 50px;
      position: absolute;
      top: 50px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &:after {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='129' height='130' viewBox='0 0 129 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg style='mix-blend-mode:overlay'%3E%3Ccircle cx='3.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='3.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='34.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='65.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='96.5' cy='127' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='3' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='34' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='65' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='96' r='3' fill='white'/%3E%3Ccircle cx='125.5' cy='127' r='3' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A");
      width: 128px;
      height: 130px;
      left: 50px;
      position: absolute;
      bottom: 50px;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`

const CtaBanner = (props: CtaBannerProps) => {
  return (
    <div className="lg:my-46 lg:flex lg:flex-col lg:items-center">
      <BackgroundContainer className="h-10 w-full bg-quinary lg:hidden" />
      <StyledContainer className="pb-10">
        <InnerContainer className="flex flex-col items-center lg:bg-quinary lg:rounded-lg">
          <div className="flex flex-col items-center relative lg:max-w-lg">
            <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2">{`<${props?.bannerTitle ||
              ''} />`}</h3>
            <p className="font-poppins text-base lg:text-lg text-white text-center mt-8 lg:mt-6">
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
              //@ts-ignore
              href={encodeURI(props?.ctaLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quinary text-white font-normal font-poppins py-3 px-10 lg:px-5 border-white border-2 text-base lg:text-lg mt-10 text-center cursor-pointer"
            >
              Become a sponsor
            </StyledAnchor>
          </div>
        </InnerContainer>
      </StyledContainer>
    </div>
  )
}

export default CtaBanner
