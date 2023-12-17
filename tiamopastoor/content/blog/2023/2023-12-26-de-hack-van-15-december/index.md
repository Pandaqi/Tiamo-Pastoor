---
title: 'De hack van 15 december'
author: tiamopastoor
date: 2023-12-26
language: nl
categories: ["Miscellaneous"]
---

Op 15 december, zo rond etenstijd, checkte ik snel even mijn blog en kreeg de schrik van mijn leven. De voorpagina was vervangen door een of andere Japanse scam. Ik wist vrijwel direct dat dit niet iets van mijn laptop was (zoals een virus dat met mijn internetverkeer klooit), maar dat er iets was gebeurd op mijn server (die het blog online houdt).

Ik zou willen dat ik een screenshot had gemaakt. Ze hadden de naam van het blog verkeerd gespeld ("nietdathetuitmakt") en, voor zover ik Google Translate mag vertrouwen, hadden ze niets anders gedaan dan de website omzetten in een soort Marktplaats.

Maar ik was ondertussen eten aan het koken, dus dat ging niet. In plaats daarvan deed ik direct twee dingen:

* Ik controleerde of ik nog in mijn hosting account kon. Het antwoord was _ja_, en toen heb ik meteen wachtwoorden veranderd en Two-Factor Authentication ingesteld. (Dacht dat ik dat al had gedaan, maar nee.)
* Ik controleerde of ik nog in de server zelf kon. Het antwoord was _ja_, en toen heb ik meteen wachtwoorden veranderd.

Naast dit blog heb ik nog meer websites. Ik checkte of die nog werkten, en tot mijn schrik waren die omgetoverd in ... een witte pagina die niks deed?

Ik logde in op mijn server en zag dat alle bestanden er nog stonden. Al die websites stonden er nog helemaal op, niks miste, en ik zag niet direct dat er iets was toegevoegd. Dus wat gebeurde er? Ik had geen idee.

