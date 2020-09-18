import React from 'react'
import styled from '@emotion/styled'

import Header from '../header'
import Copyright from '../copyright'

interface BaseLayoutProp {
  children: JSX.Element | JSX.Element[]
}

export const TitleWrapper = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    display: flex;
    align-items: flex-start;
    &:before {
      content: '';
      background-color: #451040;
      right: -1000px;
      left: -1000px;
      top: calc(50% - 10px);
      height: 10px;
      position: absolute;
    }
  }
`

const Container = styled.div`
  @media (min-width: 1024px) {
    margin-top: 117px;
  }
`

const BaseLayout = ({ children }: BaseLayoutProp) => {
  return (
    <div className={`min-h-screen bg-primary px-4 overflow-hidden`}>
      <div className="container mx-auto">
        <Header />
        <Container className={`flex flex-col items-center mt-10`}>
          {children}
        </Container>
        <Copyright />
      </div>
    </div>
  )
}

export default BaseLayout
