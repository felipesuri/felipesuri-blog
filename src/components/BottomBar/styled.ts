import styled from 'styled-components'
import media from 'styled-media-query'

export const BottomBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  background: var(--bgSolid);
  flex-direction: row;
  padding: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
`

export const BottomBarItem = styled.div`
  display: block;

  ${media.lessThan('large')`
    padding: 0.9rem 0;
  `}
`
