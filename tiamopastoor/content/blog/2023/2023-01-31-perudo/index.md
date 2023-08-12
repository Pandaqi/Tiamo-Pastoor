---
title: Perudo
author: tiamopastoor
date: 2023-01-31T15:00:00+00:00
language: nl
categories:
  - Games

layout: horizontal
thumb: /uploads/2023/01/perudo-1.webp
---

**Perudo** is een simpel dobbelspel ook wel bekend als **Liar's Dice** (van die _Pirates of the Caribbean_ film). Laatst speelde ik dit toevallig en dacht achteraf: "hé, kunnen we dit niet _simuleren_?"

In het artikel hieronder leg ik uit hoe ik een computer potjes tegen zichzelf liet spelen om de beste strategie te vinden voor Perudo!

{{% remark %}}
Ik houd van het gegraveerde, kleurrijke uiterlijk van de bakjes en de perudotekening op de dobbelstenen. Zouden meer spellen moeten doen.
{{% /remark %}}

## Wat is het idee?

Alle spelers krijgen vijf dobbelstenen. Die werpen ze ongezien (in een eigen bakje): jij kan je eigen dobbelstenen bekijken, maar de rest niet.

Vervolgens begint de startspeler met een gok over hoeveel er op tafel ligt. Zoiets als "twee vijven" of "drie drieën".

Elke volgende speler moet ofwel ...

  * Dit bod verhogen. Het eerste getal van het bod moet omhoog, de andere mag alles worden. Bijvoorbeeld: "twee vijven" kan naar "drie vijven", maar ook naar "vier tweeën"
  * Zeggen dat de vorige speler onzin praat: een _uitdaging._

Zodra iemand wordt uitgedaagd, gaan alle bakjes open en tel je de dobbelstenen. De speler die ongelijk had, verliest een dobbelsteen en wordt startspeler. Je bent natuurlijk de **verliezer** zodra je alle dobbelstenen kwijt bent.

Er zijn nog wat kleine regeltjes om het nét wat interessanter te maken.

Ten eerste de "jokers" (of _perudos_):

  * De één is een joker. (Het telt voor wat je maar wilt.)
  * Je mag niet _beginnen_ met een bod op jokers.
  * De eerste ronde nadat een speler nog maar één dobbelsteen over heeft, is bijzonder. Dat heet _palafico_: 
      * Jokers tellen niet
      * Je mag wél beginnen met een bod op hoeveel jokers / enen er zijn
      * En je mag alleen het _getal_ veranderen, niet de dobbelsteenwaarde.

Ten tweede hoe je een gok omzet tussen jokers en andere getallen:

  * Als je een bestaand bod wilt veranderen naar jokers, halveer je het getal (en rond af naar boven). Dus "zes tweeën" gaat naar "drie jokers".
  * Andersom, als je van jokers naar een getal wilt, verdubbel je en telt er één bij op. Dus "twee jokers" gaat naar "vijf <een andere soort>"

Die laatste regels geven dus een manier om het getal weer even te verlagen. In eerste instantie wilde ik ze weglaten, om het te versimpelen, maar het was té belangrijk voor de balans in het spel. Wél is belangrijk dat je nooit twee keer hetzelfde bod op jokers mag zeggen in een ronde! Als je dat toestaat, dan kan je ronde oneindig lang duren. Zoals de vastgelopen _loop_ in mijn simulatie bewees ... 

Je vindt online enkele variaties van deze regels. Maar die heb ik om verschillende redenen afgewezen.

  * Doorspelen tot één iemand wint (ipv één iemand verliest). _Waarom niet?_ Maakt het spel langer dan leuk is én de laatste rondjes (tussen 2 spelers) zijn behoorlijk zinloos.
  * Je mag niet verlagen. Dus je mag niet van "drie drieën" naar "vier tweeën", je moet het andere getal constant houden. _Waarom niet?_ Het begrenst je opties zo enorm dat elke ronde na een paar gokken al voorbij is.
  * Extra regels om het allemaal nog wat geavanceerder te maken. _Waarom niet?_ Mensen die een dobbelspel doen zijn niet op zoek naar complexe regels :p Dus de meesten zullen het toch nooit zo spelen.

## De simulatie

