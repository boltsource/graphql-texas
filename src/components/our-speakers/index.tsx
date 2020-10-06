import React from 'react'
import GraphImg from 'graphcms-image'
import styled from '@emotion/styled'

import { TitleWrapper } from '../base-layout'

// position: relative;
const ProfileContainer = styled.div`
  width: 16.875rem;
  @media (min-width: 1024px) {
    min-height: 312px;
    width: 312px;
    &:before {
      transform: rotate(180deg);
      content: '';
      position: absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='624' height='624' viewBox='0 0 624 624' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='156' y='156' width='312' height='312'%3E%3Crect x='468' y='468' width='312' height='312' transform='rotate(-180 468 468)' fill='%23C4C4C4'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cline x1='580.347' y1='267.806' x2='265.684' y2='582.468' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='587.418' y1='274.877' x2='272.756' y2='589.539' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='594.489' y1='281.948' x2='279.826' y2='596.61' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='601.56' y1='289.019' x2='286.898' y2='603.682' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='608.632' y1='296.09' x2='293.969' y2='610.753' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='615.702' y1='303.161' x2='301.04' y2='617.824' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='622.774' y1='310.232' x2='308.111' y2='624.895' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='474.281' y1='161.74' x2='159.618' y2='476.402' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='544.992' y1='232.45' x2='230.329' y2='547.113' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='438.925' y1='126.384' x2='124.263' y2='441.047' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='509.636' y1='197.095' x2='194.974' y2='511.757' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='403.571' y1='91.029' x2='88.908' y2='405.692' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='573.276' y1='260.735' x2='258.614' y2='575.397' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='467.21' y1='154.669' x2='152.548' y2='469.331' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='537.921' y1='225.38' x2='223.258' y2='540.042' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='431.855' y1='119.313' x2='117.192' y2='433.976' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='502.565' y1='190.024' x2='187.903' y2='504.687' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='396.499' y1='83.9582' x2='81.8367' y2='398.621' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='566.205' y1='253.664' x2='251.542' y2='568.326' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='460.139' y1='147.598' x2='145.476' y2='462.26' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='530.849' y1='218.308' x2='216.187' y2='532.971' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='424.783' y1='112.242' x2='110.121' y2='426.905' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='495.494' y1='182.953' x2='180.832' y2='497.615' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='389.428' y1='76.8869' x2='74.7654' y2='391.549' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='368.215' y1='55.674' x2='53.5525' y2='370.337' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='339.931' y1='27.3893' x2='25.2683' y2='342.052' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='559.134' y1='246.592' x2='244.471' y2='561.255' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='453.068' y1='140.527' x2='138.405' y2='455.189' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='523.779' y1='211.237' x2='209.116' y2='525.9' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='417.713' y1='105.171' x2='103.05' y2='419.834' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='488.423' y1='175.882' x2='173.76' y2='490.545' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='382.357' y1='69.8161' x2='67.6941' y2='384.479' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='361.144' y1='48.6027' x2='46.4812' y2='363.265' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='332.86' y1='20.3185' x2='18.197' y2='334.981' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='325.788' y1='13.2473' x2='11.1257' y2='327.91' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='318.718' y1='6.17646' x2='4.05542' y2='320.839' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='311.647' y1='-0.894831' x2='-3.01587' y2='313.768' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='552.063' y1='239.522' x2='237.4' y2='554.184' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='445.997' y1='133.456' x2='131.334' y2='448.118' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='516.707' y1='204.166' x2='202.045' y2='518.829' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='410.641' y1='98.1003' x2='95.9788' y2='412.763' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='481.352' y1='168.811' x2='166.69' y2='483.473' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='375.286' y1='62.7448' x2='60.6238' y2='377.407' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='347.002' y1='34.4606' x2='32.3396' y2='349.123' stroke='%23FF5BC9' stroke-width='5'/%3E%3Cline x1='354.072' y1='41.5314' x2='39.4099' y2='356.194' stroke='%23FF5BC9' stroke-width='5'/%3E%3C/g%3E%3C/svg%3E%0A");
      height: 441px;
      width: 441px;
      display: block;
      background-repeat: no-repeat;
      top: 50px;
      left: 30px;
    }
  }
`

