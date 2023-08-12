---
title: Een eigen WordPress thema ontwikkelen
author: tiamopastoor
date: 2021-03-16T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Toen ik jaren geleden met dit blog begon, was het een twijfelachtig experiment.

Ik had nog nooit geblogd. Was het iets voor mij? Hoe lang zou ik het volhouden? Hoe werkt zoiets eigenlijk?

Ik wist niet dat het zo groot zou worden en enkele jaren later een miljoen woorden zou tellen. Dus ik heb toentertijd het eerste standaardthema erop geplakt dat ik vond en dat nooit veranderd.

Inmiddels ben ik dat thema behoorlijk beu. Het is saai, een beetje somber, kan eigenlijk alleen lappen tekst goed laten zien, en tot overmaat van ramp moet je _bij elke pagina_ eerst langs het plaatje aan de bovenkant scrollen om verder te lezen. Omdat het een standaardthema was, kon ik weinig veranderen of toevoegen, en liep ik steeds het risico om al mijn werk kwijt te raken bij een "update".

Om al die redenen besloot ik om eindelijk te leren **hoe je een eigen WordPress thema ontwerpt**. En hoe je een ontwerp maakt dat enerzijds uniek en mooi is, maar anderzijds niet in de weg van de tekst gaat zitten.

In dit artikel leg ik uit wat ik precies heb gedaan, en waarom, en welke problemen ik onderweg tegenkwam. Het is opgedeeld in **meerdere delen** om het overzichtelijk te houden.

Hopelijk helpt het om zelf een prachtige website te ontwerpen! En anders kan je genieten van de stomme fouten die ik maak.

## Wat heb ik nodig?

Als je dit artikel serieus wilt volgen, heb je het volgende nodig:

  * **Een server.** Dit kan online zijn via een _webhosting service_, of lokaal op je eigen computer via een gratis programmaatje. (Ik gebruik _Vimexx_ voor mijn online websites, en _XAMPP_ voor lokale ontwikkeling. Maar je kan in principe alles gebruiken.)
  * **Enige kennis van WordPress.** Welke onderdelen heeft het systeem? Hoe heten die? Wat doet het systeem voor je en wat moet je zelf doen?
  * **Enige kennis van website programmeertaal** (HTML/CSS/JavaScript/PHP). Tja, dat lijkt me vrij logisch als je zelf een website programmeert.

Je hoeft zeker geen genie te zijn, en het meeste leg ik ondertussen uit, maar een beetje voorkennis is wel handig.

## Het absolute begin

### Twee bestanden

Thema's worden opgeslagen in de folder `wp-content/themes/` 

Dus maak daar een nieuwe folder en geef het een leuke naam. Maak je geen zorgen, dit is _niet_ de naam van je thema en kan je altijd nog veranderen.

Vervolgens heb je maar twee bestanden nodig om WordPress iets te laten herkennen als "thema".

  * `index.php`: de hoofdpagina van je website. Als WordPress iets niet kan vinden of een probleem tegenkomt, probeert het _altijd_ terug te vallen op dit bestand. (In veel gevallen wordt het helemaal nergens voor gebruikt. En dat doe ik ook niet.)
  * `style.css`: de algemene _stylesheet_ van je website. Deze bevat alle opmaakregels, zoals de gebruikte lettertypes, kleuren, groottes van elementen, etcetera

Maak deze bestanden aan. Laat `index.php` leeg.

Typ het volgende bovenaan `style.css`:

Hier geef je daadwerkelijk je thema een naam (en auteur).

Als je dit hebt gedaan, kan je naar **Weergave > Thema's** gaan, en jouw gloednieuwe thema zal verschijnen!

Activeer het en je kan aan de gang.

### Activeren? Op een live website?

Natuurlijk niet. Als je website op dit moment al online is, wil je natuurlijk eerst het hele thema ontwikkelen en afmaken vóórdat je het definitief activeert.

WordPress heeft een "preview" functie waarbij het een voorbeeld geeft van je thema. Deze is op zich prima ... maar daar is alles ook mee gezegd. Hij is sloom, onbeholpen, functies worden willekeurig uitgeschakeld, en je kan haast niet switchen naar andere pagina's dan je _home page_.

