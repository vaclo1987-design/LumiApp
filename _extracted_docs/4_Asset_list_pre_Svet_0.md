# 4_Asset list pre Svet 0.docx

Source: C:\Users\Martin\Desktop\Peto\Apka slabikar\4_Asset list pre Svet 0.docx

## Structured extraction

Super. Toto je presne ten typ „obsahovej prípravy“, ktorý ti ušetrí mesiace chaosu vo vývoji. A áno – nápovedné obrázky + veľké tlačené písmená od začiatku sú v metodike legitímne a dokonca želané, lebo dieťa sa tak učí samostatne vyhľadať písmeno a znižuje sa stres zo „zabudnutia“.
Nižšie máš: [slabikar-s...znamky.pdf | PDF]
Kompletný asset list pre Svet 0 (grafika, UI, animácie, audio, zvuky)
Skript hlasov: 20 krátkych komentárov (kroky 1–20) + „bez cukrovej vaty“ pochvaly a chyby + A ako auto pre všetky písmená (abecedná nápoveda)
Presná UX logika “ikona → abeceda → klik na písmeno → návrat”
1) Asset list pre Svet 0 (čo presne nakresliť, nahrať, animovať)
1.1. UI/UX komponenty (globálne, v celej appke)
A) Ikona „ABECEDA / Nápoveda“ (globálna)
Umiestnenie: vždy viditeľná vpravo hore (alebo vpravo dole – podľa tvojho UI).
Funkcia: otvorí overlay/obrazovku „Nápovedné obrázky – abeceda“.
Stavy: normálna, hover/pressed, disabled (iba ak by si niekedy chcel).
B) Obrazovka/overlay “ABECEDA – nápovedné obrázky”
Mriežka písmen (slovenská abeceda vrátane CH, DZ, DŽ, diakritiky).
Každá dlaždica obsahuje:
veľké tlačené písmeno (A)
obrázok (auto)
voliteľne malá ikonka „reproduktor“ (nie je nutná, klik na tile stačí)
C) “Späť k úlohe”
Fixné tlačidlo v overlayi (veľké, jasné).
Vždy vráti dieťa na presný stav úlohy (nezresetuje postup).
D) Mini „toast“ nápoveda
Po návrate z abecedy môže na 1 sekundu vyskočiť jemný hint:
„Skús to teraz v úlohe.“ (bez moralizovania)
Metodická opora: nápovedné obrázky majú byť dostupné a dieťa sa má naučiť ich aktívne používať, aby si vedelo písmeno nájsť samo. [slabikar-s...znamky.pdf | PDF]
1.2. Grafika Sveta 0 (konkrétne obrázky)
A) Postavička sprievodca (MVP vizuál)
1 statický obrázok (PNG/SVG) + 2 jednoduché animácie:
„hovorím“ (jemné pulzovanie/poskakovanie)
„mám radosť“ (hviezdička/iskra)
Pozadie transparentné.
B) Svet 0 – scény (pozadia)
Aby si pokryl kroky 1–20 bez zbytočného kreslenia 100 vecí, stačí 8–10 pozadí, na ktoré budeš ukladať hotspoty/objekty:
Izba dieťaťa (hračky, knižka, lopta…)
Kuchyňa (stôl, hrnček, chlieb…)
Škola / trieda (tabuľa, lavica, peračník…)
Ihrisko (šmykľavka, piesok, lopta…)
Park / príroda (strom, vták, kvet…)
Ulica (auto, semafor, dom…)
ZOO / farma (zvieratá – jednoduché a jasné)
Obchod (potraviny – ale prosím bez brandov)
C) Objektové ikonky (recyklovateľné)
40–60 samostatných objektov (PNG s transparentným pozadím) – použiješ ich v:
hotspot úlohách (ťukni na X)
pexese (obrázok–obrázok)
výberoch (SelectOne)
Príklady: auto, dom, strom, pes, mačka, ryba, kniha, peračník, lopta, hrnček, lyžica, vlak, kvet, dáždnik…
D) Pexeso karty
1 univerzálny rub karty + automatický líc z objektových ikoniek.
Animácia otočenia (krátka, 250–350 ms).
1.3. Gamifikácia Sveta 0 (vizuály + animácie)
Minca (1 ikona) + krátky zvuk (bling).
Dielik pokladu (4 varianty alebo 1 a postupné “vyfarbovanie”).
Truhlica:
closed (PNG)
opening (Lottie alebo sprite 8–12 frame)
open (PNG)
Odznak Sveta 0 (ikonka do profilu)
1.4. Audio assety (kritické)
Tu máš zoznam, čo treba nahrať (originálne). Metodika zdôrazňuje, že pri syntéze hlások treba vyslovovať čisté hlásky bez rušivých slov, takže audio musí byť “čisté”. [slabikar-s...znamky.pdf | PDF]
A) Voiceover sprievodcu (Svet 0)
20 × intro (1 veta na krok)
8–12 × pochvala (stručná)
8–12 × chyba (stručná)
6 × pomoc / hint (napr. “Klikni na abecedu.”)
B) Hlásky a slabiky pre “čítanie bez písmen”
Izolované hlásky (minimálne): S, M, A, E, I, O, U
Slabiky (minimálne): SA, SE, SI, SO, SU, MA, ME, MI, MO, MU
(MVP to stačí; rozšíriš neskôr.)
C) Abecedná nápoveda: „X ako …“ (pre všetky písmená)
46-ish nahrávok podľa slovenskej abecedy (vrátane CH, DZ, DŽ).
Každá nahrávka: „A ako auto.“ (krátko, jasne)
Dôležité metodické pravidlo: nepoužívaj zdrobneniny v základných nápovedných slovách (napr. “autíčko”), lebo to zbytočne komplikuje slabiky. [slabikar-s...znamky.pdf | PDF]
1.5. SFX (krátke zvuky)
tap/click (jemný)
correct (krátke “ding”)
wrong (jemné “bup”, nie alarm)
coin (bling)
treasure piece (chime)
card flip (whoosh)
overlay open/close (soft slide)
2) Nápovedné obrázky – konkrétny zoznam “písmeno → slovo → obrázok”
Tu máš návrh spisovných, bežných slov (bez značiek, bez zdrobnenín). Ak ti niektoré slovo nesedí (napr. má diakritiku, ktorú nechceš riešiť), vymeníme.
Poznámka: Slovenská abeceda v škole tradične obsahuje aj CH, DZ, DŽ. V appke to bude v abecednej nápovede ako samostatné dlaždice.
A – auto
Ä – ä (tu odporúčam: Ä neuvádzať v nápovede ako samostatné, alebo použiť „päť“ nie je; lepšie: „päta“? Nečisté. Prakticky: Ä dlaždicu daj až neskôr.)
B – balón
C – cukor
Č – čiapka
D – dom
Ď – ďateľ
DZ – dzban
DŽ – džús
E – električka
F – fúrik
G – guma
H – hrad
CH – chlieb
I – ihla
Í – (neodporúčam samostatne; rieš až pri písmenách s dĺžňom v šlabikárovom období)
J – jazero
K – kôň
L – lampa
Ľ – ľad
M – mačka
N – nos
Ň – ňufák
O – oko
Ô – ôsmy (slovo je abstrakt; lepšie dať až neskôr, alebo použiť „kôň“ na Ô? tiež nie; odporúčam Ô v prípravnom období neriešiť samostatne)
P – pes
Q – (v slovenčine okrajové; vynechať)
R – rak
S – sova
Š – škola
T – traktor
Ť – ťava
U – ucho
Ú – (oddeliť až neskôr)
V – vlak
W – (vynechať)
X – xylofón (okrajové, ale deti to poznajú ako nástroj; ak nechceš, daj X až neskôr)
Y – ypsilon (abstrakt; v prípravnom období by som Y nedával do nápovede ako “slovo”; skôr až neskôr)
Z – zub
Ž – žaba
Dôležitá kritická poznámka (aby si si nezavaril hneď v Svete 0)
V Svete 0 chceš “rozpoznávanie písmen od začiatku”, OK – ale neznamená to, že musíš dať dieťaťu do nápovede komplet celý “alphabet zoo” vrátane Ä/Ô/Y/Q/W hneď na prvý deň.
Metodika hovorí, že deti môžu pracovať s početnejším súborom veľkých tlačených písmen cez nápovedné obrázky, ale jadro prípravného obdobia je stále začiatok hlásky + nápoveda + syntéza slabík. [slabikar-s...znamky.pdf | PDF]
Praktický návrh (najrozumnejší):
Abecedná stránka nech obsahuje všetky písmená, ale:
„ťažké/okrajové“ dlaždice nech sú v Svete 0 šedé (klik funguje, ale úlohy ich nepýtajú),
v úlohách Sveta 0 používaj len subset (napr. A, M, S, O, E, L, P, T, K…).
Tak ostaneš verný “abeceda je vždy dostupná”, ale nepýtaš od prváka Q ako “quinoa”.
3) Skript hlasov – Svet 0 (20 krokov + feedback pool)
3.1. Hlasový štýl (aby to bolo použiteľné)
krátke vety (max 6–8 slov)
normálne tempo, zrozumiteľná výslovnosť
bez infantilných “zlatíčko super” hlášok
chyba = neutrálna (“Nie.”, “Skús ešte raz.”), nie vina
Metodická opora: v prípravnom období sa deti učia napodobňovaním, potrebujú jasnú a bezchybnú reč. [slabikar-s...znamky.pdf | PDF]
3.2. 20 intro komentárov (1 na krok)
Použi ich ako intro_audio pre step_01…step_20.
STEP 01: „Ahoj. Ťukni na tri veci na obrázku.“
STEP 02: „Pozri sa. Vyber vetu, ktorá sedí.“
STEP 03: „Vyber jedno slovo. Počúvaj vetu.“
STEP 04: „Nájdi rovnaké obrázky. Pexeso.“
STEP 05: „Jeden obrázok je iný. Ťukni naň.“
STEP 06: „Pozri na vzor. Doplň, čo ide ďalej.“
STEP 07: „Počúvaj slovo. Aký zvuk je prvý?“
STEP 08: „Počúvaj pozorne. Vyber prvý zvuk.“
STEP 09: „Nepoviem slovo. Povedz si ho v hlave.“
STEP 10: „Hľadáme slová na začiatku. Vyber správne.“
STEP 11: „Klikni na abecedu. Nájdeš písmeno.“
STEP 12: „Pretiahni písmeno k obrázku.“
STEP 13: „Nájdi obrázok, ktorý patrí k písmenu.“
STEP 14: „Označ písmená, ktoré už poznáš.“
STEP 15: „Počúvaj: S… A… Spolu?“
STEP 16: „Počúvaj a vyber správnu slabiku.“
STEP 17: „Počúvaj: M… A… Spolu?“
STEP 18: „Chytaj slabiku, ktorú počuješ.“
STEP 19: „Spoj dve písmená. Čo vzniklo?“
STEP 20: „Skús krátky test. Ukáž, čo už vieš.“
3.3. “Pomocné” hlášky (keď dieťa váha / urobí chybu 2×)
„Klikni na abecedu. Tam je nápoveda.“
„Pozri sa na obrázok pri písmene.“
„Počúvaj ešte raz.“
„Skús to pomaly.“
„Hľadáme začiatok slova.“
„Späť k úlohe. Skús znova.“
3.4. Chybové hlášky (bez cukrovej vaty)
Striedaj ich náhodne, aby to nepôsobilo roboticky.
„Nie.“
„To nesedí.“
„Skús ešte raz.“
„Toto nie je ono.“
„Vyber inú možnosť.“
„Pozri sa na nápovedu.“
„Skús to pomaly.“
„Ešte nie.“
3.5. Pochvaly (stručné, vecné)
„Správne.“
„Dobre.“
„Áno.“
„To je ono.“
„Výborne.“
„Sedí.“
„Pokračuj.“
„Hotovo.“
3.6. Abecedná nápoveda – “X ako …” (voice lines)
Toto sú nahrávky, ktoré sa prehrávajú po kliknutí na dlaždicu písmena v abecednom overlayi.
Dôležité: jedna veta, rovnaký rytmus, rovnaká hlasitosť.
„A ako auto.“
„B ako balón.“
„C ako cukor.“
„Č ako čiapka.“
„D ako dom.“
„Ď ako ďateľ.“
„DZ ako dzban.“
„DŽ ako džús.“
„E ako električka.“
„F ako fúrik.“
„G ako guma.“
„H ako hrad.“
„CH ako chlieb.“
„I ako ihla.“
„J ako jazero.“
„K ako kôň.“
„L ako lampa.“
„Ľ ako ľad.“
„M ako mačka.“
„N ako nos.“
„Ň ako ňufák.“
„O ako oko.“
„P ako pes.“
„R ako rak.“
„S ako sova.“
„Š ako škola.“
„T ako traktor.“
„Ť ako ťava.“
„U ako ucho.“
„V ako vlak.“
„Z ako zub.“
„Ž ako žaba.“
Čo s Ä/Ô/Í/Ý/Ú/X?
V Svete 0 ich nechaj v abecede ako dlaždice (ak chceš “komplet”), ale úlohy ich nech nepýtajú.
Voice lines pre ne môžeš doplniť neskôr, keď budeš mať metodicky vhodný moment.
Inak sa dostaneš do blbej situácie: dieťa klikne na Ô a ty mu povieš niečo, čo nepozná ani polovica dospelých.
4) Presná UX logika tvojej “abecednej ikony” (pre programátora a dizajn)
Toto je “jedna ikonka v celej appke”, ktorú si popísal – len to dávam do presných bodov:
Na každej obrazovke úlohy je tlačidlo ABECEDA. [slabikar-s...znamky.pdf | PDF]
Klik → otvorí sa overlay s mriežkou písmen + obrázkov.
Klik na písmeno:
prehrá sa audio: „A ako auto.“
dlaždica sa krátko zvýrazní (glow 300 ms)
Tlačidlo Späť k úlohe:
zavrie overlay
vráti dieťa na úlohu presne tam, kde bolo
V úlohe dieťa pokračuje a “overí si” písmeno.
Metodická opora: presne toto je princíp – dieťa si má vedieť písmeno vyhľadať samo, opakovane, bez stresu. [slabikar-s...znamky.pdf | PDF]
5) Posledná vec, ktorú si musíš ujasniť (aby si neprekopal sám seba)
Chceš, aby abecedný overlay zobrazoval:
A) iba VEĽKÉ tlačené písmená (pre Svet 0), alebo
B) veľké + malé (A/a), alebo
C) veľké + malé + písané (A/a + písané) — to ti v Svete 0 neodporúčam, bude to miešať typy písma, čo metodika nechce. [slabikar-s...znamky.pdf | PDF]
Ja by som v Svete 0 dal iba VEĽKÉ tlačené (najjednoduchšie), a malé/písané odomykal až neskôr.
Mini otázka (jedna, aby som ti to doladil na 100 %)
Chceš, aby abecedná nápoveda obsahovala od začiatku aj CH/DZ/DŽ, alebo ich dáme do overlayu, ale v Svete 0 ich nebudeme používať v úlohách (len “existujú”)?
Ak odpovieš, upravím ti finálny zoznam nápovedných slov tak, aby bol úplne konzistentný (žiadne divné písmená, ktoré sa v úlohách nikdy neobjavia).

