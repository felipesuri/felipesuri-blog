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
      color: var(--purple);
    }
  }
`

export const LinkInternal = styled(AniLink)`
  color: var(--primaryColor);
  text-decoration: none;
`

export const LinkExternal = styled.a`
  color: var(--primaryColor);
  text-decoration: none;
`
