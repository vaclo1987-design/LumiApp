# 1_Uvodna analyza.docx

Source: C:\Users\Martin\Desktop\Peto\Apka slabikar\1_Uvodna analyza.docx

## Structured extraction

Úvaha
Metodika je postavená na slabikovo-syntetickom prístupe: deti nemusia robiť ťažkú analýzu slova na hlásky, kľúčová je syntéza hlások do slabiky („čítanie bez písmen“) a neskôr syntéza písmen do slabík. [slabikar-s...e-poznamky | PDF]
Nižšie máš (1) postup ako začať a (2) osnovu celej appky – priamo naviazanú na to, čo je v metodike: prípravné obdobie → šlabikárové obdobie v etapách (otvorené slabiky → zatvorené slabiky → spoluhláskové skupiny) a priebežná diagnostika „Pozrite sa, čo už viem“. [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
1) Ako začať (postup, ktorý dá zmysel aj programátorovi)
Krok 0 – IP stratégia (aby si to vedel spenažiť bez stresu)
Cieľ: metodikou sa inšpirovať, ale všetko vyrobiť nanovo.
Nepreberať: texty, vety, príbehy, konkrétne zadania, obrázky/štýl ilustrácií, „layout“ dvojstrán, ani názvoslovie presne 1:1.
Prebrať môžeš: štruktúru učenia a typy činností (sluchové rozlišovanie, nápovedné obrázky, „čítanie bez písmen“, detektív, šašovinky, pexeso, atď.) – to sú pedagogické postupy. [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
Kritická poznámka: „Šlabikár pre prvákov“ ako názov je generický – OK. Ale pozor na branding, ktorý by mohol pôsobiť ako odvodenina konkrétneho vydavateľstva.
Krok 1 – Urob si “mapu učiva” (1 stránka v Notione / Exceli)
Z metodiky si vytiahni len kostru:
Prípravné obdobie – ciele: prvá hláska v slove, slabikovanie v praktických činnostiach, práca s nápovednými obrázkami, rozpoznanie niektorých veľkých tlačených písmen, „čítanie bez písmen“ (sluchová syntéza do slabiky), prvé slabiky, písanie veľkými tlačenými (nie písanými) písmenami. [slabikar-s...e-poznamky | PDF]
Šlabikárové obdobie – etapy v 1. časti:
otvorené slabiky (A, M, E),
zatvorené slabiky (L, I, J, O, S),
spoluhláskové skupiny (U, V, N, Y, P, T, K). [slabikar-s...e-poznamky | PDF]
Písanie rieš oddelene (najprv čítanie – tlačené; písané písmo až neskôr; písanie nemá ísť pred poznaním tlačenej podoby). [slabikar-s...e-poznamky | PDF]
Diagnostika a diferencovanie: „Pozrite sa, čo už viem“ – priebežne, individuálne, nie každé dieťa musí robiť všetko naraz. [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
Krok 2 – Definuj “učebnú jednotku” (Lesson blueprint)
Programátor potrebuje opakovateľný model. Navrhujem jednotku „Krok“ (3–7 min), z ktorej sa skladajú kapitoly.
Každý Krok má:
Audio inštrukciu (sprievodca) – deti ešte nečítajú.
1 mikroulohu (ťukni/pretiahni/označ/nájdi/slabikuj).
Okamžitú spätnú väzbu (správne/nesprávne + krátka oprava).
Odmenu (mince + dielik pokladu).
Metadáta: čo sa tým trénuje (prvá hláska / syntéza / čítanie slabík / porozumenie).
Krok 3 – MVP (prvý funkčný prototyp) – len 2 svety
Nerob hneď „celý šlabikár“. Sprav MVP, kde si otestuješ UX, motiváciu, hlas, progres:
MVP Svet 1: Prípravné obdobie – “Uši a oči”
sluchové rozlišovanie prvej hlásky + nápovedné obrázky [slabikar-s...e-poznamky | PDF]
„čítanie bez písmen“ (S–A → SA) [slabikar-s...e-poznamky | PDF]
hra typu „robot“/slabikovanie v praxi (bez písmen) [slabikar-s...e-poznamky | PDF]
MVP Svet 2: Prvé písmeno (A) – tlačené + otvorené slabiky
zavedenie malého tlačeného a/á ako “hlavného písmena” + stále píšeš veľkým tlačeným pri zápise (ak už vôbec). [slabikar-s...e-poznamky | PDF]
Keď toto bude fungovať (a deti to budú chcieť robiť), má zmysel škálovať.
Krok 4 – Postavička a hlas (tvoj „brand anchor“)
Nechceš klauna ani myš. Super. Daj niečo originálne, neutrálne, nekonfliktné.
3 návrhy postavičky (vymyslené):
LUMI – malý “svetelný tvorček” (nie svetluška, skôr abstraktný „lumík“). Motív: „svietim ti na písmenká“.
KLIK – bytôstka z tvarov (kruh/štvorec), ktorá “kliká” úlohy. Motív: „klikni, potiahni, čítaj“.
ŽBLNK – kvapka atramentu/energie (ale nie atramentové písanie hneď). Motív: “zbieram slabiky do bublín”.
Hlas: príjemný detský/teen hlas, ale právne čistý (zmluva s hlasom alebo licencovaný TTS s právami na komerčné použitie).
Krok 5 – Gamifikácia, ale nie cirkus
Metodika stojí na krátkych pravidelných vstupoch a diferencovaní, nie na “dopamínovej rulete”.
Tvoja “truhlica” je fajn, len ju ukotvi do učenia: [slabikar-s...e-poznamky | PDF]
Minimálna slučka: úloha → minca → dielik pokladu → animácia po uzavretí kapitoly (napr. písmeno A sa „postaví“ do vitríny).
Pokrok: mapa abecedy + “svety” (prípravné → slabiky → slová → vety → porozumenie).
Diferencovanie: appka ponúkne “ďalší krok” alebo “ľahšiu verziu” (v metodike sa výslovne ráta s tým, že dieťa nerieši celý súbor slov, len to, čo už zvláda). [slabikar-s...e-poznamky | PDF]
2) Osnova aplikácie (celá štruktúra)
A) Základ aplikácie (shell)
Výber profilu dieťaťa (viac detí v rodine)
Rodičovská brána (nastavenia, nákupy, export progresu)
Mapa učenia (svety + percentá + odznaky)
Denný plán (5–10 min) (odporúčanie: „dnes 3 kroky“)
B) SVET 0: Prípravné obdobie („Ešte nečítam, ale už sa pripravujem“)
Metodika ho považuje za kľúčové a menuje presné oblasti, ktoré majú nasledovať. [slabikar-s...e-poznamky | PDF]
B1. Komunikácia a veta v praxi (bez grafického znázornenia)
Rozprávanie podľa obrázka, tvorba viet (bez toho, aby appka riešila interpunkciu či grafické znázornenie vety – to sa odporúča až neskôr).
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
„Povedz vetu“ (dieťa nahrá hlas; appka len odmení, nehrotí správnosť)
„Vyber, čo sa hodí“ (obrázok → 2–3 možnosti)
B2. Zrakové rozlišovanie (tvary, vzory, párovanie)
Páry, rozdiely, pokračovanie vzoru (to je v šlabikári v prípravnom období bežné).
Hry/úlohy: [slabikar-i.-2-33 | PDF], [slabikar-s...e-poznamky | PDF]
mini-pexeso (obrázok–obrázok)
„nájdi rozdiel“
„pokračuj vo vzore“
B3. Sluchové rozlišovanie – prvá hláska v slove (len začiatok slova)
Metodika jasne tlačí: v tejto fáze rieš začiatok slova, nie koniec/stred (to je pre deti zbytočne náročné).
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
„Počujem na začiatku…“ (audio slova → vyber písmeno)
„Tichá hra“ (bez vyslovenia slova – dieťa si ho predstaví) – veľmi dobré na abstrakciu. [slabikar-s...e-poznamky | PDF]
B4. Nápovedné obrázky (tvoj „sidebar“)
Systematická práca s nápovednými obrázkami tvorí podstatu šlabikára a pomáha deťom pri zabúdaní písmen – znižuje stres a podporuje samostatnosť.
Implementácia v appke: [slabikar-s...e-poznamky | PDF]
stále dostupný “panel nápovedy” (ikonky → písmeno)
klik na ikonku prehrá zvuk: „A ako…“ (ale pozor, originálne ikonky aj slová)
B5. „Čítanie bez písmen“ – sluchová syntéza hlások do slabiky
Kľúčový krok – metodika hovorí, že jeho vynechanie často spúšťa problémy s čítaním.
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
sprievodca povie: „S – A… spolu?“ dieťa vyberie bublinu „SA“
postupne: S+samohlásky, potom ďalšie spoluhlásky
B6. Pokusné čítanie prvých otvorených slabík
Prechod: hlásky → napísané slabiky → čítanie slabík.
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
skladanie slabiky z dvoch kartičiek (M + A → MA)
“detektív slabík” (hľadanie na ploche podľa zadania) – typ hry sa v metodike používa. [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF]
B7. Záver prípravného obdobia – diagnostika
„Čo už viem“ checkpoint (v appke: krátky test, bez stresu), koncept je v materiáloch prítomný ako priebežná diagnostika. [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-2-33 | PDF]
C) SVET 1–3: Šlabikárové obdobie (tlačené písmo → slabiky → slová → vety)
Metodika delí 1. časť šlabikára na 3 etapy podľa typu slabík a skupín písmen. [slabikar-s...e-poznamky | PDF]
C1. Etapa 1: Otvorené slabiky (A, M, E)
Každé písmeno = kapitola:
rozpoznanie písmena (tlačené malé + veľké)
slabiky s písmenom (MA, ME…)
slová z otvorených slabík
prvé vety (veľmi krátke)
Typy aktivít:
pexeso (písmeno–obrázok / slabika–obrázok)
skladanie slabík do slov
mikro-vety (vyber správny obrázok k prečítanej vete)
C2. Etapa 2: Zatvorené slabiky (L, I, J, O, S)
Tu metodika rieši aj sluchovú syntézu zatvorenej slabiky, aby sa predišlo „komoleninám“ typu PE-SO pri slove PES.
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
„dokonči slabiku“ (NO + S → NOS)
“detektív” dvojice otvorená vs zatvorená (MA vs MAK) – metodika tento princíp opisuje. [slabikar-s...e-poznamky | PDF]
krátke texty + 1 otázka na porozumenie (obrázková)
C3. Etapa 3: Spoluhláskové skupiny (U, V, N, Y, P, T, K)
viac práce so slovami, ktoré obsahujú spoluhláskové skupiny (metodika odporúča presunúť čas od izolovaných slabík smerom k slovám).
Hry/úlohy: [slabikar-s...e-poznamky | PDF]
triedenie slov podľa „ťažkosti“
„šašovinky“ – slovná hra s vetou (metodika ju uvádza a šlabikár ju používa). [slabikar-s...e-poznamky | PDF], [slabikar-i.-68-80 | PDF], [slabikar-i.-34-67 | PDF]
„tajná matematika“ (krátke prepojenie čítania a čísiel – v materiáloch je prítomné). [slabikar-i.-68-80 | PDF], [slabikar-i.-34-67 | PDF], [slabikar-s...e-poznamky | PDF]
D) Písanie (oddelený modul – spúšťať neskôr)
Presne podľa tvojej požiadavky a podľa metodiky:
Najprv tlačená abeceda, písané písmo až neskôr [slabikar-s...e-poznamky | PDF]
v šlabikári sú aj dvojstrany “písané písmo” po blokoch písmen; metodika vysvetľuje, že prichádzajú pravidelne a pracuje sa s nimi až keď to dieťa zvládne. [slabikar-s...e-poznamky | PDF], [slabikar-i.-68-80 | PDF]
D1. Predpísacie tvary (jemná motorika)
ťahy, oblúčiky, slučky, smerovanie
D2. Obtahovanie písaných písmen
až keď dieťa má už tlačené zvládnuté (unlock mechanika)
D3. Spoje (len základné, postupne)
E) Čítankové obdobie (súvislé texty + porozumenie)
Metodika ráta s čítaním súvislých textov a prácou s nimi, plus s postupným prechodom k plynulému čítaniu; do automatizácie je “najoptimálnejšie čítanie po slabikách”. [slabikar-i.-68-80 | PDF], [slabikar-s...e-poznamky | PDF]
E1. Krátke texty (originálne)
audio sprievodca + “spoločné čítanie” (text sa zvýrazňuje po slabikách alebo slovách)
E2. Porozumenie (3 úrovne)
vyber obrázok
áno/nie
doplň slovo z možností
E3. Reprodukcia
dieťa povie 1 vetu o texte (nahrávka)
F) Záverečný svet: „Abecedné dobrodružstvo“
Finále, ktoré chceš: veľká hra cez celú abecedu:
minihry pre každú „zónu“ (samohlásky, otvorené slabiky, zatvorené slabiky, skupiny)
boss-fight = „porozumenie“ (krátky text + úlohy)
veľká animovaná truhlica + „abecedný diplom“ (lokálne, export pre rodiča)
G) Herné režimy (samostatné miniapky v appke)
Aby to nebolo len “kurz”, ale aj „trénujem, keď chcem“:
Pexeso (obrázok–písmeno, obrázok–slabika, slovo–obrázok)
Detektív (nájdi slabiku/slovo v mriežke) [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
Šašovinky (dopĺňanie slov do vety – vtipné kombinácie) [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
Robot (slabikovanie – rytmus, tlieskanie/ťukanie) [slabikar-s...e-poznamky | PDF], [slabikar-i.-2-33 | PDF]
Obtahovanie (tlačené najprv, písané neskôr) [slabikar-s...e-poznamky | PDF]
H) Pokrok, diagnostika, kurikulárna reforma (prakticky)
Nech to nie je len “percentá”, ale použiteľné pre rodiča/učiteľa.
Dashboard dieťaťa:
mapa písmen: rozpoznám / prečítam slabiky / prečítam slová / prečítam vety
graf “čo už viem” checkpointy (inšpirácia z priebežného hodnotenia). [slabikar-s...e-poznamky | PDF], [slabikar-i.-34-67 | PDF], [slabikar-i.-68-80 | PDF]
Pre rodiča/učiteľa:
týždenný prehľad: čas, úspešnosť, ktoré typy úloh robia problém
odporúčanie: “vráť sa na B5 – čítanie bez písmen”, ak dieťa zlyháva v slabikách (to je presne kľúčový uzol metodiky). [slabikar-s...e-poznamky | PDF]
3) Čo pripraviť pre programátora (aby sa nezbláznil)
Minimálna špecifikácia (MVP)
profily detí + lokálne ukladanie progresu
engine “Krokov” (data-driven lekcie)
audio prehrávač + offline balíky
odmeny (mince, truhlica)
5 typov úloh (ťukni, potiahni, pexeso, detektív, slabikové skladanie)
Obsahový formát (tvoj budúci “editor”)
lekcie v JSON (id, cieľ, assety, pravidlá, správne odpovede, odmena)
asset pipeline (obrázky, zvuk, animácie) – verzovanie
4) Čo odo mňa vieš pýtať ďalej (a čo nie)
Môžem ti pomáhať generovať:
originálne mikrotetxy, vety, príbehy „na úrovni šlabikára“
nové sady slov pre hry (šašovinky, detektív, pexeso)
návrhy obrázkov (scény, ikonky nápovedných obrázkov) a scenár hlasových komentárov
Čo ti nebudem “prepisovať”: konkrétne texty a úlohy z toho šlabikára 1:1 (to by bol derivát).

