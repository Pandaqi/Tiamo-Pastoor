---
title: 'Privé: [Speldagboek] "In hetzelfde schuitje" #9'
author: tiamopastoor
date: 2019-08-12T13:50:00+00:00
language: nl
draft: true
private: true
categories:
  - Games

---
Welkom bij het negende speldagboek ("devlog") van mijn spel "in hetzelfde schuitje".

De vorige keer vertelde ik over het ontwikkelen van een "geschiedenis" of "backstory" voor de wereld. In eerste instantie was mijn plan om dit hele systeem af te maken en dan pas verder te gaan met de volgende stap---schatkisten verstoppen en aanwijzingen bedenken

Het duurde, echter, iets te lang voordat deze "backstory simulatie" af was. Toen realiseerde ik: "hey, ik heb die hele simulatie niet perse nodig om schatkisten uit te proberen! Ik kan voor nu op willekeurige plekken een schatkist plaatsen en dat alvast uitproberen!"

En zo geschiedde het dat ik mijn werkzaamheden voor de simulatie even staakte en alvast met schatkisten ging werken.

In dit artikel leg ik uit hoe ik willekeurige hints/aanwijzingen/clues naar de locatie van schatkisten genereer.

## Een schatkist

Elke schatkist heeft de volgende eigenschappen:

  * x-coördinaat
  * y-coördinaat
  * eigenaar ( = naam van de piraat die deze schat heeft verborgen)

Voor nu, om dit systeem uit te testen, heb ik deze eigenschappen willekeurig gemaakt. De schatkist wordt ergens in de oceaan gedropt, inclusief willekeurige piratennaam.

(Hiervoor combineer ik gewoon één of twee piraat-achtige termen. Zo heb je piraat "Thunderbird", "Fingerdance", "Blackblack", en nog vele anderen :p)


Deze eigenschappen zijn het enige dat ik nodig heb om aanwijzingen te bedenken.

  * De locatie is natuurlijk nodig, want elke aanwijzing wijst naar deze locatie :p
  * De naam is nodig om verschillende aanwijzingen aan elkaar te verbinden. In eerste instantie was ik dit vergeten, en waren alle aanwijzingen dus "een schat ligt in sector 3!" en "een schat kan je vinden onder eiland X", waar je natuurlijk niet veel wijzer van werd.

## Aanwijzingen

Elke soort aanwijzing is natuurlijk van tevoren door mij bedacht. Ik typ een zin waarin ik gaten laat zitten, die opgevuld moeten worden met info over deze specifieke schatkist.

**Voorbeeld 1:**

> "Oh yeah, __'s treasure can be found near __"

In het eerste gat moet ik de naam van de eigenaar invullen ("Blackbeard's treasure"), in het tweede gat moet ik een locatie invullen (zoals een haven of een eiland).

> "Oh yeah, _Blackbeard_'s treasure can be found near _Port Royal_"

**Voorbeeld 2:**

> "__'s treasure? I heard there are __ docks within a radius of __ tiles"

Het eerste gat is weer de eigenaar, het tweede gat is een getal, en het derde gat is weer een getal.

> "Thunderbird's treasure? I heard there are 3 docks within a radius of 5 tiles."

Nu weet je dat de schat is omringd door drie (dichtbijzijnde) havens.

**Aanwijzingen bedenken:** Het bedenken van deze aanwijzingen was niet zo makkelijk als ik dacht. Je zoekt naar iets dat informatie geeft, maar het niet té makkelijk maakt.

Zoiets als "de schat is precies 3 tegels verwijderd van haven X" voelt te makkelijk. Aangezien een haven aan de rand van een eiland zit, en schatten (voor dit moment) alleen op de bodem van de zee liggen, is de kans groot dat er maar een handjevol tegels zijn die in aanmerking komen.

Maar iets in de richting van "de schat is in het zuiden" is weer te vaag. Met een beetje pech betekent "in het zuiden" hetzelfde als "ongeveer 95% van de kaart".

Al snel merkte ik dat ik vastliep met de aanwijzingen. Het enige interessante wat ik had, was juist een hele bijzondere soort aanwijzing: een _dynamische aanwijzing_.

<PLAATJE> (gewoon om alvast visuele upgrades te laten zien, en de tekst een beetje op te breken)

