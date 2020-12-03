import styled from 'styled-components'
import media from 'styled-media-query'

export const AuthorWrapper = styled.article`
  color: var(--primaryColor);
  display: column;

  padding-top: 2rem;
  padding-bottom: 2.5rem;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const AuthorTitle = styled.h1`
  font-family: Roboto, sans-serif;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  color: var(--primaryColor);

  padding-bottom: 26px;
`

export const AuthorContent = styled.p`
  text-align: justify;
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
  line-height: 34px;

  padding-bottom: 14px;
`
