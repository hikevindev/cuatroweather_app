import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "../locales/en/translation.json"
import esTranslation from "../locales/es/translation.json"
i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
        escapeValue: false,
        },
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        }
    })

export default i18n