---
title: '[Speldagboek] "In hetzelfde schuitje" #2'
author: tiamopastoor
date: 2019-07-01T16:00:03+00:00
language: nl
thumb: /uploads/2019/06/preparationInterfaces_result.webp
categories:
  - Games

---
Welkom bij het tweede speldagboek ("devlog") voor mijn spel "In hetzelfde schuitje".

De vorige keer liet ik zien hoe ik de wereldkaart genereerde, welke rollen er in het (basis)spel zouden komen, en hoe de interface op de mobiel er ongeveer uitzag.

In dit deel zal ik vertellen hoe de spelers/rollen/boten worden verdeeld, hoe de "voorbereidingsfase" eruit ziet, en wat voor problemen er komen kijken bij online spellen (en hoe ik die probeer te omzeilen :p)

## De Formule der Schipverdeling

Dit spel kan gespeeld worden met zoveel en zo weinig spelers als je wilt. Ben je met 3 spelers? Prima, iedereen zit in z'n eentje op het schip, en we spelen met 3 schepen. Ben je met 30 spelers? Prima, we brengen het aantal schepen naar 6, en er zitten 5 spelers in elk schip.

Ik heb geen zin om voor elk spelersaantal alle mogelijke combinaties op te schrijven. Het liefst zou ik een formule hebben die, gegeven een X aantal spelers, een willekeurige (maar eerlijke) verdeling teruggeeft!

Bijvoorbeeld, stel je bent met 6 spelers. Dan zijn meerdere verdelingen denkbaar:


  * 3 + 3              (2 boten, 3 spelers per boot)
  * 2 + 2 + 2       (3 boten, 2 spelers per boot)
  * 2 + 2 + 1 + 1 (4 boten, wisselend aantal)
  * 3 + 2 + 1       (3 boten, wisselend aantal)
  * 5 + 1              (2 boten, wisselend aantal)
  * ...

De eerste paar verdelingen zijn heel eerlijk: het aantal spelers is (ongeveer) gelijk. Maar daarna loopt het steeds meer uit de hand. Een potje waarbij één boot bestuurt wordt door 5 man, en de ander helemaal geregeld wordt door één persoon, kan nooit eerlijk zijn.

Ik zat maar te denken en te denken, maar kon geen oplossing vinden.

Totdat ik dacht: wat als we het omdraaien? Ik wil niet de verdeling van spelers weten, maar ik wil _het aantal boten_ weten!

Als ik dit aantal heb, kan ik de spelers heel makkelijk op eerlijke wijze over de boten verspreiden. Stel je hebt 2 boten en 5 spelers, dan doe je het volgende:

  * Stop speler 1 in boot 1
  * Stop speler 2 in boot 2
  * Stop speler 3 weer in boot 1
  * Stop speler 4 weer in boot 2
  * Stop speler 5 weer in boot 1

Dat is simpel---maar hoe komen we aan een goed aantal boten? Bij 4 spelers is 2 boten optimaal, maar bij 15 spelers is 2 boten nogal aan de lage kant.

Ik introduceer ... **de formule der schipverdeling!** Hij gaat als volgt.

Stel X is het aantal spelers en R is een willekeurig getal tussen -0.5 en 0.5 (dat kan een computer makkelijk doen).

> **<span style="color: #800080;"># schepen = (1 + R) * wortel(X)</span>**

Wat doet deze formule? Nou, toen ik dingen aan het uitrekenen was, vond ik dat een "optimaal" aantal schepen ongeveer gelijk is aan de wortel van X. Met 9 spelers, is 3 schepen optimaal, want dan krijg je 3 + 3 + 3. Met 16 spelers, is 4 schepen optimaal, en krijg je 4 + 4 + 4 + 4.

Het willekeurige getal geeft een "spreiding" rond deze optimale waarde. Dankzij dit getal, kan het aantal schepen met 9 spelers soms ineens 2 zijn (_5 + 4_), en soms ineens 4 (_3 + 2 + 2 + 2_) of 5 (_2 + 2 + 2 + 2 + 1_)_._

