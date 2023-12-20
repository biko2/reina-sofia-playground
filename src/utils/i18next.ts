import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

export const initI18next = () =>
  i18n.use(initReactI18next).init({
    fallbackLng: 'es',
    lng: 'es',

    resources: {
      es: {
        translation: {
          welcome: 'Bienvenido a la página principal',
          header: 'Reina Sofía Pruebas',
        },
      },
      cat: {
        translation: {
          welcome: 'Benvingut a la pàgina principal',
          header: 'Reina Sofia Proves',
        },
      },
    },

    interpolation: {
      skipOnVariables: false,
      escapeValue: false,
    },
  });
