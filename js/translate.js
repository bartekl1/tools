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
    "Druga cyfra",
    "Trzecia cyfra",
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
    "Przelicznik współrzędnych geograficznych",
    "Dziesiętne",
    "Stopnie, minuty, sekundy",
    "Czas na świecie",
    "Bieżący czas",
    "Czas lokalny",
    "Czas uniwersalny",
    "Inna strefa czasowa",
    "Obliczenia na czasie",
    "Różnica dat",
    "Dodaj / odejmij do daty",
    "Lata",
    "Miesiące",
    "Tygodnie",
    "Dni",
    "Godziny",
    "Minuty",
    "Sekundy",
    "Milisekundy",
    "Dodaj",
    "Odejmij",
    "Stoper",
    "Czas",
    "Czas trwania",
    "Geograficzne",
    "Jasny",
    "Ciemny",
    "Kierunek",
    "Zanim zgłosisz błąd lub zaproponujesz nową funkcję proszę o przeczytanie",
    "tych informacji",
    "Posortuj",
    "Unikatowe",
    "Strona wykorzystuje pliki cookies do celów statystycznych.",
    "Jeśli nie wyrażasz zgody na ich użycie, wycofaj stronie uprawnienia na ich użycie w ustawieniach przeglądarki lub skorzystaj z blokady skryptów śledzących.",
    "Powierzchnia",
    "metr kwadratowy [m&#178;]",
    "kilometr kwadratowy [km&#178;]",
    "decymetr kwadratowy [dm&#178;]",
    "centymetr kwadratowy [cm&#178;]",
    "milimetr kwadratowy [mm&#178;]",
    "ar [a]",
    "hektar [ha]",
    "akr [ac]",
    "cal kwadratowy [in&#178;]",
    "stopa kwadratowy [ft&#178;]",
    "jard kwadratowy [yd&#178;]",
    "metr kwadratowy (square meter)",
    "kilometr kwadratowy (square kilometer)",
    "decymetr kwadratowy (square decimeter)",
    "centymetr kwadratowy (square centimeter)",
    "milimetr kwadratowy (square millimeter)",
    "ar (are)",
    "hektar (hectare)",
    "akr (acre)",
    "cal kwadratowy (square inch)",
    "stopa kwadratowy (square foot)",
    "jard kwadratowy (square yard)",
    "Dźwięk",
    "decybel [dB]",
    "decybel (decibel)",
    "Objętość",
    "metr sześcienny (cubic meter)",
    "kilometr sześcienny (cubic kilometer)",
    "decymetr sześcienny = litr (cubic decimeter = liter)",
    "centymetr sześcienny = mililitr (cubic centimeter = milliliter)",
    "milimetr sześcienny (cubic millimeter)",
    "cal sześcienny (cubic inch)",
    "stopa sześcienna (cubic foot)",
    "jard sześcienny (cubic yard)",
    "galon angielski (imperial gallon)",
    "galon amerykański dla płynów (US liquid gallon)",
    "galon amerykański dla ciał sypkich (US dry gallon)",
    "buszel angielski (imperial bushel)",
    "buszel amerykański (US bushel)",
    "baryłka ropy naftowej (oil barrel)",
    "baryłka brytyjska (imperial barrel)",
    "metr sześcienny [m&#179;]",
    "kilometr sześcienny [km&#179;]",
    "decymetr sześcienny = litr [dm&#179; = l]",
    "centymetr sześcienny = mililitr [cm&#179; = ml]",
    "milimetr sześcienny [mm&#179;]",
    "cal sześcienny [in&#179;]",
    "stopa sześcienna [ft&#179;]",
    "jard sześcienny [yd&#179;]",
    "galon angielski [imp gal]",
    "galon amerykański dla płynów [US gal]",
    "galon amerykański dla ciał sypkich [usdrygal]",
    "buszel angielski [buUK]",
    "buszel amerykański [buUS]",
    "baryłka ropy naftowej [bbl]",
    "baryłka brytyjska [Imp.bl.]",
    "Prędkość",
    "metr na sekundę (meter per second)",
    "kilometr na godzinę (kilometer per hour)",
    "mila lądowa na godzinę (land mile per hour)",
    "węzeł - mila morska na godzinę (knot - nautical mile per hour)",
    "mach - prędkość dźwięku w powietrzu (mach - speed of sound in air)",
    "prędkość światła (speed of light)",
    "metr na sekundę [m/s]",
    "kilometr na godzinę [km/h]",
    "mila lądowa na godzinę [mph]",
    "węzeł [kt]",
    "prędkość światła [c]",
    "Przyspieszenie",
    "metr na sekundę kwadrat (meter per square second)",
    "stopa na sekundę kwadrat (foot per square second)",
    "metr na sekundę kwadrat [m/s&#178;]",
    "stopa na sekundę kwadrat [ft/s&#178;]",
    "Dane",
    "bajt (byte)",
    "kilobajt (kilobyte)",
    "megabajt (megabyte)",
    "gigabajt (gigabyte)",
    "terabajt (terabyte)",
    "kibibajt (kibibyte)",
    "mebibajt (mebibyte)",
    "gibibajt (gibibyte)",
    "tebibajt (tebibyte)",
    "bajt [B]",
    "kilobajt [kB]",
    "megabajt [MB]",
    "gigabajt [GB]",
    "terabajt [TB]",
    "kibibajt [KiB]",
    "mebibajt [MiB]",
    "gibibajt [GiB]",
    "tebibajt [TiB]",
    "Sumy kontrolne",
    "Zweryfikuj",
    "Klucz tajny",
    "Ilość cyfr",
    "Okres",
    "Czas",
    "Bieżący czas",
    "Ważny",
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
    "Geographical coordinates converter":
        "Przelicznik współrzędnych geograficznych",
    "World time": "Czas na świecie",
    "Time calculations": "Obliczenia na czasie",
    Stopwatch: "Stoper",
    Checksums: "Sumy kontrolne",
    "TOTP generator": "TOTP generator",
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
    Heading: "Kierunek",
    "Secret key": "Klucz tajny",
    "Number of digits": "Ilość cyfr",
    Period: "Okres",
};

const alternativeTextTranslations = {};

const elementsTitlesTranslations = {};

const dataBSTranslations = {
    Website: "Strona internetowa",
    "GitHub profile": "Profil GitHub",
};

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

    document.querySelectorAll("[data-bs-original-title]").forEach((e) => {
        e.setAttribute(
            "data-bs-original-title",
            dataBSTranslations[e.getAttribute("data-bs-original-title")]
        );
    });
}
