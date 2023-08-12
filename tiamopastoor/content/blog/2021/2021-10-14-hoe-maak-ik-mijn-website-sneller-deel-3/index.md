---
title: Hoe maak ik mijn website sneller? (Deel 3)
author: tiamopastoor
date: 2021-10-14T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is deel 3 van mijn reeks over hoe ik mijn (vele) websites sneller, moderner en gebruiksvriendelijker heb gemaakt. Begin bij deel 1 hier: [Hoe maak ik mijn website sneller?][1]

## Alles kan later

Oké, dus de websites zijn een stuk _kleiner_. Scheelt mij serverruimte, scheelt de bezoeker tijd, maakt alles een stuk leuker en sneller.

Maar dat is niet alles wat we kunnen doen. 

We zijn namelijk nog steeds een hoop plaatjes aan het laden, en scripts, en functionaliteit ... _voordat de bezoeker het nodig heeft_. De laatste jaren heeft men geleerd hoe snel websites kunnen zijn als je gewoon eerst de cruciale dingen laadt (de tekst zelf en een minimale opmaak) en dan later ergens de rest.

Dus dat doe ik nu ook.

### Boosdoener #1: Lettertypes

Dit blog heeft 4 lettertypes. Hoofdtekst (wat je nu leest), titels, cursief en speels (bijvoorbeeld in het logo bovenaan), en code (voor als ik een stukje code of computertaal geef). Dat is veel; elk lettertype is ongeveer even groot als een gemiddeld plaatje, zo niet groter.

Eerst laadde ik die allemaal vantevoren---want ik wist niet dat het anders kon, en je hebt lettertypes best wel nodig toch?---maar dat hoeft dus niet!

Dit los je op in twee stappen:

  * Geef elk lettertype een alternatief in je code. Dit alternatief moet een lettertype zijn dat _op vrijwel alle computers staat_, zoals Arial.
  * Plaats de laadcode van je lettertypes _helemaal aan het einde_ van je bestand. Zo worden ze pas geladen als de hele website er al staat. Na een halve seconde is de data binnen en _switcht_ je browser netjes naar de juiste lettertypes.

Toen ik dit deed, werden al mijn websites 1+ seconde sneller, en ging mijn score (op van die snelheidstests) 10-20 punten omhoog. Terwijl je niks inlevert!

### Boosdoener #2: Niet-essentiele dingen

Dit blog heeft, bijvoorbeeld, een "inhoudsopgave" plugin. Die maakt voor elk artikel (waar ik het aanzet) een inhoudsopgave bovenaan met links die je kan klikken. Die plugin heeft dus z'n eigen stukjes _code_ en _opmaak_ die het wil gebruiken.

Eerst laadde ik dat aan het begin van de pagina, zoals je meestal dat. Maar ... als je erover nadenkt ... het is niet _essentieel_ dat de inhoudsopgave vanaf het begin perfect eruit ziet. Het is prima als dit stukje pas mooi of kloppend is _nadat de rest van de pagina is geladen._ Dus dit kan naar het einde.

Naast simpelweg _verplaatsen_, heb je inmiddels ook een aantal simpele woordjes die je kunt gebruiken (`defer` en `async`) als _volgorde niet uitmaakt_ en je het prima vind als een bestand _ergens een keer binnenkomt bij de bezoeker_.

(Dit kan dus niet altijd en je moet even uitkijken. Het kan best dat een van mijn websites ergens een keer breekt de komende weken, omdat ik zoveel hiermee heb lopen klooien. Laat het dan even weten.)

### Boosdoener #3: Plaatjes buiten zicht

Jij bent aan het begin van een artikel. Helemaal aan het einde staat een plaatje. Hoef ik die nu al te laden? Nee!

Dit heet **lazy loading**. Door simpelweg "loading=lazy" bij je plaatjes te zetten, worden ze pas geladen _als de gebruiker ze ziet._ Bij WordPress staat dit automatisch aan (thanks!), bij de andere websites moest ik wat meer moeite doen.

Maar, wederom, op grotere pagina's kan dit een verschil van _meerdere secondes betekenen_. Terwijl je niks inlevert, want ja, je hoeft het plaatje niet te laden als hij niet wordt gezien.

(Ergens is het belachelijk dat dit niet de _standaard_ is en pas jaren later is verzonnen. Maar ach, het internet is ook nog jong.)

## Conclusie

