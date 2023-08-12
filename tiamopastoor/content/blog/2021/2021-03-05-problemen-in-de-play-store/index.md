---
title: Problemen in de Play Store
author: tiamopastoor
date: 2021-03-05T15:00:00+00:00
language: nl
thumb: /uploads/2021/02/WebsiteAssets-WideLogo_result.webp
categories:
  - Games

---
Onlangs heb ik een _interactief prentenboek_ uitgebracht genaamd [Vierkante Ogre][1].

Het "interactieve" deel daarvan beslaat maar liefst 60 **puzzels** die je moet oplossen tijdens het verhaal. 

En weet je waarop je ook heel goed kan puzzelen? Precies: een computer of mobieltje. Dus om dit boek te ondersteunen, als een soort grote bonus of uitbreiding, maakte ik een computerspelletje met maar liefst **500 puzzels**.

Dat proces ging eigenlijk (relatief) vlekkeloos en ik denk dat het uiteindelijke spel heel mooi en goed is geworden.

Maar toen ik het wilde uitbrengen voor Android via de Play Store ... toen kwamen de problemen.

Hieronder geef ik de link naar het spel. Maar om eerlijk te zijn, met hoe _willekeurig_ ze mijn spel de hele tijd afwijzen of terugzetten naar oude versies, weet ik niet of de link consistent zal werken :/

