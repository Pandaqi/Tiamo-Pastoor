---
title: Een eigen WordPress thema ontwikkelen – deel 3
author: tiamopastoor
date: 2021-03-16T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Welkom bij deel 3 van de artikelenreeks over het ontwikkelen van je eigen WordPress thema.

Inmiddels heb je geleerd over de algemene structuur en "the loop", wat genoeg zou moeten zijn om al een 99% functionerend blog te krijgen. (Een homepage met je laatste artikelen, alleenstaande pagina's, opvragen van informatie zoals de _auteur_ en _datum_ van een artikel.)

Maar natuurlijk zijn er vele randzaken die je (waarschijnlijk) wilt opnemen in je blog. Denk aan _comments_, of meerdere _pagina's_ op je homepage (met slechts een paar artikelen per pagina), of _menu's_.

Daar gaat dit laatste deel over!

## Moeite met menu's

In deze sectie zal ik je uitleggen hoe je een menu kan inladen (die je hebt ingesteld middels de WordPress interface).

Maar vervolgens zal ik uitleggen waarom ik deze hele functionaliteit uiteindelijk weer heb weggegooid. Mijn blog gebruikt nu slechts een _zeer minimaal_ menu, met de hand gemaakt, en alle andere navigatie of informatie staat in de _footer_.

{{% remark %}}
Waarom besteed ik hier dan tijd aan? Omdat ik in het algemeen wil adviseren om geen gigantische menu's meer te gebruiken of je header té vol te stoppen. Bovendien is het een goede introductie tot het volgende thema: _widgets_.
{{% /remark %}}

### Menu invullen

In deel 1 (in `functions.php`) hebben we al een menu geregistreerd met het systeem. 

Daardoor kan je gewoon, in de WP interface, naar **Weergave > Menu's** en direct werken aan je menu.

Het is vrij vanzelfsprekend. Links kan je berichten/pagina's/wat dan ook selecteren om toe te voegen. Door te slepen en te klikken kan je de elementen anders rangschikken en invullen.

Vergeet het niet op te slaan als je tevreden bent.

### Menu opvragen & stylen

Oké, het menu is bekend bij WP, en het heeft de juiste inhoud. Maar hoe laten we het zien? Hoe vragen we het op?

Daarvoor gebruik we de functie `wp_nav_menu();`

Afhankelijk van wat je _in_ de functie stopt, kan je het alvast een bepaalde structuur of style geven. Alleen het eerste argument, _welk menu je precies wilt laten zien_, is vereist. (Zie zoals altijd de documentatie: [wp\_nav\_menu][1].)

### Waarom een menu?

Het idee van een menu is om mensen snel over de website te laten bewegen én de belangrijkste pagina's/inhoud uit te lichten. 

Het is ook best handig en logisch. Ik zeg zeker niet dat iedereen nu meteen het idee van een "menu in de header" moet weggooien.

Maar ik zie dit soort menu's steeds simpeler worden en langzaam verdwijnen, en ik denk dat het een goede ontwikkeling is. Bijna elke website met een volwaardige menu is voor mij onbruikbaar op mobiel en compleet overweldigend op de computer.

{{% remark %}}
Serieus, wie vond het een goed idee om twintig grote links naast elkaar bovenaan elke pagina te zetten? En bewegende, flitsende advertenties aan de zijkant van alle artikelen?
{{% /remark %}}

### Waarom géén menu?

Ook bij dit blog zijn er enkele problemen:

**Probleem #1:** Dit blog kent veel inhoud. Het oude menu had 10+ onderdelen, paste niet op één pagina (daarom moest je het eerst uitklappen door erop te klikken), en dat werd alleen maar erger. Met elk nieuw project wilde ik wéér een snelle link naar die pagina hebben.

**Probleem #2:** Als men op kleinere schermen kijkt, is er geen _ruimte_ voor een menu. Je kan hoogstens enkele icoontjes of woorden laten zien, dan houdt het op. 

{{% remark %}}
Vrijwel iedereen lost dit op door het menu te vervangen door het "hamburgericoontje". Als je daarop klikt, vouwt het _hele menu_ uit. 

Ik vind het een acceptabele oplossing, maar niet ideaal. Je moet als gebruiker extra klikken én het geeft je een excuus om niet minimalistisch te zijn en je menu gestroomlijnd te houden. Bovendien snapt niet iedereen wat elk icoontje betekent.
{{% /remark %}}

**Probleem #3:** Ik wil niet dat mensen constant _langs het menu moeten scrollen_. Het menu moet dermate klein zijn, dat hij binnen handbereik is zo nodig, maar dat je er nooit langs hoeft. 

{{% remark %}}
Het is daarom eigenlijk raar dat we menu's bovenaan plaatsen. Je moet er _altijd_ langs en _altijd_ naar kijken voordat je met de inhoud kan beginnen. Ik vind het logischer om al die navigatie in de footer te zetten.
{{% /remark %}}

### Mijn conclusie

Na lang nadenken en proberen, concludeerde ik dat dit blog het beste geen (groot) menu kan hebben.

Waarom? Alle projecten die ik doe staan al geregistreerd op mijn _portfolio website_ ([Rode Panda][2]). Daar heb ik die website nou precies voor ontworpen! Het doet niks anders, het heeft geen bellen en toeters, het laat gewoon _al mijn werk zien_.

Ik vond het onnodig en verwarrend om constant alles _dubbel_ in te voeren en te verwijzen. Dus er komt één knop bovenaan de website en die leidt direct naar mijn portfolio.

Daarnaast zie ik dat de "Over mij" pagina altijd vaak wordt bezocht op websites. Iedereen wil heel graag een gezicht bij een website hebben. Als ze een leuk artikel of twee hebben gelezen, willen ze kijken wie het eigenlijk heeft geschreven en of die misschien nog meer heeft gedaan. Dus dat is de tweede knop.

De laatste knop leidt je rechtstreeks naar de _footer_ onderaan de pagina. Binnen een halve seconde ben je naar beneden gescrollt. 

In die footer staan een handvol _widgets:_ zoeken op de website, abbonneren, laatste berichten, belangrijke pagina's, meer werk van mij, enzovoort. Uit de weg, maar makkelijk te vinden als je het nodig hebt.

Dus laten we nu eens praten over die widgets.

## Sidebars & Widgets

Hopelijk zit mijn verhaal over _sidebars_ nog vers in je geheugen: een sidebar is een plek die automatisch al je _widgets_ laat zien. 

Een sidebar moet je registreren in `functions.php` onder een zelfbedachte naam. Vervolgens kan je in de WP interface, bij "Widgets", automatisch elementen erin plaatsen.

Als laatste moet je dan natuurlijk die sidebar oproepen op de juiste plek in je code.

Dit is mijn `sidebar.php`, die letterlijk alleen de widgets opvraagt:

En dit is een regeltje in mijn `footer.php` die deze sidebar oproept en laat zien:

Hartstikke simpel en klein! 

{{% remark %}}
Natuurlijk, als je veel _verschillende_ sidebars hebt, zal je meer argumenten moeten doorgeven aan deze functies. (Of meerdere bestanden maken, zoals `sidebar-primary.php` en `sidebar-secondary.php`) Maar dat is voor de meesten niet aan de orde.
{{% /remark %}}

## Pagination

Als je "the loop" gebruikt, zal WP ook meteen de pagina-navigatie voor je regelen. Immers, het systeem weet precies welke artikelen het nu moet laten zien, en of er nog artikelen daarvóór of daarná komen.

Dus als je onderaan de pagina knoppen wilt met "volgende pagina" en "vorige pagina", hoef je dit slechts aan het systeem te vragen.

{{% remark %}}
Bij de _instellingen_ van WP kan je kiezen hoeveel berichten hij laat zien _per pagina_, of deze navigati nummers gebruikt of alleen tekst, etcetera. Dit geldt in het algemeen: als WP iets voor je regelt, kan je dat bij de instellingen nog een beetje _tweaken_.
{{% /remark %}}

## Thumbnails

WordPress werkt volgens het systeem van "vaste groottes". 

Eerst moet je in `functions.php` zelf een aantal groottes registreren.

{{% example %}}
Je zegt "small" is 100×100, "medium" is 300×300, en "large" is 800×800
{{% /example %}}

Als je een plaatje uploadt, maakt WP automatisch een versie aan _in elke geregistreerde grootte_.

Vervolgens kan je een plaatje dus oproepen in je thema _met een specifieke grootte_. 

{{% example %}}
Op de homepage krijgt elk bericht maar een klein beetje ruimte, dus laat je de "small" versie zien. Als je op een bericht klikt, en naar diens pagina gaat, wil je het plaatje zo groot mogelijk laten zien en kiest "large"
{{% /example %}}

Dit systeem is heel handig ... als je het nodig hebt. Als je vooral blogt (en dus weinig _featured images_ toevoegt aan je pagina's), of je ontwerp wil alle plaatjes gewoon op ware grootte, dan kan je dit negeren.

In dat geval heeft WP één _default size_ genaamd "full". (Die laat een plaatje zien zonder te bewerken of wat dan ook.)

Dit is hoe je groottes registreert in `functions.php`:

En zo roep je ze op, bijvoorbeeld boven de titel van de blogpost die je laat zien. (Nog steeds binnenin _the loop_, natuurlijk, want dit is informatie die _specifiek bij één artikel hoort_.)

## Reacties

Als laatste wil ik praten over reacties/comments. Deze zijn iets ingewikkelder, want je hebt natuurlijk meerdere stappen:

  * Als er geen comments zijn, laat niks zien of een melding zoals "Nog geen reacties!"
  * Zo wel, laat dan alle comments zien. 
  * Als het er veel zijn, geef de comments dan óók een eigen paginanavigatie.
  * En laat daaronder altijd het formulier zien om een nieuwe reactie te plaatsen.

Gelukkig regelt WP dit ook grotendeels voor jou. Wederom kan je bij de _instellingen_ neerzetten hoe reacties moeten worden weergegeven (hoeveel per pagina? profielfoto's erbij?) ... en dan hoef je het alleen nog op te vragen.

Ten eerste, maak het bestand `comments.php` aan en plaats dit erin:

Daarna kan je het overal waar je wilt opvragen! Waarschijnlijk wil je het laten zien _onderaan_ een artikel, dus dan doe je dit:

Ik noem dit vooral "moeilijker" omdat je nog moet _ontdekken_ hoe WP precies alles structureert en noemt. Pas als je dat exact weet, kan je het er mooi uit laten zien binnen jouw eigen ontwerp.

## Opmerkingen over semantics

Zo, dat waren de belangrijkste onderdelen (in mijn ogen) en hoe je deze opzet!

WordPress heeft een prima _documentation_ die vrijwel al je vragen zal beantwoorden, nu je weet hoe je moet beginnen. 

Je wilt specifieke informatie hebben van een artikel? Kijk of er een standaardfunctie voor is. Zo niet, kijk naar alle eigenschappen die de `$post` variabele heeft.

Je wilt de zoekfunctie ondersteunen? Maak `search.php` aan. Vindt uit hoe je de zoekstring kan ophalen, zodat je kan laten zien "U zocht naar DITENDIT". Plaats **the loop** in het bestand en WP regelt de rest!

Ik wil daarom alleen nog iets zeggen over _semantics_. 

Wat betekent dat? Nou, dat de HTML-tags (en volgorde) die je gebruikt ook de **structuur** van je website weerspiegelen.

{{% example %}}
Gebruik `<header>` voor de header. Gebruik `<article>` voor één artikel. Gebruik `<aside>` voor kleine opmerkingen of details aan de zijkant, niet de hoofdcontent. Gebruik `<nav>` voor navigatie.
{{% /example %}}

Waarom is dit belangrijk? Het zorgt dat zoekmachines je site véél beter kunnen lezen en categoriseren. Het zorgt tevens dat mensen met een handicap je site beter kunnen gebruiken. 

{{% example %}}
Veel browsers hebben bijv. een "screen reader" knop die alle frutsels weghaalt en alleen de hoofdtekst zwart-wit weergeeft. Dit werkt alleen als de browser precies kan lezen _wat_ de hoofdtekst is op jouw website, _wat_ de koppen zijn, etc.
{{% /example %}}

WordPress regelt het hele systeem op de achtergrond, maar jij bent nog steeds verantwoordelijk voor een site die _werkt_, er _mooi uitziet_, en _goed communiceert met computers/Google/browsers_.

## Het design van NDHU

Na al dat werk om een functionerend blog te krijgen, dat communiceert met WordPress en werkt op al mijn oude content, zou je bijna vergeten dat dit pas de helft van het werk is.

De andere helft is het ontwerpen van het thema zelf.

Aangezien dit niet direct gerelateerd is aan WordPress, en deze pagina al véél te lang is geworden, zal ik daar niks mee over zeggen. (Ik heb alleen een kort artikel over de update van het blog met een paar details over de stijl: [Niet Dat Het Uitmaakt: Een grote update!][3])

Oftewel, hier houdt het op.

Ik hoop dat ik je heb geholpen om je eigen thema van de grond te krijgen en iets moois te maken! 

Als iets nog onduidelijk is, laat het maar weten. 

Als je iets moois hebt gemaakt aan de hand van deze handleiding, laat het maar zien.

Veel plezier met je zojuist verweven status van _WordPress Wizard,_ vaarwel.

 [1]: https://developer.wordpress.org/reference/functions/wp_nav_menu/
 [2]: https://rodepanda.com
 [3]: /blog/2021/2021-03-01-niet-dat-het-uitmaakt-een-grote-update/