---
title: Leren van je eigen oude spel
author: tiamopastoor
date: 2023-04-02T14:00:00+00:00
language: nl
categories:
  - Games

---
Laatst heb ik een gigantische update uitgevoerd aan mijn game studio website: [Pandaqi][1]. Daardoor kwam ik mijn allereerste bordspellen weer tegen. Ik moest testen of ze nog steeds werkten (nu alle code was veranderd) en las de regels een stukje terug.

Van de oudste spellen (twee stuks) werd ik wat verdrietig. Ze zijn gewoon best slecht, en in de toekomst ga ik ze weghalen of een waarschuwing plaatsen.

Maar het spel dat daarna kwam was interessant.

Ik wist nog dat ik er toen _lang_ aan heb gewerkt. Dat ik het originele idee heel goed vond, maar ook wist dat het er niet helemaal uit was gekomen. Het is speelbaar, het is best simpel en leuk, maar écht goed? Nee, zeker niet. Maar toen wist ik niet hoe het beter moest, dus ik noemde het af en ging door.

Nu las ik de regels terug. En een stuk van de code. (Dit was een bordspel dat je samen kan spelen met de website.) 

En binnen tien seconden had mijn hoofd _precies_ bedacht wat er mis was en hoe je dat kon oplossen.

Iets waar ik toen niet uitkwam. Niet na wekenlang werken aan het spel. En nu had ik de ervaring---of simpelweg genoeg afstand---om het te zien.

Ik vond het een positieve ervaring. Ongemerkt groei je toch enorm én blijft je hoofd denken over oude problemen. Ik vond het belangrijk genoeg om het spel ook echt te veranderen en die update te geven.

Het spel waarover ik praat is [Wondering Witches][2]. In dat spel is er een geheim recept (gegenereerd door de website). Tijdens het spel test je de hele tijd verschillende toverdrankjes om informatie te krijgen. Zo moet je, voordat de tijd om is, het juiste recept zien te raden. 

(Leuk idee, toch? Ik vind het nog steeds sterk.)

Hieronder wil ik kort vertellen wat ik van deze ervaring heb geleerd 🙂

## Blijf niet hangen in je eerste idee

Mijn allereerste idee voor dit spel ging over het plaatsen van ingrediënten in een gezamenlijke ketel. Dit was geïnspireerd door het spel _Kwakzalvers van Kakelenburg_. Daar trek je elke beurt een fiche uit je buidel en moet die in je ketel plaatsen. Die ketel heeft de vorm van een spiraal (naar buiten toe).

Ik wilde dat ook! Maar nu vulde je steeds je ketel, waarna je die kon _testen_ op de website!

Het probleem was dat ik te veel _vasthield_ aan dit eerste idee. Terwijl het spel veranderde op alle manieren (qua opzet, het werd coöperatief, etcetera) hield ik hieraan vast.

En zo kregen we spelregels die onnodig ingewikkeld waren.

  * Eerst moet je ingrediënten planten in een _tuin_
  * Dan moet je ze groeien
  * Dan moet je ze _plukken_ om in een ketel te gooien
  * En _dan_ moet je die ketel gebruiken ( = testen op de website)

Dit bracht extra restricties mee. Die ketel moest dus een vierkant zijn en je moest dus je ingrediënten plukken in de vorm van een spiraal. 

Waarschijnlijk zie je de verandering al: die hele **ketel** kan weg! Wat is de functie? Het is een zinloze extra stap, zonder erg veel strategie, zonder dat het helpt. 

Het maakt het spel juist onnodig lastig! De puzzel zelf---het geheime recept---is de uitdaging. Als je van tevoren dingen moet plukken én in de juiste volgorde zetten, maak je het een onmogelijke taak.

Dus ik herschreef de regels en het algoritme (om je speelveld te genereren) om alleen maar _tuinen_ te gebruiken. Deze hebben een willekeurige grootte en vorm. 

  * Je kan een ingrediënt planten of groeien.
  * Je mag op elk moment een tuin testen op de website. Maar daarna is deze hele tuin "verbruikt"

Da's een stuk simpeler, of niet?

Maar ik _zag_ het niet, echt niet, omdat ik toen helemaal vastzat in dat beeld van "oh spelers moeten dingen in ketels plaatsen!"

## Beurten zijn zo passé

