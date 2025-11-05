import envConfig from '@/config'

export const baseOpenGraph = {
  locale: 'en_US',
  alternateLocale: ['vi_VN'],
  type: 'website',
  siteName: 'Lau Thai Restaurant',
  images: [
    {
      url: `${envConfig.NEXT_PUBLIC_URL}/banner2.jpg`
    }
  ]
}
