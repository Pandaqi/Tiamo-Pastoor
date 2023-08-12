---
title: 'Privé: [Speldagboek] "Wobbly Wizards" #4'
author: tiamopastoor
date: 2022-07-21T13:50:35+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
Ik overweeg om het spel te hernoemen naar "Wealthy Wizards", omdat die naam logischer is. (Je speelt tovenaars die geld proberen te verdienen.) Aan de andere kant staat het nu al overal bekend als Wobbly Wizards, dus hè, niks aan te doen :p

In dit deel ga ik, zoals beloofd, twee spreuken toevoegen: **vernietigen** en **repareren**. Dit zijn tegenhangers van elkaar. Een object dat is vernietigd, kun je met die andere spreuk repareren.

## Het eerste idee

Dit was mijn originele idee voor deze spreuken:

  * Elk voorwerp bestaat uit _meerdere onderdelen_. Een stoel, bijvoorbeeld, heeft vier poten, een zitvlak, en een leuning.
  * Als een object "heel" is, zitten deze onderdelen allemaal netjes aan elkaar vast, en ziet het er gewoon uit als een stevige stoel.
  * Als een speler de **vernietig**-spreuk toepast op een voorwerp, komt er een explosie-effect, en knallen alle onderdelen uit elkaar.
  * De onderdelen zullen in verschillende richtingen schieten en verspreid raken over de grond.
  * Als een speler de **repareer**-spreuk toepast op zo'n _onderdeel_, zoekt het spel automatisch alle onderdelen bij elkaar, en begint het voorwerp te repareren.

## De eerste vraagtekens

Hierbij moeten al meteen een paar vragen worden beantwoord:


  * Is vernietigen/repareren _onmiddelijk_, of kost zoiets tijd?
  * Wat gebeurt er als je een voorwerp wilt vernietigen _wat al is vernietigd_?
  * Wat gebeurt er als je een voorwerp wilt repareren _dat al heel is_?
  * Kun je alle andere spreuken óók toepassen op onderdelen van voorwerpen, in plaats van het gehele voorwerp?
  * Hoe gedragen de onderdelen zich in de wereld? Houden ze zich aan alle ("natuurkundige") regels en wetten?

Ik wil niet dat dit spel erg complex wordt. Het is interessant om bepaalde opties te onderzoeken of om alles mogelijk te maken in een spel ("alle spreuken kunnen toegepast op alles!"). Maar uiteindelijk is er maar één ding belangrijk: "heeft de doelgroep plezier?" En aangezien het een chaotische, family, simpele co-op wordt is complexiteit niet wenselijk.

Daarom beantwoord ik de vragen als volgt:

  * Vernietigen en repareren kost een vaste hoeveelheid tijd. Dit is logisch en intuïtief. Om een stoel kapot te maken, kun je er niet één keer tegenaan tikken en alles versplintert. Je moet meerdere keren erop inhakken. Andersom, om een stoel te maken, moet je meerdere onderdelen in elkaar zetten.
  * Je kunt voorwerpen niet 2x vernietigen.
  * Je kunt voorwerpen ook niet 2x heel maken. Je moet het zien als een "aan/uit" knop: ofwel een object is kapot, ofwel het is heel. Geen andere opties. (Zoals "superkapot" of "superstevig" ofzo.)
  * Ik zou graag willen dat spreuken op alles gelden. Maar stel je het volgende voor: een stoel wordt kapot gemaakt, en de vier poten liggen verspreid over het level. Jij probeert de hele tijd iets op te pakken ... maar er ligt constant zo'n verdomde poot voor. Keer op keer pak je per ongeluk een poot op, in plaats van wat je wilt hebben. Ik denk dat het spel een stuk fijner wordt als "kapotte onderdelen" gewoon genegeerd worden door spreuken. 
      * Aan de andere kant ... als je zo'n poot kan oppakken, kun je het natuurlijk ook uit de weg ruimen. Eventueel zou je zelfs de kapotte onderdelen strategisch kunnen gebruiken. Hmm---nu weet ik het niet meer.

## Everybody needs some body

Die laatste vraag behoeft een langere uitleg.

Eigenlijk halen de meeste spellen trucjes uit. Je denkt dat iets "realistisch" beweegt en botst met dingen, maar eigenlijk gebeurt dat niet. Onze speler, bijvoorbeeld, staat altijd rechtop. Dat is niet realistisch! Als de speler ergens tegenaan knalt, of rent, of scheef springt, of wat dan ook, moet hij draaien! Maar dat zou vervelend zijn. De speler zou nauwelijks te besturen zijn. Dus hebben de meeste spellenprogramma's een speciaal soort object hiervoor, wat wel kan botsen met dingen, maar _niet_ alle regels hoeft te volgen.

In dit geval draait de speler niet, en moet ik zelf de zwaartekracht en alles programmeren. (Dat valt heel erg mee hoor.) Zoiets heet een _Kinematic Body_.

