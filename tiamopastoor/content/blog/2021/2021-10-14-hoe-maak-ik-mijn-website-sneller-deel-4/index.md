---
title: Hoe maak ik mijn website sneller? (Deel 4)
author: tiamopastoor
date: 2021-10-14T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is deel 4 van mijn reeks over hoe ik mijn (vele) websites sneller, moderner en gebruiksvriendelijker heb gemaakt. Begin bij deel 1 hier: [Hoe maak ik mijn website sneller?][1]

## Hoe Pandaqi tóch een statische website werd

Ik dacht dat het onmogelijk was. Elke spelpagina heeft compleet z'n eigen opmaak en structuur. Nog erger, spelpagina's die interactief zijn (dus je hebt ze bijv. nodig om het bijbehorende bordspel te spelen), hebben natuurlijk allerlei scripts en code die moet runnen.

Dus ik ging zoeken. En ik kwam een paar vragen tegen van mensen die iets _soortgelijks_ wilden doen. En het antwoord was:

  * Probeer niet meerdere websites in één te stoppen. Als de websites compleet anders werken, _maak er dan gewoon twee websites van_. (Algemeen goed advies, hier niet echt toepasbaar.)
  * Je kunt gewoon de unieke pagina's in de uiteindelijke website droppen _en het zou moeten werken._

Wat? Serieus? Dus ik deed een test op mijn muziekwebsite (want die is statisch en stond al online). Ik maakte een aparte folder, schreef wat onzin in een bestand, en uploadde dat ernaartoe. 

En wat denk je? Werkt prima. Ik kon de folder bezoeken op de verwachte manier en het bestand zei precies wat het moest zeggen, niet meer en niet minder.

En nu ik er langer over nadenk---waarom dacht ik eigenlijk dat het _niet_ zou werken? Die "static site generators" maken gewoon een bundeltje folders en bestanden voor je. Ze zeggen _niets_ over de wereld daarbuiten of wat er verder aan de hand is.

Dus dat bracht mogelijkheden!

Maar zelfs dan, wist ik niet of het zou lukken. Die interactieve pagina's, dat kan toch helemaal niet?

Maar toen realiseerde ik dat _de enige reden dat de pagina's nu interactieve serverelementen hadden, was omdat ik niet anders kon_. De oude Pandaqi website is gebouwd volgens het "database" idee, op de PHP programmeertaal, en daar moest ik het wel op die manier doen.

Maar met wat simpele aanpassingen, zou ik _al die oude spellenpagina's_ gewoon in de nieuwe folder moeten kunnen gooien, en het zou moeten werken!

De term "statische website" is dus eigenlijk heel misleidend. Het betekent niks anders dan: "het bestaat uit folders en bestanden (die niet veranderen)". Het betekent niet dat je geen interactie kunt hebben, of animaties, of dynamische inhoud. Dat kan prima. Sterker nog, het kan _makkelijker_ heb ik nu geleerd.

Oftewel, dit is hoe de Pandaqi website er nu uitziet:

  * Hoofdwebsite = een héle simpele statische website
  * Spellenfolder = bevat alle oude spellenpagina's met alleen simpele aanpassingen (om de PHP/database afhankelijkheid weg te halen)
  * Blogfolder = bevat een statische website _volgens een ander systeem_ om het blog te laten zien.

De hoofdwebsite en het blog zien er compleet anders uit én hebben andere functionaliteit. Daarom besloot ik om er _twee losse websites_ van te maken. Dat lijkt misschien vragen om problemen. Maar het zorgt juist voor enorm overzicht, want je hoeft niet _twee verschillende thema's door elkaar heen te programmeren_.

**Het enige nadeel?** Sommige plaatjes zijn dubbel. Dan gebruik ik het logo/banner van een spel voor een blog artikel (over dat spel) ... maar omdat "blog" en "hoofdwebsite" twee losse systemen zijn, kan ik het plaatje niet hergebruiken. Dus voor de hoofdwebsite moet ik het plaatje _opnieuw uploaden_. Maar ach, nu de plaatjes zo klein zijn, accepteer ik het :p

## Hoe werkt dit in de praktijk?

Oké, dus het is mogelijk om een website vol met spellen, interactieve onderdelen, en dergelijke te maken volgens het (in mijn ogen) superieure systeem van statische websites.

Dat betekent nog niet dat het _makkelijk_ is of _automatisch_. Er zijn een paar hoepels om doorheen te springen. En keuzes om te maken.

Hieronder zal ik dus kort uitleggen welke keuzes ik heb gemaakt, waarom, en wat de resultaten daarvan zijn.