## XML text fallback

--- word/document.xml ---
Úvaha
Metodika je postavená na slabikovo-syntetickom prístupe: deti nemusia robiť ťažkú analýzu slova na hlásky, kľúčová je
syntéza hlások do slabiky („čítanie bez písmen“) a neskôr syntéza písmen do slabík
.
[
slabikar
-s...e-
poznamky
| PDF]
Nižšie máš (1)
postup ako začať
a (2)
osnovu celej
appky
– priamo naviazanú na to, čo je v metodike: prípravné obdobie → šlabikárové obdobie v etapách (otvorené slabiky → zatvorené slabiky → spoluhláskové skupiny) a priebežná diagnostika „Pozrite sa, čo už viem“.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
1) Ako začať (postup, ktorý dá zmysel aj programátorovi)
Krok 0 – IP stratégia (aby si to vedel
spenažiť
bez stresu)
Cieľ:
metodikou sa inšpirovať, ale všetko
vyrobiť nanovo
.
Nepreberať:
texty, vety, príbehy, konkrétne zadania, obrázky/štýl ilustrácií, „
layout
“ dvojstrán, ani názvoslovie presne 1:1.
Prebrať môžeš:
štruktúru učenia a typy činností (sluchové rozlišovanie, nápovedné obrázky, „čítanie bez písmen“, detektív,
šašovinky
, pexeso, atď.) – to sú pedagogické postupy.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
Kritická poznámka: „Šlabikár pre prvákov“ ako názov je generický – OK. Ale pozor na
branding
, ktorý by mohol pôsobiť ako odvodenina konkrétneho vydavateľstva.
Krok 1 – Urob si “mapu učiva” (1 stránka v
Notione
/ Exceli)
Z metodiky si vytiahni len kostru:
Prípravné obdobie – ciele
: prvá hláska v slove, slabikovanie v praktických činnostiach, práca s nápovednými obrázkami, rozpoznanie niektorých veľkých tlačených písmen, „čítanie bez písmen“ (sluchová syntéza do slabiky), prvé slabiky, písanie
veľkými tlačenými
(nie písanými) písmenami.
[
slabikar
-s...e-
poznamky
| PDF]
Šlabikárové obdobie – etapy v 1. časti
:
otvorené slabiky (A, M, E),
zatvorené slabiky (L, I, J, O, S),
spoluhláskové skupiny (U, V, N, Y, P, T, K).
[
slabikar
-s...e-
poznamky
| PDF]
Písanie rieš oddelene
(najprv čítanie – tlačené; písané písmo až neskôr; písanie nemá ísť pred poznaním tlačenej podoby).
[
slabikar
-s...e-
poznamky
| PDF]
Diagnostika a diferencovanie
: „Pozrite sa, čo už viem“ – priebežne, individuálne, nie každé dieťa musí robiť všetko naraz.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
Krok 2 – Definuj “učebnú jednotku” (
Lesson
blueprint
)
Programátor potrebuje opakovateľný model. Navrhujem jednotku
„Krok“
(3–7 min), z ktorej sa skladajú kapitoly.
Každý Krok má:
Audio inštrukciu
(sprievodca) – deti ešte nečítajú.
1
mikroulohu
(ťukni/pretiahni/označ/nájdi/slabikuj).
Okamžitú spätnú väzbu
(správne/nesprávne + krátka oprava).
Odmenu
(mince + dielik pokladu).
Metadáta
: čo sa tým trénuje (prvá hláska / syntéza / čítanie slabík / porozumenie).
Krok 3 – MVP (prvý funkčný prototyp) – len 2 svety
Nerob hneď „celý šlabikár“. Sprav
MVP
, kde si otestuješ UX, motiváciu, hlas, progres:
MVP Svet 1: Prípravné obdobie – “Uši a oči”
sluchové rozlišovanie prvej hlásky + nápovedné obrázky
[
slabikar
-s...e-
poznamky
| PDF]
„čítanie bez písmen“ (S–A → SA)
[
slabikar
-s...e-
poznamky
| PDF]
hra typu „robot“/slabikovanie v praxi (bez písmen)
[
slabikar
-s...e-
poznamky
| PDF]
MVP Svet 2: Prvé písmeno (A) – tlačené + otvorené slabiky
zavedenie malého tlačeného a/á ako “hlavného písmena” + stále píšeš veľkým tlačeným pri zápise (ak už vôbec).
[
slabikar
-s...e-
poznamky
| PDF]
Keď toto bude fungovať (a deti to budú chcieť robiť), má zmysel škálovať.
Krok 4 – Postavička a hlas (tvoj „
brand
anchor
“)
Nechceš klauna ani myš. Super. Daj niečo
originálne, neutrálne, nekonfliktné
.
3 návrhy postavičky (vymyslené):
LUMI
– malý “svetelný tvorček” (nie svetluška, skôr abstraktný „
lumík
“). Motív: „svietim ti na písmenká“.
KLIK
–
bytôstka
z tvarov (kruh/štvorec), ktorá “kliká” úlohy. Motív: „klikni, potiahni, čítaj“.
ŽBLNK
– kvapka atramentu/energie (ale nie atramentové písanie hneď). Motív: “zbieram slabiky do bublín”.
Hlas:
príjemný detský/
teen
hlas, ale právne čistý (zmluva s hlasom alebo licencovaný TTS s právami na komerčné použitie).
Krok 5 –
Gamifikácia
, ale nie cirkus
Metodika stojí na krátkych pravidelných vstupoch a diferencovaní, nie na “
dopamínovej
rulete”.
Tvoja “truhlica” je fajn, len ju ukotvi do učenia:
[
slabikar
-s...e-
poznamky
| PDF]
Minimálna slučka:
úloha → minca → dielik pokladu → animácia po uzavretí kapitoly (napr. písmeno A sa „postaví“ do vitríny).
Pokrok:
mapa abecedy + “svety” (prípravné → slabiky → slová → vety → porozumenie).
Diferencovanie:
appka
ponúkne “ďalší krok” alebo “ľahšiu verziu” (v metodike sa výslovne ráta s tým, že dieťa nerieši celý súbor slov, len to, čo už zvláda).
[
slabikar
-s...e-
poznamky
| PDF]
2) Osnova aplikácie (celá štruktúra)
A) Základ aplikácie (
shell
)
Výber profilu dieťaťa
(viac detí v rodine)
Rodičovská brána
(nastavenia, nákupy, export progresu)
Mapa učenia
(svety + percentá + odznaky)
Denný plán (5–10 min)
(odporúčanie: „dnes 3 kroky“)
B) SVET 0: Prípravné obdobie („Ešte nečítam, ale už sa pripravujem“)
Metodika ho považuje za kľúčové a menuje presné oblasti, ktoré majú nasledovať.
[
slabikar
-s...e-
poznamky
| PDF]
B1. Komunikácia a veta v praxi (bez grafického znázornenia)
Rozprávanie podľa obrázka, tvorba viet (bez toho, aby
appka
riešila interpunkciu či grafické znázornenie vety – to sa odporúča až neskôr).
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
„Povedz vetu“ (dieťa nahrá hlas;
appka
len odmení,
nehrotí
správnosť)
„Vyber, čo sa hodí“ (obrázok → 2–3 možnosti)
B2. Zrakové rozlišovanie (tvary, vzory, párovanie)
Páry, rozdiely, pokračovanie vzoru (to je v šlabikári v prípravnom období bežné).
Hry/úlohy:
[slabikar-i.-2-33 | PDF]
,
[
slabikar
-s...e-
poznamky
| PDF]
mini-pexeso (obrázok–obrázok)
„nájdi rozdiel“
„pokračuj vo vzore“
B3. Sluchové rozlišovanie – prvá hláska v slove (len začiatok slova)
Metodika jasne tlačí: v tejto fáze rieš
začiatok slova
, nie koniec/stred (to je pre deti zbytočne náročné).
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
„Počujem na začiatku…“ (audio slova → vyber písmeno)
„Tichá hra“ (bez vyslovenia slova – dieťa si ho predstaví) – veľmi dobré na abstrakciu.
[
slabikar
-s...e-
poznamky
| PDF]
B4. Nápovedné obrázky (tvoj „
sidebar
“)
Systematická práca s nápovednými obrázkami tvorí podstatu šlabikára a pomáha deťom pri zabúdaní písmen – znižuje stres a podporuje samostatnosť.
Implementácia v
appke
:
[
slabikar
-s...e-
poznamky
| PDF]
stále dostupný “panel
nápovedy
” (ikonky → písmeno)
klik na ikonku prehrá zvuk: „A ako…“ (ale pozor, originálne ikonky aj slová)
B5. „Čítanie bez písmen“ – sluchová syntéza hlások do slabiky
Kľúčový krok – metodika hovorí, že jeho vynechanie často spúšťa problémy s čítaním.
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
sprievodca povie: „S – A… spolu?“ dieťa vyberie bublinu „SA“
postupne:
S+samohlásky
, potom ďalšie spoluhlásky
B6. Pokusné čítanie prvých otvorených slabík
Prechod: hlásky → napísané slabiky → čítanie slabík.
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
skladanie slabiky z dvoch kartičiek (M + A → MA)
“detektív slabík” (hľadanie na ploche podľa zadania) – typ hry sa v metodike používa.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
B7. Záver prípravného obdobia – diagnostika
„Čo už viem“
checkpoint
(v
appke
: krátky test, bez stresu), koncept je v materiáloch prítomný ako priebežná diagnostika.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-2-33 | PDF]
C) SVET 1–3: Šlabikárové obdobie (tlačené písmo → slabiky → slová → vety)
Metodika delí 1. časť šlabikára na 3 etapy podľa typu slabík a skupín písmen.
[
slabikar
-s...e-
poznamky
| PDF]
C1. Etapa 1: Otvorené slabiky (A, M, E)
Každé písmeno = kapitola
:
rozpoznanie písmena (tlačené malé + veľké)
slabiky s písmenom (MA, ME…)
slová z otvorených slabík
prvé vety (veľmi krátke)
Typy aktivít:
pexeso (písmeno–obrázok / slabika–obrázok)
skladanie slabík do slov
mikro
-vety (vyber správny obrázok k prečítanej vete)
C2. Etapa 2: Zatvorené slabiky (L, I, J, O, S)
Tu metodika rieši aj sluchovú syntézu zatvorenej slabiky, aby sa predišlo „
komoleninám
“ typu PE-SO pri slove PES.
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
„dokonči slabiku“ (NO + S → NOS)
“detektív” dvojice otvorená
vs
zatvorená (MA
vs
MAK) – metodika tento princíp opisuje.
[
slabikar
-s...e-
poznamky
| PDF]
krátke texty + 1 otázka na porozumenie (obrázková)
C3. Etapa 3: Spoluhláskové skupiny (U, V, N, Y, P, T, K)
viac práce so slovami, ktoré obsahujú spoluhláskové skupiny (metodika odporúča presunúť čas od izolovaných slabík smerom k slovám).
Hry/úlohy:
[
slabikar
-s...e-
poznamky
| PDF]
triedenie slov podľa „ťažkosti“
„
šašovinky
“ – slovná hra s vetou (metodika ju uvádza a šlabikár ju používa).
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-68-80 | PDF]
,
[slabikar-i.-34-67 | PDF]
„tajná matematika“ (krátke prepojenie čítania a čísiel – v materiáloch je prítomné).
[slabikar-i.-68-80 | PDF]
,
[slabikar-i.-34-67 | PDF]
,
[
slabikar
-s...e-
poznamky
| PDF]
D) Písanie (oddelený modul – spúšťať neskôr)
Presne podľa tvojej požiadavky a podľa metodiky:
Najprv tlačená abeceda
, písané písmo až neskôr
[
slabikar
-s...e-
poznamky
| PDF]
v šlabikári sú aj dvojstrany “písané písmo” po blokoch písmen; metodika vysvetľuje, že prichádzajú pravidelne a pracuje sa s nimi až keď to dieťa zvládne.
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-68-80 | PDF]
D1.
Predpísacie
tvary (jemná motorika)
ťahy, oblúčiky, slučky, smerovanie
D2.
Obtahovanie
písaných písmen
až keď dieťa má už tlačené zvládnuté (
unlock
mechanika)
D3. Spoje (len základné, postupne)
E) Čítankové obdobie (súvislé texty + porozumenie)
Metodika ráta s čítaním súvislých textov a prácou s nimi, plus s postupným prechodom k plynulému čítaniu; do automatizácie je “najoptimálnejšie čítanie po slabikách”.
[slabikar-i.-68-80 | PDF]
,
[
slabikar
-s...e-
poznamky
| PDF]
E1. Krátke texty (originálne)
audio sprievodca + “spoločné čítanie” (text sa zvýrazňuje po slabikách alebo slovách)
E2. Porozumenie (3 úrovne)
vyber obrázok
áno/nie
doplň slovo z možností
E3. Reprodukcia
dieťa povie 1 vetu o texte (nahrávka)
F) Záverečný svet: „Abecedné dobrodružstvo“
Finále, ktoré chceš: veľká hra cez celú abecedu:
minihry
pre každú „zónu“ (samohlásky, otvorené slabiky, zatvorené slabiky, skupiny)
boss-
fight
= „porozumenie“ (krátky text + úlohy)
veľká animovaná truhlica + „abecedný diplom“ (lokálne, export pre rodiča)
G) Herné režimy (samostatné
miniapky
v
appke
)
Aby to nebolo len “kurz”, ale aj „trénujem, keď chcem“:
Pexeso
(obrázok–písmeno, obrázok–slabika, slovo–obrázok)
Detektív
(nájdi slabiku/slovo v mriežke)
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
Šašovinky
(dopĺňanie slov do vety – vtipné kombinácie)
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
Robot
(slabikovanie – rytmus, tlieskanie/ťukanie)
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-2-33 | PDF]
Obtahovanie
(tlačené najprv, písané neskôr)
[
slabikar
-s...e-
poznamky
| PDF]
H) Pokrok, diagnostika,
kurikulárna
reforma (prakticky)
Nech to nie je len “percentá”, ale použiteľné pre rodiča/učiteľa.
Dashboard
dieťaťa:
mapa písmen: rozpoznám / prečítam slabiky / prečítam slová / prečítam vety
graf “čo už viem”
checkpointy
(inšpirácia z priebežného hodnotenia).
[
slabikar
-s...e-
poznamky
| PDF]
,
[slabikar-i.-34-67 | PDF]
,
[slabikar-i.-68-80 | PDF]
Pre rodiča/učiteľa:
týždenný prehľad: čas, úspešnosť, ktoré typy úloh robia problém
odporúčanie: “vráť sa na B5 – čítanie bez písmen”, ak dieťa zlyháva v slabikách (to je presne kľúčový uzol metodiky).
[
slabikar
-s...e-
poznamky
| PDF]
3) Čo pripraviť pre programátora (aby sa nezbláznil)
Minimálna špecifikácia (MVP)
profily detí + lokálne ukladanie progresu
engine
“Krokov” (
data-driven
lekcie)
audio prehrávač +
offline
balíky
odmeny (mince, truhlica)
5 typov úloh (ťukni, potiahni, pexeso, detektív, slabikové skladanie)
Obsahový formát (tvoj budúci “editor”)
lekcie v JSON (id, cieľ,
assety
, pravidlá, správne odpovede, odmena)
asset
pipeline
(obrázky, zvuk, animácie) –
verzovanie
4) Čo odo mňa vieš pýtať ďalej (a čo nie)
Môžem ti pomáhať generovať:
originálne
mikrotetxy
, vety, príbehy „na úrovni šlabikára“
nové sady slov pre hry (
šašovinky
, detektív, pexeso)
návrhy obrázkov (scény, ikonky nápovedných obrázkov) a scenár hlasových komentárov
Čo ti nebudem “prepisovať”: konkrétne texty a úlohy z toho šlabikára 1:1 (to by bol derivát).
