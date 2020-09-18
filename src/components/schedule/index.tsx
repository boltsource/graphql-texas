import React, { useState } from 'react'
import moment from 'moment'
import styled from '@emotion/styled'
import { TitleWrapper } from '../base-layout'

import ParagraphText from '../paragraph-text'

import { TextRichType } from '../../types'

const StyledSvg = styled.svg`
  position: absolute;
  top: 28px;
  right: 20px;
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  ${props =>
    props.rotate &&
    `
    transform: rotate(0deg);
  `}
  @media (min-width: 1024px) {
    top: 49px;
    right: 40px;
    height: 15px;
    width: 15px;
  }
`

const TimeSectionContainer = styled.div`
  max-width: 100%;
  @media (min-width: 1024px) {
    max-width: 1110px;
    margin-top: 70px;
  }
`

const StyledCard = styled.div`
  @media (min-width: 1024px) {
    min-height: 165px;
    padding-top: 43px;
    padding-left: 52px;
  }
`

const StyledParagraph = styled.div`
  @media (min-width: 1024px) {
    margin-left: 110px;
    margin-top: 15px;
  }
`

const TimeSection = props => {
  return (
    <TimeSectionContainer className="rounded-lg overflow-hidden bg-secondary mt-10 relative">
      <StyledCard className="px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-start">
          <div className="lg:w-32">
            <p className="text-white font-poppins font-semibold text-base text-center lg:text-left mb-2 lg:mb-0 lg:mt-1">
              {moment(props?.eventDateTime).format('h:mm A')} CST
            </p>
          </div>
          <div className="lg:ml-10">
            <p className="text-white font-semibold font-montserrat text-center lg:text-left text-xl mb-2">
              {props?.title}
            </p>
            <div
              className={`relative overflow-hidden transition-all ease-out duration-1000 hidden lg:block tracking-normal`}
            >
              <p className="text-center lg:text-left lg:mb-4">
                {props.description &&
                  props.description?.raw?.children?.map(p => (
                    <ParagraphText
                      key={JSON.stringify(p)}
                      {...p}
                      additionalClassNames="font-poppins text-white text-base lg:text-lg"
                    />
                  ))}
              </p>
            </div>
          </div>
        </div>
        {props?.author && (
          <StyledParagraph
            className="font-semibold font-poppins text-center lg:text-left text-lg mb-4 mt-8"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            {props.author}
          </StyledParagraph>
        )}
        <div
          className={`relative overflow-hidden transition-all ease-out duration-1000 lg:hidden max-h-0`}
        >
          <p className="text-center lg:text-left">
            {props.description &&
              props.description?.raw?.children?.map(p => (
                <ParagraphText
                  key={JSON.stringify(p)}
                  {...p}
                  additionalClassNames="font-poppins text-white text-base"
                />
              ))}
          </p>
        </div>
      </StyledCard>
    </TimeSectionContainer>
  )
}

interface SchedulePropTypes {
  timeSections: {
    author: string
    title: string
    eventDateTime: string
    description: {
      raw?: {
        type: 'paragraph'
        children?: TextRichType[]
      }
    }
  }[]
}

const StyledHeading = styled.h3`
  @media (min-width: 1024px) {
    margin-left: 110px;
    &:before {
      position: absolute;
      content: '';
      background-color: #451040;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      left: -4px;
    }

    &:after {
      position: absolute;
      content: '';
      background-color: #451040;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      right: -4px;
    }
  }
`

const Schedule = (props: SchedulePropTypes) => {
  return (
    <div className="mb-24 mt-32">
      <TitleWrapper>
        <StyledHeading className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2 lg:block lg:bg-primary relative lg:px-10">{`<Schedule />`}</StyledHeading>
      </TitleWrapper>
      <div className="flex flex-col items-center">
        {props?.timeSections.map(({ id, ...section }) => (
          <TimeSection key={id} {...{ ...section }} />
        ))}
      </div>
    </div>
  )
}

export default Schedule