Door simpelweg alles naar een later moment te verplaatsen, is de "speed score" van **dit blog** nu 87. (Het laadt 2-3 seconden sneller dan voorheen. Bovendien kan je het al lezen/scrollen/gebruiken vóórdat _alles_ is ingeladen.)

Voor **Pandaqi** (spellenwebsite) is het 97. (Hieronder, en in het laatste deel van deze reeks, leg ik uit hoe dit tóch een statische website werd en en welke verbeteringen daaruit voortvloeiden.)

Voor het bijbehorende **blog** is het 100! (Maar die gebruikt dus een statische omgeving én is kleiner.)

Voor **El Troubadour** (muziekwebsite) is het ook 100! (Die website is ook behoorlijk klein, aangezien de muziek zelf natuurlijk op streamingsdiensten staat, en veel meer hoeft de website niet te doen.)

Voor **Rode Panda** (portfolio) is het 92, ondanks de _meer dan vijftig_ plaatjes in het grid op de voorpagina.

{{% remark %}}
Het is overigens wel hilarisch dat **Pandaqi Tutorials**---mijn oudste website, met de grootste rotzooi aan code en samengeplakte systemen, een nette 87 scoort op de voorpagina.
{{% /remark %}}

{{% remark %}}
Waarom? Er zijn geen traditionele plaatjes. Alle plaatjes zijn een "vector graphic", die ter plekke door de computer worden uitgerekend en dus geen ruimte innemen. Daar had ik toentertijd dan wél goed over nagedacht xD (Natuurlijk, dit heeft andere nadelen en kost extra moeite, daarom heb ik er nu niet meer voor gekozen.)
{{% /remark %}}

En daarvoor hoef je dus niets in te leveren. Ik heb niets "uitgezet" of "opgegeven". Het enige nadeel is dat nu, als je de website _voor het eerst laadt_ op _langzaam internet_, je voor 1 of 2 seconden alleen de tekst ziet. (De website _zonder_ opmaak.) Maar dat is meer dan acceptabel.

En de grootste reden van mijn "lagere" speed score? Mijn krakkemikkige server :p Die doet er vaak een seconde over om te reageren op een verzoek. Dáár gaat nu alle tijd verloren. Zodra het verzoek binnen is, komt de website razendsnel terug.

### Update

Soms hè ... geloof ik niet in de toevalligheid van het universum. 

Ik ben net bezig met dit artikel schrijven, net begonnen met mijn websites opschonen, krijg ik een aanbod van mijn provider om gratis te upgraden! 

(Natuurlijk, zodra mijn huidige termijn voorbij is ga ik wel gewoon de nieuwe prijs betalen voor mijn server. Maar voor nu betekent het zeven gratis maanden met een betere server.)  
  
Dus ik heb het gedaan. Vijf minuten na de upgrade opnieuw getest, en dit blog scoort een prima 95. (Met als grootste kritiekpunt dat één van de plaatjes te groot is en _iets_ kleiner zou kunnen zijn. Weet je, als dat de problemen zijn, heb ik het idee dat ik wel kan stoppen met optimaliseren.)  
  
En nee, er is geen manier waarop zij konden weten dat ik hiermee bezig was, want dit artikel stond nog niet online en al het werk tot nog toe was niets meer dan de hele normale routine van "plaatjes uploaden, plaatjes verwijderen".

## Functionaliteit: lessen geleerd

### Houd de complexiteit onder controle

Mijn spellenwebsite heeft een leuk trucje. De _kleuren_ per spel (de tekst, de achtergrond, etcetera) worden _ter plekke bepaald_. Ik heb een stukje code dat het logo van het spel leest, de meest voorkomende kleuren pakt, en daar willekeurig drie kleuren uit neemt (die contrasteren).

![](/uploads/2021/09/pandaqi-website-1_result.webp) 

Het werkt ... grotendeels. Soms is de combinatie niet zo mooi of slecht te lezen. Soms past het perfect en ziet het er geweldig uit. Het idee is leuk, de variatie is interessant, maar ... dit gaat weg.

Mensen bezoeken mijn spellenwebsite niet vanwege de _website_. Ze bezoeken hem vanwege de spellen. Ik moet indruk maken, en mooie ontwerpen laten zien, _via de spellen en diens logo_. De website zelf is niets meer dan het kanaal waardoor mensen mij vinden en de spellen vinden.

Dat is wat ik heb geleerd de laatste jaren. En hetzelfde geldt dus ook voor mijn portfolio.