> De enige extra regel die ik hoefde toe te voegen was dat het aantal schepen altijd minstens 2 is. Anders krijg je met 4 spelers een redelijke kans dat je maar 1 boot hebt, wat ... tja ... het nogal moeilijk maakt om de niet bestaande tegenstander te verslaan :p

Deze formule is misschien nog niet optimaal. Voor hele hoge spelersaantallen loopt het uit de hand en de "optimale" waarde wordt iets te weinig gebruikt, maar verder werkt het vooralsnog perfect.

(_Wat bedoel je, het loopt uit de hand_? Stel je speelt met 30 spelers. Met deze formule is er een (kleine) kans dat je met 3 boten gaat spelen, 10 spelers per boot. Het basisspel heeft maar 5 rollen per boot. Ik verwacht niet dat iemand dit spel ooit met 30 spelers gaat doen, maar toch.)

(_Hoe ben je in vredesnaam bij die wortel gekomen?_ Ik heb geen idee. Ik heb wiskunde gestudeerd en ik wist dat de wortel voor de eerste paar getallen ongeveer gelijk op gaat (een rechte lijn is), maar later steeds meer afbuigt, wat precies de eigenschappen waren die ik nodig had. Met weinig spelers stijgt het aantal schepen snel, met veel spelers stijgt het aantal schepen veel langzamer. Dus het was een gokje, maar het werkte.)

## De voorbereidingsfase

De voorbereidingsfase is iets wat ik nog nooit eerder in een spel heb gestopt, maar waar ik vanaf het begin enorm enthousiast over was.

_Wat is het idee?_ Voordat het spel begint, moet iedereen een klein beetje informatie geven over jouw eigen _schip_ of over de _wereld waarin je gaat spelen_.

### Wat doet elke rol?

Welke informatie je moet geven hangt af van je rol.

  * **Captain**: bedenkt een _naam_ voor het schip en mag het schip tekenen (van de zijkant). 
      * Deze tekening zal in de rest van het spel worden gebruikt om hun schip aan te geven. Ik denk dat ik, met wat computercode, die ene tekening kan "draaien" naar verschillende richtingen. We zullen zien of het werkt.
  * **First Mate**: bedenkt een _motto_ voor het schip en mag de vlag tekenen. 
      * Het motto is gewoon een uitspraak die jouw schip/bemanning heeft, zoals de meeste piraten een bepaald gezegde hebben. Dit motto verschijnt, bijvoorbeeld, wanneer jij bent verslagen door een ander schip: "_Your attackers left behind a message: DEAD MEN TELL NO TALES!_"
  * **Cartographer**: tekent een _zeemonster_ en mag deze een naam geven. 
      * Dit zeemonster komt dan in het spel en kan iedereen aanvallen (ook jijzelf!). Op deze manier zorgen de spelers elke keer voor een zelfgemaakte en gevarieerde speelwereld.
  * **Sailor:** moet kiezen tussen twee dingen---meer _bemanning_ of meer _hout_.  (Dit is een slider, dus je kunt ook een middenweg zoeken.) 
      * Hiermee kan hij de strategie van het hele schip beïnvloeden. Als je meer bemanning hebt, kun je sneller varen, maar wordt het lastig om het schip te upgraden (want daar heb je hout voor nodig).
  * **Weapon Specialist:** moet kiezen tussen twee dingen---meer _kanonskogels_ of meer _hout_. (Ook een slider.) 
      * Wederom bepaalt dit veel van het spelverloop. Kanonskogels zijn erg schaars, dus als je begint met veel, kun jij waarschijnlijk als eerste aanvallen. Aan de andere kant heb je hout nodig om meer/betere kannonnen te kopen.

Voor alle rollen die ik gepland heb, komen er ook interessante/grappige keuzes tijdens de voorbereiding.

