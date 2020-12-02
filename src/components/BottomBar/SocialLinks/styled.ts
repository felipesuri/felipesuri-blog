import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const SocialLinksWrapper = styled.nav`
  margin: auto;
  width: 100%;
`

export const List = styled.ul`
  display: inline-flex;
  align-items: center;
`

export const Item = styled.li`
  margin: auto 0.5rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: color 1s;

    &:hover {
      color: #aa52cc;
    }
  }
`

export const LinkInternal = styled(AniLink)`
  color: #000;
  text-decoration: none;
`

export const LinkExternal = styled.a`
  color: #000;
  text-decoration: none;
`
