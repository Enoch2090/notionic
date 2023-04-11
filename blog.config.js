const BLOG = {
  title: 'enoch2090',
  author: 'Enoch2090',
  email: 'ycgu2090@gmail.com',
  link: 'https://enoch2099.vercel.app',
  newsletter: 'Nowhere\'s Land',
  description: 'Welcome to Nowhere\'s Land.',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2018, // If leave this empty, current year will be used.
  postsPerPage: 12,
  sortByDate: true,
  pagesShow: {
    newsletter: true,
    notes: false,
    projects: false,
    contact: true,
    books: true,
    friends: true
  },
  showWeChatPay: false,
  previewImagesEnabled: false,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'https://og-zl.vercel.app/api/default?border=solid&description=Welcome%20to%20Nowhere%27s%20Land&logo=https%3A%2F%2Fenoch2099.vercel.app%2Ffavicon.png&siteName=Enoch2090&theme=light', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: '',
    github: 'https://github.com/Enoch2090',
    telegram: ''
  },
  seo: {
    keywords: ['Blog', 'Website', 'Notion', 'Poetry', 'Programming', 'DataScience', 'MachineLearning', 'Python'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'enoch2090.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/II099preview/', // The link of your Telegram channel
  telegramChannelName: '2099 Preview', // The name of your Telegram channel
  craftConfigShareUrl: '', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: '', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: '', // The url of your Supabase instance
      supabaseAnonKey: '' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
