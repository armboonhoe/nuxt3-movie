import { th } from '~/locales/th'
import { en } from '~/locales/en'

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'th',
    messages: {
        th,
        en
    }
}))
