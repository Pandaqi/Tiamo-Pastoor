---
title: Het mysterie van de USB-poort
author: tiamopastoor
date: 2021-07-21T14:00:00+00:00
language: nl
categories:
  - Anecdotes

---
In onze woonkamer staat, nu al _jarenlang_, een gezamenlijke computer.

Dit is een oude iMac uit het tijdperk dat ze nog apparaten maakten met een fatsoenlijke dikte, in plaats van die flinterdunne dingen waarvan je bang bent dat ze breken als je ze aanraakt. Heel oud dus.

Mijn moeder kocht deze computer toentertijd om haar eigen zaken te regelen (zoals Photoshop-werk voor een fotografiecursus die ze volgde). Maar omdat Apple een vervelend bedrijf is, was de computer enkele jaren later letterlijk _onbruikbaar_, en dus gaf ze hem aan mij. Misschien kon ik er nog iets van maken.

Ik startte hem op ... en zag meteen dat het zinloos was. Alles liep vast, alles was verouderd en had een update nodig, maar die updates bestonden niet meer voor deze oude computer. 

## De Bootcamphel

Dus ik deed wat ik altijd doe: Windows installeren. Met héél veel goocheltrucs krijg ik het voor elkaar om de Mac-kant van de computer zo klein mogelijk te maken en op de rest een nieuwe Windows 10 installatie te zetten.

Hieronder een korte reconstructie van dit installatieproces, want hier had ik eigenlijk al de eerste clues moeten zien.

Elke Mac heeft het programmaatje Bootcamp waarmee je, theoretisch, heel makkelijk Windows erop kan zetten. Maar deze Mac was zo oud, dat het niet via een USB-stick kon, én dat ik maximaal naar Windows 7 kon. Dus ik verander wat dingen in het systeem zodat ik deze restricties kan omzeilen. Ik stop een USB-stick met Windows 8 erin (wetende dat ik deze gratis kan upgraden naar Windows 10), installeer het geheel, en doe een vreugedansje ...

... totdat ik erachter kom dat de helft van de computer niet werkt. Er is geen geluid, geen bluetooth, je kunt de schermhelderheid niet veranderen, etcetera. Wat blijkt nou? Het werkt alleen perfect, bij deze generatie computers, als je Windows installeert van een _CD-ROM_. 

Dus toen heb ik in dozen moeten graven om een DVD te vinden, die overschrijfbaar was, en groot genoeg. En het hele proces opnieuw moeten doen. 

En dat duurde letterlijk _twee dagen_. Elke keer hoorde ik de DVD-lezer opstarten (binnenin de Mac), drie seconden draaien, en dan weer afsluiten. Blijkbaar was er iets mis met de lezer, of met de DVD, waardoor hij steeds faalde en opnieuw opstartte. Maar het voortgangsbalkje bleef vooruitgaan ... en hij crashte niet ... dus ik liet hem aanstaan. En voila, twee dagen later was Windows netjes geïnstalleerd!

