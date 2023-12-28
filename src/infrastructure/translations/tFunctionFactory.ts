import i18next, { TFunction } from 'i18next';

export function tFunctionFactory(lang: string): TFunction {
  i18next.init({
    fallbackLng: 'es',
    lng: 'es',

    resources: {
      es: {
        translation: {
          welcome: 'Bienvenido a la página principal',
          header: 'Reina Sofía Pruebas',
          probando: 'Haciendo pruebas de i18next',
        },
      },
      cat: {
        translation: {
          welcome: 'Benvingut a la pàgina principal',
          header: 'Reina Sofia Proves',
          probando: 'Fent proves de i18next',
        },
      },
    },

    interpolation: {
      skipOnVariables: false,
      escapeValue: false,
    },
  });

  return i18next.getFixedT(lang);
}
