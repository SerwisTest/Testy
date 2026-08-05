
(() => {
  "use strict";
  const MODELS = {"iphone-11-pro": {"brand": "Apple", "name": "iPhone 11 Pro", "year": "2019", "camera": "3 aparaty", "accent": "#5da9ff", "level": "Zaawansowany"}, "iphone-11-pro-max": {"brand": "Apple", "name": "iPhone 11 Pro Max", "year": "2019", "camera": "3 aparaty", "accent": "#5da9ff", "level": "Zaawansowany"}, "iphone-12": {"brand": "Apple", "name": "iPhone 12", "year": "2020", "camera": "2 aparaty", "accent": "#5da9ff", "level": "Zaawansowany"}, "iphone-13": {"brand": "Apple", "name": "iPhone 13", "year": "2021", "camera": "2 aparaty", "accent": "#5da9ff", "level": "Zaawansowany"}, "iphone-14-pro": {"brand": "Apple", "name": "iPhone 14 Pro", "year": "2022", "camera": "3 aparaty", "accent": "#5da9ff", "level": "Ekspercki"}, "iphone-15-pro": {"brand": "Apple", "name": "iPhone 15 Pro", "year": "2023", "camera": "3 aparaty", "accent": "#5da9ff", "level": "Ekspercki"}, "galaxy-s21": {"brand": "Samsung", "name": "Galaxy S21 5G", "year": "2021", "camera": "3 aparaty", "accent": "#48e0bd", "level": "Zaawansowany"}, "galaxy-s22-ultra": {"brand": "Samsung", "name": "Galaxy S22 Ultra", "year": "2022", "camera": "4 aparaty", "accent": "#48e0bd", "level": "Ekspercki"}, "galaxy-s23-ultra": {"brand": "Samsung", "name": "Galaxy S23 Ultra", "year": "2023", "camera": "4 aparaty", "accent": "#48e0bd", "level": "Ekspercki"}, "galaxy-s24-ultra": {"brand": "Samsung", "name": "Galaxy S24 Ultra", "year": "2024", "camera": "4 aparaty", "accent": "#48e0bd", "level": "Ekspercki"}, "galaxy-a55": {"brand": "Samsung", "name": "Galaxy A55 5G", "year": "2024", "camera": "3 aparaty", "accent": "#48e0bd", "level": "Średni"}};

  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));

  const ISSUE_LIBRARY = {
    Apple:[
      ["Nie ładuje","Sprawdź akcesoria, port, temperaturę, ładowanie bezprzewodowe i pobór."],
      ["Brak obrazu","Ustal, czy telefon działa w tle; potem sprawdź ekran, ramę i złącza."],
      ["Face ID niedostępne","Sprawdź sparowane elementy, taśmy, ciecz i komunikaty systemowe."],
      ["Aparat nie ostrzy","Usuń akcesoria magnetyczne, oceń szybki, stabilizację i moduły."]
    ],
    Samsung:[
      ["Nie ładuje","Sprawdź przewód, zasilacz, port, wilgoć, temperaturę i ustawienia."],
      ["Brak obrazu","Ustal, czy urządzenie działa; potem sprawdź AMOLED, ramę i złącza."],
      ["Słaby zasięg","Porównaj SIM, ustawienia, anteny i skutki upadku."],
      ["Aparat nie ostrzy","Oceń szybki, stabilizację, etui magnetyczne i moduły."]
    ]
  };

  function modelSvg(m) {
    const count = parseInt(m.camera) || 2;
    let cams = "";
    for(let i=0;i<Math.min(count,4);i++){
      const x=610+(i%2)*34, y=115+Math.floor(i/2)*34;
      cams += `<circle cx="${x}" cy="${y}" r="13" fill="#06111c" stroke="${m.accent}" stroke-width="3"/>`;
    }
    return `<svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet">
      <defs><filter id="mmGlow"><feGaussianBlur stdDeviation="8"/></filter></defs>
      <rect x="55" y="45" width="180" height="320" rx="30" fill="#08131e" stroke="${m.accent}" stroke-width="4"/>
      <rect x="70" y="64" width="150" height="282" rx="22" fill="#0b2437" stroke="#385a72"/>
      <text x="145" y="210" text-anchor="middle" fill="#b7c8d6" font-size="17">${esc(m.name)}</text>

      <rect x="300" y="45" width="220" height="320" rx="30" fill="#091a28" stroke="#385a72" stroke-width="3"/>
      <rect x="325" y="90" width="105" height="210" rx="17" fill="${m.accent}" fill-opacity=".10" stroke="${m.accent}"/>
      <text x="377" y="198" text-anchor="middle" fill="${m.accent}" font-size="16">BATERIA</text>
      <rect x="447" y="90" width="48" height="128" rx="10" fill="#17354c" stroke="#5da9ff"/>
      <text x="471" y="157" transform="rotate(-90 471 157)" text-anchor="middle" fill="#acd5ff" font-size="11">PŁYTA</text>
      <rect x="446" y="250" width="50" height="45" rx="9" fill="#17354c" stroke="#ffcb6b"/>
      <text x="471" y="278" text-anchor="middle" fill="#ffe0a3" font-size="9">PORT</text>

      <rect x="570" y="45" width="220" height="320" rx="30" fill="#08131e" stroke="#385a72" stroke-width="3"/>
      ${cams}
      <text x="650" y="210" text-anchor="middle" fill="#acd5ff" font-size="13">${esc(m.camera.toUpperCase())}</text>
      <rect x="600" y="260" width="150" height="48" rx="11" fill="#112c42" stroke="#ffcb6b"/>
      <text x="675" y="289" text-anchor="middle" fill="#ffe0a3" font-size="11">GŁOŚNIK / PORT</text>

      <path d="M240 205h55M525 205h40" stroke="${m.accent}" stroke-width="2" stroke-dasharray="8 8"/>
      <text x="450" y="402" text-anchor="middle" fill="#7890a4" font-size="11">AUTORSKI WIDOK POGLĄDOWY • ${esc(m.name)}</text>

      ${hotspot(377,190,"battery","1")}
      ${hotspot(650,140,"camera","2")}
      ${hotspot(470,150,"board","3")}
      ${hotspot(145,205,"display","4")}
      ${hotspot(635,285,"speaker","5")}
      ${hotspot(712,285,"port","6")}
    </svg>`;
  }

  function hotspot(x,y,part,label){
    return `<g class="kh-svg-hotspot" data-model-part="${part}" tabindex="0" transform="translate(${x} ${y})">
      <circle class="kh-glow" r="34" filter="url(#mmGlow)"/>
      <circle class="kh-ring" r="24"/>
      <text text-anchor="middle" dominant-baseline="central">${label}</text>
    </g>`;
  }

  function partData(part){
    const data={
      battery:["Bateria","Kontrola stanu, temperatury, puchnięcia, złącza i zachowania pod obciążeniem."],
      camera:["Aparaty","Test każdego obiektywu, ostrości, stabilizacji, złączy i wpływu akcesoriów."],
      board:["Płyta i złącza","Najpierw wyklucz moduły, taśmy i złącza. Płytę oceniaj po pomiarach."],
      display:["Wyświetlacz","Kontrola obrazu, dotyku, ramy, złączy i czujników."],
      speaker:["Głośnik / audio","Test głośności, trzasków, mikrofonów, styków i zabrudzeń."],
      port:["Port ładowania","Wyklucz akcesoria, wilgoć i zabrudzenia przed demontażem."]
    };
    return data[part]||data.battery;
  }

  function renderPart(m,part){
    const [title,text]=partData(part);
    const panel=document.getElementById("khMultiPartPanel");
    if(!panel)return;
    const steps=[
      "Wykonaj test i dokumentację stanu początkowego.",
      "Wyłącz urządzenie i przygotuj stanowisko ESD.",
      "Odłącz baterię przed pozostałymi złączami.",
      "Udokumentuj położenie śrub i osłon.",
      "Demontuj bez naprężania taśm i bez użycia siły.",
      "Skontroluj element oraz złącza pod powiększeniem.",
      "Złóż w odwrotnej kolejności.",
      "Wykonaj pełny test końcowy przed zamknięciem."
    ];
    panel.innerHTML=`<h3>${esc(title)}</h3><p class="kh-part-summary">${esc(text)}</p>
      <div class="kh-part-action"><strong>Pełna kolejność pracy</strong></div>
      <div class="kh-step-list">${steps.map((s,i)=>`<div class="kh-step-item"><div class="kh-step-illustration"><b>${i+1}</b></div><div><strong>${i+1}. ${esc(s)}</strong><p>Nie przechodź dalej, jeżeli pojawi się opór, uszkodzenie lub niezgodność.</p></div></div>`).join("")}</div>
      <div class="kh-model-note">Karta dotyczy modelu ${esc(m.name)}. Dokładne pozycje śrub i elementów wymagają zweryfikowanej instrukcji dla konkretnego wariantu.</div>`;
    document.querySelectorAll("[data-model-part]").forEach(x=>x.classList.toggle("active",x.dataset.modelPart===part));
  }

  function openModel(id){
    const m=MODELS[id],dialog=document.getElementById("knowledgeDialog"),content=document.getElementById("knowledgeDialogContent");
    if(!m||!dialog||!content)return;
    const issues=ISSUE_LIBRARY[m.brand];

    content.innerHTML=`
      <div class="knowledge-detail-hero">
        <div class="knowledge-detail-art">${modelSvg(m)}</div>
        <div class="knowledge-detail-title">
          <span class="knowledge-brand">${esc(m.brand)} • pełna karta</span>
          <h2>${esc(m.name)}</h2>
          <p>Atlas, typowe usterki, diagnostyka, procedury, narzędzia i checklista przypisane do tego modelu.</p>
          <span class="kh-model-badge">✓ ${esc(m.year)} • ${esc(m.level)} • ${esc(m.camera)}</span>
        </div>
      </div>

      <nav class="knowledge-tabs">
        <button class="active" data-mm-tab="atlas">Interaktywny atlas</button>
        <button data-mm-tab="faults">Typowe usterki</button>
        <button data-mm-tab="diagnostics">Diagnostyka</button>
        <button data-mm-tab="procedures">Procedury</button>
        <button data-mm-tab="tools">Narzędzia</button>
        <button data-mm-tab="checklist">Checklista</button>
        <button data-mm-tab="sources">Źródła</button>
      </nav>

      <section class="knowledge-detail-panel active" data-mm-panel="atlas">
        <div class="kh-pro-layout"><div>${modelSvg(m)}</div><aside id="khMultiPartPanel" class="kh-part-panel"></aside></div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="faults">
        <div class="kh-model-issues">${issues.map(([t,d])=>`<article class="kh-model-issue"><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("")}</div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="diagnostics">
        <div class="kh-model-diagnostics">
          ${["Wywiad i historia napraw","Test wszystkich funkcji przed otwarciem","Oględziny mechaniczne i ślady cieczy","Izolacja jednego modułu na raz","Test końcowy i stabilność"].map((t,i)=>`<div class="kh-model-diagnostic"><b>${i+1}</b><div><strong>${t}</strong><p>Dokumentuj wynik i nie przechodź do następnego etapu bez potwierdzenia poprzedniego.</p></div></div>`).join("")}
        </div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="procedures">
        <div class="kh-procedures">
          ${["Wymiana wyświetlacza","Wymiana baterii","Diagnostyka ładowania","Diagnostyka aparatów"].map((p,i)=>`<article class="kh-procedure"><div class="kh-procedure-head"><div><h3>${p}</h3><small>${i<2?"Zaawansowana":"Diagnostyczna"}</small></div><span class="knowledge-level">${i<2?"45–90 min":"20–60 min"}</span></div><ol><li>Test i dokumentacja stanu początkowego.</li><li>Wyłączenie urządzenia i stanowisko ESD.</li><li>Odłączenie baterii.</li><li>Demontaż z organizacją śrub.</li><li>Kontrola elementu i złączy.</li><li>Montaż bez naprężania taśm.</li><li>Pełny test końcowy.</li></ol></article>`).join("")}
        </div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="tools">
        <div class="kh-tools">${["ESD","mikroskop","mata na śruby","multimetr","pewne akcesoria","nowa uszczelka"].map(x=>`<div class="kh-tool"><strong>${x}</strong><span>wymagane lub zalecane</span></div>`).join("")}</div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="checklist">
        <div class="knowledge-checklist">${["Zdjęcia przed otwarciem","Test ekranu, dotyku, aparatów, audio i ładowania","Odłączenie baterii przed modułami","Śruby odłożone według sekcji","Brak naprężenia taśm","Pełny test końcowy"].map(x=>`<label><input type="checkbox"><span>${x}</span></label>`).join("")}</div>
      </section>

      <section class="knowledge-detail-panel" data-mm-panel="sources">
        <div class="knowledge-sources"><div class="knowledge-source"><div><strong>${esc(m.brand)} — oficjalne wsparcie</strong><span>Sprawdź aktualną instrukcję dla dokładnego wariantu.</span></div><a class="table-action" href="${m.brand==="Apple"?"https://support.apple.com/pl-pl/self-service-repair":"https://www.samsung.com/pl/support/self-repair/"}" target="_blank" rel="noopener noreferrer">Otwórz ↗</a></div></div>
      </section>`;

    if(!dialog.open)dialog.showModal();
    renderPart(m,"battery");

    content.querySelectorAll("[data-model-part]").forEach(el=>{
      el.addEventListener("click",()=>renderPart(m,el.dataset.modelPart));
      el.addEventListener("keydown",e=>{
        if(e.key==="Enter"||e.key===" "){e.preventDefault();renderPart(m,el.dataset.modelPart);}
      });
    });
    content.querySelectorAll("[data-mm-tab]").forEach(btn=>{
      btn.onclick=e=>{
        e.preventDefault();
        const name=btn.dataset.mmTab;
        content.querySelectorAll("[data-mm-tab]").forEach(x=>x.classList.toggle("active",x===btn));
        content.querySelectorAll("[data-mm-panel]").forEach(x=>x.classList.toggle("active",x.dataset.mmPanel===name));
      };
    });
  }

  document.addEventListener("click",event=>{
    const card=event.target.closest("[data-knowledge-id]");
    if(!card)return;
    const id=card.dataset.knowledgeId;
    if(!MODELS[id])return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openModel(id);
  },true);

  window.SerwisoweTeleKnowledgeModels={openModel,models:MODELS};
})();
