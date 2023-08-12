---
title: Omgaan met opstapelende fouten
author: tiamopastoor
date: 2021-03-26T15:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Op dit moment ben ik bezig met een interactief prentenboek genaamd **Ronde Ogre.** Het is het vervolg op [Vierkante Ogre][1] en omvat een prentenboek mét puzzels, inclusief een computerspelletje (met nóg véél meer puzzels).

Het grootste deel van de tijd ging dit project redelijk voor de wind. Maar de afgelopen weken ... kwam ik erachter dat een grote berg fouten zich had opgestapeld.

Een stuk of vijftig puzzels hadden fouten erin waardoor ze ineens niet meer op te lossen waren. En waardoor een groot deel van de puzzels _daarna_ óók niet meer klopten, of gewoon saai en té simpel werden.

Vroeger kon ik het erg makkelijk "opgeven" als dit gebeurde. Ik maak deze projecten immers in mijn eentje, dus er zat niks anders op dan _zelf_ alles opnieuw doen en dagenlang die oude fouten oplossen. Het voelt dan alsof je maanden van je leven verspilt aan iets zinloos

Maar dat was verkeerd. Inmiddels heb ik geleerd hoe je daar wél mee omgaat en dat wil ik graag in dit artikel uitleggen.

## Wat was het probleem?

Ik heb een simulatie geschreven die puzzels kan _genereren_. Als ik de computer een aantal slimme regels en algoritmes geef, kan ik op een knop drukken, en krijg ik even later een paar mooie, goede, werkende puzzels terug.

Oftewel, ik moet veel werk vantevoren doen, maar _als_ de simulatie eenmaal werkt ... kan ik vrij snel honderden goede puzzels ontwikkelen met allerlei interessante regels/onderdelen/vakjes.

Maar dat was ook mijn valkuil.

(Je hoeft voor dit artikel niet te weten hoe dat prentenboek of de puzzels werken. Ik zal waar nodig een klein stukje uitleg geven.)

Eén van de puzzelvakjes zegt het volgende: als Ogre hierop gaat staan, dan ...

  * Als ze slaapt, wordt ze meteen wakker
  * Als ze wakker is _en haar "stappenteller" staat op 0,_ valt ze meteen in slaap.

Simpel. Binnen de puzzels en het verhaal heel logisch. Ik liet een paar puzzels genereren, testte of het werkte, en ja: alles leek te kloppen!

Dus ik ging vrolijk puzzels genereren. Ik bouwde nog meer vakjes in, maakte nog meer werelden, en pas _honderden puzzels verder_ ... kwam ik erachter dat iets niet klopte.

Dat tweede deel had ik nooit (goed) ingebouwd.

Waarom had ik dat niet eerder door? Nou, simpelweg omdat de computer mij werkende puzzels teruggaf volgens de regels die ik wél had geprogrammeerd. Zolang de puzzels een perfecte oplossing hadden, tja, waarom zou ik twijfelen? Bovendien kwam die situatie (waarbij de stappenteller op 0 staat en je op dat vakje komt) niet héél vaak voor.

En nu komt het grootste probleem: **ik heb dagen van werk zitten in al die werelden ... ik heb dus écht geen motivatie om het nu nog te veranderen.**

Het voelt alsof je een week van je leven hebt weggegooid, omdat je alleen maar _foute_ puzzels hebt gemaakt en samengesteld.

## En de problemen stapelen zich op

Maar daar stopt het niet.

Even later komt de _vuurvlieg_ in het spel. Deze vliegt van grasvakje naar grasvakje, en als je beurt _naast_ dit vliegje eindigt, wordt Ogre ietsje wakkerder. 

(Want ja, de vlieg geeft _licht_ af. Nogmaals, superlogisch binnen het thema en verhaal.)

Ik bouwde het in, alles leek te werken, ik kreeg mooie puzzels terug---laten we lekker doorgaan!

Maar helemaal aan het einde van het spel, de allerlaatste wereld, liet ik 5×5 puzzels maken. (Dus vijf vakjes breed, vijf vakjes hoog. Dat is _heel groot en moeilijk_.)

En toen kwam ik pas achter het probleem: het idee van _vliegen_ is dat je overal overheen kan, zelfs als er een muur staat ... of lege ruimte. 

Maar dat had ik dus niet geprogrammeerd. Vuurvliegjes konden alleen over muren heen, maar als er gewoon lege ruimte stond tussen vakje A en B, dan besloten ze stil te gaan staan.

En ja hoor, wéér vijftig puzzels die de prullenbak in kunnen. **Weer een week werk voor niets.**

## Wat is de oplossing?

Dit is vervelend. Écht vervelend. Het is nog erger dan simpelweg geen vooruitgang boeken---het is hard werken om _achteruitgang_ te boeken!

Maar de oplossing is eigenlijk heel simpel. 

De oplossing, zoals zo vaak in het leven, is **tijd**.

Toen al deze fouten bij elkaar kwamen---ja, het waren er nog meer---ben ik meteen gestopt met werken aan deze onderdelen. Ik heb de piepkleine foutjes in de code opgelost, natuurlijk, maar ben toen aan _andere_ dingen gaan werken. Geluidseffecten voor het spel. Animaties voor het vuurvliegje. Alvast een verhaal voor het prentenboek schetsen. Deel één verbeteren.

