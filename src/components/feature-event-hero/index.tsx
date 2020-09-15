import React from 'react'
import TextMarked from '../text-marked'

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

const FeatureEventHero = (props: FeatureEventType) => {
  const eventName = props?.name?.raw?.children
  const sponsorInfo = props?.sponsorInfo?.raw?.children
  console.log({ props })
  return (
    <div>
      <h2 className="font-montserrat text-white text-3xl text-center">
        {eventName && eventName.map((p, i) => <ParagraphText {...p} key={i} />)}
      </h2>
      <p className="font-poppins text-white text-base text-center mt-10">
        {sponsorInfo &&
          sponsorInfo.map((p, i) => <ParagraphText {...p} key={i} />)}
      </p>
    </div>
  )
}

export default FeatureEventHero
