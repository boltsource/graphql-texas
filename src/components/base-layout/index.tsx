import React from 'react'

import Header from '../header'

interface BaseLayoutProp {
  children: JSX.Element
}

const BaseLayout = ({ children }: BaseLayoutProp) => {
  return (
    <div className={`min-h-screen bg-primary px-6`}>
      <Header />
      <div className={`flex flex-col items-center mt-10`}>{children}</div>
    </div>
  )
}

export default BaseLayout
