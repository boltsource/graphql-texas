import React from 'react'
import styled from '@emotion/styled'

import ParagraphText from '../paragraph-text'

const TextContainer = styled.div`
  @media (min-width: 1024px) {
    max-width: 16rem;
    margin-left: 90px;
    margin-top: 5px;
  }
`

const BoxDecoration = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    width: 5px;
    right: 70px;
    height: 166px;
    background-color: #fff;
    display: block;
    &:before {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='128' height='130' viewBox='0 0 128 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='3' fill='white'/%3E%3Ccircle cx='3' cy='34' r='3' fill='white'/%3E%3Ccircle cx='3' cy='65' r='3' fill='white'/%3E%3Ccircle cx='3' cy='96' r='3' fill='white'/%3E%3Ccircle cx='3' cy='127' r='3' fill='white'/%3E%3Ccircle cx='34' cy='3' r='3' fill='white'/%3E%3Ccircle cx='34' cy='34' r='3' fill='white'/%3E%3Ccircle cx='34' cy='65' r='3' fill='white'/%3E%3Ccircle cx='34' cy='96' r='3' fill='white'/%3E%3Ccircle cx='34' cy='127' r='3' fill='white'/%3E%3Ccircle cx='65' cy='3' r='3' fill='white'/%3E%3Ccircle cx='65' cy='34' r='3' fill='white'/%3E%3Ccircle cx='65' cy='65' r='3' fill='white'/%3E%3Ccircle cx='65' cy='96' r='3' fill='white'/%3E%3Ccircle cx='65' cy='127' r='3' fill='white'/%3E%3Ccircle cx='96' cy='3' r='3' fill='white'/%3E%3Ccircle cx='96' cy='34' r='3' fill='white'/%3E%3Ccircle cx='96' cy='65' r='3' fill='white'/%3E%3Ccircle cx='96' cy='96' r='3' fill='white'/%3E%3Ccircle cx='96' cy='127' r='3' fill='white'/%3E%3Ccircle cx='125' cy='3' r='3' fill='white'/%3E%3Ccircle cx='125' cy='34' r='3' fill='white'/%3E%3Ccircle cx='125' cy='65' r='3' fill='white'/%3E%3Ccircle cx='125' cy='96' r='3' fill='white'/%3E%3Ccircle cx='125' cy='127' r='3' fill='white'/%3E%3C/svg%3E%0A");
      width: 128px;
      height: 130px;
      right: 106px;
      position: absolute;
      top: 169px;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`

import { TextRichType } from '../../types'

interface IntroductionTitleTextProps {
  title?: string
  text?: {
    raw?: {
      children?: {
        type: 'paragraph'
        children?: TextRichType[]
      }[]
    }
  }
}

const Container = styled.div`
  @media (min-width: 1024px) {
    margin-top: 190px;
  }
`

const TextWrapper = styled.div`
  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`

const IntroductionTitleText = (props: IntroductionTitleTextProps) => {
  return (
    <Container className="mt-10 flex flex-col lg:grid lg:grid-cols-2 pb-10 lg:mb-20">
      <div className="lg:flex items-start lg:relative">
        <BoxDecoration />
        <TextContainer>
          {props.title && (
            <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white">
              {props.title}
            </h3>
          )}
        </TextContainer>
      </div>
      <TextWrapper className="mt-8 lg:mt-0">
        <p className="font-poppins text-xl text-white text-center lg:text-left lg:max-w-xl">
          {props.text &&
            props.text?.raw?.children?.map(p => (
              <ParagraphText
                key={JSON.stringify(p)}
                {...p}
                className="font-light"
              />
            ))}
        </p>
      </TextWrapper>
    </Container>
  )
}

export default IntroductionTitleText
