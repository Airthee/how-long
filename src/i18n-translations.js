const i18nTranslation = {
  translations: {
    fr: {
      app: {
        title: 'How long | Calcul de temps',
        description: "Voyez l'écart se creuser entre le présent et une date de votre choix.",
        keywords: 'application, temps, calcul, différence, gratuit, âge, année, mois, jour, heure, seconde, minute'
      },
      home: {
        description: {
          title: "How long, qu'est ce que c'est ?",
          text: `
            Il vous arrive d'oublier votre âge ou celui d'un(e) proche ?<br>
            Besoin de savoir depuis combien de temps dure une relation ?<br>
            Ajoutez ce site à vos favoris et arrêtez de réfléchir !
            Renseignez votre date et voyez la différence instantanément !
          `
        },
      },
      formDate: {
        elapsedTime: 'Temps écoulé',
        year: '1 an | {n} ans',
        month: '{n} mois',
        day: '1 jour | {n} jours',
        hour: '1 heure | {n} heures',
        minute: '1 minute | {n} minutes',
        second: '1 seconde | {n} secondes',
        inputTitles: {
          year: 'Année',
          month: 'Mois',
          day: 'Jour',
          hour: 'Heure',
          minute: 'Minute',
          second: 'Seconde'
        }
      },
      footer: {
        githubTitle: 'Accéder au repo Github'
      },
      words: {
        and: 'et'
      }
    },
    en: {
      app: {
        title: 'How long | Time calculation',
        description: "See the gap widen between the present and a date of your choice.",
        keywords: 'application, time, calculation, difference, free, age, year, month, day, hour, second, minute'
      },
      home: {
        description: {
          title: "How long, what the hell is this ?",
          text: `
            You regularly forget your age or the age of a loved one ?<br>
            Need to know how long you have been with your partner ?<br>
            Add this website to your favourites and don't think anymore !<br>
            Just pick a date and see the difference grow instantly !<br>
          `
        },
      },
      formDate: {
        elapsedTime: 'Elapsed time',
        year: '1 year | {n} years',
        month: 'month | {n} months',
        day: '1 day | {n} days',
        hour: '1 hour | {n} hours',
        minute: '1 minute | {n} minutes',
        second: '1 second | {n} seconds',
        inputTitles: {
          year: 'Year',
          month: 'Month',
          day: 'Day',
          hour: 'Hour',
          minute: 'Minute',
          second: 'Second'
        }
      },
      footer: {
        githubTitle: 'Access to the Github repository'
      },
      words: {
        and: 'and'
      }
    },
  },

  getCurrentLang() {
    return localStorage.lang || (window.navigator.userLanguage || window.navigator.language).split('-')[0];
  },

  setLang(lang) {
    localStorage.lang = lang;
    window.location.reload();
  }
};

// update html element
document.querySelector('html').setAttribute('lang', i18nTranslation.getCurrentLang());

export default i18nTranslation;