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
        />
      </a>
    </div>
  )
}

const Sponsors = (props: SponsorsProps) => {
  console.log({ props })
  return (
    <div className="mb-20">
      <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2">{`<Sponsors />`}</h3>
      <div className="lg:w-full lg:flex lg:justify-center">
        <div className="grid grid-cols-3 mt-16 lg:w-9/12">
          {props?.sponsors &&
            props?.sponsors.map(({ id, ...s }, i) => {
              let idx = i + 1
              console.log({ idx })
              if (idx === 1 || i % 4 == 0) {
                return (
                  <Sponsor key={id} {...{ ...s, className: 'items-star' }} />
                )
              }
              if (idx % 3 == 0) {
                return (
                  <Sponsor key={id} {...{ ...s, className: 'items-end' }} />
                )
              }
              return (
                <Sponsor key={id} {...{ ...s, className: 'items-center' }} />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
