---
title: De fragiliteit van spellen maken
author: tiamopastoor
date: 2022-12-09T15:00:00+00:00
language: nl
categories:
  - Games

---
Ik probeer al 15 jaar praktisch non-stop spellen te maken. En toch heb ik er al die tijd een haat-liefdeverhouding mee gehad die waarschijnlijk nooit wordt opgelost. 

De meeste onderdelen van computers, programmeren en spellen ontwerpen zijn geen mysterie meer voor mij. Waarom is het dan toch vaak zo lastig en vermoeiend?

Nou, omdat spellen enorm **fragiel** zijn.

## Type 1: black box

Ik besefte dit laatste voor de zoveelste keer toen ik aan een simpel 3D spelletje werkte. Daarin doe je maar één ding: ballen naar elkaar gooien. Als je wordt geraakt, verlies je een leven. Natuurlijk staat het level vol met voorwerpen die de ballen afketsen, verschillende soorten ballen die anders stuiteren, enzovoort.

Dus wat is het allerbelangrijkste van het spel? Dat die ballen realistisch en consistent bewegen en stuiteren.

Vrij simpel, toch? Ballen zijn rond. Stuiteren gebeurt volgens simpele formules, zeker als je weerstand en het verlies van snelheid overboord gooit. (Wat vaak leuker is voor zulke simpele partyspellen.) Elke software ondersteunt dit, toch?

Nee dus. Ik heb uiteindelijk 3 avonden op rij zo'n 5 verschillende methodes geprobeerd om dit te doen. De ene keer stuiterde de bal altijd goed, maar _draaide_ die verkeerd (of helemaal niet meer). De andere keer stuiterde hij soms wel ... en soms stopte hij compleet als hij ergens tegenaan kwam. De volgende keer gleed een bal lekker over de grond, terwijl hij de keer daarna ineens zwaar afremde door de grond.

Op een gegeven moment had ik dé techniek. Het idee moest werken. De code moest werken. Ik had alles vijf keer gecheckt ... maar het werkte niet. Als de bal tegen iets aanbotste, ging het wild heen en weer, alsof het bezeten was, en vloog steeds sneller door de hele arena :p

Na enkele haren te hebben uitgetrokken, ontdekte ik wat er gebeurde. De bedoeling is dat de bal iets aanraakt, en dat jouw _game engine_ deze aanraking oplost (door de bal weer uit het voorwerp te duwen), en dan tegen de code zegt "hé, ik raak iets!"

Maar soms dan werd de bal niet genoeg eruit geduwd, waardoor hij nog steeds het voorwerp schampte, en je dus misschien wel vijf keer te horen kreeg "hé, ik raak iets! hé, ik raak iets! hé, ik raak iets!"

Door waardes ietsje aan te passen kon ik dit voorkomen. Bijvoorbeeld, door de bal ietsje sneller te laten gaan , of iets groter te maken. Maar toen was er wel weer iets _anders_ dat niet werkte, want de bal ging té snel!

Dit is de eerste manier waarop ik fragiliteit bedoel. Zelfs de meest ervaren ontwikkelaars kunnen niet _in_ een computer kijken. Ze gebruiken, net als ik, een laag eromheen die véél vriendelijker is en zorgt dat ze sneller spellen kunnen maken. 

Maar daardoor weet je nooit _precies_ wat die computer achter de schermen doet. (En dit kan ook nog eens verschillen tussen computers.) De computer is een _black box_.

En dan gaan simpele dingen constant fout en je hebt géén idee waar je moet zoeken.

In die _uren_ dat ik dit probleem opspoorde, had ik ook vijf hoofdstukken van een verhaal kunnen schrijven. En dat is een zekerheid, want ik ken woorden, en dan houdt niks je meer tegen :p 

Maar computerspellen werken niet zo. Ze zijn kwetsbaar. De simpelste dingen kunnen eindeloos moeilijk blijken, terwijl moeilijke dingen soms in vijf seconden worden opgelost doordat je geluk hebt met hoe de computer iets doet.

(Overigens heb ik dit opgelost met een trucje. Als de bal een voorwerp _schampt_, dan is het dus al _op weg naar buiten_. Dus ik schreef code die checkte of de bal op het voorwerp af kwam of niet. Zo ja? Stuiter. Zo nee? Negeer deze zogenaamde botsing. Ook dat is niet perfect, maar daardoor werkt het spel tenminste voor 99%. En vaak is dat meer dan je kunt dromen bij computerspellen.)

## Type 2: Crashes

Het voorbeeld hierboven is een zachte crash: er gebeurt iets dat je niet wilt, maar je spel blijft werken.

Maar natuurlijk gebeurt er veel vaker een keiharde crash. Jij kan een geweldig, mooi, leuk spel hebben waaraan je maanden hebt gewerkt. Echt een knappe prestatie waardoor je een paar levensjaren bent verloren. 

Als je per ongeluk ergens _één verkeerd karakter neerzet_, start het hele spel niet meer op.

Bordspellen hebben dat probleem niet. Een heel stuk kan missen, een speelkaart kan complet onleesbaar zijn, het is geen probleem. Je speelt er makkelijk omheen.

Verhalen hebben dat probleem niet. Als ik ergens het woord "keuke" typ, weet je echt wel dat het "keuken" moet zijn, en is het niet alsof het héle boek nu onleesbaar is.

Maar als ontwikkelaar kan ik je vertellen: ik ken computerspellen vooral als dingen die crashen :p

Dus als ik aan deze projecten werk, slaat de helft van de tijd de angst om mijn hart. Want ofwel je spel werkt perfect, ofwel hij crasht, en er is weinig ruimte daartussen. En ik wil geen dingen maken die voor de helft van de spelers niet eens opstart omdat ik ergens een 0 in plaats van een 1 heb getypt.