> Download dat spel hier: [Square Ogre (in de Play Store)](https://play.google.com/store/apps/details?id=com.pandaqi.square_ogre)

## Een "interne" test

Deze "gratis" versie van het spel wordt ondersteund met _advertenties_, maar je kunt in het spel (middels een simpele knop) de volledige versie _kopen_.

Ik kan dat systeem pas testen als de app _al in de Play Store staat_. (Want het moet verbinding maken met diens netwerk.)

Dus ik dacht: weet je wat, ik upload snel de laatste versie van het spel voor een _interne test_, stuur die naar mezelf, en dan weet ik of het werkt!

Ik upload het ... en krijg overal foutmeldingen.

Wat was het probleem? Blijkbaar behandelen ze een _test_ óók als een volwaardige versie van het product! Dus ik moest _alles al invullen en klaarzetten_ voordat ik het spel mocht testen.

Dat betekent: screenshots uploaden, trailer, tagline, enquetes invullen over de inhoud, en ga zo maar door.

WAAROM?! Waarom mag ik niet de app _testen_, in mijn eentje, zonder al die onzin al te moeten invullen!? Het is een **test**. Ik heb al die informatie nog niet op dit moment!

## Wachten, wachten, wachten

Dus ik vul het allemaal in. Ik schrijf "lalalala lorum ipsum" in de beschrijving, upload exact hetzelfde screenshot 8 keer opnieuw, totdat hij mijn testversie accepteert.

Hè hè, kan ik eindelijk mijn eigen spel testen.

Nope.

Ze gaan het eerst _beoordelen_. 

WAAROM!? Het is een **test**. De enige ontvanger **ben ik zelf**. Waarom moet Google mijn spel eerst beoordelen en checken of ik wel aan alle regeltjes voldoe!?

Nou goed, ik 1,5 week (!) wachten, tot ik de mail krijg: "Je app/game is afgekeurd. Reden: beschrijving is niet volgens het beleid"

VIND JE HET GEK!? Het spel is nog niet af. Ik heb gewoon even "lalala" getypt. _Iemand_ heeft 1,5 week nodig gehad om daarnaar te kijken en te besluiten "nee, dit overtreedt duidelijk onze regels, deze app keur ik af!"

## Oké, dan test ik het niet

Dus ik besluit dat testen te laten zitten. Ik maak de game netjes af, test of alles werkt op mijn laptop/mobiel, en maak vervolgens al het marketing materiaal (trailer, screenshots, tekstje, links, etcetera).

Want dat is het gevolg van dit beleid. Als mensen steeds superlang moeten wachten tot Google het goedkeurt (volgens hun duizenden regeltjes), en eigenlijk alles al _af_ moeten hebben voordat ze mogen testen, dan stoppen ze gewoon met testen.

Heeft dat gevolgen? Nou, je raadt het nooit, dat geeft inderdaad problemen.

## Privacy

Google wil heel graag mensen het idee geven dat ze _geven om privacy_ en het _heel serieus nemen_.

Elke ontwikkelaar moet dus een heuse _privacy policy_ toevoegen op de pagina van het spel.

(In werkelijkheid gebruikt iedereen een automatische online "policy generator" die exact dezelfde juridische jargon produceert. Maar zo ver kijken ze niet, dus dat wordt goedgekeurd.)

Wat ik _niet_ wist, en wat onlangs dus veranderd is, is dat je ook een privacy policy _in het spel_ moet toevoegen.

Dus ik weer een week wachten ... tot ik een mail krijg met: "Je app is verwijderd uit de winkel! Reden: schenden van privacybeleid."

(Overigens zeggen ze er dus niet bij _wat_ je precies hebt geschonden. Ik moest weer regeltjes lezen, zoeken en puffen en kreunen, tot ik vond dat de link in het spel moest.)

Dus ik spendeer een halfuur aan een mooie knop maken, die positioneren, en klaar is kees.

## Eindelijk geaccepteerd (?)

Een dag later was het spel geaccepteerd! Hang de vlag uit! Dank de goden!

Het zag er prachtig uit in de store, professioneel, afgewerkt---ik was tevreden.

Totdat ik besloot om het spel _via de Play Store_ te installeren en te kijken of het echt allemaal werkt.

Het crashte. Niet een beetje, niet na een tijdje spelen, het crashte _bij het opstar_ten. Het spel was simpelweg onspeelbaar.

Hier zijn twee problemen. Ten eerste: je wilt niet een onspeelbaar spel lanceren, dus ik moest _héél snel_ de fout vinden en fixen.

Ten tweede: HET SPEL WERKT NIET EN DAT HEBBEN ZE WÉL GEACCEPTEERD?!

---"Poeh, dit spel heeft niet een link naar een betekenisloze privacy policy. Verwijder het meteen! Stuur een boze mail! Dit kan niet in onze mooie store!"

---"Eh, dit spel start niet eens op en crasht bijna je mobiel, en dat geldt voor iedereen ... GEWELDIG! Die gaan we toevoegen aan onze store!"

## Wat was het probleem?

Kijk, tijdens de ontwikkeling van zo'n spel test ik het steeds op dezelfde paar apparaten.

Dat betekent dat sommige bestanden, zoals de _save file_ (met welke levels je wel/niet hebt gehaald) en de _settings_ (je gewenste instellingen, zoals het volume) al bestonden en de juiste waardes hadden.

Als je het spel _voor het eerst installeert_ (vanuit de Play Store), haalt die alles weg en begin je helemaal opnieuw.

En daar had mijn code niet op gerekend.

Dus het spel crashte meteen, omdat het die bestanden niet kon vinden. En als hij ze dan aanmaakte, kon hij niet de juiste _waardes_ vinden.

Dat was makkelijk op te lossen. Een snelle check of het bestand bestaat. Zo niet, maak het aan. Is het bestand leeg? Vul het met de standaardwaarden.

Het zijn tien regels code verschil, maar het resulteert in het verschil tussen "het spel is onspeelbaar voor iedereen" en "het spel werkt perfect voor iedereen"

Dus ik heb het snel opgelost en een nieuwe versie gepubliceerd.

{{% remark %}}
Hierdoor weet ik dus zeker dat die mensen mijn spel gewoon niet persoonlijk hebben gecheckt. Deze crash zou _voor iedereen moeten gelden_. Tenzij ze exact hetzelfde apparaat gebruiken om alle apps te testen, en die bovendien nooit _wissen_ of _resetten_ ... maar dat zou een grote schande zijn.
{{% /remark %}}

## En nu?

Na wederom lang wachten (5 dagen) ... hebben ze de nieuwe versie geaccepteerd. En ze hadden niet eens zin om dat aan mij te vertellen, ik moest zelf constant checken of de update al was doorgekomen.

Het spel werkt nu, voor iedereen, zonder problemen.

Waarom schrijf ik dit artikel dan?

Ten eerste: als herinnering. Als je een spel maakt, maak dan regelmatig je geheugen/bestanden _leeg_, om te checken of het ook allemaal werkt op een nieuwe installatie.

Ten tweede: **de Play Store is echt één grote grap.** 

Ze weigeren de beste spellen om de kleinste stomme regeltjes in hun overheersende beleid. Maar ze accepteren spellen zonder ze één seconde persoonlijk te kijken en te weten _of ze überhaupt opstarten_.

Er staat nu al **twee jaar lang** constant "Beoordelingen duren tijdelijk langer dan normaal". Ze hebben gewoon veel te weinig mensen in dienst, of goedlopende systemen, om alle apps te beoordelen in een redelijke hoeveelheid tijd. En in plaats van dat probleem oplossen, laten ze liever overal een berichtje zien dat ze "sorry" zijn.

En als kers op de taart doen ze **helemaal niks tegen mensen die je spel stelen**. Als iemand iets succesvols bedenkt, staan er altijd binnen 1-4 weken honderd _clones_ in de Store die letterlijk het hele spelidee stelen, en soms zelfs meer (geluidseffecten, plaatjes, etc.). En dat probleem wordt op mysterieuze wijze nooit ontdekt tijdens deze "grondige beoordelingen" die ze uitvoeren?!

Wat een onzin is het ook. (En nee, de App Store van Apple is geen haar beter, alleen duurder en pretentieuzer.)

Er is een reden dat ik besloten heb om nóóit spellen te maken die alleen voor mobiel zijn. Ik zie de Play Store alleen als een speeltuintje waarop ik kan _testen_ of mijn spellen werken en makkelijk een demoversie aan het grote publiek kan geven. Als ik alle obstakels en hordes van die onzin heb doorstaan ... ja, dan kan ik het spel vrijgeven aan de _échte spellenwinkels_ waarvan ik iets verwacht. (En ik ben zeker niet de enige ontwikkelaar die het zo doet.)

En tja, dan moeten we nu nog zien of het spel door veel mensen wordt gespeeld 🙂

## Toch niet! Nog meer gezeur!

Een volle _week_ na het accepteren van mijn spel, besloten ze een mailtje te sturen dat ze het toch met onmiddelijke ingang verwijderd hebben.

Waarom? Nou, zoals altijd zijn ze hier behoorlijk vaag over. Ze zeggen: 

> "Advertenties of in-app aankopen zijn niet duidelijk te onderscheiden van app-inhoud"

WAT WILLEN ZE DAN?! Dat ik elke knop die naar een advertentie leidt extra lelijk maak? Dat ik die een heel ander ontwerp geef dan de rest van het spel? Dat ik constant het scherm (dat al vrij klein is op smartphones) opvul met berichten en icoontjes die zeggen "als je dit wil doen, moet je een advertentie kijken, weet je het zeker, weet je het écht zeker?"

In de beschrijving van het spel staat héél duidelijk wanneer adverenties verschijnen. (Tevens gebeurt dit op de momenten die bijna alle puzzelspellen kiezen.) In het spel zelf bestaat er ook geen twijfel over---het design van mijn spel lijkt totaal niet op het design van advernties---en als hij een advertentie niet kan laden laat hij een duidelijke errormelding zien.

Dus ik heb geen idee. 

Uiteindelijk heb ik alle knopjes die een _ad_ inleiden maar een extra icoontje gegeven: een tekstwolk met een play-icoontje en het woord "AD" in het groot. Het ziet er nog _soort van_ goed uit, maar zal toch duidelijk moeten zijn.

We zullen zien wat ze daarvan zeggen.

 [1]: /books/vierkante-ogre/