De laatste jaren heb ik ook begrepen waarom de meesten geen geduld hebben voor spellen met (langzame) beurten. Vroeger gebruikte ik dat om na te denken over mijn eigen beurt. Maar inmiddels ben ik ietsje minder competitief, waardoor "om de beurt spelen" al snel voelt alsof je vooral zit te _wachten_.

Dit had ik al gezien in de originele versie. Je deed je beurten al tegelijkertijd, in je eigen tuintje. Maar ... het was een pleister die ik op het laatste moment op het idee had geplakt. Het was niet écht belangrijk. Je speelde eigenlijk maar wat langs elkaar---en dat voor een coöperatief spel!

Inmiddels heb ik enkele spellen gespeeld die dit goed oplossen. Dat zorgde voor inspiratie!

De oplossing voor dit spel kwam direct van het spel _Tiny Towns_. De nieuwe regels zijn als volgt:

  * De speler die aan de beurt is noemt een ingrediënt naar keuze
  * _Alle_ spelers mogen nu dat ingrediënt plaatsen of groeien in hun eigen tuintje(s).

Dat is het. Nu ken je vrijwel alle regels van dit spel.

Dit zorgt dat je _altijd_ actief betrokken bent. Maar er is ook veel interactie, want andermans beurt bepaalt direct jouw beurt. Tevens gaat het spel veel sneller.

Weer zoiets dat ik gewoon _niet zag_ bij dit spel. Omdat het een van mijn eerste spellen was en ik miste de ervaring.

## "User Experience" komt eerst

De originele versie heeft zowel de generator (voor het speelveld) en de interface (voor tijdens het spelen; het geheime recept) op dezelfde pagina.

Dit was een rotzooi. Ja, het _werkte_. Maar daardoor kreeg je een lange pagina waarop je steeds moest scrollen. Ik herinner nog hoe we tijdens het testen steeds onze plek op de pagina verloren en moesten terugzoeken waar we onze toverdrank konden testen.

Toentertijd? Ik zag het als een nadeel van mijn website, maar wist geen oplossing. Terwijl het wederom enorm simpel was.

Ik heb de interface verplaatst naar z'n eigen pagina.

_Wow! Hoe kom je erop!? Wat een oplossing!_ Ik weet het. Maar dit soort dingen zie je gewoon niet meer als je middenin een experimenteel project zit. Je hebt het idee dat je je op drijfzand begeeft en wordt steeds minder goed in problemen oplossen.

Daarnaast heb ik in de tussentijd veel geleerd over marketing en user experience. 

  * De tekst op de pagina is veel korter en meer "to the point"
  * Ik had wat ... bijzondere kleurencombinaties geprobeerd. Nu is het veiliger, en daarom beter op de meeste schermen.
  * Nu de regels makkelijker zijn, kon het speelveld ook makkelijker. Dus die generator presenteert iets dat op het eerste oog minder overweldigend is.
  * De interface had een knop: "bekijk de oplossing!" Ik was zo dom om hier geen beveiliging op te zetten. Je kon die knop per ongeluk indrukken ... en weg was je potje. Nu vraagt hij of je dit echt wilt doen.
  * Op dezelfde manier werd deze oplossing gepresenteerd _in een willekeurige volgorde_. Want dat was het makkelijkst te programmeren: ik print simpelweg het geheime getal voor elk ingrediënt. Maar dit is onnodig verwarrend voor de gebruiker, die vervolgens _zelf_ de oplossing bij elkaar moet puzzelen. (Een puzzel in een puzzel!)

Het zijn allemaal van die kleine dingen. Ik heb ze letterlijk geprogrammeerd dezelfde avond dat ik de regels teruglas en dacht: "hmm, waarschijnlijk kan dit beter"

Maar je moet ze zien. Je moet de ervaring hebben om het te zien én te weten hoe je het snel oplost.

Want ik merkte deze dingen vroeger wel, maar vond ze niet belangrijk. Issues met scrollen op de pagina? Tekst van een paar paragrafen voordat je bij het spel komt? Joh, het spel werkt! Daar gaat het om! En als mensen _echt_ geïnteresseerd zijn, dan doen ze toch wel _moeite_!

Nu weet ik beter. Spelers moeten over die eerste drempel komen. Dus verlaag die drempel absoluut zo ver mogelijk. Steek meer tijd in die _drempel weghalen_ dan het _spel zelf_, als het moet.

