import React from 'react'
import TextMarked from '../text-marked'

const ParagraphText = ({
  type,
  children,
  className = '',
  additionalClassNames = '',
}: {
  type: string
  children?: { bold?: boolean; underline?: boolean; text: string }[]
  className?: string
  additionalClassNames?: string
}) => {
  if (type === 'paragraph' && children) {
    return children.map((p, i) => (
      <TextMarked key={i} isMarked={p.underline || false}>
        <span
          className={`${
            p?.bold ? 'font-bold' : className || 'font-normal'
          } ${additionalClassNames} relative`}
        >
          {p.text}
        </span>
      </TextMarked>
    ))
  }

  return <React.Fragment />
}

export default ParagraphText
