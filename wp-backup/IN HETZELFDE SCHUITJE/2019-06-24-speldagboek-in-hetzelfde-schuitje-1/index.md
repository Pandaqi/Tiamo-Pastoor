---
title: '[Speldagboek] "In hetzelfde schuitje" #1'
author: tiamopastoor
date: 2019-06-24T16:00:12+00:00
language: nl
thumb: /uploads/2019/05/Pirate-Map-02_result.webp
categories:
  - Games

---
Welkom bij het speldagboek van "In hetzelfde schuitje!" (Men noemt zoiets ook wel een "developer diary" of "devlog".)

In deze artikelen leg ik uit hoe dit spel tot stand is gekomen. Ik beschrijf het ontwikkelingsproces, problemen die ik had, grappige dingetjes, en nog meer!

Ik weet nog niet of "in hetzelfde schuitje" de titel gaat worden. Het is meer een werktitel. Het werkt wel in het Engels---_In the Same Boat_---dus voor nu is dit de projecttitel.

## Wat voor spel is het?

Misschien ben je bekend met de Jackbox spellen. Deze spellen start je op (met je computer), waarna alle aanwezigen met hun mobieltje kunnen verbinden en spelen. Een bekend voorbeeld is het "tekenspel". Iedereen tekent iets op zijn mobiel, vervolgens verschijnen deze plaatjes één voor één op het grote scherm (de computer), en mag iedereen op hun mobiel raden wat het moet voorstellen.

Deze spellen zijn enorm populair bij mijn familie en vrienden. Het is een hele makkelijke manier om spellen met grote groepen te spelen, zonder dat je veel hoeft op te zetten, uit te leggen of te kopen.

Een half jaar geleden dacht ik "hmm, zou ik ook zo'n soort spel kunnen maken?" Het antwoord: ja! Ik maakte een website (met de naam "Trampolinedraak") waarmee je een spel kon opstarten, en vervolgens iedereen met zijn mobiel kon spelen. Binnen een maand had ik het "tekenspel" nagemaakt.

Dit project, _In hetzelfde schuitje_, is de volgende stap. Weer een spel voor (grote) groepen, waarbij iederen op z'n mobiel speelt, maar dan nog veel gaver!

## Wat is het idee?

In dit spel wordt iedereen in een bootje gestopt en in een (willekeurig gegenereerde) wereld gedropt.

Wat is het probleem? Je zit niet in je eentje in de boot! **Je zit samen met enkele andere spelers in dezelfde boot.**

Iedereen heeft een eigen unieke "rol" op de boot, waardoor je goed moet samenwerken en je taken moet vervullen om je boot overeind te houden.

Zo heb je de rol van **First Mate** (stuurman). Jouw enige taak is de boot sturen, door op je mobieltje het roer te draaien. Maar, je hebt geen enkele andere informatie. Hoe weet je waar je bent en waar je heen moet? Daarvoor is de **Cartographer**. Deze zit als het ware in het kraaiennest en kan als enige de kaart/wereld zien. Alsof dit nog niet genoeg was, heb je ook nog de **Sailor**. Deze is de baas over de bemanning. Hoe meer bemanning hij inzet, hoe harder het schip vaart.

Zoals je ziet is goede communicatie en samenwerking van levensbelang!

Zoals ik het hierboven schrijf, was het originele idee. Ik wist nog niet hoe je kon winnen (de schepen van de andere spelers vernietigen? de schat vinden?), ik wist nog niet de andere rollen of hoe de wereld eruitzag. Maar dit idee alleen al vond ik veelbelovend.


## Turn-based vs Real time

Ah, het eeuwenoude conundrum.

**Real time** betekent dat alles tegelijkertijd gebeurt, meteen. Als jij op het knopje drukt om de kannonen te schieten, moet je (vrijwel) meteen op de computer zien dat er kogels naar je tegenstander vliegen. Als jij het roer omgooit, gaat je boot meteen die kant op varen.

> Online schietspellen, bijvoorbeeld, zijn real time. Het is niet dat jij twee minuten hebt om te schieten, dan je tegenstander twee minuten, en dat het zo om de beurt gaat.

