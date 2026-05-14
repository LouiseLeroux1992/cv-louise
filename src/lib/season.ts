type Season = {
  fr: string;
  en: string;
};

export function getCurrentSeason(): Season {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month < 3 || (month === 3 && day < 21)) {
    return { fr: "Hiver", en: "Winter" };
  }
  if (month < 6 || (month === 6 && day < 21)) {
    return { fr: "Printemps", en: "Spring" };
  }
  if (month < 9 || (month === 9 && day < 21)) {
    return { fr: "Été", en: "Summer" };
  }
  if (month < 12 || (month === 12 && day < 21)) {
    return { fr: "Automne", en: "Autumn" };
  }
  return { fr: "Hiver", en: "Winter" };
}

export function getSeasonLabel(locale: string): string {
  const season = getCurrentSeason();
  const year = new Date().getFullYear();
  const name = locale === "fr" ? season.fr : season.en;
  return `${name} ${year}`;
}

export function getSeasonUppercase(locale: string): string {
  return getSeasonLabel(locale).toUpperCase();
}
