---
title: Hoe maak ik mijn website sneller? (Deel 2)
author: tiamopastoor
date: 2021-10-14T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is deel 2 van mijn reeks over hoe ik mijn (vele) websites sneller, moderner en gebruiksvriendelijker heb gemaakt.

Begin bij deel 1 hier: [Hoe maak ik mijn website sneller?][1] 

## Plaatjes kunnen altijd kleiner

Vroeger bestonden er maar een paar soorten plaatjes. Je had de bekende JPEG (de alleskunner), de PNG (als je transparentie wilde), en de TIFF (als je fotograaf was en met hoge resolutie werkte).

Alle plaatjes op mijn websites zijn dan ook .jpg of .png

Teleurgesteld met de bestandsgrootte van die dingen (soms wel meerdere MB per plaatje!) besloot ik toen om alle plaatjes gratis te laten hosten door _imgur_. Dat doe ik al jaren en heeft mij eigenlijk nooit problemen opgeleverd.

In plaats daarvan is er één groot lurkend probleem met deze methode: imgur kan zomaar besluiten dingen te veranderen, en dan ben ik al mijn plaatjes en websitefunctionaliteit kwijt. 

Nee, daar kan ik niet mee leven. Ik moet vanaf nu al mijn media in eigen beheer houden en dus op mijn eigen server zetten.

Godzijdank hebben slimmere mensen dan ik de laatste jaren nieuwe bestandsformaten verzonnen die _veel efficiënter zijn!_

### WebP

De "ideale kandidaat" van dit moment is **webp.** Ik heb dit formaat uitgetest met 10 verschillende plaatjes, en de vermindering in bestandsgrootte was steeds 50-75%! Dat is _veel_. Zonder een (zichtbaar) verlies van kwaliteit. 

Het achtergrondpatroon op dit blog (met al die leuke tekeningetjes) was eerst 400 kb (in **png** formaat), maar is nu nog maar 113 kb (in **webp** formaat). Dat is _geweldig_, want dit plaatje wordt op _elke pagina_ sowieso geladen!

En sinds een paar maanden geleden, is dit formaat overal 100% ondersteund.

Dus, eh, tja, dat is het plan: haal alle plaatjes van imgur, converteer ze naar webp, en zet ze op mijn eigen server.

{{% remark %}}
Dit formaat kan trouwens ook bewegende plaatjes, zoals GIFjes, comprimeren. Dat is geweldig! Je gebruikt namelijk superveel GIFjes om computerspellen te promoten, want het is een **spel**, dus je wilt **bewegend beeld**. Vooralsnog werden die GIF bestanden steeds 2+ MB **per stuk**, wat verschrikkelijk is. Maar wederom komt er een 50+% vermindering uit mijn tests als je WebP gebruikt.
{{% /remark %}}

{{% remark %}}
Als het plaatje waarmee je begint al behoorlijk klein is (ongeveer onder de 30 kilobyte), kan WebP het plaatje juist groter maken. Dus in die gevallen houd je gewoon lekker je originele plaatje en doe je niks. Het volgende formaat heeft daar géén last van ...
{{% /remark %}}

### Avif

Maar ... wat nou ... als het nog beter kan? Wat als we deze websites écht toekomstbestendig willen maken?

De toekomstige held is **avif**. Dit formaat leverde in mijn tests _minstens een halvering_ op van de grootte van webp. Laat me dat even herhalen: een plaatje van 150 kb in **jpg** werd ineens 37 kb in **avif**. _Zonder verlies van kwaliteit_.

Het enige probleem is dat op dit moment alleen de (nieuwere) versie van Firefox en Chrome dit ondersteunen. Maar support in de meeste browsers komt eraan en dit is duidelijk de toekomst.

Dus het plan wordt: zowel **webp** als **avif** maken, en de browser zelf laten kiezen welke het kan laten zien. (En als over een paar jaar **avif** goed is ondersteund, gaan alle **webp** versies weer van mijn server af!)