(Daarna is dit artikel definitief klaar. Het gaat immers alleen over algemene methodes voor websites versnellen en verbeteren. Het _visuele ontwerp_ van deze specifieke website, en de _concrete code erachter_, vertel ik dus in een apart Engels artikel (op Pandaqi zelf). Dit is de link: [How I made my game studio website][2]

### Géén dingen die op alle pagina's worden gebruikt

Het is vrij traditioneel om een "header" en "footer" te maken die op _alle_ pagina's van je website terechtkomen. Meestal komen daarbij allerlei extra scripts en bestanden kijken, want ja, dit moet er goed uitzien en werken op _alle_ pagina's.

Dat vond ik te veel worden. Immers, als jij bijvoorbeeld een spelpagina bezoekt, wil ik helemaal geen header laten zien. Ik wil niet dat je eerst langs mijn logo/navigatie moet scrollen voordat je de trailer/screenshots van het spel kan zien.

Dus ik heb alles opgehakt in stukjes en, op specifieke pagina's, alleen de stukjes gebruikt die ik nodig had:

  * Spelpagina's => geen header, onderaan een blok met metadata ( = standaard informatie over het project, zoals hoeveel spelers of speeltijd), hele kleine footer (met slechts een paar knoppen naast elkaar)
      * Computerspel => specifieke stijlen/scripts die _alleen computerspellen nodig hebben_
      * Bordspel => specifieke stijlen/scripts _die alleen bordspellen nodig hebben_
  * Overzichtspagina's => standaard header, géén metadata (want ja, geen specifiek project), veel grotere footer met meer navigatie en mogelijkheden.

Op deze manier, bijvoorbeeld, hoef ik **niet** de algemene lettertypes van de website (Dosis en Raleway) te laden op spelpagina's. Daar heb ik ze nooit nodig en worden de lettertypes van het project zelf gebruikt. Dat scheelt gewoon **200 kb** op _elke_ pagina, voor altijd. (Achteraf gezien, 4 of 5 lettertypes laden per spelpagina was ook een beetje belachelijk ... )

Achter de schermen heb ik alles opgedeeld in modules ("links", "icons", "footer", "header", etc.). Bij het bezoeken van een bordspel, bijvoorbeeld, krijg je alleen de modules die het nodig heeft. Door het systeem worden die al vantevoren gebundeld, zodat het nog steeds maar één bestand is.

{{% remark %}}
Eén van de zwaarste en meest vertragende websithandelingen is **een nieuwe verbinding openen**. Zoals een nieuw plaatje laden. Dus je wil het **aantal** verbindingen op je pagina altijd omlaag brengen. Eén bestand van 100 kb is véél sneller en fijner dan 20 bestanden van 1 kb.
{{% /remark %}}

Sterker nog, ik heb ervoor gezorgd dat ik _per project_ precies kan aangeven welke scripts ik wel/niet wil laden. Die bundelt het systeem dan automatisch in één bestand en laadt die helemaal aan het einde.

(Bijvoorbeeld, sommige van mijn bordspellen kunnen _willekeurige speelborden genereren_ en die omzetten naar PDF. Daarvoor moet ik dus het "jsPDF" script laden. Maar andere bordspellen doen dit niet---om wat voor reden dan ook, misschien hebben ze niet eens een bord---en hoeven die dus niet te hebben.)

En als laatste zoekt elk project automatisch de bestanden "extra.css" en "extra.js". (Als ze er niet zijn, negeert het systeem dat gewoon.) Hierin komen dus de _unieke_ stijlen en _unieke_ (spel)code die alleen op dit ene project van toepassing zijn. 

Deze bestanden kan ik gewoon in dezelfde folder zetten als de pagina zelf. Ik kan zelfs elke structuur gebruiken die ik wil, wat ons brengt bij ...

### Statische websites hebben geen URL-problemen

Bij mijn oude website moest ik steeds wonderen verrichten om de juiste bestanden (voor een interactieve component) te linken aan de voorpagina. Meestal vond ik dat zoveel moeite, dat ik _het hele spel_ maar in één bestand schreef en die in één kaar laadde.

Je kunt wel voorstellen dat dit géén goed idee is. Dat zijn duizenden regels code, allemaal dwars door elkaar heen, die ook nog in één keer moeten worden gedownload door de browser.

Waarom is dit zo'n probleem? 

Nou, om "mooie URLs" te krijgen, moet je vaak code schrijven die de URL herschrijft. Bijvoorbeeld: "pandaqi.com/naamvaneenspel" zou automatisch worden doorgestuurd naar "pandaqi.com/gamesites/naamvaneenspel/index.php" Want ja, dat tweede is superlelijk en wil niemand intypen.

Maar daardoor ben je dus met URLs aan het knoeien. Wat de kans groot maakt dat bestanden niet worden gevonden, of verkeerd worden gevonden, als je probeert een handige structuur aan te brengen. Of gewoon even niet oplet.

Met zo'n statische website ... verdwijnt dat helemaal. Alles staat waar het staat. Alles wordt gevonden zoals je verwacht.

Dus ik heb veel van die digitale componenten nu _opgesplitst_ in meerdere bestanden, zodat ik véél beter weet wat er gebeurt. Bovendien staan deze bestanden in hun _eigen folders_. Dus de structuur van elke spelfolder ziet er ongeveer zo uit:

  * index.html => de voorpagina
  * images => alle plaatjes die ik gebruik 
  * videos => alle videos die ik gebruik
  * game => hierin zit alle spelcode
  * assets => hierin zitten alle plaatjes/geluiden/etc. die alleen voor het spel worden gebruikt

Vergelijk dat met de vorige website, waar alles dus in één folder werd geplopt. En ik overal extra regels code had om de juiste bestanden te vinden.

Uiteindelijk heeft het wel meerdere **dagen** gekost om alles over te zetten, natuurlijk. Want ik moest al die oude code teruglezen, opsplitsen op logische wijze, en dan _overal_ waar het nodig was de URLs aanpassen. 

Daarnaast gebruikte ik deze mogelijkheid om een paar scripts _algemeen_ te maken. Zoals die "jsPDF" waar ik het net over had: als 80% van mijn spellen plaatjes maakt die naar een PDF bestand moeten, kan ik daar beter één keer iets goeds voor schrijven, dan het steeds opnieuw knippen-en-plakken.

### Ik dacht dat er problemen zouden zijn ... maar die waren er niet

Oké. Als je websitespellen maakt, is er één groot probleem: "browsers hebben géén toegang tot iemands bestanden"

Vanwege overduidelijke redenen. Als elke website zomaar toegang kon krijgen tot al de bestanden op je computer, zou er een hele wereld van onheil opengaan.

Maar ... spellen hebben plaatjes nodig, en geluiden, en meerdere bestanden.

Oftewel, de enige manier om een websitespel te testen is _als het op een server staat_ (en niet op je eigen computer). Je kunt hier omheen door _tijdelijk van jouw computer een server te maken_, maar dat is veel werk en ook niet geweldig.

Dus ik bereidde me al voor op het ergste. Ik zou, elke keer als ik iets had aangepast, mijn website opnieuw moeten bouwen en die lokale server moeten herstarten. Pff, is er echt geen betere manier?

Nou, wat blijkt, mijn systeem (_Hugo_) _gebruikt al een (soort) lokale server uit zichzelf!_ Dus toen ik mijn spellen had overgezet en de pagina's bezocht, waren ze, tot mijn verbazing, _compleet functioneel_!

Oftewel, dit was de **oude** workflow:

  * Verander iets aan het spel. (Fix een foutje in de code, schrijf iets nieuws, voeg een plaatje toe, wat dan ook.)
  * Upload dit bestand naar mijn server
  * Herlaadt de pagina
  * Test of het werkt zoals ik hoopte.
  * Herhaal tot ik klaar ben.

Dit kostte zóveel tijd en moeite, maar ik had toentertijd geen idee hoe (en of) het anders kon.

Dit is de **nieuwe** workflow:

  * Type `hugo serve` (in de _command line_ van Windows)
  * Ga aan het werk.

Een significante verbetering, als je het mij vraagt.

{{% remark %}}
`hugo serve` zegt tegen hugo dat het de lokale server moet opstarten en je website "serveren". Zodra je iets verandert, herkent het systeem dat, en ververst meteen de pagina. Dus zolang dit aanstaat, kan ik letterlijk aan één stuk door werken, en alle veranderingen worden direct ingebouwd en getest.
{{% /remark %}}

## Het resultaat?

Een website die

  * Véél sneller is dan vroeger
  * Véél makkelijker te updaten is (voor mij)
  * En er ook nog véél mooier (en foutlozer) uitziet.

Mocht er alsnog een fout zijn, is dat 5 seconden om aan te passen. Alles bestaat uit kleine _modules_, wat het programmeren supersimpel maakt: elk bestand is hoogstens 50 regels en doet precies wat het zegt. Tevens versnelt dat dus ook de website zelf.

De algemene les hier is eigenlijk:

  * Comprimeer _al_ je plaatjes (en zet GIF om in video) behoorlijk aggressief om enorm veel ruimte en snelheid te winnen
  * Maar daarnaast win je het meeste als je _slim bent in de opzet_ van je website. Gebruik alleen wat je écht nodig hebt. Maak modules en laadt alleen wat je wilt. Combineer al die bestanden tot één bestand, om het aantal verbindingen te verlagen.
  * Want je gaat _niet_ veel winnen met "trucs" of "hacks" of "een hele dure server" kopen. Daarmee zal je slechts marginale verbetering zien op de korte termijn.
  * (Besef dat _interactiviteit_ komt van JavaScript, en daarvoor heb je geen server nodig, geen database, helemaal niks. Dus een statische website kan net zo dynamisch zijn als andere websites, misschien zelfs _makkelijker_.)

De snelheidsscore is nu **97**! 

Die van de oude website was **38**.

Dus achteraf gezien had ik dit natuurlijk vanaf het begin moeten doen. Achteraf gezien is het hele idee van databases, en daarmee communiceren via PHP, en _alles_ laden op elke pagina, en 1 minuut moeten wachten om elke update aan een spel te testen ... idioot. 

Maar ja, ik was toen een aantal jaar jonger, erg druk met andere dingen (zoals studie), en had nog maar enkele "serieuze" websites gemaakt. Dus dan gebeuren die dingen. En ik heb er veel van geleerd.

En dat was mijn lange verhaal over alle manieren waarop je websites kunt verbeteren en versnellen.

 [1]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller/
 [2]: https://pandaqi.com/blog/news-and-updates/how-i-redesigned-my-game-studio-website/