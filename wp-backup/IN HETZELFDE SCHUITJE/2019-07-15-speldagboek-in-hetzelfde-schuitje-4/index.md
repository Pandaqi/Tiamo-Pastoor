---
title: '[Speldagboek] "In hetzelfde schuitje" #4'
author: tiamopastoor
date: 2019-07-15T16:00:51+00:00
language: nl
thumb: /uploads/2019/06/pirate-map-SEA-MONSTERS_result.webp
categories:
  - Miscellaneous

---
Welkom bij het vierde speldagboek ("devlog") voor mijn spel "In hetzelfde schuitje".

De vorige artikelen heb ik de rollen uitgelegd en de systemen/interfaces om deze rollen te besturen (op je smartphone of tablet). Dat stukje van het spel is zo goed als af.

Dit artikel zal dan ook geheel in het teken staan van het ontwikkelen van de wereldkaart/piratenkaart en er een levendige wereld van maken.

## A Pirate's World for Me!

De wereldkaart wordt al gegenereerd (zoals te zien in het allereerste speldagboek), met zeeën, eilanden, kusten, etc.

Maar met die kaart alleen kun je niks. Waar haal je de grondstoffen vandaan? Hoe maak je dit een levende, bruisende, interessante wereld?

Nou, hierover heb ik een aantal ideeën.

Ik zal hieronder per idee uitleggen wat het is, waarom het in het spel zit, en hoe ik het heb uitgewerkt.

### Eilanden

Wat hebben eilanden? Precies: **een naam**.

Al vanaf de allereerste versie van dit spel, wist ik dat spelers ook een beetje de rol van "ontdekkingsreiziger" moesten aannemen. Als zij als eerste een eiland tegenkwamen, mochten zij deze een naam geven. Het eiland zou dan de rest van het spel bij die naam worden genoemd (en weergegeven).

(Voor latere versies stelde ik de vraag: wat hebben eilanden nog meer? En mijn antwoord was: een eigen cultuur en historie, een bepaalde specialiteit (bijv. een eiland die vooral één bepaalde grondstof produceert), en een klimaat. Maar goed, dat is voor de niet-beginnersversies.)

Maar ... hoe leer ik de computer herkennen wat de eilanden zijn op de kaart?


Hiervoor maak ik gebruik van **recursieve functies!**

Vaak tijdens het programmeren maak je gebruik van een "loop". Stel je wilt alle spelersschepen verplaatsen. Je weet dat er 3 schepen in het spel zitten, dus je schrijft een stuk code, en zegt tegen de computer: voer dit drie keer uit.

Het probleem met onze eilanden is dat we niet weten hoe groot ze zijn. Als we 5 vakjes hebben gecontroleerd, weten we niet of we klaar zijn.

Recursieve functies lossen dit op.

> _Een recursieve functie roept zichzelf aan (en kan daardoor net zo lang dezelfde code uitvoeren als je wilt)_

### Eilanden: De details

Dit stukje is vooral interessant als je zelf ook programmeert en de details wilt weten. Anders kun je het gerust overslaan.

Alles begint met een loop die door alle tegels op de kaart gaat (startend bij de tegel linksboven).

In deze loop roep ik de functie "exploreTile" voor de huidige tegel, onder twee voorwaarden:

  * _Deze tegel is een stuk land (en dus geen zee)_
  * _Deze tegel is nog niet eerder "explored" (anders stoppen we niet met zoeken als ik alles heb gevonden)_

Ook stuur ik een extra argument mee: een lege lijst (Array). Deze lijst zal steeds worden doorgegeven (door mijn recursieve functie), aangevuld met nieuwe tegels, totdat deze lijst alle tegels van het eiland bevat.

De functie **exploreTile** doet het volgende:

  * Sla op dat deze tegel vanaf nu "explored" is.
  * Voeg deze tegel toe aan het eiland.
  * Ga door alle 4 de aangrenzende tegels (boven/rechts/links/onder) 
      * Als deze tegel aan de twee voorwaarden voldoet (onontdekt stukje land), roep dan wéér **exploreTile** op deze nieuwe tegel

Dit is dus een recursieve functie. Zolang hij nieuwe tegels vindt die aan hetzelfde eiland vastzitten, blijft hij zichzelf aanroepen, totdat het hele eiland is gevonden.

