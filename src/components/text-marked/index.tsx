import React from 'react'
import styled from '@emotion/styled'

const LineMark = styled.span`
  position: relative;

  ${props =>
    props?.isMarked &&
    `&:before {
    position: absolute;
    content: '';
    height: 30%;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #9A1D77;
  `}
`

interface TextMarkedProps {
  isMarked?: boolean
  children: JSX.Element
  className?: string
}

const TextMarked = ({
  children,
  className = '',
  isMarked = false,
}: TextMarkedProps) => {
  return (
    <LineMark isMarked={isMarked} className={`lg:mb-5 ${className}`}>
      {children}
    </LineMark>
  )
}

export default TextMarked
