import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import Card from '../Card'
import Column from '../Column'
import { ButtonOutlined } from '../Button'
import Slogan from '../Slogan'
import { withTranslation } from '../../i18n'

const LoginCard = styled(Card)`
  margin: 0 auto;
  padding: 3rem;
  background-color: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 3rem 1rem;
    border-radius: 0;
    height: 100%;
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
    /* width: 5rem; */
  }
`

const LoginView = ({ t }: { t: any }) => {
  const router = useRouter()

  const handleTwitterLogin = (e: any) => {
    e.preventDefault()
    signIn('twitter')
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
          <span>{t('auth:twitter')}</span>
        </LoginItem>
        <LoginItem
          disabled={true}
          onClick={handleWeiboLogin}
        >
          <i className="iconfont">&#xe641;</i>
          <span>{t('auth:weibo')}</span>
        </LoginItem>
      </LoginWrapper>
    </LoginCard>
  )
}

export const getInitialProps = async (): Promise<any> => {
  return {
    namespacesRequired: ['auth']
  }
}

export default withTranslation('auth')(LoginView)
