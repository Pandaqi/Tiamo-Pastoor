---
title: Risk – Deel 1
author: tiamopastoor
date: 2017-03-20T20:08:35+00:00
language: nl
categories:
  - Miscellaneous

---
Risk. Het spel zonder grenzen, waardoor een potje vaak vele malen langer duurt dan je van tevoren wilde. Het spel waarmee langdurige, hechte vriendschappen uit elkaar worden getrokken, evenals het leger van Rood. Het spel waarbij iedereen net ietsjes andere tellingen en regels hanteert, en die ene speler duidelijk de dobbelstenen naar zijn voordeel laat handelen. Of gewoon een simpel spel dat iedereen kent, dat genoeg van geluk af hangt om het ook leuk te houden voor niet-spelliefhebbers.

Dat "je moet maar net geluk hebben", echter, staat me niet zo aan. Dus ik besloot het spel te simuleren. Risk is in de basis een simpel spel, waarbij iedereen om de beurt drie simpele stappen doorloopt, en een groot deel afhangt van wat je gooit of welke kaart je trekt. Maar waar jij je poppetjes neerzet, en waar je besluit wel of niet aan te vallen, _dat_ is waar je het spel mee wint of verliest.

Ik probeer daarom vele strategieën uit:


  * _Basisstrategie:_ je zet je poppetjes willekeurig neer, verplaatst ze willekeurig, en valt het eerste het beste territorium aan dat je vindt en zou kunnen overwinnen. Het leven is simpel.
  * _Strategie 1:_ Je focust op continenten. Je ziet op welk continent je het sterkst staat, en valt alleen daar aan, totdat je het hele continent hebt. Dan kies je een volgend continent, et cetera.
  * _Strategie 2:_ Vol op de aanval; je valt elke ronde aan, zelfs als je niet meer poppetjes hebt dan je tegenstander.
  * _Strategie 3:_ Vol op de verdediging; je valt niet aan, tenzij je een gigantisch overwicht hebt, en verspreidt je poppetjes keurig over al je territoria.
  * _Strategie 4:_ Je zoekt de territoria uit die de minste connecties hebben, en dus vanaf de minste kanten kunnen worden aangevallen, pakt die zo snel als je kan, en maakt ze zo sterk mogelijk.
  * _Strategie 5:_ Balans; je valt aan als je evenveel of meer poppetjes hebt (dan de ander), en bij het verplaatsen zoek je jouw zwakste territorium op, en versterkt die.
  * _Strategie 6:_ Grenscontrole; je maakt een afgesloten gebied, en probeert vervolgens je grenzen steeds verder uit te breiden, door al je troepen steeds naar de grens-gebieden te verplaatsen.

## Vraag 1: Hoe werkte Risk ook alweer?

Iedereen begint met een deel van de gebieden (willekeurig verdeeld), en zet daar een aantal poppetjes op (je mag zelf bepalen waar en hoeveel). Om de beurt doet iedereen 3 dingen: _extra poppetjes krijgen_, _iemand aanvallen_, en _poppetjes verplaatsen_.

  * Hoe meer gebieden je bezit, hoe meer poppetjes je krijgt. (Als je een heel continent bezit krijg je nog een extra grote bonus.)
  * Als je aanvalt, mogen jij en je tegenstander dobbelen, en worden de resultaten paarsgewijs vergeleken. Als je wint, moet die ander een poppetje wegdoen. Bij verlies of gelijkspel, moet de aanvaller een poppetje wegdoen. Je mag doorgaan tot iemand wint, maar ook op een gegeven moment besluiten dat het genoeg is geweest.
  * Als je wint is het nieuwe gebied natuurlijk van jou. Als extra beloning krijg je een kaart. Bepaalde combinaties van kaarten kun je inleveren voor nog meer poppetjes.
  * Het verplaatsen van poppetjes is optioneel, maar is wel slim om te doen, zodat je gebieden kan versterken die dat nodig hebben.

_Wanneer win je?_ In de originele regels wint iemand als die als enige overblijft. Later, echter, zijn _geheime missies_ er bij gekomen (zoals, "verover Azië en Afrika"). Dat vind ik een goed idee. Het maakt het spel aanzienlijk korter en leuker, en ik zal dan ook geheime missies als eindconditie in de simulatie zetten.

