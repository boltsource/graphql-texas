import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import Logo from '../logo'
import TextMarked from '../text-marked'

interface HeaderheaderDataStateType {
  graphCmsMenu: {
    id: string
    name: string
    pages: {
      id: string
      title: string
      slug: {
        path: string
        id: string
      }
    }[]
  }
}

const StyledList = styled.ul`
  @media (min-width: 1024px) {
    margin-right: 174px;
  }
`

const Header = () => {
  const data: HeaderheaderDataStateType = useStaticQuery(graphql`
    query {
      graphCmsMenu(name: { eq: "Main" }) {
        id
        name
        pages {
          id
          title
          slug {
            path
            id
          }
        }
      }
    }
  `)

  const {
    graphCmsMenu: { pages },
  } = data

  return (
    <div className="bg-primary pt-5 lg:pt-10 border-secondary flex flex-row items-center justify-between">
      <Logo />
      <StyledList className="flex mr-1">
        {pages.map(({ id, title, slug }) => (
          <li key={id}>
            <TextMarked
              className="mr-6"
              isMarked={window.location.pathname === slug.path}
            >
              <Link
                className="font-poppins text-xs md:text-base text-white font-semibold px-1 cursor-pointer relative"
                to={slug.path}
                style={{
                  zIndex: 2,
                }}
              >
                {title}
              </Link>
            </TextMarked>
          </li>
        ))}
      </StyledList>
    </div>
  )
}

export default Header
