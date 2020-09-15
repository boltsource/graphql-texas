import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'

import TextMarked from '../text-marked'
import CalendarIcon from '../calendar-icon'

import { FeatureEventType } from '../../types'

const ParagraphText = ({ type, children }) => {
  if (type === 'paragraph') {
    return children.map((p, i) => (
      <TextMarked key={i} isMarked={p.underline || false}>
        <span className={`${p?.bold ? 'font-bold' : 'font-normal'} z-10`}>
          {p.text}
        </span>
      </TextMarked>
    ))
  }

  return <React.Fragment />
}

const CTAbuttons = props => {
  const eventTimeFormated = moment(props?.eventDate)
  return (
    <div className="flex flex-col justify-center lg:block mt-10">
      <div className="flex justify-center bg-transparent text-quaternary font-normal font-poppins py-3 px-10 border-tertiary border-2 text-xl max-w-sm lg:mb-10">
        <div className="flex items-center">
          <CalendarIcon />
          <span className="ml-6">{`${eventTimeFormated.format('LL')}`}</span>
        </div>
      </div>
      <Link
        to={'/#Schedule'}
        target="_blank"
        className="bg-transparent text-quaternary font-normal font-poppins py-3 px-10 lg:px-6 border-quaternary border-2 text-base mt-5 text-center"
        style={{
          maxWidth: '11.25rem',
        }}
      >
        View Schedule
      </Link>
      <a
        href={props?.meetupLink}
        target="_blank"
        className="bg-quinary text-white font-normal font-poppins py-3 px-10 lg:px-6 border-tertiary border-2 text-base mt-5 text-center lg:ml-8"
        style={{
          maxWidth: '17.75rem',
        }}
      >
        Make your reservation
      </a>
    </div>
  )
}

const FeatureEventHero = (props: FeatureEventType) => {
  const eventName = props?.name?.raw?.children
  const sponsorInfo = props?.sponsorInfo?.raw?.children
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="max-w-lg">
        <div>
          <h2 className="font-montserrat text-white text-3xl text-center lg:text-left">
            {eventName &&
              eventName.map((p, i) => <ParagraphText {...p} key={i} />)}
          </h2>
          <p className="font-poppins text-white text-base text-center lg:text-left mt-10">
            {sponsorInfo &&
              sponsorInfo.map((p, i) => <ParagraphText {...p} key={i} />)}
          </p>
        </div>
        <CTAbuttons meetupLink={props.meetupLink} eventDate={props.eventDate} />
      </div>
      <div className="hidden lg:flex"></div>
    </div>
  )
}

export default FeatureEventHero
