import { Strategy, Profile } from 'passport-twitter'

export const twitterStrategy = new Strategy({
  consumerKey: '1Rcc9zajmlnRCNnrXaOXY195D',
  consumerSecret: 'Zu0oF91sth3goB2uvjNKsJPITbU8umsWwW4Fye3g0F0tdFDr4A',
  callbackURL: 'https://filevault.coinsummer.io/auth/twitter'
}, (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => {
  console.log('refreshToken: ', refreshToken);
  console.log('accessToken: ', accessToken);
  console.log('profile: ', profile);
  profile ? done(null, profile) : done(null, null)
})