## Statische & Dynamische Info

Aangezien een schatkist op dezelfde plek blijft liggen, is er informatie die nooit veranderd. Als een schatkist op dit moment in _ondiep water_ ligt, zal die het hele spel in _ondiep water_ liggen.

Dit is **statische informatie**. Veel van de aanwijzingen hebben minstens één onderdeel dat statisch is. Dit maakt de code lekker snel en makkelijk, maar de aanwijzingen saai en voorspelbaar.

Dit zijn voorbeelden van statische aanwijzingen:

  * "De schat is __ tegels van het dichtstbijzijnde eiland" => aangezien eilanden niet kunnen lopen, zal de schat altijd even ver blijven liggen
  * "De schat ligt in sector __" => aangezien schatten niet verplaatsen, verandert deze informatie ook niet

Op zich is dit prima, maar ze voelen niet organisch en interessant. Stel jij zou onderzoek doen naar de plaats van een beroemde schat. Hoe groot is de kans dat iemand op je afloopt en zegt "Hé, zoek eens in sector 4"? Of dat een willekeurig persoon zegt "Joh, ik hoorde dat je op zoek bent naar die schat. Ik weet er verder niks van af, maar ik weet wel dat hij precies 13 kilometer van de kust ligt."?

Nee, het voelt oppervlakkig.

Toen kreeg ik een idee.

Spelers mogen veel dingen in het spel een naam geven: eilanden, havens, steden, hun eigen schip, etc.

Wat nou ... als deze dingen in de aanwijzingen terugkomen? Als iemand ze een naam heeft gegeven, dan komt die naam in de aanwijzing te staan. Maar als niemand dit specifieke ding heeft ontdekt, dan blijft de aanwijzing vaag.

> "Hmm, I heard that treasure sunk within 6 tiles of _Port Royal_" => haven al ontdekt

> "Hmm, I heard that treasure sunk within 6 tiles of _some dock_" => haven nog niet ontdekt

De aanwijzing verandert op basis van hoe de wereld verandert. Als je deze aanwijzing aan het begin van een potje krijgt, kun je er minder mee dan wanneer je hem later krijgt. Dit geeft zelfs goede reden om dezelfde plek meerdere keren te bezoeken en dat onderdeel van je strategie te maken.

Dit noem ik **dynamische informatie.**

En ik dacht: als ik dit systeem toch ga gebruiken, kan ik er net zo goed het meeste uithalen. Dus hieronder staan andere voorbeelden van dynamische hints.

  * "Het schip __ is op dit moment het meest dichtbij de schat" => in het gat wordt de naam van een _spelersschip_ ingevuld
  * "De schat wordt bewaakt door monster __" => in het gat wordt de naam/soort van het meest dichtbijzijnde monster ingevuld

_Opmerking:_ mijn excuses voor de inconsistentie qua taal :p Sommige zinnen zijn ineens Engels omdat ik ze rechtstreeks uit mijn code/notities kopieer, terwijl andere Nederlands zijn omdat ik ze ter plekke schrijf. Ik denk dat het geen probleem is.

## Efficiëntie

Dit gaat een groot systeem worden in het spel, dus efficiëntie is van belang.

De eerste regel is natuurlijk: ik moet niet de hele aanwijzing over het internet gaan sturen. Elke 60 seconden misschien wel honderd stukken tekst heen en weer sturen, is niet iets waar de server blij van wordt.

In plaats daarvan stuur ik slechts het **soort aanwijzing** en de nodige **variabelen** (wat ik moet invullen op de gaten).

Aan de spelerskant wordt de aanwijzing dan "gereconstrueerd". Zij hebben als enige de grote lijst van aanwijzingen, en kiezen simpelweg de juiste aanwijzing en vullen de gaten in.

De tweede regel qua efficiëntie is wat onduidelijker. Ik heb namelijk stiekem drie soorten informatie: statisch, dynamisch, en statisch-dynamisch.

_Wat betekent statisch-dynamisch in vredesnaam?_ Nou, stel we willen de meest dichtbijzijnde haven gebruiken in een aanwijzing. Welke haven dit is, verandert niet. Havens kunnen niet weglopen. Als haven nummertje 4 het dichtstbij is, zal dat het hele spel zo blijven. Maar, de _naam_ van de haven kan dus wel veranderen. Deze informatie is dus enerzijds statisch, anderzijds dynamisch.

