---
title: Mantis (Simulatie)
author: tiamopastoor
date: 2023-08-01T14:00:00+00:00
language: nl
categories:
  - Games

thumb: /uploads/2023/01/mantis_board_game-1.webp
---

Recentelijk heb ik het spel [Exploding Kittens][1] gesimuleerd. Het spel _Mantis_ is van dezelfde makers, maar vele malen simpeler én beter geschikt voor simulatie.

Dus die wilde ik ook even bekijken!

Het doel, zoals altijd, is om de **beste strategie te vinden!**

Het liefst een paar simpele regeltjes die je zelf kan toepassen tijdens het spelen. In dit geval is het een simpele rekensom, op basis van de kaarten die je kan zien. 

Maar onthoud: het blijft een _gemiddelde_. Tenzij je honderden potjes speelt, loont het waarschijnlijk meer om je aan te passen aan je medespelers van dat moment. 

En, natuurlijk, om gewoon plezier te hebben.

Halverwege dit artikel staan **filmpjes** van computerpotjes. Scrol omlaag---naar **Resultaten / Conclusie**---als je alleen de uitkomst wilt weten.

De simulatie is geschreven in Rust. De code is helemaal openbaar en zelf te gebruiken: [Mantis Simulation (Source Code)][2]

## Wat is het idee?

Iedereen verzamelt kreeften in bepaalde kleuren voor zich (de _voorkant_ van de kaart).

Op de _achterkant_ van elke kaart staan drie kleuren. Een daarvan is altijd de juiste (de kleur aan de voorkant), de andere twee kunnen alles zijn. Zo weet je dus _ongeveer_ welke kleur kaart je zal trekken in je beurt.

Maar voordat je dat doet, moet je een keuze maken: Scoren of Stelen.

**Scoren:** pak de bovenste kaart van de stapel. Ligt de kleur al voor jou? Voeg deze kaart toe en leg die hele stapel bij je _scorestapel_. (Zo niet, dan begint deze kaart een nieuwe spaarstapel in die kleur.)

**Stelen:** pak de bovenste kaart van de stapel ... en leg hem voor een _andere_ speler. Als die ander een stapel van deze kleur heeft, mag je die hele stapel _stelen_ en voor jezelf neer leggen. Zo niet, dan krijgt die andere speler gratis de kaart die je zojuist hebt getrokken.

Dit is _alles_!

Het algemene idee is helder. Elke beurt gok je of het beter is om veilig te sparen/scoren, of om te proberen iets te stelen van anderen. In de praktijk is het dan ook vooral een spel van je medespelers verraden en grote scores behalen :p

### Waarom?

Dit spel leent zich enorm goed voor simulatie:

  * De hele toestand van het spel zit in één variabele: de kaarten
  * Elke beurt heeft precies dezelfde keuze (Scoren of Stelen) die op dezelfde manier wordt uitgevoerd.

Dat maakt de logica om het spel te simuleren slechts iets van 50 regels code. De logica om de resultaten _op te slaan_ en in _plaatjes te zetten_ is vele malen ingewikkelder dan dat :p

### Opmerkingen

Hoe werkt dat met die drie kleuren op de achterkant? Nou, toen ik zag dat er 15 kaarten per kleur waren en 7 kleuren, had ik zo'n donkerbruin vermoeden dat ze simpelweg _alle mogelijke opties_ afgaan. 

{{% remark %}}
Ik heb zelf geen kopie van dit spel, dus ik kon niet simpelweg de kaarten bekijken. Daarnaast ben ik technisch gezien een wiskundige en dan heb je dit soort rare alarmbellen die afgaan in je hoofd :p
{{% /remark %}}

Want wat staat er op die achterkant? De _juiste kleur_ en twee _andere kleuren_. 

Hoeveel mogelijkheden zijn er voor die andere twee kleuren? 6 * 5 = 30. (Zes kleuren om te kiezen, daarna nog vijf.)

Maar volgorde maakt niet uit! Dus Oranje-Groen-Blauw is hetzelfde als Oranje-Blauw-Groen. Dus hoeveel unieke sets van drie kunnen er per kleur op de achterkant staan? 30 / 2 = 15.

Dus aan het begin van de simulatie, genereert de code gewoon een lijst met al deze opties, en zo krijgen we de 105 kaarten die in het spel zitten.

