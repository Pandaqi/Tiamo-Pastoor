---
title: 'Leren van je eigen oude spel: deel 2'
author: tiamopastoor
date: 2023-05-05T14:00:00+00:00
language: nl
thumb: /uploads/2023/05/timelytransports_header.webp
categories:
  - Games

---
Niet zo lang geleden schreef ik een artikel over het [updaten van een oud spel](/blog/2023/2023-04-02-leren-van-je-eigen-oude-spel) en wat ik daarvan leerde. Dat spel was Wondering Witches, zo'n 3+ jaar oud, en kon op alle manieren zwaar verbeterd: regels, website, code voor het digitale onderdeel, _alles_.

Ik wist dat er nog zo'n spel bestond op mijn website: [Timely Transports][1]. Rond dezelfde tijd gemaakt en uitgebracht, maar met betere regels, want ik had hem enkele jaren geleden al opnieuw getest en verfijnd. Ook dit spel is té goed om weg te halen, maar de originele versie laat te wensen over. Ook dit spel had een digitale interface die _cruciaal_ was.

Ik noem deze spellen "hybrid games". Ze blijven een bordspel, gespeeld op een fysiek bord met fysiek materiaal, maar er is een digitaal onderdeel (een smartphone waarop je mijn website bezoekt) dat allerlei dingen mogelijk maakt of versimpelt.

Inmiddels heb ik zoveel _hybrid games_ gemaakt dat ik fatsoenlijke ondersteuning ervoor wilde programmeren op mijn website. (Ook had ik nu eindelijk de kennis over _hoe_ je dat zou doen. Iets dat ik 3+ jaar geleden echt niet had.) In plaats van elke keer opnieuw dingen instellen, stukken code kopiëren, etcetera, wilde ik één knopje kunnen aanzetten op een pagina en het hele interactieve gedeelte werd vanzelf gebouwd en ingesteld.

{{% example %}}
Veel van die oude spellen zijn één _gigantisch_ bestand. Toentertijd wist ik niet hoe je het anders deed. Toen ik dat leerde---code in nette kleine stukjes ("modules") hakken en dan "bouwen"---was mijn laptop al te oud en kapot om het te doen. Nu heb ik eindelijk een methode gevonden die grotendeels automatisch gaat én geen eeuwigheid duurt op mijn halfdode laptop.
{{% /example %}}

Alle nieuwe spellen konden makkelijk overgezet naar dit nieuwe systeem. Maar Timely Transports? Nee, die moest helemaal opnieuw geprogrammeerd. 

## De problemen

Ik heb géén idee waarom, maar ik heb het digitale spelonderdeel toentertijd geprogrammeerd in hetzelfde systeem dat mijn willekeurige speelborden gegenereerd. Oftewel, het is niet daadwerkelijk een _interface_, het is meer een soort _plaatje dat zichzelf de hele tijd updatet._ Het is niet een simpele webpagina, maar een _soort interactief filmpje in een webpagina._

Ja, ik weet het ook niet. Waarschijnlijk deed ik 3 jaar geleden de karakteristieke Tiamo-move van: "joh dit is maar een dagje werk, ik kan het wel even doen met wat code die ik toevallig open heb staan". Of ik wist echt niet beter, maar dat lijkt me sterk.

Volgens mij heb ik toen een week---naast mijn studie---hieraan gewerkt, van begin tot eind frustratie, totdat het eindelijk redelijk werkte. _Wat is "redelijk"?_ Op mijn mobiel werkt het perfect. Op de oude iPhone van anderen werkt het 50% van de tijd perfect. De andere 50% van de tijd zoomt hij om een of andere reden heel ver in, en moet je de pagina herladen. Op mobieltjes met een gemiddeld scherm is de interface passend, maar als je een erg klein of langwerpig scherm hebt kan tekst lelijk over elkaar heen lopen.

Toen ik een screenshot wilde maken voor dit artikel ... zag ik dat de interface weer crashte :p "Some New Good Text Here" moet natuurlijk daadwerkelijk een goed (om te verhandelen, in het spel) laten zien.

![](/uploads/2023/04/timely_transports_old_broken_interface-1.webp)

Nou, dat laatste litteken op mijn spellenwebsite wilde ik even verhelpen. (Met dit spel geüpdatet, zijn er alleen nog een paar héle oude bordspellen die wel werken maar gewoon niet al te leuk zijn, en die waarschijnlijk over 2 jaar überhaupt niet meer op de website staan.)

## Het nieuwe systeem

