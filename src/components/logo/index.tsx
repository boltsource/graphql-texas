import React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  z-index: 2;
  @media (min-width: 1024px) {
    margin-left: 85px;
    margin-top: -6px;
  }
`

const Logo: React.FC = props => {
  return (
    <StyledSvg
      width={54}
      height={57}
      viewBox="0 0 54 57"
      fill="none"
      {...props}
    >
      <path
        d="M5.029 15c.536 0 .971.391.971.874V41.1c0 .497-.448.9-1 .9s-1-.403-1-.9V15.926c0-.511.46-.926 1.029-.926zM47.543 15c.805 0 1.457.435 1.457.971V41c0 .552-.672 1-1.5 1s-1.5-.448-1.5-1V16c0-.552.672-1 1.5-1h.043z"
        fill="#D64292"
      />
      <path
        d="M27.473 53L3 39.974l1.268-2.025L28.74 50.975 27.473 53zm21.26-33.95L24.258 6.025 25.527 4 50 17.026l-1.268 2.025z"
        fill="#D64292"
      />
      <path
        d="M4.231 19L3 16.983 26.769 4 28 6.018 4.231 19zM28.088 52L27 50.245 47.912 39 49 40.755 28.088 52z"
        fill="#D64292"
      />
      <path
        d="M52.3 42.25h0c-1.41 2.308-4.551 3.095-7.003 1.77-2.452-1.327-3.29-4.285-1.88-6.594 1.41-2.307 4.552-3.094 7.004-1.768 2.467 1.34 3.304 4.284 1.88 6.592zM10.569 19.573c-1.41 2.308-4.552 3.095-7.004 1.77-2.452-1.327-3.29-4.285-1.88-6.594 1.41-2.307 4.552-3.094 7.004-1.768 2.452 1.34 3.29 4.284 1.88 6.592zM1.7 42.252c-1.41-2.309-.573-5.253 1.88-6.593 2.45-1.326 5.578-.54 7.003 1.769 1.41 2.308.572 5.252-1.88 6.592-2.467 1.326-5.594.539-7.003-1.768zm41.732-22.677c-1.41-2.309-.572-5.253 1.88-6.593 2.452-1.326 5.579-.54 7.004 1.769 1.41 2.308.572 5.252-1.88 6.592-2.452 1.326-5.594.539-7.004-1.768zM27 56c-2.833 0-5.125-2.155-5.125-4.823 0-2.668 2.292-4.823 5.125-4.823s5.125 2.155 5.125 4.823C32.125 53.832 29.833 56 27 56zm0-45.354c-2.833 0-5.125-2.155-5.125-4.823C21.875 3.155 24.167 1 27 1s5.125 2.155 5.125 4.823c0 2.668-2.292 4.823-5.125 4.823z"
        fill="#D64292"
        stroke="#D64292"
      />
      <path
        d="M20.891 25.043l.603.094.025-.651.425-11.364.585-.122 4.066.515.403 4.895.033.396.357.114 1.348.431.015.005.015.004 1.555.395.157.305.1.195.198.075.738.279.088.033h1.359l.62.262.14.06.15-.026 2.115-.372.105.38h.577l.034.169.092.464h.929l.212 2.804.005.07.02.067.59 1.9.072.228.2.11.035.018.143.446-.235 3.082-.309.662-1.844.286-.501.077.032.54.017.288-.04.253-.223.484-.3.246-.07.058-.05.078-.208.33-1.545.31-.377.075-.064.404-.03.191-.666.595-.026.024-.023.027-.948 1.089-.135.154-.012.211-.21 3.875-.006.108.03.103.068.228-1.661-.294-1.358-1.46-.411-2.355-.084-.479h-.524l-.594-1.06-.509-1.47-.024-.07-.04-.061-1.454-2.229-.083-.126-.13-.067-.597-.308-.19-.316-.162-.27H22.494l-.014.001-.906.05-.158.01-.129.097-.337.253-.177.133-.044.225-.084.425-.177.288-.006.01-.006.011-.178.32H19.856l-.888-.656-.476-.641-.014-.019-.015-.017-.3-.343-.146-1.206-.005-.04-.01-.04-.337-1.316-.111-.432h-.648l-.061-.045-1.424-2.001-.404-.728-.017-.08h2.605l1.688.1 1.598.249z"
        stroke="#D64292"
        strokeWidth={2}
      />
    </StyledSvg>
  )
}

export default Logo
