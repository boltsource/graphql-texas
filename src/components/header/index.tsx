import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Logo from '../logo'
import TextMarked from '../text-marked'

interface HeaderheaderDataStateType {
  gcms: {
    menu: {
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
}

const Header = () => {
  const {
    gcms: {
      menu: { pages },
    },
  }: HeaderheaderDataStateType = useStaticQuery(graphql`
    query GetMainMenu {
      gcms {
        menu(where: { name: "Main" }) {
          pages {
            id
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
    <div className="bg-primary pt-5 border-secondary flex flex-row items-center justify-between">
      <Logo />
      <ul className="flex mr-1 lg:mr-64">
        {pages.map(({ id, title, slug }) => (
          <li key={id}>
            <TextMarked className="mr-2" isMarked>
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
        <li>
          <TextMarked className="mr-2">
            <Link
              className="font-poppins text-xs md:text-base text-white font-semibold px-1 cursor-pointer relative"
              to="/"
              style={{
                zIndex: 2,
              }}
            >
              Past Events
            </Link>
          </TextMarked>
        </li>
        <li>
          <TextMarked className="mr-2">
            <Link
              className="font-poppins text-xs md:text-base text-white font-semibold px-1 cursor-pointer relative"
              to="/"
              style={{
                zIndex: 2,
              }}
            >
              Call for papers
            </Link>
          </TextMarked>
        </li>
      </ul>
    </div>
  )
}

export default Header
