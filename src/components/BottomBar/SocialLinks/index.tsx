import React from 'react'
import { DonateHeart } from '@styled-icons/boxicons-solid/DonateHeart'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'

import * as S from './styled'

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.List>
      <S.Item>
        <S.LinkInternal to="/donate" title="Faça uma doação" target="_self">
          <DonateHeart />
        </S.LinkInternal>
      </S.Item>

      <S.Item>
        <S.LinkExternal
          href="https://github.com/felipesuri"
          title="Meu Github"
          target="_blank"
        >
          <Github />
        </S.LinkExternal>
      </S.Item>
      
      <S.Item>
        <S.LinkExternal
          href="https://linkedin.com/in/felipesuri"
          title="Meu Linkedin"
          target="_blank"
        >
          <Linkedin />
        </S.LinkExternal>
      </S.Item>
      
      <S.Item>
        <S.LinkExternal
          href="https://twitter.com/_felipesuri"
          title="Meu Twitter"
          target="_blank"
        >
          <Twitter />
        </S.LinkExternal>
      </S.Item>
    </S.List>
  </S.SocialLinksWrapper>
)

export default SocialLinks