(Natuurlijk wordt je hier beter in over tijd. En je kan jezelf verdedigen tegen "makkelijke" crashes. Bijvoorbeeld, een beginnersfout is om element 5 uit een lijst te vragen, terwijl de lijst maar tot element 4 gaat. Je doet dit vijf keer en daarna leer je héél zorgvuldig te zijn met wat je opvraagt. Maar de meeste crashes zijn niet tegen te verdedigen totdat _iemand_ ze een keer meemaakt en onderzoekt.)

## Type 3: balans

Dit punt geldt ook voor andere creatieve projecten, hoewel wederom in mindere mate.

Spellen zijn lastig omdat ze in _balans_ moeten zijn. En dat woord moet je op alle mogelijke manieren interpreteren.

Een spel is alleen leuk als het constant zweeft in het grijze gebied tussen "té uitdagend" en "té makkelijk".

Een spel kan je alleen spelen als je de regels begrijpt: je kan dus niet eindeloos dingen blijven toevoegen om problemen op te lossen. Vaak moet je juist creatief zijn en iets _weghalen_ om dat probleem op te lossen.

Dit zorgt ervoor dat je bijna elk probleem niet direct kunt oplossen. Als je denkt "het spel gaat te langzaam, ik maak alles sneller", kan je er zeker van zijn dat dit dus op honderd andere plekken dingen afbreekt. (Zoals de bal die zo snel gaat dat hij niet alle botsingen meer goed uitrekent.)

Dus bij elk probleem moet je verder nadenken. Je eerste tien ideeën weggooien en met iets compleet nieuws komen, anders raakt het spel meteen uit balans.

Dat is moeilijk. Dat is vermoeiend. Dat zorgt wederom voor angst. Gaat deze verandering niet ergens anders iets afbreken? Het spel was te moeilijk, ik heb de speler meer levens gegeven, is het nu juist niet te makkelijk?

Ik heb inmiddels geleerd dat een groot deel van de _toevoegingen_ aan spellen helemaal geen _toevoeging_ zijn. Je hebt iets toegevoegd om één probleem op te lossen ... maar daardoor het spel uit balans getrokken en vijf nieuwe problemen gemaakt.

(Jammer genoeg begrijpen spelers dit niet. Die snappen het niet als ontwikkelaars dingen _weghalen_ of _veranderen_ aan spellen. Die juichen alleen als je constant _méér inhoud toevoegt_. Zelfs als ze meteen doorhebben dat daarmee hun spel dus uit balans is gehaald en minder leuk is :p)

## Type 4: psychologie

Oké, stel het is gelukt om een geweldig spel te maken. Alle onderdelen werken. Het is al lang geleden dat het crashte. Alles balanceert elkaar.

Dan heb je pas de helft van het gevecht gewonnen. Dan komen _mensen_. Jouw _spelers_. Die allemaal hun rare psychologische dingetjes hebben.

Jij wijst met een grote rode pijl naar de knop om een spel te starten? De spelers kijken alleen naar de groene knop in de andere hoek en hebben geen idee hoe ze het spel starten.

Jij hebt het spel dermate versimpeld dat je maar één knop nodig hebt? De spelers die eerst zeurden "té veel knopjes", zeuren nu "té makkelijk, we willen méér knopjes om dingen te doen!"

Mensen zijn niet logisch. Ik zeg het vaak; ik meen het echt. Wij zijn niet zo slim, rationeel en objectief als we denken. We zijn dieren met een _kleine_ upgrade. Ons reptielenbrein heeft wat mooie woordjes geleerd en denkt nu dat het wat voorstelt.

Ik laat mijn spellen al 10+ jaar testen. Ik denk elke keer dat ik alles wel heb gezien/gehoord, maar nee hoor, de volgende keer sta ik weer versteld. Van welke aannames mensen hebben, van hoe hun gedachten kronkelen om op een compleet onzinnige conclusie uit te komen, van hoe zelfs de kleinste drempels ineens torenhoog worden in specifieke omstandigheden.

Dus bij spellen maken komt het vaak neer op "hoe goed begrijp jij de menselijke psychologie" in plaats van "hoe goed is het spel". 

En daar kan je nooit zelf achter komen. Daar kun je geen boeken over lezen of _heel hard over nadenken.i_

Daarvoor moet het spel getest door anderen. Door _veel_ anderen, met andere achtergronden en persoonlijkheden. Iets dat moeilijk te bereiken is, zeker als je in je eentje werkt en geen bekende naam bent.

## Conclusie

En daarom is spellen maken zo lastig. Het is een soort risico dat je neemt. Als het lukt, dan is het heel bevredigend om een mooi en leuk spel te maken. Iets waarvan je ziet dat anderen er plezier van hebben. 

Maar als het niet lukt, is het eindeloos lastig om je crashende ongebalanceerde spel weer terug op de rit te krijgen.

Want zo voelt het dus vaak. Alsof je een snelle trein bent die niet kan afremmen, maar de kleinste verkeerde aanpassing aan de rails zorgt dat je van de baan vliegt. 

Eén typefout. Eén monster te veel toegevoegd, of één leven te weinig aan de speler gegeven. Eén kleur die net niet genoeg contrast heeft om op te vallen. Eén idee dat _blijkbaar_ bij de helft van de mensen andersom wordt geïnterpreteerd. 

En je hele spel is waardeloos geworden.

Daarom zijn spellen fragiel.

Ik blijf steeds terugkomen. En ik blijf ook steeds pauzes nemen of projecten staken omdat de trein van de baan is gevlogen.