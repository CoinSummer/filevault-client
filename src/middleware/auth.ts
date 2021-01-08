import nextConnect from 'next-connect'
import session from 'express-session'
import passport from 'passport'

const auth = nextConnect()
  .use(
    session({
      secret: '4Pylc4c992oHAnC30Zzx',
      resave: false,
      saveUninitialized: true,
    })
  )
  .use(passport.initialize())
  .use(passport.session())

export default auth