Pas enkele weken later stond ik toe om me opnieuw over deze vakjes, deze puzzels, deze werelden te buigen.

Waarom? Omdat ik tegen die tijd _vergeten_ was hoeveel werk ik erin had gestoken. Je hersenen vergeten niet _dat_ het tijd heeft gekost, maar ze vergeten wel _hoeveel het precies was_ en _hoe je je daarover voelt_.

En daardoor kan je met een veel betere instelling je project weer oppakken. Want je gedachte is "als ik deze dingen vervang, wordt het spel 10x beter", in plaats van "als ik deze dingen vervang, was al dat eerdere werk voor niets"

Want uiteindelijk kostte het "maar" 3 dagen om alles op te lossen, nieuwe puzzels te genereren, en dat vervolgens in te stellen. Sterker nog, je kunt zo'n kans grijpen om nóg meer te verbeteren. 

{{% example %}}
In mijn geval had ik de code iets strenger gemaakt, zodat de puzzels die ik verving meer variatie kregen en moeilijker werden. Bovendien had ik intussen geleerd hoe ik beter kon checken dat een nieuw vakje écht werd gebruikt (in sommige gevallen) in de oplossing.
{{% /example %}}

## Werkt dat nou echt altijd?

In mijn ervaring wel. Hoe meer projecten ik maak, hoe ouder ik word, hoe meer de uitspraak "tijd heelt alle wonden" waar wordt.

Want hoe graag we ook denken dat we hele _rationele, logische_ wezens zijn met goede hersenen ... van binnen zijn we gewoon emotionele dieren met een imperfect korte-termijn geheugen. 

Door tijd z'n werk te laten doen, vergeet je vanzelf hoe stom iets was, vergeet je alle smoesjes die je op het moment zelf bedacht. 

{{% example %}}
Iets minder dan een jaar geleden tekende ik _een hele dag door_ om icoontjes te krijgen voor een bordspel dat ik maakte. Aan het einde van de dag stopte ik ze bij het spel, keek er eens goed naar ... en concludeerde dat het _waardeloos_ was. Het paste niet, zag er niet uit, had een stomme stijl. 

Op dat moment stond ik op het punt gewoon het hele spel op te geven. Zoiets lelijks ging toch nooit werken? Ik had er wel zo'n 14 uur in gestoken!

Maar ik deed het niet. Ik ging alvast de uitbreidingen maken, dingen opschonen, dingen testen. En toen ik enkele weken later de icoontjes opnieuw tekende, was ik letterlijk _vergeten_ hoeveel tijd het eerst had gekost en voelde het alsof dit de eerste poging was. Maar wel een eerste poging waarbij je de eerste drie traptreden al had gepakt.
{{% /example %}}

## Conclusie

Als de fouten zich opstapelen, als je erachter komt dat je al je werk moet weggooien en alles opnieuw moet doen, herinner dan dit principe. Stop er meteen mee en focus op iets anders. Hou dat een paar weken vol en je zal daarna met frisse ogen, en een leeg geheugen, de verbeteringen kunnen doorvoeren.

Dit helpt tevens om het ook echt te _verbeteren_. Er zijn talloze kleine dingen die ik leerde over de puzzels (van Ronde Ogre) _in de tijd dat ik even iets anders deed_. Creativiteit heeft tijd nodig. Verbindingen leggen in je hoofd heeft tijd nodig.

{{% example %}}
Ik leerde dat puzzels eigenlijk altijd _beter_ zijn als ze zo _klein mogelijk zijn_. Ik maakte in eerste instantie allerlei indrukwekkende grote puzzels ... maar merkte dat ik zelf vooral de kleinste beginpuzzels wilde oplossen. Die vond ik het interessantst. Dus toen ik deze fouten ging fiksen, heb ik voornamelijk kleine (3×3) puzzels gemaakt, en zo meteen het spel naar een hoger niveau getild.
{{% /example %}}

Daarom vind ik het zo extreem jammer dat mensen die tijd niet krijgen. 

Mijn hele leven lang heb ik gestresst naar deadlines van school toegewerkt, altijd ontevreden over mijn werk, altijd met het idee dat ik er niks van begreep en allerlei stomme fouten die me alsnog net een onvoldoende opleverden.

En natuurlijk nét nadat je het hebt ingeleverd ... besef je wat je hebt gedaan. De dag ná dat belangrijke tentamen wordt je wakker met de urgente gedachte: "aah wat stom, natúúrlijk had ik A en B moeten doen, en was C het slechtste antwoord dat ik kon geven---nu begrijp ik het"

De maatschappij zou een stuk productiever en gelukkiger worden als mensen leerden dat _tweede versies maken_ en dingen _compleet weggooien en opnieuw beginnen_ niet alleen soms nodig zijn, maar er gewoon helemaal bijhoren. Het is niet "fout". Het zou je niet je baan moeten kosten. 

Het is deel van het proces. Het is wat dingen van oké, naar goed, naar geweldig brengt. En deadlines, strakke toetsen en grote werkdruk gaan daar juist volle kracht tegenin.

Maar ja, laten we klein beginnen: **als de fouten zich opstapelen, neem dan de tijd om je geheugen leeg te maken ... en los dan alles op.**

 [1]: /books/vierkante-ogre/