---
title: 'De Levenssaga: nu meertalig'
author: tiamopastoor
date: 2023-07-05T14:00:00+00:00
language: nl
thumb: /uploads/2022/10/levenssaga_website_header-1.webp
categories:
  - Miscellaneous
  - Updates

---
Het afgelopen jaar noem ik regelmatig hoe ik vooral Engels wil gaan schrijven. Ik noemde ook, echter, dat ik de Levenssaga als mijn grote Nederlandse project wilde houden, om allerlei redenen.

  * Het heeft al 150,000 woorden Nederlands.
  * Het zijn ook verhalen voor (jonge) kinderen, en die kunnen nog geen Engels.
  * De hele website, marketing, devlogs, _alles_ is Nederlands.

Dat voornemen is dus niet veranderd. Alle verhalen hiervoor worden in eerste instantie in het Nederlands geschreven, en dat is de "officiële" versie (als je wilt).

Maar ik bleef het zonde vinden als alleen één (klein) land in de wereld de verhalen kan genieten. Dat terwijl ik de vaardigheid heb om Engels te schrijven én de website (en alles eromheen) internationaal in te stellen.

Dus op een wilde avond besloot ik vrij spontaan om de hele website meertalig te maken. Om in ieder geval _ondersteuning_ toe te voegen voor als ik in de toekomst andere talen (vooralsnog alleen Engels) wilde ondersteunen.

In dit artikel vertel ik kort hoe dat in z'n werk gaat en wat ik heb veranderd!

## Stap 1: algemene indeling

Mijn portfolio is al meertalig (Nederlands en Engels). Toen heb ik met pijn en moeite geleerd hoe je dat instelt. Maar nu ik het weet, is het vrij simpel, en kon ik grotendeels dezelfde ideeën (of zelfs code) overnemen voor De Levenssaga. Het scheelt ook dat ik ****het **Hugo** systeem gebruik, wat goede ondersteuning heeft voor meertaligheid.

Dit is namelijk hoe dat werkt.

  * Op het allerhoogste niveau van je website (de eerste folder met inhoud), plaats je één folder _per taal_. (Dus in dit geval heb ik **"nl"** en **"en"**.)
  * Daarin bouw je de hele website _voor die taal_.
  * Dus als ik een verhaal ook Engels wil aanbieden, bijvoorbeeld, 
      * Kopieer ik de originele folder naar **"en"**
      * Vertaal de hoofdstukken
      * En update andere informatie, zoals de titel, het genre, en meer. (Want dat moet dan natuurlijk ook Engels.) 

Dat is vrij simpel. Het moeilijke deel is natuurlijk de **gedeelde informatie.** De homepage, bijvoorbeeld, is 99% hetzelfde per taal. Dezelfde lay-out, plaatjes, volgorde, etcetera. Het enige dat verschilt is dat de stukjes tekst nu in het Engels moeten, en dat het de _Engelse_ varianten van verhalen moet opvragen.

Je wilt **niet** al deze pagina's, voor elke taal, compleet opnieuw maken :p En elke keer als iets verandert, het op _alle_ plekken foutloos moeten veranderen.

Dus Hugo is slim genoeg om te begrijpen dat de _inhoud_ per taal thuishoort, maar de rest _van dezelfde template moet worden geladen._

(Dus als ik op de Engelse versie zit, en ik vraag "hé, geef mij de laatste 10 verhalen", begrijpt het dat het alleen die van de Engelse kant moet doen. Maar als ik de homepage laat zien, vraagt het precies dezelfde code, ongeacht taal.)

## Stap 2: i18n

Maar hoe vertalen we die kleine stukjes tekst? Daarvoor gebruik je het **i18n** systeem (afkorting voor "Internationalization").

Per taal maak je een bestand aan in de **i18n** folder. Daarin zet je een lijst vertalingen van de vorm: "ID: VERTALING"

Vervolgens kan je _over de hele website_ makkelijk het juiste tekstje opvragen voor je huidige taal, door te typen: "i18n ID"

Bijvoorbeeld,

  * Op de voorpagina stond vroeger het kopje "Zoek een specifiek verhaal"
  * Ik sla deze op onder een naam die mij handig lijkt => "homepage-search"
  * Vervolgens vervang ik dit tekstje, in de code, met "i18n homepage-search"

Doe dit over de hele website, en ta da, al die gedeelde templates laten de juiste stukken tekst zien.

Op dit punt ben ik zo'n twee uur bezig geweest op een zondagavond.

## Stap 3: verhalen verbinden

Hoe weet het systeem dat twee verhalen bij elkaar horen? Dat ze vertalingen zijn van elkaar?

Immers hebben ze allebei een andere naam (de ene Nederlands, de andere Engels), andere inhoud, etcetera. Oftewel, het systeem _weet het niet_ _automatisch_. Je moet dit duidelijk maken.

