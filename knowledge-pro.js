
(() => {
  "use strict";

  const PARTS = {
    faceid:{
      title:"Czujniki / Face ID",
      text:"Sekcja górna z delikatnymi i sparowanymi elementami. Pracuj bez pośpiechu i nie przenoś elementów bez wcześniejszego testu.",
      meta:["sparowane elementy","delikatne taśmy","test przed otwarciem"],
      steps:[
        ["Wykonaj test wejściowy","Sprawdź Face ID, czujnik zbliżeniowy, automatyczną jasność, głośnik rozmów i aparat przedni. Zapisz każdy niedziałający element przed otwarciem.","Punkt kontrolny: nie zaczynaj demontażu bez zapisu stanu początkowego."],
        ["Wyłącz urządzenie","Odłącz przewód, wyłącz telefon i wyjmij kartę SIM. Przygotuj matę ESD i pojemniki na śruby.","Punkt kontrolny: urządzenie nie może być podłączone do źródła zasilania."],
        ["Podeprzyj ekran","Po otwarciu ustaw ekran tak, aby nie wisiał na taśmach i nie był odchylony poza bezpieczny zakres.","Punkt kontrolny: żadna taśma nie może być napięta."],
        ["Odłącz baterię","Zdejmij osłonę złącza, odłóż śruby według pozycji i podważ złącze baterii pionowo plastikowym narzędziem.","Punkt kontrolny: bateria ma pozostać odłączona do zakończenia pracy przy złączach."],
        ["Zdejmij osłonę czujników","Odkręcaj kolejno, odkładając każdą śrubę w przypisane miejsce. Nie zamieniaj ich pomiędzy sekcjami.","Punkt kontrolny: wykonaj zdjęcie układu przed zdjęciem osłony."],
        ["Odłącz taśmy","Podważaj złącza dokładnie pionowo. Nie przesuwaj narzędzia po płycie i nie wciskaj go pod taśmę.","Punkt kontrolny: złącze powinno puścić bez wyginania taśmy."],
        ["Skontroluj elementy","Pod mikroskopem sprawdź naderwania, załamania, korozję i ślady wcześniejszej naprawy.","Punkt kontrolny: przy uszkodzeniu sparowanego elementu nie wykonuj losowej podmiany."],
        ["Złóż w odwrotnej kolejności","Podepnij taśmy bez nacisku, załóż osłonę, a baterię podłącz dopiero po zakończeniu pracy przy pozostałych złączach.","Punkt kontrolny: każde złącze ma usiąść równo bez używania siły."],
        ["Wykonaj test końcowy","Sprawdź Face ID, czujniki, aparat przedni, głośnik rozmów i automatyczną jasność przed zamknięciem urządzenia.","Punkt kontrolny: zamknij urządzenie dopiero po pełnym teście."]
      ]
    },
    battery:{
      title:"Bateria",
      text:"Sekcja zasilania. Najważniejsze jest bezpieczne odłączenie, brak nacisku na ogniwo i kontrola temperatury.",
      meta:["ryzyko termiczne","odłącz jako pierwszą","kontrola puchnięcia"],
      steps:[
        ["Sprawdź stan przed naprawą","Zapisz kondycję baterii, temperaturę, komunikaty systemowe oraz zachowanie podczas ładowania.","Punkt kontrolny: udokumentuj puchnięcie lub deformację obudowy."],
        ["Przygotuj urządzenie","Wyłącz telefon, odłącz przewód, wyjmij SIM i przygotuj powierzchnię ESD.","Punkt kontrolny: nie pracuj na podłączonym urządzeniu."],
        ["Otwórz i podeprzyj ekran","Otwieraj równomiernie, chroń taśmy i nie naciskaj punktowo na ramę.","Punkt kontrolny: ekran nie może wisieć na taśmach."],
        ["Zdejmij osłonę złącza","Zrób zdjęcie położenia śrub, odkręć je kolejno i odłóż osobno.","Punkt kontrolny: nie mieszaj śrub z innymi sekcjami."],
        ["Odłącz baterię","Podważ złącze pionowo plastikowym narzędziem, bez dotykania sąsiednich elementów metalem.","Punkt kontrolny: upewnij się, że złącze nie wraca przypadkowo na styk."],
        ["Oceń ogniwo","Sprawdź puchnięcie, przebarwienia, zagięcia, zapach i temperaturę.","Punkt kontrolny: przy oznakach uszkodzenia przerwij standardową procedurę."],
        ["Usuń mocowanie baterii","Pracuj równomiernie, nie przebijaj i nie zaginaj ogniwa. Nie używaj ostrych narzędzi.","Punkt kontrolny: jeżeli ogniwo zaczyna się deformować, zatrzymaj pracę."],
        ["Oczyść powierzchnię","Usuń pozostałości kleju bez uszkadzania obudowy i elementów pod baterią.","Punkt kontrolny: powierzchnia musi być czysta i płaska."],
        ["Zamontuj nową baterię","Ułóż ją bez naprężenia, zastosuj właściwe mocowanie i nie dociskaj punktowo.","Punkt kontrolny: złącze ma dochodzić naturalnie, bez naciągania taśmy."],
        ["Test po montażu","Sprawdź ładowanie, temperaturę, stabilność i zachowanie pod obciążeniem przed zamknięciem urządzenia.","Punkt kontrolny: przerwij test przy nietypowym nagrzewaniu."]
      ]
    },
    board:{
      title:"Płyta i złącza",
      text:"Sekcja logiczna i złącza modułów. Najpierw wyklucz uszkodzenie modułu, złącza i taśmy, zanim podejrzysz płytę.",
      meta:["mikroskop","ESD","jedna zmiana naraz"],
      steps:[
        ["Zapisz pełny objaw","Zanotuj, które funkcje działają, kiedy pojawia się problem i czy urządzenie było wcześniej naprawiane.","Punkt kontrolny: unikaj diagnozy wyłącznie na podstawie jednego objawu."],
        ["Odłącz zasilanie","Wyłącz urządzenie i odłącz baterię przed dotykaniem złączy.","Punkt kontrolny: nie wypinaj modułów pod napięciem."],
        ["Udokumentuj osłony","Zrób zdjęcie każdej sekcji przed odkręceniem i odkładaj śruby osobno.","Punkt kontrolny: osłony i elementy dociskowe nie mogą się zamienić miejscami."],
        ["Zdejmij osłony","Podnoś je bez podważania elementów płyty i bez przesuwania po złączach.","Punkt kontrolny: sprawdź, czy żadna śruba nie pozostała w osłonie."],
        ["Oceń złącza","Pod mikroskopem szukaj wygiętych pinów, zabrudzeń, korozji i śladów nacisku.","Punkt kontrolny: nie prostuj pinów bez powiększenia."],
        ["Oceń taśmy","Sprawdź naderwania, załamania i miejsca przetarcia przy krawędziach obudowy.","Punkt kontrolny: oznacz każdą podejrzaną taśmę przed testem."],
        ["Testuj jeden moduł","Podmieniaj lub odłączaj tylko jeden element na raz, zapisując efekt.","Punkt kontrolny: kilka jednoczesnych zmian uniemożliwia ustalenie przyczyny."],
        ["Wykonaj pomiary porównawcze","Mierz tylko wtedy, gdy wiesz, czego oczekujesz i masz punkt odniesienia.","Punkt kontrolny: nie podawaj napięcia w nieznane linie."],
        ["Złóż i sprawdź docisk","Podepnij złącza równo, załóż osłony i sprawdź, czy nic nie jest naprężone.","Punkt kontrolny: nie wciskaj złącza, jeśli nie jest idealnie ustawione."],
        ["Test stabilności","Uruchom urządzenie, sprawdź wszystkie funkcje i wykonaj dłuższy test pracy.","Punkt kontrolny: chwilowe uruchomienie nie potwierdza naprawy."]
      ]
    },
    camera:{
      title:"Moduł aparatów",
      text:"Moduł optyczny wymaga ochrony przed pyłem, naciskiem i polem magnetycznym. Testuj każdy obiektyw osobno.",
      meta:["ochrona przed pyłem","test każdego obiektywu","bez magnesów"],
      steps:[
        ["Test przed otwarciem","Sprawdź aparat przedni i tylne obiektywy, zdjęcia, wideo, ostrość, stabilizację i przełączanie trybów.","Punkt kontrolny: zapisz, który obiektyw zgłasza problem."],
        ["Usuń akcesoria magnetyczne","Zdejmij etui, uchwyty i inne elementy mogące zakłócać stabilizację.","Punkt kontrolny: ponów test bez akcesoriów."],
        ["Wyłącz urządzenie","Odłącz przewód, wyłącz telefon i przygotuj czyste stanowisko.","Punkt kontrolny: ogranicz pył przed otwarciem."],
        ["Podeprzyj ekran","Otwórz urządzenie bez naprężania taśm.","Punkt kontrolny: ekran nie może zasłaniać dostępu ani wisieć na złączach."],
        ["Odłącz baterię","Zdejmij osłonę i odłącz zasilanie przed wypięciem aparatu.","Punkt kontrolny: nie dotykaj złączy aparatu przy podłączonej baterii."],
        ["Zdejmij osłonę aparatu","Udokumentuj śruby i kolejność elementów dociskowych.","Punkt kontrolny: nie upuszczaj śrub w okolice modułu."],
        ["Odłącz moduł","Podważ złącza pionowo, chwytaj moduł za obudowę i nie naciskaj soczewek.","Punkt kontrolny: nie używaj magnesu do podnoszenia modułu."],
        ["Skontroluj szybki i wnętrze","Sprawdź pył, pęknięcia, ślady cieczy i uszkodzenie stabilizacji.","Punkt kontrolny: zabezpiecz otwarte obiektywy przed kurzem."],
        ["Zamontuj moduł","Ułóż go bez naprężenia, podepnij złącza równo i załóż osłonę.","Punkt kontrolny: moduł nie może się poruszać po dokręceniu."],
        ["Test końcowy","Sprawdź każdy obiektyw, ostrość z bliska i daleka, wideo oraz stabilizację.","Punkt kontrolny: wykonaj test przed zamknięciem obudowy."]
      ]
    },
    speaker:{
      title:"Głośnik dolny",
      text:"Sekcja audio. Przed wymianą wyklucz zabrudzenie, ustawienia, problem programowy i uszkodzenie elementów sąsiednich.",
      meta:["audio","mikrofony","test po montażu"],
      steps:[
        ["Test wejściowy","Sprawdź dzwonek, multimedia, rozmowę, mikrofony i wibracje.","Punkt kontrolny: zapisz, czy problem występuje stale czy przy określonej głośności."],
        ["Oceń kratkę","Sprawdź zabrudzenie i uszkodzenia mechaniczne bez wciskania materiału do wnętrza.","Punkt kontrolny: nie używaj płynu bez kontroli, gdzie może się dostać."],
        ["Wyłącz urządzenie","Odłącz przewód, wyłącz telefon i przygotuj stanowisko.","Punkt kontrolny: nie pracuj przy aktywnym zasilaniu."],
        ["Odłącz baterię","Otwórz urządzenie, podeprzyj ekran i odłącz baterię.","Punkt kontrolny: bateria pozostaje odłączona podczas demontażu."],
        ["Udokumentuj sekcję dolną","Zrób zdjęcie śrub, głośnika, przewodów i elementów dociskowych.","Punkt kontrolny: każdą śrubę odłóż według pozycji."],
        ["Zdejmij elementy nad głośnikiem","Odkręcaj kolejno, nie ciągnij za przewody i nie podważaj taśm ostrym narzędziem.","Punkt kontrolny: sprawdź, czy nic nie blokuje modułu."],
        ["Wyjmij głośnik","Podnoś równomiernie, kontrolując elementy przylegające.","Punkt kontrolny: nie uszkodź uszczelnień i styków."],
        ["Oceń styki i komorę","Sprawdź korozję, zabrudzenie, deformację i ślady cieczy.","Punkt kontrolny: oczyść wyłącznie bezpieczną metodą."],
        ["Zamontuj i złóż sekcję","Ułóż moduł równo, przywróć elementy dociskowe i śruby zgodnie z dokumentacją.","Punkt kontrolny: nic nie może pozostać luźne."],
        ["Test końcowy","Sprawdź głośność, trzaski, mikrofony, wibracje i ładowanie.","Punkt kontrolny: test wykonaj przed ostatecznym zamknięciem."]
      ]
    },
    port:{
      title:"Port ładowania",
      text:"Sekcja dolna. Najpierw wyklucz akcesoria, zabrudzenia, wilgoć i problem programowy, zanim rozpoczniesz demontaż.",
      meta:["ładowanie","wilgoć","kontrola mechaniczna"],
      steps:[
        ["Potwierdź objaw","Sprawdź co najmniej jeden pewny przewód i zasilacz oraz zachowanie przy różnym ułożeniu wtyku.","Punkt kontrolny: ustal, czy problem jest elektryczny czy mechaniczny."],
        ["Sprawdź komunikaty","Zapisz komunikaty o wilgoci, akcesorium i temperaturze.","Punkt kontrolny: nie omijaj zabezpieczenia przed wilgocią."],
        ["Oceń port pod powiększeniem","Szukaj włókien, korozji, wygięć i luzu. Czyść bez użycia metalu.","Punkt kontrolny: nie dociskaj pinów i nie skrob wnętrza."],
        ["Porównaj ładowanie","Sprawdź ładowanie przewodowe, bezprzewodowe i komunikację z komputerem.","Punkt kontrolny: wynik pomaga odróżnić port od problemu zasilania."],
        ["Wyłącz urządzenie","Odłącz przewód, wyłącz telefon i przygotuj stanowisko ESD.","Punkt kontrolny: urządzenie nie może pozostać podłączone."],
        ["Otwórz i odłącz baterię","Podeprzyj ekran, zdejmij osłonę i odłącz zasilanie.","Punkt kontrolny: nie demontuj sekcji dolnej przy podłączonej baterii."],
        ["Udokumentuj sekcję dolną","Zrób zdjęcie śrub, głośnika, przewodów i elementów dociskowych.","Punkt kontrolny: każdą grupę śrub odłóż osobno."],
        ["Zdejmij elementy nad portem","Demontuj w kolejności, nie ciągnij za przewody i nie uszkadzaj mikrofonów.","Punkt kontrolny: oznacz położenie każdego elementu dociskowego."],
        ["Odłącz moduł portu","Podważ złącza pionowo i wyjmuj moduł bez zaginania taśmy.","Punkt kontrolny: sprawdź, czy klej lub przewody nie blokują demontażu."],
        ["Skontroluj moduł i obudowę","Oceń korozję, ślady cieczy, uszkodzenia mechaniczne i zabrudzenia.","Punkt kontrolny: usuń przyczynę, nie tylko wymień część."],
        ["Zamontuj moduł","Ułóż taśmę zgodnie z przebiegiem, podepnij złącza równo i odtwórz docisk.","Punkt kontrolny: taśma nie może być załamana ani naprężona."],
        ["Złóż sekcję dolną","Przywróć głośnik, przewody, osłony i śruby według dokumentacji zdjęciowej.","Punkt kontrolny: sprawdź, czy żadna śruba nie została pominięta."],
        ["Test etapowy","Podłącz baterię i sprawdź ładowanie, wykrywanie przewodu, mikrofony i komunikację z komputerem.","Punkt kontrolny: przerwij test przy nietypowej temperaturze."],
        ["Test końcowy","Sprawdź kilka cykli podłączenia, stabilność wtyku i wszystkie funkcje sekcji dolnej.","Punkt kontrolny: zamknij urządzenie dopiero po pełnym teście."]
      ]
    }
  };

  const PROCEDURES = [
    {title:"Wymiana wyświetlacza",time:"45–75 min",difficulty:"Zaawansowana",steps:["Wykonaj pełny test funkcji i zdjęcia urządzenia.","Wyłącz urządzenie, wyjmij SIM i przygotuj stanowisko ESD.","Otwieraj równomiernie bez punktowego nacisku na ramę.","Odłącz baterię przed złączami wyświetlacza.","Chroń taśmy oraz sparowane elementy czujników.","Przed zamknięciem sprawdź obraz, dotyk, czujniki, audio i Face ID.","Zastosuj nową uszczelkę i skontroluj równomierne domknięcie."]},
    {title:"Wymiana baterii",time:"45–90 min",difficulty:"Zaawansowana",steps:["Sprawdź stan ogniwa, temperaturę i ewentualne puchnięcie.","Rozładuj urządzenie do bezpiecznego poziomu, jeśli to możliwe.","Odłącz baterię przed innymi modułami.","Nie używaj ostrych narzędzi przy ogniwie i nie zaginaj go.","Usuń pozostałości kleju bez uszkadzania obudowy.","Po montażu sprawdź ładowanie, temperaturę i zachowanie pod obciążeniem."]},
    {title:"Brak ładowania",time:"20–60 min",difficulty:"Średnia",steps:["Potwierdź objaw na pewnym przewodzie i zasilaczu.","Sprawdź port pod powiększeniem i usuń włókna bez metalu.","Zweryfikuj komunikaty o wilgoci i temperaturę.","Porównaj ładowanie przewodowe i bezprzewodowe.","Zapisz pobór i zachowanie podczas podłączenia.","Dopiero po wykluczeniu akcesoriów i modułu przejdź do płyty."]},
    {title:"Po zalaniu",time:"60–180 min",difficulty:"Ekspercka",steps:["Nie uruchamiaj i nie ładuj urządzenia wielokrotnie.","Udokumentuj rodzaj cieczy, czas i próby uruchomienia.","Odłącz zasilanie i baterię tak szybko, jak jest to bezpieczne.","Oceń korozję, osady i stan złączy pod powiększeniem.","Dobierz proces czyszczenia do zakresu szkód.","Testuj etapami, monitorując pobór i temperaturę.","Poinformuj klienta, że naprawa po cieczy nie przywraca fabrycznej szczelności."]}
  ];

  const TOOLS=[["ESD","mata i opaska"],["Powiększenie","mikroskop/lupa"],["Otwieranie","kostki i przyssawka"],["Organizacja","mata na śruby"],["Pomiar","multimetr"],["Zasilanie","pewne źródło testowe"],["Czyszczenie","narzędzia bez metalu"],["Uszczelnienie","nowa uszczelka"]];

  const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

  function explodedView(){
    return `<div class="kh-exploded">
      <svg viewBox="0 0 900 520" preserveAspectRatio="xMidYMid meet" aria-label="Autorski widok eksplodowany iPhone 11">
        <defs>
          <linearGradient id="khFrame" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#5da9ff"/><stop offset="1" stop-color="#19334a"/>
          </linearGradient>
          <filter id="khSvgGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8"/>
          </filter>
        </defs>

        <!-- ekran -->
        <g transform="translate(40 70)">
          <rect width="175" height="350" rx="30" fill="#08131e" stroke="url(#khFrame)" stroke-width="4"/>
          <rect x="14" y="19" width="147" height="312" rx="22" fill="#0a2235" stroke="#36566f"/>
          <rect x="40" y="28" width="95" height="13" rx="6" fill="#02080d"/>
          <text x="87" y="185" text-anchor="middle" fill="#a7bed0" font-size="17" font-family="Arial">EKRAN</text>
        </g>

        <!-- korpus wewnętrzny -->
        <g transform="translate(285 72)">
          <rect width="185" height="345" rx="28" fill="#0b1d2c" stroke="#3b5b72" stroke-width="3"/>
          <rect x="24" y="55" width="90" height="228" rx="15" fill="#48e0bd" fill-opacity=".12" stroke="#48e0bd"/>
          <text x="69" y="172" transform="rotate(-90 69 172)" text-anchor="middle" fill="#7cf0d4" font-size="15" font-family="Arial">BATERIA</text>
          <rect x="122" y="56" width="45" height="112" rx="9" fill="#17354c" stroke="#5da9ff"/>
          <text x="144" y="112" transform="rotate(-90 144 112)" text-anchor="middle" fill="#acd5ff" font-size="11" font-family="Arial">PŁYTA</text>
          <rect x="123" y="190" width="43" height="58" rx="8" fill="#17354c" stroke="#b18cff"/>
          <text x="145" y="220" transform="rotate(-90 145 220)" text-anchor="middle" fill="#d5c3ff" font-size="10" font-family="Arial">AUDIO</text>
          <rect x="121" y="270" width="47" height="42" rx="8" fill="#17354c" stroke="#ffcb6b"/>
          <text x="144" y="296" text-anchor="middle" fill="#ffe0a3" font-size="9" font-family="Arial">PORT</text>
        </g>

        <!-- moduły -->
        <g transform="translate(535 75)">
          <rect width="190" height="340" rx="29" fill="#08131e" stroke="#314c63" stroke-width="3"/>
          <rect x="22" y="24" width="78" height="78" rx="16" fill="#112c42" stroke="#5da9ff"/>
          <circle cx="48" cy="51" r="13" fill="#02080d" stroke="#5da9ff"/>
          <circle cx="76" cy="75" r="13" fill="#02080d" stroke="#5da9ff"/>
          <text x="61" y="121" text-anchor="middle" fill="#acd5ff" font-size="11" font-family="Arial">APARATY</text>
          <path d="M118 43h40M118 55h40M118 67h40" stroke="#48e0bd" stroke-width="3"/>
          <text x="138" y="91" text-anchor="middle" fill="#8fead4" font-size="10" font-family="Arial">CZUJNIKI</text>
          <rect x="32" y="250" width="125" height="50" rx="11" fill="#112c42" stroke="#ffcb6b"/>
          <text x="94" y="280" text-anchor="middle" fill="#ffe0a3" font-size="11" font-family="Arial">GŁOŚNIK / PORT</text>
        </g>

        <path d="M220 245h60M475 245h55" stroke="#48e0bd" stroke-width="2" stroke-dasharray="8 8"/>
        <text x="450" y="490" text-anchor="middle" fill="#7890a4" font-size="12" font-family="Arial">
          AUTORSKI WIDOK POGLĄDOWY • NIE JEST BOARDVIEW ANI MAPĄ PRODUCENTA
        </text>

        <!-- hotspot 4: Face ID / czujniki -->
        <g class="kh-svg-hotspot" data-part="faceid" tabindex="0" transform="translate(668 120)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">4</text>
        </g>

        <!-- hotspot 1: bateria -->
        <g class="kh-svg-hotspot active" data-part="battery" tabindex="0" transform="translate(354 245)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">1</text>
        </g>

        <!-- hotspot 3: płyta -->
        <g class="kh-svg-hotspot" data-part="board" tabindex="0" transform="translate(430 195)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">3</text>
        </g>

        <!-- hotspot 2: aparaty -->
        <g class="kh-svg-hotspot" data-part="camera" tabindex="0" transform="translate(595 130)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">2</text>
        </g>

        <!-- hotspot 5: głośnik -->
        <g class="kh-svg-hotspot" data-part="speaker" tabindex="0" transform="translate(610 350)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">5</text>
        </g>

        <!-- hotspot 6: port -->
        <g class="kh-svg-hotspot" data-part="port" tabindex="0" transform="translate(678 350)">
          <circle class="kh-glow" r="34" filter="url(#khSvgGlow)"/>
          <circle class="kh-ring" r="24"/>
          <text text-anchor="middle" dominant-baseline="central">6</text>
        </g>
      </svg>
    </div>`;
  }

  function stepIcon(index){
    const icons=[
      '<path d="M8 20h32M12 12h24v16H12z" fill="none" stroke="#7cf0d4" stroke-width="2"/>',
      '<path d="M12 34l22-22M13 13l8 8M31 27l5 5" fill="none" stroke="#7cf0d4" stroke-width="2"/>',
      '<rect x="11" y="9" width="26" height="30" rx="4" fill="none" stroke="#7cf0d4" stroke-width="2"/><path d="M17 15h14" stroke="#7cf0d4" stroke-width="2"/>',
      '<circle cx="24" cy="24" r="12" fill="none" stroke="#7cf0d4" stroke-width="2"/><path d="M24 14v20M14 24h20" stroke="#7cf0d4" stroke-width="2"/>',
      '<path d="M10 32c8-16 20-16 28 0M16 18h16" fill="none" stroke="#7cf0d4" stroke-width="2"/>'
    ];
    return `<svg viewBox="0 0 48 48">${icons[index%icons.length]}</svg>`;
  }

  function showPart(part){
    const p=PARTS[part]||PARTS.battery,panel=document.getElementById("khPartPanel");
    if(!panel)return;
    panel.innerHTML=`<h3>${esc(p.title)}</h3>
      <p class="kh-part-summary">${esc(p.text)}</p>
      <div class="kh-part-meta">${p.meta.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
      <div class="kh-part-action"><strong>Pełna kolejność pracy — ${p.steps.length} kroków</strong></div>
      <div class="kh-step-list">${p.steps.map(([title,desc,checkpoint],i)=>`
        <div class="kh-step-item">
          <div class="kh-step-illustration">${stepIcon(i)}</div>
          <div>
            <strong>${i+1}. ${esc(title)}</strong>
            <p>${esc(desc)}</p>
            <div class="kh-step-checkpoint">${esc(checkpoint)}</div>
          </div>
        </div>`).join("")}</div>
      <div class="kh-sequence-note">Ta procedura prowadzi przez bezpieczną kolejność pracy, ale nie udaje fabrycznej instrukcji śrub i mocowań. Dokładne pozycje trzeba potwierdzić w zweryfikowanej dokumentacji konkretnego wariantu.</div>`;
    document.querySelectorAll(".kh-hotspot, .kh-svg-hotspot").forEach(b=>b.classList.toggle("active",b.dataset.part===part));
  }

  function proceduresHtml(){return `<div class="kh-procedures">${PROCEDURES.map(p=>`<article class="kh-procedure"><div class="kh-procedure-head"><div><h3>${esc(p.title)}</h3><small>${esc(p.difficulty)}</small></div><span class="knowledge-level">${esc(p.time)}</span></div><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol></article>`).join("")}</div>`}
  function toolsHtml(){return `<div class="kh-tools">${TOOLS.map(([a,b])=>`<div class="kh-tool"><strong>${esc(a)}</strong><span>${esc(b)}</span></div>`).join("")}</div><div class="kh-warning-box" style="margin-top:12px">Nie podajemy niezweryfikowanych temperatur, momentów dokręcania ani wartości pomiarowych. Dane dokładne potwierdzaj w aktualnej instrukcji producenta.</div>`}
  function screwMapHtml(){return `<div class="kh-phone-screw-map">
      <div class="kh-phone-map-canvas">
        <svg viewBox="0 0 600 430">
          <rect x="170" y="20" width="260" height="390" rx="38" fill="#091827" stroke="#7bc8ff" stroke-width="4"/>
          <rect x="190" y="42" width="220" height="345" rx="28" fill="#0b2234" stroke="#385a72"/>
          <rect x="215" y="80" width="95" height="215" rx="18" fill="#48e0bd" fill-opacity=".08" stroke="#48e0bd"/>
          <text x="262" y="190" text-anchor="middle" fill="#7cf0d4" font-size="15" font-family="Arial">BATERIA</text>
          <rect x="325" y="80" width="58" height="145" rx="12" fill="#5da9ff" fill-opacity=".08" stroke="#5da9ff"/>
          <text x="354" y="155" transform="rotate(-90 354 155)" text-anchor="middle" fill="#a9d2ff" font-size="12" font-family="Arial">PŁYTA / OSŁONY</text>
          <rect x="230" y="315" width="150" height="45" rx="12" fill="#ffcb6b" fill-opacity=".08" stroke="#ffcb6b"/>
          <text x="305" y="343" text-anchor="middle" fill="#ffe0a3" font-size="12" font-family="Arial">SEKCJA DOLNA</text>
          <text x="300" y="422" text-anchor="middle" fill="#6f8598" font-size="10" font-family="Arial">RZUT ORGANIZACYJNY — NIE PODAJE DŁUGOŚCI ŚRUB</text>
        </svg>
        <div class="kh-screw-point a" data-pos="a1"></div><div class="kh-screw-point a" data-pos="a2"></div>
        <div class="kh-screw-point b" data-pos="b1"></div><div class="kh-screw-point b" data-pos="b2"></div>
        <div class="kh-screw-point c" data-pos="c1"></div><div class="kh-screw-point c" data-pos="c2"></div>
      </div>
      <aside class="kh-map-notes">
        <div class="kh-map-note"><strong>🟢 Sekcja baterii</strong><p>Śruby osłony złącza baterii. Odkładaj osobno.</p></div>
        <div class="kh-map-note"><strong>🔵 Płyta i osłony</strong><p>Nie zamieniaj śrub między osłonami złączy.</p></div>
        <div class="kh-map-note"><strong>🟡 Sekcja dolna</strong><p>Głośnik, port i elementy dociskowe układaj w kolejności demontażu.</p></div>
        <div class="kh-warning-box">Mapa pokazuje wyłącznie organizację sekcji. Dokładne pozycje i długości muszą pochodzić ze zweryfikowanej instrukcji dla konkretnego modelu.</div>
      </aside>
    </div>`}

  function openPro(){
    const dialog=document.getElementById("knowledgeDialog"),content=document.getElementById("knowledgeDialogContent");
    if(!dialog||!content)return;
    content.innerHTML=`<div class="knowledge-detail-hero"><div class="knowledge-detail-art"><svg viewBox="0 0 420 250"><rect x="95" y="12" width="210" height="226" rx="34" fill="#071522" stroke="#5da9ff" stroke-width="4"/><rect x="111" y="29" width="178" height="190" rx="24" fill="#0b263b" stroke="#345b78"/><rect x="167" y="35" width="66" height="12" rx="6" fill="#02080d"/><circle cx="135" cy="63" r="16" fill="#06111c" stroke="#5da9ff"/><circle cx="171" cy="63" r="16" fill="#06111c" stroke="#5da9ff"/><rect x="128" y="92" width="144" height="95" rx="16" fill="#48e0bd" fill-opacity=".08" stroke="#48e0bd"/><text x="200" y="143" text-anchor="middle" fill="#48e0bd" font-size="16" font-family="Arial" font-weight="700">iPHONE 11</text><text x="200" y="164" text-anchor="middle" fill="#7890a4" font-size="10" font-family="Arial">INTERAKTYWNY ATLAS SERWISOWY</text></svg></div><div class="knowledge-detail-title"><span class="knowledge-brand">Apple • iPhone 11</span><h2>iPhone 11 — atlas serwisowy</h2><p>Interaktywny atlas podzespołów, procedury, mapa organizacyjna śrub, narzędzia i diagnostyka krok po kroku.</p><span class="knowledge-source-pill">✓ Knowledge Hub 2.0A • materiał poglądowy</span></div></div>
    <nav class="knowledge-tabs"><button class="active" data-pro-tab="atlas">Interaktywny atlas</button><button data-pro-tab="faults">Typowe usterki</button><button data-pro-tab="diagnostics">Diagnostyka</button><button data-pro-tab="procedures">Procedury</button><button data-pro-tab="screws">Mapa śrub</button><button data-pro-tab="tools">Narzędzia</button><button data-pro-tab="checklist">Checklista</button><button data-pro-tab="sources">Źródła</button></nav>
    <section class="knowledge-detail-panel active" data-pro-panel="atlas"><div class="kh-pro-layout">${explodedView()}<aside id="khPartPanel" class="kh-part-panel"></aside></div></section>
    <section class="knowledge-detail-panel" data-pro-panel="faults"><div class="kh-fault-grid">
      <article class="kh-fault-card"><h3>Nie ładuje</h3><p>Akcesoria → port → wilgoć → ładowanie bezprzewodowe → moduł → płyta.</p></article>
      <article class="kh-fault-card"><h3>Restartuje się</h3><p>Logi → ostatnia naprawa → taśmy i peryferia → pobór → test stabilności.</p></article>
      <article class="kh-fault-card"><h3>Brak obrazu</h3><p>Reakcja urządzenia → uszkodzenie mechaniczne → złącza → moduł testowy.</p></article>
      <article class="kh-fault-card"><h3>Face ID niedostępne</h3><p>Historia napraw → taśmy → ciecz → komunikaty systemowe → brak losowej podmiany elementów.</p></article>
    </div></section>
    <section class="knowledge-detail-panel" data-pro-panel="diagnostics">
      <div class="knowledge-steps">
        <div class="knowledge-step"><b>1</b><div><strong>Wywiad</strong><p>Ustal upadek, zalanie, ostatnią naprawę i moment wystąpienia objawu.</p></div></div>
        <div class="knowledge-step"><b>2</b><div><strong>Test przed otwarciem</strong><p>Zapisz ekran, dotyk, Face ID, aparaty, audio, sieć i ładowanie.</p></div></div>
        <div class="knowledge-step"><b>3</b><div><strong>Oględziny</strong><p>Sprawdź ramę, port, szkło, aparat i oznaki rozszczelnienia.</p></div></div>
        <div class="knowledge-step"><b>4</b><div><strong>Izolacja</strong><p>Testuj jeden moduł na raz, zawsze przy odłączonej baterii.</p></div></div>
        <div class="knowledge-step"><b>5</b><div><strong>Walidacja</strong><p>Po naprawie wykonaj pełny test i dłuższą próbę stabilności.</p></div></div>
      </div>
    </section>
    <section class="knowledge-detail-panel" data-pro-panel="procedures">${proceduresHtml()}</section>
    <section class="knowledge-detail-panel" data-pro-panel="screws">${screwMapHtml()}</section>
    <section class="knowledge-detail-panel" data-pro-panel="tools">${toolsHtml()}</section>
    <section class="knowledge-detail-panel" data-pro-panel="checklist">
      <div class="knowledge-checklist">
        <label><input type="checkbox"><span>Zdjęcia urządzenia przed otwarciem</span></label>
        <label><input type="checkbox"><span>Test Face ID, ekran, dotyk, aparaty, audio i ładowanie</span></label>
        <label><input type="checkbox"><span>Odłączenie baterii przed pozostałymi złączami</span></label>
        <label><input type="checkbox"><span>Śruby odłożone według sekcji i pozycji</span></label>
        <label><input type="checkbox"><span>Brak naprężenia taśm i przewodów</span></label>
        <label><input type="checkbox"><span>Pełny test po montażu i kontrola temperatury</span></label>
      </div>
    </section>
    <section class="knowledge-detail-panel" data-pro-panel="sources"><div class="knowledge-sources"><div class="knowledge-source"><div><strong>Apple — Samoobsługowa naprawa</strong><span>Oficjalne podręczniki, części i narzędzia.</span></div><a class="table-action" href="https://support.apple.com/pl-pl/self-service-repair" target="_blank" rel="noopener noreferrer">Otwórz ↗</a></div><div class="knowledge-source"><div><strong>Apple — Serwis i naprawa iPhone</strong><span>Oficjalne informacje dotyczące naprawy.</span></div><a class="table-action" href="https://support.apple.com/pl-pl/iphone/repair" target="_blank" rel="noopener noreferrer">Otwórz ↗</a></div></div></section>`;

    if (!dialog.open) dialog.showModal();
    showPart("battery");

    // Bezpośrednie podpięcie zakładek — niezależne od pozostałych skryptów aplikacji.
    content.querySelectorAll("[data-pro-tab]").forEach(button => {
      button.onclick = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = button.dataset.proTab;
        content.querySelectorAll("[data-pro-tab]").forEach(item =>
          item.classList.toggle("active", item === button)
        );
        content.querySelectorAll("[data-pro-panel]").forEach(panel =>
          panel.classList.toggle("active", panel.dataset.proPanel === name)
        );
        content.querySelector(`[data-pro-panel="${name}"]`)?.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
      };
    });

    // Bezpośrednie podpięcie hotspotów.
    content.querySelectorAll(".kh-hotspot, .kh-svg-hotspot").forEach(button => {
      button.onclick = event => {
        event.preventDefault();
        event.stopPropagation();
        showPart(button.dataset.part);
      };
    });

  }

  function analyze(q){
    q=q.toLowerCase();
    if(q.includes("ładu")||q.includes("usb")||q.includes("port"))return["Diagnostyka ładowania",[["Akcesoria","Potwierdź objaw na pewnym przewodzie i zasilaczu."],["Port","Oceń zabrudzenia, wilgoć i luz mechaniczny."],["Porównanie","Sprawdź ładowanie przewodowe i bezprzewodowe."],["Pomiar","Zapisz pobór i temperaturę."],["Izolacja","Dopiero po wykluczeniu modułu przejdź do płyty."]]];
    if(q.includes("restart")||q.includes("bootloop"))return["Diagnostyka restartów",[["Wywiad","Ustal interwał i ostatnią naprawę."],["Logi","Zapisz dostępne logi przed resetem."],["Peryferia","Sprawdź taśmy związane z ostatnią ingerencją."],["Zasilanie","Porównaj pobór i temperaturę."],["Stabilność","Po zmianie wykonaj dłuższy test."]]];
    if(q.includes("zal")||q.includes("ciecz")||q.includes("woda"))return["Procedura po kontakcie z cieczą",[["Stop","Nie uruchamiaj i nie ładuj wielokrotnie."],["Dokumentacja","Zapisz ciecz, czas i próby uruchomienia."],["Odłączenie","Odłącz baterię bezpiecznie."],["Inspekcja","Sprawdź korozję i złącza."],["Test etapowy","Monitoruj pobór oraz temperaturę."]]];
    if(q.includes("obraz")||q.includes("ekran")||q.includes("dotyk"))return["Diagnostyka ekranu i dotyku",[["Reakcja","Sprawdź dźwięki, wibracje i pobór."],["Mechanika","Oceń szkło, ramę i uderzenia."],["Złącza","Sprawdź je przy odłączonej baterii."],["Moduł testowy","Użyj znanego sprawnego modułu."],["Walidacja","Sprawdź całą powierzchnię dotyku i czujniki."]]];
    return["Ogólna ścieżka diagnostyczna",[["Wywiad","Ustal dokładny objaw i historię napraw."],["Oględziny","Sprawdź uszkodzenia, porty i ciecz."],["Test bazowy","Zapisz funkcje działające i niedziałające."],["Izolacja","Testuj jedną zmianę naraz."],["Walidacja","Wykonaj pełną checklistę i test stabilności."]]];
  }

  document.addEventListener("click",e=>{
    const card=e.target.closest('[data-knowledge-id="iphone-11"]');if(card){e.preventDefault();e.stopImmediatePropagation();openPro();return}
    const hot=e.target.closest(".kh-hotspot, .kh-svg-hotspot");if(hot){e.preventDefault();showPart(hot.dataset.part);return}
    const tab=e.target.closest("[data-pro-tab]");if(tab){const n=tab.dataset.proTab;document.querySelectorAll("[data-pro-tab]").forEach(b=>b.classList.toggle("active",b===tab));document.querySelectorAll("[data-pro-panel]").forEach(p=>p.classList.toggle("active",p.dataset.proPanel===n))}
  },true);


  document.addEventListener("keydown", event => {
    const hotspot = event.target.closest?.(".kh-svg-hotspot");
    if (hotspot && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      showPart(hotspot.dataset.part);
    }
  });

  document.getElementById("khAssistantRun")?.addEventListener("click",()=>{
    const input=document.getElementById("khAssistantInput"),result=document.getElementById("khAssistantResult"),text=input?.value.trim();if(!text){alert("Wpisz objaw urządzenia.");return}
    const [title,steps]=analyze(text);result.hidden=false;result.innerHTML=`<h4>${esc(title)}</h4><div class="kh-diagnosis-grid">${steps.map(([t,d],i)=>`<div class="kh-diagnosis-step"><b>${i+1}</b><strong>${esc(t)}</strong><p>${esc(d)}</p></div>`).join("")}</div><div class="kh-warning-box" style="margin-top:10px">To jest bezpieczna ścieżka wstępna, nie automatyczna diagnoza. Wynik potwierdź pomiarami i dokumentacją konkretnego wariantu.</div>`;
  });
})();
