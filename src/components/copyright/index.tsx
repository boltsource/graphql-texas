import React from 'react'
import styled from '@emotion/styled'

const BackgroundContainer = styled.div`
  &:before {
    content: '';
    background-color: #451040;
    left: 0;
    right: 0;
    height: 50px;
    position: absolute;
  }
  @media (min-width: 1024px) {
    &:before {
      height: 55px;
    }
  }
`

const Copyright = () => {
  return (
    <>
      <BackgroundContainer className="h-10 w-full bg-quinary mt-24" />
      <BackgroundContainer className="w-full bg-quinary pb-4">
        <p className="justify-center font-poppins font-normal text-xs lg:text-base text-white text-center relative">
          {`All rights reserved by © GraphQL Texas ${new Date().getFullYear()} `}
        </p>
      </BackgroundContainer>
    </>
  )
}

export default Copyright