Dit is vrij simpel om een computer te leren. Dus ik heb het volgende gedaan:

  * Ik bedenk een paar strategieën per speler
  * Vervolgens laat ik de computer duizenden potjes spelen volgens die strategie
  * Degene die het _minste_ verliest gebruikt overduidelijk de beste strategie!

De simulatie is geschreven in de programmeertaal **Rust**. Enerzijds omdat ik meer ermee wilde oefenen, anderzijds omdat het _veruit de snelste taal is die ik ooit heb meegemaakt_ (voor dit soort toepassingen). Ik heb vorig jaar een paar puzzelgenerators geschreven---dus dat de computer voor mij levels genereerd voor een puzzelspel---en in Rust kan je makkelijk miljoenen zetten afgaan binnen een seconde.

(Mijn eerste simulaties waren in **R**, toen in **Java**, en nu dus **Rust.** Elke keer werd de uitvoering zo'n 100 keer sneller.)

De broncode is beschikbaar hier: [[Rust Simulation] Perudo][1]

Maar merk dus op dat ik nog lerende ben qua Rust en het op dit moment anderhalf jaar niet meer had aangeraakt. Rust voelt soms nog steeds als zwarte magie waarbij je bang bent dat één karakter ergens veranderen alles als een kaartenhuis in elkaar laat storten. Maar als het werkt, dan werkt het _goed_.

## Strategieën

Er zijn _drie_ keuzemomenten in het spel.

  * De eerste gok (als je startspeler bent). _Waar moet je beginnen? Op basis van alleen je eigen dobbelstenen?_
  * Een bestaande gok ophogen. _Welk getal hoog je op? En met hoeveel?_
  * Een uitdaging doen. _Wanneer besluit je dat de vorige gok te gek voor woorden is?_

Dus voor deze drie dingen moest ik losse strategieën bedenken en programmeren. Ik ga ze hieronder niet noemen ... want ik ga nu vertellen hoe mijn eerste ideeën allemaal niet werkten, en hoe ik alles daarna heb verbeterd.

## Even checken

Voordat we gaan simuleren, willen we natuurlijk zeker zijn dat de simulatie _werkt_. Vaak gaat het mis doordat je bepaalde aannames maakt of getallen constant houdt die je zou moeten _randomizen_.

In dit geval ...

* De startspeler wordt willekeurig gekozen. (Zodat we niet altijd met speler 0 beginnen.)
* Maar ook de _volgorde_ van spelers moet steeds anders zijn. (Want wie er vóór of ná jou zit maakt uit, maar wie ergens anders zit nauwelijks.)

Dus dit is wat ik uiteindelijk heb gedaan:

  * Spelers krijgen een _willekeurige_ strategie aan het begin van elk potje. (In plaats van dat ik zeg: speler 1 = dit, speler 2 = dat, etcetera.)
  * Wanneer een speler verliest, sla ik op met welke _strategieën_ diegene heeft verloren.
  * Zo krijgen we uiteindelijk een lijst, per strategie, met hoeveel potjes deze heeft verloren.
  * Maar zo heb je ook geen vaste volgorde qua spelers.

Je kan zien dat ik ben gegroeid sinds de simulaties jaren geleden :p Ik heb daar zóveel domme fouten gemaakt, zoals _met de hand_ (alle) combinaties van strategieën invoeren. Terwijl de oplossing zo simpel is. Ach ja. Je wordt ouder, je gaat van de studie, je leert daadwerkelijk iets.

Wat willen we zien? Als alle spelers exact dezelfde strategie volgen, moeten ze _ongeveer_ even vaak verliezen (als we even snel duizenden potjes simuleren). 

![](/uploads/2023/01/sanity_check.webp)

Ook zou je verwachten dat elke _willekeurige_ strategie slechter is dan (de meeste) andere strategieën. Bij dit spel is dat niet helemaal waar, omdat er veel geluk / toeval / onzekerheid meespeelt. Maar in het algemeen lijkt dit inderdaad het geval te zijn.

Ta da! We kunnen beginnen.

## Problemen

### Opening maakt niet uit

Terwijl ik nog bezig was met strategieën bedenken, testte ik ondertussen of alles goed ging. Daardoor merkte ik iets bijzonders. 

De strategie voor het eerste bod is _compleet irrelevant_. Wat ik ook bedenk, het scoort allemaal ongeveer even goed. De enige die consistent _net iets beter_ scoort is de willekeurige strategie:

  * Pak een willekeurige waarde
  * Gok een gemiddelde. (Totaal aantal dobbelstenen delen door drie.)
  * Noem dat. Of een getal vlak erboven of eronder.

En ergens is dit ook wel logisch. Want niemand heeft iets van informatie, dus als jij zegt: "er zijn vier vieren", denken alle andere spelers ...

  * OF: Ik heb zelf ook een hoop vieren. Dus dat bod ga ik ophogen.
  * OF: Ah, dan zal diegene wel veel vieren hebben. Dus dat bod ga ik niet uitdagen.

En doordat je het willekeurig doet, ben je niet voorspelbaar, waardoor je niet consistent verliest (in de simulatie) tegen strategieën die jou het meest tegenwerken.

Alles is prima als opening :p

Als ik toch iets moet aanwijzen als een zwakke opening, dan is het beginnen met een heel laag getal. De kans is dan namelijk groot dat men de hele tafel rondgaat, want iedereen gelooft wel dat ze het kunnen ophogen. En precies als het _terugkomt_ bij jou is het getal inmiddels zo hoog dat je twijfelt.

### Een andere manier

De simulatie werkte niet echt. Ik kon geen strategieën bedenken die echt ergens op sloegen als je ze _altijd_ toepaste. Bovendien gebeurde het vaak (té vaak) dat een strategie een bod opleverde dat niet mocht, wat ik in de code oploste door dan maar domweg +1 te doen op het vorige bod.

Dus ik ging langer nadenken. En ik keek of _andere_ mensen misschien iets hierover hadden gezegd.

**Idee 1: maak een lijst toegestane zetten.** Dus in plaats van dat spelers helemaal zelf een gok wagen, _kiezen_ ze iets uit deze lijst. Dat is ook hoe een speler dat in het echt zou doen. Het voorkomt foute zetten en laat mij betere strategieën proberen. (Zoals: "Kies altijd de toegestane zet met de laagste getallen")

**Idee 2:** **werk met kansen op basis van geschiedenis / opgedane kennis.** Elke discussie of onderzoek kwam hierop neer. Over tijd kan je leren wat de spelers voor en na jou doen.

  * Als onze vorige uitdaging (tegen de vorige speler) succesvol was, ga dan vaker uitdagen. (En omgekeerd: als we steeds falen met onze uitdagingen, doe dat minder vaak.)
  * Als de vorige uitdaging tegen ons (van de speler na ons) faalde, durf dan het bod verder omhoog te gooien. (En omgekeerd: als de speler na ons steeds goed uitdaagt, gooi het bod minder ver omhoog.)

Bovendien noemt iedereen een voorkeur voor het bod (zelfverzekerd) ophogen tegenover alles uitdagen. We zullen zien of dat uit de simulatie komt.

Je _kan_ nog verder gaan: bijhouden wie wanneer heeft gebluft het hele potje, alle kansen voor alle mogelijkheden uitrekenen, etcetera. Maar dit zou een mens nooit doen. Zelfs al zou je het _willen_, het is te moeilijk en duurt te lang. Daarom probeer ik te werken met simpele, haalbare strategieën.

Deze drie bronnen vond ik vooral nuttig:

  * [https://boardgamegeek.com/thread/147775/liars-dice-strategy-notes](https://boardgamegeek.com/thread/147775/liars-dice-strategy-notes)
  * [https://www.cs.ubbcluj.ro/~studia-i/contents/2014-macs/04Burcsi.pdf](https://www.cs.ubbcluj.ro/~studia-i/contents/2014-macs/04Burcsi.pdf)
  * [https://cdn.1j1ju.com/medias/f4/4f/09-perudo-rulebook.pdf](https://cdn.1j1ju.com/medias/f4/4f/09-perudo-rulebook.pdf) (spelregels niet te vergeten natuurlijk)

### Bluffen

Hoe langer ik hiermee bezig was, hoe meer het voelde alsof ik het concept van _bluffen_ meer specifiek in de code moest zetten. Dus elke speler een _kans_ of _situaties_ geven waarmee ze bluffen.

Bovendien moest ik definiëren wat een **bluf** nou precies is. Want je _weet_ niet wat er precies op tafel ligt, dus je weet helemaal niet of jouw wilde gok juist is of niet :p

Dus ik definieerde een bluf als volgt: _iemand koos een bod dat niet werd ondersteund door diens eigen dobbelstenen._

Meer specifiek: _iemand ging over de verwachte waarde_ _op basis van diens eigen dobbelstenen_ OF _doet een eerste bod in een soort die deze persoon niet heeft._

De meeste spelers denken al op die manier. Ze tellen het aantal dobbelstenen in het spel en gokken zo snel wat _ongeveer_ de kans is dat iets op tafel ligt. Maar jouw eigen dobbelstenen zijn hierin nogal doorslaggevend, want het is het enige waarover je zeker bent.

**Bijvoorbeeld:** in totaal liggen er nog 16 dobbelstenen. Jij hebt er 4: 2,2,3,6. Iemand zegt "vijf vijven". Jij verwacht dat er (16-4)*(1/3) = 4 vijven zijn. (Je weet dat je ze zelf niet hebt. Alle overgebleven 12 dobbelstenen hebben 1/3 kans om een vijf te zijn.) Als je dan het bod ophoogt ... is dat een bluf :p

**Bijvoorbeeld:** er zijn 12 dobbelstenen. Jij hebt er 3: 1,2,3. Iemand zegt: "vier tweeën". Jij verwacht dat er 2 + (12-3)*(1/3) = 5 zijn. Dus je verhoogt het bod. Het is riskant, maar geen bluf.

## De nieuwe insteek

### Bluffen

Elke speler krijgt ee**n bluf strategie**. Dit is voornamelijk een getalletje dat zegt wat de _kans_ is dat je bluft.

  * Altijd bluffen
  * Hoge blufkans
  * Middelhoge blufkans
  * Lage blufkans
  * Nooit bluffen
  * Lage blufkans normaal, hoog als je weinig dobbelstenen over hebt
  * Hoge blufkans normaal, laag als je weinig dobbelstenen over hebt

Wat is de invloed hiervan?

### Start bod

**Start bod:** als je het eerste bod moet doen, volg je jouw normale strategie (zie hieronder). Maar als je _bluft_, kies je een waarde die je helemaal niet hebt, of een veel te hoge inzet.

  * Willekeurige inzet
  * Lage inzet
  * Hoge inzet

### Uitdagen

**Uitdagen:** dit is eigenlijk zwaar versimpeld in de nieuwe opzet. Alle strategie draait om hetzelfde: wanneer ga je twijfelen aan mensen? 

Van de speler vóór jou houd je een getalletje bij: hoe vaak ze hebben gebluft. Als deze kans uitkomt, ga je er dus vanuit dat ze bluffen en daag je uit.

Van de speler ná jou houd je hetzelfde getalletje bij: hoe vaak ze jou uitdagen. Als deze kans niet uitkomt, gok je erop dat zij jouw volgende bod _niet_ zullen uitdagen, en kies je dus om te verhogen.

Anderzijds daag je uit als de verwachte kans dat het bod correct is té laag is voor jouw strategie.

Dus de verschillende strategieën hebben simpelweg andere getalletjes: 

  * Hoeveel waarde je hecht aan de speler voor jou
  * Hoeveel waarde je hecht aan de speler na jou
  * Hoe onwaarschijnlijk het bod moet zijn voordat je twijfelt

(Deze staan allemaal los, zodat ze in elke samenstelling kunnen worden getest.)

### Gokken

**Gokken:** je kiest de beste zet, uit de mogelijke lijst zetten, voor jouw strategie. Maar als je _bluft_, kies je een optie die jouw kennis helemaal niet ondersteunt: een soort die je niet hebt of een getal dat boven jouw verwachting uitkomt.

  * Willekeurige stap
  * Kleinste stap
  * Gemiddelde stap
  * Grootste stap
  * Known: Kies een zet in een soort die jij hebt
  * Expected: Kies een waarde die binnen jouw verwachting valt
  * KnownHigh: kies een soort die jij hebt én verhoog het andere getal sowieso
  * LowerNum: kies een optie waardoor je het aantal kan verlagen
  * HigherNum: kies een optie waardoor je het aantal kan verhogen

En ook hier wordt dat getalletje voor de speler na jou meegenomen: de kans dat ze je uitdagen. (Hoe meer ze succesvol zijn met uitdagingen, hoe meer ze het zullen doen.) Als deze kans niet uitkomt, kies je een gok die meer gedurfd is ( = hogere getallen).

## Resultaten

Zoals altijd met dit soort dingen, heb ik deze sectie drie keer opnieuw geschreven. Want elke keer kreeg ik resultaten die nergens op sloegen en vond ik weer een grote domme fout in mijn code :p

Bijvoorbeeld, de strategie "noem altijd het allerhoogste getal dat is toegestaan volgens de regels" was overduidelijk de beste. Je hoeft niet lang na te denken om te zien dat de simulatie er dan naast zit.

Wat hebben we geleerd? Voeg vanaf het begin een makkelijke manier toe om één potje te laten printen. (Nieuwe ronde, deze dobbelstenen heeft iedereen, deze speler doet X, daarna doet deze speler Y, enzovoort tot de uitslag bekend is.) Toen ik dat deed, zag ik meteen de welgeteld _drie_ domme manieren waarop het misging.

Maar uiteindelijk kwam alles goed!

### Algemeen

Ik zei dat Rust snel was, toch? Nou, dat betekent dat we best honderdduizend potjes kunnen laten spelen. Een minuut later heeft mijn oude laptop toch de resultaten. (We kunnen er ook wel een miljoen van maken, maar tussen de grafieken van 10,000 en 100,000 zit al _praktisch geen_ verschil.)

We testen dus wat _in alle gevallen_, _gemiddeld genomen, ongeacht tegenstander_ _of aantal tegenstanders_, de beste strategieën zijn. Aantal spelers gaat van 3 t/m 6. Startspeler is willekeurig. Samenstelling van strategieën is willekeurig.

We zoeken de _laagste_ grafiek: minste aantal potjes verloren. Klik op plaatjes om ze op volledige grootte te zien.

{{% image-gallery %}}
 ![](/uploads/2023/01/final_bluff.webp) ![](/uploads/2023/01/final_chall_offset.webp) ![](/uploads/2023/01/final_guess.webp) ![](/uploads/2023/01/final_init.webp) ![](/uploads/2023/01/final_next_player.webp) ![](/uploads/2023/01/final_prev_player.webp) 
{{% /image-gallery %}} 

Wat zien we hier?

  * **Bluffen** loont niet. (Onthoud hoe we bluffen hebben gedefinieerd: je gokt een waarde die je zelf niet hebt _of_ hoger dan je zou verwachten in een waarde die je wél hebt. Ik vind het ook jammer, maar ja, de data spreekt voor zichzelf ... )
  * Wat de **vorige speler** doet is belangrijk. De waarde "1" (je let 100% op wat de speler voor jou doet) verliest de minste potjes. 
  * Wat de **volgende speler** doet is niet zo belangrijk. De waarde "0" (je let totaal niet op de speler na jou) is het beste.
  * Een **laag eerste bod** is veruit het beste!
  * Die **verwachte waarde** is inderdaad een goede graadmeter voor uitdagen. Een _challenge offset_ van "0" is het beste. Ook "-1" of "1" zijn ongeveer even goed. Als je te vroeg of te laat uitdaagt, wordt het alleen maar erger.
  * De beste **gokstrategie** is het meest interessant: altijd de laagste optie wint vrij duidelijk. Het is vrij saai, maar kleine stapjes lonen toch het meeste.
      * Een andere strategie die in al mijn simulaties bijna even goed scoort is **Expected:** zoek een waarde waarin je ongeveer het verwachte aantal mag gokken en kies die.
      * Of **HigherNum:** blijf bij dezelfde dobbelsteenwaarde, maar gooi het getal omhoog (met ongeveer 1-4)

### Even checken

**Maar werken deze strategieën ook samen?** Want nu hebben we alles _los_ getest en het kan best dat de strategieën elkaar toevallig afbreken als je ze samenneemt.

Dat kunnen we testen. Ik simuleer het spel op een iets andere manier, ook om te checken of alles klopt.

In plaats van _compleet willekeurige strategieën_ en grafieken per strategie, geven we vaste strategieën en maken grafieken per _speler_. Hierbij zet ik **speler 0** dus vast op de beste strategieën van hierboven. 

Hopelijk zien we dan dat deze speler het meeste wint. 

Is dat ook zo? Jazeker! Speler 0 verpulvert de rest met deze strategieën gecombineerd.

![](/uploads/2023/01/per_player_per_player_check.webp)

_Huh, maar waar komt dat verschil bij de andere spelers vandaan? Zouden ze niet gelijk moeten zijn?_ Hier zien we hoe ongelofelijk interactief dit spel is. Omdat 0 goed uitdaagt en ophoogt, hebben de spelers rondom die speler (1 en 3) daar enorm veel last of enorm veel profijt van.

In zekere zin hangt de kwaliteit van de resultaten af van de kwaliteit van de strategieën die ik bedenk. Als de meeste computerspelers _hartstikke dom zijn_, komt er weinig nuttigs uit de simulatie.

### Wat als we wel doorspelen tot een winnaar?

Die optie was niet zo moeilijk om toe te voegen aan de simulatie. Verandert het iets? Let op: nu zoeken we dus juist de _hoogste_ grafiek, want we willen het _meeste aantal gewonnen potjes_.

Dit maakte de simulatie tevens een stuk langzamer. (Want ja, je speelt nu door tot iedereen z'n dobbelstenen kwijt is, dus dat duurt al snel 4 tot 5 keer langer.)

{{% image-gallery %}}
 ![](/uploads/2023/01/until_winner_bluff.webp) ![](/uploads/2023/01/until_winner_chall_offset.webp) ![](/uploads/2023/01/until_winner_guess.webp) ![](/uploads/2023/01/until_winner_init.webp) ![](/uploads/2023/01/until_winner_next_player.webp) ![](/uploads/2023/01/until_winner_prev_player.webp) 
{{% /image-gallery %}} 

Veel blijft hetzelfde, vooral de gok- en blufstrategie. Toch enkele grote veranderingen:

  * De "challenge offset" schiet omhoog naar de rechterkant. Als je langer doorspeelt, loont het meer om pas _later_ uit te dagen. (De piek lijkt rond de 4 te zitten. Dus je rekent snel uit hoeveel je van een soort verwacht, gemiddeld genomen, en telt daar 3-4 bij op. Pas als een gok daarboven komt, daag je uit.)
  * De "next player" en "prev player" draaien om! Als je een langer potje speelt, kan je meer informatie verzamelen over hoe de rest speelt en bluft. Daarmee wordt de speler **na jou** blijkbaar belangrijker, en de speler **voor jou** minder belangrijk.
  * Het **startbod** maakt minder uit. Deze vind ik het meest interessant: willekeurig of hoog bieden is bijna even goed als de duidelijke winnaar van eerst (_laag bieden_).
      * Een theorie: als je langer doorspeelt, heb je dus meer rondes met _weinig tegenstanders_ of tegenstanders met _weinig dobbelstenen_. Dat verlaagt de informatie in het spel, waardoor elk willekeurig startbod ineens even "goed" of "geloofwaardig" is.

## Conclusie

Dus wat is de beste manier om te spelen?

  * **Bewust bluffen is zinloos.** Er zit al genoeg onzekerheid in het spel, want elke gok die je waagt is ... een gok. En soms _kan_ je niet anders dan iets bieden waarover je weinig weet.
  * Doe een **laag eerste bod** als je speelt tot verliezer. Als je speelt tot een winnaar, is een willekeurig eerste bod prima.
  * Let op de speler **voor jou** als je speelt tot verliezer. Hoe vaker je hen goed uitdaagt, hoe vaker je het in de toekomst doet. (Of andersom, hoe vaker ze niet blijken te bluffen, hoe minder je uitdaagt.)
  * Let op de speler **na jou** als je speelt tot winnaar. Hoe vaker ze jou succesvol uitdagen, hoe conservatiever je moet zijn met je gokken. (Of andersom, als ze vaak falen, zullen ze je minder uitdagen, dus kan je wildere gokken doen.)
  * Reken van elk bod de **verwachte hoeveelheid** uit. Als je speelt tot verliezer, daag je alles uit dat daarboven komt. Als je speelt tot winnaar, dag je iets pas uit als het zo'n 3-4 erboven zit.
  * Verhoog een gok het liefst **zo min mogelijk**. (Kies anders een waarde waarin je het _verwachte aantal_ kan zeggen, of ga 1-3 omhoog in _dezelfde soort_.)

Het belangrijke is dus dat je een vaag idee bijhoudt van hoe de spelers om jou heen hebben gespeeld de afgelopen rondes én hoeveel dobbelstenen er nog in het spel zijn. (Je hoeft dit niet zo exact bij te houden, want we werken toch met héél veel onzekerheid in dit spel.) 

Je kan de "verwachte hoeveelheid" (voor een bepaald getal) uitrekenen door: je eigen dobbelstenen met dat getal + (totaal aantal dobbelstenen zonder die van jou)*(1/3).

Het is eigenlijk een hele saaie conclusie :p Baseer je op wat je weet of _kunt_ weten als je het bijhoudt. Doe geen gekke dingen. Daarmee zal je, als je genoeg potjes speelt, iedereen verslaan die iets met meer risico gebruikt.

Maar zoals altijd: dit zijn gemiddeldes en simulaties van miljoenen potjes. Zoals je ziet, verandert de strategie _flink_ als je langer doorspeelt. Als jij slechts 1-5 potjes van dit spel speelt, met vrienden of familie, heb je er meer aan om gewoon dingen te proberen en je tegenstanders helemaal gek te maken met je gebluf en veranderende tactieken.

Ik vind het gewoon leuk om soms te checken of de strategieën in mijn hoofd ook echt een goed idee zijn.

## Discussie

Natuurlijk heeft deze aanpak tekortkomingen. 

De beste strategie in veel spellen zal komen door _aanpassing_ en _variatie_. Aanpassing aan hoe het spel er nu uitziet, aanpassing aan hoe je spelers in elkaar steken. Nu volg je altijd exact dezelfde regels. Die zijn wel _gebaseerd_ op deze dingen (spel en medespelers), maar de regel zelf verandert niet.

Daarnaast is dit een blufspel. Dus kennis van je medespelers, een pokerface, een geheugen dat bijhoudt hoe mensen in vorige potjes hebben gespeeld ... het is allemaal best belangrijk.

Achteraf gezien was dit helemaal niet het beste spelletje om een simulatie van te maken. Er zijn veel meer momenten (en lagen) van keuze en strategie dan ik dacht, en sommige onderdelen zijn niet na te bootsen.

De resultaten suggereren ook dat het spel bluffen niet genoeg beloond. Ik denk ook dat men zoiets vaak overschat: ze herinneren alleen die ene keer dat ze geweldig bluften en iedereen erin luisden ... en vergeten de andere negen keer dat die bluf hen de grote verliezer maakte.

In een toekomstige "verbeterde" simulatie zou ik dus kunnen kijken naar

  * Verschillende strategieën per _spelfase_.
      * Zoals een andere strategie in die bijzondere "palafico" rondes waarin de meeste dingen niet mogen.
      * Specifieke strategieën waarbij je vooral op jokers probeert te gokken.
      * Strategieën waarbij je meerekent hoeveel spelers / beurten er zijn voordat jij weer aan de beurt bent. Ik zie nu hoe belangrijk dat is: je wilt niet een laag bod zeggen, waardoor het bod precies zo'n vervelende hoogte heeft als het bij jou terugkomt.
  * Nog meer informatie bijhouden per speler gedurende het spel. (Nu heb ik alleen die twee getalletjes over hoe "waarschijnlijk" een bluf/uitdaging is.)
  * Een manier vinden om te spelen met _alle_ getalletjes. (Nu hebben veel delen van de code vaste getallen, zoals "een gemiddelde gok zit hoogstens X af van het midden". Maar die zouden ook wel eens flink invloed kunnen hebben als ze nét iets anders waren.)
  * Die extra regels en varianten van dit spel toevoegen en testen. 

Maar ik vond het een goede manier om weer even bezig te zijn met spellen en Rust simulaties.

Hopelijk is het interessant om te lezen 🙂 Of helpt het met je volgende potje _Liar's Dice_ winnen.

Als je suggesties hebt voor andere spellen die ik moet simuleren, laat maar weten. Die oude artikelen over Monopoly en dergelijke---ondanks dat ikzelf de kwaliteit dus betwijfel---worden belachelijk vaak bezocht. Net zoals mijn haastig geschreven recensies van Carry Slee boeken. De wereld werkt op wonderlijke manieren.

 [1]: https://drive.google.com/drive/folders/1CAoLI-0Kk6Bd1bq5EOs4c7CPOLCvJx6h