Je kan natuurlijk ook de originele "world domination" simuleren, maar dat heeft twee nadelen: het duurt veel langer, en omdat de computer niet bijzonder veel militaire strategiekennis heeft (maar wel oneindig veel motivatie en energie) eindigen de laatste twee spelers met gigantische legers (in de tienduizenden poppetjes soms), wat bij een echt potje natuurlijk onrealistisch is.

## Vraag 2: Wint degene die begint niet vaker?

Nee, het voordeel van het eerste gevecht is heel klein. Wat veel meer invloed heeft, bijvoorbeeld, is hoe de gebieden aan het begin worden verdeeld tussen spelers. Stel jij hebt geluk en krijgt 3/4 van Australië, dan ga jij een vrij makkelijk potje tegemoet.

_Klopt deze uitspraak wel?_ Nou, dat kunnen we meteen even checken. Ik sla aan het eind van elke simulatie de beginpositie van de winnaar op. Vervolgens kijk ik bij elk gebied hoe vaak de _winnaar_ hier begon. Hoe vaker de winnaar in een gebied begint, hoe beter dat gebied schijnbaar is. (Je hebt hier inderdaad geen invloed op, maar je kunt dan wel meteen zien wie je het meeste moet lastigvallen aan het begin van het potje.)

![](/uploads/2017/03/original-risk-board-game-map.jpg)

## World Domination---De resultaten

De getalletjes hieronder geven aan hoe vaak de winnaar van een potje een land bezat aan het begin van desbetreffend potje. In deze simulatie gaat een spel dus door totdat één speler over is.

Alaska, bijvoorbeeld, is gemiddeld. Want 17.2% van de tijd begon de winnaar daar, en dat is meer dan Northwest Territory (15.6%), maar veel minder dan Alberta (19.5%).

Mét world domination (1,000 simulaties, duurde 27 seconden)  
=> Alaska---0.172  
=> Northwest Territory---0.156  
=> Alberta---0.195  
=> Ontario---0.168  
=> Quebec---0.183  
=> Western United States---0.146  
=> Eastern United States---0.177  
=> Central America---0.19  
=> Greenland---0.183  
=> Venezuela---0.178  
=> Peru---0.158  
=> Brazil---0.142  
=> Argentina---0.172  
=> North Africa---0.167  
=> Congo---0.17  
=> South Africa---0.142  
=> Madagascar---0.12  
=> East Africa---0.128  
=> Egypt---0.193  
=> Western Europe---0.167  
=> Southern Europe---0.166  
=> Northern Europe---0.171  
=> Great Britain---0.165  
=> Iceland---0.168  
=> Scandinavia---0.154  
=> Russia---0.162  
=> Middle East---0.182  
=> Afghanistan---0.179  
=> Ural---0.178  
=> Siberia---0.166  
=> Yakutsk---0.19  
=> Kamchatka---0.163  
=> Irkutsk---0.172  
=> Mongolia---0.18  
=> Japan---0.181  
=> China---0.178  
=> India---0.171  
=> Siam---0.155  
=> Indonesia---0.147  
=> New Guinea---0.17  
=> Western Australia---0.158  
=> Eastern Australia---0.137

_Wat valt op? _Zuid Amerika, Afrika en Australië zijn het slechtst. Daarna komt Europa, waarbij het opvallend is dat de brug tussen Afrika en Europa (Egypte) dan weer erg goed scoort. Noord Amerika is goed, maar Azië is toch wel de heilige graal.

## Geheime missies---De resultaten

Zonder world domination, met geheime missies. (10,000 simulaties, duurde 17 seconden.)

