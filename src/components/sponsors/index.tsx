import React from 'react'
import styled from '@emotion/styled'

const StyledImage = styled.img`
  position: relative;
  display: block;
  height: 29px;
  width: auto;
  @media (min-width: 1024px) {
    height: 55px;
  }
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'first-logo' &&
    `
    mix-blend-mode: screen;
  `}
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'second-logo' &&
    `
    mix-blend-mode: luminosity;
  `}
  ${props =>
    props?.imageEffect &&
    props.imageEffect === 'third-logo' &&
    `
    mix-blend-mode: color-dodge;
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

const Sponsors = (props: SponsorsProps) => {
  return (
    <div className="mb-24">
      <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2">{`<Sponsors />`}</h3>
      <div className="lg:w-full lg:flex lg:justify-center">
        <div className="grid grid-cols-3 mt-16 lg:w-9/12">
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
      </div>
    </div>
  )
}

export default Sponsors
