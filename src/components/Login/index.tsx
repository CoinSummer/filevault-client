import React, { useCallback, useContext, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Card from '../Card'
import Column from '../Column'
import { ButtonOutlined } from '../Button'
import Slogan from '../Slogan'

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 3rem;
  background-color: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 3rem 1rem;
    border-radius: 0;
  `}
`

const LoginWrapper = styled(Column)`
  margin-top: 3rem;
  align-items: center;
`

const LoginItem = styled(ButtonOutlined)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primaryText1};

  > i {
    margin-right: .5rem;
    font-size: 1.5rem;
  }

  > span {
    width: 5rem;
  }
`

const Login = () => {
  const router = useRouter()

  const handleTwitterLogin = () => {
    router.push('/home')
  }

  const handleWeiboLogin = () => {
    router.push('/home')
  }

  return (
    <LoginCard>
      <Slogan />
      <LoginWrapper>
        <LoginItem
          onClick={handleTwitterLogin}
        >
          <i className="iconfont">&#xe726;</i>
          <span>Twitter登录</span>
        </LoginItem>
        <LoginItem
          onClick={handleWeiboLogin}
        >
          <i className="iconfont">&#xe641;</i>
          <span>微博登录</span>
        </LoginItem>
      </LoginWrapper>
    </LoginCard>
  )
}

export default Login
