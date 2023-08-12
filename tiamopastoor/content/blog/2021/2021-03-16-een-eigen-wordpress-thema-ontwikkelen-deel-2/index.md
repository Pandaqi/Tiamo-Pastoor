---
title: Een eigen WordPress thema ontwikkelen – deel 2
author: tiamopastoor
date: 2021-03-16T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Welkom bij deel 2 van mijn artikelenreeks over het ontwerpen van een eigen _WordPress_ thema. 

In het vorige deel leerde je om lokaal WordPress te installeren (voor snel en makkelijk testen), de algemene opzet van WP en welke bestanden het gebruikt, en hoe je een eerste (lege) homepage oproept.

Dan gaan we nu verder met het _allerbelangrijkste_ deel van WP!

## "The Loop"

Als er iets is dat je goed moet begrijpen, dat extreem belangrijk én krachtig is binnen het systeem van WordPress, dan is het **The Loop.**

Dit is hoe een blog werkt:

  * Het vraagt een specifieke verzameling artikelen aan de database. 
      * Bijvoorbeeld: mag ik van jou de 5 laatste berichten?
      * Of: mag ik van jou alle berichten met categorie X?
  * Vervolgens doet hij een _loop_ door deze lijst van artikelen heen. 
      * Het bekijkt de eerste en doet er iets mee ...
      * ... dan bekijkt het de tweede en doet er iets mee ...
      * ... en zo door totdat hij alles heeft gehad.
  * Voor elk artikel laat hij diens inhoud zien: de titel, de tekst, een "lees meer" knopje, de datum waarop het is gepubliceerd, enzovoort. 
      * Dit is dus _dezelfde_ code voor elk artikel, maar het resultaat is anders, omdat je met andere informatie werkt.

Als je slechts één artikel leest, zal die lijst van artikelen simpelweg maar één element bevatten. Als jij in de interface instelt dat je op de homepage de laatste 10 berichten wil, dan zal WordPress automatisch de juiste lijst opvragen (met lengte 10).

_Alle inhoud in WP werkt volgens deze loop_.

### De code

Dit is hoe je hem programmeert:

### Daadwerkelijk het artikel laten zien

Het belangrijkste is het stukje tussen de `<section></section>`.

Dat is de plek waar je de code schrijft die voor _elk artikel_ wordt uitgevoerd.

Er zijn doorgaans drie methodes om informatie te krijgen. Je hebt alleen de eerste methode nodig, maar ik noem de rest voor het geval je iets wilt doen waarvoor dit niet genoeg blijkt te zijn.

  * Een standaardfunctie van de vorm `the_<informatie>();`
  * Een standaardfunctie van de vorm `get_the_<informatie>();`
  * De variabele `$post` die alles bevat.

### Standaardfuncties

Wat je ook wil weten, WP heeft er een standaardfunctie voor.

Je wilt de titel hebben? Dan schrijf je `<?php the_title(); ?>`

Je wilt de auteur hebben? Je raadt het nooit: `<?php the_author(); ?>`

Je wilt een kort uittreksel van elk artikel? Even vertalen en je krijgt: `<?php the_excerpt(); ?>`

Dat is het. Zo simpel is het. Hiermee kan je alles opvragen, laten zien zoals je wilt, en het werkt automatisch.

_Dat is het hele voordeel van een systeem als WordPress gebruiken_. Het regelt al die dingen voor jou, het enige wat jij hoeft te doen is ermee leren communiceren.

### Je eerste homepage (met recente artikelen)

Nu je dit weet, kan je de homepage automatisch opvullen met de meest recente artikelen. (Als je nog geen artikelen hebt, schrijf je er snel een paar met een willekeurige titel en onzintekst.)

Dit is een hele simpele opzet daarvoor:

### Standaardfuncties II

Als je de functies hierboven aanroept, geeft WordPress je meteen het hele pakket en plaatst het op de pagina.

Maar wat nou als je alleen de _naam_ van de auteur wilde weten, en er eerst nog iets mee wilde doen, vóórdat je het liet zien? 

Misschien wil je controleren of er geen groffe woorden tussenzitten (als je blog artikelen van andere schrijvers accepteert), of wil je bepaalde stijlen toepassen op basis van de naam zelf.

In dat geval doe je `<?php $author = get_the_author(); ?>`

Hiermee krijg je de informatie---de naam van de auteur---en stop je het zelf in een variabele om mee te _doen wat je wilt_. Meestal hebben deze functies ook bepaalde opties die je kan meegeven, maar daarvoor verwijs ik je naar de documentatie.

{{% example %}}
Ik gebruik dit om uit te rekenen wat de _leestijd_ van een artikel is. Ik vraag eerst de gehele tekst op, tel het aantal woorden, deel dat door een getal, en plaats dan het uiteindelijke resultaat op de pagina.
{{% /example %}}

Om je een idee te geven, hier is dezelfde front-page als hierboven, maar dan met de andere functies:

### De $post variabele

En als dat allemaal niet werkt, is de variabele `$post` beschikbaar in de loop. Deze verwijst automatisch naar het artikel dat je op dat moment bekijkt en _bevat al diens eigenschappen_.

Zo kan je de auteur ook op de pagina printen met `<?php echo $post->author; ?>`

Maar als je dit nodig hebt, ben je wel hele bijzondere dingen aan het doen. Meestal is er een functie of standaardmethode die je liever gebruikt.

## Werk besparen

Naast WP heb je natuurlijk ook _alle andere functies_ van PHP tot je beschikking.

Eén daarvan is de `require()` functie. Hiermee kan je een ander PHP bestand in één keer in je huidige bestand laden.

Waarom is dat handig? Nou, veel pagina's op je website zullen _ongeveer_ hetzelfde doen en dezelfde lay-out hebben. Dan kan je veel werk besparen door één bestand te schrijven dat de juiste dingen opvraagt ... en die simpelweg overal hergebruiken.

{{% example %}}
Je maakt een bestand `metadata.php` waarin je metadata opvraagt, zoals dus de categorie, de auteur, de datum, etcetera. Vervolgens zet je in alle andere bestanden simpelweg `require("metadata.php")`; en klaar is kees.
{{% /example %}}

Hieronder zal ik een codevoorbeeld geven.

## Een "single" artikel

Om te helpen alle concepten te begrijpen, geef ik hier de volledige code voor één artikel (in `single.php`). 

Dit is behoorlijk versimpeld, maar is in grote lijnen wel de exacte code die deze hele website in leven houdt.

Dit is `single.php`

Dit is `metadata.php`

Dit is `entry.php`

Nou, dit was zó essentieel, dat ik je even tijd geef om het te laten bezinken. 

Probeer maar alle pagina's te maken die je blog nodig heeft. Gebruik the loop, vraag allerlei informatie op, kijk hoe ver je hiermee al komt.

En als dat wel snor zit, gaan we door naar deel 3: [Een WordPress thema ontwikkelen---deel 3][1]

 [1]: /blog/2021/2021-03-16-een-eigen-wordpress-thema-ontwikkelen-deel-3