Ook gebruik ik wat optimalisaties:

  * De volgorde van kaarten is niet belangrijk (voor jou op tafel). Dus ik houd het bij als een frequentietabel: (_kaartsoort_, _hoeveel je hebt_). Als een kaartsoort niet in de tabel zit, heb je er natuurlijk 0 van.
  * Je scorestapel kan natuurlijk gewoon een getal zijn.
  * En het deck kaarten is wat overblijft na het uitdelen van de startkaarten aan spelers. (Je begint met 4.)

Je denkt misschien: _dat is wat voorbarig_. Maar dankzij dit soort dingen kan ik het spel een miljoen keer simuleren in weinig tijd---en dat is een mijlpaal die ik graag behaal :p

## Strategieën

Aha! Hier wordt extra duidelijk waarom dit zo'n geweldig spel is om te simuleren. 

Je hebt maar **twee keuzes** in dit spel:

  * Scoren of Stelen
  * Als je steelt, van wie?

{{% remark %}}
De spelregels en uitleg zijn hier onnodig vaag over, maar het idee is dat je kiest van wie je steelt VOORDAT je de kaart bekijkt die je hebt gepakt. Dus je mag niet de kaart pakken, bekijken, en dan besluiten van wie je wilt stelen.
{{% /remark %}}

Deze dingen hangen nauw samen. Je kiest alleen om te stelen als je natuurlijk _denkt_ dat bij een bepaald slachtoffer iets te halen valt. Dus, in zekere zin, heb je maar **één keuze.**

### Ratings

Ik besloot te werken met **ratings**. Want alle informatie in het spel is open en kan worden geteld.

Als een speler aan de beurt is, rekenen ze voor elke speler een **rating** uit, inclusief zichzelf. 

Hoeveel punten een speler scoort per categorie, hangt af van de strategie. Strategieën zijn dus niets meer dan **getallen!**

Bijvoorbeeld, neem de categorie "color_match". Dit telt hoeveel kleuren matchen tussen iemands hand en de kaart bovenop de stapel. Als iemands strategie "0" is ... dan vermenigvuldigt het dit getal met 0, en doet dus niks met deze informatie. Als iemands strategie "1" is, dan nemen ze deze informatie dus wél mee (in positieve zin) in hun rating.

{{% remark %}}
In dit geval zou je verwachten dat dit een nuttige strategie is. En dat personen met een positief getal in deze categorie vaker winnen dan de rest. Maar ja, daarom maken we de simulatie: om dit te _testen_!
{{% /remark %}}

Vervolgens kiezen ze de speler met de hoogste rating. Dat is immers de speler die het "meest aantrekkelijk" is volgens de strategie.

  * Als ze dit zelf zijn, dan kiezen ze dus voor de actie Scoren.
  * Als dit iemand anders is, kiezen ze dus voor de actie Stelen.

Oftewel: **hogere rating = je wilt liever van die persoon stelen.**

Dit is eigenlijk een heel simpel en krachtig systeem. Ik wil het bij volgende simulaties sowieso opnieuw toepassen.

Maar, zoals altijd, zijn er wat haken en ogen ...

### Welke getallen kiezen we?

In eerste instantie gaf ik de speler een hele grote range: van -5 tot 5.

Maar dit waren té veel opties! _Elke categorie_ had dus _11 opties_. En ik had op dat moment al iets van _10 categorieën_. (Voor de duidelijkheid, dit zijn 10^11 mogelijke unieke manieren om jouw ratings uit te rekenen.)

Het betekent dat je na 100,000 simulaties veel strategieën nauwelijks hebt gezien. Dus je data is niet betrouwbaar genoeg.

Bovendien is de kans klein dat -5 of -4 iets uitmaakt. De belangrijkste informatie is: -1, 0, of 1. _Is deze categorie negatief, onbelangrijk, of positief?_

Dus ik besloot om twee simulatierondes te doen. 

  * Eentje met _alle_ strategieën, maar slechts die drie opties (-1, 0 of 1)
  * Eentje met alleen de strategieën die het _meest overtuigend wonnen_, maar dan met meer opties.

### Dubbele strategieën

Het lijkt mij logisch dat jij jouw eigen kaarten op een _andere_ manier scoort dan kaarten van de rest. Dus dit was een optie in de simulatie.

In dat geval krijgt de speler _twee getallen_ voor elke strategie: eentje voor anderen, en eentje voor zichzelf.

(Een handjevol strategieën doet hieraan niet mee, omdat deze niet afhangen van welke speler je beoordeelt.)

### Twee uitzonderingen