{{% remark %}}
Als twee bestanden dezelfde naam hebben, maar simpelweg in andere talen zitten, dan begrijpt het systeem dit natuurlijk wél automatisch. Maar dat kon ik bij mijn website dus niet doen, want het vertalen van titels en extra informatie is belangrijk. Later meer daarover.
{{% /remark %}}

Hoe? Door beide verhalen dezelfde "translation key" te geven. Dat is, wederom, een soort _id_ die je zelf mag verzinnen. Alle bestanden die exact dezelfde key hebben, worden opgeslagen als vertalingen van elkaar.

Dit is handig omdat ...

  * Ik dan een knop kan toevoegen waarmee je direct van taal kan switchen.
  * Zoekmachines (Google, Bing, ...) de website veel beter begrijpen
  * Ik zelf het overzicht minder snel kwijtraak.

Dus ik moest even door alle verhalen heen om ze dezelfde translationKey te geven.

Hier eindigt het niet, echter.

Het hele idee van de website is dat het ook een soort Wikipedia is. Iets dat helpt met verhalen vinden, informatie zoeken, alles opslaan over de huidige wereld van de Levenssaga.

Dus je hebt allerlei extra pagina's (per cyclus, per tijdperk, per genre) waarvan ik _ook_ moest opslaan dat ze vertalingen waren van elkaar. Dat deed me even twijfelen aan dit systeem. Kan ik het niet toch automatisch maken? Achter de schermen alles dezelfde Engelse namen geven, maar met wat trucjes alleen de _zichtbare_ informatie vertalen?

Maar uiteindelijk is het een kwartiertje bestanden aanmaken en keys bedenken, dus ik deed het maar zo. Bovendien kost het nauwelijks extra werk zodra er meer verhalen bijkomen: alleen als ik een volgende cyclus begin, hoef ik nu nog nieuwe bestanden te linken.

En toen kwam het traditionele Tiamomoment: **"oh nee, dit is helemaal niet een kwartiertje namen aanpassen"**

Waarom niet? Alle _hoofdstukken_ moeten natuurlijk ook met elkaar verbonden zijn. Dat zijn tien hoofdstukken per boek (+ twee bestanden met outline en notities). Dus ik zou, voor elk verhaal, weer twaalf dingen handmatig aan elkaar moeten linken.

Ja daaaaag. Dus we doen het toch de andere manier.

Achter de schermen is de folderstructuur precies hetzelfde. (Dus zowel de Nederlandse als Engelse versie van een verhaal hebben hetzelfde pad ernaartoe. Ik koos ervoor om alles achter de schermen standaard Engels te noemen. Want de code is al in het Engels en het gebeurde eigenlijk automatisch.)

Daardoor ziet het systeem _automatisch_ dat al deze dingen vertalingen zijn van elkaar. Het enige probleem? De URL naar Nederlandse boeken is nu compleet Engels. Is dit een probleem? Mwah, de meesten zullen het nooit zien. Vind de perfectionistische kunstenaar Tiamo het een probleem? JA.

Gelukkig is dit _redelijk_ makkelijk op te lossen. Per _verhaal_ (dus maar tien keer) stel ik handmatig in wat de Nederlandse URL ernaartoe is. Ik vind dit niet ideaal, omdat het dus betekent dat ik niet moet vergeten om dit te doen, of om dit aan te passen mocht de structuur van de website ooit wéér veranderen.

Maar het is wat het is. Mijn projecten zijn altijd raar en geen enkel systeem lijkt er (netjes) tegen opgewassen :p Voor nu kost het minimale moeite om alle vertalingen perfect met elkaar te verbinden op de website.

{{% remark %}}
Overigens had de originele website al een rare mix van Engels en Nederlands door elkaar in de URLs. De namen van boeken en categorieën waren Nederlands ... maar hoofdstukken heetten allemaal "chapter-1", "chapter-2", etcetera. Dus door deze aanpassingen heb ik per ongeluk de URLs veel consistenter gemaakt dan eerst. (Zo heb ik wel meer fouten per ongeluk opgelost door deze veranderingen.)
{{% /remark %}}

## Stap 4: de nare details (icoontjes)

Sommige delen waren nu nog steeds taalafhankelijk.

Bijvoorbeeld, de bestanden krijgen een eigen thema (qua kleur en soms opmaak) op basis van het tijdperk waarin ze zitten. Het woestijntijdperk is gelig, het ruimtetijdperk (diep) donkerblauw, het oorlogstijdperk rood, etcera.

Hoe gebeurt dit? De code leest het tijdperk af en geeft dit als een (visuele) "klasse" aan de pagina. Ergens anders heb ik opgeslagen welke klasse welke opmaak krijgt.

