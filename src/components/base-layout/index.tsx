import React from 'react'

import Header from '../header'

interface BaseLayoutProp {
  children: JSX.Element | JSX.Element[]
}

const BaseLayout = ({ children }: BaseLayoutProp) => {
  return (
    <div className={`min-h-screen bg-primary px-4`}>
      <div className="container mx-auto">
        <Header />
        <div className={`flex flex-col items-center mt-10 lg:mt-32`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
