---
title: Pirate Riddlebeard
author: tiamopastoor
date: 2022-07-17T14:00:00+00:00
language: nl
thumb: /uploads/2022/07/pirate_riddlebeard_header.webp
categories:
  - Games

---
Ik had het ook niet verwacht, maar er is weer een nieuw bordspel op mijn website verschenen!

Het begon met een interesse in iets dat ik "logische puzzelspellen met unieke hints" noem, en eindigde uiteindelijk met dit project.

## Wat is het idee van dat soort spellen? 

Je krijgt een gezamenlijke kaart. Je doel is om als eerste één speciaal vakje te vinden. In dit geval is het natuurlijk de **locatie van de schat.**

![](/uploads/2022/07/NDHU-Riddlebeard-Map.png) 

Hoe doe je dat? Elke speler krijgt ook een _geheim_ kaartje met _hints_. Bijvoorbeeld: 

  * "De schat ligt niet naast een BOOM." 
  * "De schat ligt in het GRAS _of_ de WOESTIJN."

Iedereen heeft andere hints, maar als je ze allemaal kent, wijzen ze precies naar het vakje met de schat.

Tijdens het spel probeer je dus te ontrafelen wat andere spelers weten, terwijl je zelf zo min mogelijk weggeeft, om dat ene speciale vakje te vinden.

(Door het maken van dit project vond ik vele variaties en verbeteringen op het concept. Dus je kan in de toekomst meer spellen in dit genre verwachten, maar dan ... tja, beter en verder ontwikkeld.)

## Waarom heb je dit gemaakt?  

Ik was benieuwd _hoe_ je zulke spellen maakt. Hoe laat je de computer een willekeurige kaart maken, inclusief een lijstje simpele hints die precies één vakje aanduiden? Dus dat heb ik uitgevogeld. 

En toen schreef ik de code om dit te doen. En toen maakte ik er een spel omheen om het te testen.

(Ik _probeer_ de gewoonte te onderhouden om alles dat ik begin ook helemaal af te maken. Dus het algoritme was eigenlijk maar 25% van het werk. De andere 75% was het maken van tekeningen, spelregels, mooie voorpagina, etcetera.)

## En waarom is dat zo interessant?  

Dit soort spellen hebben superveel voordelen!

  * **Simpel.** Elke beurt doe je één simpele actie: je kiest wat vakjes en vraagt iemand of, volgens diens hints, de schat daar kan zijn. 
  * **Interactief.** Iedereen blijft altijd bezig met het spel, want je moet constant andermans vragen beantwoorden, en je wilt die antwoorden horen zodat je verder kan puzzelen.
  * **Snel.** De kaart is vrij klein, de beurten simpel, dus je zal niet al te lang hoeven spelen.
  * **Thematisch.** Een zoektocht naar een schat, aan de hand van een stel raadsels verspreid over de spelers ... dat snapt iedereen.
  * **Praktisch**. ****Je kan het hele spel spelen door simpelweg wat papieren en pennen te pakken, en de website te openen op een mobiel.

Al het _moeilijke_ werk zit in dat algoritme dat spellen genereert en de website die je begeleidt bij het opzetten van het spel. Oftewel, alle spelregels en moeilijke dingen zitten _aan de voorkant_, _bij mij_. Niet bij de spelers. Dat is een onbeschrijflijk groot voordeel.

## Waar kan ik het spelen? 

Bezoek de officiële link op mijn spellenwebsite: [Pirate Riddlebeard][1]

De "Download" knop leidt je, zoals bij al mijn spellen, naar een folder met de _spelregels_ en eventueel _voorgemaakte spellen_ (als je liever helemaal offline speelt).

Zoals altijd: geef het een kans, als je een fout/verbetering vindt laat het weten.

## Is het echt zo leuk? 

Ja! Tot mijn eigen verbazing, moet ik eerlijk zijn. Ik dacht dat het leuk was voor mensen die echt van _puzzelen_ en _raadsels_ en _logica_ houden, dat je toch grotendeels in stilte dingen probeerde uit te vogelen.

Maar het spel is eigenlijk heel interactief en breed toegankelijk. Ik heb daar expres moeite voor gedaan, maar wist niet dat het zo goed gelukt was.

(Andere spellen in hetzelfde genre zijn vaak zo logisch en strikt. Ik wilde dat veranderen, dus ik voegde bijvoorbeeld een actie toe waarbij je in het _geheim_ informatie kan krijgen. En na elke ronde heb je de kans om hints uit te wisselen of een hint van jezelf bekend te maken voor een grote beloning. Veel meer interactie, veel meer strategie omtrent wat _andere_ spelers doen of weten.)

Natuurlijk zaten er wat fouten in de eerste versies. Dus ik moest de spelregels meerdere keren aanscherpen.

Maar uiteindelijk kan je dit spel in 5 minuten uitleggen en in 30-45 minuten spelen. Terwijl iedereen constant iets te doen heeft en het steeds spannender wordt richting het einde. 

(Mijn testspelers leerden al snel dat je niet hardop moet uitroepen "oh ik weet nu waar de schat ligt!". Want dan gaan de anderen snel proberen om je voor te zijn. Ze gaan gokken waar de schat is, ook al hebben ze misschien nog vijf vakjes over. Bij het eerste potje won letterlijk de speler die géén idee had waar de schat was, omdat alle andere spelers zó bang waren dat ze te laat zouden zijn, dat ze te vroeg gingen gokken en dus veel informatie weggaven :p)

