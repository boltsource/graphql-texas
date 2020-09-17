import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import GraphImg from 'graphcms-image'

import ParagraphText from '../paragraph-text'
import CalendarIcon from '../calendar-icon'

import { FeatureEventType } from '../../types'

const StyledLink = styled(Link)`
  z-index: 2;
  @media (min-width: 1024px) {
    min-width: 11.25rem;
  }
`

const StyledAnchor = styled.a`
  z-index: 2;
  @media (min-width: 1024px) {
    min-width: 17.75rem;
  }
`

const TitleContainer = styled.div`
  @media (min-width: 1024px) {
    max-width: 32.75rem;
    margin-right: 2rem;
    margin-top: 0.5rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  max-width: 30.3rem;
  margin-top: 15px;
  margin-left: 4.4rem;
  &:after {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='148' height='211' viewBox='0 0 148 211' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M87.2767 3.12595L4.0522 68.404L147.139 201.093L87.2767 3.12595Z' fill='%23024959'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    height: 13rem;
    width: 10rem;
    top: -46px;
    left: 41px;
  }
`

const CTAbuttons = props => {
  const eventTimeFormated = moment(props?.eventDate)
  return (
    <div className="flex flex-col justify-center lg:self-start lg:ml-20 mt-10">
      <div className="flex justify-center bg-transparent text-quaternary font-normal font-poppins py-4 px-10 border-tertiary border-2 text-xl lg:text-8xl lg:max-w-sm lg:mb-10">
        <div className="flex items-center">
          <CalendarIcon />
          <span className="ml-6">{`${eventTimeFormated.format(
            'DD MMMM, YYYY',
          )}`}</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <StyledLink
          to={'/#Schedule'}
          target="_blank"
          className="bg-transparent text-quaternary font-normal font-poppins py-4 px-10 lg:px-5 border-quaternary border-2 text-base lg:text-lg mt-5 lg:mt-0 text-center cursor-pointer"
        >
          View Schedule
        </StyledLink>
        <StyledAnchor
          href={props?.meetupLink}
          target="_blank"
          className="bg-quinary text-white font-normal font-poppins py-4 px-10 lg:px-5 border-tertiary border-2 text-base lg:text-xl mt-5 lg:mt-0 text-center lg:ml-8 cursor-pointer"
        >
          Make your reservation
        </StyledAnchor>
      </div>
    </div>
  )
}

const FeatureEventHero = (props: FeatureEventType) => {
  const eventName = props?.name?.raw?.children
  const sponsorInfo = props?.sponsorInfo?.raw?.children
  return (
    <div className="flex lg:grid lg:grid-cols-2 flex-col lg:flex-row">
      <div className="lg:flex lg:flex-col">
        <TitleContainer className="lg:self-end">
          <h2 className="font-montserrat text-white text-3xl lg:text-7xl text-center lg:text-left">
            {eventName &&
              eventName.map((p, i) => <ParagraphText {...p} key={i} />)}
          </h2>
          <p className="font-poppins text-white text-base text-center lg:text-left mt-10 lg:mt-5 tracking-widest">
            {sponsorInfo &&
              sponsorInfo.map((p, i) => <ParagraphText {...p} key={i} />)}
          </p>
        </TitleContainer>
        <CTAbuttons meetupLink={props.meetupLink} eventDate={props.eventDate} />
      </div>
      <div className="hidden lg:block">
        <ImageContainer className="rounded-full border-4 border-secondary p-4">
          <div className="rounded-full">
            {props?.eventImage && (
              <GraphImg
                image={props?.eventImage}
                maxWidth={486}
                className="rounded-full"
              />
            )}
          </div>
        </ImageContainer>
      </div>
    </div>
  )
}

export default FeatureEventHero
