---
title: 'Speltip: Kaarten ontwerpen (een praktijkvoorbeeld)'
author: tiamopastoor
date: 2019-01-21T15:00:54+00:00
language: nl
thumb: /uploads/2021/09/Naivigation-DrivingCards-Version3_result.webp
categories:
  - Games

---

Bijna elk bordspel bevat kaarten. (En kaartspellen bevatten doorgaans altijd kaarten :p) 

Zodoende heb ik in mijn leven meer _speelkaarten_ ontworpen dan wat dan ook. 

In dit artikel wil ik vertellen wat ik daarvan heb geleerd. (Want het is veel lastiger dan je denkt, zeker als je pas net begint, en de principes die ik heb geleerd kun je ook goed gebruiken in andere visuele ontwerpen.)

## "Het TomTom-spel"

Ik zal de principes uitleggen aan de hand van een voorbeeld uit mijn eigen ontwerpen. De werktitel van dit project was "het TomTom-spel". Het idee kun je denk ik wel raden:

> Alle spelers proberen samen een auto over een route te sturen, terwijl ze de instructies van de TomTom proberen op te volgen.

{{% remark %}}
Dit is een hobbyproject. Het uiteindelijke ontwerp van de kaarten (die aan het einde zult zien) is _niet_ bedoeld om in een professioneel gepubliceerd spel te worden gebruikt. Als dat het geval was, zou ik veel meer tijd besteden aan de kaarten afwerken en visuele geinigheden toevoegen. 

Oh, en het project is halverwege hernoemd naar "naïvigatie", want ik wilde geen sluikreclame maken voor TomTom. Wat een beetje mislukt is, natuurlijk, door het schrijven van deze alinea.
{{% /remark %}}

Dit spel kent drie verschillende soorten kaarten:

  * **Navigatiekaarten:** deze kaarten moeten de TomTom simuleren. Ze bevatten een aanwijzing die uit een navigatiesysteem zou kunnen komen: "eerste afslag rechts", "rechtdoor op dezelfde weg", etc.
  * **Autokaarten:** deze kaarten bevatten bewegingsinstructies voor de **auto**. Denk aan: "één tegel vooruit", "draai naar links", "draai naar rechts"
  * **Actiekaarten:** deze kaarten bevatten een specifieke actie, die van alles kan zijn. (Dat was te verwachten.)

Ik zal het ontwerpproces van alle drie de kaarten laten zien (en natuurlijk uitleggen).

## Hiërarchie & Gewicht

Als je een spel hebt met verschillende "soorten" of "types" kaarten, wil je dat in één oogopslag het verschil duidelijk is. Je wil niet dat een speler een kaart oppakt, leest, gebruikt---en er dan pas achter komt dat het helemaal geen actiekaart is.

Je wilt dus dat de speler _als eerste_ ziet wat voor soort kaart het is. Pas als de speler iets langer kijkt, ziet hij verdere details (zoals de specifieke actie, of hoeveel de kaart kost, etc.).

Elke kaart heeft dus een bepaalde "informatie hiërarchie". Voor mijn spel is deze hiërarchie gelukkig simpel:

  1. Soort (navigatie, auto, of actie)
  2. Actiesymbool (de richting van de navigatie, de instructie voor de auto, of de titel van de actie)
  3. Details (evt. tekeningen, opvullingen, uitleg van iets, etc.)

Het principe is dus als volgt:

> **Leid de ogen van de speler van de _eerste categorie _in de hiërarchie naar de _laatste categorie_**

In visueel ontwerpen spreekt men vaak over het "gewicht" van een voorwerp. Iemands ogen glijden automatisch van iets met een zwaar gewicht naar een licht gewicht. De vraag is nu: _hoe maak je iets zwaarder of lichter?_

Hieronder zijn enkele veelvoorkomende ideeën om iets **zwaarder** te maken:

  * Plaats het meer naar **links**. (Mensen lezen van links naar rechts. Althans, in grote delen van de wereld.)
  * Plaats het meer naar **boven**. (Mensen lezen van boven naar onder. Daarnaast voelt de onderkant van de kaart als "de grond", en alles wat daarboven zweeft voelt zwaarder.)
  * Maak het **groter.**
  * Geef het meer **(wit)ruimte.**
  * Geef het een fellere **kleur** (of complexere **textuur**).
  * Plaats het _vaker_ op de kaart.

## Praktische tips

