const metroStations = [
  { "name": "Alexanderplatz", "city": "Berlin", "country": "Germany", "countryCode": "de" },
  { "name": "Châtelet", "city": "Paris", "country": "France", "countryCode": "fr" },
  { "name": "King's Cross St Pancras", "city": "London", "country": "United Kingdom", "countryCode": "gb" },
  { "name": "Duomo", "city": "Milan", "country": "Italy", "countryCode": "it" },
  { "name": "Sol", "city": "Madrid", "country": "Spain", "countryCode": "es" },
  { "name": "Porte de Clignancourt", "city": "Paris", "country": "France", "countryCode": "fr" },
  { "name": "Bastille", "city": "Paris", "country": "France", "countryCode": "fr" },
  { "name": "Porte Maillot", "city": "Paris", "country": "France", "countryCode": "fr" },
  { "name": "Baker Street", "city": "London", "country": "United Kingdom", "countryCode": "gb" },
  { "name": "Victoria", "city": "London", "country": "United Kingdom", "countryCode": "gb" },
  { "name": "Sagrada Família", "city": "Barcelona", "country": "Spain", "countryCode": "es" },
  { "name": "Passeig de Gràcia", "city": "Barcelona", "country": "Spain", "countryCode": "es" },
  { "name": "Marienplatz", "city": "Munich", "country": "Germany", "countryCode": "de" },
  { "name": "Hauptwache", "city": "Frankfurt", "country": "Germany", "countryCode": "de" },
  { "name": "Nevsky Prospekt", "city": "Saint Petersburg", "country": "Russia", "countryCode": "ru" },
  { "name": "Kurskaya", "city": "Moscow", "country": "Russia", "countryCode": "ru" },
  { "name": "Piazza di Spagna", "city": "Rome", "country": "Italy", "countryCode": "it" },
  { "name": "Colosseo", "city": "Rome", "country": "Italy", "countryCode": "it" },
  { "name": "Rossio", "city": "Lisbon", "country": "Portugal", "countryCode": "pt" },
  { "name": "Baixa-Chiado", "city": "Lisbon", "country": "Portugal", "countryCode": "pt" },
  { "name": "Helsingin yliopisto", "city": "Helsinki", "country": "Finland", "countryCode": "fi" },
  { "name": "Rådhuset", "city": "Stockholm", "country": "Sweden", "countryCode": "se" },
  { "name": "Nørreport", "city": "Copenhagen", "country": "Denmark", "countryCode": "dk" },
  { "name": "Deák Ferenc tér", "city": "Budapest", "country": "Hungary", "countryCode": "hu" },
  { "name": "Astoria", "city": "Budapest", "country": "Hungary", "countryCode": "hu" },
  { "name": "Mustek", "city": "Prague", "country": "Czech Republic", "countryCode": "cz" },
  { "name": "I.P. Pavlova", "city": "Prague", "country": "Czech Republic", "countryCode": "cz" },
  { "name": "Plac Wilsona", "city": "Warsaw", "country": "Poland", "countryCode": "pl" },
  { "name": "Ratusz Arsenał", "city": "Warsaw", "country": "Poland", "countryCode": "pl" },
  { "name": "Pioneer", "city": "Belgrade", "country": "Serbia", "countryCode": "rs" },
  { "name": "Oktogon", "city": "Budapest", "country": "Hungary", "countryCode": "hu" },
  { "name": "Piata Unirii", "city": "Bucharest", "country": "Romania", "countryCode": "ro" },
  { "name": "Universitate", "city": "Bucharest", "country": "Romania", "countryCode": "ro" },
  { "name": "Aliados", "city": "Porto", "country": "Portugal", "countryCode": "pt" },
  { "name": "Trindade", "city": "Porto", "country": "Portugal", "countryCode": "pt" },
  {"name": "Vokzalna", "city": "Kyiv", "country": "Ukraine", "countryCode": "ua" },
  { "name": "Slussen", "city": "Stockholm", "country": "Sweden", "countryCode": "se" },
  { "name": "Hötorget", "city": "Stockholm", "country": "Sweden", "countryCode": "se" },
  { "name": "Kungsträdgården", "city": "Stockholm", "country": "Sweden", "countryCode": "se" },
  { "name": "Maidan Nezalezhnosti", "city": "Kyiv", "country": "Ukraine", "countryCode": "ua" },
  { "name": "Arkhitektora Beketova", "city": "Kharkiv", "country": "Ukraine", "countryCode": "ua" },
  { "name": "Metrobudivnykiv", "city": "Dnipro", "country": "Ukraine", "countryCode": "ua" },
  { "name": "Zakhidnyi", "city": "Kryvyi Rih", "country": "Ukraine", "countryCode": "ua" },
  { "name": "Kamppi", "city": "Helsinki", "country": "Finland", "countryCode": "fi" },
  { "name": "Itäkeskus", "city": "Helsinki", "country": "Finland", "countryCode": "fi" },
  { "name": "Matinkylä", "city": "Espoo", "country": "Finland", "countryCode": "fi" },
  { "name": "Zarechnaya", "city": "Nizhny Novgorod", "country": "Russia", "countryCode": "ru" },
  { "name": "Sportivnaya", "city": "Kazan", "country": "Russia", "countryCode": "ru" },
  { "name": "Ploshchad Garina-Mikhaylovskogo", "city": "Novosibirsk", "country": "Russia", "countryCode": "ru" },
  { "name": "Etoile", "city": "Nice", "country": "France", "countryCode": "fr" },
  { "name": "Porte de Versailles", "city": "Marseille", "country": "France", "countryCode": "fr" }
  
];

const countryCodes = {
  "Germany": "de",
  "France": "fr",
  "United Kingdom": "gb",
  "Italy": "it",
  "Spain": "es",
  "France": "fr",
  "United Kingdom": "gb",
  "Spain": "es",
  "Germany": "de",
  "Russia": "ru",
  "Italy": "it",
  "Portugal": "pt",
  "Finland": "fi",
  "Sweden": "se",
  "Denmark": "dk",
  "Hungary": "hu",
  "Czech Republic": "cz",
  "Poland": "pl",
  "Serbia": "rs",
  "Romania": "ro",
  "Ukraine": "ua"
};

function getCountryCode(countryName) {
  return countryCodes[countryName] || null;
}

function generateRandomStation() {
  const randomIndex = Math.floor(Math.random() * metroStations.length);
  const selectedStation = metroStations[randomIndex];

  document.getElementById('stationName').textContent = selectedStation.name;
  document.getElementById('stationLocation').textContent = `${selectedStation.city}, ${selectedStation.country}`;

  const flagElement = document.getElementById('countryFlag');
  const countryCode = getCountryCode(selectedStation.country);

  if (countryCode) {
      flagElement.src = `https://flagcdn.com/w320/${countryCode}.png`;
      flagElement.classList.remove('hidden');
      flagElement.alt = `${selectedStation.country} Flag`;
  } else {
      flagElement.classList.add('hidden');
  }
}

document.getElementById('generateButton').addEventListener('click', generateRandomStation);
