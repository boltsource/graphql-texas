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

const Arrow = props => {
  return (
    <StyledSvg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M6 2.292l-6 6 1.415 1.415L6 5.122l4.585 4.585L12 8.292l-6-6z"
        fill="#fff"
      />
    </StyledSvg>
  )
}

const InnerAnimator = styled.div`
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;
  ${props =>
    props.isOpen &&
    `
  max-height: 100rem;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.5s;
  transition-property: max-height;
  `}
`

const ContainerAnimator = styled.div`
  opacity: 0;
  transform: translateY(-1rem);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  ${props =>
    props.isOpen &&
    `
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  `}
  @media (min-width: 1024px) {
    margin-top: 55px;
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
  const [isOpenCard, setIsOpenCard] = useState(false)
  return (
    <TimeSectionContainer
      className="rounded-lg overflow-hidden bg-secondary mt-10 relative cursor-pointer"
      onClick={() => setIsOpenCard(!isOpenCard)}
      tabIndex={0}
    >
      <Arrow
        onClick={() => setIsOpenCard(!isOpenCard)}
        rotate={isOpenCard ? 'true' : undefined}
      />
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
            <InnerAnimator isOpen={isOpenCard ? 'true' : null}>
              <ContainerAnimator
                className={`relative overflow-hidden transition-all ease-out duration-1000 hidden lg:block tracking-normal`}
                isOpen={isOpenCard ? 'true' : null}
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
              </ContainerAnimator>
            </InnerAnimator>
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
          className={`relative overflow-hidden transition-all ease-out duration-1000 lg:hidden ${
            !isOpenCard ? 'max-h-0' : ''
          }`}
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
      background-color: #024959;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      left: -4px;
    }

    &:after {
      position: absolute;
      content: '';
      background-color: #024959;
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