Met een beetje denkwerk, zijn 20 regels code genoeg om perfect eilanden te ontdekken. (Zelfs eilanden die over de rand van de kaart gaan, en aan de overzijde verdergaan.)

### Havens

**Het idee: **Elk eiland heeft één **haven**. Havens hebben altijd een bepaalde "deal". Bijvoorbeeld: "Nu! 3 Hout voor 2 Goud!"

> Als je in een vakje naast de haven staat, kun je ingaan op die deal, zolang je grondstoffen dat toelaten. (Ik twijfel nog of je meerdere keren kunt ingaan op de deal, of slechts eenmalig.)

> Hoe groter het eiland, hoe groter de haven. Dit heeft twee gevolgen: de deals zijn groter (het zijn meer "bulkaankopen" :p), en er zijn meer routes van deze haven naar andere havens.

> Als je bij een grote haven staat, is de kans dus groot dat je andere vissersbootjes tegenkomt, of lekker veel kunt inslaan. Als je bij een kleine haven staat, is het heel rustig en kun je misschien een heel zeldzaam handeltje beginnen.

**De uitwerking:** de paarse vakjes hieronder geven havenlocaties aan.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560330267/pirate_map_with_DOCKS.png" /> 

Zoals je ziet, zit een haven altijd netjes aan de rand van een eiland. (De code kan een haven zelfs bij een "inham" plaatsen, wat ik helemaal gaaf vind.)

**Hoe heb ik dit gedaan?** Nou, hierboven legde ik uit hoe we eilanden ontdekten. Als we deze code toch hebben, is het niet moeilijk om bij elke tegel te kijken _welke vakjes rondom deze tegel vrij zijn_.

  * Als minstens één vakje vrij is, kan hier een haven staan, en slaan we dit op als "potentiële havenlocatie."
  * Als we het hele eiland hebben ontdekt, hebben we een waslijst aan havenlocaties, allemaal aan de rand van het eiland.
  * Hieruit kiezen we er eentje willekeurig.

Dit is slechts enkele extra regels code, maar het is heel flexibel. Als een eiland een rare vorm heeft (grote inhammen bijvoorbeeld), dan kan de haven netjes in die inham zitten, en zal altijd bereikbaar zijn.

**Havengrootte:** om te bepalen hoe groot/belangrijk een haven is, hoef ik alleen maar te tellen hoeveel tegels er in het eiland zitten. Die is gelukkig niet zo moeilijk 🙂

**Aanbiedingen/Deals:** Die "aanbiedingen" bij de havens zijn andere koek. Ik heb nu géén idee wat de wisselkoers is tussen grondstoffen. Is 1 Goud meer waard dan 1 Hout? Geen idee! Ik heb alleen deze algemene regels vastgesteld:

  * Grotere havens hebben grotere getallen. (Niet 1 Goud voor 2 Hout, maar meteen 5 Goud voor 10 Hout.)
  * Grotere havens hebben doorgaans de "standaard" grondstoffen (Hout, Goud), kleinere havens de zeldzamere (Bemanning, Kanonskogels)
  * Ik kan de "wisselkoers" misschien afleiden of aanpassen op basis van wat de spelers doen. 
      * Stel de gemiddelde verdeling van grondstoffen is als volgt: _5 goud, 2 bemanning, 3 Hout, 4 Kanonskogels_
      * Dan is de gemiddelde wisselkoers (Goud <=> Hout) dus: _5 goud = 3 Hout_
      * De aanbieding van een haven moet net wat beter zijn dan dat. Dus de aanbieding wordt bijvoorbeeld: _3 Goud = 3 Hout._

Het voelt alsof dit heel goed kan werken. De meeste spelers zullen genoeg grondstoffen hebben voor de deal, en het zal voordeliger zijn dan niks doen of monsters aanvallen.

Ondanks deze regels weet ik nog steeds niet de waarde van grondstoffen. Dus ik wacht met de aanbiedingen programmeren totdat ik een beter idee heb.

### Zeemonsters

**Het idee:** Door de wereld zwemmen zeemonsters. Ze bewegen elke beurt in willekeurige richting.

> Als ze jou zien, vallen ze altijd direct aan.

> Jij kan natuurlijk terugschieten. Hoe moeilijker het monster (meer aanval + meer levens), hoe groter de "beloning" voor het uitschakelen. (Je kan het ook negeren, als je bijna dood bent of geen kogels hebt.)