Laten we namelijk de gevolgen hiervan eens bestuderen. Tekst is verwaarloosbaar. Je kunt hele deurstoppers van boeken schrijven en ze zijn nog steeds _kleiner_ (qua bestandsgrootte) dan een gemiddeld plaatje. Nee, de problemen komen nooit van tekst, altijd van andere media.

Stel een gemiddelde pagina heeft die 10 testplaatjes van mij. (Het zal geen verrassing zijn dat ik letterlijk een willekeurige computerspelpagina met tien plaatjes heb gekozen voor deze test.) 80+% van de wereld gebruikt op dit moment Firefox en Chrome. Voor al die mensen gaat de grootte van de gemiddelde pagina (na deze update) van ~2 mb naar ~200 kb. 

Voor zo'n verbetering wil ik best wat moeite doen. (En ik hou na deze update dus alle media in eigen beheer, hoef ik niet meer bang te zijn voor rare fratsen van imgur.)

{{% remark %}}
Er zij nog meer (nieuwere) formaten die opkomen, zoals JPEG XL. Maar die is nog nergens ondersteund én biedt vooral verbetering voor grote foto's die je op hoge resolutie wilt houden. In dit geval praten we over websites, die vooral snel moeten zijn en een stuk kleinere/meer gecomprimeerde foto's moeten hebben. En dan wint AVIF nog steeds.
{{% /remark %}}

## Trimming the fat

### Niet Dat Het Uitmaakt (dit blog)

WordPress werkt op basis van "plugins". En zoals iedereen weet: als er een pluginsysteem is, gaan mensen er veel te veel installeren waar ze vervolgens nooit meer van af komen.

Dus de grootste verbetering op dit blog (qua snelheid) was te behalen door selectief te zijn met plugins.

Zo had ik een "YouTube" plugin ... maar inmiddels worden YouTube video's rechtstreeks ondersteund door WordPress, dus die kan helemaal weg.

Zo had ik een "LaTeX" plugin, die wordt gebruikt om wiskundige formules mooi te laten zien. Eventjes terugzoeken geeft aan dat slechts een handjevol (heel oude) artikelen dit gebruiken, dus dat kan ook wel weg. (De formules in de artikelen zijn vervangen door _screenshots_ van die formules.)

Zo had ik twee "donatie plugins" (waarmee je met één druk op de knop een kleine donatie kon geven om dit blog online te houden). Die werden op elke pagina geladen (om te checken of ze een knop moesten laten zien). Dat was nergens voor nodig. Ik heb de knoppen handmatig ingevoerd waar ze nodig zijn en de plugins zelf verwijderd.

{{% remark %}}
Als ik zeg "handmatig invoeren", bedoel ik ook echt handmatig. Die websites leveren een "button" die je kunt plaatsen en die dan door hen wordt omgezet naar iets moois. Maar dat ding is super _langzaam_ en moeilijk om _mooi te stylen in mijn websitethema_. Toen ik die buttons toevoegde, bleken ze 80% van de reden dat de website langzaam was, omdat ze allemaal dingen wilden laden. Dus die buttons zijn weg, ik heb zelf een simpele link gemaakt die 1000x sneller en passender is.
{{% /remark %}}

Het idee lijkt me duidelijk. Veel dingen kunnen, met wat extra werk, gewoon helemaal weg of grotendeels uitgeschakeld. Zo hoeven ze niet meer _bij elke pagina_ te worden geladen of opgevraagd, wat weer scheelt.

Voor dit blog heb ik een plugin gebruikt die alle oude bestanden kon omzetten naar WebP. Dit bespaarde 60+ MB. En dan moet je nagaan dat het grootste deel van de plaatjes nog moet komen. (Die moet ik dus nog van imgur afhalen en op deze server zetten.) Diezelfde plugin zal ergens de komende maanden support voor Avif krijgen, en je weet al wat ik dan ga doen :p

