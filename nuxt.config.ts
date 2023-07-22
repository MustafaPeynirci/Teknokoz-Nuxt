// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Teknokoz | Yazılım',
        meta: [
            { name: 'description', content: 'Teknokoz Yazılım' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
  },
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://teknokoz.com',
      siteName: 'Teknokoz | Yazılım',
      siteDescription: 'Teknokoz Yazılım',
      siteKeywords: 'Teknokoz Yazılım Bilişim',
      language: 'tr',
        twitterHandle: '@teknokoz',
        twitterCardType: 'summary_large_image',
        twitterSite: '@teknokoz',
        twitterCreator: '@teknokoz',
        ogHost: 'https://teknokoz.com',
        ogImage: '/images/teknokoz.png',
        ogImageAlt: 'Teknokoz Yazılım',
        ogType: 'website',
        ogLocale: 'tr_TR',
        ogSiteName: 'Teknokoz | Yazılım',
        ogTitle: 'Teknokoz | Yazılım'
    }
  }
})