Deze zeemonsters worden aan het begin van het spel door de spelers zelf getekend (de Cartograaf doet dat). Ze worden simpelweg verzameld op de server en op willekeurige plekken neergegooid.

Mocht een zeemonster sterven, dan komt er meteen een nieuwe voor in de plaats. (Volgens het traditionele "kill = spawn" trucje. Het zeemonster dat zojuist is gedood, wordt niet weggehaald uit het spel, maar simpelweg verplaatst naar een andere plek. Geef het andere statistieken en een ander jasje, en het lijkt een nieuw monster! Het spijt me als ik hiermee de illusie van computerspellen voor jou verpest :p)

**De uitwerking:** tja, hier is niet zoveel interessants. Dit is standaardcode die je in elk spel duizend keer tegenkomt (... ga ik van uit, of ik doe iets heel raars). Hier is een plaatje van de kaart met zeemonsters op willekeurige plekken (de rode blokjes met zwarte omlijning).

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560369616/pirate_map_SEA_MONSTERS.png" /> 

_Opmerking 1:_ natuurlijk zijn monsters niet compleet willekeurig. Ik blijf een willekeurige plek op de kaart kiezen, _totdat_ ik een plek vind waar het water diep genoeg is. Dit zorgt ervoor dat monsters nooit direct langs een haven of langs de kust komen.

> Of de monsters wel ver genoeg uit elkaar staan maakt me niks uit. (In het plaatje hierboven staan ze toevallig goed verspreid, maar hiervoor maakte ik een paar plaatjes waar er 2 of 3 dicht naast elkaar stonden.) Ten eerste: het maakt het juist spannend. Is dit het enige monster? Of word je ineens overvallen door drie tegelijkertijd? Ten tweede: elke beurt bewegen de monsters in willekeurige richting, dus ze lopen vanzelf uit elkaar.

_Opmerking 2:_ het plaatsen van de spelersschepen gaat ongeveer hetzelfde. Die wil ik niet te dicht bij de kust hebben, maar ook niet te dicht bij monsters. (Nu ik erover nadenk, het is ietsje efficiënter om eerst de spelersschepen te plaatsen, daarna pas de monsters. En dan zeg ik gewoon: als een monster binnen 2 of 3 tegels van een schip is, zoek een nieuwe plek.)

> Een beter idee is om de kaart op te delen in "vakken". Bijvoorbeeld: 6 kolommen en 3 rijen. Elk monster en schip krijgt zijn eigen vak en begint daar op een willekeurige plek. Op die manier kun je nog steeds toevallig dicht bij elkaar beginnen, maar de kans is kleiner, en je hebt _altijd_ ruimte om te vluchten.

> Zoals je merkt, bedenk ik dit nu ter plekke. Maar ik ga het nu invoeren, want het lijkt me een goed idee xD

_Opmerking 3:_ dit idee valt me net te binnen. Wat als we op het computerscherm een soort "WANTED" posters laten zien, met die zeemonsters erop en een beloning? Dan weten spelers zo van "Oké, als we dit paarse monster tegenkomen, dan moeten we hem neerschieten, dan krijgen we 50 Goud!" (En het is supergrappig. Dan kan ik er van die leuke teksten onder zetten. "Wanted for stealing a bunny and calling his neighbour fat. Extremely dangerous. Do not look it in the eyes.")

### Computerschepen

**Het idee:** om de wereld écht levendig te maken, moeten er natuurlijk computerschepen zijn die hun eigen zaakjes regelen. Dit zijn vissersbootjes, handelsschepen, of andere piraten.

> Om de boten realistisch te laten bewegen, varen ze altijd van _haven_ naar _haven_. Aan het begin van het spel worden de (snelste) routes tussen de verschillende havens uitgerekend. Vervolgens hoeft elk schip alleen maar een route uit het geheugen te pakken en deze uit te voeren.

> Boten vallen jou NIET uit zichzelf aan. Je kunt elkaar vredig groeten, langs elkaar varen, en doorgaan met je leven. Maar je kunt hen wel aanvallen! De beloning is zeer groot (want handelsschepen hebben veel aan boord), maar deze boten zijn sterker dan de meeste zeemonsters.

