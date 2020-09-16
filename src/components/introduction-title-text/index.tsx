import React from 'react'
import styled from '@emotion/styled'

import ParagraphText from '../paragraph-text'

const TextContainer = styled.div`
  @media (min-width: 1024px) {
    max-width: 16rem;
  }
`

const BoxDecoration = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    width: 5px;
    right: 90px;
    height: 166px;
    background-color: #fff;
    display: block;
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

const IntroductionTitleText = (props: IntroductionTitleTextProps) => {
  return (
    <div className="mt-10 lg:mt-24 flex flex-col lg:grid lg:grid-cols-2 pb-10 lg:pb-64">
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
      <div className="mt-8 lg:mt-0">
        <div className="font-poppins text-xl text-white text-center lg:text-left lg:max-w-xl">
          {props.text &&
            props.text?.raw?.children?.map(p => (
              <ParagraphText {...p} className="font-light" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default IntroductionTitleText
