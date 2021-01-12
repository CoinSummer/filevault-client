import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { Provider as AuthProvider } from 'next-auth/client'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import store from '../state'
import UserUpdater from '../state/user/updater'
import TwitterUpdater from '../state/twitter/updater'
import { GlobalIconFont } from '../assets/iconfont'
import { SITE_TITLE } from '../const'

const Updaters = () => {
  return (
    <>
      <UserUpdater />
      <TwitterUpdater />
    </>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <FixedGlobalStyle />
      <GlobalIconFont />
      <Provider store={store}>
        <Updaters />
        <ThemeProvider>
          <ThemedGlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  )
}

export default App