**Turn-based** betekent dat het spel in beurten werkt. Eerst doet het ene schip van alles, dan pas het andere schip, dan het volgende schip, en zo doet iedereen om de beurt zijn ding.

Nou, dat werkt natuurlijk voor geen meter. Het leuke aan deze spellen is juist dat iedereen tegelijkertijd op zijn mobiel dingen kan doen.

Daarnaast zijn samenwerkingsspellen op z'n best als er tijdsdruk op zit. Dan moet je snel beslissingen nemen, kun je fouten maken, elkaar juist helpen of hinderen, etc.

Dus ik ben gegaan voor een _mix_ van beide ideeën:

  * Het spel werkt in rondes/beurten. Elke ronde is even lang (bijv. 2 minuten)
  * Tijdens een ronde kan iedereen van alles doen. Je kunt overleggen, het roer de ene kant opdraaien en een halve minuut later weer de andere kant op, etc. 
      * Alle spelers/schepen doen dit tegelijkertijd. Je hoeft niet op elkaar te wachten. Zolang je maar binnen die 2 minuten doet wat je wilde doen.
  * Als de tijd om is, verzamelt de server alle informatie, en voert alles uit wat de spelers hebben ingesteld. 
      * Stel twee schepen zijn elkaar tegengekomen en een gevecht begonnen. Allebei hebben ze op de knop "fire!" gedrukt. Pas als de beurt voorbij is, gaat de server dit verzoek uitvoeren en beide schepen op elkaar laten schieten. Aan het begin van de volgende beurt zijn de resultaten zichtbaar.
  * Als hij klaar is met uitrekenen, stuurt hij de nieuwe situatie terug naar de spelers, en dan begint de volgende beurt!

Dit gaat door totdat een schip heeft gewonnen.

## De wereld

