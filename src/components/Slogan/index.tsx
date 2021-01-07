import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import Column from '../Column'
import LogoIcon from '../../assets/logo.svg'
import { SITE_TITLE } from '../../const'

const SloganContainer = styled(Column)`
  margin: 0 auto;
  display: flex;
`

const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  cursor: pointer;

  > svg {
    width: 2rem;
    height: 2rem;
  }
`

const LogoText = styled.span`
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
`

const SloganText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text3};
`

const Slogan = () => {
  return (
    <SloganContainer>
      <LogoWrapper>
        <LogoIcon />
        <LogoText>{SITE_TITLE}</LogoText>
      </LogoWrapper>
      <SloganText>
        即刻保存您的重要Twitte、微博到Filecoin
      </SloganText>
    </SloganContainer>
  )
}

export default Slogan