Ik kies gewoon één ontwerp, één kleurenschema, en een simpele website die makkelijk te navigeren is. Natuurlijk kan ik per spel nog wel de kleuren veranderen, maar niet meer dynamisch of "random". Ik codeer het systeem zodat ik zelf een kleur kan invoeren die hij gebruikt, altijd, voor een bepaald spel. Een goed ontwerp heeft een balans tussen variatie/dynamiek en statische/handgemaakte elementen.

Functionaliteit gaat voorop. Je moet denken vanuit de bezoeker---"waarom komt diegene naar de website en wat wil diegene bereiken?"---en zorgen dat de website het _allersnelste pad_ heeft naar dit einddoel. Als het er ook nog leuk en spectaculair uitziet, top! Maar het is niet het hoofddoel en het moet niet in de weg zitten.

Sinds ik begin dit jaar mijn blog een nieuw thema heb gegeven, is het aantal bezoekers én het aantal mensen dat reacties achterlaat geëxplodeerd. De grootste groei (in korte tijd) sinds het begin van het blog. En dat komt niet omdat ik ineens geweldige dingen schrijf, of meer schrijf, of iets dergelijks. (Denk ik.) Dat komt omdat dit nieuwe thema daadwerkelijk duidelijk is, goed leesbaar, en makkelijk te navigeren van begin tot eind.

En de website laadt sneller :p 

Misschien denk je na al dit gedoe: _zó ultrabelangrijk is het toch ook weer niet om een ultrasnelle website te hebben!?_ 

Maar het antwoord is: jawel, dat is extreem belangrijk. Eerste impressies zijn belangrijk. Mensen op het internet hebben in het algemeen geen geduld of concentratiespanne. Als tussen _elke klik/pagina_ een soort vertraging zit, begint dat snel te irriteren en zoeken mensen wel een andere plek. 

Het is alsof je op knopjes drukt om je magnetron in te stellen ... maar tussen elke druk en de reactie zit 3 seconden. Binnen de kortste keren heb je een hekel aan die magnetron. Je gebruikt hem steeds minder en minder, zoekt manieren eromheen, want je hebt geen zin in dat gedoe. Nou, dát gebeurt dus ook met trage websites. 