Zo wil ik een rol maken die een grondstof moet bedenken en tekenen. Deze komt vervolgens echt in het spel en moet je zien te vinden/sparen/kopen om te kunnen winnen :p

(Met dit soort ideeën zie ik altijd mijn vrienden/familie voor me die waarschijnlijk compleet bizarre dingen gaan bedenken. Dat we het hele spel ineens "lippenstift" of "paarse kikkers" moeten sparen als we betere kannonnen willen kopen.)

En ik wil, in latere versies, dat je ook eten/drinken moet bijhouden voor je bemanning. De rollen die daarover gaan, mogen natuurlijk tijdens de voorbereiding bepalen met hoeveel eten/drinken ze willen beginnen, ten koste van iets anders (hout, goud, vishengels, whatever).

### Hoe ziet dit eruit?

Dit deel van het spel was vrij snel gemaakt, aangezien men alleen wat dingen hoeft in te vullen en op te slaan op de server. Zo zien alle interfaces (voor de basisrollen) eruit.

[<img decoding="async" loading="lazy" class="alignnone size-full wp-image-8901" src="/uploads/2019/06/preparationInterfaces_result.webp" alt="" width="972" height="800" />][1]

Natuurlijk kan het allemaal nog wat mooier, maar ik vind dit al bijzonder professioneel eruitzien.

Je tekent altijd in de kleuren van je schip. Het eerste schip is rood, daarom ziet alles er rood uit hierboven. Maar het tweede schip tekent blauwe dingen, het derde groene dingen, etc.

Ik hou expres de "resolutie" van de plaatjes laag. Het is namelijk nogal zwaar om plaatjes over het internet te versturen (tijdens een spel), dus de plaatjes moeten klein en simpel blijven. Hoe minder detail je tekent, hoe minder groot het signaal dat ik moet sturen.

Als laatste is het natuurlijk lelijk dat de bruine achtergrond niet doorloopt, maar dat is simpel op te lossen en had ik even over het hoofd gezien :p

_Opmerking:_ er zijn nog wat limitaties die je niet in de plaatjes ziet, zoals het feit dat informatie niet bewaard blijft als je naar een andere rol wisselt. Je moet dus niet vergeten om eerst op "submit information" te drukken, voordat je naar de volgende rol gaat. Dit zijn van die dingen die ik wel kan en wil oplossen, maar het heeft nu niet de prioriteit, dus dat gaat achterop de to-do lijst.

### Waarom dit heel dom is