Ik kan het statische deel alvast opslaan ( = "het nummer van de haven"), en het dynamische deel markeren als iets wat nog moet worden ingevuld ( = "de naam van de haven"), maar dat is lastiger dan je denkt.

Vind je dit verwarrend? Ik ook.

Mijn eerste plan was om zoveel mogelijk informatie _voor het begin van het spel_ te berekenen en op te slaan. Maar, zoals je hierboven ziet, zou de code hiervoor nogal dramatisch zijn. Daarnaast is de eerste beurt van het spel al veruit de langste (50-100 ms, tegen 0-5 ms voor de andere beurten).

Daarom besloot ik om alle soorten informatie op één hoop te gooien en _ter plekke_ uit te rekenen. Alleen als een speler informatie opvraagt, worden de gaten ingevuld en de juiste informatie teruggestuurd.

Zo "verspreid" je de lasten. Aan het begin van het spel, worden de schatkisten geplaatst en aanwijzingen uitgedeeld. Maar pas tijdens het spel worden de aanwijzingen aangevuld en compleet gemaakt. Zodoende duurt geen enkele beurt te lang.

Ook is de kans groot dat sommige aanwijzingen nooit (of pas laat) worden gelezen. Op deze manier voorkom je veel rekenwerk dat uiteindelijk zinloos blijkt.

## Werkt dit?

Ja en nee.

Ja, de aanwijzingen worden netjes gemaakt en op het juiste moment weergegeven.

Ja, elke keer als je een stad bezoekt, krijg je weer een beetje extra informatie.

Maar nee, het is té lastig om de locatie van een schatkist te bepalen, en daardoor te saai en frustrerend.

Waardoor komt dit? Nou, op dit moment heeft een gemiddelde wereld zo'n 60-70 steden (aan de rand van een eiland). Ook bevat de wereld drie maal zoveel schatkisten als dat er spelersboten zijn. Zeg even dat we 2 boten hebben en dus 6 schatkisten.

Zie jij wat ik zie? Elke schatkist heeft 10 vage hints, verspreid over de hele wereld. Als je een stad bezoekt, hopend op informatie over schatkist X, is de kans slechts 1/6 dat je iets daarover te horen krijgt. De kans is 5/6 dat je informatie krijgt over een schatkist waar je totáál niet in geïnteresseerd bent.

Waar een schatkaart je normaal gesproken rechtstreeks naar één schat leidt, zorgt het huidige systeem ervoor dat je niet gericht kunt zoeken. Dat is vervelend.

Hoe los je dat op? Nou, door de spelers gericht te laten zoeken!

<PLAATJE> (wederom om de boel op te breken)

## Gericht zoeken

Op dit moment krijgen spelers een bericht "Do you want to ask around town?", waarna ze op een grote knop 'EXPLORE!' drukken. De volgende beurt krijgen ze de hint terug die op deze locatie is opgeslagen.

Ik wil dat veranderen naar de volgende drie onderdelen

  * "The people in <your town> might know something. What do you want to ask?"
  * **Een tekstvak waarin je iets kunt typen**
  * Een grote knop met daarop 'ASK AROUND!'

In dit tekstvak kun je hetgeen typen waarin je geïnteresseerd bent. Ben je op zoek naar de schatkist van Blackbeard? Dan typ je "Blackbeard"!

  * Als de stad een hint heeft over deze schat, krijg je deze terug
  * Zo niet, dan krijg je een error message terug (zo van "Blackbeard? Never heard of 'em!")

Als je dit tekstvak leeg laat, krijg je een willekeurige hint. Op die manier kun je altijd nieuwe informatie krijgen en nieuwe "namen" te weten komen.

Nu vraag je misschien: _maar, wat bepaalt of een stad bepaalde aanwijzingen kent?_ Hiervoor kies ik het meest logische antwoord: steden dichterbij de schatkist hebben meer informatie daarover. Dus, zolang een stad binnen een straal van X tegels is van een schatkist, zal deze informatie krijgen daarover.