Er zijn heuze onderzoeken hiernaar gedaan, hier is een lijst: [https://www.contentkingapp.com/academy/page-speed-resources/](https://www.contentkingapp.com/academy/page-speed-resources/) 

Deze vond ik interessant: het feit dat mensen _liever twintig websites afstruinen op zoek naar eentje die snel is,_ dan een paar seconden extra wachten op een langzame website _die precies de informatie heeft die ze zoeken_. Ik weet ook gewoon dat het waar is. Als ik iets opzoek (bijv. hoe ik een programmeerprobleem oplos) en de website laadt niet binnen een seconde? Dan denk ik "duurt lang, ik ga verder met werken" (of "ik ga eten maken"), waardoor ik meestal compleet vergeet dat ik datgene had opgezocht.

### Maak visuele overzichten

Mensen zijn visuele wezens. Waar mogelijk, geef ze altijd _plaatjes_, _icoontjes_, _thumbnails_, wat dan ook in plaats van tekst. En ja, dat voelt soms alsof je informatie "achterhoudt", en het zal leiden tot dingen die niet direct duidelijk zijn.

Maar mensen zijn daar helemaal tevreden mee. Ze zien liever een hoop plaatjes, klikken op degene die hen leuk lijkt, en vinden _dan_ uit wat het voorstelt ... dan een hoop tekst die ze moeten lezen, begrijpen, en een keuze uit maken.

Daarnaast is het algehele idee van een voorpagina om een _overzicht_ te geven. Ik gebruikte het in oudere websites te vaak om een goede indruk te maken, of de website uit te leggen, of juist alleen om mijn laatste artikel of twee aan te prijzen. (Het oude portfolio had zulke grote tekstknoppen dat je er maar _twee_ kon passen op een gemiddeld scherm. Het was _duidelijk_ en _onmisbaar_, maar niet per sé _functioneel handig_.)

Dit is het grid op mijn nieuwe portfolio:

![](/uploads/2021/09/rodepanda_grid1.webp) 

Ja, het is ietsje drukker en voller dan mijn vorige (zeer kalme/minimalistische) websites. Maar het geeft wél meteen een overzicht van mijn werk. Je hebt meteen dingen die je ziet en waar je makkelijk op klikt als het is wat je zoekt. 

Het geeft goed weer _hoeveel dingen ik al heb gemaakt_ en _wat voor dingen ik in het algemeen maak_. (Een snelle blik is genoeg om eruit te halen dat ik dus "games" ontwikkel, maar ook boeken schrijf, en iets met muziek doe. Iets wat langer had geduurd als je dit had moeten _lezen_ in een of andere uitleg.)

Het juiste woord hier is denk ik "ademruimte". Mijn vorige ontwerp was heel erg ineengekrompen: het was klein, alles paste precies op elkaar, maar daardoor ook niet in staat tot _uitbreiding_. Het zag er véél beter uit op mobieltjes dan op wijde (grote) computerschermen. 

De nieuwe ontwerpen, met het idee van "overzicht" in het achterhoofd, nemen veel meer _ruimte_ in. Ze krijgen die ruimte om te ademen. En daardoor _voelt_ alles ook grootser, en belangrijker, en interessanter.

Maar het allerbelangrijkste: één klik op een plaatje leidt je naar de projectpagina daarover. In de vorige websites was het minstens 2-3 klikken om _ergens_ te komen. Dat is een gigantische verbetering qua "user experience", in mijn ogen.

### Kies één ding

Eigenlijk sluit dit aan op het vorige. Het is een les die alles "in balans houdt".

Op het vorige portfolio probeerde ik dus constant _alles wat ik doe_ aan te prijzen en te laten zien. Alles was even belangrijk. _Alles_ was voorzien van een lang stuk tekst over _wat het precies inhield, hoe ik te werk ga, hoe je me kunt inhuren, en nog meer achtergrond_.

Dat is véél tekst. Toen ik stukken daarvan jaren later zelf teruglas, kon ik pas helemaal begrijpen hoe het voor _andere_ mensen moest zijn. Het is overweldigend, het is alsof ik niet weet wat ik wil, en het is allemaal _ruis_.

Dus kies één ding. Focus daarop. Leidt alles daarnaartoe. Wees beknopt en direct hierover.

Zoals je op het plaatje hierboven ziet, staan in het grid slechts 2 "blokken" met tekst. 

  * De een zegt: dit is een portfolio + links voor contact/over mij.
  * De tweede zegt: dit zijn de specifieke dingen waarvoor je me inhuurt + links naar elke

Het is véél korter. Het is duidelijker. Iemand die mijn werk opzoekt, of mij misschien wil inhuren voor een project, ziet _direct_ waar hij moet zijn en of ik wel/niet geschikt ben. Ook is het, wederom, één klik verwijdert van de juiste pagina.

Dit klinkt misschien allemaal "overduidelijk". En ja, achteraf gezien kan ik mezelf voor mijn kop slaan over hoe naïef en onhandig ik de oude website(s) had opgezet. Maar ja ... achteraf heb je altijd meer wijsheid. Je weet pas hoe het _goed_ moet, als je alle _foute dingen_ al hebt geprobeerd. (En ervan hebt geleerd.)

Dus dat is de tip. Sinds het omzetten van mijn websites, geldt het volgende:

  * Dit blog = alles qua _schrijfwerk_, echt een blog, in het Nederlands
  * Pandaqi = alles qua _game werk_, elke game een unieke pagina (met dezelfde eigenschappen: korte trailer, korte uitleg, downloadlinks)
  * El Troubadour = alles qua _muziek_, elke pagina één album (met wederom dezelfde eigenschappen: korte uitleg, link naar streamingsdiensten)
  * Rode Panda = een _overzicht_ van alles met als hoofddoel potentiële werkgevers mij laten vinden

Met pijn en moeite heb ik dit allemaal van elkaar gesplitst en alle "overlap" of "dubbele functionaliteit" weggehaald. Niks wordt op twee plekken geplaatst. Ik probeer zelfs te voorkomen dat _plaatjes_ op twee plekken terechtkomen. Niks verwijst (op verschillende plekken) naar verschillende artikelen. 

En ik merk nu _zelf_ al hoeveel makkelijker het is om bij te houden en te updaten. Dan kan dit alleen maar 10x zoveel gelden voor mijn bezoekers 🙂

Dit artikel gaat verder bij deel 4: [hoe maak ik mijn website sneller? (Deel 4)][2]

 [1]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller
 [2]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller-deel-4