Zie je het probleem? Nu hebben verhalen meerdere namen voor tijdperken: eentje Nederlands, eentje Engels, misschien wel meer talen in de toekomst. Zoals eerder genoemd, is het niet handig om overal dubbele lijsten en informatie bij te houden.

Datzelfde gold dus voor andere informatie. Voor de icoontjes die het bij elk verhaal laat zien: die zijn nu opgeslagen onder de _Nederlandse_ titel van het boek. Ik wil niet alle icoontjes driedubbel opslaan onder andere namen.

Hoe lossen we dit op? 

Nou, gelukkig heb ik zojuist alle bestanden _dezelfde naam gegeven_ (ongeacht taal) achter de schermen! Dus we kunnen die naam opvragen en _dat_ gebruiken om het juiste plaatje of de juiste klasse te vinden.

**Toen gingen alarmbellen af in mijn hoofd.** Ik programmeer nu lang genoeg om te weten dat dit leuk lijkt, maar niet leuk is. Je mixt nu twee systemen (de ene voor vertalingen, de andere om plaatjes te vinden) via één en dezelfde eigenschap die je instelt. Wat als de systemen later veranderen? Wat als er een verhaal komt die hier niet in past, om wat voor reden dan ook?

Het zou een hel zijn om het weer uit elkaar te halen en deze keer "goed" te doen. Dus laten we het in één keer goed doen. Laten we _expliciet_ instellen wat we willen voor elk systeem.

Het gevolg is dus dat elk verhaal _twee_ eigenschappen heeft ingesteld.

  * translationKey => puur voor vertalen, waar nodig
  * uniqueID => puur voor linken naar hetzelfde plaatje of hetzelfde beetje informatie

Die eigenschappen zijn nu _precies hetzelfde_ bij elke pagina, maar zulke dubbelzinnigheid vind ik in dit geval dus goed. Want elke eigenschap doet maar één ding, precies wat het zegt, en mocht in de toekomst de website veranderen is dat geen probleem.

## Stap 5: de nare details (dynamische dingen)

Nu kwam het écht vervelende deel. De website heeft drie belangrijke _scripts._ Die worden dus niet door mijn systeem gebouwd, maar ter plekke uitgevoerd voor elke bezoeker. (Want ze hangen af van _jou_, van informatie opgeslagen in _jouw browser._ Of informatie die _jij invoert_, zoals bij de zoekfunctie.)

  * Eentje die bijhoudt welke verhalen je al hebt gelezen of niet.
  * Eentje die je boekenkast laat _zien_
  * Eentje om te _zoeken_ over de website.

Deze code was natuurlijk compleet ingesteld op het Nederlands. Maar omdat het ter plekke wordt uitgevoerd, kan ik het niet van te voren vertalen (met dat fijne systeem) ... toch?

Toch?

Nou, toen ik vorig jaar naar dit probleem keek, zag ik alleen een ingewikkelde oplossing. Nu had ik meer ervaring en zag dat dit eigenlijk heel simpel was, als je het op een slimmere manier deed.

  * Onderaan elke pagina wordt een onzichtbaar elementje geplaatst met een unieke naam. 
  * Een "element" op websites kan zoveel eigenschappen hebben als je wilt. (Door simpelweg `naam="waarde"` erin te typen.)
  * Dus alle vertalingen die ik nodig heb, alle dynamische informatie, sla ik op in dat ene elementje.
  * Als ik het nodig heb in de code, zeg ik gewoon: "hé, pak dat elementje met die naam, en geef mij eigenschap X"

Dit werkt geweldig voor alles. Hele lappen code konden weg, hele bestanden konden weg, en nu staat alle code hiervoor op één plek (en is vrij simpel). En je boekenkast wordt nu dus juist vertaald!

{{% remark %}}
De ingewikkelde manier van eerst kwam erop neer dat elke aparte pagina (zoals boekenkast of zoekfunctie) een aparte template moest laden waarin het _direct_ bepaalde variabelen in de code probeerde te veranderen. Dat wil je eigenlijk nooit: je wilt informatie en uitvoering gescheiden houden. De informatie leeft niet en staat gewoon ergens; de uitvoerende code vraagt het op en doet er iets mee.
{{% /remark %}}

De gehele code voor alle dynamische systemen is nu 9 kB in grootte :p Veel sneller en kleiner kan het niet, denk ik. 

Uiteindelijk ben ik wel gewisseld naar een geheel ander systeem voor de zoekfunctie, van een andere maker. Dat systeem is véél slimmer en laadt resultaten in stukjes. (Ook kan je makkelijk filteren op dingen, zoals categorie of tijdperk.) Dus ik hoef niet meer bang te zijn dat mijn website te groot wordt en zoeken een halve minuut duurt zodra er 500,000 woorden zijn. Dit systeem is nog geen 50 kB voor de meeste zoekopdrachten. 