Dus ik stel voor dat je dit niet gebruikt. 

**Installeer WordPress lokaal**, op je eigen computer, middels zoiets als XAMPP of WAMP (als je een Windows computer hebt). Op die manier kan je het thema gewoon activeren en alle veranderingen _direct_ zien en bewerken.

### Lokale WordPress installatie

Om dit artikel niet te lang en technisch te maken, leg ik deze stappen niet uit. Er zijn talloze gidsen online over "local WordPress installation". Bovendien zal ik het vanaf nu afkorten naar WP.

Ik ga wél een aantal problemen bespreken waar ik tegenaan liep.

**Probleem #1:** vergeet niet in je lokale-server-programma zowel _Apache_ als _MySQL_ (of _phpmyadmin_) aan te zetten. Anders doet ie niks en je hebt geen idee waarom :p

**Probleem #2:** als je iets lokaal installeert, heb je vaak een bijzonder pad ernaartoe. 

{{% example %}}
Op mijn computer is het `localhost/NDHU`, terwijl de echte website gewoon begint bij het begin (`/`).
{{% /example %}}

Check dus of je in de lokale versie de juiste website url hebt en dingen worden geladen/geupload naar de juiste folders.

Tip voor de toekomst: het kan slim zijn om onderstaand stukje code voor bestandsreferenties in je thema zetten ...

Die ene functie pakt automatisch het juiste pad naar jouw gemaakte thema. Achter dit stukje kan je dan het daadwerkelijke bestand typen, en het zou moeten werken op zowel je lokale als online installatie.

**Probleem #3: er mag helemaal _niks_ vóór `<?php` of ná `?>` staan in het `functions.php` bestand.** 

(Dit bestand zullen we dadelijk aanmaken. Het is erg belangrijk.) 

Geen witruimte, geen comment, geen regeltje, helemaal niks. Als je dat wel doet, zal je website half functioneren, maar op rare momenten errors geven en dingen weigeren.

{{% example %}}
In mijn geval wilde hij niks meer _uploaden_. Het plaatje werd in de juiste folder gezet, de juiste rij werd aangemaakt in de database ... en toch crashte hij steeds en liet geen media zien.

Dus ik ging een uur lang _alles_ proberen. Ander plaatje, kleinere bestandsgrootte, alle folders "read and write" maken, helemaal opnieuw WP installeren, etcetera. Nou, bleek het probleem dus te zijn dat ik een comment (naar mezelf) had getypt aan het begin van `functions.php`
{{% /example %}}

**Probleem #4:** PHP is enerzijds lekker snel en losjes, anderzijds is het een vervelende taal. Als je ergens een puntkomma ("**;**") vergeet na een regel, zal WP simpelweg niks meer doen, maar je niet vertellen waarom. Dat is netjes programmeren geblazen!

## WordPress 101

Om je thema naadloos te integreren met WordPress, moet je weten hoe het systeem in de kern werkt. Ooit heeft iemand namen, regeltjes, functies verzonnen voor alle onderdelen die een blog meestal heeft---die moet je kennen.

Elk bestand dat ik noem kan je het beste meteen aanmaken (en vervolgens leeg laten, voor nu).

Maar ze zijn allemaal _optioneel_ (met als enige uitzondering dus dat `index.php` bestand). Als de pagina niet bestaat, zal WP automatisch terugvallen op een andere pagina. 