**Opmerking:** in de uiteindelijke versie van het spel spelen _relaties_ een rol. Als jij een slechte relatie hebt met speler 2, en je komt bij een stad die in het bezit is van die speler, dan kunnen ze je voor de gek houden. Dan krijg je een "foute" aanwijzing, om je op een dwaalspoor te brengen.

**Opmerking:** op dezelfde manier krijgt de uiteindelijke versie meer soorten hints. In plaats van dat een hint naar een _schatkist_ leidt, kan een hint ook naar een _scheepswrak_ leiden. Als je dit wrak ontdekt, kun je daar weer nieuwe informatie vinden. Op die manier speelt de historie en opbouw van de wereld een grotere rol én krijg je meer interessante hints.

## Werkt dit dan?

Joah. Met dit systeem kon ik tenminste een volgende werkende versie maken en die uitproberen met verschillende mensen!

Mensen vinden het heel leuk om de schatkisten op te sporen en de aanwijzingen te verzamelen.

Maar, als dadelijk de backstory erbij komt, dan wordt het pas interessant! Dan kan ik namelijk een hoop interessante aanwijzingen toevoegen, omdat ik ook weet _waarom_ een schatkist is begraven, of _wanneer_, of andere info.

Maar voor nu is men tevreden met droge aanwijzingen als "de schatkist ligt binnen 10 tegels van deze stad" en "speler 1 is het dichtste bij", en dat is al heel wat.

## Een technische opmerking

Als je niet geïnteresseerd bent in de technische kant van programmeren, kan je dit stuk overslaan!

In eerste instantie gebruik ik altijd de meest "naïeve" manier om iets te programmeren. Soms werkt dat prima, soms blijkt dat veel te sloom.

Deze keer was het veel te sloom :p

Ik deed namelijk het volgende:

  * Ga door de lijst van steden heen
  * Bepaal voor elke stad welke schatkisten binnen een straal van 10 tegels liggen.
  * Sla voor al deze schatkisten een willekeurige aanwijzing op.

Met een stuk of 30-40 steden, en gemiddeld 5-10 schatkisten, betekende dit dat ik HEEL VEEL afstanden mocht gaan uitrekenen. (En behoorlijk wat informatie op de server moest opslaan.)

Dat vond ik niet zo leuk, dus ik liet het systeem andersom werken. Steden beginnen zonder aanwijzingen, maar bouwen gedurende het spel informatie op.

  * Aan het begin van het spel heeft geen enkele stad een aanwijzing opgeslagen.
  * Pas als een speler een aanwijzing opvraagt, wordt er het een en ander uitgerekend.
  * Vraagt de speler om een willekeurige aanwijzing? 
      * Dan pakt de stad letterlijk een willekeurige aanwijzing, en slaat deze op.
  * Vraagt de speler om een specifieke aanwijzing ("Blackbeard")? 
      * Eerst kijkt de stad of deze een aanwijzing heeft opgeslagen voor deze naam.
      * Zo niet, dan reken ik uit of de stad binnen 10 tegels van de genoemde schat ligt.
      * Als de stad binnen het bereik ligt, kiest de stad een willekeurige aanwijzing en slaat deze op (onder de juiste naam)
      * Als de stad buiten het bereik ligt, krijgt de speler gewoon een bericht dat ze geen informatie hebben.

Op die manier worden dingen pas uitgerekend (en opgeslagen) als daarom wordt gevraagd.

_Opmerking:_ per schat wordt wel opgeslagen welke aanwijzingen al zijn "vergeven". Anders heb je kans dat alle steden precies dezelfde informatie hebben ("de schat ligt tussen 3 eilanden!"), waardoor je nooit zeker weet waar de schat is. Nee, elke stad moet een andere soort aanwijzing bevatten.

## Conclusie

Deze devlog was iets korter dan de andere, maar dat mag wel een keertje. Dit systeem is nou eenmaal niet het moeilijkste om te implementeren. De meeste tijd ging zitten in het bedenken van mogelijke aanwijzingen, met de juiste balans tussen te moeilijk en te makkelijk.

Ik heb nu nog geen idee wat het volgende artikel gaat inhouden. Waarschijnlijk weer iets over die "backstory simulatie" en mijn opmerkingen na de nieuwe testpotjes. En anders iets over de visuele kant, want die mag ook wel wat upgrades gebruiken.