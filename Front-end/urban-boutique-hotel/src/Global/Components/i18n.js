import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        preferences: "Preferences",
        changelg: "Change your language and currency",
        currency: "Currency",
        language: "Language",
        edit: "Edit",
        cancel: "Cancel",
        save: "Save",
      },
    },
    es: {
      translation: {
        preferences: "Preferencias",
        changelg: "Cambia tu idioma y moneda",
        currency: "Divisa",
        language: "Idioma",
        edit: "Editar",
        cancel: "Cancelar",
        save: "Ahorrar",
      },
    },
    fr: {
      translation: {
        preferences: "Préférences",
        changelg: "Changez votre langue et votre devise",
        currency: "Monnaie",
        language: "Langue",
        edit: "Modifier",
        cancel: "Annuler",
        save: "Sauvegarder",
      },
    },
    de: {
      translation: {
        preferences: "Einstellungen",
        changelg: "Ändern Sie Ihre Sprache und Währung",
        currency: "Währung",
        language: "Sprache",
        edit: "Bearbeiten",
        cancel: "Stornieren",
        save: "Speichern",
      },
    },
    it: {
      translation: {
        preferences: "Preferenze",
        changelg: "Cambia lingua e valuta",
        currency: "Valuta",
        language: "Lingua",
        edit: "Modificare",
        cancel: "Annulla",
        save: "Salva",
      },
    },
  },
});

export default i18n;
