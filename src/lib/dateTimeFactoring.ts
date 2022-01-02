export default {
  factorizeDiff(date1: Date, date2: Date) {
    const factorizedDiff = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    // Seconds
    factorizedDiff.seconds += date1.getSeconds() - date2.getSeconds();
    if (factorizedDiff.seconds < 0) {
      factorizedDiff.seconds += 60;
      factorizedDiff.minutes--;
    }

    // Minutes
    factorizedDiff.minutes += date1.getMinutes() - date2.getMinutes();
    if (factorizedDiff.minutes < 0) {
      factorizedDiff.minutes += 60;
      factorizedDiff.hours--;
    }

    // Hours
    factorizedDiff.hours += date1.getHours() - date2.getHours();
    if (factorizedDiff.hours < 0) {
      factorizedDiff.hours += 24;
      factorizedDiff.days--;
    }

    // Days
    factorizedDiff.days += date1.getDate() - date2.getDate();
    if (factorizedDiff.days < 0) {
      factorizedDiff.days += 31;
      factorizedDiff.months--;
    }

    // Months
    factorizedDiff.months += date1.getMonth() - date2.getMonth();
    if (factorizedDiff.months < 0) {
      factorizedDiff.months += 12;
      factorizedDiff.years--;
    }

    // Years
    factorizedDiff.years += date1.getFullYear() - date2.getFullYear();
    if (factorizedDiff.years < 0) {
      factorizedDiff.years = 0;
    }

    return factorizedDiff;
  },
};
