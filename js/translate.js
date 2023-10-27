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
    "metr (meter)",
    "kilometr (kilometer)",
    "decymetr (decimeter)",
    "centymetr (centimeter)",
    "milimetr (millimeter)",
    "mikrometr = mikron (micrometer = micron)",
    "angstrem (angstrom)",
    "cal (inch)",
    "stopa (foot)",
    "jard (yard)",
    "mila (land mile)",
    "mila morska (nautical mile)",
    "jednostka astronomiczna (astronomical unit)",
    "rok świetlny (light-year)",
    "parsek (parsec)",
    "Udostępnij",
    "metr [m]",
    "kilometr [km]",
    "decymetr [dm]",
    "centymetr [cm]",
    "milimetr [mm]",
    "mikrometr [µm]",
    "angstrem [Å]",
    'cal ["]',
    "stopa [ft]",
    "jard [yd]",
    "mila [mi]",
    "mila morska [nmi]",
    "jednostka astronomiczna [au]",
    "rok świetlny [ly]",
    "parsek [pc]",
    "kilogram [kg]",
    "dekagram [dag]",
    "gram [g]",
    "funt [lb]",
    "uncja [oz]",
    "karat [ct]",
    "gran [gr]",
    "cetnar USA [cwt]",
    "cetnar ang [cwtUK]",
    "tona krótka [tonUS]",
    "tona długa [tonUK]",
    "tona [t]",
    "kilogram",
    "dekagram (decagram)",
    "gram",
    "funt (pound)",
    "uncja (ounce)",
    "karat (carat)",
    "gran (grain)",
    "cetnar USA (hundredweight US)",
    "cetnar ang (hundredweight UK)",
    "tona krótka (ton US)",
    "tona długa (ton UK)",
    "tona (ton)",
    "sekunda [s]",
    "minuta [min]",
    "godzina [h]",
    "doba [d]",
    "tydzień",
    "miesiąc",
    "rok",
    "nanosekunda",
    "mikrosekunda",
    "milisekunda",
    "kwadrans",
    "dekada",
    "wiek",
    "tysiąclecie",
    "sekunda (second)",
    "minuta (minute)",
    "godzina (hour)",
    "doba (day)",
    "tydzień (week)",
    "miesiąc (month)",
    "rok (year)",
    "nanosekunda (nanosecond)",
    "mikrosekunda (microsecond)",
    "milisekunda (millisecond)",
    "kwadrans (quarter)",
    "dekada (decade)",
    "wiek (age)",
    "tysiąclecie (millennium)",
    "kelwin [K]",
    "stopień Celsjusza [℃]",
    "stopień Fahrenheita [℉]",
    "kelwin (kelvin)",
    "stopień Celsjusza (degree Celsius)",
    "stopień Fahrenheita (degree Fahrenheit)",
    "Ilość miejsc po przecinku",
    "Formatuj",
    "Tekst",
    "Generator kodów QR",
    "Szerokość",
    "Margines",
    "Pobierz",
    "Kody paskowe rezystorów",
    "Ilość pasków",
    "Czarny (0)",
    "Brązowy (1)",
    "Czerwony (2)",
    "Pomarańczowy (3)",
    "Żółty (4)",
    "Zielony (5)",
    "Niebieski (6)",
    "Fioletowy (7)",
    "Szary (8)",
    "Biały (9)",
    "Pierwsza cyfra",
    "Druga liczba",
    "Trzecia liczba",
    "Mnożnik",
    "Tolerancja",
    "Współczynnik temperatury",
    "Czarny (1)",
    "Brązowy (10)",
    "Czerwony (100)",
    "Pomarańczowy (1k)",
    "Żółty (10k)",
    "Zielony (100k)",
    "Niebieski (1M)",
    "Fioletowy (10M)",
    "Złoty (0.1)",
    "Srebrny (0.01)",
    "Brązowy (&#177;1%)",
    "Czerwony (&#177;2%)",
    "Zielony (&#177;0.5%)",
    "Niebieski (&#177;0.25%)",
    "Fioletowy (&#177;0.1%)",
    "Szary (&#177;0.05%)",
    "Złoty (&#177;5%)",
    "Srebrny (&#177;10%)",
    "Czarny (250 ppm/K)",
    "Brązowy (100 ppm/K)",
    "Czerwony (50 ppm/K)",
    "Żółty (25 ppm/K)",
    "Zielony (20 ppm/K)",
    "Niebieski (10 ppm/K)",
    "Fioletowy (5 ppm/K)",
    "Szary (1 ppm/K)",
    "Opór",
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
    "JSON formatter": "JSON formatter",
    "Markdown renderer": "Markdown renderer",
    "LaTeX renderer": "LaTeX renderer",
    ASCII: "ASCII",
    "QR code generator": "Generator kodów QR",
    "Resistor bar codes": "Kody paskowe rezystorów",
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
    Height: "Wysokość",
    Width: "Szerokość",
    Resistance: "Opór",
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
