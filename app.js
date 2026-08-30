(() => {
  const STORAGE_KEY = "lumi-viki-state-v1";
  const POSE_BASE = "assets/poses/";
  const ALPHABET_CARD_BASE = "assets/alphabet/";
  const TASK_IMAGE_BASE = "assets/tasks/";
  const SYLLABLE_RECORDING_PAUSES_MS = [300, 500];

  const poses = {
    hovori: `${POSE_BASE}lumi_hovori.png`,
    pokojny: `${POSE_BASE}lumi_pokojny.png`,
    tesi: `${POSE_BASE}lumi_tesi_sa.png`,
    ok: `${POSE_BASE}lumi_ok_transparent.png`,
    chyba: `${POSE_BASE}lumi_smutny_transparent.png`,
    rozmysla: `${POSE_BASE}lumi_rozmysla_transparent.png`,
    ukazuje: `${POSE_BASE}lumi_ukazuje_transparent.png`,
    pocuva: `${POSE_BASE}lumi_pokojny.png`,
    tlieska: `${POSE_BASE}lumi_tlieska_transparent.png`,
    spi: `${POSE_BASE}lumi_pokojny.png`,
    cita: `${POSE_BASE}lumi_pokojny.png`,
    smutny: `${POSE_BASE}lumi_smutny_transparent.png`,
    smeje: `${POSE_BASE}lumi_tesi_sa.png`,
    skolak: `${POSE_BASE}lumi_hovori.png`,
    detektiv: `${POSE_BASE}lumi_rozmysla_transparent.png`,
  };

  const profileAvatars = [
    { id: "hovori", label: "Lumi máva", src: poses.hovori },
    { id: "pokojny", label: "Pokojný Lumi", src: poses.pokojny },
    { id: "tesi", label: "Lumi sa teší", src: poses.tesi },
    { id: "ok", label: "Lumi ukazuje OK", src: poses.ok },
    { id: "rozmysla", label: "Lumi rozmýšľa", src: poses.rozmysla },
    { id: "ukazuje", label: "Lumi ukazuje", src: poses.ukazuje },
    { id: "smutny", label: "Smutný Lumi", src: poses.smutny },
    { id: "tlieska", label: "Lumi tlieska", src: poses.tlieska },
  ];

  const objectBank = {
    autobus: { label: "autobus", letter: "A", image: `${TASK_IMAGE_BASE}autobus.png`, memoryImage: "assets/memory/autobus.jpg", place: "VONKU", emoji: "🚌" },
    banan: { label: "banán", letter: "B", image: `${TASK_IMAGE_BASE}banan.png`, memoryImage: "assets/memory/banan.jpg", place: "DOMA", emoji: "🍌" },
    ceruzka: { label: "ceruzka", letter: "C", image: `${TASK_IMAGE_BASE}ceruzka.png`, memoryImage: "assets/memory/ceruzka.jpg", place: "V ŠKOLE", emoji: "✏️" },
    duha: { label: "dúha", letter: "D", memoryImage: "assets/memory/duha.jpg", place: "VONKU", emoji: "🌈" },
    futbal: { label: "futbal", letter: "F", memoryImage: "assets/memory/futbal.jpg", place: "VONKU", emoji: "⚽" },
    gastan: { label: "gaštan", letter: "G", memoryImage: "assets/memory/gastan.jpg", place: "VONKU", emoji: "●" },
    had: { label: "had", letter: "H", memoryImage: "assets/memory/had.jpg", place: "VONKU", emoji: "〰" },
    dom: { label: "dom", letter: "D", image: `${TASK_IMAGE_BASE}dom.jpg`, place: "DOMA", emoji: "🏠" },
    macka: { label: "mačka", letter: "M", image: `${TASK_IMAGE_BASE}macka.jpg`, place: "DOMA", emoji: "🐱" },
    pes: { label: "pes", letter: "P", place: "DOMA", emoji: "🐶" },
    sova: { label: "sova", letter: "S", place: "VONKU", emoji: "🦉" },
    vlak: { label: "vlak", letter: "V", image: `${TASK_IMAGE_BASE}vlak.jpg`, place: "VONKU", emoji: "🚂" },
    skola: { label: "škola", letter: "Š", place: "V ŠKOLE", emoji: "🏫" },
    tabula: { label: "tabuľa", letter: "T", place: "V ŠKOLE", emoji: "▰" },
    oko: { label: "oko", letter: "O", place: "DOMA", emoji: "👁️" },
    lopta: { label: "lopta", letter: "L", place: "VONKU", emoji: "⚽" },
    kvet: { label: "kvet", letter: "K", place: "VONKU", emoji: "🌼" },
    elektricka: { label: "električka", letter: "E", memoryImage: "assets/memory/elektricka.jpg", place: "VONKU", emoji: "🚋" },
    ucho: { label: "ucho", letter: "U", place: "DOMA", emoji: "👂" },
    rak: { label: "rak", letter: "R", place: "VONKU", emoji: "🦀" },
  };

  const alphabet = [
    { letter: "A", word: "autobus", card: `${ALPHABET_CARD_BASE}a-autobus.jpg`, active: true },
    { letter: "B", word: "banán", card: `${ALPHABET_CARD_BASE}b-banan.jpg`, active: true },
    { letter: "C", word: "ceruzka", card: `${ALPHABET_CARD_BASE}c-ceruzka.jpg`, active: true },
    { letter: "Č", word: "čokoláda", card: `${ALPHABET_CARD_BASE}c-makcen-cokolada.jpg`, active: false },
    { letter: "D", word: "dúha", card: `${ALPHABET_CARD_BASE}d-duha.jpg`, active: true },
    { letter: "Ď", word: "ďateľ", card: `${ALPHABET_CARD_BASE}d-makke-datel.jpg`, active: false },
    { letter: "DZ", word: "", letterOnly: true, active: false },
    { letter: "DŽ", word: "džús", card: `${ALPHABET_CARD_BASE}dz-makcen-dzus.jpg`, active: false },
    { letter: "E", word: "električka", card: `${ALPHABET_CARD_BASE}e-elektricka.jpg`, active: true },
    { letter: "F", word: "futbal", card: `${ALPHABET_CARD_BASE}f-futbal.jpg`, active: false },
    { letter: "G", word: "gaštan", card: `${ALPHABET_CARD_BASE}g-gastan.jpg`, active: false },
    { letter: "H", word: "had", card: `${ALPHABET_CARD_BASE}h-had.jpg`, active: false },
    { letter: "CH", word: "chrúst", card: `${ALPHABET_CARD_BASE}ch-chrust.jpg`, active: false },
    { letter: "I", word: "indián", card: `${ALPHABET_CARD_BASE}i-indian.jpg`, active: false },
    { letter: "J", word: "jablko", card: `${ALPHABET_CARD_BASE}j-jablko.jpg`, active: false },
    { letter: "K", word: "kôň", card: `${ALPHABET_CARD_BASE}k-kon.jpg`, active: true },
    { letter: "L", word: "lano", card: `${ALPHABET_CARD_BASE}l-lano.jpg`, active: true },
    { letter: "Ľ", word: "ľad", card: `${ALPHABET_CARD_BASE}l-makke-lad.jpg`, active: false },
    { letter: "M", word: "motýľ", card: `${ALPHABET_CARD_BASE}m-motyl.jpg`, active: true },
    { letter: "N", word: "nôž", card: `${ALPHABET_CARD_BASE}n-noz.jpg`, active: false },
    { letter: "Ň", word: "ňufák", card: `${ALPHABET_CARD_BASE}n-makke-nufak.jpg`, active: false },
    { letter: "O", word: "oko", card: `${ALPHABET_CARD_BASE}o-oko.jpg`, active: true },
    { letter: "P", word: "pes", card: `${ALPHABET_CARD_BASE}p-pes.jpg`, active: true },
    { letter: "R", word: "rak", card: `${ALPHABET_CARD_BASE}r-rak.jpg`, active: true },
    { letter: "S", word: "sova", card: `${ALPHABET_CARD_BASE}s-sova.jpg`, active: true },
    { letter: "Š", word: "šiška", card: `${ALPHABET_CARD_BASE}s-makcen-siska.jpg`, active: true },
    { letter: "T", word: "televízor", card: `${ALPHABET_CARD_BASE}t-televizor.jpg`, active: true },
    { letter: "Ť", word: "ťava", card: `${ALPHABET_CARD_BASE}t-makke-tava.jpg`, active: false },
    { letter: "U", word: "ucho", card: `${ALPHABET_CARD_BASE}u-ucho.jpg`, active: true },
    { letter: "V", word: "vedro", card: `${ALPHABET_CARD_BASE}v-vedro.jpg`, active: true },
    { letter: "W", word: "wifi", card: `${ALPHABET_CARD_BASE}w-wifi.jpg`, active: false },
    { letter: "X", word: "xylofón", card: `${ALPHABET_CARD_BASE}x-xylofon.jpg`, active: false },
    { letter: "Y", word: "ypsilon", card: `${ALPHABET_CARD_BASE}y-ypsilon.jpg`, active: false },
    { letter: "Z", word: "zajac", card: `${ALPHABET_CARD_BASE}z-zajac.jpg`, active: false },
    { letter: "Ž", word: "žaba", card: `${ALPHABET_CARD_BASE}z-makcen-zaba.jpg`, active: false },
  ];

  const lessons = [
    {
      order: 1,
      type: "TapHotspot",
      title: "Nájdi A, B a C",
      skill: "orientácia",
      free: true,
      lights: 1,
      pose: "ukazuje",
      intro: "Ahoj. Nájdi kartičky s písmenami A, B a C.",
      prompt: "Ťukni na A, B a C.",
      items: ["autobus", "banan", "ceruzka", "duha", "elektricka", "futbal"],
      targets: ["autobus", "banan", "ceruzka"],
      alphabetCards: true,
    },
    {
      order: 2,
      type: "SelectOne",
      title: "Kto čo robí?",
      skill: "veta",
      free: true,
      lights: 2,
      pose: "pocuva",
      intro: "Pozri sa. Vyber vetu, ktorá sedí.",
      prompt: "Vyber vetu, ktorá sedí.",
      visualImage: `${TASK_IMAGE_BASE}beziace-dieta.jpg`,
      choices: [
        { label: "Dieťa beží.", correct: true },
        { label: "Dieťa spí.", correct: false },
      ],
    },
    {
      order: 3,
      type: "SelectOne",
      title: "Smiešna veta",
      skill: "slovná zásoba",
      free: true,
      lights: 2,
      pose: "smeje",
      intro: "V školskej taške mám...",
      prompt: "V školskej taške mám...",
      visualImage: `${TASK_IMAGE_BASE}skolska-taska.jpg`,
      choices: [
        { label: "ceruzku", image: `${TASK_IMAGE_BASE}ceruzka.png`, correct: true },
        { label: "vlak", image: `${TASK_IMAGE_BASE}vlak.jpg`, correct: false, funny: true },
        { label: "mačku", image: `${TASK_IMAGE_BASE}macka.jpg`, correct: false, funny: true },
      ],
    },
    {
      order: 4,
      type: "MatchPairs",
      title: "Nájdi dvojicu",
      skill: "zrakové párovanie",
      free: true,
      lights: 2,
      pose: "detektiv",
      intro: "Nájdi rovnaké obrázky. Pexeso.",
      prompt: "Otoč karty a nájdi páry.",
      pairs: ["autobus", "banan", "ceruzka", "duha", "elektricka", "futbal", "gastan", "had"],
    },
    {
      order: 5,
      type: "OddOneOut",
      title: "Čo je iné?",
      skill: "zrakové rozlišovanie",
      free: true,
      lights: 2,
      pose: "rozmysla",
      intro: "Jeden obrázok je iný. Ťukni naň.",
      prompt: "Jeden sem nepatrí.",
      choices: [
        { label: "auto", image: `${TASK_IMAGE_BASE}auto.jpg`, correct: false },
        { label: "vlak", image: `${TASK_IMAGE_BASE}vlak.jpg`, correct: false },
        { label: "autobus", image: `${TASK_IMAGE_BASE}autobus.png`, correct: false },
        { label: "banán", image: `${TASK_IMAGE_BASE}banan.png`, correct: true },
      ],
    },
    {
      order: 6,
      type: "PatternComplete",
      title: "Pokračuj vo vzore",
      skill: "vzory",
      free: true,
      lights: 2,
      pose: "ukazuje",
      intro: "Pozri na vzor. Doplň, čo ide ďalej.",
      prompt: "Čo ide ďalej?",
      sequence: ["●", "■", "●", "■", "●", "?"],
      choices: [
        { label: "■", correct: true },
        { label: "●", correct: false },
        { label: "▲", correct: false },
      ],
    },
    {
      order: 7,
      type: "PhonemeStart",
      title: "Počujem na začiatku",
      skill: "prvá hláska",
      free: true,
      lights: 3,
      pose: "pocuva",
      intro: "Počúvaj slovo. Aký zvuk je prvý?",
      prompt: "Ktorý zvuk je prvý?",
      word: "autobus",
      object: "autobus",
      correct: "A",
      choices: ["A", "O", "M"],
    },
    {
      order: 8,
      type: "PhonemeStart",
      title: "Vyber prvý zvuk",
      skill: "prvá hláska",
      free: true,
      lights: 3,
      pose: "pocuva",
      intro: "Počúvaj pozorne. Vyber prvý zvuk.",
      prompt: "Ktorý zvuk je prvý?",
      word: "banán",
      object: "banan",
      correct: "B",
      choices: ["B", "P", "D"],
    },
    {
      order: 9,
      type: "SilentPhonemeStart",
      title: "Tichá hra",
      skill: "abstrakcia",
      lights: 3,
      pose: "rozmysla",
      intro: "Nepoviem slovo. Povedz si ho v hlave.",
      prompt: "Povedz si obrázok v hlave.",
      object: "ceruzka",
      correct: "C",
      choices: ["C", "S", "Z"],
    },
    {
      order: 10,
      type: "MultiStart",
      title: "Lov na začiatok",
      skill: "prvá hláska",
      lights: 3,
      pose: "detektiv",
      intro: "Hľadáme slová na začiatku. Vyber správne.",
      prompt: "Hľadáme M.",
      target: "M",
      items: ["macka", "autobus", "ceruzka", "dom", "vlak", "banan"],
      correct: ["macka"],
    },
    {
      order: 11,
      type: "HintPanel",
      title: "Nájdi písmeno",
      skill: "nápoveda",
      lights: 2,
      pose: "ukazuje",
      intro: "Klikni na abecedu. Nájdeš písmeno.",
      prompt: "Nájdi písmeno M.",
      target: "M",
    },
    {
      order: 12,
      type: "DragMatch",
      title: "Prilož písmeno",
      skill: "písmeno a obrázok",
      lights: 3,
      pose: "ukazuje",
      intro: "Vyber písmeno a potom obrázok.",
      prompt: "Vyber písmeno a potom obrázok.",
      pairs: [
        { letter: "A", object: "autobus" },
        { letter: "B", object: "banan" },
        { letter: "C", object: "ceruzka" },
      ],
    },
    {
      order: 13,
      type: "ReverseHint",
      title: "Rýchla nápoveda",
      skill: "nápovedné obrázky",
      lights: 2,
      pose: "detektiv",
      intro: "Nájdi obrázok, ktorý patrí k písmenu.",
      prompt: "Ktorý obrázok patrí k B?",
      letter: "B",
      correct: "banan",
      items: ["autobus", "banan", "ceruzka"],
    },
    {
      order: 14,
      type: "MarkKnownLetters",
      title: "Zber písmen",
      skill: "sebareflexia",
      lights: 2,
      pose: "skolak",
      intro: "Označ písmená, ktoré už poznáš.",
      prompt: "Označ písmená, ktoré už poznáš.",
      letters: ["A", "B", "C", "M", "S", "O", "E", "L", "P", "T"],
    },
    {
      order: 15,
      type: "BlendTwoSounds",
      title: "Spoj zvuky",
      skill: "čítanie bez písmen",
      lights: 3,
      pose: "cita",
      intro: "Počúvaj: S. A. Spolu?",
      prompt: "S + A",
      sounds: ["S", "A"],
      correct: "SA",
      choices: ["SA", "SO", "MA"],
    },
    {
      order: 16,
      type: "BlendTwoSounds",
      title: "Viac samohlások",
      skill: "sluchová syntéza",
      lights: 3,
      pose: "cita",
      intro: "Počúvaj a vyber správnu slabiku.",
      prompt: "S + O",
      sounds: ["S", "O"],
      correct: "SO",
      choices: ["SA", "SE", "SO", "SU"],
    },
    {
      order: 17,
      type: "BlendTwoSounds",
      title: "Iná spoluhláska",
      skill: "sluchová syntéza",
      lights: 3,
      pose: "cita",
      intro: "Počúvaj: M. A. Spolu?",
      prompt: "M + A",
      sounds: ["M", "A"],
      correct: "MA",
      choices: ["MA", "MO", "SA"],
    },
    {
      order: 18,
      type: "BubbleSyllables",
      title: "Bubliny slabík",
      skill: "automatizácia",
      lights: 3,
      pose: "cita",
      intro: "Chytaj slabiku, ktorú počuješ.",
      prompt: "Chyť správnu slabiku.",
      sounds: ["S", "U"],
      correct: "SU",
      choices: ["SA", "SU", "MU", "ME"],
    },
    {
      order: 19,
      type: "BuildSyllable",
      title: "Dve kartičky",
      skill: "prvé slabiky",
      lights: 4,
      pose: "cita",
      intro: "Spoj dve písmená. Čo vzniklo?",
      prompt: "Postav MA.",
      target: "MA",
      letters: ["M", "A", "S", "O"],
    },
    {
      order: 20,
      type: "Checkpoint",
      title: "Čo už viem",
      skill: "diagnostika",
      lights: 5,
      pose: "tlieska",
      intro: "Skús krátky test. Ukáž, čo už vieš.",
      prompt: "Krátky mix úloh.",
      checks: [
        { label: "Prvá hláska", emoji: "👂" },
        { label: "Nápoveda", emoji: "A" },
        { label: "Pexeso", emoji: "★" },
        { label: "S + A", emoji: "SA" },
        { label: "M + A", emoji: "MA" },
        { label: "Slabika", emoji: "▣" },
      ],
    },
  ];

  const surprises = [
    { object: "autobus", task: "A" },
    { object: "banan", task: "B" },
    { object: "ceruzka", task: "C" },
    { object: "dom", task: "B" },
    { object: "macka", task: "A" },
    { object: "skola", task: "B" },
    { object: "sova", task: "C" },
    { object: "vlak", task: "A" },
    { object: "lopta", task: "B" },
    { object: "kvet", task: "C" },
  ];

  const FULL_GLOW_LIGHTS = lessons.reduce((total, lesson) => total + lesson.lights, 0) + surprises.length;

  const praise = ["Správne.", "To sedí.", "Výborne.", "Áno, to je ono."];
  const mistakes = ["Nie. Skús ešte raz.", "To nesedí.", "Pozri sa na nápovedu.", "Skús to pomaly."];
  const funny = ["To by bol zvláštny objav.", "To sa často nevidí.", "Zaujímavá voľba."];

  let state = loadState();
  let screen = state.activeProfileId ? "map" : "profile";
  let activeLesson = null;
  let rewardLesson = null;
  let rewardLightsEarned = 0;
  let lastLine = "Ahoj. Vyber si profil a môžeme začať.";
  let alphabetGoal = null;
  let audioCtx = null;
  let speechPauseTimer = null;
  let speechSequenceId = 0;
  let lastSpeechSequence = null;
  let currentLumiPose = "hovori";
  let lumiAnimationTimer = null;
  let editingProfileId = "";
  let selectedProfileAvatar = profileAvatars[0].src;

  const app = document.getElementById("app");
  const profilePill = document.getElementById("profilePill");
  const lightPill = document.getElementById("lightPill");
  const lumiPose = document.getElementById("lumiPose");
  const lumiLine = document.getElementById("lumiLine");
  const repeatButton = document.getElementById("repeatButton");
  const volumeRange = document.getElementById("volumeRange");
  const alphabetModal = document.getElementById("alphabetModal");
  const alphabetGrid = document.getElementById("alphabetGrid");
  const parentModal = document.getElementById("parentModal");
  const parentContent = document.getElementById("parentContent");
  const profileModal = document.getElementById("profileModal");
  const profileForm = document.getElementById("profileForm");
  const profileNameInput = document.getElementById("profileNameInput");
  const profileAvatarGrid = document.getElementById("profileAvatarGrid");
  const profileEditorTitle = document.getElementById("profileEditorTitle");
  const toast = document.getElementById("toast");

  function defaultState() {
    return {
      activeProfileId: "",
      fullUnlocked: false,
      volume: 0.8,
      profiles: [
        {
          id: "matko",
          name: "Maťko",
          avatar: poses.skolak,
          lights: 42,
          completed: [1, 2, 3, 4, 5],
          knownLetters: ["A", "B", "M"],
          surprisesDone: [],
        },
        {
          id: "emka",
          name: "Emka",
          avatar: poses.smeje,
          lights: 15,
          completed: [1, 2],
          knownLetters: ["A"],
          surprisesDone: [],
        },
      ],
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const defaults = defaultState();
      const profiles = Array.isArray(parsed.profiles) && parsed.profiles.length
        ? parsed.profiles.map((profile, index) => ({
            ...profile,
            id: profile.id || `profil_${index + 1}`,
            name: String(profile.name || `Profil ${index + 1}`).slice(0, 24),
            avatar: normalizeAvatar(profile.avatar, index),
            coins: undefined,
            lights: Number(profile.lights ?? profile.coins) || 0,
            completed: Array.isArray(profile.completed) ? profile.completed : [],
            knownLetters: Array.isArray(profile.knownLetters) ? profile.knownLetters : [],
            surprisesDone: Array.isArray(profile.surprisesDone) ? profile.surprisesDone : [],
          }))
        : defaults.profiles;
      const nextState = { ...defaults, ...parsed, profiles };
      if (nextState.activeProfileId && !profiles.some((profile) => profile.id === nextState.activeProfileId)) {
        nextState.activeProfileId = "";
      }
      return nextState;
    } catch {
      return defaultState();
    }
  }

  function normalizeAvatar(avatar, index = 0) {
    if (profileAvatars.some((item) => item.src === avatar)) return avatar;
    const legacy = String(avatar || "");
    if (legacy.includes("smeje") || legacy.includes("tlieska")) return poses.tesi;
    if (legacy.includes("smutny") || legacy.includes("chyba")) return poses.smutny;
    if (legacy.includes("rozmysla") || legacy.includes("detektiv")) return poses.rozmysla;
    if (legacy.includes("ukazuje")) return poses.ukazuje;
    if (legacy.includes("ok")) return poses.ok;
    return profileAvatars[index % profileAvatars.length].src;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateTopbar();
  }

  function currentProfile() {
    return state.profiles.find((profile) => profile.id === state.activeProfileId) || state.profiles[0];
  }

  function updateTopbar() {
    const profile = state.activeProfileId ? currentProfile() : null;
    profilePill.textContent = profile ? profile.name : "Profil";
    lightPill.textContent = profile ? profile.lights : "0";
    document.documentElement.style.setProperty("--profile-light", String(profile ? profileLightLevel(profile) : 0));
    volumeRange.value = String(state.volume ?? 0.8);
  }

  function profileLightLevel(profile) {
    return Math.min(1, Math.max(0, (Number(profile?.lights) || 0) / FULL_GLOW_LIGHTS));
  }

  function profileLightPercent(profile) {
    return Math.round(profileLightLevel(profile) * 100);
  }

  function lightWord(count) {
    if (count === 1) return "svetielko";
    if (count >= 2 && count <= 4) return "svetielka";
    return "svetielok";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function sample(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function setLumi(text, pose = "skolak", speakNow = false) {
    lastLine = text;
    lastSpeechSequence = null;
    lumiLine.textContent = text;
    currentLumiPose = pose;
    lumiPose.src = poses[pose] || poses.skolak;
    animateLumi(pose, speakNow);
    if (speakNow) speak(text);
  }

  function animateLumi(pose = currentLumiPose, speaking = false) {
    const panel = lumiPose.closest(".lumi-panel");
    window.clearTimeout(lumiAnimationTimer);
    lumiPose.classList.remove("lumi-speaking", "lumi-idle", "lumi-pop");
    panel?.classList.remove("lumi-celebrating");
    void lumiPose.offsetWidth;

    if (["tesi", "smeje", "tlieska", "ok"].includes(pose)) {
      lumiPose.classList.add("lumi-pop");
      panel?.classList.add("lumi-celebrating");
      lumiAnimationTimer = window.setTimeout(() => {
        lumiPose.classList.remove("lumi-pop");
        panel?.classList.remove("lumi-celebrating");
        lumiPose.classList.add("lumi-idle");
      }, 900);
      return;
    }

    lumiPose.classList.add(speaking || ["hovori", "cita"].includes(pose) ? "lumi-speaking" : "lumi-idle");
  }

  function settleLumiAnimation() {
    const panel = lumiPose.closest(".lumi-panel");
    if (panel?.classList.contains("lumi-celebrating")) return;
    lumiPose.classList.remove("lumi-speaking");
    lumiPose.classList.add("lumi-idle");
  }

  function speak(text) {
    lastLine = text;
    lastSpeechSequence = null;
    if (!("speechSynthesis" in window)) {
      showToast(text);
      return;
    }
    cancelSpeechPlayback();
    animateLumi(currentLumiPose, true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "sk-SK";
    utterance.volume = Number(state.volume ?? 0.8);
    utterance.rate = 0.9;
    utterance.onend = settleLumiAnimation;
    utterance.onerror = settleLumiAnimation;
    window.speechSynthesis.speak(utterance);
  }

  function cancelSpeechPlayback() {
    speechSequenceId += 1;
    window.clearTimeout(speechPauseTimer);
    speechPauseTimer = null;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function speakSoundsWithPause(sounds, pausesMs, ending = "") {
    const line = `${sounds.join(". ")}.${ending ? ` ${ending}` : ""}`;
    const recordings = ending ? [...sounds, ending] : [...sounds];
    lastLine = line;
    lastSpeechSequence = {
      sounds: [...sounds],
      pausesMs: Array.isArray(pausesMs) ? [...pausesMs] : pausesMs,
      ending,
    };
    lumiLine.textContent = line;
    if (!("speechSynthesis" in window)) {
      showToast(line);
      return;
    }

    cancelSpeechPlayback();
    animateLumi(currentLumiPose, true);
    const sequenceId = speechSequenceId;
    let index = 0;

    const playNext = () => {
      if (sequenceId !== speechSequenceId || index >= recordings.length) return;
      const utterance = new SpeechSynthesisUtterance(recordings[index]);
      utterance.lang = "sk-SK";
      utterance.volume = Number(state.volume ?? 0.8);
      utterance.rate = 0.9;
      utterance.onend = () => {
        index += 1;
        if (index < recordings.length && sequenceId === speechSequenceId) {
          const pauseMs = Array.isArray(pausesMs)
            ? pausesMs[index - 1] ?? pausesMs[pausesMs.length - 1] ?? 0
            : pausesMs;
          speechPauseTimer = window.setTimeout(playNext, pauseMs);
        } else {
          settleLumiAnimation();
        }
      };
      utterance.onerror = settleLumiAnimation;
      window.speechSynthesis.speak(utterance);
    };

    playNext();
  }

  function sfx(kind) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;
      const volume = Number(state.volume ?? 0.8) * 0.12;
      const freq = kind === "ok" ? 740 : kind === "light" ? 980 : 220;
      osc.type = kind === "wrong" ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      return;
    }
  }

  function showToast(text) {
    toast.textContent = text;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1600);
  }

  function setScreen(next, lesson = null) {
    screen = next;
    activeLesson = lesson;
    alphabetGoal = null;
    render();
    app.focus({ preventScroll: true });
  }

  function render() {
    updateTopbar();
    if (screen === "profile") renderProfiles();
    if (screen === "map") renderMap();
    if (screen === "lesson") renderLesson(activeLesson);
    if (screen === "surprise") renderSurprises();
    if (screen === "reward") renderReward();
  }

  function profileProgress(profile) {
    return Math.round(((profile.completed?.length || 0) / lessons.length) * 100);
  }

  function renderProfiles() {
    const cards = state.profiles
      .map(
        (profile) => `
          <div class="profile-card" style="--profile-card-light:${profileLightLevel(profile)}">
            <button class="profile-select" type="button" data-profile="${escapeHtml(profile.id)}">
              <span class="profile-avatar"><img src="${profile.avatar}" alt="" /></span>
              <span class="profile-card-copy">
                <strong>${escapeHtml(profile.name)}</strong>
                <span>${profile.completed.length} / ${lessons.length} krokov</span>
              </span>
              <span class="status-pill light-pill">${profile.lights}</span>
            </button>
            <button class="profile-edit-button" type="button" data-edit-profile="${escapeHtml(profile.id)}" aria-label="Upraviť profil ${escapeHtml(profile.name)}" title="Upraviť profil">
              <span aria-hidden="true">✎</span>
            </button>
          </div>
        `,
      )
      .join("");

    app.innerHTML = `
      <section class="screen profile-screen">
        <div class="hero-stage">
          <img src="${poses.hovori}" alt="Lumi máva" />
          <div class="hero-copy">
            <h1>Lumi</h1>
            <p>Ahoj. Kto sa dnes ide učiť?</p>
          </div>
        </div>
        <div class="profile-list card">
          ${cards}
          <button class="profile-card profile-add-button" type="button" id="addProfileButton">
            <span class="profile-avatar"><img src="${poses.ok}" alt="" /></span>
            <span class="profile-card-copy">
              <strong>Nový profil</strong>
              <span>Začať od kroku 1</span>
            </span>
            <span class="add-symbol" aria-hidden="true">＋</span>
          </button>
        </div>
      </section>
    `;

    app.querySelectorAll("[data-profile]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeProfileId = button.dataset.profile;
        saveState();
        setLumi("Ahoj. Dnes si dáme krátky krok.", "skolak", true);
        setScreen("map");
      });
    });

    app.querySelectorAll("[data-edit-profile]").forEach((button) => {
      button.addEventListener("click", () => openProfileEditor(button.dataset.editProfile));
    });

    document.getElementById("addProfileButton").addEventListener("click", () => {
      openProfileEditor();
    });
  }

  function renderProfileAvatars() {
    profileAvatarGrid.innerHTML = profileAvatars
      .map(
        (avatar) => `
          <label class="avatar-option ${avatar.src === selectedProfileAvatar ? "selected" : ""}">
            <input type="radio" name="profileAvatar" value="${avatar.src}" ${avatar.src === selectedProfileAvatar ? "checked" : ""} />
            <img src="${avatar.src}" alt="${escapeHtml(avatar.label)}" />
            <span>${escapeHtml(avatar.label)}</span>
          </label>
        `,
      )
      .join("");

    profileAvatarGrid.querySelectorAll('input[name="profileAvatar"]').forEach((input) => {
      input.addEventListener("change", () => {
        selectedProfileAvatar = input.value;
        profileAvatarGrid.querySelectorAll(".avatar-option").forEach((option) => option.classList.remove("selected"));
        input.closest(".avatar-option").classList.add("selected");
      });
    });
  }

  function openProfileEditor(profileId = "") {
    const profile = state.profiles.find((item) => item.id === profileId);
    editingProfileId = profile?.id || "";
    selectedProfileAvatar = normalizeAvatar(profile?.avatar, state.profiles.length);
    profileEditorTitle.textContent = profile ? "Upraviť profil" : "Nový profil";
    profileNameInput.value = profile?.name || `Profil ${state.profiles.length + 1}`;
    renderProfileAvatars();
    profileModal.classList.add("show");
    profileModal.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      profileNameInput.focus();
      profileNameInput.select();
    }, 0);
  }

  function closeProfileEditor() {
    profileModal.classList.remove("show");
    profileModal.setAttribute("aria-hidden", "true");
    editingProfileId = "";
  }

  function renderMap() {
    const profile = currentProfile();
    const progress = profileProgress(profile);
    const steps = lessons
      .map((lesson) => {
        const done = profile.completed.includes(lesson.order);
        const locked = !state.fullUnlocked && lesson.order > 8;
        return `
          <button class="world-step ${done ? "done" : ""} ${locked ? "locked" : ""}" type="button" data-step="${lesson.order}">
            <span class="number">${lesson.order}</span>
            <strong>${escapeHtml(lesson.title)}</strong>
            <small>${escapeHtml(lesson.skill)}</small>
          </button>
        `;
      })
      .join("");

    app.innerHTML = `
      <section class="screen map-screen">
        <div class="screen-title">
          <div>
            <p class="eyebrow">Prípravné obdobie</p>
            <h1>Svet plný zábavy</h1>
            <p>Kroky 1 až 8 sú otvorené. Ďalšie kroky sú pripravené v plnej verzii.</p>
          </div>
          <div class="progress-card">
            <div class="progress-label">
              <span>Pokrok</span>
              <span>${progress}%</span>
            </div>
            <div class="progress-track" style="--value:${progress}%"><span></span></div>
          </div>
        </div>
        <div class="world-grid">${steps}</div>
      </section>
    `;

    app.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        const lesson = lessons.find((item) => item.order === Number(button.dataset.step));
        const locked = !state.fullUnlocked && lesson.order > 8;
        if (locked) {
          showParentModal(lesson);
          return;
        }
        setLumi(lesson.intro, lesson.pose, true);
        setScreen("lesson", lesson);
      });
    });
  }

  function renderLesson(lesson) {
    if (!lesson) {
      setScreen("map");
      return;
    }
    const profile = currentProfile();
    const progress = Math.round((lesson.order / lessons.length) * 100);
    app.innerHTML = `
      <section class="screen lesson-screen">
        <div class="lesson-head">
          <button class="soft-button" id="backToMapButton" type="button">Mapa</button>
          <div class="task-title">
            <p class="eyebrow">Krok ${lesson.order} / ${lessons.length}</p>
            <h1>${escapeHtml(lesson.title)}</h1>
            <p>${escapeHtml(lesson.skill)}</p>
          </div>
          <button class="primary-button" id="lessonRepeatButton" type="button">Pokyn</button>
        </div>
        <div class="lesson-body">
          <section class="task-card" id="taskMount"></section>
          <aside class="side-card">
            <div class="reward-box">
              <strong>${escapeHtml(profile.name)}</strong>
              <span>${profile.completed.length} hotových krokov</span>
              <div class="progress-track" style="--value:${progress}%"><span></span></div>
            </div>
            <div class="reward-box">
              <strong>Svetelná sila</strong>
              <span>${profile.lights} ${lightWord(profile.lights)} · pozadie svieti na ${profileLightPercent(profile)} %</span>
              <div class="light-track" style="--value:${profileLightPercent(profile)}%"><span></span></div>
            </div>
            <div class="reward-box">
              <strong>Nápoveda</strong>
              <span>Písmeno si môžeš pozrieť kedykoľvek.</span>
              <button class="soft-button" id="sideAlphabetButton" type="button">Abeceda</button>
              <div class="hint-list">${miniHints()}</div>
            </div>
          </aside>
        </div>
      </section>
    `;

    document.getElementById("backToMapButton").addEventListener("click", () => setScreen("map"));
    document.getElementById("lessonRepeatButton").addEventListener("click", () => {
      setLumi(lesson.intro, lesson.pose, true);
    });
    document.getElementById("sideAlphabetButton").addEventListener("click", openAlphabet);
    renderTask(lesson);
  }

  function miniHints() {
    return alphabet
      .filter((item) => ["A", "B", "C", "M", "S", "O"].includes(item.letter))
      .map(
        (item) => `
          <div class="hint-mini">
            ${item.card || item.image ? `<img src="${item.card || item.image}" alt="" />` : `<span>${item.emoji || item.letter}</span>`}
            <span>${item.letter} ako ${escapeHtml(item.word)}</span>
          </div>
        `,
      )
      .join("");
  }

  function objectMarkup(id) {
    const object = objectBank[id];
    if (!object) return "";
    if (object.image) return `<img src="${object.image}" alt="" /><span>${escapeHtml(object.label)}</span>`;
    return `<span class="emoji" aria-hidden="true">${object.emoji}</span><span>${escapeHtml(object.label)}</span>`;
  }

  function alphabetCardMarkup(id) {
    const object = objectBank[id];
    const item = alphabet.find((entry) => entry.letter === object?.letter);
    if (!item?.card) return objectMarkup(id);
    return `<img class="task-alphabet-card" src="${item.card}" alt="" />`;
  }

  function memoryObjectMarkup(id) {
    const object = objectBank[id];
    if (!object) return "";
    if (!object.memoryImage) return objectMarkup(id);
    return `<img class="memory-object-image" src="${object.memoryImage}" alt="" /><span class="memory-label">${escapeHtml(object.label)}</span>`;
  }

  function choiceVisualMarkup(choice) {
    if (choice.image) return `<img class="choice-image" src="${choice.image}" alt="" />`;
    if (choice.emoji) return `<span class="picture" aria-hidden="true">${choice.emoji}</span>`;
    return "";
  }

  function renderTask(lesson) {
    alphabetGoal = null;
    const mount = document.getElementById("taskMount");
    if (lesson.type === "TapHotspot") renderTapHotspot(mount, lesson);
    if (lesson.type === "SelectOne") renderSelectOne(mount, lesson);
    if (lesson.type === "MatchPairs") renderMatchPairs(mount, lesson);
    if (lesson.type === "OddOneOut") renderOddOneOut(mount, lesson);
    if (lesson.type === "PatternComplete") renderPatternComplete(mount, lesson);
    if (lesson.type === "PhonemeStart" || lesson.type === "SilentPhonemeStart") renderPhonemeStart(mount, lesson);
    if (lesson.type === "MultiStart") renderMultiStart(mount, lesson);
    if (lesson.type === "HintPanel") renderHintPanel(mount, lesson);
    if (lesson.type === "DragMatch") renderDragMatch(mount, lesson);
    if (lesson.type === "ReverseHint") renderReverseHint(mount, lesson);
    if (lesson.type === "MarkKnownLetters") renderMarkKnownLetters(mount, lesson);
    if (lesson.type === "BlendTwoSounds" || lesson.type === "BubbleSyllables") renderBlend(mount, lesson);
    if (lesson.type === "BuildSyllable") renderBuildSyllable(mount, lesson);
    if (lesson.type === "Checkpoint") renderCheckpoint(mount, lesson);
  }

  function renderTapHotspot(mount, lesson) {
    const found = new Set();
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="scene task-options ${lesson.alphabetCards ? "alphabet-card-scene" : ""}">
          ${lesson.items
            .map((id) => {
              const object = objectBank[id];
              const label = object ? `${object.letter} ako ${object.label}` : id;
              const markup = lesson.alphabetCards ? alphabetCardMarkup(id) : objectMarkup(id);
              return `<button class="object-card" type="button" data-object="${id}" aria-label="${escapeHtml(label)}">${markup}</button>`;
            })
            .join("")}
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-object]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.object;
        if (lesson.targets.includes(id)) {
          found.add(id);
          button.classList.add("found");
          sfx("ok");
          setLumi("Správne.", "ok", true);
          if (found.size === lesson.targets.length) completeLesson(lesson);
        } else {
          sfx("wrong");
          setLumi("To nesedí. Skús inú vec.", "rozmysla", true);
        }
      });
    });
  }

  function renderSelectOne(mount, lesson) {
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="task-visual" aria-hidden="true">
          ${lesson.visualImage ? `<img src="${lesson.visualImage}" alt="" />` : `<span class="picture">${lesson.visual || ""}</span>`}
        </div>
        <div class="choice-grid task-options">
          ${lesson.choices
            .map(
              (choice, index) => `
                <button class="choice-button ${choice.image ? "has-image" : ""}" type="button" data-index="${index}">
                  ${choiceVisualMarkup(choice)}
                  <span>${escapeHtml(choice.label)}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const choice = lesson.choices[Number(button.dataset.index)];
        if (choice.correct) {
          button.classList.add("correct");
          sfx("ok");
          setLumi(sample(praise), "tlieska", true);
          completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(choice.funny ? sample(funny) : sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function renderMatchPairs(mount, lesson) {
    const deck = lesson.pairs
      .flatMap((id) => [id, id])
      .sort(() => Math.random() - 0.5)
      .map((id, index) => ({ id, index, matched: false }));
    let open = [];
    let matched = 0;
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="memory-grid task-options">
          ${deck.map((card) => `<button class="memory-card" type="button" data-card="${card.index}" aria-label="Zakrytá karta"><span class="face"><img src="${poses.spi}" alt="" /></span></button>`).join("")}
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-card]").forEach((button) => {
      button.addEventListener("click", () => {
        const card = deck[Number(button.dataset.card)];
        if (card.matched || open.includes(card.index) || open.length === 2) return;
        button.classList.add("open");
        button.innerHTML = `<span class="face">${memoryObjectMarkup(card.id)}</span>`;
        button.setAttribute("aria-label", objectBank[card.id]?.label || "Odkrytá karta");
        open.push(card.index);
        if (open.length === 2) {
          const [a, b] = open.map((idx) => deck[idx]);
          window.setTimeout(() => {
            if (a.id === b.id) {
              a.matched = true;
              b.matched = true;
              matched += 1;
              sfx("ok");
              setLumi(sample(praise), "tlieska", true);
              mount.querySelectorAll(".memory-card.open").forEach((item) => item.classList.add("correct"));
              if (matched === lesson.pairs.length) completeLesson(lesson);
            } else {
              sfx("wrong");
              setLumi("Skús ešte raz.", "rozmysla", true);
              open.forEach((idx) => {
                const cardButton = mount.querySelector(`[data-card="${idx}"]`);
                cardButton.classList.remove("open");
                cardButton.innerHTML = `<span class="face"><img src="${poses.spi}" alt="" /></span>`;
                cardButton.setAttribute("aria-label", "Zakrytá karta");
              });
            }
            open = [];
          }, 620);
        }
      });
    });
  }

  function renderOddOneOut(mount, lesson) {
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="choice-grid task-options">
          ${lesson.choices
            .map(
              (choice, index) => `
                <button class="choice-button ${choice.image ? "has-image" : ""}" type="button" data-index="${index}">
                  ${choiceVisualMarkup(choice)}
                  <span>${escapeHtml(choice.label)}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
    bindCorrectChoice(mount, lesson, lesson.choices);
  }

  function renderPatternComplete(mount, lesson) {
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="pattern-row">
          ${lesson.sequence.map((item) => `<div class="choice-button">${item}</div>`).join("")}
        </div>
        <div class="choice-grid pattern-choice-grid task-options">
          ${lesson.choices.map((choice, index) => `<button class="choice-button" type="button" data-index="${index}">${choice.label}</button>`).join("")}
        </div>
      </div>
    `;
    bindCorrectChoice(mount, lesson, lesson.choices);
  }

  function renderPhonemeStart(mount, lesson) {
    const object = objectBank[lesson.object];
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="object-card">${objectMarkup(lesson.object)}</div>
        <div class="secondary-row">
          <button class="primary-button" id="sayWordButton" type="button">${lesson.type === "SilentPhonemeStart" ? "V hlave" : "Počúvaj"}</button>
          <button class="soft-button" type="button" id="openAlphabetTask">Abeceda</button>
        </div>
        <div class="letter-choice-grid task-options">
          ${lesson.choices.map((letter) => `<button class="choice-button" type="button" data-letter="${letter}">${letter}</button>`).join("")}
        </div>
      </div>
    `;
    document.getElementById("sayWordButton").addEventListener("click", () => {
      if (lesson.type === "SilentPhonemeStart") {
        setLumi("Povedz si slovo potichu.", "rozmysla", true);
      } else {
        setLumi(object.label, "pocuva", true);
      }
    });
    document.getElementById("openAlphabetTask").addEventListener("click", openAlphabet);
    mount.querySelectorAll("[data-letter]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.letter === lesson.correct) {
          button.classList.add("correct");
          sfx("ok");
          setLumi(`${sample(praise)} ${object.label} sa začína na ${lesson.correct}.`, "tlieska", true);
          completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function renderMultiStart(mount, lesson) {
    const chosen = new Set();
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="object-grid task-options">
          ${lesson.items.map((id) => `<button class="object-card" type="button" data-object="${id}">${objectMarkup(id)}</button>`).join("")}
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-object]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.object;
        if (lesson.correct.includes(id)) {
          chosen.add(id);
          button.classList.add("correct");
          sfx("ok");
          if (chosen.size === lesson.correct.length) completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function renderHintPanel(mount, lesson) {
    alphabetGoal = { lesson, letter: lesson.target };
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="choice-button"><span class="picture">${lesson.target}</span></div>
        <div class="task-options">
          <button class="primary-button" id="hintAlphabetButton" type="button">Abeceda</button>
        </div>
      </div>
    `;
    document.getElementById("hintAlphabetButton").addEventListener("click", openAlphabet);
  }

  function renderDragMatch(mount, lesson) {
    let selected = "";
    const matched = new Set();
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="task-options match-options">
          <div class="letter-choice-grid">
            ${lesson.pairs.map((pair) => `<button class="choice-button" type="button" data-pick-letter="${pair.letter}">${pair.letter}</button>`).join("")}
          </div>
          <div class="object-grid">
            ${lesson.pairs.map((pair) => `<button class="object-card" type="button" data-match-object="${pair.object}">${objectMarkup(pair.object)}</button>`).join("")}
          </div>
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-pick-letter]").forEach((button) => {
      button.addEventListener("click", () => {
        selected = button.dataset.pickLetter;
        mount.querySelectorAll("[data-pick-letter]").forEach((item) => item.classList.remove("correct"));
        button.classList.add("correct");
      });
    });
    mount.querySelectorAll("[data-match-object]").forEach((button) => {
      button.addEventListener("click", () => {
        const pair = lesson.pairs.find((item) => item.object === button.dataset.matchObject);
        if (pair.letter === selected) {
          matched.add(pair.object);
          button.classList.add("correct");
          sfx("ok");
          if (matched.size === lesson.pairs.length) completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi("Najprv vyber správne písmeno.", "rozmysla", true);
        }
      });
    });
  }

  function renderReverseHint(mount, lesson) {
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="choice-button"><span class="picture">${lesson.letter}</span></div>
        <div class="object-grid task-options">
          ${lesson.items.map((id) => `<button class="object-card" type="button" data-object="${id}">${objectMarkup(id)}</button>`).join("")}
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-object]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.object === lesson.correct) {
          button.classList.add("correct");
          sfx("ok");
          completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function renderMarkKnownLetters(mount, lesson) {
    const profile = currentProfile();
    const selected = new Set(profile.knownLetters || []);
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="letter-choice-grid task-options">
          ${lesson.letters
            .map((letter) => {
              const item = alphabet.find((entry) => entry.letter === letter);
              return `
                <button
                  class="choice-button known-letter-card ${selected.has(letter) ? "correct" : ""}"
                  type="button"
                  data-known="${letter}"
                  aria-label="${escapeHtml(item ? `${item.letter} ako ${item.word}` : letter)}"
                >
                  ${item?.card ? `<img src="${item.card}" alt="" />` : `<span class="known-letter">${letter}</span>`}
                </button>
              `;
            })
            .join("")}
        </div>
        <button class="primary-button" id="knownDoneButton" type="button">Hotovo</button>
      </div>
    `;
    mount.querySelectorAll("[data-known]").forEach((button) => {
      button.addEventListener("click", () => {
        const letter = button.dataset.known;
        if (selected.has(letter)) {
          selected.delete(letter);
          button.classList.remove("correct");
        } else {
          selected.add(letter);
          button.classList.add("correct");
        }
        profile.knownLetters = [...selected];
        saveState();
      });
    });
    document.getElementById("knownDoneButton").addEventListener("click", () => completeLesson(lesson));
  }

  function renderBlend(mount, lesson) {
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="secondary-row">
          <button class="primary-button" id="playSoundsButton" type="button">Počúvaj</button>
          <button class="soft-button" type="button" id="openAlphabetBlend">Abeceda</button>
        </div>
        <div class="letter-choice-grid task-options">
          ${lesson.choices.map((choice) => `<button class="choice-button" type="button" data-syllable="${choice}">${choice}</button>`).join("")}
        </div>
      </div>
    `;
    document.getElementById("playSoundsButton").addEventListener("click", () => {
      setLumi(`${lesson.sounds.join(". ")}. Spolu?`, "pocuva", false);
      speakSoundsWithPause(lesson.sounds, SYLLABLE_RECORDING_PAUSES_MS, "Spolu?");
    });
    document.getElementById("openAlphabetBlend").addEventListener("click", openAlphabet);
    mount.querySelectorAll("[data-syllable]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.syllable === lesson.correct) {
          button.classList.add("correct");
          sfx("ok");
          setLumi(`${sample(praise)} Vzniklo ${lesson.correct}.`, "tlieska", true);
          completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function renderBuildSyllable(mount, lesson) {
    let built = "";
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="choice-button" id="builtSyllable"><span class="picture">?</span></div>
        <div class="letter-choice-grid task-options">
          ${lesson.letters.map((letter) => `<button class="choice-button" type="button" data-letter-card="${letter}">${letter}</button>`).join("")}
        </div>
        <button class="soft-button" id="clearBuildButton" type="button">Znova</button>
      </div>
    `;
    const display = document.getElementById("builtSyllable");
    mount.querySelectorAll("[data-letter-card]").forEach((button) => {
      button.addEventListener("click", () => {
        if (built.length >= 2) return;
        built += button.dataset.letterCard;
        display.innerHTML = `<span class="picture">${built}</span>`;
        if (built.length === 2) {
          if (built === lesson.target) {
            button.classList.add("correct");
            sfx("ok");
            setLumi(`Áno. ${lesson.target}.`, "tlieska", true);
            completeLesson(lesson);
          } else {
            sfx("wrong");
            setLumi("Ešte nie. Skús znova.", "rozmysla", true);
          }
        }
      });
    });
    document.getElementById("clearBuildButton").addEventListener("click", () => {
      built = "";
      display.innerHTML = `<span class="picture">?</span>`;
    });
  }

  function renderCheckpoint(mount, lesson) {
    const done = new Set();
    mount.innerHTML = `
      <div class="task-board">
        <h2>${escapeHtml(lesson.prompt)}</h2>
        <div class="checkpoint-grid task-options">
          ${lesson.checks
            .map(
              (check, index) => `
              <button class="checkpoint-card" type="button" data-check="${index}">
                <span class="emoji">${check.emoji}</span>
                <span>${escapeHtml(check.label)}</span>
              </button>
            `,
            )
            .join("")}
        </div>
        <div class="reward-box hidden" id="checkpointResult">
          <strong>Pozri, čo už vieš</strong>
          <span>Najviac sa oplatí zopakovať slabiky S + samohláska a M + A.</span>
        </div>
      </div>
    `;
    mount.querySelectorAll("[data-check]").forEach((button) => {
      button.addEventListener("click", () => {
        done.add(button.dataset.check);
        button.classList.add("correct");
        sfx("ok");
        if (done.size >= lesson.checks.length) {
          document.getElementById("checkpointResult").classList.remove("hidden");
          setLumi("Výborne. Svet plný zábavy je hotový.", "tlieska", true);
          completeLesson(lesson);
        }
      });
    });
  }

  function bindCorrectChoice(mount, lesson, choices) {
    mount.querySelectorAll("[data-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const choice = choices[Number(button.dataset.index)];
        if (choice.correct) {
          button.classList.add("correct");
          sfx("ok");
          setLumi(sample(praise), "tlieska", true);
          completeLesson(lesson);
        } else {
          button.classList.add("wrong");
          sfx("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function completeLesson(lesson) {
    const profile = currentProfile();
    rewardLightsEarned = 0;
    if (!profile.completed.includes(lesson.order)) {
      profile.completed.push(lesson.order);
      profile.completed.sort((a, b) => a - b);
      profile.lights += lesson.lights;
      rewardLightsEarned = lesson.lights;
      saveState();
    }
    rewardLesson = lesson;
    window.setTimeout(() => {
      sfx("light");
      setScreen("reward");
    }, 420);
  }

  function renderReward() {
    const profile = currentProfile();
    const lesson = rewardLesson || lessons[0];
    const earned = rewardLightsEarned;
    const next = lessons.find((item) => item.order === lesson.order + 1);
    const canContinue = next && (state.fullUnlocked || next.order <= 8);
    app.innerHTML = `
      <section class="screen">
        <div class="hero-stage">
          <img src="${poses.smeje}" alt="Lumi sa teší" />
          <div class="hero-copy">
            <p class="eyebrow">Odmena</p>
            <h1>Výborne!</h1>
            <p>${earned
              ? `${escapeHtml(profile.name)} získava ${earned} ${lightWord(earned)} a rozžiaruje svoj Svet plný zábavy.`
              : `${escapeHtml(profile.name)} si úspešne zopakoval túto úlohu.`}</p>
            <div class="secondary-row">
              <button class="primary-button" id="rewardMapButton" type="button">Mapa</button>
              ${canContinue ? `<button class="soft-button" id="nextLessonButton" type="button">Ďalší krok</button>` : ""}
            </div>
          </div>
        </div>
      </section>
    `;
    setLumi(earned ? `Výborne. Získal si ${earned} ${lightWord(earned)}.` : "Výborne. Úlohu si zvládol znova.", "smeje", true);
    document.getElementById("rewardMapButton").addEventListener("click", () => setScreen("map"));
    const nextButton = document.getElementById("nextLessonButton");
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        setLumi(next.intro, next.pose, true);
        setScreen("lesson", next);
      });
    }
  }

  function renderSurprises() {
    const profile = currentProfile();
    app.innerHTML = `
      <section class="screen lesson-screen">
        <div class="screen-title">
          <div>
            <p class="eyebrow">Minihra</p>
            <h1>Lumikové prekvapenia</h1>
            <p>Odkry okienko a splň jednu krátku úlohu.</p>
          </div>
          <button class="soft-button" id="surpriseMapButton" type="button">Mapa</button>
        </div>
        <div class="lesson-body">
          <section class="task-card">
            <div class="surprise-grid">
              ${surprises
                .map(
                  (item, index) => `
                  <button class="surprise-card ${profile.surprisesDone.includes(index) ? "correct open" : ""}" type="button" data-surprise="${index}">
                    <span class="face">${profile.surprisesDone.includes(index) ? objectMarkup(item.object) : `<img src="${poses.spi}" alt="" />`}</span>
                  </button>
                `,
                )
                .join("")}
            </div>
          </section>
          <aside class="side-card">
            <div class="reward-box" id="surpriseTask">
              <strong>Vyber okienko</strong>
              <span>Lumi odkryje obrázok.</span>
            </div>
          </aside>
        </div>
      </section>
    `;
    document.getElementById("surpriseMapButton").addEventListener("click", () => setScreen("map"));
    app.querySelectorAll("[data-surprise]").forEach((button) => {
      button.addEventListener("click", () => openSurprise(Number(button.dataset.surprise), button));
    });
    setLumi("Vyber okienko s prekvapením.", "detektiv", false);
  }

  function openSurprise(index, button) {
    const profile = currentProfile();
    const item = surprises[index];
    const object = objectBank[item.object];
    button.classList.add("open");
    button.innerHTML = `<span class="face">${objectMarkup(item.object)}</span>`;
    const task = document.getElementById("surpriseTask");
    if (item.task === "A") {
      task.innerHTML = `
        <strong>Čo vidíš?</strong>
        <span>Povedz slovo nahlas.</span>
        <button class="primary-button" id="surpriseDone" type="button">Povedal som</button>
      `;
    }
    if (item.task === "B") {
      task.innerHTML = `
        <strong>Kam to patrí?</strong>
        <span>${escapeHtml(object.label)}</span>
        <div class="choice-grid">
          ${["DOMA", "VONKU", "V ŠKOLE"].map((place) => `<button class="choice-button" type="button" data-place="${place}">${place}</button>`).join("")}
        </div>
      `;
    }
    if (item.task === "C") {
      const choices = [object.letter, "S", "M", "A"].filter((letter, idx, arr) => arr.indexOf(letter) === idx).slice(0, 3);
      task.innerHTML = `
        <strong>Začiatok slova</strong>
        <span>${escapeHtml(object.label)}</span>
        <div class="letter-choice-grid">
          ${choices.map((letter) => `<button class="choice-button" type="button" data-letter="${letter}">${letter}</button>`).join("")}
        </div>
      `;
    }
    setLumi(item.task === "A" ? "Čo vidíš?" : item.task === "B" ? "Patrí to domov, von alebo do školy?" : "Vyber písmeno na začiatku.", "ukazuje", true);

    const doneButton = document.getElementById("surpriseDone");
    if (doneButton) {
      doneButton.addEventListener("click", () => finishSurprise(index));
    }
    task.querySelectorAll("[data-place]").forEach((choice) => {
      choice.addEventListener("click", () => {
        if (choice.dataset.place === object.place) {
          choice.classList.add("correct");
          finishSurprise(index);
        } else {
          choice.classList.add("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
    task.querySelectorAll("[data-letter]").forEach((choice) => {
      choice.addEventListener("click", () => {
        if (choice.dataset.letter === object.letter) {
          choice.classList.add("correct");
          finishSurprise(index);
        } else {
          choice.classList.add("wrong");
          setLumi(sample(mistakes), "rozmysla", true);
        }
      });
    });
  }

  function finishSurprise(index) {
    const profile = currentProfile();
    const newlyCompleted = !profile.surprisesDone.includes(index);
    if (newlyCompleted) {
      profile.surprisesDone.push(index);
      profile.lights += 1;
      saveState();
    }
    sfx("ok");
    setLumi(sample(praise), "tlieska", true);
    showToast(newlyCompleted ? "+1 svetielko" : "Toto svetielko už svieti.");
  }

  function renderAlphabet() {
    alphabetGrid.innerHTML = alphabet
      .map(
        (item) => `
        <button
          class="letter-tile ${item.card ? "has-card" : ""} ${item.active ? "" : "inactive"}"
          type="button"
          data-alphabet="${item.letter}"
          aria-label="${escapeHtml(item.word ? `${item.letter} ako ${item.word}` : item.letter)}"
        >
          ${
            item.card
              ? `<img class="alphabet-card-image" src="${item.card}" alt="" />`
              : item.letterOnly
                ? `<span class="letter letter-only">${item.letter}</span>`
                : `
                <span class="letter">${item.letter}</span>
                ${item.image ? `<img src="${item.image}" alt="" />` : `<span class="emoji" aria-hidden="true">${item.emoji || item.letter}</span>`}
                <span>${escapeHtml(item.word)}</span>
              `
          }
        </button>
      `,
      )
      .join("");
    alphabetGrid.querySelectorAll("[data-alphabet]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = alphabet.find((entry) => entry.letter === button.dataset.alphabet);
        alphabetGrid.querySelectorAll(".letter-tile").forEach((tile) => tile.classList.remove("correct", "wrong"));
        button.classList.add("correct");
        if (item.letterOnly) {
          setLumi(`${item.letter}.`, "ukazuje", false);
          speakSoundsWithPause([item.letter], [100]);
        } else {
          setLumi(`${item.letter} ako ${item.word}.`, "ukazuje", false);
          speakSoundsWithPause([item.letter], [100], `ako ${item.word}.`);
        }
        if (alphabetGoal && item.letter === alphabetGoal.letter) {
          closeAlphabet();
          completeLesson(alphabetGoal.lesson);
        } else if (alphabetGoal) {
          button.classList.add("wrong");
          setLumi("Pozri ešte raz. Hľadáme iné písmeno.", "rozmysla", true);
        }
      });
    });
  }

  function openAlphabet() {
    renderAlphabet();
    alphabetModal.classList.add("show");
    alphabetModal.setAttribute("aria-hidden", "false");
  }

  function closeAlphabet() {
    alphabetModal.classList.remove("show");
    alphabetModal.setAttribute("aria-hidden", "true");
  }

  function showParentModal(lesson = null) {
    const title = lesson ? `Krok ${lesson.order} je v plnej verzii.` : "Rodičovská zóna";
    const resetButton = state.activeProfileId
      ? `<button class="soft-button" id="resetProgressButton" type="button">Vynulovať aktuálny profil</button>`
      : "";
    parentContent.innerHTML = `
      <div class="task-board">
        <div class="reward-box">
          <strong>${escapeHtml(title)}</strong>
          <span>Zdarma sú kroky 1 až 8 a minihra. Kroky 9 až 20 sa odomknú po rodičovskom potvrdení.</span>
        </div>
        <div class="parent-grid">
          <div class="reward-box">
            <strong>3 zariadenia</strong>
            <span>Pripravené pre Google konto a licenčný server.</span>
            <div class="hint-list">
              <div class="hint-mini"><span>1</span><span>Tablet doma</span></div>
              <div class="hint-mini"><span>2</span><span>Školský tablet</span></div>
              <div class="hint-mini"><span>3</span><span>Rezerva</span></div>
              <div class="hint-mini"><span>4</span><span>Vyžaduje odhlásenie</span></div>
            </div>
          </div>
          <div class="reward-box">
            <strong>Odomknúť demo</strong>
            <span>Podrž tlačidlo 3 sekundy.</span>
            <button class="hold-button" id="holdUnlockButton" type="button">Podržať</button>
          </div>
        </div>
        ${resetButton}
      </div>
    `;
    parentModal.classList.add("show");
    parentModal.setAttribute("aria-hidden", "false");
    bindHoldUnlock();
    const resetProgressButton = document.getElementById("resetProgressButton");
    if (resetProgressButton) {
      resetProgressButton.addEventListener("click", () => {
        const profile = currentProfile();
        profile.completed = [];
        profile.lights = 0;
        profile.knownLetters = [];
        profile.surprisesDone = [];
        saveState();
        closeParent();
        setLumi("Profil je vynulovaný.", "skolak", true);
        render();
      });
    }
  }

  function bindHoldUnlock() {
    const button = document.getElementById("holdUnlockButton");
    let timer = null;
    let start = 0;
    const stop = () => {
      window.clearInterval(timer);
      timer = null;
      button.style.setProperty("--hold", "0%");
    };
    const startHold = () => {
      start = Date.now();
      timer = window.setInterval(() => {
        const value = Math.min(100, ((Date.now() - start) / 3000) * 100);
        button.style.setProperty("--hold", `${value}%`);
        if (value >= 100) {
          stop();
          state.fullUnlocked = true;
          saveState();
          closeParent();
          setLumi("Svet plný zábavy je odomknutý.", "tlieska", true);
          setScreen("map");
        }
      }, 50);
    };
    button.addEventListener("pointerdown", startHold);
    button.addEventListener("pointerup", stop);
    button.addEventListener("pointerleave", stop);
    button.addEventListener("pointercancel", stop);
  }

  function closeParent() {
    parentModal.classList.remove("show");
    parentModal.setAttribute("aria-hidden", "true");
  }

  document.getElementById("homeButton").addEventListener("click", () => setScreen("profile"));
  document.getElementById("mapButton").addEventListener("click", () => {
    if (!state.activeProfileId) setScreen("profile");
    else setScreen("map");
  });
  document.getElementById("surpriseButton").addEventListener("click", () => {
    if (!state.activeProfileId) setScreen("profile");
    else setScreen("surprise");
  });
  document.getElementById("alphabetButton").addEventListener("click", openAlphabet);
  document.getElementById("parentButton").addEventListener("click", () => showParentModal());
  document.getElementById("closeAlphabetButton").addEventListener("click", closeAlphabet);
  document.getElementById("closeParentButton").addEventListener("click", closeParent);
  alphabetModal.addEventListener("click", (event) => {
    if (event.target === alphabetModal) closeAlphabet();
  });
  parentModal.addEventListener("click", (event) => {
    if (event.target === parentModal) closeParent();
  });
  document.getElementById("closeProfileButton").addEventListener("click", closeProfileEditor);
  document.getElementById("cancelProfileButton").addEventListener("click", closeProfileEditor);
  profileModal.addEventListener("click", (event) => {
    if (event.target === profileModal) closeProfileEditor();
  });
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = profileNameInput.value.trim();
    if (!name) {
      profileNameInput.focus();
      showToast("Napíš meno profilu.");
      return;
    }

    const profile = state.profiles.find((item) => item.id === editingProfileId);
    if (profile) {
      profile.name = name.slice(0, 24);
      profile.avatar = selectedProfileAvatar;
      saveState();
      closeProfileEditor();
      setLumi("Profil je upravený.", "ok", true);
      render();
      return;
    }

    const id = `profil_${Date.now()}`;
    state.profiles.push({
      id,
      name: name.slice(0, 24),
      avatar: selectedProfileAvatar,
      lights: 0,
      completed: [],
      knownLetters: [],
      surprisesDone: [],
    });
    state.activeProfileId = id;
    saveState();
    closeProfileEditor();
    setLumi("Profil je pripravený. Začíname prvým krokom.", "ok", true);
    setScreen("map");
  });
  repeatButton.addEventListener("click", () => {
    if (lastSpeechSequence) {
      const { sounds, pausesMs, ending } = lastSpeechSequence;
      speakSoundsWithPause(sounds, pausesMs, ending);
      return;
    }
    speak(lastLine);
  });
  volumeRange.addEventListener("input", () => {
    state.volume = Number(volumeRange.value);
    saveState();
  });

  updateTopbar();
  animateLumi("hovori");
  render();
})();
