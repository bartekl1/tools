const textTranslations = [
    "Narzędzia",
    "Wersja",
    "Autor",
    "Profil GitHub",
    "Repozytorium GitHub",
    "Informacje",
    "Matematyczne",
    "Kalkulator",
    "Przelicznik jednostek",
    "Przelicznik systemów liczbowych",
    "Przelicznik liczb rzymskich",
    "Informatyczne",
    "Klient HTTP (REST)",
    "Ogólne",
    "Rejestr zmian",
    "Podziękowania",
    "Jesteś offline. Niektóre narzędzia będą niedostępne.",
    "Standardowy",
    "Naukowy",
    "Programisty",
    "Typ kalkulatora",
    "To narzędzie nie jest dostępne offline.",
    "Prywatny IP",
    "Wykrywanie prywatnego IP jest zablokowane.",
    "Aby to odblokować wykonaj poniższe kroki",
    "Otwórz",
    "Przy wyróżnionej opcji zmień <code>Default</code> na <code>Disabled</code>.",
    "Kliknij <code>Relaunch</code>.",
    "Publiczny IP",
    "Nie udało się sprawdzić publicznego IP.",
    "Może to być spowodowane przez AdBlocka lub zbyt częste sprawdzanie.",
    "Miasto",
    "Kraj",
    "Szerokość geograficzna",
    "Długość geograficzna",
    "Strefa czasowa",
    "Dane o publicznym IP pochodzą z",
    "Zgłoś błąd",
    "Zaproponuj nową funkcję",
    "Zainstaluj",
    "Zabezpieczenia",
    "Generator haseł",
    "Konsola JavaScript",
    "Data i czas",
    "Inne",
    "Generator liczb losowych",
    "Ilość liczb",
    "Ilość miejsc po przecinku",
    "Generuj",
    "GPS nie jest wspierany.",
    "GPS jest zablokowany.",
    "Lokalizuj",
    "Szerokość geograficzna",
    "Długość geograficzna",
    "Dokładność",
    "Wysokość",
    "Dokładność wysokości",
    "Prędkość",
    "Przeglądarka może fałszować user agent.",
    "Przeglądarka",
    "System operacyjny",
    "Silnik",
    "Urządzenie",
    "Liczba arabska",
    "Liczba rzymska",
    "Bieżący znacznik czasu",
    "Przelicznik",
    "Znacznik czasu",
    "Data",
    "Długość",
    "Znaki specjalne",
    "Metoda",
    "Zawartość",
    "Nagłówki",
    "Długość",
    "Masa",
    "Czas",
    "Temperatura",
    "Nazwa",
    "Symbol",
    "Wynik",
    "Kopiuj",
    "metr (meter)","kilometr (kilometer)","decymetr (decimeter)","centymetr (centimeter)","milimetr (millimeter)",
    "mikrometr = mikron (micrometer = micron)","angstrem (angstrom)","cal (inch)","stopa (foot)","jard (yard)",
    "mila (land mile)","mila morska (nautical mile)","jednostka astronomiczna (astronomical unit)",
    "rok świetlny (light-year)","parsek (parsec)"
];

const titleTranslations = {
    Tools: "Narzędzia",
    Information: "Informacje",
    Calculator: "Kalkulator",
    IP: "IP",
    "Number system converter": "Przelicznik systemów liczbowych",
    "Random number generator": "Generator liczb losowych",
    GPS: "GPS",
    "User agent": "User agent",
    "Roman numeral converter": "Przelicznik liczb rzymskich",
    "Unix timestamp": "Unix timestamp",
    "Password generator": "Generator haseł",
    Hash: "Hash",
    "HTTP (REST) client": "Klient HTTP (REST)",
    "Unit converter": "Przelicznik jednostek",
};

const placeholdersTranslations = {
    Search: "Szukaj",
    IP: "IP",
    Operator: "Operator",
    City: "Miasto",
    Country: "Kraj",
    Latitude: "Szerokość geograficzna",
    Longitude: "Długość geograficzna",
    Timezone: "Strefa czasowa",
    Latitude: "Szerokość geograficzna",
    Longitude: "Długość geograficzna",
    Accuracy: "Dokładność",
    Altitude: "Wysokość",
    "Altitude accuracy": "Dokładność wysokości",
    Speed: "Prędkość",
    "User agent": "User agent",
    Browser: "Przeglądarka",
    OS: "System operacyjny",
    Engine: "Silnik",
    Device: "Urządzenie",
    Length: "Długość",
    "Special characters": "Znaki specjalne",
    URL: "URL",
};

const alternativeTextTranslations = {};

const elementsTitlesTranslations = {};

if (window.navigator.language.split("-")[0] == "pl") {
    document.querySelector("html").lang = "pl";

    document.querySelector("link[rel=manifest]").href =
        "/tools/manifest_pl.json";

    document.querySelector("title").innerHTML =
        titleTranslations[document.querySelector("title").innerHTML];

    document.querySelectorAll("[text-id]").forEach((e) => {
        e.innerHTML = textTranslations[e.getAttribute("text-id")];
    });

    document.querySelectorAll("[placeholder]").forEach((e) => {
        e.placeholder = placeholdersTranslations[e.placeholder];
    });

    document.querySelectorAll("[alt]").forEach((e) => {
        e.alt = alternativeTextTranslations[e.alt];
    });

    document.querySelectorAll("[title]").forEach((e) => {
        e.title = elementsTitlesTranslations[e.title];
    });
}
