import React from 'react'
import styled from '@emotion/styled'

const LineMark = styled.span`
  position: relative;

  ${props =>
    props?.isMarked &&
    `
    background-image: linear-gradient(120deg, #FF39BE 100%, #FF39BE 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  `}
`

interface TextMarkedProps {
  isMarked?: boolean
  children: JSX.Element
  className?: string
  addMarginBottom?: boolean
}

const TextMarked = ({
  children,
  className = '',
  isMarked = false,
  addMarginBottom = false,
}: TextMarkedProps) => {
  return (
    <LineMark
      isMarked={isMarked}
      className={`${addMarginBottom ? 'lg:mb-5' : ''} ${className}`}
    >
      {children}
    </LineMark>
  )
}

export default TextMarked