## Ging het allemaal zo makkelijk? 

Nee, natuurlijk niet. Ik moest weer ambitieus zijn. (En het is de eerste keer dat ik zo'n soort spel maak.)

Andere spellen in dit genre hebben vaak slechts een handjevol "soorten hints" die kunnen verschijnen, en een kaart die (grotendeels) vaststaat.

Mijn spel heeft een lange lijst met unieke hints die je kan krijgen. En de kaart is altijd compleet anders en ter plekke verzonnen. (Maar ik wilde wel _mooie_ kaarten, niet alleen _functioneel_.)

Je hebt dan natuurlijk geen enkele zekerheid _dat een oplossing bestaat_. Het kan zijn dat je een kaart maakt waar geen enkel vakje aan te duiden is met een lijst hints. Of de lijst is te kort (je hebt maar één hint nodig om precies de schat te vinden) of te lang (je hebt dertig superspecifieke hints nodig).

Dus het algoritme moet (zeer) regelmatig opnieuw beginnen, wat in het ergste geval betekent dat je 5-10 seconden moet wachten voordat je spel klaar is. Niet ideaal, wel acceptabel.

Daarnaast vind ik het belangrijk om spelers alle keuze in handen te geven. Dus je kan zelf alle onderdelen van spellen aan/uit zetten, inclusief een paar (piepkleine) "uitbreidingen". Dit maakte het ook een stuk lastiger. Want ineens bestaat de mogelijkheid dat iemand wél stenen wil, maar géén paden, maar wél natuur, etcetera ... en de code moet maar blijven werken.

## Een interessante vondst 

Maar er is ook goed nieuws!

Ik heb inmiddels geleerd hoe handig het is om die "voorgemaakte spellen" aan te bieden. 

Voor mensen die niet online kunnen, of expres offline willen spelen, of niet begrijpen wat ze moeten doen op de website om een spel te starten---een waslijst aan redenen.

Maar om _met de hand_ een stuk of 100 PDF bestanden samen te stellen met _hintkaartjes_ (om uit te knippen) was natuurlijk geen optie.

Dus ik schreef een stukje code om het voor mij te doen. 

Ja, dat lees je goed: de website genereert ter plekke een PDF met het _materiaal_ voor het spel! Nog een stap verder dan wat ik ooit eerder heb gedaan!

In dit geval is het heel simpel: het plaatst de achtergrond voor hintkaartjes ( = een plaatje dat ik met de hand heb getekend), plakt er de tekst overheen ( = de hints zelf), en zet het in een nieuwe pagina in de PDF.

![](/uploads/2022/07/NDHU-Riddlebeard-Hints.png) 

Maar zie je de potentie? Zie je wat je hiermee kunt? 

Je kan een spel maken waar letterlijk _elke keer als je het speelt_, het spel _compleet anders en uniek is_, want het _materiaal is willekeurig gegenereerd._ 

Bijvoorbeeld: denk aan een kaartspel. In plaats van vaste kaarten te hebben, kan ik de kaarten door de computer laten maken. Je gaat naar de website, drukt op de knop, krijgt een PDF met een hele hoop speelkaarten. Die knip je uit en voilà: je hebt een versie van dit spel met compleet unieke kaarten, die niemand anders ooit zal spelen.

Je hoeft maar één keer de spelregels te lezen, of te begrijpen wat stukjes van de kaart betekenen. Daarna kan je eindeloos veel unieke varianten op het spel spelen, gratis en voor niets! (Nou, ja, behalve printkosten dan.)

(Iets soortgelijks is al in 2018 gedaan met _KeyForge_: elk deck kaarten dat je koopt is willekeurig gegenereerd, volgens een paar simpele regels om te zorgen voor balans en speelbaarheid. Bijvoorbeeld: als een van je kaarten goed samenwerkt met een draak, maar je hebt geen enkele draak in je deck, is dat natuurlijk behoorlijk zinloos en wordt het deck afgewezen. Dat spel is behoorlijk succesvol geworden! Dus het kan!)

## Conclusie 

Nee, dit spel is niet _wereldschokkend geweldig_. Het heeft wat ruwe randjes. Het is niet voor iedereen. Het neemt héél veel inspiratie van bestaande spellen in deze categorie. Ik had zo weinig energie dat de meeste tekeningen in een uur of twee in elkaar zijn gezet.

Maar het is wel een afgemaakt, werkend, nieuw spel dat leuk is en makkelijk te spelen! Dat is vooral waarom ik deze spellen maak. Om bordspellen meer toegankelijk te maken. Goedkoper, sneller, simpeler, je hebt alleen wat papier (en eventueel mobiel met internet) nodig voor een volledig spel.

En het leerde me technieken om zulke spellen nóg een stap verder te brengen.

Het is jammer dat je er letterlijk geen geld mee kan verdienen. Anders zou ik veel meer van deze projecten maken. Voor nu blijft het bij een verrassing eens in de zoveel tijd.

 [1]: https://pandaqi.com/pirate-riddlebeard