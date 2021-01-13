
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LogoIcon from '../../assets/logo.svg'
import Row from '../../components/Row'
import Settings from '../../components/Settings'
import { SITE_TITLE } from '../../const'

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 1000px;
  height: calc(100vh - 3rem);
`

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
  min-width: auto;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.bg1};
  z-index: 1000;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0 .5rem;
  `}
`

const LogoWrapper = styled.div`
  display: flex;
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
  margin-left: .5rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 500;
`

const HeaderSetting = styled(Row)`
  width: auto;
  cursor: pointer;

  > span {
    margin-right: .5rem;
    color: ${({ theme }) => theme.text3};
  }
`

const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-grow: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: calc(100% - 1rem);
  `}
`

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: ${({ theme }) => theme.footerHeight};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text4};
`

interface BaseProps {
  children: React.ReactChild
}

const BaseLayout = ({ children }: BaseProps) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Link href="/">
          <LogoWrapper>
            <LogoIcon />
            <LogoText>{SITE_TITLE}</LogoText>
          </LogoWrapper>
        </Link>
        <HeaderSetting>
          <Settings />
        </HeaderSetting>
      </HeaderContainer>
      <MainContainer>
        {children}
      </MainContainer>
      <FooterContainer>
        &copy; 2020 FileVault All Rights Reserved.
      </FooterContainer>
    </LayoutContainer>
  )
}

export default BaseLayout