De "override" strategie is bijzonder. 

  * -3 betekent dat je _altijd scoort_. 
  * 3 betekent dat je _compleet willekeurig kiest_. 
  * (Elk ander getal doet niks en is een "pass".) 

Het overschrijft je ratings en maakt een harde keuze. Dit is vooral toegevoegd als controle. _Maar_ dit knoeit met de data als we iets invullen voor de andere strategieën (die dus _toch niet worden gebruikt_). Dus die worden allemaal op 0 gezet.

Daarnaast zag ik al snel in mijn testfilmpjes dat er situaties zijn waarbij je _gegarandeerd wint_ als je scoort. Maar de speler doet het domweg nooit, want het volgt netjes z'n strategieën. Dit zag er belachelijk uit en ik vond het zinvol om hiervoor een uitzondering te maken. 

{{% remark %}}
In enkele potjes had een speler echt vijfentwintig kaarten voor zichzelf liggen, en nog _steeds_ 0 punten xD Eén keer scoren en die speler wint sowieso. Maar ja, dat doen ze dus niet uit zichzelf.
{{% /remark %}}

Dus de code test dit en zorgt dat je die winnende keuze maakt.

## Filmpjes

Terwijl de computer een potje speelt, laat ik plaatjes maken van hoe het spel eruitziet (en wat er gebeurt). Dit is niet alleen grappig om te zien, het helpt enorm met controleren of alles goed gaat. Vervolgens kan je die plaatjes bundelen tot een filmpje.

{{% remark %}}
Het nadeel van de nieuwe techniek ("reken een score uit") is dat je moeilijk een speler écht kan begrijpen. Zoals je ziet tijdens de eerste seconde van elk filmpje: de strategie is een stel overweldigende getalletjes.
{{% /remark %}}

De enige strategie met "betekenis" is de _override_. Toevallig had ik er _drie_ daarvan in het eerste filmpje. Links en boven scoren altijd. Rechts doet willekeurige acties.

### Filmpje 1

{{% video src="/uploads/2023/01/mantis_game_1.mp4" %}}

Ja, het is allemaal niet zo spectaculair. Maar nu zie ik tenminste dat alles goed gebeurt, en het is leuker dan grafieken of tabellen.

Interessant genoeg doen die twee spelers die altijd scoren het allebei behoorlijk goed. En eentje wint zelfs! De speler die willekeurig speelt, daarentegen, is veruit de slechtste. Maar dat is ook deels pech, natuurlijk.

### Filmpje 2

{{% video src="/uploads/2023/01/mantis_game_2.mp4" %}}

Op basis hiervan besloot ik de override toch omhoog te gooien naar -4 en 4, want ik vond de kans hierop nu wat te groot.

Verder zien we nu wat er gebeurt als twee spelers (links en onder) nogal passief zijn en nooit willen scoren: het potje duurt een flink stuk langer. De speler links heeft strategieën die _stelen_ erg goed maken, maar die ervoor zorgen dat deze maar één keer _scoort_ tijdens het hele potje. En die is niet eens succesvol!

Ook zien we hier meteen het effect van mijn uitzondering: de onderste speler kan uitrekenen dat hij _gegarandeerd_ wint als het die laatste beurt scoort. Dus dat gebeurt! (De eindscore van 13 is behoorlijk goed zelfs.)

Oké, laten we nu dubbele strategieën toevoegen. (Dus je _rate_ je eigen kaarten eventueel anders dan andermans kaarten.)

### Filmpje 3

{{% video src="/uploads/2023/05/mantis_game_3.mp4" %}}

