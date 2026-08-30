# 3_Technické zadanie.docx

Source: C:\Users\Martin\Desktop\Peto\Apka slabikar\3_Technické zadanie.docx

## Structured extraction

Nižšie máš technické zadanie, ktoré vieš poslať programátorovi ako „MVP špecifikáciu“ + rámec pre ďalšie rozšírenie. Je to postavené tak, aby:
rešpektovalo metodickú logiku (krátke pravidelné vstupy, nápovedné obrázky, „čítanie bez písmen“, diferencovanie, oddelenie čítania a písania) [slabikar-s...znamky.pdf | PDF]
sedelo na tvoje biznis obmedzenia (SK-only, freemium, domov + učiteľ, 3 zariadenia na Google konto)
bolo data-driven (lekcie v JSON), aby si vedel postupne dopĺňať obsah bez prerábania appky.
Technické zadanie – „Šlabikár pre prvákov“ (MVP)
0) Kontext, cieľ a zásady (pre programátora)
Cieľ produktu
Aplikácia pre Android, ktorá vedie dieťa hravou formou cez prípravné obdobie → neskôr šlabikárové a čítankové obdobie. V MVP sa realizuje Svet 0 – Prípravné obdobie so základnými mechanikami, progresom, audio sprievodom a gamifikáciou. [slabikar-s...znamky.pdf | PDF]
Metodické zásady, ktoré sa musia dodržať v UX/engine (nie iba v obsahu)
Krátke, pravidelné vstupy (typicky 3–7 min; v metodike sa zdôrazňujú krátke pravidelné úseky). [slabikar-s...znamky.pdf | PDF]
Prípravné obdobie je kľúčové:
sluchové rozlišovanie prvej hlásky na začiatku slova
práca s nápovednými obrázkami
sluchová syntéza hlások do slabiky („čítanie bez písmen“) [slabikar-s...znamky.pdf | PDF]
Oddeliť čítanie a písanie – písané písmo v MVP neriešiť; písanie písaným až neskôr, nikdy pred poznaním tlačenej podoby. [slabikar-s...znamky.pdf | PDF]
Diferencovanie: dieťa nemusí robiť všetko; engine má umožniť návrat a adaptívne odporúčania. [slabikar-s...znamky.pdf | PDF]
Priebežné „checkpointy“ typu „Pozrite sa, čo už viem“ (diagnostika bez stresu). [slabikar-s...znamky.pdf | PDF], [slabikar-i.-34-67 | PDF]
Biznis obmedzenia
Jazyk: iba slovenčina.
Monetizácia: freemium – minimum zdarma, zvyšok platený.
Použitie: domov + učiteľ, učiteľ môže stiahnuť žiakovi do školských tabletov individuálne.
Licencia: max 3 zariadenia na jedno Google konto.
1) Platforma, technológie, offline
Platforma
Android 8+ (min SDK podľa dohody; odporúčané 26+)
Offline-first (deti často bez internetu): lekcie, audio a obrázky musia fungovať offline po stiahnutí balíka.
Odporúčaná implementácia
Native Kotlin + Jetpack Compose alebo Flutter (ak tím preferuje).
Dôležité je, aby engine lekcií bol data-driven a assety boli v balíkoch.
Úložiská
Lokálna DB: Room (Kotlin) / Hive (Flutter)
Sťahovanie asset balíkov: WorkManager / background downloader
Progres per profil dieťaťa: lokálne (nepotrebujeme cloud v MVP)
2) MVP rozsah (čo presne má byť hotové)
MVP = Svet 0 (20 krokov) + mini herné režimy + progres + freemium paywall
20 krokov Sveta 0 (prípravné obdobie) s audio sprievodom, odmenami, uloženým progresom. [slabikar-s...znamky.pdf | PDF]
2 minihry:
mini-pexeso (obrázok–obrázok) [slabikar-i.-34-67 | PDF]
„Počujem na začiatku“ (výber hlásky/písmena z možností) [slabikar-s...znamky.pdf | PDF], [slabikar-i.-34-67 | PDF]
Postavička sprievodca (len ako audio + jednoduchá animácia/ikonka v MVP).
Freemium: kroky 1–8 zdarma; kroky 9–20 uzamknuté paywallom.
Rodičovská brána (parent gate) pre nákup, reset, správu zariadení.
Licencia 3 zariadenia – vynútiť logikou v appke + viazať na Google konto.
Mimo MVP (explicitne nerobiť teraz)
Kompletné šlabikárové obdobie, čítankové obdobie
Písané písmo (obtahovanie písaných písmen) – odložiť; metodicky má prísť neskôr. [slabikar-s...znamky.pdf | PDF]
Učiteľský dashboard / exporty / cloud sync
Adaptívny AI tutor (max. odporúčania na základe jednoduchých pravidiel)
3) Funkčné požiadavky (MVP)
3.1 Profily detí
Viac profilov na zariadení (napr. 1–5)
Každý profil má:
meno/nick
avatar
progres (kroky dokončené, skóre, mince, poklady)
3.2 Mapa Sveta 0
Zobrazenie 20 krokov v poradí (lineárne)
Povoliť návrat na predošlé kroky
Uzamknuté kroky 9–20 (freemium)
3.3 Herná slučka
Po dokončení kroku:
pridať mince
vizuálna odmena (dielik pokladu po 5 krokoch)
uložiť progres
Po 20. kroku:
truhlica + jednoduchá animácia + odznak „Svet 0 hotový“
3.4 Audio vedenie (kritické)
Každý krok musí mať:
úvodný hlasový pokyn (sprievodca)
feedback hlášky (správne/nesprávne)
Audio má mať:
preload (žiadne sekanie)
globálnu reguláciu hlasitosti
„opakovanie pokynu“ tlačidlom
3.5 Typy úloh (task types) – MVP set
Vyžadujeme minimálne tieto typy, aby sa pokryl Svet 0:
TapHotspot – ťukni na predmet v obrázku (3 ciele)
SelectOne – výber 1 z 2–4 možností (obrázky/písmená)
MatchPairs – mini pexeso (4–6 párov) [slabikar-i.-34-67 | PDF]
OddOneOut – v rade 4 položiek jedna nepatrí
PatternComplete – doplň ďalší prvok do vzoru [slabikar-i.-34-67 | PDF]
PhonemeStart – počuješ na začiatku (audio slova → výber hlásky/písmena); metodicky iba začiatok slova v tejto fáze [slabikar-s...znamky.pdf | PDF]
SilentPhonemeStart – bez vyslovenia slova (len obrázok → výber prvého písmena); metodika to uvádza ako dôležitý krok abstrakcie („tichá hra“) [slabikar-s...znamky.pdf | PDF]
BlendTwoSounds – „čítanie bez písmen“: audio „S…A…“ → dieťa vyberie „SA“ [slabikar-s...znamky.pdf | PDF]
BuildSyllable – pospájaj dve kartičky písmen → zobraz slabiku a prehraj audio (MA) [slabikar-s...znamky.pdf | PDF]
Poznámka: „Nápovedné obrázky“ implementovať ako UI panel (sidebar/overlay) dostupný v relevantných krokoch; metodika zdôrazňuje systematické používanie nápovedných obrázkov ako oporu. [slabikar-s...znamky.pdf | PDF]
3.6 Checkpoint (Krok 20)
Mix miniúloh, vyhodnotenie bez stresu
Odporúčanie: „skús si zopakovať kroky 15–18“ atď. (jednoduché pravidlá)
Princíp diagnostiky „Pozrite sa, čo už viem“ – metodicky podložené. [slabikar-s...znamky.pdf | PDF], [slabikar-i.-34-67 | PDF]
4) Freemium, platby, 3 zariadenia
4.1 Paywall (freemium)
Zdarma: kroky 1–8 + mini-pexeso + 1 úloha „Počujem na začiatku“
Platené: odomknutie Sveta 0 krokov 9–20 (a v budúcnosti ďalšie svety)
Paywall UI:
rodičovská brána (napr. „podrž 3 sekundy“ + jednoduchá rodičovská otázka)
jasné vysvetlenie, čo odomkne
4.2 3 zariadenia / Google konto
Požiadavka: Na jedno Google konto max 3 zariadenia.
Navrhované správanie (definuj to takto programátorovi):
Pri prihlásení Google účtom appka vytvorí account_id a device_id.
Licenčný server (alebo jednoduchý backend) drží tabuľku account_id -> [device_id...] max 3.
Keď 4. zariadenie:
appka zobrazí rodičovskú bránu
ponúkne odhlásiť jedno zo 3 existujúcich zariadení (názov + posledná aktivita)
až potom povolí prístup.
MVP varianty:
Variant A (čistejší): jednoduchý backend + REST (odporúčané, ak chceš tvrdý limit).
Variant B (lacnejší, slabší): spoliehať sa na Google Play “family sharing”/obmedzenia – ale to ti nezaručí 3 zariadenia. (Nehodí sa, ak to chceš striktne.)
Toto je dôležité: bez backendu bude limit 3 zariadenia len „soft“ a obídateľný. Ak chceš reálne vynútiteľné pravidlo, backend je prakticky nutný.
5) Dátový formát lekcií (JSON) – data-driven engine
5.1 Cieľ
Aby si vedel tvoriť obsah postupne bez zásahu do kódu: programátor implementuje engine + typy úloh, ty dodávaš JSON + assety.
5.2 Návrh schémy (koncept)
Ukladanie v balíku world0_pack_v1.zip, vnútri:
manifest.json (verzia balíka, hash)
lessons/world0/step_01.json ... step_20.json
audio/...
images/...
lottie/... (voliteľné animácie)
5.3 Ukážka JSON (schematicky)
{
"id": "world0_step_15",
"world": "world0",
"order": 15,
"title_internal": "Blend two sounds 1",
"duration_sec_target": 240,
"skills": ["auditory_blending", "phoneme_synthesis"],
"free": false,
"narration": {
"intro_audio": "audio/world0/step15_intro.mp3",
"repeatable": true
},
"task": {
"type": "BlendTwoSounds",
"prompt_audio_sequence": [
"audio/phonemes/S.mp3",
"audio/phonemes/A.mp3"
],
"choices": [
{ "id": "SA", "label": "SA", "audio": "audio/syllables/SA.mp3" },
{ "id": "SO", "label": "SO", "audio": "audio/syllables/SO.mp3" }
],
"correct_choice_id": "SA",
"attempts": 3
},
"feedback": {
"correct_audio": "audio/feedback/good1.mp3",
"wrong_audio": "audio/feedback/try_again1.mp3"
},
"rewards": {
"coins": 2,
"treasure_shard": false
}
}
5.4 Pravidlá enginu (nezabudnúť implementovať)
3 pokusy; po 3. neúspechu „jemná pomoc“ (highlight správnej možnosti + zopakovanie audia)
Uloženie: dokončené / nedokončené; najlepší výsledok; počet pokusov
Opakovanie pokynu: tlačidlo „počúvaj znova“
Pre relevantné kroky: zobraziť „nápovedný panel“ (letter hint panel) – metodicky dôležité. [slabikar-s...znamky.pdf | PDF]
6) Asset list (MVP) – čo musíš dodať ty a čo má riešiť programátor
6.1 Assety, ktoré musí mať MVP (minimálne)
Grafika
1x ikona appky + splash
1x postavička (static PNG/SVG + 2 jednoduché animácie: „hovorím“, „teším sa“ – môže byť Lottie)
Svet 0:
6–10 základných scén/pozadí (obrázkové úlohy)
~40–60 ikoniek objektov (pre hotspoty, pexeso, výbery)
1x truhlica animácia (otvorenie)
4x „dielik pokladu“ (po 5 krokoch)
Audio
Voiceover:
20 úvodných pokynov (step intros)
20× „správne“ + 20× „skús znova“ (môže byť menší set opakovateľných hlášok)
Fonémy/samohlásky/spoluhlásky (izolované) pre BlendTwoSounds: minimálne 6–10 zvukov
Syllables (SA, SE, SI, SO, SU, MA, ME, MI, MO, MU…) podľa krokov 15–20 [slabikar-s...znamky.pdf | PDF]
Dáta
20 JSON súborov krokov
6.2 Assety, ktoré môže dočasne suplovať programátor (placeholder)
Placeholder grafika a audio (TTS) počas vývoja; pred release nahradiť licencovanými originálmi.
6.3 Poznámka k autorským právam (dôležité)
Assety musia byť originálne (texty, ilustrácie, nahrávky), aby si mal čisté IP a mohol to monetizovať. (Programátor nech nerobí „prekopírovaný layout“ strán zo šlabikára.)
7) UX flow (MVP obrazovky)
Onboarding
výber profilu / vytvor profil
krátke intro sprievodcu (audio)
Mapa Sveta 0
20 krokov
paywall lock na krokoch 9–20
Krok – obrazovka úlohy
veľká dotyková plocha
tlačidlo “počúvaj znova”
minimal text
Odmena
mince + dielik pokladu (po 5 krokoch)
“ďalej”
Rodičovská brána
nákup/restore
správa zariadení (3-device limit)
8) Ukladanie progresu a analytika (MVP)
Progres (lokálne)
profile_id
world0.completed_steps[]
coins_total
attempt_stats per step (pokusy, čas)
Analytika (voliteľné v MVP, ale odporúčané)
dokončenie kroku
kde deti padajú (kroky 15–18 sú kritické – „čítanie bez písmen“) [slabikar-s...znamky.pdf | PDF]
paywall impresia / konverzia
9) Akceptačné kritériá (čo je „hotové“)
MVP sa považuje za hotové, keď:
dá sa vytvoriť profil a dokončiť kroky 1–8 zdarma
kroky 9–20 sú uzamknuté a odomykajú sa nákupom
každý krok funguje offline po stiahnutí balíka
audio sa nezasekáva a dá sa opakovať
progres sa ukladá a nezmizne po reštarte
3-zariadenový limit funguje podľa zadania (ak je implementovaný backend variant)
10) Príloha: zoznam 20 krokov Sveta 0 (len názvy pre orientáciu v JSON)
Toto je len “internal naming” pre súbory, aby programátor vedel, čo kam patrí:
step_01 TapHotspot: nájdi 3 veci
step_02 SelectOne: kto čo robí (2 možnosti)
step_03 SelectOne: smiešna veta (výber slova)
step_04 MatchPairs: pexeso 4 páry
step_05 OddOneOut
step_06 PatternComplete
step_07 PhonemeStart (samohlásky)
step_08 PhonemeStart (spoluhláskové skupiny)
step_09 SilentPhonemeStart (tichá hra)
step_10 PhonemeStart (lov na začiatok)
step_11 HintPanel: nájdi písmeno v nápovede
step_12 DragMatch: prilož písmeno k obrázku
step_13 ReverseHint: písmeno → nápovedný obrázok
step_14 MarkKnownLetters (bez hodnotenia)
step_15 BlendTwoSounds (S + A)
step_16 BlendTwoSounds (S + samohlásky)
step_17 BlendTwoSounds (M + samohlásky)
step_18 BlendTwoSounds (bubliny)
step_19 BuildSyllable (M + A → MA)
step_20 Checkpoint mix + odporúčanie
Metodicky tým pokrývaš: zrakové rozlišovanie + sluchové rozlišovanie + nápovedné obrázky + „čítanie bez písmen“ + prvé slabiky. [slabikar-s...znamky.pdf | PDF], [slabikar-i.-34-67 | PDF]

