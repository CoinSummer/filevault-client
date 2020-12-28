import React from 'react'
import Toggle from '../../components/Toggle'
import { useDarkModeManager } from '../../state/user/hooks'

const SettingsView = () => {
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  return (
    <>
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