Nu is de vraag: willen wij datzelfde voor onze kapotte onderdelen? Willen we deze onderdelen ook netjes via code controleren, en bijvoorbeeld verbieden om te draaien of ergens heen te vliegen? Of staan we toe dat deze onderdelen realistisch bewegen, botsen, stuiteren, draaien, etc.? Zoiets zou een _Rigid Body_ heten.

Als ik kies voor _Kinematic_, kan het er heel stijf/nep uitzien. Een poot van een stoel zou bijvoorbeeld altijd rechtop blijven staan, hoe hard de stoel ook uit elkaar knalt. Het voordeel is wel dat het makkelijker te besturen en controleren is. (Voor mijn "Wingardium Leviosa" spreuk, bijvoorbeeld, hoefde ik nauwelijsk code te schrijven. Ik heb complete controle over een voorwerp en kan het overal heensturen.)

Als ik kies voor _Rigid_, is het veel leuker en intuïtiever. Een poot van een stoel kan door de ruimte schieten en draaien, en vervolgens tegen een muur botsen en plat op de grond vallen. Je kunt onderdelen wegschoppen terwijl je langsloopt. Het nadeel? Je verwacht het al: het zal lastig worden om de voorwerpen te controleren.

Dus weet je wat we doen? We doen allebei! :p

  * Als een object "heel" is, gebruik ik diens _Kinematic Body_.
  * Als een object "kapot" is, schakel ik dat uit, en gebruik ik voor elk object zijn individuele _Rigid Body_.
  * Ik schrijf twee aparte manieren om een object te controleren: eentje voor Kinematic, eentje voor Rigid.

Het laatste deel zal nog wel eens het moeilijkste kunnen worden. Maar we gaan het proberen!

_Opmerking:_ de "onderdelen" van een voorwerp zullen doorgaans te klein zijn om op te pakken met onze huidige raycasts. Ik zal dan ook nog eens goed naar dat systeem moeten kijken. Ik hoor dat in de nieuwe versie van het programma "raycast shapes" komen, dus in plaats van een lijn kun je een hele cirkel or rechthoek de wereld insturen. Dat zou moeten helpen :p

## Stoelen kapotmaken

Wie wil er nou geen stoelen kapotmaken? Omdat ik te lui was om een leuning te maken, werd het meer een krukje dan een stoel, maar het idee blijft hetzelfde.

Eerst moest ik code schrijven om dingen te laten exploderen ... en vervolgens weer op magische wijze terug in elkaar te zetten! Voor het gemak haalde ik alle andere dingen uit de scene, en liet ik een object exploderen door op een random knop te drukken. Hieronder is het resultaat:

[embedyt] https://youtu.be/VVYTocGv23A [/embedyt]

Ik vind het nu al leuk. Natuurlijk moeten er nog visuele effecten bijkomen, maar het systeem zelf werkt meteen goed! En dat is best verrassend, want als je "natuurkundige wetten" gaat breken in computerspellen, kun je vaak een lading problemen en bugs verwachten.

## Nu met spreuken!

De volgende stap is om iets kapot te maken/repareren _door middel van de juiste spreuk_ (in plaats van een willekeurig testknopje indrukken).

Eerst moest ik even een groot deel van de code herschrijven. De code rekende nu namelijk op één object, maar dat is niet meer het geval. Elk voorwerp in het spel bestaat vanaf nu uit meerdere onderdelen, dus de code moet daar rekening mee houden.

Dit was een stom, saai karwei. Ik ga er verder ook niks over zeggen. Het resultaat is in ieder geval dat voorwerpen weer kunnen bereikt met spreuken.

