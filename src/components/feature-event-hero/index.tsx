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
    <div className="flex flex-col justify-center mt-10">
      <a
        href={'#'}
        target="_blank"
        className="flex justify-center bg-transparent text-quaternary font-normal font-poppins py-3 px-12 border-tertiary border-4 text-xl"
      >
        <div className="flex items-center">
          <CalendarIcon />
          <span className="ml-3">{`${eventTimeFormated.format('LL')}`}</span>
        </div>
      </a>
      <Link
        to={'/#Schedule'}
        target="_blank"
        className="bg-transparent text-quaternary font-normal font-poppins py-3 px-12 border-quaternary border-4 text-base mt-5 text-center"
      >
        View Schedule
      </Link>
      <a
        href={props?.meetupLink}
        target="_blank"
        className="bg-quinary text-white font-normal font-poppins py-3 px-12 border-tertiary border-4 text-base mt-5 text-center"
      >
        Make your reservation
      </a>
    </div>
  )
}

const FeatureEventHero = (props: FeatureEventType) => {
  const eventName = props?.name?.raw?.children
  const sponsorInfo = props?.sponsorInfo?.raw?.children
  console.log({ props })
  return (
    <div>
      <div>
        <h2 className="font-montserrat text-white text-3xl text-center">
          {eventName &&
            eventName.map((p, i) => <ParagraphText {...p} key={i} />)}
        </h2>
        <p className="font-poppins text-white text-base text-center mt-10">
          {sponsorInfo &&
            sponsorInfo.map((p, i) => <ParagraphText {...p} key={i} />)}
        </p>
      </div>
      <CTAbuttons meetupLink={props.meetupLink} eventDate={props.eventDate} />
    </div>
  )
}

export default FeatureEventHero