{{% remark %}}
Voor de precieze volgorde hiervan, kan je het beste de officiële documentatie raadplegen: [WordPress Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
{{% /remark %}}

### Functions

WP gebruikt het bestand `functions.php` om allerlei _functionaliteit_ beschikbaar te maken _voor de gehele website_. Vandaar de naam.

Hier moet je bijvoorbeeld dadelijk die stylesheet registreren (`style.css`), een regel code typen als je wil dat het systeem bepaalde functionaliteit aanzet, enzovoort.

Zoals ik boven aanstipte: dit luistert heel nauw. Je mag géén witruimte aan het begin of einde laten, je mag geen puntkomma vergeten, je mag geen typfout maken in een variabele, alles resulteert in een website die _niks_ meer doet.

Ook zal dit bestand vrij _lang_ worden na verloop van tijd, dus zorg voor een goede structuur en nette code vanaf het begin.

### Een standaard webpagina

De meeste webpagina's hebben de volgende structuur: een **header**, **footer, sidebar** en natuurlijk de inhoud.

![](/uploads/2021/03/HeaderFooterStructuur_result.webp) 

De _header_ zal helemaal bovenaan elke pagina verschijnen. Het bevat doorgaans de websitenaam en het menu. Misschien een logo en een mooi plaatje, misschien _social media_ knopjes of iets anders dat je op elke pagina prominent wilt laten zien.

De _footer_ zal helemaal onderaan elke pagina verschijnen. Het bevat doorgaans allerlei links en knopjes om te helpen de website te navigeren (zoals een zoekknop of een lijst van laatste berichten), en een stuk tekst over de website zelf, wie het heeft gemaakt, etcetera.

{{% remark %}}
Je _hoeft_ dit systeem niet perse te volgen. Maar zelfs als je thema één van deze onderdelen niet heeft, lijkt het mij toch verstandig om deze allemaal aan te maken en het systeem van WP zover mogelijk te volgen.
{{% /remark %}}

### Sidebars?

Nu wordt het bijzonder. 

Van oorsprong hadden bijna alle websites een _sidebar_. De naam zegt het al: het was een dunne balk náást de rest van de website, gevuld met plaatjes, advertenties, navigatie, wat je dan ook kwijt moest.

Inmiddels worden websites vaak bezocht door mobieltjes of tablets, en zijn de standaarden en programmeertalen vooruit gegaan, dus een sidebar is vaak niet meer aan de orde. Het past niet eens op het scherm, of men is creatiever met diens ontwerp, of advertenties worden op andere wijze geïntegreerd.

Dus onthoudt: een sidebar hoeft _niet_ persé aan de zijkant te zitten, of een _bar_ te zijn, of überhaupt in je thema te zitten.

Wat is het dan wel? Het is de plek om **widgets** te laten zien.

In het systeem van WP kan je widgets activeren, samenstellen en in groepen zetten. 

{{% example %}}
Standaardwidgets die bij elke installatie worden meegeleverd: een zoekbalk, een overzicht van je (laatste) pagina's/berichten/categorieën, een knop om je te abbonneren, etcetera.
{{% /example %}}

Dingen die je van oorsprong dus in zo'n sidebar zou vinden.

Oftewel, `sidebar.php` wordt gebruik om deze widgets op te vragen en te laten zien. _Hoe_ ze eruit zien, of _waar_ je deze sidebars inzet, is geheel aan jou.

Onthoudt nogmaals: een sidebar laat widgets zien, niet meer en niet minder.

### De inhoud

WP onderscheidt enkele verschillende "soorten" inhoud.

  * De voorpagina: `front-page.php` (in het systeem kan je kiezen of dit een statische pagina is of dat hij je laatste X artikelen weergeeft)
  * Een blogartikel: `single.php` (van "single article" of "single post"---ik weet het, ik ben ook niet blij met deze naamgeving)
  * Een pagina: `page.php` (pagina's zijn vaak meer algemene, blijvende, grote onderdelen van je blog)
  * Een archief: `archive.php` (een overzicht van artikelen _geselecteerd op een bepaalde eigenschap,_ zoals "alles in categorie X")

{{% example %}}
De meeste dingen op dit blog zijn _artikelen_ (en gebruiken dus `single.php`).

Maar grote tijdloze dingen, zoals de "over mij" pagina en projecten die ik heb gemaakt, krijgen een eigen _pagina_ (met `page.php`)
{{% /example %}}

Als je wil, kan je deze allemaal exact hetzelfde eruit laten zien.

Als je gek wil doen, kan je nog meer onderscheid aanbrengen. Zo kan je een `tag.php` pagina maken om archieven op basis van _tag_ te laten zien, en een `category.php` voor archieven op basis van _categorie_. 

Zo kan je die een compleet ander uiterlijk en structuur geven, hoewel ik niet direct zie _waarom_ je dat zou doen.

### De bijzondere pagina's

Je hebt nog véél meer pagina's die WP herkent en die soms broodnodig zullen zijn. Zo heb je `search.php` voor een zoekopdracht, `404.php` voor een "pagina niet gevonden" error, en nog meer.

Voor een **volledig overzicht** van alle pagina's (en in welke volgorde WP probeert om iets passends te vinden): [WordPress Template Hierarchy][2]

Om je een idee te geven, dit is de structuur van het huidige thema van deze website:

![Negeer de inhoud van de "php" folder, dat leg ik later uit. Ook zijn alle "assets" verkleind met behulp van TinyPNG, origineel zijn ze groter.](/uploads/2021/09/wordpress-thema-1_result.webp)

## Je eerste functies

Oké, laten we een paar dingen aanzetten in `functions.php` die we sowieso nodig hebben.

{{% remark %}}
Ik raad het overigens _niet_ aan om blind alles aan te zetten en in te laden. WordPress op zichzelf is al zwaar en groot genoeg, en minimalisme is een mooie zaak. 

Veel tutorials die ik online bekeek gooiden automatisch allerlei _JavaScript libraries_ erbij die ze altijd gebruikten, en maakten alle mogelijke bestanden aan die ze konden bedenken. Dat is onnodig.
{{% /remark %}}

Maak je geen zorgen als je niet _precies_ begrijpt wat elk stukje code doet. Als je dat wilt weten, kan je het nalezen in de documentatie. (Bijvoorbeeld, zoek op `wp_register_style()` om te zien wat die functie precies doet.)

## Headers en Footers

Je vraagt je misschien af: _waarom_ moeten we eigenlijk CSS/JavaScript netjes inladen via `functions.php`? Wat is er mis met de "normale methode" om dit in te laden?

Nou, WordPress doet een heel aantal dingen automatisch voor je. Het laadt extra scripts, het verandert delen van de pagina (als je bijvoorbeeld in "preview mode" zit), het staat toe dat _plugins_ met jouw website communiceren.

Om dit te doen moet er één duidelijke manier zijn om alles te laden en één duidelijke plek om het neer te zetten. De stap hierboven is stap 1 van het precies: het inladen. WP regelt de rest en zorgt dat het goed gebeurt.

Nu komt stap 2: in de header en footer moet je een plek aanduiden (ook wel een "hook") die WP kan gebruiken voor diens capriolen. (De rest van het werk in de header en footer is standaard website code voor een lege pagina.)

### Header

De header begint altijd het HTML-bestand. In de `<head></head>` tags stop je informatie _over_ de pagina, zoals de titel (die je ziet in de tab van je browser).

Daarna openen we de `<body>` tag. (Maar we sluiten hem niet, want dat is natuurlijk de taak van de footer.)

{{% remark %}}
Om automatisch de juiste _titels_ te laten zien, moet je dat dus óók activeren in `functions.php`! Niks gaat vanzelf. Bijna alles moet geactiveerd bij WP.
{{% /remark %}}

### Footer

Footers zijn doorgaans simpeler dan headers. Ze hoeven slechts zichzelf te laten zien en dan de pagina weer af te sluiten:

### Je eerste pagina

We hebben een los `header.php` bestand en een los `footer.php`. Het enige dat we hoeven te doen om een pagina te krijgen, is deze allebei opvragen!

Dus ga naar `front-page.php` en typ:

Nu moet je de homepage van je website kunnen bezoeken! 

Toegegeven, de pagina is nog steeds helemaal _leeg_ en doet niks. Maar er zouden geen errors moeten zijn en de header/footer zouden moeten verschijnen. (Om dit te controleren, typ je snel iets in die bestanden, en die tekst zou moeten verschijnen.)

Zo. Neem even een pauze, reflecteer op wat je hebt geleerd en nu al hebt bereikt ...

... en dan gaan we verder in deel 2: [Een wordpress thema ontwikkelen---deel 2][4]

 [1]: /uploads/2021/03/HeaderFooterStructuur_result.webp
 [2]: https://developer.wordpress.org/themes/basics/template-hierarchy/
 [3]: /uploads/2021/09/wordpress-thema-1_result.webp
 [4]: /blog/2021/2021-03-16-een-eigen-wordpress-thema-ontwikkelen-deel-2/