---
title: Ebooks hadden zoveel beter kunnen zijn
author: tiamopastoor
date: 2023-06-15T14:00:00+00:00
language: nl
layout: horizontal
categories:
  - Miscellaneous

---
Ik heb in totaal nu _twee_ ebooks uitgegeven (van in totaal zo'n 10 boeken). Waarom niet meer? Enerzijds omdat veel dan die boeken _prentenboeken_ zijn, anderzijds omdat het hele systeem een rotzooi is.

Ik ben meer tijd kwijt geweest met vechten tegen het EPUB formaat (en diens rare keuzes), dan met het ontwerpen van de voorkant van het boek. Het is zo'n zinloos, tijdrovend gevecht dat ik soms overweeg om mijn komende boeken geen digitale versie meer te geven.

In dit artikel wil ik graag

  * Uitleggen waarom het een rotzooi is
  * Tips geven over hoe je de meest voorkomende problemen oplost
  * En mijn idee geven van hoe het veel beter zou kunnen zijn.

## De problemen

### Ebooks zijn websites

Het originele idee achter EPUB was behoorlijk slim en vooruitstrevend. Ze realiseerden dat schermen allerlei verschillende formaten hadden, dat lezers misschien _zelf_ hun lettertype grootte wilde kiezen.

Dus ze kozen ervoor om ebooks _websites_ te maken. Websites kan je ontwerpen om automatisch aan te passen op je scherm. Websites kan je makkelijk de instructie geven om, bijvoorbeeld, een groter lettertype te gebruiken voor alle paragrafen.

Dit is hoe ik mijn ebooks maak.

  * Ik schrijf mijn project als website. (Hierbij gebruik ik allerlei technische snufjes om mij te helpen. Bijvoorbeeld, in mijn laatste boek begint elk hoofdstuk met een plaatje volgens een bepaald patroon. Oftewel, ik hoefde dat niet met de hand te maken, ik laat dat gewoon automatisch genereren door de computer!) 
  * Ik zorg dat ik voldoe aan alle gekke regeltjes van EPUB
  * En dan hoef ik alleen maar de uiteindelijke website te "zippen" (in een **.zip** bestand stoppen), en de uitgang **.epub** te geven.

Oftewel, een ebook is simpelweg een website verpakt in één bestand. 

Websites worden geschreven in HTML: _HyperText Markup Language_. Oftewel, een taal die niks anders doet dan tekst _markeren_ als het een of het ander. Als ik typ `<p>Hallo</p>`, dan zeg ik dat Hallo een _**p**aragraaf_ is. Als ik typ `<h1>Hoofdstuk 1</h1>`, dan zeg ik dat dit een _**h**eading ( = kopje)_ is. 

Het is hartstikke simpel om te leren en gebruiken. Heel het internet werkt hierop.

Dit is ook de reden waarom PDF geen goed alternatief is. Het hele idee van PDF is dat het, op alle apparaten, exact hetzelfde is: _Portable Document Format._ Je kan het meenemen, je kan het opslaan, de inhoud staat vast en blijft hetzelfde. Dat werkt dus niet op verschillende schermgroottes, en wordt een nog grotere hel als je interactie wilt toevoegen. De meeste PDFs zien er geweldig uit op je computer, maar zouden een hel zijn op een ereader.

### Ze kozen een verouderde versie

So far, so good. Maar wat deden de ontwikkelaars van EPUB? 

Ze kozen een **oudere, kleinere versie van HTML** en legden die vast. 

Oftewel, EPUBs kunnen véél minder dan moderne websites. De meeste dingen zijn niet toegestaan. 

Die oudere versies hadden een aantal problemen. Problemen die inmiddels zijn _opgelost_ in de huidige staat van het internet. Want dat is wat je doet: je maakt iets, leert van je fouten, en maakt het beter.

  * Features die de ereader niet herkent zorgen dat hij _crasht_ (of je mag je boek van tevoren überhaupt niet publiceren). Moderne websitetalen negeren dingen die ze niet kennen, en gaan gewoon verder.
  * De structuur en code achter de schermen komt héél strak, en bevat veel "overbodige" informatie. (Bijvoorbeeld, je moet bij een EPUB op meerdere plekken dezelfde informatie invoeren. Als deze afwijkt, of je geeft het maar één keer ... je raadt het al.)
  * Ebooks vereisen een aantal verschillende bestandsformaten, allemaal onbekend of verouderd, om iets heel simpels te doen. (Het instellen van een inhoudsopgave en voorkant.)

### De laatste versie

Eigenlijk is het grote probleem dat ze besloten dat EPUB moest werken met _versies_. (We zijn al lange tijd bij EPUB 3, ook al werken veel dingen nog op EPUB 2.) Als je daarvoor kiest, krijg je altijd dezelfde narigheid. Zodra je een versiesysteem hebt, wordt upgraden of veranderen bijna onmogelijk.

  * Veel dingen zullen de _nieuwe_ versie nog niet ondersteunen.
  * Terwijl de meeste mensen dus alleen de _oude_ versie blijven gebruiken, want die kennen de ereaders tenminste.
  * Tot het punt dat een catastrofe plaatsvindt: ofwel mensen geven het op om nog te "verbeteren" of "upgraden", ofwel van de ene op de andere dag stopt een oudere versie compleet met werken.

HTML werkt allang niet meer met versies. Als ze verbeteringen vinden, dan worden die langzaam ingevoerd, en over tijd ondersteunen alle browsers het. (Maar "oude" HTML blijft goed en crasht niet, het is simpelweg meer gelimiteerd of minder efficiënt.)

Maar omdat EPUB met versies werkt, loop je eigenlijk altijd ver achter. 

Bijvoorbeeld, het systeem dat ik gebruik om mijn websites te maken (die uiteindelijk ebooks worden), is wél modern. Ik update het regelmatig naar de nieuwste versie, omdat hij daarvan sneller en beter wordt. Maar inmiddels is de kloof zo groot, dat mijn nieuwe websites dingen toevoegen aan het ebook die EPUB3 niet ondersteunt. (En EPUB2 dus zéker niet.)

Ik zal een heel specifiek voorbeeld geven.

Al _jaaaarenlang_ bestaan er in HTML zogenaamde "void elements". De meeste elementen hebben een opening (`<p>`) en een sluiting (`</p>`). Maar void elements hebben dat niet nodig, dus je laat de sluiting achterwege.

Je raadt het al.

  * Mijn huidige versie voegt automatisch een paar void elements toe, volgens een syntax die al bijna 15 jaar geldig is.
  * Maar ebooks herkennen dat niet. Die willen dat je alsnog die sluiting toevoegt. Als je dat niet doet ... crasht hij compleet en wil nergens openen.

Uiteindelijk heb ik het ebook moeten openen (ná de export) en met de hand al die void elements alsnog moeten sluiten. Er was geen andere manier om dit te voorkomen, want _waarom_ zou een systeem iets inbouwen om een zwaar verouderde en ongeldige syntax te ondersteunen?

Dit probleem gaat keer 10. En hoe langer EPUB vasthoudt aan versies, hoe vaker dit gaat gebeuren.

Toen ik mijn laatste boek wilde publiceren, kreeg ik een melding van de uitgeverij dat Amazon nogal inconsistent is met haar ondersteuning. Ze raadden mij aan om simpelweg geen EPUB 3 meer te proberen, maar bij EPUB 2 te blijven, als ik zonder problemen bij Amazon binnen wilde komen. 

EPUB 3 werd ontwikkeld **in 2011.**

### Zorgen over beveiliging

Als laatste is de EPUB standaard ontwikkeld met het idee dat documenten zo beter konden worden beveiligd. Hier kunnen we kort over zijn: dit is nooit waar en nooit een goed idee.

Als iemand _toegang_ heeft tot iets, dan is het te kraken. Zeker zoiets simpels als een boek is makkelijk te doen. Je kan ingewikkelde standaarden bedenken, je kan een hoop rotzooi aan het boek toevoegen, het maakt niks uit.

Je maakt de ervaring alleen maar vervelender voor zowel schrijver als lezer.

### Het resultaat

Wat een simpele stap had moeten zijn, is een nachtmerrie waar ik eigenlijk niet meer aan wil beginnen.

EPUBs hadden zo geweldig kunnen zijn. Je maakt elk boek als een _website_. Modern, leesbaar in de browser, met complete toegang tot websitetalen voor _opmaak_ en _interactie_.

En met één druk op de knop bundel je de website tot één bestand en kan het verkopen als ebook.

Dat had het moeten zijn. 

In plaats daarvan begrijp ik na honderden uren klooien met websites en ebooks nog steeds maar half hoe het in elkaar steekt. En elke keer komen er weer twintig nieuwe vage _errors_ die mij een dag bezighouden, vlak voordat het boek moet worden uitgegeven.

## Tips voor de meest voorkomende problemen

Hieronder geef ik een korte uitleg van hoe EPUB nou eigenlijk _werkt_. Via die uitleg kan ik de grootste (specifieke) problemen blootleggen en oplossingen geven.

### De drie onderdelen

Op het hoogste niveau, vereist een EPUB drie onderdelen.

  * **mimetype** => een bestand met niets anders dan de inhoud "application/epub+zip"
  * **META-INF** (folder) => ****bevat een bestand **container.xml** met een paar standaardregels. Het enige doel hiervan is dat hij verwijst naar waar het **.opf** bestand staat met een overzicht van het boek.
  * **OPS** (folder) => ****deze folder bevat daadwerkelijk alle inhoud van je boek.

OPS staat voor _Open Publication Structure_. Vroeger gebruikte men vaak OEBPS hiervoor: _Open Ebook Pulication Structure_.

Voelt dit onnodig ingewikkeld? Dat is het ook. 

Deze moeten _in deze volgorde_ toegevoegd aan het **.zip** bestand. Elke andere volgorde en je ebook is compleet nutteloos geworden. (Waarom? Ik heb géén idee.)

  * Je kan ze zippen via de _command line_, dan wordt volgorde behouden.
  * Ik maak persoonlijk een nieuw zip bestand, en open die in de Windows Explorer. Dan sleep ik die drie onderdelen, één voor één, in de juiste volgorde, erin.

### Overzicht van je boek

Zoals gezegd, moet je OPS folder dus een **content.opf** bestand hebben. Deze vertelt de computer wat de inhoud van je ebook is.

  * **manifest:** een lijst met alle inhoud, zowel je hoofdstukken, als je media (plaatjes, audio, video, ...)
  * **spine:** een lijst met de _volgorde_ van die inhoud

Als laatste heeft het een **toc.ncx** bestand nodig. Deze gebruikt de inhoud die je eerder hebt aangegeven, en zet ze op de juiste volgorde (met de juiste naam/verwijzing) om een inhoudsopgave te maken.

Er zijn een paar grote fouten die je hier kan maken.

  * **content.opf** moet _precies_ al je inhoud bevatten, niet meer, niet minder. (Ik had een keer een lettertype laten staan tussen de bestanden, dat ik uiteindelijk niet gebruikte. Nou, errors alom.)
  * Deze twee bestanden hebben bovenin een _uid_ veld. Deze moet _hetzelfde_ zijn om ze aan elkaar te linken.
  * De versie van HTML die ebooks gebruiken staat dus geen "void elements" toe. In mijn geval, voegde mijn proces automatisch nieuwe elementen bovenin toe van de vorm **<meta ...>**. Dat mag dus niet. Het moet **<meta ... />** zijn; hij moet zichzelf afsluiten.

De verdere _details_ van alles dat je moet toevoegen, moet je zelf opzoeken in een diepgaandere tutorial dan dit. Dit zal hetzelfde zijn voor alle ebooks of weinig veranderen. (Ik vond artikelen als [deze][1] duidelijk en goed.)

### Inhoud

Elk hoofdstuk (en de voorpagina/inhoudsopgave) is een **.xhtml** bestand. Daarin kan je _grotendeels_ simpele HTML schrijven, en het zal als eigen hoofdstuk worden gepresenteerd. (Ik stop deze bestanden in een aparte _chapters_ map, voor overzichtelijkheid, maar dat hoeft niet.)

Omdat ze een website zijn, kunnen ze dus ook andere bestanden toevoegen op de gebruikelijke manier. 

Dus je kan ergens anders plaatjes neerzetten, en ze dan in je hoofdstukken opvragen met de `<img />` tag. (Let op de slash aan het einde! Geen void elements, je moet het netjes afsluiten!) Vanzelfsprekend moeten al deze plaatjes---niet meer en niet minder---zijn aangegeven in de **content.opf**.

Je kan een **stylesheet.css** schrijven (met de lettertypes, groottes, kleuren, en andere opmaak die je wilt gebruiken). Vervolgens vraag je die op bovenin elk hoofdstuk.

Ik gebruik een vrij kleine en standaard opmaak voor boeken, die je overal online terug zal vinden. (Georgia lettertype, logische lettergroottes, inspringende paragrafen, kopjes beginnen iets lager op de pagina, fijne marges aan de rand.)

### Wat kan er fout gaan?

Bij de inhoud kan je natuurlijk de meeste fouten maken.

  * Ten eerste moet je HTML volledig geldig zijn, natuurlijk. Alle elementen die je opent, moet je netjes sluiten. Alle elementen die je gebruikt, moeten bestaan.
  * Het is **verplicht** dat plaatjes een **alt** attribuut hebben. (Dat is een stukje tekst dat wordt weergegeven als het plaatje niet kan worden geladen, of wordt uitgesproken als bijvoorbeeld een blind persoon het boek probeert te lezen.)
  * Een aantal bekende HTML **tags** bestaan niet in de EPUB wereld. Dit geldt voor alles wat enigszins modern is, maar ook voor zoiets als **<br/>** (om geforceerde _line breaks_ toe te voegen). En zoals altijd: hij negeert deze niet, hij crasht gewoon volledig.
  * Ondersteuning voor **andere lettertypes** is zeer twijfelachtig en moet je eigenlijk niet willen. Als je het toch doet, ondersteun zowel **.otf** als **.woff2** lettertypes. 
      * (Mijn laatste boek had een apart lettertype voor elk personage dat een eigen hoofdstuk kreeg. Nou, dat heb ik geweten. Op de helft van de plekken werkte het boek perfect, bij de andere helft werd zomaar 75% van het boek weggegooid.)
  * EPUB kent alleen de meest bekende en traditionele bestandsformaten. Dus **.jpg** en **.png** voor plaatjes, **.mp3** voor audio, en **.mp4** voor video. (Maar audio en video is ook twijfelachtig, zeker op oudere apparaten.)
  * Ook HTML **entities** doen het niet. Bijvoorbeeld, **&mdash;** levert "---", maar dus niet in ebooks. Je moet de _unicode_ versie gebruiken (met cijfers), _of_ je moet een "Find-and-Replace" doen om alle entities te vervangen door het symbool zelf. 
      * In Calibre heb je ergens een optie van "quotes slim omzetten", die doet dit perfect voor mij.
  * Zelfs de laatste EPUB versie, ondersteunt slechts een oudere versie van CSS. Een veel voorkomende feature in boeken, bijvoorbeeld, is dat de eerste letter een "drop cap" is: veel groter en sierlijk opgemaakt. Het leest fijn, maakt duidelijk dat een nieuw hoofdstuk begint, en ziet er professioneel uit. Dat __kan _makkelijk_ in de huidige versie van CSS ... maar dus _niet_ in ebooks :p

Bij onzekerheid, **houd het simpel.**

Een algemene levensles, maar ebooks dreunden hem er weer volledig in bij mij. Ik probeerde iets cools te doen. Ik probeerde te experimenteren met ebooks die _meer_ waren dan een lap tekst of een digitale versie van het geprintte boek.

Dat was een fout. Ik heb er vele, vele uren inzitten ... en EPUB ondersteunt het gewoon totáál niet. Toen ik hiernaar zocht, vond ik eindeloos veel fora met mensen die hetzelfde zeiden. Serieuze projecten waar ze misschien wel een jaar aan werkten, die uiteindelijk niet eens meer werden gepubliceerd.

Nee, ze maakten er wel een _website_ van. Nee, uiteindelijk hadden ze maar een _app_ gemaakt.

Als je boek ook maar _iets_ speciaals wilt doen, dan zijn die media daar veel beter voor geschikt.

### Je boek testen

Het gratis programma Calibre is geweldig ... maar daardoor juist niet geschikt. Bijna alles wat je erin gooit, kan het openen, zelfs als het een ongeldige EPUB is.

Een betere test is ...

  * Je boek daadwerkelijk op een ereader zetten. Hoe ouder en kapotter, hoe beter :p (Als het zelfs _daarop_ werkt, moet het zeker werken op de rest ...)
  * Je boek testen met **Adobe Digital Editions.** Die is een stuk strikter en zal dus eerder mekkeren bij fouten. (Verder stelt dat programma helemaal niks voor.)
  * Je boek invoeren bij Amazon KDP. Dan krijg je een preview die, in mijn ervaring, snel en accuraat is. 
      * Zij willen graag dat je hun offline programma daarvoor download. Dat heb ik gedaan. Het voegt weinig toe, terwijl het een gigantisch bestand is dat tergend langzaam installeert en opstart. Dus ik zie het nut niet.

Mijn techniek heeft als voordeel dat ik redelijk zeker ben van hoe de EPUB eruitziet. Omdat ik het eerst als website maak, volgens de standaarden, is de EPUB _exact_ hetzelfde als de website die ik in mijn browser test.

De enige valkuilen zijn dus die nare fouten die ik hierboven beschreef, waardoor je hele boek ineens niet opent, of maar de helft van de inhoud wil laten zien.

Ik zal vast bij volgende boeken nog meer rare dingen tegenkomen. Dan vul ik de lijst aan.

## Hoe ik denk dat EPUB kan verbeteren

Het is eigenlijk heel simpel. Het internet werkt al zo'n 10+ jaar met het idee van "progressive compatibility".

  * De technologie wordt constant geüpdatet en verbeterd.
  * Maar men zorgt dat er altijd een manier is om "terug te vallen" als iets de nieuwe features niet ondersteunt.

Dus als je iets gebruikt dat je ereader (nog) niet herkent, negeert hij het. Of men ontwikkelt een makkelijke manier om van een EPUB 3 automatisch een EPUB 2 (en EPUB 1) te maken. Alle versies worden aangeboden; je ereader pakt degene die het kent.

Maar het beste is om af te stappen van het versiesysteem. Om ereaders te maken die simpelweg een _browser_ bevatten, en ebooks volledige _websites_ te laten zijn. De ereaders worden constant geüpdatet en zullen zowel nieuw als oud makkelijk ondersteunen. (En natuurlijk kan je dan van alles uitzetten in die browser dat je toch niet nodig hebt als je alleen boeken leest.)

Voor half het bedrag van een ereader, kan je een smartphone kopen die zo'n browser heeft (en nog veel meer functionaliteit). Ik geloof er dus niks van dat het niet mogelijk zou zijn. 

Ook is er geen enkele reden voor deze ingewikkelde structuur binnen het **.zip** bestand. In de wereld van de computerspellen---een veel ingewikkelder soort media dan een boek---hebben ze het niet nodig. Als ik een spelletje maak dat je in de browser kunt spelen, hoef ik alleen het volgende te doen:

  * Ik zorg dat het hoofdbestand de naam **index.html** heeft (en mijn spel laadt)
  * Verder gooi ik alles in een **.zip**, hoe ik ook wil
  * En dat werkt perfect.

Het is niet zo ingewikkeld. Zo'n systeem ontvangt een ebook, zoekt naar het bestand genaamd _index_, en vanuit daar opent het de rest van het boek. Al die bestanden, al die extra regeltjes, ze zijn niet nodig.

Hetzelfde idee voor de inhoudsopgave. Wij beslissen een vaste naam voor de lijst met inhoud (zoals "toc"). Zolang je het die naam geeft, wordt het gevonden en gebruikt. Vervolgens kan je dit _overal_ neerzetten in je project, of opmaken zoals je maar wilt.

Eigenlijk hebben we het onszelf onnodig moeilijk gemaakt, in een poging ebooks meer te controleren en beveiligen. In een poging slecht opgemaakte boeken tegen te houden voordat ze de winkel bereiken.

Want wat we écht nodig hebben ... is simpelweg

  * Een apparaat met het _scherm_ van een ereader. (Dat fijner leest, zeker ook voor het slapengaan, en minder batterij verbruikt.)
  * Met daarop een _app_ die niets meer is dan een browser met makkelijke sneltoetsen voor _lezen_. (Volgende pagina, vorige pagina, terug naar inhoud, etc.)
  * En ebooks zijn niets anders dan een moderne website. (Verpakt in een **.zip**, met de eerste pagina getiteld **index.html**, zoals _altijd_ bij websites.)

Je wilt je boek updaten? Update je website, upload het nieuwe zip bestand, niks aan de hand.

Je wilt je boek interactief maken? Dat kan al, gratis en voor niets!

Een boek is amateuristisch opgemaakt en daardoor onleesbaar? Ten eerste, dat kan altijd, ook bij paperbacks. Ten tweede, dit kan je dus zo _updaten_ (als iemand dit laat weten aan de uitgever). Ten derde, het is niet lastig om functionaliteit te maken om dit _zelf_ te fixen met je ereader. Want als het boek gewoon een website is, kan je dus simpel de hele opmaak of lettertypes veranderen.

Ik zie geen nadelen. Dat is wat EPUB had moeten zijn, maar ik ben bang dat het daar niet snel van komt. Sinds de uitgave van EPUB 3 in 2011, hebben ze vooral hard gewerkt om enkele maanden geleden EPUB 3.3 uit te brengen, constant met _kleine_ aanpassinkjes. 

En zoals genoemd 

  * Negeren de grootste spelers in de ebookwereld dit compleet en ondersteunen vooral EPUB 2.
  * Met als gevolg dat de grootste spelers onder de _uitgevers/schrijvers_ ebooks links laten liggen en maar hun eigen app maken.

## Conclusie

De huidige staat van ebooks is een rotzooi. Het is makkelijk om te noemen hoe het _zoveel_ beter kan, maar ik zie het niet snel gebeuren. Ik moet wel meegaan, als ik mijn boeken wil verkopen. (Ongeveer de helft van de verkochte boeken, gemiddeld genomen, is inmiddels een digitale uitgave.) Ik moet wel accepteren dat Amazon de nieuwere versies maar half ondersteund, want zij verkopen 90% van alle ebooks.

Hopelijk gaf dit artikel een goede uitleg of hielp het jou om nare problemen te voorkomen (waarop ik steeds urenlang vastzat).

Dat is waarom ik [De Levenssaga][2] een _website_ heb gemaakt, in de eerste plaats. Ik weet nog niet hoe ik daar mijn geld aan verdien, of hoe ik dat "verkoop". Ik weet wel dat de website met gemak superfijn te lezen is voor iedereen, op elk apparaat. Beter dan elke EPUB versie die ik er vooralsnog van heb geprobeerd te maken (en ik ben al bij poging 5).

Waarschijnlijk zal ik in de toekomst veel boeken aanbieden als _paperback_ (of _hardcover_) ... of als _website_. Geen ebook, want dat is me een te grote rommel. Ik ben nog zoekende naar hoe ik die "betere" versie van ebooks vorm kan geven of in het leven kan roepen.

Tot zover mijn gedachten hierover.

 [1]: https://www.eboundcanada.org/resources/whats-in-an-epub-the-opf-file/
 [2]: https://delevenssaga.nl