Kaarten zijn gemaakt om in de hand te nemen. Je kunt er dus vanuit gaan dat een groot deel van de kaart _niet zichtbaar_ is, vanwege iemands vingers óf vanwege andere kaarten. Het volgende principe geldt:

> **Het is het _altijd_ aan te raden om zoveel mogelijk informatie te geven via de hoeken en de randen.**

_Opmerking:_ in veel gevallen zal de linkerbovenhoek het belangrijkst zijn, maar dat ligt aan persoonlijke voorkeuren van mensen, want sommigen spreiden kaarten andersom of pakken ze anders in de hand.

Daarnaast zijn mensen véél sneller in _patronen_ herkennen dan in _tekst lezen_. Waarom zou je op elke kaart tekst zetten ("als je deze kaart speelt krijg je één extra leven", als je dat ook kunt vervangen door een symbool (zoals een hartjesicoontje)?

Dat geeft het volgende principe:

> **Vervang zoveel mogelijk tekst met unieke (en duidelijk herkenbare) icoontjes/symbolen.**

Waarom zet ik "duidelijk herkenbaar" tussen haakjes? Omdat veel spellen wel symbolen gebruiken, maar ze zijn óf te klein, óf ze lijken veel te veel op elkaar. Een muntje betekent dan iets compleet anders dan een muntje met een streep eronder ... maar wie gaat dat nou altijd goed zien? Een laatste probleem ontstaat wanneer symbolen _inconsistent_ zijn, maar dat is een heel artikel op zichzelf.

Ten derde: kaarten worden op tafel gespeeld. Mensen zitten _rondom_ een tafel en bekijken de kaart dus vanuit verschillende hoeken. Het laatste principe is derhalve:

> **Probeer je kaart direct leesbaar te maken vanuit alle hoeken.**

Het gebruik van symbolen helpt hierbij al enorm. (Een hartje op de kop herkent men wel als hartje. Tekst op de kop is niet te lezen.) Daarnaast worden veel kaarten gespiegeld (denk aan standaard speelkaarten waarbij de cijfers ondersteboven staan op de onderkant).

{{% remark %}}
Omdat de **richting** in mijn spel heel belangrijk is, zal ik niet goed aan het laatste principe kunnen voldoen. Het moet immers duidelijk zijn wat "boven" is op de kaart en wat "onder", anders weet je niet welke richting de pijl nou aangeeft.
{{% /remark %}}

## Navigatiekaarten

**Belangrijk:** ik heb de grootte van de kaarten definitief bepaald vóórdat ik begon met ontwerpen. De grootte maakt namelijk veel uit. Je kunt niet een ontwerp zomaar even laten krimpen of groeien en verwachten dat het nog even goed werkt. Ik wist dat dit spel véél kaartjes ging gebruiken, dus ik maak de kaartjes wat kleiner dan normaal om papier/inkt te besparen. Ik ging uiteindelijk voor 20 kaartjes per A4. Dit geeft een afmeting van 48×55 mm.

Oké, wat moet de navigatiekaart laten zien? Een instructie voor de route. Voorbeelden zijn:

  * "Rechtdoor"
  * "Eerste afslag rechts"
  * "Tweede afslag rechts"
  * "Houdt links aan"
  * "Keer om"

Het leek me leuk om de interface van de TomTom na te maken, omdat dat precies is wat deze kaarten nabootsen. Bovendien zijn veel mensen al bekend hiermee, wat het makkelijker maakt het spel direct te begrijpen.

In die interface staat doorgaans de _tijd_, hoeveel _kilometer_ men nog moet, etc. Deze heb ik allemaal niet nodig en hoef ik dus niet op de kaart te zetten. Dat scheelt weer ruimte en complexiteit! Hieronder heb ik een kale (snelle) representatie getekend van zo'n TomTom interface:

![](/uploads/2021/09/Naivigation-NavigationCards-02_result.webp)

Natuurlijk moet deze kaart "rechtdoor op dezelfde weg" voorstellen.

Ik mis nog een aantal cruciale onderdelen:

  * Er staat normaal gesproken geen _tekst_ op een TomTom. De instructies worden _gesproken_. Dus ik moet iets verzinnen om de tekst op de kaart te zetten _zonder_ dat het overvol of onduidelijk wordt.
  * Ik moet een duidelijke "taal" bedenken voor de symbooltjes onderaan. Welke symbolen gebruik je voor "tweede afslag rechts"? Welke symbolen voor "rechtdoor op dezelfde weg"?
  * Er moet een pijl op de weg die de richting aangeeft. (Nu is het gewoon een willekeurige weg.)
  * Er moet een manier zijn om de kaartsoort ("navigatie") _meteen_ te herkennen. (In sommige varianten van het spel heb je deze kaarten in je hand. Dan moet je dus meteen kunnen zien dat het hier navigatie betreft.)
  * De kaart is nu "liggend" (de lange zijde is horizontaal), terwijl kaarten normaal gesproken "staand" zijn (de lange zijde is verticaal). Ik kan dit gebruiken als _extra_ onderscheid van de andere kaarten. Maar dat kan ook juist verwarrend zijn.
  * Ik denk dat het niet nodig is om echt bomen en wolken te maken. De kaart wordt waarschijnlijk juist duidelijker en simpeler als ik die versieringen weglaat.

### Tweede poging

De volgende iteratie van het ontwerp zag er als volgt uit:

![](/uploads/2021/09/Naivigation-NavigationCards-Version2-02_result.webp)

Dit zijn de belangrijkste veranderingen:

  * Er zit een rand om de kaart heen. Deze rand is donkerbruin/donkeroranje en zal gebruikt worden voor alle navigatiekaarten. (Een lichte kleur is veel te fel en afleidend.)
  * In elke hoek staat een symbooltje. De bedoeling was om datzelfde symbool te gebruiken als Google Maps om een plaats aan te duiden. Ik weet niet of dat voor iedereen meteen duidelijk is eigenlijk ... Ik vind het wel een leuk symbooltje. Het enige probleem: ik heb een beetje een gebrek aan ruimte in de hoeken: de symbooltjes staan een beetje te dicht op andere onderdelen. 
      * Ik heb de symbooltjes niet gespiegeld. Dat komt omdat de _richting_ van de kaart belangrijk is, én omdat dit specifieke symbooltje er---eh---bijzonder uitziet als je er twee op de kop naast elkaar zet.
  * Onderaan heb ik meerdere pijlen toegevoegd. Actieve pijlen worden wit en krijgen de focus, de andere pijlen worden doorzichtig en vervagen in de bruine achtergrond. De combinatie van pijlen geeft de instructie weer. (Bijvoorbeeld: "eerste afslag rechts" heeft één pijl rechtdoor, en één pijl naar rechts. "Tweede afslag links" heeft twee pijlen rechtdoor, en één pijl naar links.)
  * Er staat tekst op de kaart! Het leek me leuk om echt te doen alsof het uitgesproken werd door de kaart, vandaar de tekstbubbel.

Ik vind het op zich leuk! Maar alles kan beter, natuurlijk. Mijn grootste probleem zit bij het midden van de kaart: de weg + oranje pijlen. Bij een rechte weg kan dit nog, maar een kaart met een bocht kan onhandig worden, en een rotonde wordt al helemaal een hel. (Ik vind de schaduw onder de pijlen wel echt super leuk. Ik ga kijken of ik die erin kan houden.)

Misschien heb ik liever een lijn over de weg die de route aangeeft, alsof je een route uitstippelt op een schatkaart. Dat gaat de grootste verandering worden voor de derde versie.

### Derde poging

Dit is de derde iteratie van het ontwerp:

![](/uploads/2021/09/Naivigation-NavigationCards-Version3-02_result.webp)

Ten eerste: de verkleinde hoeksymbooltjes vind ik geen succes. Toegegeven, de rest krijgt nu meer ruimte en de kaart is minder druk. Maar de grootte klopt niet meer en deze symbolen staan niet meer op dezelfde lijn als de andere objecten. Mede daardoor ziet het er gewoon onhandig en chaotisch uit. (Ik vind de symbooltjes wel heel schattig, zo klein.) Dus ik ga waarschijnlijk terug naar de oude symbolen, zorg dat ze mooi op één lijn staan met de rest, en kijk waar ik ruimte vandaan kan toveren.

Ten tweede: de tekst moet echt niet kleiner worden dan dit. (De uiteindelijke kaart is ongeveer drie maal kleiner dan het uitvergrote plaatje hierboven.) Men zegt vaak dat "10pt" de minimum lettertypegrootte is, maar in mijn ervaring kun je maar beter rond de 14-16pt zitten. (Oudere mensen met minder zicht kunnen het anders echt niet lezen, of lezen het constant verkeerd. Jonge kinderen schrikken gewoon van kleine tekst :p) Om dit te bereiken heb ik sommige "aanwijzingen" herschreven om ze korter te maken.

Ten derde: ik heb alle objecten rondom de weg weggehaald (dat was een onbedoelde woordgrap). Er is geen ruimte voor, zeker niet bij zo'n kruispunt. Daarnaast zijn ze niet nodig, want ze geven geen extra informatie of "hints" om de andere informatie beter te begrijpen. (Misschien dat ik op de uiteindelijke kaarten wel hier en daar een boompje neerzet, of een schaap.)

Op zich vind ik de route wel leuk, maar het is niet helemaal wat ik ervan had verwacht. (Een gestippelde route, zoals bij een schatkaart, werkte niet goed in perspectief. Een schatkaart is 2D, dan werkt het wel. Dat is mijn schatkaartentheorie.) Het is wel beter te volgen, duidelijker, en mooier dan de pijlen hiervoor. Ik ga het er sowieso inhouden, ik moet alleen uitzoeken hoe ik het nog beter maak.

{{% remark %}}
Aangezien we in Nederland aan de rechterkant van de weg rijden, ga ik de linkerkant van mijn weg dus nooit gebruiken. (Met uitzondering van de "keer om"-kaart en misschien de "rij achteruit" kaart.) Ik vind dit oké. Een TomTom zou er ook oké mee zijn, want die laat ook alleen maar jouw kant van de weg zien. Die extra rijbaan zit erbij voor de compleetheid en het realisme.
{{% /remark %}}

### Voldoet de kaart?

Stel deze kaart verschijnt. Kun je meteen zien welk type kaart het is? Het heeft een karakteristieke rand + vier keer het navigatiesymbool. Als je hem in de hand hebt, kun je het dan ook meteen zien? Ja, zelfde reden. Kan men zonder tekst weten wat de kaart voorstelt? Ja. De eerste paar kaarten zullen nog even wennen zijn, maar daarna lijken de symbolen mij vanzelfsprekend. Is er "backup" voor als men het niet begrijpt? Ja, de instructie staat ook op de kaart (als tekst), en de instructie is aangegeven in het wegenplaatje.

Merk op dat zowel de **tekst** (bovenaan) als de **symbolen** (onderaan) allebei de kleur wit bevatten, een afgekaderde ruimte om zich heen hebben, en verticaal gezien op één lijn staan. Dit doet drie dingen:

  * Het geeft aan dat ze aan elkaar gerelateerd zijn. (Ze vertellen allebei dezelfde instructie.)
  * Het plaatst hen hoger in de visuele hiërarchie dan het wegenplaatje (plus route). Die bevat meer onschuldige kleuren (groen/blauw/grijstinten). Je zou het "rustiger" kunnen noemen.

Ik vind dat het voldoet.

{{% remark %}}
De Google Maps-symbooltjes zijn nu wel een beetje aan het vechten om aandacht. Ze staan lager in de hiërarchie dan hun gewicht doet vermoeden (dat komt vooral omdat ze een felle kleur hebben, vaker op de kaart staan, en op belangrijke posities (alle hoeken)). Ik zoek nog even hoe ik dat kan oplossen. Misschien kan het witte rondje een zachter roze worden, of kleiner worden. Ik kan misschien ook het hele ding van kleur veranderen.
{{% /remark %}}

Ik denk dat we nu lang genoeg bij deze kaartsoort hebben stilgestaan. (Als het spel af is, zal ik het op de site zetten. Je vindt het dan via de "Bordspellen" pagina. Dan kun je meteen _alle_ uiteindelijke versies van de kaarten bekijken.)

Op naar de volgende!

## Autokaarten

Er zijn maar weinig verschillende autokaarten in het spel. (Je hebt vooruit, achteruit, kwartslag draaien, halve slag draaien. Ik heb geen kaarten om de auto een salto te laten maken of ineens diagonaal over het bord te laten racen.) Ik denk daarom dat het mogelijk is om het _soort autokaart_ in de hoeken te laten zien. Vergelijkbaar met het Google Maps-symbool van de navigatiekaarten, maar dan een uniek symbool waaraan je meteen ziet welke autokaart je in de hand hebt.

In het midden van de kaart zet ik datzelfde symbool, maar dan veel groter. Waarschijnlijk komt daaronder een kort stukje tekst dat de instructie bevestigt. (Eerst wilde ik ook op deze kaart een pijl maken en misschien zelfs een autootje op de weg tekenen. Maar dan zou het teveel lijken op de navigatiekaarten én te druk worden.)

Aangezien deze kaart bijna compleet bestaat uit symbolen, maakte ik eerst de symbolen. (Zo wist ik de afmetingen, kleuren en andere restricties voordat ik de gehele kaart begon te ontwerpen.)

![](/uploads/2021/09/Naivigation-DrivingCards_result.webp)

Een paar opmerkingen:

  * De groene/rode highlights zijn een experiment. Ze maken de pijl een beetje 3D en geven nuttig informatie door (groen is begin/naar voren, rood is einde/naar achteren). Maar als ik de symbooltjes klein maak (in de hoeken van de kaart) haal ik die kleuren waarschijnlijk weg. Als de highlights écht niet werken, haal ik ze gewoon helemaal weg en worden het weer platte symbooltjes.
  * Het vervagen van de pijl (bij de eerste drie symbolen) vind ik heel gaaf. Ik zoek nog een manier om dit ook bij de kwartslag/halve slag toe te passen. Ik heb nu alleen steeds een stukje opengelaten aan het einde van elke pijl. (Dat zijn die "gaten" in de cirkel.)
  * _Waarom doe je niet gewoon een pijl opzij voor "kwartslag/halve slag" draaien?_ Ten eerste: alleen een pijl opzij is verwarrend. Dan denkt men dat je zomaar naar links/rechts kan, zonder te hoeven draaien. Het betreft hier een kaart die de auto alleen maar mag _draaien_, niet _verplaatsen_, dus een cirkel of draaiende pijl leek me logisch. Ten tweede: ik heb geprobeerd net zo'n pijl te doen als bij de navigatiekaarten. Dit zag er lelijk uit, paste niet op de kaart, én gaf de draaibeweging niet goed weer. Dus koos ik voor de huidige symbolen.

Verder vind ik de symbolen wel goed gelukt 🙂 Dus we kunnen door naar het ontwerpen van de hele kaart!

### Autokaarten II

Veel van ons werk is al gedaan (toen ik hiervoor de navigatiekaarten ontwierp). De kaarten hebben al een eigen algemene kleur ("grijs") die doorschijnt in de rand, de achtergrond, en de symbolen. De pijlen van de symbolen zijn qua stijl hetzelfde als de pijlen in de navigatiekaarten. Ook het lettertype is hetzelfde, hoewel het deze keer schuingedrukt is, omdat het hier ietsje minder belangrijk is. (En de kaart is minder druk.)

De grootste uitdaging is: symbolen op de vier hoeken plaatsen. Mijn idee was om een soort "autootje" van bovenaf te tekenen, die op elke hoek te plaatsen, en daarin het symbool (in het klein, natuurlijk) te plaatsen. Laten we kijken hoe dat eruit ziet.

![](/uploads/2021/09/Naivigation-DrivingCards-Version2_result.webp)

Zoals je ziet heb ik enkele van de "draaipijlen" veranderd. Ik was benieuwd of dit mooier en/of duidelijker was dan alleen een groene/rode kop van de pijl. Het eerste ontwerp (groene rand) is mooi consistent met de andere kaarten, maar het tweede ontwerp (helemaal groene pijl) vind ik iets sterker. In het algemeen kun je dan het beste _beide werelden combineren_: ik kleur alle pijlen helemaal in (ipv alleen de rand), zelfs bij de "vooruit"pijlen die ik zo ook wel goed vond.

Daarnaast vind ik de hoeksymbooltjes mooi gelukt! Je kunt zien dat het een autootje is, maar het staat niet in de weg en past mooi binnen het ontwerp. Ik vind het er heel strak en gaaf uitzien. Ook hou ik van het "negatieve kleureffect": de grote pijl is donker op een lichte achtergrond; de symbooltjes zijn licht op een donkere achtergrnod.

Het enige kritiekpuntje is dat de draaisymbooltjes teveel op elkaar lijken én te klein zijn. Ik verwacht dat je de kaart haast tegen je neus moet drukken om het verschil tussen de hoeksymbooltjes te zijn bij "kwartslag naar rechts" en "kwartslag naar links". Dus ik denk dat ik---met pijn in mijn hart---voor de hoeksymbooltjes maar één pijl gebruik en de rest weglaat.

### Autokaarten III

Dit is de uiteindelijke versie voor alle kaarten:

![](/uploads/2021/09/Naivigation-DrivingCards-Version3_result.webp)

Wederom, natuurlijk is dit niet perfect of "100% af". Maar dit artikel gaat dan ook over het ontwerpen van bruikbare, leesbare kaarten. In dit geval ben ik tevreden omdat:

  * Het onderscheid tussen vooruit en achteruit is duidelijk (kleurverandering). Ik weet uit ervaring namelijk dat mensen dit anders gaan vergeten en "achteruit" per ongeluk omdraaien naar "vooruit", en vice versa.
  * De pijlen "poppen" uit de achtergrond. De algehele kleur (grijs) is duidelijk, en de accentkleuren maken het iets levendiger en minder saai/plat/eentonig.
  * De symbolen op de hoek zijn goed zichtbaar op elke manier en geven goed aan wat de kaart doet.
  * Er is wederom een "backup": als je het symbool niet begrijpt, is er de tekst. Eventueel begrijp je misschien het hoeksymbool wel meteen (en de tekening in het midden niet). Bovendien geven de "vervagende streepjes" goed aan waar de achterkant van de pijl zit.
  * Het voelt als een geheel. Je ziet een bepaald visueel patroon (zoals de kleur, de symbolen, het groen/rode accent, etc.) en weet meteen wat voor soort kaart het is en eventueel wat het doet.

## Actiekaarten

Als laatste zijn er de _actiekaarten_. In eerste instantie had ik het idee om een papieren vliegtuigje als symbool te nemen, en in de achtergrond een soort "windvlagen" te maken. Toen ik dit idee had, echter, waren de andere ontwerpen een stukje "losser" en "speelser". Ik weet dus niet of dit idee nog goed past. Er is maar één manier om dat uit te vinden: het gewoon proberen!

_Wat bedoel je met "losser_/_speelser"?_ De kaarten hierboven zijn vrij strak en recht. De routetegels---die je niet in dit artikel ziet---zijn evenzo rechte lijnen en perfecte rechthoeken. Ik had de pijlen ook wobbelig of ronder kunnen maken. Ik had ook veel meer kleuren kunnen gebruiken, of een speelse textuur op de achtergrond. Maar dat heb ik niet gedaan. _Waarom?_ Omdat het spel anders te onduidelijk werd. Het is héél belangrijk in dit spel om precies te kunnen visualiseren wat de route is en wat een bepaalde kaart doet. Daarvoor moet je precies rechte wegen hebben en duidelijke, rechtlijnige aanwijzingen (van de navigatiekaarten). En ja, als die stijl is vastgelegd, kan ik moeilijk de stijl voor de andere kaarten drastisch veranderen.

Dit zijn de eerste pogingen/iteraties met het papieren vliegtuigje:

![](/uploads/2021/09/Naivigation-ActionCards_result.webp)

In eerste instantie wilde ik de kaart blauw maken. Want papieren vliegtuigje = lucht = blauw. Maar toen zag ik dat ik bij de routetegels al blauw had gebruikt (voor water) én een donkerpaars (voor stenen). Ik wilde niet dat spelers dachten dat deze actiekaart iets te maken had met water/steen. Het zou alleen maar verwarring veroorzaken, omdat spelers onbewust dat patroon denken te zien.

Gelukkig zag ik dat ik één kleur (van mijn kleurenschema) niet had gebruikt bij de routetegels. Dit was een lichte geel/beige kleur die ik goed kon gebruiken (mede omdat de andere kaarten niet bijzonder licht zijn).

Toen kwam ik erachter dat ik het dikgedrukte lettertype eigenlijk niet ideaal vond. Dus ik wisselde terug naar het normale lettertype.

De hoeksymbooltjes voelden alsof ze uit het niets op de kaart waren geplopt. Ik wilde ze iets van een rand of ondergrond geven, en het meest logische leek mij een schaduw. Op zich vind ik het goed gelukt, hoewel de schaduw zelf misschien nog beter kan. (Zeker omdat deze kaart gespiegeld is, zoals ik uitleg in onderstaande paragraaf ...)

Dit idee van "grounding" is belangrijk bij visueel ontwerpen. Je wilt dat elementen van het ontwerp precies in hun plaats vallen en verbonden zijn met de rest van de elementen. Je wilt het gevoel geven dat ze een essentieel onderdeel zijn van het ontwerp en zelfverzekerd "op de grond" rusten. Vandaar de schaduw, maar vandaar ook het weggetje dat naar de tekst leidt, en het witte vlak om de tekst heen, en de "windslierten" die het idee geven dat het papieren vliegtuigje hier thuishoort.

Als laatste dacht ik: deze kaarten zullen geen symbolen bevatten. Elke actie betekent namelijk iets anders in elk van de 3 spelvarianten die ik heb bedacht. Dus de kaart die je boven ziet---met alleen maar tekst---is hoe elke kaart zal worden. Dat kan nog wel eens een probleem zijn, want tekst ondersteboven lezen is niet ideaal. Dus ik besloot deze kaart te spiegelen. Nu kan je de kaart van boven én onder meteen lezen en begrijpen.

{{% remark %}}
De "windslierten" op de achtergrond van de kaart vond ik eerst een probleem, maar in de uiteindelijke kaart (met de tekst eroverheen, en het weggetje dat naar de tekstbox leidt) vind ik het eigenlijk wel leuk staan. Dus ik laat het zo. Ik vind het een grappige, speelse toevoeging in een anderzijds wat statisch ontwerp.
{{% /remark %}}

{{% remark %}}
De hoeksymbooltjes zijn, wederom, een klein beetje overheersend. Normaal gesproken zou ik twee symbolen hebben weggelaten door alleen een symbool in de _linkerbovenhoek_ en _rechteronderhoek_ te plaatsen. Maar _elke_ kaart in dit spel heeft alle vier de hoeken gevuld, dus het zou inconsistent zijn om het hier ineens niet te doen.
{{% /remark %}}

### Voldoet deze kaart?

Deze vraag heb ik eigenlijk al beantwoord in de opmerkingen hierboven. De kaart heeft een eigen kleurenschema dat je kunt herkennen. De rand en de hoeksymbooltjes geven meteen aan dat dit een "actiekaart" is. Het _soort_ symbool (papieren vliegtuigje + "windslierten") geeft intuïtief ook het idee van actie/beweging.

De tekst op de kaart is leesbaar van beide richtingen en is verbonden (op thematische wijze!) met de rest van het ontwerp.

Het enige nadeel is dat de _tekst_ niet meteen zegt _wat de actie inhoudt_, maar dat is een specifiek probleem van mijn spel. Om dat op te lossen moet ik de tekst zo vanzelfsprekend mogelijk maken. (En natuurlijk staat de volledige uitleg van de kaarten in een mooi overzicht in de spelregels.)

{{% example %}}
De kaart hierboven heet "toeristische route". Wat is de eerste gedachte van mensen? Een omweg, een langere route dan normaal gesproken, een route langs bezienswaardigheden. Laat dat nou (ongeveer) de betekenis van de kaart zijn in de drie spelvarianten!

Andere kaarten heten bijvoorbeeld "keer om" (neem je laatste zet terug) of "signaal verloren" (de navigatiekaart voor deze ronde wordt weggehaald en/of telt niet). In het algemeen is het verstandig om eerst het _spelontwerp_ zo helder mogelijk te hebben, en dan pas problemen op te lossen met het _visueel ontwerp_.
{{% /example %}}

## Dat was het!

Ik hoop dat je veel interessante dingen hebt geleerd over visueel ontwerpen in het algemeen en speelkaarten ontwerpen in specifieke zin!

Ik hoop ook dat je beseft dat dit geen 100% complete handleiding is. De voorbeeldontwerpen zijn verre van af en zouden in deze vorm waarschijnlijk nooit in een professioneel spel belanden. Ook heb je soms hele andere eisen aan de kaarten in een spel. Als een kaart veel meer informatie moet bevatten (dan in mijn voorbeelden), moet je al anders gaan denken over het ontwerp. Ook ken ik spellen waarbij kaarten een andere functie hebben als je ze omdraaid of een kwartslag draait. Dat brengt ook interessante designkwesties met zich mee.

Misschien dat ik in de toekomst ook van die unieke kaarten ontwerp. In dat geval zal ik er weer een artikel over schrijven!

Voor nu gaat het volgende deel van deze reeks (deel 4) over scoresystemen en wincondities in bordspellen. En zoals altijd: blijf leuke spellen maken!