Normaal gesproken wil je eerst het _spel_ maken, de gameplay verfijnen, voordat je alles eromheen (qua voorbereiding, instellingen, menu's, etc.) maakt. Anders heb je een heel mooi spel met mooie menu's ... dat niet werkt, niet speelbaar is, en niet leuk is.

Ik heb ongeveer een week besteed aan deze voorbereidingsfase uitdenken, uitwerken, implementeren, en er een beetje leuk uit laten zien. (Toegegeven, ik werkte ondertussen ook aan een musical, maar goed.) Die week had ik beter kunnen steken in het spel laten werken, want nu kun je wel voorbereiden ... maar nog niet spelen :p

### Waarom dit eigenlijk heel slim is

Maar ik had een probleem. Ik had geen idee welke structuur ik nodig had voor dit spel. Wat moest ik opslaan? Hoe moest ik het opslaan? Welke informatie moest ik wel/niet hebben?

Door deze voorbereidingsfase te maken, is die structuur véél helderder geworden. Ik weet nu precies wat elke rol nodig heeft en wat het moet opslaan, omdat ik er een week bij stil heb moeten staan. (Ook heb ik de "tabs" boven de rollen kunnen implementeren en verfijnen, wat handig wordt tijdens het spel.)

De andere grote reden voor mijn keuze om dit eerst te doen, was het feit dat dit een online spel is. Ik kan niet zomaar een spel binnenvallen. (Met een offline spel, kun je een spel "opslaan", en even later openen om verder te testen.) Het spel wordt opgebouwd, over tijd, door online signalen naar de server. Als ik de voorbereidingsfase niet had, moest ik alsnog op de server wat hokus pokus uitvoeren om het spel op z'n pootjes te krijgen. Tja, dan kan ik net zo goed al die code meteen bij de voorbereiding doen en die fase helemaal laten werken :p

### Plot twist

Ironisch genoeg, heb ik hierna een dag besteed aan code schrijven zodat ik de voorbereidingsfase kon overslaan :p

Ik moet het spel de hele tijd uittesten, vaak op hele specifieke momenten in het spel. Als ik dan _elke keer_ die voorbereiding even moet doorlopen, dat gaat irriteren en kost ongelofelijk veel tijd.

Dus nu kun je een spel op de server "skippable" maken, waarbij je de voorbereiding overslaat en meteen begint aan het spel. Alle informatie die het spel niet heeft, zoals titels en plaatjes van schepen, krijgen standaardwaarden (een standaardplaatje en een titel van "Schip 1").

Hartstikke prima, want nu wordt het tijd om het spel te maken.

## Online (bord)spellen

Aan de kern van elk spel staat een "game loop". Een groot stuk code wat steeds opnieuw wordt uitgevoerd ("loop"). Maar, elke keer als je erdoorheen gaat, zijn dingen anders. Spelers zijn ergens anders gaan staan, de wereld ziet er anders uit, en daardoor is het spel niet de hele tijd hetzelfde.

Normaal gesproken wordt deze game loop zo'n 60 keer per seconden aangeroepen. (De "framerate" van spellen is doorgaans 60 FPS, _frames per second_.) Als je het minder vaak aanroept, gaan poppetjes ineens heel schokkerig bewegen, of heb je kans dat objecten die tegen elkaar aan zouden moeten botsen ... gewoon door elkaar heen gaan.

Dit spel werkt met _beurten_ van 2 minuten. Oftewel, elke 2 minuten roep ik opnieuw dat hele stuk code aan, en dat gaat door totdat het spel eindigt.

### Very Important Timer

Deze "timer" was het eerste dat ik moest maken. Dit is het algemene proces:

  * De eerste speler die aanmeldt wordt de "VIP". Hij is vanaf dat moment de baas over het hele spel. Als het spel begint, zet hij een timer op zijn eigen apparaat. (Als je het spel speelt, dan weet je dit niet.)
  * Als deze timer voorbij is (na bijv. 2 minuten), zendt hij een signaal naar de server. Als de server deze ontvangt zegt hij meteen "stop deze beurt! Ik reken even wat dingen uit ... Begin de volgende beurt!"
  * Vervolgens informeert hij de VIP dat hij de timer mag resetten, en begint het hele proces opnieuw.
  * Hij informeert óók alle computerschermen. Deze tellen zichtbaar af en laten de spelers zien hoeveel tijd ze nog hebben in deze beurt.

Als de VIP weggaat uit het spel, of zijn internetverbinding verliest, dan stopt het hele spel meteen.

Uiteindelijk is zoiets dus niet meer dan een "illusie" hooghouden tegenover de spelers. De computerschermen tellen niet daadwerkelijk af. De server telt niet af. Het is de VIP die als enige het klokje heeft en daarmee het hele spel controleert.

_Waarom doe je dat zo?_ Als meerdere apparaten hun eigen timer zouden hebben, zouden er conflicten ontstaan tussen deze timers (want er is vertraging over het internet), en het zou heel zwaar worden. Stel men speelt tegelijkertijd 100 potjes op deze server. Als de server voor elk potje, 60 keer per seconde, een klokje moet verder zetten, dan is dat heel veel werk met heel weinig opbrengst :p

Ik vind het een redelijke aanname dat één speler van de groep niet weg mag gaan en geen internet mag verliezen. (Als een andere speler weggaat, per ongeluk of niet, pauzeert het spel totdat diegene weer terugkomt. Dit heb ik nog niet ingebouwd in dit spel, maar wel in vorige spellen, dus ik weet hoe het moet.)

### Efficiënt Internetgebruik

Dit spel stuurt voortdurend signalen over het internet. Deze signalen versturen en ontvangen kost wat tijd en rekenkracht (en een goede internetverbinding). Hoe langer deze signalen, hoe vervelender het wordt. Als ik aan het begin van het spel de hele wereldkaart, met alles erop en eraan, in één keer naar alle computers zou sturen, dan zou de server een tijdje stilliggen ... en daarna alle computers een tijdje stilliggen om deze informatie te verwerken.

Oftewel, je wilt het _absolute minimum_ aan informatie over het internet sturen, te allen tijde.

Ik heb hiervoor enkele ideeën:

  1. Je stuurt alleen _veranderingen_.
  2. Je laat computerschermen _zelf dingen uitvogelen_.
  3. Je stuurt iedere speler een _persoonlijk pakketje_.

**Idee 1:** als een schip niet is verplaatst, waarom zou je haar positie dan nog een keer doorsturen? Als een haven nog steeds exact dezelfde goederen aanbiedt, waarom zou je deze over het internet sturen?

De server moet bijhouden welke informatie veranderd en vervolgens alleen de veranderingen sturen. (De ontvanger kan hier vrij makkelijk mee omgaan. Als hij geen stukje kan vinden over "schip 2", dan gaat hij ervan uit dat er dus niks veranderd is daar en negeert hij het.)

Deze veranderingen bijhouden, echter, is een veel groter probleem. Er zijn meerdere oplossingen, waarvan ik moet kijken welke het beste is.

  * Je kunt van alles bijhouden wat hun vorige toestand was, maar dat kost veel geheugen van de server. Je moet namelijk een complete kopie van de vorige beurt bijhouden.
  * Je kunt ook, elke keer als iets veranderd, deze verandering "markeren" als belangrijk. Stel de server krijgt de opdracht "verplaats schip 2 naar links", dan weet hij ook meteen "schip 2 heeft een verandering doorgemaakt", en slaat deze verandering op.

**Idee 2:** In het eerste artikel praatte ik al over "Perlin noise". Ik hoef alleen een random getal door te sturen, en computers kunnen zelf de hele wereldkaart recreëeren.

Datzelfde idee kun je meenemen naar andere gebieden. Zo wil ik elk computerscherm eens in de zoveel tijd een bericht laten zien, alsof een radio dingen zegt als "in kwadrant 3 is goud gevonden!" en "een grote zeeslag heeft plaatsgevonden bij eiland Hubububa". Ik zou dit bericht vanuit de server kunnen sturen ... maar ik kan de code hiervoor ook op de computers zetten. Dat elk scherm zelf bepaalt wat ze laten zien en wanneer. Als je met meerdere schermen werkt, en bijvoorbeeld spelers in verschillende kamers hebt, geeft dit weer een extra strategische laag---iedereen ziet andere hints en stukjes informatie.

**Idee 3:** alleen de Kapitein hoeft de grondstoffen van het schip te weten. Alleen de First Mate hoeft de huidige oriëntatie van het schip te weten. Alleen de Cartographer hoeft updates te krijgen over monsters/schepen in de buurt van hun schip.

Als ik elke speler alleen de informatie doorstuur _op basis van hun rol_, kan ik elk signaal drastisch verminderen. Er zijn zelfs rollen die (soms) niks hoeven te weten.

### En nu het saaie deel

Ik ga weer aan het programmeren. Als ik het volgende dagboek schrijf, zal de basis van het spel werkende zijn, na heel wat bloed, zweet en tranen :p

Dan kunnen we door naar nieuwe interessante onderdelen: de interface van elke rol, het opbouwen van de wereld (havens, eilanden, etc.), en een stukje over _upgrades_.

Tot dan!

&nbsp;

 [1]: /uploads/2019/06/preparationInterfaces_result.webp