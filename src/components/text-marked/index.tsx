import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const LineMark = styled.span`
  position: relative;
`

const mark = css`
  position: absolute;
  content: '';
  height: 30%;
  width: 100%;
  bottom: 0;
  left: 0;
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
    <span className={`${className} relative`}>
      {children}
      <LineMark css={isMarked ? mark : {}} className="bg-tertiary" />
    </span>
  )
}

export default TextMarked
