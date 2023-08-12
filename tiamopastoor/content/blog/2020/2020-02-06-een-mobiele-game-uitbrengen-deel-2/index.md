---
title: Een mobiele game uitbrengen – deel 2
author: tiamopastoor
date: 2020-02-06T19:17:30+00:00
language: nl
categories:
  - Anecdotes
  - Games

---
Welkom bij deel 2 in de serie "avonturen in de wereld van mobiele games en de Play Store"! Klik op deze link als je deel 1 hebt gemist: [Een mobiele game uitbrengen---deel 1][1]

{{% update %}}
Het spel waarover ik praat in deze reeks is inmiddels succesvol gepubliceerd! Klik hier om het te spelen: [Into My Arms---Puzzle Game.](https://play.google.com/store/apps/details?id=com.pandaqi.intomyarms)
{{% /update %}}

## De eerste test

So far, so good. Ik heb alle vragenlijsten ingevuld, een testversie van mijn spel geüpload, en besluit een "interne test" naar mezelf en enkele testers te sturen. (Waarbij "testers" synoniem is voor "kennissen die toevallig een Android telefoon hebben en geen iPhone".)

Ik druk op de knop. Errors. Explosies. Alles kapot.

Wat blijkt? Je moet eerst de _volledige app-informatie invullen_ voordat je überhaupt een interne test mag doen. Dus ik moest eerst alle juiste screenshots, marketing tekstjes, en instellingen klaarzetten voordat ik het spel _naar mezelf mocht sturen om het te_ _testen._

Ik voelde al dat er iets mis was, maar ik kon het niet helemaal plaatsen. Dus ik heb netjes alles ingevuld en toen nog een keer op de knop gedrukt.

Geen errors, maar ook geen app.


Wat nu weer? Google moest blijkbaar eerst mijn app beoordelen en goedkeuren! Ik herinner je nogmaals: het gaat hier om een testversie die alleen voor mijn eigen ogen bedoeld is. Maar Google moet hem blijkbaar eerst accepteren.

## Mijn 3 gouden tips

Ik heb _acht dagen moeten wachten_ totdat Google besloot ... om mijn app af te keuren.

Ja, dat was niet zo verrassend. Het was een gebroken, lelijke testversie van het spel. Die voldeed niet aan een hele hoop voorwaarden natuurlijk.

Om het nog erger te maken: ik had de "package name" nog niet aangepast.

Elke Android app heeft een unieke naam waaraan hij wordt herkend in de Play Store. Zodoende kunnen er meerdere apps zijn met dezelfde titel ("Flappy Bird", "Flappy bird", etc.), maar kan Google (en je mobiel) ze toch uit elkaar houden omdat ze een unieke _package name_ hebben.

Normaliter is deze naam van de vorm "com.<ontwikkelaarsnaam>.<spelnaam>" Voor mijn spel is het dus "com.pandaqi.intomyarms"

Maar ik had het nog niet ingesteld, dus mijn pakketnaam was "org.godotengine.intomyarms", want het programma dat ik gebruik om het spel te ontwikkelen heet Godot Engine.

En natuurlijk kan je deze naam niet meer veranderen als je spel eenmaal is gepubliceerd. Dus ik moest het hele proces opnieuw doorlopen toen ik mijn spel écht wilde publiceren.

Daarom presenteer ik nu mijn drie gouden tips:

  * Wees bereid om heel veel tijd door te brengen in de Google Play Console. Probeer alvast dingen in te vullen en alle assets (screenshots en dergelijke) klaar te zetten voordat het spel af is. Anders ga je veel vertraging oplopen wanneer je spel eenmaal af is.
  * Zorg ervoor dat je vanaf het begin de juiste pakketnaam gebruikt.
  * Als je advertenties gebruikt, maar je ontwikkelt een spel voor alle leeftijden, vergeet dan niet om even in te stellen _dat de advertenties family friendly moeten zijn_. Anders wordt Google boos.

Ik ben dit hele artikel al redelijk passief-agressief over Google en hun systemen, maar als ik zeg "gouden tips" dan ben ik eigenlijk best serieus. Google geeft je geen enkele hint wat er verkeerd is. Ik kreeg een mail dat mijn app was afgekeurd omdat de "content classificatie niet klopte". Vervolgens mocht ik gaan gokken welke van _alle voorwaarden_ in die interviews en beleidslijsten ik zou moeten hebben geschonden.

Waarom zeggen ze niet gewoon wat er mis is? Ik had het even opgezocht, en mensen zeiden dat ze het support team hadden gemaild, en meestal binnen een paar dagen een relaxed mailtje kregen dat _exact_ zei wat het probleem was. Dan kunnen ze dat toch automatisch meesturen? Ik snap het niet.

## Tags & Trouble

Sinds kort geeft Google de mogelijkheid om _tags_ toe te voegen aan je spel. Zo'n _tag_ of _keyword_ systeem is vrij standaard in alle online (spel)winkels, dus ik verwachtte dat het net zo werkte als altijd.

Ik had het fout.

Normaal gesproken mag je een stuk of 5-10 tags intypen die het meeste bij je spel passen. Soms mag je alleen kiezen uit een vaste lijst met tags, maar meestal kan je daarin wel iets passends vinden.

Google heeft besloten om een vaste lijst met tags te gebruiken, maar wel onderverdeeld in categorieën, terwijl elke categorie misschien maar 5-10 opties heeft.

Dit is hoe het proces verliep bij mij:

  * Ik zocht de tag "Puzzel"
  * Ik kreeg een lange lijst met alle tags die ook maar _iets_ te maken hadden met het woord "puzzel"
  * Na even zoeken vond ik simpelweg de tag "Puzzel"
  * Ik klik erop. De lijst verandert, maar verder gebeurt er niks.
  * Na een tijdje kom ik erachter dat ik alleen de _categorie_ heb aangeklikt, maar niet daadwerkelijk een tag heb toegevoegd. Nee, daarvoor moet je op de knop helemaal rechts drukken met "toevoegen".
  * Ik voeg (eindelijk) de tag "Puzzel" toe en ga op zoek naar meer tags om toe te voegen.
  * Ik vind niks.

Er waren gewoon niet meer opties. Multiplayer was geen tag. Coop (coöperatief) was geen tag. Uiteindelijk heeft mijn spel dus maar één tag gekregen---Puzzel---en dat voegt niet echt veel toe.

Dus het tag-systeem kan je ook wel opgeven. Althans, als je ook maar enigszins een spel maakt dat niet binnen een paar hokjes past.

## Eindelijk is het zo ver

Het moment is daar! De vlaggen kunnen uit! De toeters kunnen---eh---toeteren!

Mijn spel staat op de Play Store. Compleet met mooie beschrijving, logo, screenshots, trailer, en---niet onbelangrijk---een werkend en mooi spel waarop ik zeer trots ben.

En toen kwam de anti-climax.

## De afterparty

Niemand heeft mijn spel gedownload. Niet eens één iemand die het heeft geprobeerd. Ik weet niet eens of iemand het spel gezien heeft of voorbij heeft zien komen. Ik ben gewend dat mijn spellen een langzame start hebben, maar helemaal 0 downloads is nieuw. Mijn vorige dieptepunt was iets van 2 of 3 op de eerste dag, en dat was voor een véél slechter spel (op de computer) waarvoor ik geen enkele marketing had gedaan.

Dus ik ging nóg meer onderzoek doen en leerde dat de wereld van mobiele apps nóg lelijker is dan ik al dacht.

Laten we eerst de positieve dingen bekijken:

  * Lokalisatie speelt een grote rol. Deze heb ik al vaker gehoord, ook vanuit de wereld van "reguliere" computerspellen. Dus ik heb in ieder geval alle beschrijvingen ook vertaalt naar het Nederlands en ben aan het kijken of meerdere talen mogelijk zijn.
  * Het is mijn eerste spel op de Play Store. Verder ben ik ook een kleine en onbekende ontwikkelaar, zonder following of marketingbudget, dus ik kan geen wonderen verwachten.

En dan openen we nu de doos met de dooie kat ...

(Een natuurkundig grapje, voor de natuurkundigen die dit lezen en toevallig ook geïnteresseerd zijn in spellen? Wat ben ik ook eigenlijk aan het doen, ik ben zelf niet eens een natuurkundige. Ik ben een wiskundige.)

  * Het schijnt "normaal" te zijn om voor honderden euro's nepreviews en nepinstallaties te kopen. Zo kan je spel in de eerste dagen veel aandacht en liefde krijgen, waarna het vanzelf in de top-10 lijstjes terecht moet komen en "viral" is.
  * Het schijnt ook heel goed te werken om op werkelijk alle social media actief te zijn en overal schaamteloos je spel te promoten en op te dringen.
  * Het schijnt dat de Play Store niet geïnteresseerd is in goede spellen en kwaliteit, of het ondersteunen van ontwikkelaars. Ze zijn geïnteresseerd in wat verkoopt. Niet geheel onverwacht, natuurlijk, maar het resultaat is dat ze afgaan op die gebruikersaantallen (en hoeveel advertenties enzo er wel niet worden weergegeven) en dat gebruiken om spellen te promoten. De grote vissen worden alleen maar groter, de kleine visjes worden nog kleiner (voor zover je onder de 0 installaties kunt gaan).

Ik wil niet zo zijn. Ik wil geen trucjes uithalen, nepaccounts opkopen, mensen verslaafd maken aan mijn spellen. Ik wil mooie spellen maken en daar _iets_ van geld mee verdienen.

## Overpeinzingen

Dus ik weet het niet meer. Ik hou van spellen maken, en nog meer van samen met anderen spellen spelen. Ik weet zeker dat ik betere spellen kan maken dan 99% van de rotzooi op de hedendaagse App Store.

(Dat klinkt misschien arrogant, maar als je eventjes rondkijkt in de wereld van mobiele spellen zie je vanzelf dat dit nauwelijks grootspraak te noemen valt. Minstens 75% van de spellen op de Play Store komen van mensen die nog geen regel code kunnen programmeren en nooit hebben geleerd dat kleurenschema's bestaan. En dan hebben we het nog niet eens over spellen die een 100% kopie zijn van andere succesvolle spellen.)

Maar het struikelblok is en blijft _marketing_. Totdat ik iets vind om mee door te breken, blijf ik klein, en het huidige ecosysteem in spellenland houdt mij klein. Totdat ik iets vind wat écht aanspreekt bij veel mensen, wat misschien viraal gaat of in ieder geval een vuurtje doet ontsteken, weet ik niet hoe mijn spellen aan de man kunnen komen.

En ik weet niet of dat een betere situatie is dan 5 of 10 jaar geleden. Toen ik nog héél slecht was in spellen maken. Toentertijd snapte ik best dat niemand mijn spellen wilde spelen, en elk gefaald project was simpelweg een traptrede naar mijn succes. Maar nu maak ik spellen waarvan ik denk dat ze mooi en goed zijn. Spellen die ik anderen laat spelen (vrienden, familie, studiegenoten, iedereen die ik kan vinden eigenlijk) en waarbij ik zie dat ze écht plezier hebben en ervan genieten.

En toch weet ik die spellen niet te verkopen.

Dus, wat is het plan? Het plan is als volgt:

  * Ik ga proberen één of twee hele kleine spellen te maken. Iets wat ik héél snel kan maken, waardoor ik meer tijd heb om me te focussen op marketing. Hiermee wil ik kijken of het inderdaad helpt als je daar je tijd in steekt én een groter portfolio hebt opgebouwd op de Play Store.
  * Ik ga proberen een spel te maken dat _niet_ gratis is. Gewoon bluffen, 2-5 euro voor vragen, doen alsof dit spel gewoon té goed is om gratis te publiceren. Ik heb gehoord van anderen dat het werkt.
  * Ik heb enkele spellen gepland die compleet in mijn straatje liggen. Het zijn bijzondere spellen, dingen die nog niet bestaan, maar die _ik_ geweldig zou vinden om te spellen. Voor die spellen heb ik veel passie en motivatie, en mijn eerste prototypes laten zien dat er inderdaad veel plezier te beleven valt.

Dat is het plan. Als ik eenmaal resultaten heb (wat werkt wel/niet, hoeveel kost het/levert het op, en meer) zal ik die natuurlijk delen!

En als dit spel (Into My Arms) ineens populair wordt, bijvoorbeeld dankzij die lokalisatie naar het Nederlands, dan laat ik dat zéker weten.

Tot die tijd: mobiele games maken? Ik zou twee keer nadenken :p
 

 [1]: /blog/2020/2020-02-06-een-mobiele-game-uitbrengen-deel-1/