Daarna kwam het leuke deel: de spreuk afvuren. Het enige wat ik hoefde te doen was de juiste functie ("break\_object()" of "repair\_object()") aanroepen als een object geraakt werd. Die functie start een timer, en als die timer vol is (wat zo'n 1 à 2 seconden duurt), is een voorwerp compleet kapot gemaakt ofwel gerepareerd.

TO DO: Filmpje!

Lala

## De details

Wat ik nu heb gedaan is best wel moeilijk. (Geloof me, ik ben verbaasd dat het allemaal werkt.) Dus er zitten veel haken en ogen aan. Zo moet ik heel veel extra code schrijven om alle _onderdelen_ van voorwerpen ook interactief te maken, om bepaalde uitzonderingen op te lossen (bijv. als een _onderdeel_ van het veld afvliegt, wat doen we dan?), en om weer duidelijk te maken wat er gebeurd.

Uiteindelijk kon ik gelukkig twee technieken gebruiken die ik al had gebruikt: _Raycasts_ en _plaatjes die altijd naar de camera kijken_. Elk voorwerp test met een Raycast naar beneden waar de grond is. Op die plek wordt het symbooltje getekend dat aangeeft dat je een voorwerp hebt geselecteerd met je spreuk (die paarse ring). Als je iets aan het afbreken/repareren bent, verschijnt er een plaatje van een "laadbalk", die steeds voller raakt. Zo weet je precies wat er gebeurt, en het ziet er prima uit.

TO DO: Filmpje!

## Maar ... waarom doe je zo moeilijk?

Ik heb een plan!

Het plan is om de eerste wereld van het spel de "verhuiswereld" te maken. Oftewel, alle spelers zijn tovenaars die bijklussen als verhuizers.

In het eerste level verschijnt aan de lopende band meubilair, en jij moet het met "Wingardium Leviosa" spreuk op de juiste plek zetten. Simpel. Het is een beginnerslevel, om mensen te leren hoe het spel werkt.

In het tweede level wordt het moeilijker. Sommig meubilair is te groot om door bepaalde deuren/poorten/gaten te passen, dus je leert de vergroot/verklein spreuk gebruiken.

In het derde level---je ziet het al aankomen---is een deel van het meubilair stuk! En jij moet het dus repareren als je er geld voor wilt ontvangen. (Als extraatje kan ik misschien de spelers in aparte ruimtes opsluiten, en moet men eerst de muur afbreken voordat men ergens anders naartoe kan lopen.)

Op deze manier wil ik die eerste wereld gebruiken om de paar belangrijkste spreuken uit te leggen en te leren.

Daarnaast heb ik een idee waarvoor je de _onderdelen_ van een voorwerp kunt gebruiken, maar ik heb het nog niet zo goed uitgewerkt. Het idee is om _toverdrankjes_ in het spel te stoppen. In elk level staat een "pan" of "kom" waar je spullen in kunt stoppen. Als je een bepaalde combinatie spullen in de pan gooit, krijg je een toverdrankje! (Bijvoorbeeld: twee bladeren van een plant + twee stoelpoten = drankje waarmee alle spelers tijdelijk sneller worden. Het is een snel voorbeeld---zoek hier geen logica :p)

Dat is dus de reden dat ik zoveel aandacht geef aan dit mechanisme. Het gaat een hele grote rol spelen in het spel.

## De hamvraag: één spreuk of twee?

Er zijn veel spreuken met tegenhangers. Zo heb ik bijvoorbeeld de "groei"-spreuk en een losse "krimp"-spreuk die precies het tegenovergestelde doet. Nu weer heb ik een spreuk die twee kanten op kan: iets kapot maken, of iets repareren.

Nu is de vraag: moet ik die niet combineren tot één spreuk? Of moet ik er twee losse spreuken van maken?

_Hoe combineer je het in één spreuk?_ Spullen zijn ofwel _heel_ ofwel _kapot._ De spreuk kan dus automatisch tussen die twee toestanden switchen. Is het object dat je raakt toevallig heel? Dan gaat het kapot. Is het object kapot? Dan maak je het met diezelfde spreuk nu heel!

Het effect van de spreuk hangt dus af van de huidige toestand van het voorwerp. Dit is op zich logisch en makkelijk te gebruiken. Ook vermindert dit het aantal spreuken en de complexiteit van het spel.

Maar ... het hele spelidee is dat er _chaos_ is. Mensen moeten allemaal tegelijkertijd spreuken afvuren, en het is lastig om heel snel precies de juiste dingen te doen. Door er twee losse spreuken van te maken vergroot je die chaos. Misschien wil iemand iets repareren ... maar pakt per ongeluk de vernietigspreuk! Tegelijkertijd maak je het spel behapbaarder, want elke spreuk doet één ding---niet meer en niet minder. Zulke elementaire spelelementen zijn altijd heel goed.

Ik ga, voor nu, alle spreuken **los** van elkaar houden. Ik ga kijken hoe moeilijk dat is en hoe het spel op die manier speelt. Als het niet goed blijkt te werken, kan ik achteraf relatief makkelijk spreuken combineren. Ik hoef slechts een check toe te voegen bij het afvuren van de spreuk: in welke toestand is het voorwerp? Is het kapot? Oh, dan gaat deze spreuk het nu repareren. Is het heel? Nope, nu niet meer.

## Conclusie

Ik heb eventjes héél hard moeten nadenken en wiskundige dingen moeten toepassen, maar dan heb je ook wat. Dit systeem werkt goed en ziet er leuk uit. (Het doet me denken aan die scene in Harry Potter en de Halfbloed Prins, als ze aan het begin van de film een verwoest meubilair van een Dreuzelhuis weer heel toveren. Vond ik ook altijd een grappige scene.)

In het volgende devlog voeg ik ondersteuning toe voor meerdere spelers/controllers. Dit is op zich heel makkelijk. Wat het lastig maakt, zijn de volgende twee dingen:

  * Spelers kunnen per ongeluk disconnecten, of later pas bij een spel aanschuiven. Dus de computer moet heel goed bijhouden wat allemaal verbonden is en wat wel/niet gebruikt wordt.
  * Spelers moeten ook elkaar kunnen betoveren. Dus als jij een "Wingardium Leviosa" spreuk afvuurt naar je medespeler, moet je die daarmee kunnen oppakken en verplaatsen. Dat zal wel weer een hoop code kosten.

Daarna zal ik een eerste testlevel maken, met een paar simpele objecten en opdrachten.

Hoe dan ook: exciting times, exciting times!

&nbsp;

&nbsp;

&nbsp;