Ik testte of alles werkte: dat was inderdaad het geval. Ik testte de snelheid: die was alsof we een nieuwe computer hadden gekocht! Dus ik ben blij, ik laat (om 2 uur 's nachts) een berichtje achter op een post-it dat de computer weer bruikbaar is voor alles, en ga als tevreden man naar bed.

## De eerste probleempjes

Nou, dat was een leugen.

De volgende ochtend krijg ik te horen dat de computer _heel langzaam opstart_. Als je hem aanzet, sta je 1-2 minuten naar een grijs scherm te staren. Dan "flipt" hij ineens naar zwart en 5-10 seconden later zie je het Windows logo en komt alles goed.

Dus "héél langzaam" is wat overdreven. (Mensen zijn ook niks meer gewend tegenwoordig.) Maar het is wel vreemd, want het is de omgekeerde wereld! Het grijze scherm is van de _Mac-kant_. Die hoort hij alleen een paar seconden te laten zien _terwijl hij zoekt naar het besturingssysteem_. Windows opstarten zou juist een minuut moeten duren. 

Dit was de volgende clue: er is _iets_ raars aan de hand binnenin deze computer.

Dan komt het volgende probleem: het toetsenbord werkt niet. Je kan slaan wat je wilt, er wordt niks getypt. Oh---wacht---toch wel? Hmm, het toetsenbord doet het niet direct na het opstarten ... maar wel als je even twee minuutjes wacht? Vanaf dat moment doet hij het perfect? Wat is dit? De volgende clue, dat is wat het is.

Er is iets héél raars aan de hand met deze iMac. Maar tegelijkertijd, als je deze obstakels voorbij bent (wat dus letterlijk neerkomt op hoogstens 10 minuten wachten), doet alles het perfect.

Of toch niet. Ik besluit er een klein spelletje op te zetten en die te spelen met mijn broertje. Ik heb inmiddels een redelijke verzameling controllers die ik op de computer kan aansluiten, dus we kiezen er twee en stoppen ze in de USB-poorten. 

Eentje gaat aan, de ander niet. Ik wissel naar een andere USB-poort: nu gaat mijn controller wél aan!

AHA! SHERLOCK HOLMES HAS SOLVED THE KAAS! 

Er is iets mis met de USB-poorten. Ik weet niet hoe of wat, maar de poorten lijken beschadigd, waardoor ze het soms niet doen én waardoor het lang duurt voordat de computer ze "opgestart" krijgt (en herkent).

## Data verzamelen, natuurlijk

Althans ... dat moeten we even testen. Ik zou geen wetenschapper zijn als ik niet probeer dit tot het einde uit te zoeken, door allerlei testjes te doen van unieke of extreme gevallen. 

Dus in de jaren die volgen heb ik deze dingen ontdekt:

  * De meeste apparaten worden wél meteen herkend. Onze draadloze muis, bijvoorbeeld, kunnen we meteen gebruiken zodra Windows is opgestart.
  * De oude Apple toetsenborden hadden ook hun eigen USB-poorten (in de zijkant). Die doen het in het geheel niet meer, want de computer zegt dat het "te weinig stroom" erdoorheen kan sturen.
  * Als je alles eruithaalt, start de computer nog steeds even langzaam op.
  * Soms blijft de computer voor eeuwig hangen in het grijze scherm. Een simpele hardware reset (dat doe je door de stekker eruit te halen en een obscure combinatie van knoppen in te drukken) lost dit altijd op.
  * Alleen de _vierde_ USB-poort is altijd slecht. De _derde_ is twijfelachtig, maar de _eerste en tweede_ hebben het (naar mijn weten) altijd gedaan. Ja, we hebben ze inmiddels genummerd, en weten dus _precies_ waar je wel of niet iets in moet steken :p
  * Enkele raar specifieke onderdelen van Windows werken niet meer. Updates ontvangt hij niet. Hij gooit vaak zonder reden zichzelf van het internet. Als je iets fullscreen maakt, loopt de hele computer 15 seconden vast, daarna doet hij het perfect.
  * Als de computer minder dan 40-50 GB vrije ruimte heeft, kan je vaak geen bestanden meer downloaden, of worden bestanden corrupt. Dit wordt verergerd als je met _grote_ bestanden bezig bent (4+ GB).
  * Eén van onze controllers is kapotgegaan door een foute USB-poort. Ik hoorde zo'n "frzzfzzfz" geluid na aansluiting en zag meteen het licht dimmen. De controller is vervolgens nooit meer online gekomen. Jammer genoeg was dat een van onze "goede" controllers, zonder geldende garantie.
  * En vast nog allerlei kleine dingetjes die ik hier vergeet te vermelden.

## Wat is de conclusie?

Ten eerste: koop gewoon een goede computer met Windows. Wat je "wint" met Apple (een mooi uiterlijk en iets vriendelijkere interface), weegt niet op tegen alles wat je verliest. En daar betaal je dan ook nog honderden euro's extra voor!

De vele iMacs die wij ooit hadden, zijn relatief snel onbruikbaar geworden. Ik heb hun levensduur kunnen verdubbelen door Windows te installeren en alle sporen van Mac te verwijderen. En na dit hele fiasco is iedereen overgestapt op "gewone" computers met Windows, want dat is gewoon slimmer.

Maar ten tweede: er is véél mis met deze iMac. 

De USB-poorten krijgen waarschijnlijk constant andere ladingen elektriciteit, waardoor sommige dingen die je aansluit meteen doorbranden, en andere veel moeite hebben om een verbinding tot stand te brengen.

De harde schijf heeft waarschijnlijk een aantal kapotte sectoren. Als je daar iets probeert op te slaan ... ben je het gewoon kwijt.

Het scherm doet moeilijk over alles (en inmiddels kunnen we de helderheid opnieuw niet meer veranderen, dus we zitten vast op VOLLE HELDERHEID, wat 's avonds best pijnlijk is voor je ogen). De WiFi-kaart vliegt eruit als hij er zin in heeft.

En toch ... elke dag worden urenlang (soms best zware) spellen gespeeld op deze computer, en 's avonds urenlang films en series gekeken. En dat lijkt hij allemaal prima vol te houden.

Dus ondanks mijn gezeur over Apple, kan ik het misschien beter een _magische computer_ noemen.

Want normaal gesproken breiden dit soort problemen zich uit. Eén slechte sector in je geheuen, worden twee, worden vier, totdat op een dag je hele geheugen faalt. Eén deel van de apparatuur met elektrische schokken, leidt tot doorbranding van steeds meer onderdelen, totdat alles kapot is.

Maar dat gebeurt niet. _Elke dag opnieuw_ blijft de computer een "eeuwigheid" (in de termen van mijn broertje) hangen op iets dat drie seconden zou moeten duren, maar hij komt er weer uit alsof het niets was. _Elke dag opnieuw_ moet je twee minuten wachten totdat het toetsenbord online is, maar daarna doet hij het gewoon! (Er is geen enkele toets kapot. En als je het keyboard aansluit op iets anders doet hij het direct.)

En ik heb er geen verklaring voor. Ik heb géén idee hoe een USB-poort een soort "timer" erin kan hebben, en pas daarna doet hij het wel (bij sommige apparaten). En bij andere doet hij het meteen. En weer andere maakt hij meteen helemaal kapot.

Inmiddels steken we het toetsenbord altijd in die vierde USB-poort. Want we weten dat het toch wel goedkomt. Dat ding doorstaat alles! (En ik ga echt geen goede controller meer wagen aan die USB-poort :p)

Dus de volgende keer dat je screenshots/videomateriaal ziet van één van mijn spellen, moet je het volgende bedenken:

  * Dit is gefilmd op een 10 jaar oude iMac
  * Die Windows 10 runt, die al _lang_ niet meer geüpdatet is.
  * Die mijn spel uitvoert vanaf een USB-stick, want het geheugen van de computer zelf is meestal niet te vertrouwen.
  * Waarbij ik eerst het spel opstart en instel en dan op het laatste moment snel het toetsenbord en muis eruittrek. Om ruimte te maken voor ...
  * Vier controllers in de USB-poorten gestoken, waarbij de meest goedkope (eentje van 12,50 die ik ooit bij Bol.com kocht) in de 4e poort wordt gestoken.
  * Terwijl de eerste 5 minuten van de opname altijd een zwart scherm is (want zoveel moeite heeft hij met het feit dat ik mijn spel fullscreen maak).
  * Maar wonder boven wonder, komt er een goede opname uit, wordt geen enkele controller eruitgegooid, en werkt het spel hierop net zo goed als op de allernieuwste moderne hardware.

En ik weet: als mijn spel _op dit gehandicapte stuk metaal werkt_, dan moet het wel overal werken.

Maar wat er precies met die USB-poorten gebeurt? We zullen het nooit weten.

{{% remark %}}
Ik ben eerlijk gezegd compleet vergeten waarom ik dit artikel heb geschreven. In mijn notities stond wel "geef algemeen advies over blackouts, brownouts, en hoe USB ontworpen is om dit soort kortsluiting te voorkomen" Maar terugkijkend op deze anekdote, heeft dat er allemaal weinig mee te maken, en is het artikel sowieso al te lang. Dus wie weet, voor een volgende keer :p
{{% /remark %}}