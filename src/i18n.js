import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz_la: {
    translation: {
      "header-title": "Murakkab yuridik hujjatlarni oson yaratish va tezkor imzolash",
      "header-description": "YURISTLARSIZ! QONUNIY! ARZON!"
    }
  },
  uz_kr: {
    translation: {
      "header-title": "Мураккаб юридик ҳужжатларни осон яратиш ва тезкор имзолаш",
      "header-description": "ЮРИСТЛАРСИЗ! ҚОНУНИЙ! АРЗОН!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz_la', // default language
    fallbackLng: 'uz_la',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;