(De vorige zoekindex, die dus alle verhalen bevat om doorheen te zoeken, was 500 kB die je in één keer helemaal moest laden. Dat is nu niet zo erg, maar als je vijf jaar verder bent, is dat ding ineens 5 MB, en dat wil je écht niet voor iedereen elke keer laden.)

## Stap 6: switchen

Hoe laat ik de gebruiker weten dat meerdere talen beschikbaar zijn? Hoe kan je makkelijk switchen?

De _footer_ van de website (onderaan) stond eigenlijk precies zo vol als ik wilde. Alle knoppen die je nodig hebt, niet meer, niet minder. Ik wilde dus niet nog een heel onderdeel toevoegen.

Dan maar in de _header_ (bovenaan), bij de andere drie knoppen. Ook dit vond ik niet ideaal, want hoe vaak wil je nou van taal wisselen? Eén keer, toch, als je merkt dat je bij de verkeerde taal zit?

Maar waar moet het dan? Als je het onderaan artikelen zet, of te verborgen, dan _weten_ mensen niet dat het kan. Dus mensen gaan weg, in plaats van de juiste taal te kiezen.

Uiteindelijk werd het dus de header. Het kreeg precies eenzelfde knop (en interface) als het systeem waarmee je jouw eigen _lettertype_ kan kiezen. Je drukt erop, je klikt je nieuwe taal, de pagina gaat naar die versie van je huidige pagina. (En als de vertaling niet bestaat, wat dus kan gebeuren, verschijnt de knop simpelweg niet.)

## Stap 7: de inhoud

Als laatste moest ik nog de _Over_ pagina vertalen. (Inmiddels natuurlijk de _About page_.) Hierop staan vele links naar artikelen op dit blog die vertellen over de Levenssaga. Deze konden allemaal _weg_, want ja, dat is compleet Nederlands.

En dan ... de inhoud van de verhalen. Ik wist dus nog niet _hoe_ of _wat_. Ik wilde vooral de website overzetten voor de toekomst, zodat ik die optie had. Geen enkel verhaal is nog vertaald en ik weet niet eens of ik het ga doen. Waarschijnlijk ga ik kijken of ik hulp van AI kan inschakelen: die kan de eerste versie doen, waar ik vervolgens nog een keer doorheen ga om fouten weg te halen of zinnen mooier te maken.

Tot die tijd is de Levenssaga nog lekker helemaal Nederlands, en zullen de komende verhalen ook alleen Nederlands zijn.

## Conclusie

Uiteindelijk heb ik drie dagen op rij elke dag zo'n 3-4 uur hieraan gezeten. Dat vind ik op zich weinig tijd voor een hele website meertalig maken (en de systemen netjes opzetten zodat ik ze heel makkelijk kan blijven updaten in de toekomst). Of ik er gebruik van gaan maken? We moeten het nog zien.

Een groot nadeel is wel dat nu dus alle URLs zijn veranderd. (Er zit een stukje voor dat aangeeft in welke taal je zit, dus bijvoorbeeld "books/titel/chapter-1" is nu "nl/books/titel/chapter-1". Tja, het zal wel weer even duren voordat de site goed te vinden is in Google en dergelijke, als ze begrijpen wat er is veranderd.)

Ach ja, daarom is het project ook nog in een "proeffase", om dit soort dingen uit te vogelen voordat ik écht definitief dingen vastleg.

Naast deze omzetting heb ik nog heel veel andere kleine aanpassingen gedaan aan De Levenssaga. Niet genoeg voor eigen artikelen, dus hier is een snelle lijst.

  * Een nieuw systeem kwam uit voor _zoeken_ op Hugo websites. Ongelofelijk makkelijk in te bouwen, véél sneller en preciezer dan mijn vorige systeem. Dus ik ben daarnaar overgestapt. (Beetje jammer dat ik vorig jaar dagenlang mijn eigen zoekfunctie heb gemaakt en verfijnd, maar oké.)
  * Pagina's met veel inhoud worden niet meer allemaal in één klap weergegeven, maar netjes in stukjes, met knoppen om naar vorige/volgende pagina te gaan. (Deze "pagination" bestond al voor de belangrijkste onderdelen---hoofdstukken en boeken---maar was ik compleet vergeten voor de rest.)
  * Elke _cyclus_, _tijdperk_ en _bundel_ heeft nu z'n eigen pagina (met icoontje, korte uitleg, en URL om de bundel te kopen als het zover is). Dit bleek ook cruciaal om gemakkelijk de vertalingen daarvan te linken.
  * Allerlei kleine foutjes waaraan ik me stoorde, of die ik tegenkwam tijdens het meertalig maken.

Met al die dingen uit de weg, kan ik eindelijk weer focussen op wat echt belangrijk is: de inhoud. Het was tijd om de volgende cyclus te schrijven! (Tegen de tijd dat dit artikel verschijnt, is die al af, als het goed is.)