De nieuwe interface is een simpele webpagina, niks anders. Ook zal de code nu dus geschreven zijn in een systeem dat véél netter is en minder (potentiële) fouten oplevert.

  * De score is simpelweg een stukje tekst bovenaan dat checkt of je erop klikt. Zo ja, speel een geluidseffectje en doe de score +1
  * Daaronder _kan_ een pop-up verschijnen (met bijvoorbeeld een nieuw goed dat verschijnt). Dat is, wederom, een simpele container met daarin de tekst en het icoontje. Als je erop klikt, gaat het weg.
  * Daaronder staan de knoppen met al je voertuigen. Elk is een simpele container (vierkant) met een plaatje erin. Als je erop klikt, gaat de timer aan.

Het belangrijkste hier was dus om een stuk code te schrijven dat overal timers aan kan toevoegen:

  * Wat je het ook geeft (een pop-up, een stukje tekst, etcetera) ...
  * ... het kan een timer beginnen en de hele achtergrond mee kleuren. (Hoe langer de timer loopt, hoe meer van de achtergrond wordt ingevuld.)

Daarnaast is eigenlijk alles al geregeld. (Wederom, géén idee waarom ik het toen niet op deze manier heb gedaan.) Websites zijn gemaakt om zich aan te passen aan elke schermgrootte. Dus met een handjevol simpele regels code, bewegen mijn knoppen al netjes mee, en vullen precies je scherm. Ongeacht wat dat scherm is!

De andere systemen zijn net zo simpel, maar het belangrijke is dat ze deze keer wél 100% van de tijd werken :p

  * Een simpel systeem dat audiobestanden afspeelt (zoals wanneer je score verandert, of een timer afgaat)
  * Een systeem dat "upgrade" knoppen kan toevoegen onderaan de voertuigen. (Die verschijnen alleen als je een bepaalde uitbreiding aan hebt staan. Als je erop drukt, verandert het logo en enkele eigenschappen van het voertuig, zoals hoe lang de timer duurt.)
  * Een lange lijst kleine veranderingen op basis van je spelersaantal, welke uitbreiding(en) je aan hebt staan, etcetera.

Als laatste wilde ik de interface een stuk mooier maken. Dat was erg moeilijk met het volgende systeem, maar nu krijg ik gratis die volledige (opmaak)kracht van websites. Door simpelweg her en der ronde hoekjes toe te voegen, of schaduwen, of kleine animaties, wordt zo'n interface al meteen véél professioneler en fijner om te zien.

{{% remark %}}
Want ja, het origineel was dus een bruin vlak met een paar vierkanten in één kleur eroverheen. Niet heel geïnspireerd.
{{% /remark %}}

## Het eindresultaat

