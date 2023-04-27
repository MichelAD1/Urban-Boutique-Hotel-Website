import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
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
        acc: "Account settings",
        acc_desc: "Manage your booking experience",
        acc_info: "Personal information",
        acc_info_upd: "Update your personal information",
        acc_info_mng: "Manage your personal information",
        acc_sec: "Security",
        acc_sec_adj: "Adjust your security settings",
        acc_sec_mng: "Manage security",
        acc_pref_mng: "Manage preferences",
        acc_res: "Reservations",
        acc_res_desc: "Manage your reservations",
        acc_res_no_desc: "You currently have no reservations",
        res_room_name: "Room Name",
        res_checkin: "Check In Date",
        res_checkout: "Check Out Date",
        err_username: "Username field required",
        err_username2: "Please enter a username that is not too long",
        err_name: "Name field required",
        err_email: "Please enter a valid email address",
        err_email2: "The email has already been taken",
        err_num: "Please enter a valid phone number",
        err_dob: "Invalid date of birth",
        pro_name: "Display name",
        pro_username: "Username",
        pro_email: "Email",
        pro_num: "Phone number",
        pro_dob: "Date of birth",
        pro_gender: "Gender",
        female: "Female",
        male: "Male",
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
        save: "Guardar",
        acc: "Configuración de cuenta",
        acc_desc: "Administra tu experiencia de reservación",
        acc_info: "Información personal",
        acc_info_upd: "Actualiza tu información personal",
        acc_info_mng: "Administra tu información personal",
        acc_sec: "Seguridad",
        acc_sec_adj: "Ajusta tu configuración de seguridad",
        acc_sec_mng: "Administra la seguridad",
        acc_pref_mng: "Administra las preferencias",
        acc_res: "Reservaciones",
        acc_res_desc: "Administra tus reservaciones",
        acc_res_no_desc: "Actualmente no tienes reservaciones",
        res_room_name: "Nombre de la habitación",
        res_checkin: "Fecha de llegada",
        res_checkout: "Fecha de salida",
        err_username: "Se requiere un nombre de usuario",
        err_username2:
          "Ingrese un nombre de usuario que no sea demasiado largo",
        err_name: "Se requiere un nombre",
        err_email: "Ingrese una dirección de correo electrónico válida",
        err_email2: "El correo electrónico ya ha sido registrado",
        err_num: "Ingrese un número de teléfono válido",
        err_dob: "Fecha de nacimiento inválida",
        pro_name: "Nombre de visualización",
        pro_username: "Nombre de usuario",
        pro_email: "Correo electrónico",
        pro_num: "Número de teléfono",
        pro_dob: "Fecha de nacimiento",
        pro_gender: "Género",
        female: "Femenino",
        male: "Masculino",
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
        acc: "Paramètres du compte",
        acc_desc: "Gérez votre expérience de réservation",
        acc_info: "Informations personnelles",
        acc_info_upd: "Mettez à jour vos informations personnelles",
        acc_info_mng: "Gérez vos informations personnelles",
        acc_sec: "Sécurité",
        acc_sec_adj: "Ajustez vos paramètres de sécurité",
        acc_sec_mng: "Gérez la sécurité",
        acc_pref_mng: "Gérez les préférences",
        acc_res: "Réservations",
        acc_res_desc: "Gérez vos réservations",
        acc_res_no_desc: "Vous n'avez actuellement aucune réservation",
        res_room_name: "Nom de la Salle",
        res_checkin: "Date d'arrivée",
        res_checkout: "Date de départ",
        err_username: "Le champ du nom d'utilisateur est requis",
        err_username2:
          "Veuillez entrer un nom d'utilisateur qui n'est pas trop long",
        err_name: "Le champ du nom est requis",
        err_email: "Veuillez entrer une adresse e-mail valide",
        err_email2: "L'adresse e-mail a déjà été prise",
        err_num: "Veuillez entrer un numéro de téléphone valide",
        err_dob: "Date de naissance invalide",
        pro_name: "Nom d'affichage",
        pro_username: "Nom d'utilisateur",
        pro_email: "E-mail",
        pro_num: "Numéro de téléphone",
        pro_dob: "Date de naissance",
        pro_gender: "Genre",
        female: "Femme",
        male: "Homme",
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
        acc: "Kontoeinstellungen",
        acc_desc: "Verwalten Sie Ihr Buchungserlebnis",
        acc_info: "Persönliche Informationen",
        acc_info_upd: "Aktualisieren Sie Ihre persönlichen Informationen",
        acc_info_mng: "Verwalten Sie Ihre persönlichen Informationen",
        acc_sec: "Sicherheit",
        acc_sec_adj: "Passen Sie Ihre Sicherheitseinstellungen an",
        acc_sec_mng: "Sicherheit verwalten",
        acc_pref_mng: "Einstellungen verwalten",
        acc_res: "Reservierungen",
        acc_res_desc: "Verwalten Sie Ihre Reservierungen",
        acc_res_no_desc: "Sie haben derzeit keine Reservierungen",
        res_room_name: "Zimmername",
        res_checkin: "Check-in Datum",
        res_checkout: "Check-out Datum",
        err_username: "Benutzername erforderlich",
        err_username2:
          "Bitte geben Sie einen Benutzernamen ein, der nicht zu lang ist",
        err_name: "Name Feld erforderlich",
        err_email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        err_email2: "Die E-Mail-Adresse ist bereits vergeben",
        err_num: "Bitte geben Sie eine gültige Telefonnummer ein",
        err_dob: "Ungültiges Geburtsdatum",
        pro_name: "Anzeigename",
        pro_username: "Benutzername",
        pro_email: "E-Mail",
        pro_num: "Telefonnummer",
        pro_dob: "Geburtsdatum",
        pro_gender: "Geschlecht",
        female: "Weiblich",
        male: "Männlich",
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
        acc: "Impostazioni dell'account",
        acc_desc: "Gestisci la tua esperienza di prenotazione",
        acc_info: "Informazioni personali",
        acc_info_upd: "Aggiorna le tue informazioni personali",
        acc_info_mng: "Gestisci le tue informazioni personali",
        acc_sec: "Sicurezza",
        acc_sec_adj: "Regola le tue impostazioni di sicurezza",
        acc_sec_mng: "Gestisci la sicurezza",
        acc_pref_mng: "Gestisci le preferenze",
        acc_res: "Prenotazioni",
        acc_res_desc: "Gestisci le tue prenotazioni",
        acc_res_no_desc: "Attualmente non hai prenotazioni",
        res_room_name: "Nome della stanza",
        res_checkin: "Data di check-in",
        res_checkout: "Data di check-out",
        err_username: "Campo nome utente richiesto",
        err_username2: "Inserisci un nome utente che non sia troppo lungo",
        err_name: "Campo nome richiesto",
        err_email: "Inserisci un indirizzo email valido",
        err_email2: "L'email è già stata utilizzata",
        err_num: "Inserisci un numero di telefono valido",
        err_dob: "Data di nascita non valida",
        pro_name: "Nome visualizzato",
        pro_username: "Nome utente",
        pro_email: "Email",
        pro_num: "Numero di telefono",
        pro_dob: "Data di nascita",
        pro_gender: "Genere",
        female: "Femmina",
        male: "Maschio",
      },
    },
  },
});

export default i18n;
