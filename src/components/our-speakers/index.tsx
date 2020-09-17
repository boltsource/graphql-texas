import React from 'react'
import GraphImg from 'graphcms-image'
import styled from '@emotion/styled'

import { TitleWrapper } from '../base-layout'

// position: relative;
const ProfileContainer = styled.div`
  width: 16.875rem;
  &:before {
    transform: rotate(180deg);
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='414' height='540' viewBox='0 0 414 540' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='84' y='135' width='270' height='270'%3E%3Crect x='354' y='405' width='270' height='270' transform='rotate(-180 354 405)' fill='%23C4C4C4'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cline x1='451.461' y1='231.993' x2='179.157' y2='504.297' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='457.58' y1='238.112' x2='185.276' y2='510.417' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='463.699' y1='244.232' x2='191.395' y2='516.536' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='469.819' y1='250.35' x2='197.514' y2='522.654' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='475.938' y1='256.47' x2='203.634' y2='528.774' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='482.057' y1='262.589' x2='209.753' y2='534.893' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='488.177' y1='268.709' x2='215.873' y2='541.013' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='359.673' y1='140.205' x2='87.3689' y2='412.509' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='420.865' y1='201.397' x2='148.561' y2='473.701' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='329.077' y1='109.609' x2='56.7732' y2='381.913' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='390.27' y1='170.801' x2='117.966' y2='443.105' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='298.482' y1='79.0135' x2='26.1775' y2='351.318' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='445.342' y1='225.874' x2='173.038' y2='498.178' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='353.554' y1='134.086' x2='81.2498' y2='406.39' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='414.746' y1='195.278' x2='142.442' y2='467.582' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='322.958' y1='103.49' x2='50.6541' y2='375.794' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='384.151' y1='164.681' x2='111.846' y2='436.986' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='292.362' y1='72.8941' x2='20.0584' y2='345.198' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='439.223' y1='219.754' x2='166.919' y2='492.058' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='347.435' y1='127.967' x2='75.1306' y2='400.271' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='408.627' y1='189.159' x2='136.323' y2='461.463' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='316.839' y1='97.3708' x2='44.5349' y2='369.675' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='378.031' y1='158.563' x2='105.727' y2='430.867' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='286.243' y1='66.7747' x2='13.9392' y2='339.079' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='267.886' y1='48.4174' x2='-4.41819' y2='320.722' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='243.408' y1='23.9407' x2='-28.8957' y2='296.245' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='433.104' y1='213.636' x2='160.8' y2='485.94' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='341.316' y1='121.847' x2='69.0115' y2='394.152' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='402.508' y1='183.04' x2='130.204' y2='455.344' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='310.72' y1='91.2514' x2='38.4158' y2='363.556' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='371.912' y1='152.444' x2='99.6082' y2='424.748' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='280.124' y1='60.6553' x2='7.82009' y2='332.959' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='261.767' y1='42.298' x2='-10.5373' y2='314.602' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='237.289' y1='17.8213' x2='-35.0149' y2='290.125' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='231.17' y1='11.7019' x2='-41.134' y2='284.006' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='225.051' y1='5.58255' x2='-47.2532' y2='277.887' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='218.932' y1='-0.535974' x2='-53.3723' y2='271.768' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='426.985' y1='207.516' x2='154.68' y2='479.82' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='335.196' y1='115.728' x2='62.8924' y2='388.032' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='396.389' y1='176.92' x2='124.085' y2='449.224' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='304.601' y1='85.132' x2='32.2966' y2='357.436' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='365.793' y1='146.324' x2='93.489' y2='418.628' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='274.005' y1='54.5368' x2='1.70095' y2='326.841' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='249.528' y1='30.0593' x2='-22.7766' y2='302.363' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='255.647' y1='36.1786' x2='-16.6575' y2='308.483' stroke='%2308A6CA' stroke-width='5'/%3E%3C/g%3E%3C/svg%3E%0A");
    height: 371px;
    width: 371px;
    display: block;
    bottom: -159px;
    left: 0;
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

const Github = props => {
  return (
    <a
      href={props?.githubLink}
      target="_blank"
      className="flex flex-row items-center font-poppins font-normal"
      style={{
        color: 'rgba(255, 255, 255, 0.7)',
        marginLeft: '1rem',
        zIndex: 2,
      }}
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
    </a>
  )
}

const Speaker = props => {
  return (
    <div className="mt-12 flex flex-col items-center">
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
        className="text-base font-poppins font-normal text-center"
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        {props.role} at {props.companyName}
      </p>
      <div className="flex flex-row mt-1">
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
      background-color: #024959;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      left: -4px;
    }

    &:after {
      position: absolute;
      content: '';
      background-color: #024959;
      height: 10px;
      width: 10px;
      border-radius: 50px;
      top: 21px;
      right: -4px;
    }
  }
`

const OurSpeakers = (props: OurSpeakersProps) => {
  return (
    <div>
      <TitleWrapper>
        <StyledHeading className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2 lg:block lg:bg-primary relative lg:px-10">{`<Our Speakers />`}</StyledHeading>
      </TitleWrapper>
      <div className="lg:grid lg:grid-cols-3 lg:my-10">
        {props.ourSpeakers &&
          props.ourSpeakers.map(speaker => (
            <Speaker key={speaker.id} {...speaker} />
          ))}
      </div>
    </div>
  )
}

export default OurSpeakers