> Misschien wel het allergrootste voordeel is dat deze schepen bemanning hebben. Als jij een schip doet zinken, gaat (een deel van) die bemanning naar jouw schip. (Ja, het klinkt stom om bemanning als "grondstof" aan te duiden. Maar zo ziet het spel het en zo blijft de uitleg simpel.)

Wederom, als jij een schip doet zinken, verschijnt hij meteen ergens anders op de kaart. Zo blijft het aantal computerschepen altijd constant én hoef ik geen moeilijke dingen te doen om units uit het spel te halen.

**De uitwerking:** er is een algoritme, genaamd Dijkstra's Algoritme (wie zou die toch hebben uitgevonden), die de route vindt tussen twee punten op een graaf. (Een graaf is niks meer dan een stel punten met daartussen verbindingen, zoals de kaart uit een TomTom. In mijn geval is de graaf een rechthoekig grid.)

Deze kan, echter, langzaam zijn, omdat het een optimale route wil vinden. Om dit op te lossen, is er een variatie genaamd A*. Deze stopt bij het vinden van de eerste de beste route. Bovendien gebruikt het een truc om de zoektocht een duwtje in de juiste richting te geven. Als ik weet dat haven 2 _links_ staat van haven 1, dan ga ik eerst _naar de linkerkant toe zoeken._

Afijn, dit is hoe de routes eruit zien als ik puur Dijkstra's algoritme gebruik. Het duurt zo'n 3-5 seconden om deze routes te genereren. (Een groot deel daarvan is ook het weergeven van de kaart en andere onderdelen, dus in werkelijkheid zal het 2-3 seconden zijn).

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560367420/pirate_map_with_ROUTES_01.png" /> 

_Opmerking:_ het lijkt misschien alsof routes ineens stoppen of in elkaar overlopen. Dat is niet zo: de blokjes gaan gewoon precies over elkaar heen.

### Dijkstra's Algoritme: Problemen

Hartstikke leuk ... maar véél te langzaam. Gemiddeld kost een route uitrekenen 100 ms (milliseconden), met uitschieters naar beneden (<10 ms) en boven (>200 ms).

Ik weet uit ervaring (en uit wetenschappelijke verslagen) dat Dijkstra op een grid van deze grootte hoogstens 5-10 ms per route zou moeten duren. Ik heb géén idee wat er mis was met mijn implementatie, maar ik heb gewoon een verbeterde versie geschreven.

(De details hiervoor worden te complex om hier uit te leggen. Het komt erop neer dat ik andersom denk: in plaats van beginnen met alle vakjes en langzaam vakjes aankruisen die wel eens op de route zouden kunnen liggen, beginnen we met een lege verzameling en voeg ik alleen de vakjes toe die op dat moment overwogen moeten worden. Als ik deze toevoeg, sorteer ik ze meteen op afstand, zodat het meest belangrijke vakje altijd vooraan de rij staat.)

Drie uur lang werkte deze implementatie niet. Ik wist _zeker_ dat de code klopte, ik had alles tien keer nagelopen, maar hij werkte niet. Hij bedacht wel routes ... maar ze liepen niet goed. Dit had ik nog nooit meegemaakt.

Ik was klaar om de laptop dicht te doen en het voor de rest van de week op te geven ... totdat ik de fout ontdekte. Het was **ÉÉN** **SYMBOOLTJE** waarvan ik de verkeerde variant had gepakt.

Dit algoritme zoekt een route van A naar B. Logischerwijs eindigt het algoritme dus direct als je B hebt gevonden. Hoe check je of je route bij B is aangekomen? Nou, je zegt "de x-coordinaat moet gelijk zijn aan die van B **en** de y-coordinaat moet gelijk zijn aan die van B".

Wat had ik gedaan? Ik had **of** neergezet, in plaats van **en**. Dus de route stopte al als één van de coördinaten klopte. Oftewel, wanneer de route toevallig in dezelfde _rij_ of dezelfde _kolom_ als B langskwam, stopte hij met zoeken en zei "zo, route klaar, hier is ie!" Maar de route was niet klaar :p

### Dijkstra's Algoritme: Oplossingen!

Dat ene symbool veranderen en ...  MAGIE!

Het kostte nu afgerond **2 ms** om een route uit te rekenen!