## XML text fallback

--- word/document.xml ---
Super. Toto je presne ten typ „obsahovej prípravy“, ktorý ti ušetrí mesiace chaosu vo vývoji. A áno –
nápovedné obrázky + veľké tlačené písmená od začiatku
sú v metodike legitímne a dokonca želané, lebo dieťa sa tak učí
samostatne vyhľadať písmeno
a znižuje sa stres zo „zabudnutia“.
Nižšie máš:
[slabikar-s...znamky.pdf | PDF]
Kompletný asset list pre Svet 0
(grafika, UI, animácie, audio, zvuky)
Skript hlasov
: 20 krátkych komentárov (kroky 1–20) + „bez cukrovej vaty“ pochvaly a chyby +
A ako auto
pre všetky písmená (abecedná nápoveda)
Presná UX logika “ikona → abeceda → klik na písmeno → návrat”
1) Asset list pre Svet 0 (čo presne nakresliť, nahrať, animovať)
1.1. UI/UX komponenty (globálne, v celej appke)
A) Ikona „ABECEDA / Nápoveda“ (globálna)
Umiestnenie:
vždy viditeľná vpravo hore (alebo vpravo dole – podľa tvojho UI).
Funkcia:
otvorí overlay/obrazovku „Nápovedné obrázky – abeceda“.
Stavy:
normálna, hover/pressed, disabled (iba ak by si niekedy chcel).
B) Obrazovka/overlay “ABECEDA – nápovedné obrázky”
Mriežka písmen
(slovenská abeceda vrátane CH, DZ, DŽ, diakritiky).
Každá dlaždica obsahuje:
veľké tlačené písmeno
(A)
obrázok
(auto)
voliteľne malá ikonka „reproduktor“ (nie je nutná, klik na tile stačí)
C) “Späť k úlohe”
Fixné tlačidlo v overlayi (veľké, jasné).
Vždy vráti dieťa na presný stav úlohy (nezresetuje postup).
D) Mini „toast“ nápoveda
Po návrate z abecedy môže na 1 sekundu vyskočiť jemný hint:
„Skús to teraz v úlohe.“ (bez moralizovania)
Metodická opora:
nápovedné obrázky majú byť dostupné a dieťa sa má naučiť ich aktívne používať, aby si vedelo písmeno nájsť samo.
[slabikar-s...znamky.pdf | PDF]
1.2. Grafika Sveta 0 (konkrétne obrázky)
A) Postavička sprievodca (MVP vizuál)
1 statický obrázok (PNG/SVG) + 2 jednoduché animácie:
„hovorím“
(jemné pulzovanie/poskakovanie)
„mám radosť“
(hviezdička/iskra)
Pozadie transparentné.
B) Svet 0 – scény (pozadia)
Aby si pokryl kroky 1–20 bez zbytočného kreslenia 100 vecí, stačí 8–10 pozadí, na ktoré budeš ukladať hotspoty/objekty:
Izba dieťaťa
(hračky, knižka, lopta…)
Kuchyňa
(stôl, hrnček, chlieb…)
Škola / trieda
(tabuľa, lavica, peračník…)
Ihrisko
(šmykľavka, piesok, lopta…)
Park / príroda
(strom, vták, kvet…)
Ulica
(auto, semafor, dom…)
ZOO / farma
(zvieratá – jednoduché a jasné)
Obchod
(potraviny – ale prosím bez brandov)
C) Objektové ikonky (recyklovateľné)
40–60 samostatných objektov (PNG s transparentným pozadím) – použiješ ich v:
hotspot úlohách (ťukni na X)
pexese (obrázok–obrázok)
výberoch (SelectOne)
Príklady: auto, dom, strom, pes, mačka, ryba, kniha, peračník, lopta, hrnček, lyžica, vlak, kvet, dáždnik…
D) Pexeso karty
1 univerzálny rub karty + automatický líc z objektových ikoniek.
Animácia otočenia (krátka, 250–350 ms).
1.3. Gamifikácia Sveta 0 (vizuály + animácie)
Minca
(1 ikona) + krátky zvuk (bling).
Dielik pokladu
(4 varianty alebo 1 a postupné “vyfarbovanie”).
Truhlica
:
closed (PNG)
opening (Lottie alebo sprite 8–12 frame)
open (PNG)
Odznak Sveta 0
(ikonka do profilu)
1.4. Audio assety (kritické)
Tu máš zoznam, čo treba nahrať (originálne). Metodika zdôrazňuje, že pri syntéze hlások treba vyslovovať čisté hlásky bez rušivých slov, takže audio musí byť “čisté”.
[slabikar-s...znamky.pdf | PDF]
A) Voiceover sprievodcu (Svet 0)
20 ×
intro
(1 veta na krok)
8–12 ×
pochvala
(stručná)
8–12 ×
chyba
(stručná)
6 ×
pomoc / hint
(napr. “Klikni na abecedu.”)
B) Hlásky a slabiky pre “čítanie bez písmen”
Izolované hlásky (minimálne):
S, M, A, E, I, O, U
Slabiky (minimálne):
SA, SE, SI, SO, SU, MA, ME, MI, MO, MU
(MVP to stačí; rozšíriš neskôr.)
C) Abecedná nápoveda: „X ako …“ (pre všetky písmená)
46-ish nahrávok podľa slovenskej abecedy (vrátane CH, DZ, DŽ).
Každá nahrávka:
„A ako auto.“
(krátko, jasne)
Dôležité metodické pravidlo:
nepoužívaj zdrobneniny v základných nápovedných slovách (napr. “autíčko”), lebo to zbytočne komplikuje slabiky.
[slabikar-s...znamky.pdf | PDF]
1.5. SFX (krátke zvuky)
tap/click (jemný)
correct (krátke “ding”)
wrong (jemné “bup”, nie alarm)
coin (bling)
treasure piece (chime)
card flip (whoosh)
overlay open/close (soft slide)
2) Nápovedné obrázky – konkrétny zoznam “písmeno → slovo → obrázok”
Tu máš návrh
spisovných, bežných
slov (bez značiek, bez zdrobnenín). Ak ti niektoré slovo nesedí (napr. má diakritiku, ktorú nechceš riešiť), vymeníme.
Poznámka: Slovenská abeceda v škole tradične obsahuje aj
CH, DZ, DŽ
. V appke to bude v abecednej nápovede ako samostatné dlaždice.
A – auto
Ä – ä (tu odporúčam: Ä neuvádzať v nápovede ako samostatné, alebo použiť „päť“ nie je; lepšie: „päta“? Nečisté. Prakticky: Ä dlaždicu daj až neskôr.)
B – balón
C – cukor
Č – čiapka
D – dom
Ď – ďateľ
DZ – dzban
DŽ – džús
E – električka
F – fúrik
G – guma
H – hrad
CH – chlieb
I – ihla
Í – (neodporúčam samostatne; rieš až pri písmenách s dĺžňom v šlabikárovom období)
J – jazero
K – kôň
L – lampa
Ľ – ľad
M – mačka
N – nos
Ň – ňufák
O – oko
Ô – ôsmy (slovo je abstrakt; lepšie dať až neskôr, alebo použiť „kôň“ na Ô? tiež nie; odporúčam Ô v prípravnom období neriešiť samostatne)
P – pes
Q – (v slovenčine okrajové; vynechať)
R – rak
S – sova
Š – škola
T – traktor
Ť – ťava
U – ucho
Ú – (oddeliť až neskôr)
V – vlak
W – (vynechať)
X – xylofón (okrajové, ale deti to poznajú ako nástroj; ak nechceš, daj X až neskôr)
Y – ypsilon (abstrakt; v prípravnom období by som Y nedával do nápovede ako “slovo”; skôr až neskôr)
Z – zub
Ž – žaba
Dôležitá kritická poznámka (aby si si nezavaril hneď v Svete 0)
V Svete 0 chceš “rozpoznávanie písmen od začiatku”, OK – ale
neznamená to
, že musíš dať dieťaťu do nápovede komplet celý “alphabet zoo” vrátane Ä/Ô/Y/Q/W hneď na prvý deň.
Metodika hovorí, že deti môžu pracovať s početnejším súborom veľkých tlačených písmen cez nápovedné obrázky, ale jadro prípravného obdobia je stále
začiatok hlásky + nápoveda + syntéza slabík
.
[slabikar-s...znamky.pdf | PDF]
Praktický návrh (najrozumnejší):
Abecedná stránka nech obsahuje
všetky písmená
, ale:
„ťažké/okrajové“ dlaždice nech sú v Svete 0
šedé
(klik funguje, ale úlohy ich nepýtajú),
v úlohách Sveta 0 používaj len subset (napr. A, M, S, O, E, L, P, T, K…).
Tak ostaneš verný “abeceda je vždy dostupná”, ale nepýtaš od prváka Q ako “quinoa”.
3) Skript hlasov – Svet 0 (20 krokov + feedback pool)
3.1. Hlasový štýl (aby to bolo použiteľné)
krátke vety (max 6–8 slov)
normálne tempo, zrozumiteľná výslovnosť
bez infantilných “zlatíčko super” hlášok
chyba = neutrálna (“Nie.”, “Skús ešte raz.”), nie vina
Metodická opora: v prípravnom období sa deti učia napodobňovaním, potrebujú jasnú a bezchybnú reč.
[slabikar-s...znamky.pdf | PDF]
3.2. 20 intro komentárov (1 na krok)
Použi ich ako intro_audio pre step_01…step_20.
STEP 01: „Ahoj. Ťukni na tri veci na obrázku.“
STEP 02: „Pozri sa. Vyber vetu, ktorá sedí.“
STEP 03: „Vyber jedno slovo. Počúvaj vetu.“
STEP 04: „Nájdi rovnaké obrázky. Pexeso.“
STEP 05: „Jeden obrázok je iný. Ťukni naň.“
STEP 06: „Pozri na vzor. Doplň, čo ide ďalej.“
STEP 07: „Počúvaj slovo. Aký zvuk je prvý?“
STEP 08: „Počúvaj pozorne. Vyber prvý zvuk.“
STEP 09: „Nepoviem slovo. Povedz si ho v hlave.“
STEP 10: „Hľadáme slová na začiatku. Vyber správne.“
STEP 11: „Klikni na abecedu. Nájdeš písmeno.“
STEP 12: „Pretiahni písmeno k obrázku.“
STEP 13: „Nájdi obrázok, ktorý patrí k písmenu.“
STEP 14: „Označ písmená, ktoré už poznáš.“
STEP 15: „Počúvaj: S… A… Spolu?“
STEP 16: „Počúvaj a vyber správnu slabiku.“
STEP 17: „Počúvaj: M… A… Spolu?“
STEP 18: „Chytaj slabiku, ktorú počuješ.“
STEP 19: „Spoj dve písmená. Čo vzniklo?“
STEP 20: „Skús krátky test. Ukáž, čo už vieš.“
3.3. “Pomocné” hlášky (keď dieťa váha / urobí chybu 2×)
„Klikni na abecedu. Tam je nápoveda.“
„Pozri sa na obrázok pri písmene.“
„Počúvaj ešte raz.“
„Skús to pomaly.“
„Hľadáme začiatok slova.“
„Späť k úlohe. Skús znova.“
3.4. Chybové hlášky (bez cukrovej vaty)
Striedaj ich náhodne, aby to nepôsobilo roboticky.
„Nie.“
„To nesedí.“
„Skús ešte raz.“
„Toto nie je ono.“
„Vyber inú možnosť.“
„Pozri sa na nápovedu.“
„Skús to pomaly.“
„Ešte nie.“
3.5. Pochvaly (stručné, vecné)
„Správne.“
„Dobre.“
„Áno.“
„To je ono.“
„Výborne.“
„Sedí.“
„Pokračuj.“
„Hotovo.“
3.6. Abecedná nápoveda – “X ako …” (voice lines)
Toto sú nahrávky, ktoré sa prehrávajú po kliknutí na dlaždicu písmena v abecednom overlayi.
Dôležité: jedna veta, rovnaký rytmus, rovnaká hlasitosť.
„A ako auto.“
„B ako balón.“
„C ako cukor.“
„Č ako čiapka.“
„D ako dom.“
„Ď ako ďateľ.“
„DZ ako dzban.“
„DŽ ako džús.“
„E ako električka.“
„F ako fúrik.“
„G ako guma.“
„H ako hrad.“
„CH ako chlieb.“
„I ako ihla.“
„J ako jazero.“
„K ako kôň.“
„L ako lampa.“
„Ľ ako ľad.“
„M ako mačka.“
„N ako nos.“
„Ň ako ňufák.“
„O ako oko.“
„P ako pes.“
„R ako rak.“
„S ako sova.“
„Š ako škola.“
„T ako traktor.“
„Ť ako ťava.“
„U ako ucho.“
„V ako vlak.“
„Z ako zub.“
„Ž ako žaba.“
Čo s Ä/Ô/Í/Ý/Ú/X?
V Svete 0
ich nechaj v abecede ako dlaždice (ak chceš “komplet”), ale úlohy ich nech nepýtajú.
Voice lines pre ne môžeš doplniť neskôr, keď budeš mať metodicky vhodný moment.
Inak sa dostaneš do blbej situácie: dieťa klikne na Ô a ty mu povieš niečo, čo nepozná ani polovica dospelých.
4) Presná UX logika tvojej “abecednej ikony” (pre programátora a dizajn)
Toto je “jedna ikonka v celej appke”, ktorú si popísal – len to dávam do presných bodov:
Na každej obrazovke úlohy je tlačidlo
ABECEDA
.
[slabikar-s...znamky.pdf | PDF]
Klik → otvorí sa overlay s mriežkou písmen + obrázkov.
Klik na písmeno:
prehrá sa audio: „A ako auto.“
dlaždica sa krátko zvýrazní (glow 300 ms)
Tlačidlo
Späť k úlohe
:
zavrie overlay
vráti dieťa na úlohu presne tam, kde bolo
V úlohe dieťa pokračuje a “overí si” písmeno.
Metodická opora:
presne toto je princíp – dieťa si má vedieť písmeno vyhľadať samo, opakovane, bez stresu.
[slabikar-s...znamky.pdf | PDF]
5) Posledná vec, ktorú si musíš ujasniť (aby si neprekopal sám seba)
Chceš, aby abecedný overlay zobrazoval:
A)
iba
VEĽKÉ tlačené
písmená (pre Svet 0), alebo
B)
veľké + malé (A/a), alebo
C)
veľké + malé + písané (A/a + písané) — to ti v Svete 0 neodporúčam, bude to miešať typy písma, čo metodika nechce.
[slabikar-s...znamky.pdf | PDF]
Ja by som v Svete 0 dal
iba VEĽKÉ tlačené
(najjednoduchšie), a malé/písané odomykal až neskôr.
Mini otázka (jedna, aby som ti to doladil na 100 %)
Chceš, aby abecedná nápoveda obsahovala
od začiatku aj CH/DZ/DŽ
, alebo ich dáme do overlayu, ale v Svete 0 ich
nebudeme používať v úlohách
(len “existujú”)?
Ak odpovieš, upravím ti finálny zoznam nápovedných slov tak, aby bol úplne konzistentný (žiadne divné písmená, ktoré sa v úlohách nikdy neobjavia).
