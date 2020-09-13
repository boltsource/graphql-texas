import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface HeaderheaderDataStateType {
  data: {
    menu: {
      pages: {
        title: string
        slug: {
          path: string
          id: string
        }
      }[]
    }[]
  }
}

const Header = () => {
  const headerData: HeaderheaderDataStateType = useStaticQuery(graphql`
    query GetMainMenu {
      gcms {
        menus(where: { name: "Main" }) {
          pages {
            title
            slug {
              path
            }
          }
        }
      }
    }
  `)

  return (
    <div className="bg-gray-100 font-sans">
      {JSON.stringify(headerData, null, 2)}
    </div>
  )
}

export default Header
