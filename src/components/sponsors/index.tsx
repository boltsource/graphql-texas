import React from 'react'
import styled from '@emotion/styled'

import { TitleWrapper } from '../base-layout'

const StyledImage = styled.img`
  position: relative;
  display: block;
  height: 50px;
  width: auto;
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    height: 55px;
  }
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'first-logo' &&
    `
    mix-blend-mode: luminosity;
    filter: brightness(3);
    @media (min-width: 1024px) {
      padding-left: 40px;
    }
  `}
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'second-logo' &&
    `
    mix-blend-mode: luminosity;
    filter: brightness(0.7);
  `}
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'third-logo' &&
    `
    mix-blend-mode: luminosity;
    filter: brightness(1.25);
    @media (min-width: 1024px) {
      padding-right: 40px;
    }
  `}
`

interface SponsorProps {
  id?: string
  websiteLink: string
  altDescription: string
  sponsorLogo: {
    handle: string
    width: number
    height: number
  }
  imageEffect?: string
}

interface SponsorsProps {
  sponsors?: SponsorProps[]
  className?: string
}

const Sponsor = (props: SponsorProps) => {
  return (
    <div
      className={`flex flex-col justify-center align-middle ${props?.className ||
        ''}`}
    >
      <a
        href={props?.websiteLink}
        target="_blank"
        aria-label={props?.altDescription}
      >
        <StyledImage
          src={`https://media.graphcms.com/${props?.sponsorLogo.handle}`}
          imageEffect={props?.imageEffect}
        />
      </a>
    </div>
  )
}

const StyledHeading = styled.h3`
  @media (min-width: 1024px) {
    margin-left: 110px;
    &:before {
      position: absolute;
      content: '';
      background-color: #451040;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      left: -4px;
    }

    &:after {
      position: absolute;
      content: '';
      background-color: #451040;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      right: -4px;
    }
  }
`

const Container = styled.div`
  max-width: 1110px;
`

const InnerContainer = styled.div``

const Sponsors = (props: SponsorsProps) => {
  return (
    <div className="mb-24">
      <TitleWrapper>
        <StyledHeading className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2  lg:block lg:bg-primary relative lg:px-10">{`<Sponsors />`}</StyledHeading>
      </TitleWrapper>
      <InnerContainer className="lg:flex lg:justify-center">
        <Container className="lg:w-full lg:flex lg:justify-center">
          <div className="flex flex-col items-center justify-between lg:grid lg:grid-cols-3 mt-16 lg:w-9/12">
            {props?.sponsors &&
              props?.sponsors.map(({ id, ...s }, i) => {
                let idx = i + 1
                if (idx === 1 || i % 4 == 0) {
                  return (
                    <Sponsor
                      key={id}
                      {...{
                        ...s,
                        className: 'items-star',
                        imageEffect: 'first-logo',
                      }}
                    />
                  )
                }
                if (idx % 3 == 0) {
                  return (
                    <Sponsor
                      key={id}
                      {...{
                        ...s,
                        className: 'items-end',
                        imageEffect: 'third-logo',
                      }}
                    />
                  )
                }
                return (
                  <Sponsor
                    key={id}
                    {...{
                      ...s,
                      className: 'items-center',
                      imageEffect: 'second-logo',
                    }}
                  />
                )
              })}
          </div>
        </Container>
      </InnerContainer>
    </div>
  )
}

export default Sponsors
