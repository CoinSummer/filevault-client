import Twitter from 'twitter-lite'

export const twitterClient = new Twitter({
  consumer_key: `${process.env.TWITTER_CLIENT_ID}`,
  consumer_secret: `${process.env.TWITTER_CLIENT_SECRET}`,
})

