/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'

import BaseLayout from './src/components/base-layout'

// eslint-disable-next-line no-unused-vars
export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  // setBodyAttributes({
  //   className: 'bg-gray-lightBackground',
  // })
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>
}
