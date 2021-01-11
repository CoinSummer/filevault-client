import React from 'react'
import { signOut, useSession } from 'next-auth/client'
import Toggle from '../../components/Toggle'
import { ButtonOutlined } from '../Button'
import { useDarkModeManager } from '../../state/user/hooks'


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
        <ButtonOutlined
          onClick={handleSignOut}
        >
          Sign Out
        </ButtonOutlined>
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