## XML text fallback

--- word/document.xml ---
Nižšie máš
technické zadanie
, ktoré vieš poslať programátorovi ako „MVP špecifikáciu“ + rámec pre ďalšie rozšírenie. Je to postavené tak, aby:
rešpektovalo metodickú logiku (krátke pravidelné vstupy, nápovedné obrázky, „čítanie bez písmen“, diferencovanie, oddelenie čítania a písania)
[
slabikar
-s...znamky.pdf | PDF]
sedelo na tvoje biznis obmedzenia (SK-
only
,
freemium
, domov + učiteľ, 3 zariadenia na Google konto)
bolo
data
driven
(lekcie v JSON), aby si vedel postupne dopĺňať obsah bez prerábania
appky
.
Technické zadanie – „Šlabikár pre prvákov“ (MVP)
0) Kontext, cieľ a zásady (pre programátora)
Cieľ produktu
Aplikácia pre Android, ktorá vedie dieťa hravou formou cez
prípravné obdobie
→ neskôr šlabikárové a čítankové obdobie. V MVP sa realizuje
Svet 0 – Prípravné obdobie
so základnými mechanikami, progresom, audio sprievodom a
gamifikáciou
.
[
slabikar
-s...znamky.pdf | PDF]
Metodické zásady, ktoré sa musia dodržať v UX/
engine
(nie iba v obsahu)
Krátke, pravidelné vstupy
(typicky 3–7 min; v metodike sa zdôrazňujú krátke pravidelné úseky).
[
slabikar
-s...znamky.pdf | PDF]
Prípravné obdobie je kľúčové:
sluchové rozlišovanie prvej hlásky na začiatku slova
práca s nápovednými obrázkami
sluchová syntéza hlások do slabiky („čítanie bez písmen“)
[
slabikar
-s...znamky.pdf | PDF]
Oddeliť čítanie a písanie
– písané písmo v MVP neriešiť; písanie písaným až neskôr, nikdy pred poznaním tlačenej podoby.
[
slabikar
-s...znamky.pdf | PDF]
Diferencovanie
: dieťa nemusí robiť všetko;
engine
má umožniť návrat a adaptívne odporúčania.
[
slabikar
-s...znamky.pdf | PDF]
Priebežné „
checkpointy
“ typu
„Pozrite sa, čo už viem“
(diagnostika bez stresu).
[
slabikar
-s...znamky.pdf | PDF]
,
[slabikar-i.-34-67 | PDF]
Biznis obmedzenia
Jazyk:
iba slovenčina
.
Monetizácia
:
freemium
– minimum zdarma, zvyšok platený.
Použitie:
domov + učiteľ
, učiteľ môže stiahnuť žiakovi do školských tabletov individuálne.
Licencia:
max 3 zariadenia na jedno Google konto
.
1) Platforma, technológie,
offline
Platforma
Android 8+ (min SDK podľa dohody; odporúčané 26+)
Offline-first
(deti často bez internetu): lekcie, audio a obrázky musia fungovať
offline
po stiahnutí balíka.
Odporúčaná implementácia
Native
Kotlin
+
Jetpack
Compose
alebo
Flutter
(ak tím preferuje).
Dôležité je, aby
engine
lekcií bol
data-driven
a
assety
boli v balíkoch.
Úložiská
Lokálna DB:
Room
(
Kotlin
) /
Hive
(
Flutter
)
Sťahovanie
asset
balíkov:
WorkManager
/
background
downloader
Progres per profil dieťaťa: lokálne (nepotrebujeme
cloud
v MVP)
2) MVP rozsah (čo presne má byť hotové)
MVP = Svet 0 (20 krokov) + mini herné režimy + progres +
freemium
paywall
20 krokov Sveta 0
(prípravné obdobie) s audio sprievodom, odmenami, uloženým progresom.
[
slabikar
-s...znamky.pdf | PDF]
2
minihry
:
mini-pexeso (obrázok–obrázok)
[slabikar-i.-34-67 | PDF]
„Počujem na začiatku“ (výber hlásky/písmena z možností)
[
slabikar
-s...znamky.pdf | PDF]
,
[slabikar-i.-34-67 | PDF]
Postavička sprievodca
(len ako audio + jednoduchá animácia/ikonka v MVP).
Freemium
: kroky 1–8 zdarma; kroky 9–20 uzamknuté
paywallom
.
Rodičovská brána
(
parent
gate) pre nákup, reset, správu zariadení.
Licencia 3 zariadenia
– vynútiť logikou v
appke
+ viazať na Google konto.
Mimo MVP (explicitne nerobiť teraz)
Kompletné šlabikárové obdobie, čítankové obdobie
Písané písmo (
obtahovanie
písaných písmen) – odložiť; metodicky má prísť neskôr.
[
slabikar
-s...znamky.pdf | PDF]
Učiteľský
dashboard
/ exporty /
cloud
sync
Adaptívny AI
tutor
(max. odporúčania na základe jednoduchých pravidiel)
3) Funkčné požiadavky (MVP)
3.1 Profily detí
Viac profilov na zariadení (napr. 1–5)
Každý profil má:
meno/nick
avatar
progres (kroky dokončené, skóre, mince, poklady)
3.2 Mapa Sveta 0
Zobrazenie 20 krokov v poradí (lineárne)
Povoliť návrat na predošlé kroky
Uzamknuté kroky 9–20 (
freemium
)
3.3 Herná slučka
Po dokončení kroku:
pridať mince
vizuálna odmena (dielik pokladu po 5 krokoch)
uložiť progres
Po 20. kroku:
truhlica + jednoduchá animácia + odznak „Svet 0 hotový“
3.4 Audio vedenie (kritické)
Každý krok musí mať:
úvodný hlasový pokyn (sprievodca)
feedback hlášky (správne/nesprávne)
Audio má mať:
preload
(žiadne sekanie)
globálnu reguláciu hlasitosti
„opakovanie pokynu“ tlačidlom
3.5 Typy úloh (
task
types
) – MVP set
Vyžadujeme minimálne tieto typy, aby sa pokryl Svet 0:
TapHotspot
– ťukni na predmet v obrázku (3 ciele)
SelectOne
– výber 1 z 2–4 možností (obrázky/písmená)
MatchPairs
– mini pexeso (4–6 párov)
[slabikar-i.-34-67 | PDF]
OddOneOut
– v rade 4 položiek jedna nepatrí
PatternComplete
– doplň ďalší prvok do vzoru
[slabikar-i.-34-67 | PDF]
PhonemeStart
– počuješ na začiatku (audio slova → výber hlásky/písmena); metodicky iba začiatok slova v tejto fáze
[
slabikar
-s...znamky.pdf | PDF]
SilentPhonemeStart
– bez vyslovenia slova (len obrázok → výber prvého písmena); metodika to uvádza ako dôležitý krok abstrakcie („tichá hra“)
[
slabikar
-s...znamky.pdf | PDF]
BlendTwoSounds
– „čítanie bez písmen“: audio „S…A…“ → dieťa vyberie „SA“
[
slabikar
-s...znamky.pdf | PDF]
BuildSyllable
– pospájaj dve kartičky písmen → zobraz slabiku a prehraj audio (MA)
[
slabikar
-s...znamky.pdf | PDF]
Poznámka: „Nápovedné obrázky“ implementovať ako
UI panel
(
sidebar
/
overlay
) dostupný v relevantných krokoch; metodika zdôrazňuje systematické používanie nápovedných obrázkov ako oporu.
[
slabikar
-s...znamky.pdf | PDF]
3.6
Checkpoint
(Krok 20)
Mix
miniúloh
, vyhodnotenie bez stresu
Odporúčanie: „skús si zopakovať kroky 15–18“ atď. (jednoduché pravidlá)
Princíp diagnostiky „Pozrite sa, čo už viem“ – metodicky podložené.
[
slabikar
-s...znamky.pdf | PDF]
,
[slabikar-i.-34-67 | PDF]
4)
Freemium
, platby, 3 zariadenia
4.1
Paywall
(
freemium
)
Zdarma: kroky 1–8 + mini-pexeso + 1 úloha „Počujem na začiatku“
Platené: odomknutie Sveta 0 krokov 9–20 (a v budúcnosti ďalšie svety)
Paywall
UI:
rodičovská brána (napr. „podrž 3 sekundy“ + jednoduchá rodičovská otázka)
jasné vysvetlenie, čo odomkne
4.2 3 zariadenia / Google konto
Požiadavka
: Na jedno Google konto max 3 zariadenia.
Navrhované správanie (definuj to takto programátorovi):
Pri prihlásení Google účtom
appka
vytvorí
account_id
a
device_id
.
Licenčný server (alebo jednoduchý
backend
) drží tabuľku
account_id
-> [
device_id
...] max 3.
Keď 4. zariadenie:
appka
zobrazí rodičovskú bránu
ponúkne odhlásiť jedno zo 3 existujúcich zariadení (názov + posledná aktivita)
až potom povolí prístup.
MVP varianty:
Variant A (čistejší):
jednoduchý
backend
+ REST (odporúčané, ak chceš tvrdý limit).
Variant B (lacnejší, slabší):
spoliehať sa na Google
Play
“
family
sharing
”/obmedzenia – ale to ti nezaručí 3 zariadenia. (Nehodí sa, ak to chceš striktne.)
Toto je dôležité: bez
backendu
bude limit 3 zariadenia len „soft“ a
obídateľný
. Ak chceš reálne vynútiteľné pravidlo,
backend
je prakticky nutný.
5) Dátový formát lekcií (JSON) –
data-driven
engine
5.1 Cieľ
Aby si vedel tvoriť obsah postupne bez zásahu do kódu: programátor implementuje
engine
+ typy úloh, ty dodávaš JSON +
assety
.
5.2 Návrh schémy (koncept)
Ukladanie v balíku world0_pack_v1.zip, vnútri:
manifest.json
(verzia balíka,
hash
)
lessons
/world0/step_01.json ... step_20.json
audio/...
images
/...
lottie
/... (voliteľné animácie)
5.3 Ukážka JSON (schematicky)
{
"id": "world0_step_15",
"
world
": "world0",
"
order
": 15,
"
title_internal
": "
Blend
two
sounds
1",
"
duration_sec_target
": 240,
"
skills
": ["
auditory_blending
", "
phoneme_synthesis
"],
"
free
":
false
,
"
narration
": {
"
intro_audio
": "audio/world0/step15_intro.mp3",
"
repeatable
":
true
},
"
task
": {
"type": "
BlendTwoSounds
",
"
prompt_audio_sequence
": [
"audio/
phonemes
/S.mp3",
"audio/
phonemes
/A.mp3"
],
"
choices
": [
{ "id": "SA", "
label
": "SA", "audio": "audio/
syllables
/SA.mp3" },
{ "id": "SO", "
label
": "SO", "audio": "audio/
syllables
/SO.mp3" }
],
"
correct_choice_id
": "SA",
"
attempts
": 3
},
"feedback": {
"
correct_audio
": "audio/feedback/good1.mp3",
"
wrong_audio
": "audio/feedback/try_again1.mp3"
},
"
rewards
": {
"
coins
": 2,
"
treasure_shard
":
false
}
}
5.4 Pravidlá
enginu
(nezabudnúť implementovať)
3 pokusy; po 3. neúspechu „jemná pomoc“ (
highlight
správnej možnosti + zopakovanie audia)
Uloženie: dokončené / nedokončené; najlepší výsledok; počet pokusov
Opakovanie pokynu: tlačidlo „počúvaj znova“
Pre relevantné kroky: zobraziť „nápovedný panel“ (
letter
hint
panel) – metodicky dôležité.
[
slabikar
-s...znamky.pdf | PDF]
6)
Asset
list (MVP) – čo musíš dodať ty a čo má riešiť programátor
6.1
Assety
, ktoré musí mať MVP (minimálne)
Grafika
1x ikona
appky
+
splash
1x postavička (
static
PNG/SVG + 2 jednoduché animácie: „hovorím“, „teším sa“ – môže byť
Lottie
)
Svet 0:
6–10 základných scén/pozadí (obrázkové úlohy)
~40–60 ikoniek objektov (pre
hotspoty
, pexeso, výbery)
1x truhlica animácia (otvorenie)
4x „dielik pokladu“ (po 5 krokoch)
Audio
Voiceover
:
20 úvodných pokynov (step
intros
)
20× „správne“ + 20× „skús znova“ (môže byť menší set opakovateľných hlášok)
Fonémy/samohlásky/spoluhlásky (izolované) pre
BlendTwoSounds
: minimálne 6–10 zvukov
Syllables
(SA, SE, SI, SO, SU, MA, ME, MI, MO, MU…) podľa krokov 15–20
[
slabikar
-s...znamky.pdf | PDF]
Dáta
20 JSON súborov krokov
6.2
Assety
, ktoré môže dočasne suplovať programátor (
placeholder
)
Placeholder
grafika a audio (TTS) počas vývoja; pred
release
nahradiť licencovanými originálmi.
6.3 Poznámka k autorským právam (dôležité)
Assety
musia byť
originálne
(texty, ilustrácie, nahrávky), aby si mal čisté IP a mohol to
monetizovať
. (Programátor nech nerobí „prekopírovaný
layout
“ strán zo šlabikára.)
7) UX
flow
(MVP obrazovky)
Onboarding
výber profilu / vytvor profil
krátke
intro
sprievodcu (audio)
Mapa Sveta 0
20 krokov
paywall
lock
na krokoch 9–20
Krok – obrazovka úlohy
veľká dotyková plocha
tlačidlo “počúvaj znova”
minimal
text
Odmena
mince + dielik pokladu (po 5 krokoch)
“ďalej”
Rodičovská brána
nákup/
restore
správa zariadení (3-device limit)
8) Ukladanie progresu a analytika (MVP)
Progres (lokálne)
profile_id
world0.completed_steps[]
coins_total
attempt_stats
per step (pokusy, čas)
Analytika (voliteľné v MVP, ale odporúčané)
dokončenie kroku
kde deti padajú (kroky 15–18 sú kritické – „čítanie bez písmen“)
[
slabikar
-s...znamky.pdf | PDF]
paywall
impresia / konverzia
9) Akceptačné kritériá (čo je „hotové“)
MVP sa považuje za hotové, keď:
dá sa vytvoriť profil a dokončiť kroky 1–8 zdarma
kroky 9–20 sú uzamknuté a odomykajú sa nákupom
každý krok funguje
offline
po stiahnutí balíka
audio sa nezasekáva a dá sa opakovať
progres sa ukladá a nezmizne po reštarte
3-zariadenový limit funguje podľa zadania (ak je implementovaný
backend
variant)
10) Príloha: zoznam 20 krokov Sveta 0 (len názvy pre orientáciu v JSON)
Toto je len “
internal
naming
” pre súbory, aby programátor vedel, čo kam patrí:
step_01
TapHotspot
: nájdi 3 veci
step_02
SelectOne
: kto čo robí (2 možnosti)
step_03
SelectOne
: smiešna veta (výber slova)
step_04
MatchPairs
: pexeso 4 páry
step_05
OddOneOut
step_06
PatternComplete
step_07
PhonemeStart
(samohlásky)
step_08
PhonemeStart
(spoluhláskové skupiny)
step_09
SilentPhonemeStart
(tichá hra)
step_10
PhonemeStart
(lov na začiatok)
step_11
HintPanel
: nájdi písmeno v nápovede
step_12
DragMatch
: prilož písmeno k obrázku
step_13
ReverseHint
: písmeno → nápovedný obrázok
step_14
MarkKnownLetters
(bez hodnotenia)
step_15
BlendTwoSounds
(S + A)
step_16
BlendTwoSounds
(S + samohlásky)
step_17
BlendTwoSounds
(M + samohlásky)
step_18
BlendTwoSounds
(bubliny)
step_19
BuildSyllable
(M + A → MA)
step_20
Checkpoint
mix + odporúčanie
Metodicky tým pokrývaš: zrakové rozlišovanie + sluchové rozlišovanie + nápovedné obrázky + „čítanie bez písmen“ + prvé slabiky.
[
slabikar
-s...znamky.pdf | PDF]
,
[slabikar-i.-34-67 | PDF]