Inmiddels heb ik ook alle imgur plaatjes vervangen. (Dit kostte voor dit blog "slechts" iets van 3 uur, want ik had maar 35 pagina's waarop één of meerdere van die plaatjes werden gebruikt. De andere websites worden vervelender, want die leunen bijna volledig op die externe bron.) De originele plaatjes zijn in totaal 58 MB. De verkleinde varianten zijn in totaal 13 MB. 

(Sommige plaatjes zijn gewoon _minder dan 8 kilobyte_ geworden, zonder zichtbaar verlies van kwaliteit. Dat is zo klein dat het nauwelijks meer een impact heeft op _wat dan ook_.)

Oftewel, alles bij elkaar, is dit blog 120 MB lichter geworden ... zonder verlies van inhoud of kwaliteit. De snelheidsscore voor het blog is nu 70 (tegen 61 eerst). De overgebleven suggesties (van die tool) kan ik ook nog wel iets mee, maar het is niet zo cruciaal, dus ik ga nu door met de andere websites.

_Trimming the fat._ (Vind het gewoon een leuke uitspraak.)

### Intermezzo: WordPress blijft irriteren

Hier is nog een heel stom probleem waar ik op het laatste moment tegenaan liep! 

Mijn server stuurde mij ineens waarschuwingen dat hij vol was. En ik was in de war. We waren toch juist kleiner geworden? _Alle plaatjes_ bij elkaar (over al mijn websites) beslaat hoogstens een paar honderd MB, en ik heb veel meer ruimte dan dat? 

Wat bleek nou? WordPress genereert, bij elk plaatje dat je upload/gebruikt, _automatisch een paar andere formaten van het plaatje_. (Dus een paar versies die groter zijn, een paar die kleiner zijn, etcetera.) Oftewel, voor elk plaatje, stonden er nog 5-7 op mijn server, sommige zelfs _groter_ dan het origineel. Ik dacht dat ik dit niet had ingeschakeld op mijn thema, en ik gebruik deze andere formaten ook nergens. 

Maar blijkbaar ... gaat WordPress niet wachten tot je het inschakelt. Het zet 5 van die formaten lekker _automatisch aan_. En je moet zelf de code achterhalen om ze uit te zetten. En vervolgens moet je even door de server heen kammen om al die extra formaten er vanaf te gooien.

Lekker is dat :p (Hopelijk wordt langzaam duidelijk waarom de wereld weg moet stappen van WordPress.)

Hoe dan ook, na al die pijn en moeite, kon ik zo hatsiekedee 500 MB aan zinloze plaatjes (waarom ik nooit had gevraagd) van de server gooien. 

(De andere boosdoener was mijn Pandaqi Blog, waarover ik hieronder vertel. Maar dat was gewoon een fout met de caching: elke dag werd deze map _groter_, dus na twee jaar tijd was die _gigantisch_ geworden. Het schijnt een _bug_ te zijn geweest in de oude versie. Ik heb hem helemaal geleegd en hoop dat het nu goed gaat.)

### Pandaqi Blog

Mijn spellenblog heeft zo'n 70 artikelen waarvan de _meeste_ minstens één plaatje gebruikten, die 100% op "imgur" werden gehost. Het is een stuk kleiner dan dit blog (NDHU heeft bijna 600 artikelen), maar heeft een hogere "plaatjes-per-artikel" ratio, dus ik verwachtte soortgelijke resultaten.

Uiteindelijk heb ik 38 MB aan plaatjes omgezet in 12 MB, door het om te zetten naar WebP. Niet slecht, denk ik.

Maar ik heb nog twee trucjes gebruikt hier:

  * Veel plaatjes had ik rechtstreeks uit mijn spelregels genomen, of kwamen rechtstreeks van mijn mobiel. Die hadden dus een _gigantische_ resolutie. (Iets van 4000×4000.) Dat is compleet overbodig, zeker op een computer, zeker op het web. Dus die heb ik eerst verkleind naar een maximum grootte van 1000px in elke richting. Dat scheelt natuurlijk ook gewoon 4x de bestandsgrootte.
  * De écht grote GIF bestanden (2+ MB) heb ik omgezet in een .mp4 video en naar YouTube geüpload. Ik ben niet bang dat YouTube snel verdwijnt of ineens limieten stelt :p En op deze manier kost het mij niks om te hosten, terwijl het veel makkelijker is voor bezoekers om een _filmpje_ te kijken (want die kan je pauzeren/terugspoelen/etc.) dan een _GIFje_.

Als laatste vinden de meeste systemen het leuk om allemaal dingen _automatisch aan te zetten en toe te voegen_. Ik heb geen idee waarom, want meestal werken ze alleen maar tegen. 

Bijvoorbeeld, mijn blog laadde automatisch "Font Awesome" (een gratis lettertype om mooie icoontjes toe te voegen aan je website) ... en gebruikte die slechts op één plek! Dus ik heb dat ene icoontje vervangen door een plaatje en toen kon die hele "Font Awesome" weg. Scheelt weer een halve seconde laadtijd.

Een andere boosdoener is "jQuery", een script dat sommige dingen nét wat makkelijker maakt dan als je het handmatig moet scripten. Maar ja, "nét wat makkelijker" en "sommige dingen" zijn geen hele sterke redenen. Dus ik heb dat hele ding weggehaald en zelf een simpele vervanging erin gezet. Scheelt weer een halve seconde laadtijd.

### Pandaqi

Poeh. Mijn spellenwebsite was eigenlijk het allergrootste pijnpunt. Deze staat _bomvol_ met plaatjes en GIFjes, want er staan iets van 30+ spellen op (mix van computer- en bordspellen), inclusief _al het marketingmateriaal wat erbij hoort_.

Vooralsnog hostte ik 100% van die website op imgur. En, waarschijnlijk uit gemakzucht, heb ik al die plaatjes nooit kritisch bekeken. Dus nu moest ik alles overzetten naar mijn eigen server én controleren of de plaatjes niet stiekem 4000px waren en veel kleiner moesten :p

Dit was zo'n grote operatie, dat ik natuurlijk de mogelijkheid nam om het hele design op de schop te gooien en alle problemen te fiksen die ik de afgelopen jaren tegenkwam. Als ik toch door _alle pagina's moet_ en ze _flink moet aanpassen_, kan ik maar beter zorgen dat dit (voor de nabije toekomst) de laatste update is.

De uiteindelijke verandering in de grootte van de website is: 31.3 MB -> 72 MB

Jup, dat is groter, meer dan 200% zelfs. Want eerst waren _alle plaatjes_ gehost op imgur, en nu _alle plaatjes_ op mijn eigen server. 

Bovendien, en hier kwam ik dus veel te laat achter, is er één grote boosdoener die maar liefst 32 MB toevoegt aan dit geheel. Mijn alleroudste spellenwebsite (nog van de middelbare school) besloot ik óók op Pandaqi te zetten, omdat ik het wil bewaren, er twee behoorlijk goede spellen tussenzitten, en wil laten zien "waar ik vandaan kom".

Maarja, in die tijd was ik al helemáál niet bezig met optimalisatie, dus een stuk of 10 kleine spelletjes hebben een gigantische grootte met gigantische plaatjes.

Maar goed, als je dat dus weghaalt is de nieuwe website even groot als de oude, terwijl het _véél meer inhoud heeft_.

### Portfolio

De hoeveelheid plaatjes op mijn portfolio was altijd al vrij laag. (Dat was nou juist een van de problemen! Te veel tekst, te weinig plaatjes.) En 99% werd al op de server gehost. Want ik was vroeger blijkbaar compleet inconsistent in hoe ik dingen aanpakte.

Dus dit is de besparing: 9.3 MB -> 3 MB 

(Merk op dat hier dus een berg _extra_ plaatjes bij is gekomen. Het nieuwe portfolio heeft per project _twee plaatjes_---thumbnail en header---en heeft 8 nieuwe projecten die niet op de oude stonden.)

Mwah, dit zijn allemaal lage getallen, hier gaat het natuurlijk niet om spannen. Maar toch leuk. Toekomstbestendig.

Dit artikel gaat verder bij deel 3: [hoe maak ik mijn website sneller? (deel 3)][2]

 [1]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller
 [2]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller-deel-3