const ProfileImageWrapper = styled.div`
  width: 16.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Twitter = props => {
  return (
    <a
      href={props?.twitterLink}
      target="_blank"
      className="flex flex-row items-center font-poppins font-normal cursor-pointer"
      style={{
        color: 'rgba(255, 255, 255, 0.7)',
        zIndex: 2,
      }}
    >
      <svg width={33} height={32} viewBox="0 0 33 32" fill="none">
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M10.563 29.002c12.076 0 18.68-10.005 18.68-18.68 0-.285 0-.568-.018-.85A13.358 13.358 0 0032.5 6.075c-1.198.531-2.47.88-3.77 1.033a6.589 6.589 0 002.886-3.631 13.16 13.16 0 01-4.17 1.593A6.574 6.574 0 0022.66 3c-3.605 0-6.571 2.966-6.571 6.572 0 .5.057.998.17 1.485a18.648 18.648 0 01-13.53-6.86c-1.734 2.984-.837 6.85 2.032 8.765a6.516 6.516 0 01-2.98-.822v.083a6.587 6.587 0 005.267 6.436 6.558 6.558 0 01-2.964.113 6.586 6.586 0 006.133 4.56A13.176 13.176 0 01.5 26.051a18.589 18.589 0 0010.063 2.945"
            fill="#fff"
            fillOpacity={0.7}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" transform="translate(.5)" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
      <span className="ml-2">Twitter</span>
    </a>
  )
}

const StyledGithub = styled.a`
  z-index: 2;
  margin-left: 1rem;
  color: rgba(255, 255, 255, 0.7);
  @media (min-width: 1024px) {
    margin-left: 2.5rem;
  }
`

const Github = props => {
  return (
    <StyledGithub
      href={props?.githubLink}
      target="_blank"
      className="flex flex-row items-center font-poppins font-normal"
    >
      <svg width={33} height={32} viewBox="0 0 33 32" fill="none">
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M16.5 0C7.664 0 .5 7.164.5 16c0 7.07 4.584 13.066 10.942 15.182.8.146 1.092-.348 1.092-.77 0-.38-.014-1.642-.022-2.978-4.45.966-5.39-1.887-5.39-1.887-.728-1.848-1.776-2.34-1.776-2.34-1.454-.992.11-.973.11-.973 1.606.112 2.452 1.649 2.452 1.649 1.428 2.445 3.746 1.738 4.656 1.328.146-1.031.56-1.738 1.016-2.137-3.552-.404-7.288-1.777-7.288-7.908 0-1.748.624-3.174 1.646-4.294-.164-.406-.714-2.034.158-4.236 0 0 1.341-.43 4.4 1.64a15.23 15.23 0 014.004-.538c1.36.006 2.729.184 4.006.54 3.053-2.072 4.396-1.64 4.396-1.64.875 2.204.325 3.83.16 4.234 1.026 1.12 1.645 2.546 1.645 4.294 0 6.146-3.742 7.5-7.307 7.896.577.497 1.086 1.47 1.086 2.961 0 2.14-.021 3.864-.021 4.391 0 .426.29.924 1.101.768C27.92 29.062 32.5 23.066 32.5 16c0-8.836-7.164-16-16-16z"
            fill="#fff"
            fillOpacity={0.7}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" transform="translate(.5)" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
      <span className="ml-2">Github</span>
    </StyledGithub>
  )
}

const Speaker = props => {
  return (
    <div className="mt-6 flex flex-col items-center">
      <ProfileImageWrapper className="relative">
        <ProfileContainer>
          {props?.profileImage && (
            <GraphImg image={props?.profileImage} maxWidth={270} />
          )}
        </ProfileContainer>
      </ProfileImageWrapper>
      <h3 className="font-montserrat text-white font-semibold text-xl lg:text-3xl mt-10 text-center">
        {props.name}
      </h3>
      <p
        className="text-base lg:text-lg lg:mt-2 font-poppins font-normal text-center tracking-normal"
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <span className="font-normal">{props.role} at</span>{' '}
        <span className="font-semibold">{props.companyName}</span>
      </p>
      <div className="flex flex-row mt-1 lg:mt-2">
        <Twitter twitterLink={props.twitterLink} />
        <Github githubLink={props.githubLink} />
      </div>
    </div>
  )
}

interface OurSpeakersProps {
  ourSpeakers: {
    id: string
    profileImage: {
      handle: string
      width: number
      height: number
    }
    name: string
    role: string
    companyName: string
    githubLink: string
    twitterLink: string
  }
}

const StyledHeading = styled.h3`
  @media (min-width: 1024px) {
    position: relative;
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
  @media (min-width: 1024px) {
    width: 1130px;
  }
`

const OurSpeakers = (props: OurSpeakersProps) => {
  return (
    <div>
      <TitleWrapper>
        <StyledHeading className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2 lg:block lg:bg-primary relative lg:px-10">{`<Our Speakers />`}</StyledHeading>
      </TitleWrapper>
      <div className="lg:flex lg:flex-col lg:items-center">
        <Container className="lg:grid lg:grid-cols-3 lg:my-10">
          {props.ourSpeakers &&
            props.ourSpeakers.map(speaker => (
              <Speaker key={speaker.id} {...speaker} />
            ))}
        </Container>
      </div>
    </div>
  )
}

export default OurSpeakers