Een lang potje (zo'n 25 beurten langer dan gemiddeld). De speler rechts wint, ook al zijn ze halverwege het spel _al hun kaarten kwijt_ (en hebben ze dan nog 0 punten). 

Dat vind ik wel interessant aan Mantis. Ik kan eigenlijk geen andere spellen bedenken waar je halverwege compleet blut kan zijn, op alle mogelijke manieren, en je dan toch nog een beste kans maakt om te winnen. (Ook is het interessant hoe, van _al_ die simulaties, de meeste potjes behoorlijk dicht bij elkaar liggen qua lengte. Dat is denk ik een teken van een goed spel. Misschien dat ik in de toekomst mijn eigen spellen moet simuleren en checken of ze niet wild variëren qua lengte :p)

Ook zien we hier het nadeel van een computerspeler met een slechte samenloop van strategieën. De speler bovenin is _geweldig_ in kaarten stelen en verzamelen ... maar ze scoren nooit!

De winnaar (speler rechts) heeft wél een grote voorkeur voor scoren. Hoewel het vaak misgaat, zeker in de eerste helft van het potje, zorgt het uiteindelijk toch voor de winst.

(Merk op dat het begin dus niet alle strategieën laat zien. Er zijn er nog een aantal, maar dat paste niet in zo'n filmpje. Dadelijk komen de harde cijfers en grafieken, dus dan vind je _alles_ terug.)

### Filmpje 4

{{% video src="/uploads/2023/05/mantis_game_4.mp4" %}}

Merk op dat de onderste speler op "speel compleet willekeurig" staat. Dus de scores en dergelijke die hij geeft maken niks uit.

In dit geval wint hij er toevallig bijna het potje mee :p Daarom doen we dus miljoenen simulaties.

Bij de uiteindelijke winnaar zien we dat vrijwel alle strategieën positief zijn. Het geeft je een hoge score als kleur matcht, als je aan het winnen bent, als het een gegarandeerde steelactie is, etcetera.

De bovenste speler lijkt meer negatieve strategieën te hebben als het gaat om _zichzelf_. Net zoals bij het vorige potje, steelt deze speler erop los en had hij makkelijk kunnen winnen ... maar denkt hij er _nooit_ aan om eens te scoren!

### Filmpje 5

Als laatste doen we een filmpje met alleen de strategieën die, uit de data, het meest effectief/invloedrijk blijken. (Zie het stukje _Resultaten_ hieronder. Speler 0 is degene helemaal bovenin.)

{{% video src="/uploads/2023/05/mantis_game_5.mp4" %}}

Zoals je ziet heeft speler 0 een grote voorkeur voor scoren (en geeft zichzelf een vrij hoge rating). 

Ik denk dat dit filmpje goed uitlegt waarom ik de resultaten krijg die ik hieronder krijg.

  * Omdat speler 0 constant scoort, krijgt hij regelmatig een paar puntjes erbij.
  * Maar het schoont dus ook regelmatig zijn kaarten op. Daardoor wordt het heel onaantrekkelijk (en onwaarschijnlijk) voor anderen om bij hem te _stelen_.
  * En diens afkeer voor stelen is ook niet _zo groot_ dat hij het nooit doet. (Halverwege, bijvoorbeeld, heeft hij geen kaarten meer over. Maar het rekent, succesvol, uit dat het beter is om dan te _stelen_. Zo krijgt hij in één klap meerdere rode kaarten.)

Jammer genoeg, zoals bij veel spellen, is de meest saaie of defensieve strategie (gemiddeld genomen, over lange termijn) de beste.

En we zien hier opnieuw de nadelen van dit soort simulatie: de speler onderin is wel behoorlijk dom en zinloos bezig :p

(Dit was het allereerste filmpje dat ik maakte. Het is niet expres uitgekozen zodat speler 0 won: die wint nou eenmaal 99% van de potjes met de "beste strategieën".)

## Resultaten

### Wat alles betekent

Dit is het moment dat ik daadwerkelijk uitleg wat elk specifieke onderdeel betekent. (Ik weet nog steeds niet wat daarvoor nou het beste moment is in artikelen als deze. Helemaal aan het begin is het een overweldigende dump informatie waarmee je als lezer dan niks kan. Maar pas richting het einde ... weet je nu pas wat mijn simulatie nou exact heeft getest.)

Dit is wat de strategieën (in de grafieken hieronder) betekenen.

  * **Better Score:** score die je geeft aan speler die er _beter_ voorstaat dan jij
  * **Close Score:** score die je geeft aan de speler die het _dichtste in de buurt is_ van jou
  * **Lead Score:** score die je geeft aan een speler die significant voorstaat op jou
  * **Other Card:** telt hoeveel kaarten iemand heeft
  * **Other Color:** telt hoeveel (unieke) kleuren iemand heeft
  * **Other Card Match:** telt hoeveel _kaarten_ iemand heeft die matchen met de achterkant 
  * **Other Color match:** telt hoeveel _kleuren_ iemand heeft die matchen met de achterkant
  * **Other Match Two:** scoort zodra iemand _twee_ kleuren matcht met de achterkant
  * **Guaranteed Steal:** als je gegarandeerd steelt, of je daar dan voor kiest. (Oftewel, iemand matcht met alle _drie_ de kleuren op de achterkant van de kaart.)
  * **Other Winner:** of deze speler wint of niet
  * **Other Loser:** of deze speler laatste staat of niet
  * **Other Near Win:** scoort als deze speler op het punt staat om te winnen
  * **Other Small Stack:** scoort hoeveel kleine stapels iemand heeft (<= 1 kaart)
  * **Other Big Stack:** scoort hoeveel grote stapels iemand heeft (>= 3 kaarten)
  * **Other Biggest Stack:** scoort als deze persoon de grootste stack heeft (die zou kunnen matchen) van alle spelers
  * **Offset:** een vast getal dat wordt opgeteld bij de score voor _jezelf_. (Bijvoorbeeld, -5 betekent dat jij je eigen scores standaard verlaagt, wat het veel minder waarschijnlijk maakt dat je _scoort_.)

### Enkele strategie

Hier gebruik je dus dezelfde strategieën voor jezelf en de andere spelers. Alle dingen die ik had bedacht worden gescoord.

{{% image-gallery %}}
 ![](/uploads/2023/05/results_1_better_score.webp) ![](/uploads/2023/05/results_1_close_score.webp) ![](/uploads/2023/05/results_1_guaranteed_steal.webp) ![](/uploads/2023/05/results_1_lead_score.webp) ![](/uploads/2023/05/results_1_offset.webp) ![](/uploads/2023/05/results_1_other_big_stack.webp) ![](/uploads/2023/05/results_1_other_biggest_stack.webp) ![](/uploads/2023/05/results_1_other_card.webp) ![](/uploads/2023/05/results_1_other_card_match.webp) ![](/uploads/2023/05/results_1_other_color.webp) ![](/uploads/2023/05/results_1_other_color_match.webp) ![](/uploads/2023/05/results_1_other_loser.webp) ![](/uploads/2023/05/results_1_other_match_two.webp) ![](/uploads/2023/05/results_1_other_near_win.webp) ![](/uploads/2023/05/results_1_other_small_stack.webp) ![](/uploads/2023/05/results_1_other_winner.webp) 
{{% /image-gallery %}} 

Ten eerste zien we dat andermans _score_ meenemen vrij irrelevant is. De simulatie heeft een _lichte_ voorkeur voor stelen van iemand die aan het winnen is (de _other_winner_ en _near_win_), maar het is heel licht.

Opvallender is dat _guaranteed_steal_ niks uitmaakt. Je zou denken dat het overduidelijk goed is: "als je sowieso iets steelt, dan doe je dat!" Maar daarom doen we simulaties! Om te testen of dat ook zo is! In de praktijk maakt het blijkbaar niks uit. Soms is het blijkbaar voordeliger om te scoren, zelfs als je sowieso had kunnen stelen.

Deze voorkeur voor _scoren_ zien we terugkomen bij de andere grafieken. De _offset_ strategie heeft een grote voorkeur voor +1. Oftewel, je maakt de score voor je eigen hand constant belangrijker, wat de kans verhoogt dat je scoort.

Als laatste zien we dat, niet geheel onverwacht, het belangrijk is om _kleuren_ te matchen. Het interessante hier is dat _twee kleuren_ matchen niet perse veel beter is. En dat het _aantal kaarten_ véél belangrijker is. De strategieën die kijken naar hoe groot iemands stapel is, of hoeveel stapels diegene heeft, krijgen een veel grotere voorkeur.

Het is wel opvallend dat _other\_small\_stack_ ook zo'n grote voorkeur heeft. Ik denk dat dit simpelweg correlatie is: wie veel kleine stapels heeft, heeft ook grotere kans om veel kleuren te matchen. (Ik heb tests geschreven voor grote stukken van mijn code, zoals de functie "tel hoe groot een stapel is". Ze doen wat ze horen te doen, dus het lijkt me geen fout.)

Op basis hiervan, zou ik dus de versimpelde strategie voorstellen van ...

  * Negeer hoeveel punten je medespelers hebben. (Alleen als ze echt ver voorstaan, of op het punt te winnen, kan je misschien overwegen specifiek van hen te stelen.)
  * Geef een lichte voorkeur aan _scoren_ over _stelen_. Dus als er een paar "matige" mogelijkheden liggen om te stelen, kies dan gewoon _scoren_.
  * Als kleuren matchen, is het fijn. Maar je zoekt vooral iemand met een _grote stapel_ om te matchen.

Want al die andere dingen die ik heb getest, hebben geen of nauwelijks invloed.

Merk op dat een _groter verschil_ (in de hoogtes van grafieken) dus betekent dat het _meer invloed heeft_. De speler die het gebruikt wint er meer potjes mee, en consistenter. (Als ik het interval weer zou verbreden, van bijvoorbeeld -5 tot 5, zal zo'n strategie dan ook waarschijnlijk naar 3, 4, 5 gaan.)

### Dubbele strategie

Nu kan de computer een andere strategie kiezen als ze hun _eigen_ kaarten een rating geven, dan als ze dat doen voor _andermans_ kaarten.

Vandaar de term **"other"** voor een aantal strategieën (maar niet allemaal). In de simulatie kopieer ik die nu, en vervang het door **"self"**, om daar een willekeurig ander getal aan te geven.

De strategieën die hier niet van afhangen (zoals _offset_) waren vrijwel exact hetzelfde, dus die geef ik niet opnieuw.

Eerst de **other** strategieën.

{{% image-gallery %}}
 ![](/uploads/2023/05/results_2_other_big_stack.webp) ![](/uploads/2023/05/results_2_other_biggest_stack.webp) ![](/uploads/2023/05/results_2_other_card.webp) ![](/uploads/2023/05/results_2_other_card_match.webp) ![](/uploads/2023/05/results_2_other_color.webp) ![](/uploads/2023/05/results_2_other_color_match.webp) ![](/uploads/2023/05/results_2_other_loser.webp) ![](/uploads/2023/05/results_2_other_match_two.webp) ![](/uploads/2023/05/results_2_other_near_win.webp) ![](/uploads/2023/05/results_2_other_small_stack.webp) ![](/uploads/2023/05/results_2_other_winner.webp) 
{{% /image-gallery %}} 

Nou, maar goed dat ik deze twee dingen gesplitst heb! We zien nu dat veel van de resultaten bij de _enkele strategie_ puur komen doordat iets goed scoort voor _jezelf_. Als je het loshaalt, en strategieën alleen van toepassing maakt op _anderen_, zie je dat de meeste helemaal niet zo handig zijn.

Maar ... dit liet me opnieuw twijfelen aan mij code. Want in dit geval worden veel dingen zelfs als _negatief_ gezien! Bijvoorbeeld, _other\_color\_match_ krijgt duidelijk "-1". Waarom zou het ineens de beste strategie zijn om juist _niet_ een tegenstander te kiezen die veel matchende kleuren heeft?

Ik ben opnieuw alles nagelopen. Ik heb de tests opnieuw uitgevoerd. Ik heb nog wat filmpjes gemaakt om te _zien_ wat er gebeurd---maar alles leek te kloppen.

Mijn beste theorie is dat heel regelmatig _scoren_ gewoon echt heel belangrijk is. Door de score van andere spelers omlaag te halen, verhoogt de computerspeler automatisch de kans dat hij scoort (in plaats van steelt). Want nu is zijn _eigen_ rating vaak de hoogste.

Dat zien we ook terug in de grafieken voor **self.**

{{% image-gallery %}}
 ![](/uploads/2023/05/results_2_self_big_stack.webp) ![](/uploads/2023/05/results_2_self_biggest_stack.webp) ![](/uploads/2023/05/results_2_self_card.webp) ![](/uploads/2023/05/results_2_self_card_match.webp) ![](/uploads/2023/05/results_2_self_color.webp) ![](/uploads/2023/05/results_2_self_color_match.webp) ![](/uploads/2023/05/results_2_self_loser.webp) ![](/uploads/2023/05/results_2_self_match_two.webp) ![](/uploads/2023/05/results_2_self_near_win.webp) ![](/uploads/2023/05/results_2_self_small_stack.webp) ![](/uploads/2023/05/results_2_self_winner.webp) 
{{% /image-gallery %}} 

Hier zien we een _sterke_ voorkeur voor wat eerst ook werkte. Ongeveer in deze volgorde:

  * Veel stapels
  * Grote stapels
  * Veel matchende _kaarten_
  * Veel matchende kleuren
  * Veel kaarten (in het algemeen)

Niet geheel verrassend, loont het ook (een klein beetje) om te scoren als je zelf aan het winnen bent (_self\_near\_win_) :p

### Een groter bereik

Ik vind de uitslag van de vorige simulatie zo raar, dat ik besloot om alleen de meest invloedrijke strategieën te pakken en die weer een veel groter bereik te geven. Met meer precisie, gebeurt er dan iets anders?

{{% image-gallery %}}
 ![](/uploads/2023/05/results_3_guaranteed_steal.webp) ![](/uploads/2023/05/results_3_offset.webp) ![](/uploads/2023/05/results_3_other_biggest_stack.webp) ![](/uploads/2023/05/results_3_other_card.webp) ![](/uploads/2023/05/results_3_other_card_match.webp) ![](/uploads/2023/05/results_3_other_color.webp) ![](/uploads/2023/05/results_3_other_color_match.webp) ![](/uploads/2023/05/results_3_other_small_stack.webp) ![](/uploads/2023/05/results_3_self_biggest_stack.webp) ![](/uploads/2023/05/results_3_self_card.webp) ![](/uploads/2023/05/results_3_self_card_match.webp) ![](/uploads/2023/05/results_3_self_color.webp) ![](/uploads/2023/05/results_3_self_color_match.webp) ![](/uploads/2023/05/results_3_self_small_stack.webp) 
{{% /image-gallery %}} 

Dit lijkt allemaal redelijk logisch. De _guaranteed_steal_ doet nog steeds weinig. De offset is belangrijk, maar we zien nu dat die niet de pan uit rijst zoals andere strategieën. Dus een lichte algemene voorkeur voor scoren is belangrijk, maar je moet niet te ver gaan.

Opnieuw zien we dat de **other** strategieën vaak omgekeerd lijken te gaan. Maar het is minder drastisch dan de vorige keer. Op veel strategieën is het zelfs _bijna_ horizontaal ( = gelijk getrokken).

De **self** strategieën geven een _hele sterke voorkeur_ aan de bekende zaken: matchende kleuren, grote stapels, veel stapels. Maar veruit de grootste voorkeur gaat naar: gewoon **veel kaarten hebben.** 

Ik denk dat dit uiteindelijk wel klopt. Als jij probeert te stelen van iemand met _veel kaarten_, maar je faalt, dan heb je diegene dus _enorm geholpen_. Nu heeft diegene volgende beurt waarschijnlijk een nóg grotere score of nóg grotere steelkans. Idealiter zou dit 50/50 zijn in een spel: het risico is de beloning waard. 

Maar blijkbaar zegt mijn simulatie het volgende: "**Het is té risicovol om te stelen van spelers met veel (matchende) kaarten of kleuren, dus als mogelijk, geef de voorkeur aan scoren.**"

Jammer, ik houd wel van agressieve spellen. Maar dit spel zegt eigenlijk op alle manieren: voorzichtig _scoren_ is meestal de beste aanpak.

### Winnende strategieën

Nu geven we speler 0 _altijd_ een combinatie van alle winnende getallen. Als het goed is, zal diegene daardoor flink vaker winnen dan de rest. (Die willekeurige strategieën blijft kiezen.) Zo niet, dan zijn deze getallen _gecombineerd_ dus niet zo sterk als op zichzelf.![](/uploads/2023/05/results_player_per_player_check.webp) 

Eeeh ik had niet verwacht dat het _zoveel_ effectiever zou zijn. Dus de grafiek is niet hoog genoeg :p Ik heb 80,000 simulaties gedaan. Dus speler 0 zal ~55,000 keer hebben gewonnen.

De "winnende" combinatie was praktisch

  * Alles op 5 voor jezelf
  * Alles op -5 (of 0) voor anderen

Ik vind dit nog steeds heel verdacht en heb de code lang nagezocht op fouten, maar niks gevonden. 

## Conclusie

Dus, **hoe win je een potje Mantis?** Door meer te **scoren** dan te **stelen.** Kijk eerst naar jezelf. Tenzij een andere speler een overduidelijk betere keuze is, kies je voor scoren.

Hierbij neem je mee, in deze volgorde (qua prioriteit),

  * Hoeveel kaarten iemand heeft
  * Hoeveel kaarten daarvan matchen met de achterkant van je getrokken kaart
  * Hoeveel unieke kleuren je hebt
  * Hoeveel kleuren daarvan matchen met de achterkant van je getrokken kaart
  * Hoe hoog de grootste stapel is en hoeveel stapels diegene heeft in het algemeen

Meer is altijd beter. De simulatie zegt, gek genoeg, dat 

  * Bovenstaande lijst _niet_ perse van toepassing is op andermans hand. Als iemand veel kleuren/stapels/kaarten heeft, is het juist een klein beetje _nadelig_ om te proberen daarvan te stelen. Blijkbaar weegt de grote beloning (voor jou) niet op tegen de beloning (voor hen) als jij faalt.
  * Als jij _gegarandeerd_ kan stelen ... is dat ook niet perse de beste zet. Soms wel, soms niet, alle simulaties laten zien dat het zo'n beetje 50/50 is.

Maar onthoudt dat dit allemaal _gemiddeldes_ zijn en dat een computer menselijke interactie (en meer gecompliceerde strategieën) niet kan meenemen. In de discussie hieronder praat ik daarover nog wat verder.

## Discussie

Het nadeel van zo'n "score" is dat onderdelen al snel tegen elkaar worden afgestreept. De gemiddelde score die spelers krijgen is vaak richting 0 en niet veelzeggend. Je mist een "definitieve" actie in sommige gevallen, zoals "als X gebeurt, dan steel ik SOWIESO van die speler".

Daarnaast mis je natuurlijk het menselijke component. Dit is niet zo'n groot probleem als in andere spellen, want het is geen blufspel of eentje met verborgen informatie. Maar, in het echt, zal men doorgaans over tafel _deals_ sluiten, of de persoon die vorig potje won extra lastigvallen, en dat soort ongein. Dat neemt zo'n simulatie natuurlijk niet mee.

Als laatste bedacht ik _na_ het compleet afmaken van dit artikel nog een aantal strategieën die misschien nuttig waren.

  * **Kaarten tellen**: door kaarten te tellen, kan je weten welke kleur het meest waarschijnlijk is. (En of een kleur überhaupt nog voorkomt.) Bijvoorbeeld, als alle blauwe kaarten al voorbij zijn gekomen, dan kan die nieuwe kaart dus geen _blauw_ zijn, ook al staat die kleur op de achterkant. Dit is natuurlijk veel werk om toe te passen terwijl je speelt, maar ik verwacht dat zoiets heel sterk zal zijn.
  * **Letten op andere spelers:** je kan natuurlijk bijhouden wat de kans is dat een ander gaat scoren/stelen, en of ze misschien een favoriete speler hebben om lastig te vallen. Op deze manier kan de simulatie veel meer die _interactie_ (en de specifieke speelstijlen) van spelers meenemen. Hoewel ik verwacht dat dit niet veel uitmaakt gemiddeld genomen.

Ik heb dit artikel _maanden_ geleden gemaakt en lees het nu terug voordat ik het definitief publiceer. (Ik had het steeds uitgesteld, met het idee dat ik nog dingen ging verbeteren, en de filmpjes mooier maken, etcetera. Maar na een _half jaar_ moest ik toch inzien dat ik er gewoon geen motivatie voor had en dat het af moest zijn.) 

Ik moet zeggen dat mijn keuzes voor strategieën inderdaad niet optimaal waren. Een aantal waren behoorlijk dubbelzinnig, terwijl ik goede opties (zoals hierboven genoemd) over het hoofd zag. Ach ja, dat laat ik dan maar voor een eventueel vervolg. Ik heb opnieuw veel geleerd over Rust en simulaties van (bord)spellen.

Andere vragen voor een vervolg zouden zijn ...

  * _Verandert er iets als je langere potjes speelt? (Dus tot 20 punten, bijvoorbeeld.)_ 
  * _Verandert er iets met twee spelers?_
  * _Zijn je beginkaarten belangrijk?_ _(Tel met hoeveel unieke kleuren iemand begon, check hoe vaak diegene wint.)_

Verder denk ik dat er weinig valt aan te merken op de simulatie. Het neemt vrijwel alles mee in jouw rating dat je zou _kunnen_ overwegen. De onderdelen waarop we uitkomen zijn vrij snel uit te rekenen en winnen erg vaak. Ook is Rust een taal die je dwingt om behoorlijk netjes te programmeren, dus zelfs een half jaar na dato kon ik vrij makkelijk de laatste aanpassingen doen en filmpjes maken.

Voor nu stoppen de simulaties even, want mijn laptop heeft het echt helemaal gehad. Ik zou graag minstens 100,000+ simulaties doen, maar dat duurt echt véél te lang inmiddels. (En ik moet misschien focussen op dingen die mij inkomen opleveren, in plaats van obscure kaartspelletjes in detail analyseren alsof ik een wetenschappelijk paper schrijf.)

Rest nu natuurlijk de vraag of dit een potje Mantis leuker maakt voor jou of niet :p (Zoals altijd, ik doe deze simulaties deels om te oefenen met Rust, en deels om meer te leren over spellen ontwikkelen in het algemeen. Als ik een spel speel, denk ik nooit aan die beste strategie die ik vond in mijn simulaties.)

 [1]: /blog/2023/2023-03-12-exploding-kittens
 [2]: https://drive.google.com/drive/folders/1FJacoBYK8oBsUw6J3IPjKZlgGo7YboaZ