## Nog meer drempels verlagen

Ik heb de hele code herschreven. (Dit spel is dus van ~3 jaar geleden. Toch kon ik de hele oude code praktisch weggooien. Nu heb ik het in 5 uur tijd véél beter opgeschreven, met veel minder regels code. Gek hoe je in zo'n korte tijd toch ongezien kan verbeteren.)

Maar terwijl ik hiermee bezig was, realiseerde ik dat het allemaal _nog_ toegankelijker kon. Ik hield nog steeds vast aan overblijfselen van het eerste idee.

Zo werd het geheime recept langer als je meer ingrediënten had. (Minder dan 6? Er zijn 4 geheime nummers. Meer? Er zijn 6 geheime nummers.) Klinkt op zich logisch.

Maar het is weer een extra regeltje. Eentje die nogal willekeurig voelt, zeker als je het zo leest. En het maakte alles lastiger achter de schermen. (Nu moest ik links en rechts dus een _andere_ keuze maken op basis van hoeveel ingrediënten je had, zowel bij het bord als de game interface.) En waarvoor? Om een moeilijke puzzel nóg veel moeilijker te maken?

Dus nu is het simpelweg: **je wint als je een toverdrank van 4 ingrediënten op de juiste volgorde hebt.** 

Op dezelfde manier was mijn code om een willekeurige puzzel te genereren ... matig. Het probeerde simpelweg _alle_ mogelijkheden af te gaan. Maar dat zijn er miljarden, dus ik had toentertijd wat regels ingebouwd die de computer toestonden om dingen te "skippen".

Het resultaat? Matig. Door het skippen mis je vaak puzzels _zelfs als ze een oplossing hadden_. Maar doordat er geen limiet op zat, kon de computer nog steeds 100,000 keer skippen, als je pech had. (Wat je hele browser liet vastlopen.)

Nu _begint_ hij met de ingrediënten op perfecte volgorde zetten. (Want ja, de computer kent natuurlijk de geheime getallen.) Dit zal 90% van de tijd ook de oplossing zijn.

Daarna begint hij hiermee te spelen. Een stuk of 500 keer verandert hij 1-3 dingen aan dit recept. Zo vind hij "best vaak" de juiste oplossing binnen een fractie van een seconde. En zo niet? Gooi dit recept weg en begin opnieuw.

Dit algoritme is _beter_ (het vind vaker een juiste oplossing) en duurt tevens nooit langer dan een _fractie van een seconde_. Zelfs met 10 ingrediënten. (Wat, ter herinnering, dus 10^10 = nogal veel mogelijke combinaties heeft.)

## Conclusie

Eigenlijk is dat wat ik heb gedaan, met deze "versie 2". Ik heb het idee in de kern---puzzel samen het geheime recept samen---beter en simpeler kunnen presenteren aan nieuwe spelers.

Dat is wat spellen ontwerpen is. Je hebt een klein ideetje. _Iets_ dat plezier of interesse zal opleveren. En het is aan jou om dat te omringen met regels, plaatjes, marketing die dit zo goed mogelijk naar buiten brengen. Want je _weet_: als ik spelers zo ver krijg om het te proberen, dan zullen ze het leuk vinden.

Het was fijn om weer even de oude projecten terug te zien. Ze werken allemaal nog. Zeker de meer recente hebben echt een goede website en goede spelregels. Daaraan hoefde ik eigenlijk niks te veranderen!

En nu zit het achter de schermen gelukkig ook allemaal snor bij Pandaqi. 

(Dat is een beetje eenzelfde verhaal. De oude code was een rommel en een rotzooi van iemand die niet wist waar het heen ging. Ik heb duizenden regels code over de hele website kunnen weghalen. Een paar honderd _goede_ regels code teruggezet die alles nu _beter_ regelen. Het genereren van kaarten, het uitvouwen van spelregels, of het downloaden van een PDF met het speelbord.)

Daarover wilde ik even vertellen. De komende tijd zullen er hopelijk wat spellen bijkomen, want ik kreeg rond nieuwjaar toch een hoop geweldige ideeën voor bordspellen ...

 [1]: https://pandaqi.com
 [2]: https://pandaqi.com/wondering-witches