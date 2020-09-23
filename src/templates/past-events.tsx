import React, { useState } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

import Seo from '../components/seo'
import BaseLayout, { TitleWrapper } from '../components/base-layout'
import { FeatureEventType } from '../types'
import ParagraphText from '../components/paragraph-text'

interface TemplateProps {
  pageContext: {
    ogImage?: any
    slug: {
      id: string
      path: string
    }
    titleTag: string
    metaDescription: string
    metaKeywords: string
    mainSectionTitle: string
    allEvents: any
  }
}

const StyledHeading = styled.h3`
  @media (min-width: 1024px) {
    position: relative;
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

const EventSectionWrapper = styled.div`
  position: relative;
`

const TimeSectionContainer = styled.div`
  max-width: 100%;
  @media (min-width: 1024px) {
    max-width: 1110px;
    margin-bottom: 70px;
  }
`

const StyledCard = styled.div`
  @media (min-width: 1024px) {
    min-height: 165px;
    padding-top: 50px;
    padding-left: 60px;
  }
`

const StyledParagraph = styled.div`
  @media (min-width: 1024px) {
    margin-top: 15px;
  }
`

const TimeContainer = styled.div`
  @media (min-width: 1024px) {
    min-width: 110px;
  }
`

const StyledSvg = styled.svg`
  position: absolute;
  top: 28px;
  right: 20px;
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  height: 12px;
  width: 12px;
  ${props =>
    props.rotate &&
    `
    transform: rotate(0deg);
  `}
  @media (min-width: 1024px) {
    height: 18px;
    width: 18px;
    margin-top: 15px;
    margin-right: 5px;
  }
`

const Arrow = props => {
  return (
    <StyledSvg
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

const StyledIframe = styled.iframe`
  height: 181px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 480px;
    width: 971px;
  }
`

const TimeSection = props => {
  const [isOpenCard, setIsOpenCard] = useState(false)
  return (
    <TimeSectionContainer className="rounded-lg overflow-hidden bg-secondary mt-10 lg:mt-8 relative">
      <Arrow
        onClick={() => setIsOpenCard(!isOpenCard)}
        rotate={isOpenCard ? 'true' : undefined}
      />
      <StyledCard className="px-6 py-4">
        <div className="flex flex-col justify-start">
          <TimeContainer>
            <p className="text-white font-poppins font-semibold text-base text-center lg:text-left mb-2 lg:mb-0 lg:mt-1 lg:hidden">
              {moment(props?.eventDateTime).format('D MMMM, YYYY')}
            </p>
          </TimeContainer>
          <div>
            <p className="text-white font-semibold font-montserrat text-center lg:text-left text-xl lg:text-2xl mb-2">
              {props?.title}
            </p>
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
            <InnerAnimator isOpen={isOpenCard ? 'true' : null}>
              <ContainerAnimator
                className={`relative overflow-hidden transition-all ease-out duration-1000 tracking-normal`}
                isOpen={isOpenCard ? 'true' : null}
              >
                {props?.youtube && (
                  <StyledIframe
                    className="mb-4 lg:mb-10"
                    src={props.youtube}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
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
      </StyledCard>
    </TimeSectionContainer>
  )
}

const StyledEventTimeContainer = styled(TimeContainer)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-top: 50px;
    margin-left: 30px;
  }
`

const EventSection = props => {
  return (
    <EventSectionWrapper>
      <StyledEventTimeContainer>
        <p className="hidden text-white font-poppins font-semibold text-base text-center lg:text-left mb-2 lg:mb-0 lg:mt-1 lg:flex">
          {moment(props?.eventDateTime).format('D MMM, YYYY')}
        </p>
      </StyledEventTimeContainer>
      {props.schedule &&
        props.schedule.timeSections &&
        props.schedule.timeSections.map(timeSection => {
          return <TimeSection key={timeSection.id} {...timeSection} />
        })}
    </EventSectionWrapper>
  )
}

const BlogTemplate = ({ pageContext }: { pageContext: TemplateProps }) => {
  return (
    <BaseLayout>
      <Seo {...pageContext} />
      <div className="container">
        <TitleWrapper>
          <StyledHeading className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2 lg:block lg:bg-primary relative lg:px-10">{`<Our Past Events />`}</StyledHeading>
        </TitleWrapper>
        <div className="flex flex-col items-center">
          {pageContext.allEvents &&
            pageContext.allEvents.map(({ id, ...event }) => {
              if (
                moment(event.eventDate, 'YYYY-MM-DD')
                  .add(1, 'days')
                  .isBefore()
              ) {
                return <EventSection key={id} {...event} />
              }
            })}
        </div>
      </div>
    </BaseLayout>
  )
}

export default BlogTemplate
