import React from 'react'

import SocialLinks from './SocialLinks'

import * as S from './styled'

const BottomBar = () => (
  <S.BottomBarWrapper>
    <S.BottomBarItem>
      <SocialLinks />
    </S.BottomBarItem>
  </S.BottomBarWrapper>
)

export default BottomBar