Dus de nieuwe interface werd als volgt. (Je kan op je computer aanzetten dat hij doet alsof je een mobiel gebruikt. Dat is wat je hier ziet. Ik test het zo, want dat is hoe je dit spel hoort te spelen. Elke speler op z'n eigen _laptop_ laten zitten is niet geweldig :p)

{{% image-gallery %}}
 ![](/uploads/2023/04/timely_transports_new_interface.webp) ![](/uploads/2023/04/timely_transports_new_interface_2.webp) 
{{% /image-gallery %}} 

We hebben nu een mooie achtergrond. De voertuigen hebben een zacht rond vierkant om zich heen en zijn wat "doorzichtig". Pas als je een timer aanzet, worden ze volledig helder (en gaan ze ook knipperen).

De score is groter en heeft schaduw erachter. Er is een "quit" knop, want ja, de originele versie had géén manier om weg te gaan of af te sluiten (behalve dan simpelweg de webpagina sluiten). De interface heeft nu wél beveiliging tegen per ongeluk weggaan terwijl je nog aan het spelen bent. Het vraagt: "ben je zeker dat je weg wilt? Alle voortgang gaat verloren."

En als laatste zijn de meldingen duidelijker en mooier weergegeven. Je hebt twee soorten meldingen: "new good" (een nieuwe goedere om te plaatsen op het bord) en "new event" (een vaste gebeurtenis die de komende ~60 seconden voor alle spelers geldt). Allebei zien ze er nu zo uit, met goed opgemaakte tekst en icoontjes waar mogelijk.

Het allerbelangrijkste?

  * Alles werkt en is consistent, want de code is nu véél beter en netter geschreven.
  * Een tweede gevolg is veel _kortere_ code. Het origineel was ~1,300 kB (kilobyte). Dit is 25 kB 😉
  * Het beweegt mee met elke schermgrootte, zonder enig probleem.
  * Mocht er in de toekomst nog iets mis zijn, heb ik nu volledig vertrouwen dat ik het direct kan oplossen. Want alle code is simpel, kort, en staat allemaal op de juiste plek.

Ik zal een laatste voorbeeld geven van dit idee. 

In de oude code had ik de code voor timers steeds opnieuw geschreven. (Of, nouja, geknipt en geplakt, en vervolgens een handjevol aanpassingen gedaan.) Zo had de timer achter de voertuigen een andere kleur en vorm dan de timer achter de berichten. Het gevolg is dat je 500 regels code in je project hebt die praktisch identiek zijn. En als ergens een fout zit, zit het overal. Als je bij één timer iets wil toevoegen, vergeet je waarschijnlijk om dit bij _al_ die dingen te doen.

Datzelfde is nu een simpel "Timer" object van zo'n 100 regels code. Zo'n beetje alles in de interface maakt zo'n timer voor zichzelf aan, en verbindt het aan de juiste dingen (zoals welke kleur ze willen dat de timer heeft of hoe lang hij duurt).

Het beste was nog dat ik zelf pas ontdekte hoe fijn dit was ... toen het systeem al zo goed als af is. Ik schreef de laatste stukken code en dacht "oh shit, je moet het spel ook kunnen _pauzeren_! Ah nee he, helemaal geen rekening mee gehouden. Duurt zeker weer een half uur om te maken."

Maar ik had er dus wel rekening mee gehouden. Want alles in het spel gebruikte dezelfde Timer, dus ik hoefde alleen daar een pauzeknop op te zetten---5 regels code om te zeggen dat de timer even moet stoppen---en een halve minuut later kon mijn spel ineens pauzeren :p

De andere les van dit project is natuurlijk dat ik moet stoppen met overal honderd varianten / uitbreidingen voor maken. Want ja, die moet je dan _allemaal_ testen. Iets dat ik eigenlijk niet kan doen in mijn eentje, zeker niet voor een gratis project dat misschien wel niemand speelt. Dit spel heeft zo'n ~500 verschillende configuraties (andere spelersaantallen, andere uitbreidingen, etcetera)---en het heeft misschien wel de minste instellingen van al mijn bordspellen!

In zekere zin is het schrijven van betere systemen mijn vangnet voor dit probleem: ik ben behoorlijk zeker dat alles werkt, zelfs als ik niet 100% van het systeem heb getest. Als de basissystemen werken, weet ik dat 95% van alle configuraties sowieso werkt, want ze gebruiken allemaal precies diezelfde basissystemen.

## Conclusie

Hmm, ik hoopte meer te zeggen te hebben over dit spel. Maar eigenlijk is het de zoveelste herinnering aan de volgende feiten.

  * Als je denkt dat je erg goed bent in wat je doet en een geweldig project hebt gemaakt ... zit je er waarschijnlijk naast. Een paar jaar later zie je pas hoe slecht het was en begrijp je waarom dit niet succesvol werd.
  * Toch was het héél belangrijk om deze "slechte eerste versie" te maken. Daardoor heb ik geleerd over hoe je dit soort spellen wél maakt. Daardoor was deze update een halve dag programmeren---omdat ik precies wist wat ik moest aanpassen, en de plaatjes al had---in plaats van een hele week alles voor het eerst moeten uitvogelen.

Uiteindelijk is dit spel dus _maandenlang_ (als niet veel langer) compleet onspeelbaar geweest. Dat ik daar niks van heb gehoord ... is enigszins verdrietig. Het betekent dat mijn spellen niet zo veel worden gespeeld, of niet zo belangrijk zijn, dat zoiets te merken is. 

Anderzijds, nu zie ik dus hoe onprofessioneel en onafgewerkt veel projecten van 3+ jaar geleden waren, en ik heb ze bijna allemaal geüpdatet. Nu is het allemaal wél werkend, afgewerkt, en van hoge kwaliteit. Hopelijk kan het veel mensen vinden en plezier geven. Dit soort dingen voelen wel als de grens tussen "een amateuristisch probeersel" en "professioneel werk".

Maar ja, zoals we nu weten is de kans groot dat ik over 5 jaar een artikel schrijf over al die oude spellen die dus echt véél te slecht zijn geprogrammeerd en écht niet meer konden :p 

Want over tijd wordt je alleen maar beter en ziet precies wat je vroeger fout deed. En, in dit specifieke geval, gaat technologie ook nog eens altijd vooruit. Bekeken door een bril van vroeger, was de oude code achter dit spel echt niet zo verschrikkelijk. Het was best goed, zelfs. Maar over tijd leren we steeds meer wat _goed_ programmeren betekent, en ontwikkelen steeds meer standaarden om het meeste uit computers te halen. Die stijgende lijn met technologie zal misschien wel nooit ophouden.

Tot dat volgende artikel!

 [1]: https://pandaqi.com/timely-transports