Ik heb direct mijn hele blog van de server gegooid, terwijl ik aanschoof bij mijn eigen avondeten. (Het hele blog was toch al overgezet naar tiamopastoor.com, en daarnaast had ik toevallig een backup van een week geleden. Ik maakte me meer zorgen over dit virus z'n gang laten gaan dan de website later helemaal opnieuw installeren.)

Met een volle maag kon de rest van de avond het onderzoek beginnen.

## Voor we verder gaan: hoe groot is dit probleem?

Dit is de positieve kant van het verhaal. 

Ik ben dus de laatste jaren al geswitcht naar een veel simpeler en veiliger systeem voor alle andere websites. Hoewel ik later zal uitleggen wat daar gebeurde, is de samenvatting dat de hackers niks konden met die websites.

Daarnaast ben ik altijd zo open mogelijk in alles. Mijn websites hebben geen geheime of afgesloten onderdelen, er staat geen privé informatie, er is niks te vinden buiten wat je simpelweg _openbaar kan bezoeken_.

Dus er is geen data gelekt. Er is geen gevoelige informatie te vinden. En aangezien ik nog toegang had tot alles, en alles er nog op stond, hebben de hackers dus niet verder ergens ingebroken.

Het grootste probleem is dat dit irritant is en dat ik er een hoop tijd aan kwijt was.

{{% remark %}}
Het enige potentiële lek zijn de emailadressen van mensen die zijn geabonneerd op dit blog, maar ik kan nergens bewijs vinden dat ze toegang hebben gekregen tot dat soort informatie.
{{% /remark %}}

Zo, dan nu een reconstructie van wat er gebeurde.

## Stap één: We checken de logs

Op het hoofdniveau van een server houdt hij altijd logs ("logboeken") bij over al het verkeer. Dit is een gigantisch tekstbestand (eentje per dag) waarin elke regel zoiets zegt als:
* Dit IP adres heeft deze pagina opgevraagd met dit soort browser.
* Dit IP adres heeft een ping gestuurd naar je website (dat gebeurt door automatische checkers of je website nog in de lucht is)
* Dit IP adres probeerde informatie te sturen naar deze pagina vanuit dit soort browser.

Het grootste deel hiervan is natuurlijk totaal niet interessant. Als iemand een artikel bezoekt, bijvoorbeeld, zet hij een regel neer met "hé iemand met dit IP adres heeft dat artikel opgevraagd".

Maar die laatste optie viel op. Waarom? Omdat, in de vroege uurtjes van 15 december, iemand _honderdduizenden keren_ had geprobeerd informatie te sturen naar de website. (Mijn laptop liep vast bij de poging om de logs te openen :p)

Een snelle Google later onthulde het volgende.
* De pagina die ze steeds bezochten was blijkbaar een bekend veiligheidsrisico van WordPress (`xmlrpc.php`)
* Deze pagina staat je toe om vanaf een externe bron dingen te doen op je blog en staat automatisch _aan_. (WHY?)
* Maar omdat het een slecht beveiligde omweg is, kunnen mensen dus eindeloos nieuwe combinaties van gebruikersnaam + wachtwoord proberen. Hij houdt je niet tegen na 10 foute pogingen. Het kost geen tijd om de pagina steeds te laden en te wachten.

Ik weet oprecht niet meer wat mijn wachtwoord was voor mijn blog. Ik ben 7 jaar non-stop "automatisch ingelogd" geweest, dus het zou me niets verbazen als ik nog een oud en slecht wachtwoord gebruikte dat ergens is gelekt. (Ja, ja, had ik niet moeten doen.)

Aan de logs kan ik verder niet zien of ze er daadwerkelijk op die manier in zijn gekomen. De kans bestaat dat ze dit _probeerden_ maar faalden, en toen iets anders deden.

Hoe weet ik dat?

Al mijn websites worden beschermd door CloudFlare. Dat is een soort tussenlaag die aanvallen afweert (tot op zekere hoogte), zorgt dat mijn server minder wordt belast, zorgt dat de website sneller is in andere delen van de wereld.

In al die tijd heb ik nooit een bericht van ze gekregen met een waarschuwing of kritieke gebeurtenis---maar nu had ik ineens een bericht over een "Firewall Attack" vanuit Vietnam. Tja, dat is natuurlijk wel erg toevallig, op dezelfde dag en ongeveer hetzelfde tijdstip.

Ik weet niet zeker hoe. Maar duidelijk is _dat_ ze uiteindelijk in de server zijn gekomen.

## Stap twee: we checken de server

Hier zie je natuurlijk het probleem van retegoedkope hosting. Al mijn websites staan op dezelfde server en ik heb geen extra beveiliging of maatregelen hiertegen in mijn "pakket".

Ik controleerde mijn andere websites---die dus totaal niet op WordPress draaien---en ontdekte dat er wél dingen waren veranderd.

* De hoofdpagina van een website is altijd een bestand genaamd `index`. 
* Mijn andere websites zijn "platte websites" die niet communiceren met de server op welke manier dan ook. Oftewel, als je een pagina opvraagt, krijg je gewoon een tekstbestand in websitetaal (HTML) en _dat is alles dat gebeurt_. De hoofdpagina heet dan ook `index.html`.
* Maar WordPress communiceert constant met je server. Het moet nieuwe artikelen opslaan, bestaande artikelen opvragen om te laten zien, gebruikers laten registeren, etcetera. Daarvoor gebruikt het een servertaal (PHP) en de hoofdpagina heet standaard `index.php`.

Wat deed het virus bij mijn andere websites?

Het _veranderde_ mijn `index.html` naar `index.php`. Maar omdat het virus alleen was gemaakt voor WordPress (denk ik), was het nieuwe bestand gewoon _leeg_. Ta da, zo krijg je een website die een lege pagina laat zien als je hem bezoekt. (Maar verder totaal onveranderd is en buiten de hoofdpagina op veel plekken nog werkt.)

Door dit extra bestand weg te halen, kwamen al mijn andere websites weer helemaal terug.

## Stap drie: het mysterie van de terugkerende bestanden

Zoals de titel al aangeeft was het hiermee niet opgelost.

Elke keer als ik zo'n bestand verwijderde, kwam het na een paar minuten weer terug. Nog erger, deze switch had plaatsgevonden voor _alle_ index bestanden over de hele website. Dat was te veel voor mij om handmatig te checken of weg te halen.

(Websites zijn simpelweg folders en bestanden. Als jij een folder bezoekt---bijvoorbeeld `pandaqi.com/sixpack/`---dan laadt hij dus automatisch het index bestand. Oftewel, in _alle_ folders die je kon bezoeken was dit bestand vervangen. Zeker op zo'n gigantische website als Pandaqi zijn dat al gauw duizenden folders.)

Naast deze switch waren er nog twee dingen gebeurd.
* Een bestand genaamd `about.php` kwam ook steeds terug. Hierin stond het signatuur van de hackers (wat ze graag achterlaten) en een klein beetje code waarvan ik _denk_ dat het cookies plaatste zodat het je kon tracken.
* Het bestand `.htaccess` was overal aangepast. 

Ugh. Altijd die `.htaccess`. Geeft altijd problemen.

Nou ja, in dit geval waren ze niet per se aangepast, maar _toegevoegd_. Want al die platte websites van mij gebruikten dit bestand dus _niet_. (Godzijdank bereikten ze er dus niks mee op al die websites.)

Wat doet dit bestand? Het beheert hoe URLs werken op je website. Dus bijvoorbeeld ...
* Je kan zeggen dat URL A naar URL B moet omleiden.
* Je kan zeggen welk document bezoekers te zien krijgen als een pagina niet bestaat (Error 404, of vele andere errors).
* Je kan zeggen welke bestanden je server wel of niet mag uitvoeren.

Je kunt wel raden waarom dit zo interessant is voor hackers. Hiermee kan je dus, zonder de rest van de website ook maar aan te raken, dingen doen zoals ...
* Automatisch omleiden naar jouw scam website.
* Alleen maar toestaan dat jouw hack-bestanden worden uitgevoerd, en de rest verbieden.

En inderdaad, ik open die bestanden---die eerst dus niet eens _bestonden_ omdat ze niet nodig waren---en zie alle dingen die de hackers graag wilden dat werden uitgevoerd.

## Stap vier: hoe doen ze dit?

Op dit moment weet ik dat handmatig oplossen zinloos is, dus al mijn websites moeten er gewoon even helemaal af. (Dit is, nogmaals, geen probleem. Ik kan die websites in een halve minuut opnieuw bouwen en opnieuw erop gooien.)

Terwijl hij daarmee bezig is, zoek ik verder. Want het heeft geen zin om over twee dagen alles terug te zetten als het virus nog steeds rondloopt.

Oké, ze zijn niet in mijn hosting of server gekomen. Ik heb geen tekenen dat ze iets anders hebben geraakt. De enige bestanden die ze wilden uitvoeren (of die ze toevoegden) waren `.php` bestanden. Tja, dan moet het iets daarmee te maken hebben.

Zo ontdekte ik dat PHP veel krachtiger is dan ik dacht. (Ik heb er 10 jaar geleden een paar websites mee gebouwd, vond het een verschrikkelijke taal, heb er daarna niet meer naar gekeken.)

En eigenlijk is het heel logisch. PHP kan dus dingen uitvoeren op de server. In mijn hoofd was dat "artikelen opvragen" of "een database aanpassen", maar het kan dus _alle dingen die je zou kunnen uitvoeren op een server_.

Nadat ik zoveel mogelijk hackersbestanden had weggehaald, gooide ik snel een eigen bestand op mijn server. Met slechts een paar regels PHP code kon ik aflezen welke "processen" de server allemaal uitvoerde.

En inderdaad, het was achter de schermen allemaal shit aan het doen die het niet hoorde te doen. Blijkbaar kan je met PHP---als je een hacker bent en verstand hebt hiervan---processen op de server aanzetten die blijven doorgaan. Dit heet een "PHP re-infector".

Dus ik pas dat bestand aan met nog wat regels PHP code om al die processen te vermoorden.

Ik bezoek dat bestand (zodat het wordt uitgevoerd), het geeft mij de melding dat server is "overbelast". Ik kan mijn websites even niet meer bezoeken. Heeft het gewerkt? Ja of nee? Heb ik het erger gemaakt? Of is de server nu juist bezig met al die processen killen? :p

Ik leer een tweede les: ik kan blijkbaar ook gewoon aflezen wat mijn stukje server doet op een andere, veiligere manier. (Voor de geïnteresseerden: je kan met SSH inloggen op de server zelf en dan met `top` of `ps -aux` commando's een lijst krijgen van wat het allemaal doet.)

Ik zie dat er niks meer aanstaat. De enige processen die runnen zijn mijn SSH sessie en het commando dat ik net zelf heb uitgevoerd.

En inderdaad, na een uur zoeken en proberen, komen de bestanden niet meer terug! Hoezee!

## Stap vijf: de gevolgen (en zeker zijn)

### Lessen geleerd

Ik heb in ieder geval véél geleerd over PHP, servers, WordPress, etcetera.

Dit is wat er waarschijnlijk is gebeurd.
* In de late uurtjes van 14 december probeerden ze lange tijd in te breken, en ergens is dat gelukt.
* Ze kregen de mogelijkheid om hun eigen PHP bestanden uit te voeren op mijn stukje server. (De eerste instantie hiervan was zo rond half 7 's ochtends op 15 december.)
* Zoals we nu weten kunnen ze daarmee dus van alles doen. Zoals een script dat door de hele server gaat en van die `index.php` bestanden maakt.
* Omdat ik een goedkope "shared" hosting heb, staan al mijn domeinnamen op hetzelfde stukje server, in dezelfde omgeving. Dus dat PHP proces dat bedoeld was voor alleen WordPress, raakt per ongeluk al die websites (ook al kan het er niks mee).
* Ik kwam hier achter rond half 6 's avonds en had alles leeggehaald en afgeschermd rond 8 uur.

**Hoe zijn ze binnengekomen?** Ze zijn niet binnengekomen door een wachtwoord te raden, want ik kon overal nog in (ook het WordPress.com account dat achter het blog schuilt) en er was nergens iets veranderd. Ik schat de kans het grootst dat ze via iemand anders binnenkwamen, die simpelweg de server met mij deelt, of dat ze een ander lek vonden in WordPress waardoor ze in ieder geval de PHP truc konden uitvoeren.

Ik wilde het hele verhaal delen met mijn hosting, maar ze hebben geen support mogelijkheid hiervoor. (Je kan alleen hele specifieke vragen doorgeven, en gek genoeg stond "mijn server is gehackt, ik heb het zelf opgelost en onderzocht, maar misschien is het een groter probleem?" er niet bij. Als je hen wil laten kijken naar de veiligheid van je server kost dat geld of een hoger plan. Dus ik heb het maar laten zitten.)

Want ja, als de hackers daadwerkelijk ergens in waren gekomen, hadden ze véél meer schade kunnen doen. Ze hadden mij uit alle accounts kunnen gooien. Ze hadden een wachtwoord van mij gehad dat waarschijnlijk ook wel op wat andere dingen werkte. Ze hadden de hele website kunnen gebruiken voor hun doeleinden, in plaats van een vrij zinloos front plaatsen en verder niks.

**Het doel van de hackers?** Waarschijnlijk gewoon een extra domeinnaam (met enige status/bekendheid bij Google) gebruiken om naar hun eigen scams, winkels, whatever te wijzen. 

Ik zag bijvoorbeeld dat ze direct bij Google en Bing tientallen URLs hadden ingediend. Oftewel, nadat ze mijn website in bezit hadden, zeiden ze meteen tegen Google dat het hun nieuwe verwijzingen moest indexeren en opslaan. Dit waren adressen zoals `/ladies/2012` of `store?product_uuid=183`. Tja, je kan wel raden wat ze ongeveer aanboden. 

Een dag later, toen mijn website dus helemaal weg was, kreeg ik foutmeldingen van Google dat ze die ingediende URLs niet konden vinden! Wat gek!

Van hun bestanden op mijn server kon ik aflezen dat ze cookies plaatsten om je te tracken, doorverwezen naar andere URLs, en iets van een webwinkel of advertenties daarvoor aan de gang hielden. (Hun bestanden waren nogal kort, meestal niet langer dan honderd regels code. Ze hadden de PHP code wel "obfuscated", maar die gooi je in een online "de-obfuscator" en dan is het ongedaan.)

### Alles leeghalen

Inmiddels zijn al mijn websites compleet leeggehaald. Zo weet ik zeker dat _alle_ bestanden van hackers zijn verdwenen.

Er zijn alleen wat folders of bestanden die ik verdacht vindt op het hoogste niveau. (Dus niet in een specifieke website, maar helemaal in de bovenste folder die _alle_ websites managet.) Ik doe mijn beste onderzoek hiernaar. Ik ontdek dat het allemaal verplichte bestanden zijn die ik niet moet aanraken. Maar het zit me bijvoorbeeld niet lekker dat één bestand (dat eventueel wachtwoorden managet voor de server) op 14 december plotseling is veranderd.

Uiteindelijk brengt onderzoek je maar zo en zo ver. Op basis van mijn kennis waagde ik mijn beste gok welke bestanden wat deden, welke weg moesten, welke potentieel gevaar waren, etcetera. Uiteindelijk is de server flink opgeschoond ... en alles werkt nog precies zoals eerst.

{{% remark %}}
Een groot deel van dit soort bestanden zijn overblijfselen van vroeger die niet fatsoenlijk zijn opgeruimd. Dat gebeurt altijd. Bijvoorbeeld, ik heb al twee jaar het domein `pandaqitutorials.com` niet meer, maar ik vind nog steeds eens in de zoveel tijd een restant van diens operatie ergens op de server.
{{% /remark %}}

### En weer terugzetten

Nu ik weet dat mijn `index.html` bestanden niet meer worden weggehaald / veranderd, typ ik snel een bestandje voor Niet Dat Het Uitmaakt, om een bericht te geven aan eventuele bezoekers.

Ook als een soort lokaas. De dagen daarna laat ik deze staan en check of er nog mee wordt geklooid.

Dat gebeurt niet.

Ik kan niks verdachts vinden, niet op de server, niet in de logs, nergens.

Dus op 21 december zet ik alle websites weer volledig terug.

Maar Niet Dat Het Uitmaakt vereist natuurlijk speciale aandacht. Ik kan niet simpelweg de oude installatie terugzetten, want dan zet ik ook het eventuele veiligheidsrisico terug. 

Ik doe opnieuw onderzoek en lees een hoop artikelen over WordPress beveiligen, zoals [deze van mijn hosting zelf](https://www.vimexx.nl/help/hoe-beveilig-je-je-wordpress-website).

Dus ik ...
* Installeer een nieuwe (laatste) versie van WordPress.
* Maak een nieuw administrator account, met gekke naam en wachtwoord (nooit te raden) én Two-Factor Authentication.
* Zorg ervoor dat alle bekende lekken (die vaak aanstaan om een of andere reden) uitstaan.
* Zet de oude website terug, grotendeels intact.
* Probeer of de website kan doorgaan zonder enige plugins of extra onderdelen.

En ik ben vooral blij dat ik over een jaar dit domein laat verlopen en dan geen WordPress meer op mijn stukje server heb.

## Conclusie

We zullen zien of dit genoeg was. Misschien was de hack dieper dan dit. Misschien waren ze toch echt serieus over mijn domeinen naar beneden halen. Misschien had ik iemand boos gemaakt met mijn onderbouwde kritiek op het onderwijssysteem ;)

Of misschien was dit een toevallige hit die eraan zat te komen, van mensen die voor de lol rotzooi schoppen.

Zo had ik "toevallig" een paar dagen geleden, voor het eerst in lange tijd, mijn WordPress geüpgraded naar de laatste versie, inclusief alle plugins. (Dat stond al bijna twee jaar op de to-do lijst.)

Zo ben ik "toevallig" een paar weken hiervoor begonnen met het schrijven van een boek over onder andere hackers, complotten, en privacy, waarin Vietnam ook nog eens een rol speelt, gebaseerd op waargebeurde dingen ...

Nou ja, niet te veel over nadenken.

Ik heb er veel van geleerd. Het onderstreept maar weer hoe hacks (of problemen in het algemeen) vooral ontstaan doordat mensen liggen te slapen. Sinds ik het blog heb overgezet naar tiamopastoor.com heb ik hem eigenlijk compleet genegeerd. Het verloopt ergens een keer. Het is toch niet meer mijn hoofdwebsite. Het zal wel.

En dan krijg je dit.

Hopelijk was dit de laatste keer dat je mij hoort over dat mijn hele server is gehackt.

Voor de geïnteresseerden, dit zijn twee artikelen die bijna exact overeenkomen met wat ik op de server ervaarde:
* [PHP WordPress Malware Analysis](https://hacked.codes/2022/december-2022-php-wordpress-malware-analysis/)
* [PHP Re-Infectors](https://blog.sucuri.net/2021/12/php-re-infectors-the-malware-that-keeps-on-giving.html)