Dit spel kon alleen werken als ik snel een goede wereld kon genereren.

  * **Waarom snel?** Dit is een _online_ spel. Iedereen stuurt de hele tijd signalen naar de server (via z'n mobiel) en moet signalen ontvangen. Als het meerdere secondes duurt om de wereld te maken, te sturen, of te laten zien, dan valt het hele spel uiteen.
  * **Waarom goed?** Die lijkt me logisch. Een interessante wereld maakt het leuk om deze te ontdekken, om erin rond te varen. Het maakt het spannend om eilanden tegen te komen of andere schepen.

Gelukkig had ik hier wat ervaring mee. Hoe genereer je random werelden? **PERLIN NOISE!**

Deze functie vraagt om een willekeurig getal (de _seed_). Vervolgens maakt hij hiervan een plaatje met op het eerste oog "willekeurige ruis". (Als je dezelfde _seed_ erin stopt, krijg je altijd precies hetzelfde plaatje.)

Maar deze ruis heeft een mooie eigenschap: hij is geleidelijk. Je kunt groepjes zien van ongeveer gelijke waarde. Wat kunnen we hiermee? Nou, we zeggen: "zo'n groepje is een **eiland**, de rest is **water**".

En dan krijg je dit:

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1559222195/Pirate_Map_01.png" /> 

Mooi hè? We hebben eilanden, stranden op de rand, ondiep water (lichtblauw) en diep water (donkerblauw). Allemaal met een paar regeltjes code.

**Opmerking:** deze kaart moet je zien als een "speelbord". Je schip staat op één van deze vakjes, daarom is het opgedeeld in vierkantjes. Om dit te bereiken moet je ver inzoomen op je Perlin Noise! (Dit realiseerde ik pas laat. Al mijn eerdere pogingen waren mijn eilandjes té geleidelijk, waardoor ze meestal de hele kaart in beslag namen. Door verder in te zoomen, wordt de ruis automatisch "blokkerig", en krijg je blokkerige eilanden.

Nou is dit een beetje een grote wereld, dus ik testte meteen of het op iets kleinere schaal ook werkte:

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1559222349/Pirate_Map_02.png" /> 

Magnifico! (Ja, eilandjes van één stip zijn niet zo mooi, die ga ik later nog weghalen. Dit waren slechts de eerste testen.)

**Opmerking:** een tweede reden waarom ik een kleinere kaart wilde, is omdat het goed zichtbaar moet zijn op een gemiddeld computerscherm. Als de vakjes te klein worden, kun je nauwelijks van een afstand zien wat wat is, en waar jij/je tegenstanders staan.

## De smartphone interface

Het tweede cruciale onderdeel was een duidelijke, goed leesbare en bruikbare interface op de mobiel.

Ik wist dat ik veel moest laten zien op de mobiel. Iedereen moest switchten tussen meerdere rollen en tegelijkertijd informatie kunnen zijn van het eigen schip.

Dit was de eerste test met de interface:

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1559222610/Controller_Interface_01.png" /> 

Voor de duidelijkheid, dit is wat de verschillende elementen doen:

  * Bovenste balk = naam + vlag + kleur + _health_ van het schip. Als het schip schade oploopt, zal die blauwe balk steeds meer krimpen.
  * Bruine balk = goederen op het schip. Vanaf het eerste moment had ik 4 goederen in gedachten: goud, hout, kanonskogels, bemanningsleden.
  * Gele balk = de rollen die je hebt (je kunt hierop klikken om te switchen)
  * Bruine gebied eronder = de specifieke knopjes/tekst voor de geselecteerde rol.

Ik heb vier opmerkingen:

  * Dat piratenlettertype maakt het helemaal af :p
  * Ik gebruik nu even een random plaatje van een piratenvlag dat ik online vond als "placeholder"
  * Normaal gesproken ziet een spel er niet zo goed uit vanaf de eerste paar tests. Het is zelfs aan te raden om eerst het spel zelf zo goed mogelijk te maken, en daarna pas te focussen op de visuele kant. Maar ik ben een grafisch ontwerper, ik kon het niet laten.
  * Dit is me net iets te vol.

Je ziet nu al dat je sommige plaatjes niet kan zien, omdat de ruimte te klein is. Maar waar kan ik ruimte erbij krijgen?

Dit waren mijn beste ideeën:

  * De **NAAM** van de rol hoeft er niet perse bij. Als ik bijvoorbeeld een icoontje maak van een kaart, dan lijkt me duidelijk dat die de "cartograaf" moet voorstellen. 
      * Vervolg idee: alleen de _geselecteerde rol_ laat de naam zien (en neemt tijdelijk iets meer ruimte in)
  * De **GOEDEREN** hoeven niet voor iedereen zichtbaar te zijn! 
      * Dit idee vond ik leuk, omdat het niet alleen de interface beter maakt, maar ook het spel. Na wat denkwerk besloot ik om de goederen op het schip alleen zichtbaar te maken voor de **kapitein**. Als anderen willen weten of er genoeg hout aan boord is, bijvoorbeeld, moet de kapitein dat voor hen checken. Zorgt voor iets meer samenwerking en communicatie.
      * Het zorgt ook dat de server minder hoeft te doen, want het hoeft de goederenstand nog maar naar één speler te sturen.
      * Dus deze balk kan weg! Wiehoe!

Hoe ziet dit eruit?

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1559224016/Controller_Interface_02.png" /> 

Much better. Het past bij de rol/functie van de kapitein in het spel en maakt de interface een stuk overzichtelijker/minder intimiderend. (Een goede test is altijd als mijn vader/moeder mijn spel bekijkt en vraagt "is dit---eh---voor alle leeftijden?" Dan weet je dat het misschien wat groter/leesbaarder/duidelijker kan.)

Daarover gesproken ... wat is eigenlijk de rol van de kapitein? :p

**Opmerking:** ja, dat kopje van "resources" kan veel mooier enzo, maar daar ligt de prioriteit nu totaal niet.

## Rolverdeling

Mijn idee dat ik aan het begin vertelde, is op dit moment eigenlijk nog niet veel verder uitgewerkt. Wat ga je eigenlijk doen in het spel? Wat zijn de rollen en hun functies?

Dit was verrassend moeilijk om te bedenken. Meestal ben ik goed met rollen (ik hou van bordspellen/computerspellen met een bepaalde rolverdeling), maar nu kwam ik er niet zo goed uit.

Uiteindelijk besloot ik om het spel op te delen in meerdere moeilijkheidsgraden. Sommige rollen die ik bedacht waren té complex/specialistisch om maar meteen in het spel te gooien. Die zijn echt voor mensen die al twintig potjes hebben gespeeld en iets extras willen.

(Ik dacht er bijvoorbeeld aan om voedsel/water toe te voegen aan het spel. Je moet te allen tijde genoeg aan boord hebben, anders dan sterf je van de honger! Om aan dat voedsel te komen, moet je weer met verschillende rollen samenwerken, zoals de visser en de kok. Maar dat is té lastig voor beginners.)

Ik stelde mezelf de vraag: wat is de "core experience" van dit spel? Wat wil ik dat spelers het meeste aan het doen zijn in het spel? Waar zullen ze het meeste van genieten, vanaf het allereerste potje?

Het antwoord: **ontdekken** en **vechten**.

Het spel moet een piratensfeer hebben. Je vecht met andere mensen, probeert schatten te ontdekken, verslaat zeemonsters, bouwt een bepaalde reputatie op, etc. Ik wil dat een groot deel van het spel voelt als een _avontuur_ en een _ontdekkingsreis_.

Hiervoor had ik twee dingen nodig: je moet je schip goed kunnen **verplaatsen** en je moet goed kunnen **schieten**.

Hieruit rolden de volgende 5 rollen:

  * **Captain:** weet welke goederen aan boord zijn, weet wie zijn bemanning is (en kan deze van boord gooien als hij wil), en neemt de _belangrijkste beslissingen_. Als er een schip in de buurt is, krijgt de Kapitein de knop om te vuren (zoals je kon zien in de plaatjes hierboven). Een andere rol laadt de kannonnen op, maar de Kapitein heeft het laatste woord: vuren of niet. Datzelfde geld voor andere grote beslissingen, zoals aanmeren bij een haven/eiland.
  * **First Mate:** stuurt de boot. Heeft een kompas waaraan hij kan draaien. 
      * In het echt kan een boot niet zomaar 180 graden draaien. ("We moeten achteruit!" "Hopsakee, we zijn omgedraaid en op volle snelheid achteruit!") Het leek me dan ook logisch om dit in het spel door te voeren. Het kompas kan in het begin maar een klein beetje draaien, maar gedurende het spel kan je die upgraden, waardoor je wendbaarder wordt.
  * **Cartographer:** heeft een "verrekijker" waarmee hij in de omgeving kan kijken. Hij is de _enige_ die de kaart kan zien. Aan het begin kan hij slechts één tegel om het schip bekijken, maar hij kan zijn verrekijker upgraden om meer te kunnen zien.
  * **Sailor:** is verantwoordelijk voor het schip op snelheid houden. Hij kan de zeilen hijsen naar verschillende hoogtes (en zo de snelheid van het schip bepalen). Als de wind niet meewerkt, kan hij mensen aan het roeien zetten, hoewel dat véél mankracht kost. 
      * Ook hij begint met "slechte zeilen" (en weinig mankracht), maar kan upgraden.
  * **Weapon Specialist:** hij beheert de kannonnen. Hij moet ze kopen, upgraden, en opladen met kogels. 
      * Je begint met één kanon in een bepaalde richting, die slechts 2 tegels ver kan schieten.
      * Gedurende het spel kun je meer kannonen kopen (die in andere richtingen schieten) en ze verder laten schieten.

Afhankelijk van het spelersaantal, ga je met zo'n 2 tot 5 spelers in dezelfde boot zitten. Dus meestal heb je 2 rollen om te besturen, met soms iets minder (1) en soms iets meer (3). Dat vond ik simpel genoeg.

## Nu het zware werk

Met deze ideeën uitgewerkt, moest ik beginnen met programmeren. Er was nog veel om te bedenken/bepalen, maar op dit moment had ik al weken in het spel gestopt, en nog niet eens een werkende server. Dus ik moest maar eens een beginnetje maken.

Dat is natuurlijk niet zo spannend om te laten zien. (Plaatjes van computercode lijken me niet leuk om hier te showen :p)

Dus ik ga hard aan het werk en dan tot het volgende dagboek! (Daarin ga ik meer laten zien van de verschillende interfaces en iets verder bouwen aan de wereld.)

&nbsp;