<div style="width: 1824px" class="wp-caption alignnone">
  <img decoding="async" loading="lazy" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560367579/pirate_map_ROUTES_amazing_algorithm_2.png" alt="" width="1814" height="906" />
  
  <p class="wp-caption-text">
    Ik vond dit een hele leuke situatie die de computer willekeurig had gegenereerd. Alle havens toevallig aan één kant. Het lijkt wel een beetje op de middellandse zee zo.
  </p>
</div>

Ik had nog niet eens **A*** toegepast (de verbeterde versie van Dijkstra voor computerspellen). Dat deed ik nu, door de volgende voorwaardes toe te voegen:

  * Als een tegel qua afstand _verder_ van de eindtegel ligt, is de kans kleiner dat we deze overwegen. (Want ja, als we naar een haven aan de rechterkant moeten, is de kans klein dat we daarvoor eerst helemaal een bocht naar links moeten maken.)
  * Bewegen door _ondiep water_ (vlak langs de kust) is "kostbaarder" dan bewegen door diep water (middenin de oceaan). 
      * In de plaatjes hierboven zie je dat routes vaak _exact_ langs een eilandrand gaan. Dat is lelijk en voorspelbaar. Dus met deze regel maak ik de routes ietsje langer, maar stuur ik de boten wel iets meer de oceaan op.
      * Dit is ook realistischer. Boten willen liever op de open zee varen (vissersboten kunnen daar beter vissen, piraten willen niet langs de kust, de windkracht is hoger, etc.)

Deze toepassingen maakte het uitrekenen van de route in de meeste gevallen **0-1 ms**, met zeldzame uitschieters naar boven.

Dat is natuurlijk zeer goed te doen. Ik heb gemiddeld zo'n 10 havens, elk met gemiddeld 2-3 routes, dus we zijn gemiddeld 30 ms kwijt aan routes uitrekenen. (Met extra werk en uitzonderingen afhandelen zal dat wel oplopen naar 40-50 ms, maar dat is nog steeds hartstikke prima.)

Hieronder zie je hoe de routes iets meer de eilanden/kust ontwijken. (Hier kan nog steeds wat meer variatie in, maar het is meer dan goed voor nu.)

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560367646/pirate_map_ROUTES_amazing_algorithm_6.png" /> 

_Opmerking:_ ik wil even stilstaan bij hoe gaaf dit is. Ik kan de computer een kaart geven met bijna 2000 vakjes, en binnen 1/100 van een seconde heeft hij voor meerdere havens meerdere routes uitgestippeld, die netjes eilanden ontwijken en aan andere voorwaarden voldoen. Ik zeg dit niet om mezelf op te hemelen---ik heb al die algoritmes en ideeën van betere wiskundigen gestolen---maar om te laten zien wat voor krachtige dingen (simpele) algoritmes kunnen doen.

### Overige ideeën

Natuurlijk kan de wereld nog veel levendiger en realistischer. Ik heb bijvoorbeeld plannen om een weersysteem te simuleren. (Sterker nog, ik heb al code die een windkaart met realistische windkracht en windrichting in de achtergrond genereerd. Ik doe er alleen nog niks mee :p)

In latere varianten wil ik ook meer rollen toevoegen die echt "explorers" zijn. Rollen die veel van het schip af zullen zijn of bezig zijn met delen van de wereld verkennen (en/of plunderen). Zo denk ik aan een rol die kan duiken in de zee (om o.a. schatten te vinden), die eilanden écht kan ontdekken (de _explorer_ kan van het schip en over eilanden lopen), die kunnen onderhandelen met andere spelersschepen (in plaats van alleen havens), en nog meer gein.

Maar dat is allemaal té complex voor het basisspel.

Het is eerst taak om een werkbare eerste versie te krijgen. Dit spel is nu al complexer en groter dan alles wat ik hiervoor heb gemaakt.

Dus, wat ga ik nu doen? Ik ga deze eerste werkende versie maken. Het zal niet mooi zijn, het zal links en rechts kleine foutjes hebben, maar de kern van het spel moet werken.

Dan ga ik het spelen! Veel testen, kijken wat werkt en wat niet, en daarover schrijven. (Misschien dat daarvoor nog een artikel komt over wat het computerscherm laat zien, ik moet even kijken hoeveel ik daarvan uitwerk in de eerste versie.)

Tot dan!