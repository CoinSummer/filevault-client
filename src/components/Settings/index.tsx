import React from 'react'
import styled from 'styled-components'
import { signOut, useSession } from 'next-auth/client'
import Toggle from '../../components/Toggle'
import { i18n, withTranslation } from '../../i18n'
import { useDarkModeManager } from '../../state/user/hooks'
import { ButtonOutlined } from '../Button'

const LogoutWrapper = styled.a`
  margin-right: 1rem;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;

  &:hover {

    > i {
      color: ${({ theme }) => theme.text2};
    }
  }

  > i {
    font-size: 26px;
    color: ${({ theme }) => theme.text3};
  }
`

const LanguageToggle = styled(ButtonOutlined)`
  margin-left: 1rem;
  min-width: 5.5rem;
  height: 28px;
  line-height: 28px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
    padding: 0;
  `}
`

const SettingsView = ({ t }: { t: any }) => {
  const [session] = useSession()
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  const handleSignOut = (e: any) => {
    e.preventDefault()
    signOut()
  }

  return (
    <>
      {session && <>
        <LogoutWrapper
          onClick={handleSignOut}
        >
          <i className="iconfont">&#xe609;</i>
        </LogoutWrapper>
      </>}
      <Toggle
        isActive={darkMode}
        activeText={<i className="iconfont">&#xe626;</i>}
        inactiveText={<i className="iconfont">&#xe6f4;</i>}
        toggle={toggleDarkMode}
      />
      <LanguageToggle
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
      >
        {t('common:change-language')}
      </LanguageToggle>
    </>
  )
}


export const getInitialProps = async (): Promise<any> => {
  return {
    namespacesRequired: ['common']
  }
}

export default withTranslation('common')(SettingsView)
