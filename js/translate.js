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
    "Biblioteki",
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
];

const titleTranslations = {
    Tools: "Narzędzia",
    Information: "Informacje",
    Calculator: "Kalkulator",
    IP: "IP",
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
};

const alternativeTextTranslations = {};

const elementsTitlesTranslations = {};

if (window.navigator.language.split("-")[0] == "pl") {
    document.querySelector("html").lang = "pl";

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
