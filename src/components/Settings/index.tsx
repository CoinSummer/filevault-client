import React from 'react'
import { signOut, useSession } from 'next-auth/client'
import Toggle from '../../components/Toggle'
import { useDarkModeManager } from '../../state/user/hooks'
import styled from 'styled-components'

const LogoutWrapper = styled.a`
  margin-right: 1rem;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }

  > i {
    font-size: 24px;
    color: ${({ theme }) => theme.text3};
  }
`

const SettingsView = () => {
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
    </>
  )
}

export default SettingsView
