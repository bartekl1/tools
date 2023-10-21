# 🛠 Narzędzia

Strona z narzędziami matematycznymi i informatycznymi

![GitHub release (latest by date)](https://img.shields.io/github/v/release/bartekl1/tools?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/bartekl1/tools?style=flat-square)
![GitHub watchers](https://img.shields.io/github/watchers/bartekl1/tools?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/bartekl1/tools?style=flat-square)

[🌐Strona](https://bartekl1.github.io/tools)
[🧾Rejestr zmian](CHANGELOG.md)
[🎁Podziękowania](ACKNOWLEDGEMENTS.md)

Ta strona jest progresywna aplikacją webową (PWA), więc może zostać zainstalowana i można z niej korzystać bez internetu.

## 📝 Dostępne narzędzia

### ➗ Matematyczne

- Kalkulator
- Przelicznik jednostek
- Przelicznik liczb rzymskich

### 💻 Informatyczne

- Przelicznik systemów liczbowych
- IP
- User agent

### 🔑 Zabezpieczenia

- Generator haseł
- Generator hashy

### 🕑 Data i czas

- Unix timestamp

### 📄 Inne

- Generator liczb losowych
- GPS

## 👨‍💻 Uruchamianie lokalnie

1. Wymagania
    - Node.js
    - GIT

2. Sklonuj repozytorium i przejdź do jego folderu

    ```bash
    git clone https://github.com/bartekl1/tools.git
    cd tools
    ```

3. Zainstaluj wymagane biblioteki

    ```bash
    npm install
    ```

4. Zbuduj wymagane biblioteki

    ```bash
    npm run build
    ```

5. Uruchom serwer

    ```bash
    node .
    ```

    lub

    ```bash
    npm start
    ```

    Możesz zmienić port serwera uruchamiając poniższe polecenie:

    ```bash
    node . -p <PORT>
    ```

6. Otwórz [http://localhost:3000/](http://localhost:3000/) lub inny URL jeśli zmieniłeś port
