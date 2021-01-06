import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import store from '../state'
import TwitterUpdater from '../state/twitter/updater'
import { GlobalIconFont } from '../assets/iconfont'
import { SITE_TITLE } from '../const'

const Updaters = () => {
  return (
    <>
      <TwitterUpdater />
    </>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
    </>
  )
}

export default App
