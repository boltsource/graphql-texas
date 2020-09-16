import React from 'react'
import GraphImg from 'graphcms-image'

import styled from '@emotion/styled'

const ProfileContainer = styled.div`
  position: relative;
  max-width: 16.875rem;
  &:before {
    content: '',
    background-image: url("data:image/svg+xml,%3Csvg width='414' height='540' viewBox='0 0 414 540' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='84' y='135' width='270' height='270'%3E%3Crect x='354' y='405' width='270' height='270' transform='rotate(-180 354 405)' fill='%23C4C4C4'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cline x1='451.461' y1='231.993' x2='179.157' y2='504.297' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='457.58' y1='238.112' x2='185.276' y2='510.417' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='463.699' y1='244.232' x2='191.395' y2='516.536' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='469.819' y1='250.35' x2='197.514' y2='522.654' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='475.938' y1='256.47' x2='203.634' y2='528.774' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='482.057' y1='262.589' x2='209.753' y2='534.893' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='488.177' y1='268.709' x2='215.873' y2='541.013' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='359.673' y1='140.205' x2='87.3689' y2='412.509' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='420.865' y1='201.397' x2='148.561' y2='473.701' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='329.077' y1='109.609' x2='56.7732' y2='381.913' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='390.27' y1='170.801' x2='117.966' y2='443.105' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='298.482' y1='79.0135' x2='26.1775' y2='351.318' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='445.342' y1='225.874' x2='173.038' y2='498.178' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='353.554' y1='134.086' x2='81.2498' y2='406.39' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='414.746' y1='195.278' x2='142.442' y2='467.582' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='322.958' y1='103.49' x2='50.6541' y2='375.794' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='384.151' y1='164.681' x2='111.846' y2='436.986' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='292.362' y1='72.8941' x2='20.0584' y2='345.198' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='439.223' y1='219.754' x2='166.919' y2='492.058' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='347.435' y1='127.967' x2='75.1306' y2='400.271' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='408.627' y1='189.159' x2='136.323' y2='461.463' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='316.839' y1='97.3708' x2='44.5349' y2='369.675' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='378.031' y1='158.563' x2='105.727' y2='430.867' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='286.243' y1='66.7747' x2='13.9392' y2='339.079' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='267.886' y1='48.4174' x2='-4.41819' y2='320.722' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='243.408' y1='23.9407' x2='-28.8957' y2='296.245' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='433.104' y1='213.636' x2='160.8' y2='485.94' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='341.316' y1='121.847' x2='69.0115' y2='394.152' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='402.508' y1='183.04' x2='130.204' y2='455.344' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='310.72' y1='91.2514' x2='38.4158' y2='363.556' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='371.912' y1='152.444' x2='99.6082' y2='424.748' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='280.124' y1='60.6553' x2='7.82009' y2='332.959' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='261.767' y1='42.298' x2='-10.5373' y2='314.602' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='237.289' y1='17.8213' x2='-35.0149' y2='290.125' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='231.17' y1='11.7019' x2='-41.134' y2='284.006' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='225.051' y1='5.58255' x2='-47.2532' y2='277.887' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='218.932' y1='-0.535974' x2='-53.3723' y2='271.768' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='426.985' y1='207.516' x2='154.68' y2='479.82' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='335.196' y1='115.728' x2='62.8924' y2='388.032' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='396.389' y1='176.92' x2='124.085' y2='449.224' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='304.601' y1='85.132' x2='32.2966' y2='357.436' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='365.793' y1='146.324' x2='93.489' y2='418.628' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='274.005' y1='54.5368' x2='1.70095' y2='326.841' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='249.528' y1='30.0593' x2='-22.7766' y2='302.363' stroke='%2308A6CA' stroke-width='5'/%3E%3Cline x1='255.647' y1='36.1786' x2='-16.6575' y2='308.483' stroke='%2308A6CA' stroke-width='5'/%3E%3C/g%3E%3C/svg%3E%0A");
    position: absolute;
    height: 271px;
    width: 271px;
    display: block;
    top: 500px;
    left: 0;
  }
`

const Speaker = props => {
  return (
    <div className="mt-12">
      <ProfileContainer>
        {props?.profileImage && (
          <GraphImg image={props?.profileImage} maxWidth={270} />
        )}
      </ProfileContainer>
    </div>
  )
}

interface OurSpeakersProps {
  ourSpeakers: {
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

const OurSpeakers = (props: OurSpeakersProps) => {
  return (
    <div>
      <h3 className="text-center lg:text-left font-semibold font-montserrat text-2xl lg:text-4xl text-white mb-2">{`<Our Speakers />`}</h3>
      {props.ourSpeakers &&
        props.ourSpeakers.map(speaker => <Speaker {...speaker} />)}
    </div>
  )
}

export default OurSpeakers
