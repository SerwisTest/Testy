
(() => {
  "use strict";

  const DEVICES = [{"id": "iphone-11", "brand": "Apple", "model": "iPhone 11", "year": "2019", "level": "Średni", "summary": "Karta startowa z bezpieczną kolejnością diagnostyki, kontrolą baterii, ekranu, aparatów i ładowania.", "tags": ["bateria", "ekran", "ładowanie", "zalanie"], "issues": [["Nie ładuje", "Sprawdź przewód i zasilacz, oczyść port bez użycia metalu, wykonaj pomiar poboru i dopiero potem oceniaj port lub płytę."], ["Brak obrazu", "Zweryfikuj reakcję urządzenia, podświetlenie, złącze wyświetlacza i stan taśm po odłączeniu baterii."], ["Szybko rozładowuje", "Porównaj kondycję baterii, temperaturę, aktywność w tle i pobór prądu w spoczynku."], ["Po zalaniu", "Nie uruchamiaj wielokrotnie. Odłącz zasilanie, dokumentuj ślady cieczy i rozpocznij kontrolę korozji."]], "diagnostics": [["Wywiad", "Ustal moment wystąpienia usterki, kontakt z cieczą, upadek, wcześniejsze naprawy i używane akcesoria."], ["Oględziny", "Sprawdź ramkę, szkło, port, aparaty i ślady rozszczelnienia. Zrób zdjęcia przed otwarciem."], ["Test bazowy", "Wykonaj test ładowania, dźwięku, mikrofonu, aparatów, sieci, Wi‑Fi, Bluetooth i czujników."], ["Pomiar", "Przy problemie z zasilaniem użyj bezpiecznego źródła i porównaj pobór z własną bazą napraw."], ["Weryfikacja po naprawie", "Powtórz pełną checklistę, sprawdź temperatury, komunikaty systemowe oraz szczelność montażu."]], "checklist": ["Kopia danych lub potwierdzenie odpowiedzialności klienta", "Wyłącz urządzenie przed odłączaniem taśm", "Odłącz baterię przed pozostałymi złączami", "Oddziel i opisz śruby z poszczególnych sekcji", "Nie naciskaj ogniwa i nie używaj ostrych narzędzi przy baterii", "Po montażu sprawdź ekran, dotyk, aparaty, audio, sieć i ładowanie"]}, {"id": "iphone-11-pro", "brand": "Apple", "model": "iPhone 11 Pro", "year": "2019", "level": "Zaawansowany", "summary": "Podręczna karta diagnostyczna modelu Pro z naciskiem na ekran OLED, aparat i bezpieczną obsługę modułów.", "tags": ["OLED", "aparaty", "Face ID", "bateria"], "issues": [["Zielony odcień lub migotanie", "Porównaj zachowanie na znanym sprawnym ekranie i sprawdź, czy objaw nie zależy od jasności lub temperatury."], ["Aparat drży", "Oceń mechanicznie moduł, szybkę aparatu i ślady uderzenia. Nie przykładaj magnesów do modułu stabilizacji."], ["Face ID niedostępne", "Nie wymieniaj losowo sparowanych elementów. Sprawdź stan taśm, ślady cieczy i komunikaty diagnostyczne."], ["Przegrzewanie", "Ustal proces wywołujący temperaturę, pobór prądu i stan baterii przed ingerencją w płytę."]], "diagnostics": [["Dokumentacja", "Zapisz objaw, historię napraw i komunikaty systemowe."], ["Test bez otwierania", "Sprawdź ekran, dotyk, Face ID, aparaty, ładowanie i temperaturę."], ["Izolacja modułu", "Odłączaj moduły wyłącznie przy odłączonej baterii i testuj po jednej zmianie."], ["Kontrola złączy", "Pod mikroskopem oceń piny, zabrudzenia, korozję i deformacje."], ["Test końcowy", "Zweryfikuj wszystkie funkcje oraz komunikaty o częściach po naprawie."]], "checklist": ["Dokumentacja wizualna przed otwarciem", "Ochrona ekranu OLED przed naciskiem i temperaturą", "Odłączenie baterii jako pierwszy krok wewnątrz urządzenia", "Brak ingerencji w sparowane moduły bez uzasadnienia", "Test Face ID i aparatów przed zamknięciem", "Nowa uszczelka i kontrola równomiernego domknięcia"]}, {"id": "iphone-11-pro-max", "brand": "Apple", "model": "iPhone 11 Pro Max", "year": "2019", "level": "Zaawansowany", "summary": "Duży wariant Pro: kontrola baterii, ekranu OLED, stabilizacji aparatów i elementów podatnych na naprężenia.", "tags": ["OLED", "duża bateria", "aparaty", "rama"], "issues": [["Losowe restarty", "Zapisz częstotliwość, sprawdź logi analityczne i historię części przed diagnozą płyty."], ["Brak dotyku", "Sprawdź pęknięcia, ramę, złącza i znany sprawny moduł bez naciskania płyty."], ["Nierówna ramka", "Oceń skrzywienie przed wymianą ekranu — montaż na zdeformowanej ramie zwiększa ryzyko ponownego uszkodzenia."], ["Słabe ładowanie", "Zweryfikuj przewód, zasilacz, port i pobór. Nie zakładaj od razu uszkodzenia układu na płycie."]], "diagnostics": [["Oględziny ramy", "Sprawdź płaskość, ślady uderzeń i odklejenie obudowy."], ["Test baterii", "Porównaj kondycję, temperaturę i zachowanie pod obciążeniem."], ["Test peryferiów", "Sprawdź aparaty, mikrofony, głośniki, wibrację i czujniki."], ["Izolacja usterki", "Testuj moduły pojedynczo przy odłączonym zasilaniu."], ["Kontrola końcowa", "Pełny test funkcjonalny i stabilność podczas ładowania."]], "checklist": ["Rama nie jest wygięta", "Bateria nie jest spuchnięta", "Śruby są odłożone sekcjami", "Taśmy nie są naprężone", "Aparaty nie mają pyłu pod szkłem", "Urządzenie przechodzi test pod obciążeniem"]}, {"id": "iphone-12", "brand": "Apple", "model": "iPhone 12", "year": "2020", "level": "Zaawansowany", "summary": "Diagnostyka ekranu OLED, ładowania przewodowego i bezprzewodowego, sieci 5G oraz skutków upadków.", "tags": ["OLED", "MagSafe", "5G", "Face ID"], "issues": [["Brak ładowania bezprzewodowego", "Zdejmij magnetyczne akcesoria, sprawdź temperaturę, obudowę i zachowanie na sprawnej ładowarce."], ["Brak sieci", "Sprawdź kartę SIM, ustawienia, anteny i ślady uderzenia bez wprowadzania zmian programowych w ciemno."], ["Czarny ekran", "Ustal, czy telefon działa w tle; sprawdź wibracje, dźwięk, pobór oraz znany sprawny ekran."], ["Face ID po wymianie ekranu", "Zweryfikuj stan oryginalnych elementów i taśm; nie zamieniaj sparowanych podzespołów przypadkowo."]], "diagnostics": [["Test zewnętrzny", "Sprawdź wszystkie funkcje przed otwarciem."], ["Kontrola uszkodzeń", "Oceń tył, ramę i strefę cewek."], ["Test ładowania", "Porównaj przewodowe i bezprzewodowe źródło."], ["Kontrola złączy", "Użyj powiększenia i nie dociskaj złączy na siłę."], ["Test po naprawie", "Sprawdź sieć, NFC, ładowanie i temperaturę."]], "checklist": ["Usuń akcesoria magnetyczne do diagnostyki", "Odłącz baterię przed złączami ekranu", "Chroń cewkę i tylną szybę przed punktowym naciskiem", "Sprawdź NFC i ładowanie bezprzewodowe", "Sprawdź wszystkie aparaty i mikrofony", "Zapisz komunikaty systemowe o częściach"]}, {"id": "iphone-13", "brand": "Apple", "model": "iPhone 13", "year": "2021", "level": "Zaawansowany", "summary": "Karta warsztatowa dla najczęstszych napraw ekranu, baterii, portu, aparatów oraz diagnostyki restartów.", "tags": ["restarty", "bateria", "OLED", "ładowanie"], "issues": [["Restart co kilka minut", "Sprawdź logi, ostatnie naprawy, taśmy i peryferia. Nie wskazuj układu bez potwierdzenia pomiarami."], ["Nie ładuje", "Testuj akcesoria, port, temperaturę i pobór. Oceń, czy problem jest stały czy zależny od ułożenia przewodu."], ["Brak dźwięku rozmów", "Sprawdź kratkę, głośnik, taśmy i ustawienia; po zalaniu oceń korozję."], ["Bateria szybko spada", "Porównaj kondycję, cykle, temperaturę, aktywność i stabilność napięcia."]], "diagnostics": [["Wywiad i logi", "Zapisz dokładny interwał restartu oraz zdarzenia systemowe."], ["Test modułów", "Testuj ładowanie, audio, aparaty i czujniki."], ["Oględziny wnętrza", "Szukaj brakujących osłon, źle poprowadzonych taśm i śladów cieczy."], ["Pomiar zasilania", "Porównaj pobór w różnych fazach uruchamiania."], ["Walidacja", "Dłuższy test stabilności, ładowania i temperatury."]], "checklist": ["Zapis logów przed resetem urządzenia", "Zdjęcia ułożenia osłon i śrub", "Odłączona bateria przy zmianie modułu", "Brak naprężenia przewodów antenowych", "Test połączenia, audio i czujników", "Minimum kilkanaście minut testu stabilności"]}, {"id": "iphone-14-pro", "brand": "Apple", "model": "iPhone 14 Pro", "year": "2022", "level": "Ekspercki", "summary": "Bezpieczny przewodnik diagnostyczny urządzenia Pro: ekran, aparaty, ładowanie, czujniki i testy po naprawie.", "tags": ["ProMotion", "aparaty", "OLED", "kalibracja"], "issues": [["Migotanie ekranu", "Sprawdź jasność, częstotliwość, temperaturę, uszkodzenie mechaniczne i znany sprawny moduł."], ["Aparat nie ostrzy", "Oceń szybkę, stabilizację, magnesy w akcesoriach i uszkodzenia po upadku."], ["Komunikat po naprawie", "Zapisz dokładny komunikat i sprawdź oficjalne wymagania konfiguracji części."], ["Brak reakcji", "Zweryfikuj ładowanie, wymuszony restart, temperaturę i pobór przed otwieraniem."]], "diagnostics": [["Test funkcji premium", "Ekran, jasność, odświeżanie, wszystkie aparaty i czujniki."], ["Historia części", "Sprawdź ustawienia systemowe i wcześniejsze naprawy."], ["Oględziny", "Rama, tył, obiektywy, uszczelnienie."], ["Izolacja", "Jedna zmiana modułu na raz, zawsze przy odłączonej baterii."], ["Konfiguracja końcowa", "Sprawdź wymagane narzędzia programowe producenta i pełną diagnostykę."]], "checklist": ["Test wszystkich aparatów przed naprawą", "Dokumentacja komunikatów systemowych", "Ochrona modułów optycznych przed pyłem", "Brak kontaktu narzędzi z baterią", "Test jasności i dotyku na całej powierzchni", "Weryfikacja konfiguracji części po montażu"]}, {"id": "iphone-15-pro", "brand": "Apple", "model": "iPhone 15 Pro", "year": "2023", "level": "Ekspercki", "summary": "Karta startowa USB‑C, obudowy, baterii, kamer i diagnostyki temperatur dla nowej konstrukcji Pro.", "tags": ["USB-C", "temperatura", "aparaty", "tytan"], "issues": [["Nie ładuje przez USB‑C", "Sprawdź przewód, zasilacz, zabrudzenia, orientację, temperaturę i komunikaty o akcesorium."], ["Wysoka temperatura", "Ustal obciążenie, ładowanie, aplikacje i warunki otoczenia przed oceną sprzętu."], ["Uszkodzony tył", "Oceń ramę, aparaty, cewkę i elementy pod szkłem przed wymianą."], ["Brak obrazu po upadku", "Sprawdź reakcję systemu, ekran, złącza i deformację konstrukcji."]], "diagnostics": [["USB‑C", "Test na pewnym przewodzie i zasilaczu, kontrola portu pod powiększeniem."], ["Termika", "Zapisz temperaturę spoczynku i pod obciążeniem."], ["Konstrukcja", "Sprawdź ramę, tył oraz okolice aparatów."], ["Test modułów", "Ekran, aparaty, audio, NFC, sieć i ładowanie."], ["Test końcowy", "Stabilność, temperatury, komunikaty systemowe i pełna checklista."]], "checklist": ["Port USB‑C bez włókien i korozji", "Właściwe akcesoria testowe", "Brak naprężenia ramy", "Ochrona aparatów przed zabrudzeniem", "Test przewodowy i bezprzewodowy", "Kontrola temperatur po złożeniu"]}, {"id": "galaxy-s21", "brand": "Samsung", "model": "Galaxy S21 5G", "year": "2021", "level": "Zaawansowany", "summary": "Baza startowa dla ekranu AMOLED, USB‑C, baterii, sieci i diagnostyki przy użyciu Samsung Members.", "tags": ["AMOLED", "USB-C", "Samsung Members", "bateria"], "issues": [["Nie ładuje", "Sprawdź przewód, zasilacz, port, wilgoć wykrytą przez system i temperaturę."], ["Brak obrazu", "Ustal, czy urządzenie działa, sprawdź ekran, złącza i uszkodzenie ramy."], ["Komunikat o wilgoci", "Nie omijaj zabezpieczenia. Oczyść i wysusz port, sprawdź korozję oraz akcesoria."], ["Słaby zasięg", "Porównaj kartę SIM, tryb sieci, anteny i skutki upadku."]], "diagnostics": [["Samsung Members", "Uruchom dostępne testy przed otwarciem."], ["Oględziny", "Sprawdź tył, ekran, port i ramę."], ["Test ładowania", "Porównaj źródła i zachowanie przy różnych temperaturach."], ["Kontrola modułów", "Odłącz baterię przed zmianą podzespołów."], ["Test końcowy", "Uruchom ponownie diagnostykę i test połączeń."]], "checklist": ["Kopia danych klienta lub zgoda na ryzyko", "Wyjęta karta SIM", "Rozładowana bateria w bezpiecznym zakresie", "Dokumentacja położenia śrub i osłon", "Test Samsung Members po naprawie", "Kontrola ładowania i komunikatu wilgoci"]}, {"id": "galaxy-s22-ultra", "brand": "Samsung", "model": "Galaxy S22 Ultra", "year": "2022", "level": "Ekspercki", "summary": "Karta dużego modelu Ultra: ekran, S Pen, aparaty, USB‑C, bateria i kontrola konstrukcji po upadku.", "tags": ["S Pen", "AMOLED", "aparaty", "USB-C"], "issues": [["S Pen nie działa", "Sprawdź rysik, ustawienia, pole detekcji na całym ekranie i uszkodzenie po upadku."], ["Aparat nie ostrzy", "Oceń szybki, moduły, stabilizację oraz akcesoria magnetyczne."], ["Pęknięty ekran", "Sprawdź ramę i płaskość urządzenia przed montażem nowego modułu."], ["Brak szybkiego ładowania", "Zweryfikuj zgodny zasilacz, przewód, ustawienia, temperaturę i port."]], "diagnostics": [["Test S Pen", "Pełna powierzchnia, przyciski i odkładanie w obudowie."], ["Test aparatów", "Każdy obiektyw, ostrość, stabilizacja, wideo."], ["Kontrola ramy", "Skrzywienia, szczeliny i nacisk na ekran."], ["Test zasilania", "Ładowanie zwykłe, szybkie i bezprzewodowe."], ["Walidacja", "Samsung Members i dłuższy test termiczny."]], "checklist": ["Rama jest płaska", "S Pen działa na całej powierzchni", "Każdy aparat przechodzi test", "Brak pyłu pod obiektywami", "USB‑C stabilnie trzyma przewód", "Diagnostyka systemowa bez nowych błędów"]}, {"id": "galaxy-s23-ultra", "brand": "Samsung", "model": "Galaxy S23 Ultra", "year": "2023", "level": "Ekspercki", "summary": "Diagnostyka modelu Ultra z naciskiem na aparaty, ekran, S Pen, ładowanie i kontrolę termiczną.", "tags": ["S Pen", "200 MP", "AMOLED", "termika"], "issues": [["Aparat drży lub hałasuje", "Usuń magnetyczne etui, testuj każdy moduł i oceń uszkodzenie po upadku."], ["Martwa strefa S Pen", "Sprawdź ekran bez etui i akcesoriów magnetycznych oraz wykonaj test siatki."], ["Przegrzewanie", "Porównaj spoczynek, ładowanie i obciążenie; sprawdź aplikacje i sygnał sieci."], ["Problemy z USB‑C", "Oceń zabrudzenia, wilgoć, przewód, zasilacz i stabilność mechaniczną."]], "diagnostics": [["Test systemowy", "Samsung Members i zapis objawów."], ["Aparaty", "Zdjęcia, wideo, ostrość i stabilizacja każdego modułu."], ["S Pen", "Pełna powierzchnia i wpływ akcesoriów."], ["Zasilanie", "Temperatura, przewodowe i bezprzewodowe ładowanie."], ["Kontrola końcowa", "Ponowna diagnostyka oraz test komunikacji."]], "checklist": ["Brak magnetycznych akcesoriów podczas testu", "Czyste obiektywy i port", "Pełny test S Pen", "Test ładowania z pewnym zestawem", "Kontrola temperatur pod obciążeniem", "Wszystkie moduły aparatu działają"]}, {"id": "galaxy-s24-ultra", "brand": "Samsung", "model": "Galaxy S24 Ultra", "year": "2024", "level": "Ekspercki", "summary": "Karta startowa nowej generacji Ultra: ekran, S Pen, aparaty, ładowanie, diagnostyka i bezpieczeństwo baterii.", "tags": ["S Pen", "AI", "aparaty", "USB-C"], "issues": [["Nietypowe zachowanie aparatu", "Wyklucz ustawienia i aktualizacje, testuj moduły osobno, sprawdź wpływ etui."], ["Brak funkcji S Pen", "Test powierzchni, ustawień, rysika i akcesoriów magnetycznych."], ["Szybki spadek baterii", "Porównaj aktywność systemu, zasięg, temperaturę i kondycję."], ["Nie ładuje", "Sprawdź port, wilgoć, przewód, zasilacz, temperaturę i komunikaty."]], "diagnostics": [["Aktualizacja i test", "Zapisz wersję systemu, objaw i wynik Samsung Members."], ["Kontrola mechaniczna", "Rama, ekran, aparaty, port i tył."], ["Test funkcji", "S Pen, aparaty, audio, sieć, NFC i ładowanie."], ["Izolacja problemu", "Jedna zmiana na raz i dokumentacja wyniku."], ["Walidacja", "Pełny test po naprawie i stabilność termiczna."]], "checklist": ["Wynik diagnostyki zapisany przed naprawą", "Karta SIM wyjęta", "Bateria bez uszkodzeń mechanicznych", "S Pen sprawdzony bez etui", "Każdy aparat przetestowany", "Diagnostyka końcowa bez nowych błędów"]}, {"id": "galaxy-a55", "brand": "Samsung", "model": "Galaxy A55 5G", "year": "2024", "level": "Średni", "summary": "Praktyczna karta popularnego modelu A: ekran, bateria, port USB‑C, aparaty i diagnostyka po zalaniu.", "tags": ["AMOLED", "USB-C", "bateria", "zalanie"], "issues": [["Nie włącza się", "Sprawdź ładowarkę, kabel, port, reakcję na restart i pobór przed wymianą części."], ["Ekran działa bez dotyku", "Oceń szkło, ramę, złącze i zachowanie na znanym sprawnym module."], ["Słabe ładowanie", "Sprawdź zabrudzenia, wilgoć, przewód, zasilacz i temperaturę."], ["Po zalaniu", "Nie ładuj urządzenia. Odłącz zasilanie, udokumentuj ciecz i sprawdź korozję."]], "diagnostics": [["Wywiad", "Kontakt z cieczą, upadek, ładowarka i historia napraw."], ["Test systemowy", "Samsung Members, jeżeli urządzenie się uruchamia."], ["Oględziny", "Port, ekran, ramka, aparaty i tył."], ["Test modułów", "Ekran, bateria, port, audio, kamery."], ["Kontrola końcowa", "Ładowanie, sieć, audio, aparaty i stabilność."]], "checklist": ["Urządzenie wyłączone przed otwarciem", "Brak ładowania po kontakcie z cieczą", "Śruby odłożone według sekcji", "Bateria bez zagięć i nacisku", "Test dotyku na całej powierzchni", "Samsung Members po naprawie"]}];
  const OFFICIAL_SOURCES = {
    Apple: [
      {title:"Apple — Samoobsługowa naprawa",description:"Oficjalne podręczniki, części, narzędzia i informacje o konfiguracji po naprawie.",url:"https://support.apple.com/pl-pl/self-service-repair"},
      {title:"Apple — Serwis i naprawa iPhone",description:"Oficjalne informacje serwisowe i identyfikacja opcji naprawy.",url:"https://support.apple.com/pl-pl/iphone/repair"}
    ],
    Samsung: [
      {title:"Samsung — Self Repair",description:"Oficjalna strona programu samodzielnych napraw, filmów i przewodników.",url:"https://www.samsung.com/pl/support/self-repair/"},
      {title:"Samsung — program samodzielnej naprawy",description:"Informacje o diagnostyce, przewodnikach i aplikacji Self‑Repair Assistant.",url:"https://www.samsung.com/pl/support/mobile-devices/how-to-use-samsungs-self-repair-programme/"}
    ]
  };

  const ACADEMY = [
    {id:"academy-no-power",brand:"academy",model:"Nie włącza się",year:"Diagnostyka",level:"Podstawy",summary:"Bezpieczna kolejność od wywiadu i oględzin do pomiaru poboru prądu.",tags:["zasilanie","pobór","bateria"],issues:[["Brak reakcji","Najpierw wyklucz akcesoria, port, temperaturę i stan baterii. Nie wstrzykuj napięcia w nieznane linie."]],diagnostics:[["Wywiad","Upadek, zalanie, ostatnia naprawa, ładowarka i moment awarii."],["Oględziny","Port, obudowa, bateria, ślady cieczy i ingerencji."],["Źródło zasilania","Pewny kabel, zasilacz i bezpieczny czas ładowania."],["Pobór","Porównaj zachowanie z własnymi sprawdzonymi przypadkami."],["Izolacja","Odłączaj moduły pojedynczo przy odłączonej baterii."]],checklist:["Brak widocznego uszkodzenia baterii","Pewne akcesoria testowe","Dokumentacja poboru i temperatury","Jedna zmiana na raz","Brak przypadkowego zwarcia sondą","Test końcowy po usunięciu przyczyny"]},
    {id:"academy-liquid",brand:"academy",model:"Urządzenie po zalaniu",year:"Procedura",level:"Zaawansowany",summary:"Procedura ograniczająca dalsze szkody: odłączenie zasilania, dokumentacja, kontrola korozji i testy.",tags:["zalanie","korozja","bezpieczeństwo"],issues:[["Po kontakcie z cieczą","Nie uruchamiaj i nie ładuj wielokrotnie. Szybko odłącz źródło energii, jeśli można to zrobić bezpiecznie."]],diagnostics:[["Dokumentacja","Rodzaj cieczy, czas, próby uruchamiania i zdjęcia."],["Odłączenie","Wyłącz i odłącz baterię bez uszkadzania ogniwa."],["Oględziny","Korozja, osady, przebarwienia i uszkodzone złącza."],["Czyszczenie","Dobierz proces do sprzętu i zakresu szkód; unikaj zamykania wilgoci."],["Test etapowy","Zasilanie kontrolowane i testy modułów po inspekcji."]],checklist:["Brak ładowania przed inspekcją","Zdjęcia śladów cieczy","Odłączona bateria","Ochrona danych klienta","Kontrola pod powiększeniem","Test stabilności po czyszczeniu"]},
    {id:"academy-soldering",brand:"academy",model:"Mikrolutowanie — start",year:"Akademia",level:"Podstawy",summary:"Zasady przygotowania stanowiska, ochrony płyty, doboru temperatury i kontroli jakości połączeń.",tags:["lutowanie","topnik","mikroskop"],issues:[["Zimny lut","Połączenie może wyglądać matowo lub nieregularnie, ale ocenę potwierdź mechanicznie i pomiarowo."],["Oderwany pad","Nie ukrywaj uszkodzenia cyną. Oceń połączenie elektryczne, mechaniczne i możliwość bezpiecznej rekonstrukcji."]],diagnostics:[["Przygotowanie","ESD, wentylacja, czysta optyka i stabilne mocowanie."],["Ochrona","Odłącz baterię, osłoń tworzywa i elementy wrażliwe."],["Proces","Minimalna skuteczna energia cieplna, właściwy topnik i kontrolowany czas."],["Inspekcja","Mostki, kulki cyny, pozycja elementu i zwilżenie."],["Pomiar","Zwarcia, ciągłość, wartości porównawcze i test funkcjonalny."]],checklist:["Stanowisko ESD","Wentylacja i ochrona oczu","Bateria odłączona","Płyta stabilnie zamocowana","Inspekcja mikroskopowa po pracy","Czyszczenie i pomiary końcowe"]}
  ];

  const ALL = [...DEVICES, ...ACADEMY];
  let activeBrand = "all";
  let activeQuery = "";

  const $k = id => document.getElementById(id);
  const escK = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

  function schematic(device, large=false) {
    const apple = device.brand === "Apple";
    const academy = device.brand === "academy";
    const accent = academy ? "#b18cff" : apple ? "#5da9ff" : "#48e0bd";
    const label = academy ? "KNOWLEDGE" : device.model.replace("Galaxy ","").replace("iPhone ","IP ");
    return `<svg viewBox="0 0 420 250" role="img" aria-label="Autorski schemat poglądowy ${escK(device.model)}">
      <defs>
        <linearGradient id="frame-${device.id}" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${accent}" stop-opacity=".65"/><stop offset="1" stop-color="#182d42"/>
        </linearGradient>
        <filter id="glow-${device.id}"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="44" y="18" width="150" height="214" rx="25" fill="#06111c" stroke="url(#frame-${device.id})" stroke-width="4"/>
      <rect x="56" y="31" width="126" height="188" rx="18" fill="#0c2235" stroke="#28455e"/>
      <rect x="68" y="82" width="100" height="105" rx="12" fill="${accent}" fill-opacity=".12" stroke="${accent}" stroke-opacity=".65"/>
      <text x="118" y="135" text-anchor="middle" fill="${accent}" font-size="12" font-family="Arial" font-weight="700">${academy ? "DIAGNOSTYKA" : "BATERIA"}</text>
      <rect x="70" y="42" width="48" height="33" rx="8" fill="#132f47" stroke="#5c7892"/>
      <circle cx="83" cy="55" r="7" fill="#06111c" stroke="${accent}"/><circle cx="103" cy="55" r="7" fill="#06111c" stroke="${accent}"/>
      <rect x="122" y="43" width="44" height="30" rx="7" fill="#132f47" stroke="#5c7892"/>
      <path d="M58 196h122" stroke="${accent}" stroke-opacity=".65" stroke-width="3"/>
      <g transform="translate(225 25)">
        <rect width="150" height="46" rx="12" fill="#0b2133" stroke="${accent}" stroke-opacity=".55"/>
        <text x="75" y="20" text-anchor="middle" fill="#dce8f4" font-size="11" font-family="Arial" font-weight="700">MODUŁ APARATÓW</text>
        <text x="75" y="35" text-anchor="middle" fill="#8da3b7" font-size="9" font-family="Arial">kontrola optyki i złączy</text>
        <rect y="62" width="150" height="46" rx="12" fill="#0b2133" stroke="${accent}" stroke-opacity=".55"/>
        <text x="75" y="82" text-anchor="middle" fill="#dce8f4" font-size="11" font-family="Arial" font-weight="700">${academy ? "PLAN POMIARÓW" : "PŁYTA / ZŁĄCZA"}</text>
        <text x="75" y="97" text-anchor="middle" fill="#8da3b7" font-size="9" font-family="Arial">inspekcja pod powiększeniem</text>
        <rect y="124" width="150" height="46" rx="12" fill="#0b2133" stroke="${accent}" stroke-opacity=".55"/>
        <text x="75" y="144" text-anchor="middle" fill="#dce8f4" font-size="11" font-family="Arial" font-weight="700">${academy ? "CHECKLISTA" : "PORT / AUDIO"}</text>
        <text x="75" y="159" text-anchor="middle" fill="#8da3b7" font-size="9" font-family="Arial">test przed i po naprawie</text>
      </g>
      <path d="M194 58C213 58 211 48 225 48M194 122C211 122 212 110 225 110M194 193C210 193 210 172 225 172" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="5 5" filter="url(#glow-${device.id})"/>
      <text x="48" y="244" fill="#71879a" font-size="9" font-family="Arial">AUTORSKI SCHEMAT POGLĄDOWY • NIE JEST BOARDVIEW</text>
      <text x="372" y="244" text-anchor="end" fill="${accent}" font-size="9" font-family="Arial" font-weight="700">${escK(label)}</text>
    </svg>`;
  }

  function searchableText(d) {
    return [
      d.brand,d.model,d.year,d.summary,...d.tags,
      ...d.issues.flat(),...d.diagnostics.flat(),...d.checklist
    ].join(" ").toLowerCase();
  }

  function filtered() {
    const query = activeQuery.trim().toLowerCase();
    return ALL.filter(d => {
      const brandMatch = activeBrand === "all" || d.brand === activeBrand;
      return brandMatch && (!query || searchableText(d).includes(query));
    });
  }

  function card(d) {
    return `<article class="knowledge-card" data-knowledge-id="${d.id}" tabindex="0">
      <div class="knowledge-card-visual">${schematic(d)}</div>
      <div class="knowledge-card-body">
        <div class="knowledge-card-top">
          <div><span class="knowledge-brand">${escK(d.brand === "academy" ? "Akademia" : d.brand)}</span><h5>${escK(d.model)}</h5></div>
          <span class="knowledge-level">${escK(d.level)}</span>
        </div>
        <p>${escK(d.summary)}</p>
        <div class="knowledge-tags">${d.tags.slice(0,4).map(t=>`<span>${escK(t)}</span>`).join("")}</div>
      </div>
    </article>`;
  }

  function renderCards() {
    const list = filtered();
    $k("knowledgeCards").innerHTML = list.length ? list.map(card).join("") : `<div class="knowledge-empty"><strong>Brak wyników</strong><p>Zmień filtr albo wpisz inny objaw.</p></div>`;
    $k("knowledgeResultsCount").textContent = `${list.length} wyników`;
    $k("knowledgeResultsTitle").textContent = activeQuery ? `Wyniki dla „${activeQuery}”` : activeBrand === "all" ? "Najpopularniejsze modele" : activeBrand === "academy" ? "Akademia serwisanta" : activeBrand;
  }

  function renderSymptoms() {
    const symptoms = [
      ["Nie włącza się","zasilanie"],
      ["Nie ładuje","ładowanie"],
      ["Brak obrazu","ekran"],
      ["Restartuje się","restart"],
      ["Po zalaniu","zalanie"],
      ["Brak sieci","sieć"],
      ["Aparat nie działa","aparat"],
      ["Szybko traci baterię","bateria"]
    ];
    $k("knowledgeSymptomList").innerHTML = symptoms.map(([name,q])=>`<button type="button" data-knowledge-symptom="${q}"><span>${name}</span><small>→</small></button>`).join("");
  }

  function panelTab(id,title,html,active=false) {
    return `<section class="knowledge-detail-panel${active?" active":""}" data-knowledge-panel="${id}">${html}</section>`;
  }

  function openDevice(id) {
    const d = ALL.find(x=>x.id===id);
    if(!d) return;
    const sources = d.brand === "academy" ? [] : (OFFICIAL_SOURCES[d.brand] || []);
    const issues = `<div class="knowledge-grid-2">${d.issues.map(([title,text])=>`<article class="knowledge-info-card"><h3>${escK(title)}</h3><p class="note">${escK(text)}</p></article>`).join("")}</div>`;
    const diagnostics = `<div class="knowledge-steps">${d.diagnostics.map(([title,text],i)=>`<div class="knowledge-step"><b>${i+1}</b><div><strong>${escK(title)}</strong><p>${escK(text)}</p></div></div>`).join("")}</div>`;
    const checklist = `<div class="knowledge-checklist">${d.checklist.map((x,i)=>`<label><input type="checkbox" data-kh-check="${d.id}-${i}"><span>${escK(x)}</span></label>`).join("")}</div>`;
    const sourceHtml = sources.length ? `<div class="knowledge-sources">${sources.map(s=>`<div class="knowledge-source"><div><strong>${escK(s.title)}</strong><span>${escK(s.description)}</span></div><a class="table-action" href="${s.url}" target="_blank" rel="noopener noreferrer">Otwórz źródło ↗</a></div>`).join("")}</div>` : `<article class="knowledge-info-card"><h3>Własny materiał szkoleniowy</h3><p class="note">Ten rozdział zawiera ogólne procedury przygotowane dla Knowledge Hub. Nie zastępuje instrukcji producenta ani dokumentacji konkretnego urządzenia.</p></article>`;
    $k("knowledgeDialogContent").innerHTML = `
      <div class="knowledge-detail-hero">
        <div class="knowledge-detail-art">${schematic(d,true)}</div>
        <div class="knowledge-detail-title">
          <span class="knowledge-brand">${escK(d.brand === "academy" ? "Akademia serwisanta" : d.brand)}</span>
          <h2>${escK(d.model)}</h2>
          <p>${escK(d.summary)}</p>
          <span class="knowledge-source-pill">✓ Materiał poglądowy • ${escK(d.level)} • ${escK(d.year)}</span>
        </div>
      </div>
      <nav class="knowledge-tabs">
        <button class="active" data-kh-tab="issues">Typowe usterki</button>
        <button data-kh-tab="diagnostics">Diagnostyka</button>
        <button data-kh-tab="checklist">Checklista</button>
        <button data-kh-tab="sources">Źródła</button>
      </nav>
      ${panelTab("issues","Typowe usterki",issues,true)}
      ${panelTab("diagnostics","Diagnostyka",diagnostics)}
      ${panelTab("checklist","Checklista",checklist)}
      ${panelTab("sources","Źródła",sourceHtml)}
    `;
    $k("knowledgeDialog").showModal();
  }

  function closestModel(brand,model) {
    const q = `${brand||""} ${model||""}`.toLowerCase().replace(/[^a-z0-9ąćęłńóśźż]+/g," ");
    if(!q.trim()) return null;
    let best=null,score=0;
    for(const d of DEVICES) {
      const words = `${d.brand} ${d.model}`.toLowerCase().replace(/[^a-z0-9ąćęłńóśźż]+/g," ").split(" ").filter(Boolean);
      const current = words.reduce((n,w)=>n+(q.includes(w)?1:0),0);
      if(current>score){score=current;best=d;}
    }
    return score>=2 ? best : null;
  }

  document.addEventListener("click", event => {
    const cardEl = event.target.closest("[data-knowledge-id]");
    if(cardEl) return openDevice(cardEl.dataset.knowledgeId);

    const brand = event.target.closest("[data-knowledge-brand]");
    if(brand) {
      activeBrand = brand.dataset.knowledgeBrand;
      document.querySelectorAll("[data-knowledge-brand]").forEach(b=>b.classList.toggle("active",b===brand));
      renderCards();
      return;
    }

    const symptom = event.target.closest("[data-knowledge-symptom]");
    if(symptom) {
      activeBrand = "all";
      activeQuery = symptom.dataset.knowledgeSymptom;
      $k("knowledgeSearch").value = activeQuery;
      document.querySelectorAll("[data-knowledge-brand]").forEach(b=>b.classList.toggle("active",b.dataset.knowledgeBrand==="all"));
      renderCards();
      return;
    }

    const tab = event.target.closest("[data-kh-tab]");
    if(tab) {
      const id = tab.dataset.khTab;
      document.querySelectorAll("[data-kh-tab]").forEach(b=>b.classList.toggle("active",b===tab));
      document.querySelectorAll("[data-knowledge-panel]").forEach(p=>p.classList.toggle("active",p.dataset.knowledgePanel===id));
    }
  });

  document.addEventListener("keydown", event => {
    const card = event.target.closest?.("[data-knowledge-id]");
    if(card && (event.key==="Enter" || event.key===" ")) {
      event.preventDefault(); openDevice(card.dataset.knowledgeId);
    }
  });

  $k("knowledgeSearch")?.addEventListener("input", event => {
    activeQuery = event.target.value;
    renderCards();
  });

  $k("openKnowledgeForOrder")?.addEventListener("click", () => {
    const match = closestModel($k("orderBrand")?.value,$k("orderModel")?.value);
    if(match) return openDevice(match.id);
    if(typeof showTab === "function") showTab("knowledge");
    activeQuery = `${$k("orderBrand")?.value||""} ${$k("orderModel")?.value||""}`.trim();
    $k("knowledgeSearch").value = activeQuery;
    renderCards();
    alert("Nie znaleziono dokładnej karty. Otworzyłem wyszukiwarkę Bazy Wiedzy.");
  });

  $k("knowledgeDeviceCount").textContent = ALL.length;
  renderSymptoms();
  renderCards();

  window.SerwisoweTeleKnowledge = {
    openDevice,
    findModel: closestModel,
    devices: ALL
  };
})();