=> Alaska---0.164  
=> Northwest Territory---0.165  
=> Alberta---0.16  
=> Ontario---0.163  
=> Quebec---0.163  
=> Western United States---0.163  
=> Eastern United States---0.163  
=> Central America---0.17  
=> Greenland---0.163  
=> Venezuela---0.163  
=> Peru---0.171  
=> Brazil---0.169  
=> Argentina---0.178  
=> North Africa---0.166  
=> Congo---0.172  
=> South Africa---0.178  
=> Madagascar---0.196  
=> East Africa---0.17  
=> Egypt---0.163  
=> Western Europe---0.163  
=> Southern Europe---0.162  
=> Northern Europe---0.162  
=> Great Britain---0.172  
=> Iceland---0.17  
=> Scandinavia---0.166  
=> Russia---0.158  
=> Middle East---0.164  
=> Afghanistan---0.16  
=> Ural---0.164  
=> Siberia---0.16  
=> Yakutsk---0.161  
=> Kamchatka---0.158  
=> Irkutsk---0.169  
=> Mongolia---0.164  
=> Japan---0.17  
=> China---0.159  
=> India---0.164  
=> Siam---0.17  
=> Indonesia---0.169  
=> New Guinea---0.167  
=> Western Australia---0.172  
=> Eastern Australia---0.176

_Wat valt op?_ De waardes zijn veel meer gelijk, dus er is geen duidelijke winnaar. Maar, als we toch moeten kiezen, is het Australië. Het bevat een paar van de hoogste waardes, ook al is het maar 4 gebieden. Een opmerkelijke uitschieter is Madagascar. Als je die eenmaal hebt is niemand gek genoeg om hem af te pakken, en mag je lekker met je leger luieren in een ligstoel onder de zon.

_Maar welke strategie gebruikt de computer nu? _Voor nu laat ik de simulatie willekeurig spelen. Alle spelers doen hetzelfde: **het eerste het beste land proberen te veroveren**. Ze kijken niet naar hun missie, of de kans dat hun aanval slaagt, of dat ze misschien ergens anders sterker/zwakker staan. De simulatie zet alle opties op een rij en laat de computer er willekeurig één kiezen om aan te vallen.

Dit is het eerlijkst voor nu, maar als ik dadelijk strategieën ga invoeren zullen de resultaten hoogstwaarschijnlijk sterk afwijken. Als dat gebeurt zal ik het netjes melden. En als dat niet gebeurt is alle moeite voor niks 🙁

## Vraag 3: Met hoeveel mensen moet ik het spelen?

Voor een ongelofelijk langdradig spel is 3 tot 4 prima. (Duurt zo'n 1681 beurten, dus gemiddeld 420 beurten per persoon.)

Voor een korter doch interessanter spel moet je 5 tot 6 man hebben. (Duurt zo'n 487 beurten, dus gemiddeld 82 beurten per persoon.)

Met twee spelers heb je een speciale variant met een sterk neutraal leger. Ik heb het niet gesimuleerd, maar ik weet dat dat nogal toevoegt aan de speeltijd en eigenlijk niet heel leuk is. En daarnaast: hoe meer zielen hoe meer vreugd!

_Zijn dat niet superveel beurten?_ Ja. Onthoudt: de computer speelt hier dus willekeurig. Ik verwacht dat potjes een stuk korter worden als men slim en gericht speelt. In mijn ervaring duurt een potje Risk, gebruik makend van de "geheime missies", gemiddeld zo'n 40-50 beurten per persoon. (Sommige personen zullen minder beurten hebben, want ze liggen vroeg uit het spel. De laatste paar spelers die nog legers hebben zullen juist meer beurten dan dat hebben.)

_Zit er niet gewoon een fout in je code?_ Ik heb de gehele simulatie talloze keren uitgevoerd en specifieke onderdelen uitgetest. Ik denk niet dat er een fout ergens verborgen zit :p Maar omdat ik niet verwacht dat je mij op mijn blauwe ogen gelooft, heb ik in de volgende delen **filmpjes** gemaakt van de gesimuleerde potjes Risk. Dan zie je vrij snel dat alles klopt en de computers redelijk menselijk spelen.

## Vraag 4: Allianties? Ruilen? Verbondjes?

Volgens de spelregels niet, maar doe in het echt vooral waar je zin in hebt. In mijn ervaring is verbonden sluiten _veruit_ de beste strategie om Risk te winnen, of in ieder geval altijd sterk te zijn en bij de laatste twee te komen. Maar ik kan het niet echt simuleren, aangezien ik een computer niet psychologie, vriendjespolitiek, bluf en een pokerface kan aanleren.

WORDT VERVOLGD: [Risk---deel 2][1]

 

##

 [1]: /wiskundig-gewauwel/zinderende-simulaties/risk-deel-2/