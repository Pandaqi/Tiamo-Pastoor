---
title: '[Speldagboek] "In hetzelfde schuitje" #6'
author: tiamopastoor
date: 2019-07-29T16:00:05+00:00
language: nl
thumb: /uploads/2019/06/play-interfaces-v2_result.webp
categories:
  - Games

---
Welkom bij het zesde speldagboek ("devlog") voor mijn spel "In hetzelfde schuitje".

De vorige keer zei ik dat het spel bijna werkte en ik hopelijk de eerste testrondes kon doen. Dat is gelukt, hoewel de eerste versie natuurlijk meer werk kostte dan ik eerst dacht :p

Ook heb ik nog wat andere dingen te melden. Zoals altijd: er waren meer problemen dan ik dacht en ik heb het spel weer wat veranderd. (Een meer optimistische manier om het te zeggen is: "ik kwam erachter dat het spel nóg beter kon en heb het maar meteen verbeterd.")

Oftewel, in dit artikel:

  * **Icoontjes** (voor alle rollen),
  * **Hoe zeegevechten werken**
  * Het belang van **feedback** in spellen,
  * **Uitdagingen van turn-based games**,
  * **De eerste testpotjes**.

## Icoontjes

Eerder vertelde ik al over de "stijlrichting" die ik voor dit spel had gekozen. Alle grondstoffen waren rond (met een dikke rand) en alle rolicoontjes moesten vierkant worden (met eenzelfde dikke rand).

Deze keuze heeft uiteindelijk goed uitgepakt, al zeg ik het zelf 🙂 Wel kwam ik er later achter dat de dikte van de rand verschilt, maar ik weet niet of ik dat zo'n groot probleem vind. Voor de volledigheid komt hier een plaatje met elke rolinterface. (Want die zijn ook beetje bij beetje veranderd de afgelopen weken.)

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1560966954/play_interfaces_v2.png" /> 


Let dus vooral op de 5 icoontjes bovenaan. Ik twijfel vooral over de eerste (die van de Kapitein).

Ik heb de hoed diagonaal gezet, omdat hij horizontaal te klein werd. Maar misschien kan ik de hoed weer horizontaal maken en er een ooglapje onderdoen (om de suggestie van een piratengezicht te wekken).

Ik heb expres 5 kleuren met gelijke afstand gepakt. Op die manier heb ik de hele kleurencirkel gehad. Dit is namelijk de "beginnersset" aan rellen. Bij de volgende versie krijg je een nieuwe "set" van vijf rollen, die ook weer allemaal één van die kleuren hebben. Zo kun je goed zien welke rollen bij elkaar horen (en welke variant van het spel je speelt).

Het belangrijkste was gewoon dat mensen konden zien waar ze op klikten :p Als alle rollen hetzelfde icoontje hebben, zoals in de eerste paar weken van de ontwikkeling, dan weten spelers niet waar ze in vredesnaam heen moeten.

Op het moment dat ik dit schrijf zijn alle interfaces (op de mobiel van de speler) volledig functioneel. Ze ontvangen alles wat ze moeten ontvangen, sturen alles wat ze moeten sturen, en alle knopjes/draaidingen/schuifdingen/etc. werken.

Het enige wat mist is meer uitleg of "hints". Als je dit zo ziet, zal je niet altijd precies weten wat alles is en wat het doet. Het kan misschien zelfs wat intimiderend overkomen. Daarom wil ik wat meer icoontjes toevoegen (zoals bemanning langs de slider van de Sailor, om te laten zien dat het je bemanning kost) en een duidelijke "helpknop". Dit is een groot vraagteken, waarschijnlijk rechtsboven in de hoek, die de korte uitleg en de details van je huidige rol geeft wanneer je erop klikt.

_Opmerking:_ de "Weapon Specialist" is hernoemd naar "Cannoneer". Het is korter, duidelijker en thematischer.

## Zeegevechten

Dit spel is _turn-based_, wat betekent dat je een gevecht niet voor je ogen ziet afspelen. Het maakt niet uit wie er eerder schiet of sneller reageert. In plaats daarvan kan iedereen tijdens de beurt (van 60 seconden) hun commando's doorgeven en aan het einde wordt alles samengevoegd en alle gevechten tegelijkertijd uitgevoerd.

De hoofdregel hierbij is: **men vecht eerst, en beweegt daarna pas**.

Stel jij ziet (aan het begin van de beurt) dat je een paar tegels van een ander schip afstaat. Dan kun je niet meer "vluchten" of dat schip "ontwijken" door snel weg te gaan. Nee, als dat andere schip besluit te schieten, zal dat eerst worden afgehandeld. Daarna verplaats je pas.

Andersom zou niet eerlijk zijn. Met een beetje moeite kan een schip 5-10 vakjes in een willekeurige richting racen. Als je verplaatst vóórdat je vecht, kun je jezelf daarmee makkelijk uit alle problemen helpen.

Nee, je moet nu van tevoren nadenken. Ga ik iemand tegenkomen? Zal ik de lange route nemen, want we hebben weinig kanonskogels? Zal ik mijn kannonen upgraden, zodat ik anderen wel kan raken als ik hen zie, maar zij mij niet?

Daarna zijn er twee verschillende manieren van vechten: **dichtbij** en **op afstand.**

  * Zeemonsters vechten van dichtbij. Als ze een schip zien, moeten ze eerst dichterbij komen. Pas als ze één of twee vakjes afstand hebben, kunnen ze het schip _direct_ raken. Het voordeel hiervan (voor monsters) is dat ze _altijd_ raken.
  * Schepen vechten van afstand (want ze vuren kanonskogels af). Ze kunnen---theoretisch---een schip raken wat ze niet eens kunnen zien, omdat hun kannonen verder schieten dan het bereik van hun kaart.

Dit afvuren van kogels is wat complexer dan op het eerste oog lijkt. Hieronder is een plaatje dat het samenvat.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1561119211/explanationShootingSystem.png" /> 

Elke kogel heeft twee eigenschappen: **bereik** en **spreiding.**

  * Een kogel begint op de tegel van het schip. Daarna vliegt het, vakje voor vakje, in de richting waarin het kanon wijst. 
      * Het eerste wat de kogel raakt, krijgt schade. De kogel stopt hier.
      * Als de kogel niks raakt, stopt het automatisch als het buiten zijn _bereik_ komt. (Het valt in de zee, zonder iets te raken.)
  * Normaal gesproken vliegt een kogel in een rechte lijn. Als jij het kanon aan de linkerkant afvuurt, kan je alleen dingen raken die precies op dezelfde rij staan als jij. De _spreiding_ lost dit op. 
      * Hoe hoger de spreiding, hoe meer vakjes je kunt raken. Een spreiding van 1 betekent: 1 tegel door het midden, 1 tegel links daarvan, 1 tegel rechts daarvan. Je kunt bij elke stap dus 3 tegels raken met één kanon.
      * Dit is geweldig ... maar het brengt ook gevaren met zich mee. Je weet niet precies waar de kogel heengaat. Het kan zijn dat de kogel juist _mist_ vanwege de spreiding.
      * Daarom moet je _veel kogels_ hebben om dit te compenseren.

Als je de kannonnen upgradet, wordt je bereik en spreiding steeds hoger. Je moet dus wel rekening houden met het feit dat het meer kanonskogels en meer bemanning kost om je geschut dan op 100% te laten draaien :p

Het was misschien "realistischer" geweest om de spreiding niet parallel te maken. Nu "schiet" je eigenlijk vanuit een positie waar het schip niet staat. Maar deze methode is veel simpeler te programmeren en lijkt veel meer op hoe spelers _denken_ dat het werkt, dus dan vind ik dat belangrijker.

Als laatste gelden de volgende hoofdregels:

  * **Monsters:** kiezen een slachtoffer, volgen deze, en als ze dichtbij genoeg zijn vallen ze _altijd_ aan.
  * **Computerschepen:** laten je met rust als je hen met rust laat. Als je toch schiet, schieten ze (doorgaans) terug met alles wat ze hebben. 
      * Er zijn uitzonderingen. Als je reputatie te hoog is, wordt je eerder aangevallen. En Piraten vallen soms uit zichzelf aan.
  * **Spelersschepen:** hier hebben de spelers dus zelf de controle over. Als je op "FIRE!" drukt, worden AL je kannonen in één keer afgevuurd. De volgende beurt krijg je de resultaten te zien van deze actie (je hebt iemand geraakt, een monster vermoord, een beloning gekregen, etc.)
  * Kogels kunnen over land. Kogels kunnen niet door havens heen.

Dit systeem zorgt ervoor dat gevechten heel tactisch en "langzaam" zijn---precies zoals ik het wil. Je moet heel veel dingen goed regelen voordat je überhaupt iets kunt raken. (Je kannonnen moeten in de juiste richting wijzen, ze moeten opgeladen zijn, je moet genoeg kanonskogels hebben, ze moeten een hoog genoeg level hebben, je moet genoeg bemanning aan boord hebben, etc.)

Ik denk dat dit heel goed gaat werken.

Vaak probeer ik situaties te schetsen van _gave dingen waarvan ik wil dat ze in het spel voorkomen_. Dit systeem is bedacht om zoveel mogelijk van die gave situaties mogelijk te maken.

> **Bijvoorbeeld**: je komt een tegenstander tegen. Je ziet dat je weinig kanonskogels hebt. Wat doe je? Je gokt dat ze nog niet al hun kannonnen hebben. Je probeert naar een plek te varen waar je moeilijk te raken bent (want ze moeten een grote draai maken). Je stippelt de snelste route uit naar een haven in de buurt waar je kogels kan kopen. Maar ja, omdat nog niet de hele kaart bekend is, moet je hiervoor vertrouwen op de intuïtie van je cartograaf. Ondertussen instrueer je iedereen om _niet_ te upgraden, want je moet grondstoffen sparen voor bij de haven.

> Zie je hoe interessant dit is? Je moet echt plannen maken, belangrijke keuzes maken, goed samenwerken. Je kunt niet gewoon de hele tijd schieten en hopen dat het goed komt.

Het enige vervelende is dus dat je het niet in _real time_ ziet gebeuren. Van de ene op de andere beurt zijn de kogels ineens afgevuurd en is de situatie weer veranderd. Maar goed, daar is geen oplossing voor. Althans, niet zonder de hele structuur en opzet van het spel te veranderen.

## Feedback

Toen ik het spel even snel aan iemand anders liet zien ... was er veel verwarring.

Hij vroeg op een gegeven moment: "zijn we al begonnen? Wanneer begint het?"

We waren al een minuut begonnen :p

Er was geen enkele feedback in het spel, waardoor vaak onduidelijk was wat er precies gebeurde.

Dus toen heb ik nagedacht over hoe ik dit kon verbeteren. Ik had al een "error message" systeem gemaakt: als iemand iets wil kopen, maar je hebt er de grondstoffen niet voor, krijgt de kapitein een bericht van "Purchase by First Mate failed!"

Ik dacht: dit systeem kan ik hergebruiken! Dus nu kun je ook (groene, positieve) feedback krijgen. Als het spel begint, staat er "The game has started. Good luck!" Als je succesvol iemand hebt aangevallen, krijg je te lezen "Your cannonball hit a target!"

Dit systeem is nog niet perfect. Van veel acties krijg je geen bericht of een té vaag bericht. Maar het helpt al enorm met overzicht en duidelijkheid scheppen. Nu weet je tenminste dat een actie wel/niet geslaagd is. Nu weet je tenminste wat de computer allemaal heeft lopen uitrekenen na de vorige beurt.

_Opmerking:_ een andere aanpassing is dat ik de allereerste beurt van het spel _twee keer zo lang_ heb gemaakt. Als het spel net begint, moeten mensen zich nog even oriënteren en in het spel komen. Ze moeten kijken wie hun teamgenoten zijn, waar ze zijn, wat ze van plan zijn, etc. Het is heel stressvol als je dit ineens in 30 of 60 seconden allemaal moet regelen.

Als je mij zou vragen "welk onderdeel van spellen is extreem belangrijk, maar wordt altijd vergeten?", dan zou mijn antwoord **feedback** zijn. De speler moet weten wat er gebeurt, wat er gaat gebeuren, of zijn acties invloed hadden of niet.

Maar je moet niet alle informatie op de speler gooien. Je moet doseren. Je moet alleen de belangrijkste dingen laten zien, zodat de speler niet overweldigt raakt en alles goed in zich op kan nemen.

Ik zou bijvoorbeeld, voor _elke keer_ dat je kanonskogel iets raakt, een gedetailleerd bericht kunnen sturen.

> "Je kanonskogel heeft monster BLABLA geraakt voor 23 schade!"

Dit is nuttige en ware informatie. Maar is het goed om dit aan de speler te geven? Ik denk het niet. Als je het korter houdt, is het sneller te lezen en begrijpen, én krijg je een extra strategische laag terug. Men weet soms niet zeker _wat_ ze hebben geraakt, of _hoeveel kogels_ ze nog moeten afvuren totdat een monster helemaal dood is.

## Uitdagingen van Turn-Based games

Zojuist noemde ik al een "probleem" van turn-based spellen: je ziet dingen niet _live_ voor je ogen gebeuren.

De ene beurt staan alle schepen/monsters op het ene vakje, vervolgens eindigt de beurt, en binnen een seconde "floept" iedereen naar hun volgende vakje. Dat volgende vakje kan soms wel meer dan 5 vakjes verder zijn.

Dat kan onduidelijkheid en het gevoel van stilstand veroorzaken.

Het is dan ook de uitdaging voor mij om dit gevoel tegen te werken. Door middel van de juiste _feedback_, de juiste _structuur_, en de juiste _visuele effecten_ moet het voelen alsof dingen ter plekke gebeuren. Alsof, wanneer je de tegenstander op je radar ziet, wanneer je op de "FIRE!" knop drukt, je écht middenin een zeegevecht zit.

Hiervoor heb ik de volgende dingen gevonden:

  * Sommige onderdelen zijn wél live. Als je een eiland ontdekt, bijvoorbeeld, wordt dat direct geupdatet op het beeldscherm. Dit is relatief goedkoop voor mij om te programmeren en in te bouwen, maar geeft wel het idee dat je iets ter plekke hebt ontdekt. Op diezelfde manier worden grondstoffen constant bijgewerkt en krijgt de kapitein direct errors als iemand anders iets stoms doet. 
      * Ik ben nog op zoek naar meer dingen die live kunnen hoor. Bovenstaande is geen complete lijst :p
  * Het beeldscherm laat zeer regelmatig nieuwe dingen zien. Vanaf het begin van het spel was er het idee van de "piratenradio". Eens in de zoveel tijd komt er ineens een "uitspraak" of "nieuwtje" vanuit deze radio. Dat zorgt ervoor dat om de 10-20 seconden je iets nieuws ziet op het scherm. Misschien wel iets waar je wat mee kan! (Zoals "de haven van Tortuga heeft een grootse deal klaarstaan!")
  * Animaties en **geluidseffecten**. Ik denk dat dit nog wel eens een grote factor kan worden. Zowel op de smartphone als op het beeldscherm kan ik geluid laten horen voor bepaalde acties. Je drukt op "FIRE!", dan hoor je vanuit de computer het geluid van kanonskogels. Hoewel de actie helemaal niet meteen plaatsvond, maar pas aan het einde van de beurt, _voelt_ het wel zo.
  * Het spel moet genoeg tempo hebben. Als je tien beurten op rij alleen maar één vakje opzij verplaatst, op zoek naar redding/grondstoffen, dan is dat niet leuk. Hoe groot en vol de wereld is, speelt hierin een rol. Het liefst kom je zeer regelmatig iets interessants tegen.

Dit zijn allemaal dingen die pas duidelijk worden bij de _oefenpotjes_. Dit voelt meer als "afwerking" van het spel. Daarom heb ik nu nog niet veel van deze ideeën in het spel gezet.

**Even tussendoor:** IK KRIJG INEENS EEN IDEE! In de "professionele variant" wil ik de rol van de visser toevoegen. Die moet zijn hengel uitgooien en op de juiste plekken (op het juiste moment) eten voor het schip binnenhalen. Wat nou ... als je vangst/succes afhangt van _hoe lang je de hengel uitgegooid houdt_. Dus, hoe langer je op het scherm van de visser blijft, hoe groter de kans op een grote opbrengst. Maar ... dan kun je dus tijdelijk niks met jouw andere rollen doen :p

## Dag/Nacht Cyclus

Terwijl ik dit schrijf, herinnerde ik mij dat ik nog een **dag/nacht cyclus** moest toevoegen aan het spel. Dus dat heb ik nog snel even gedaan. (Dit gebruikt ongeveer eenzelfde systeem als de code waarmee ik schaduwen onder de schepen laat zien. Als ik dit systeem er toch gratis bijkrijg, maak ik daar graag gebruik van!)

Wat is het idee hiervan?

  * Het is natuurlijk realistisch en zorgt voor wat variatie.
  * Ik kan de wereld even donker maken, wat visueel interessant is.
  * Ik kan het gebruiken als spelelement. In het donker kun je anderen slechter zien.

In latere versies wil ik "weersomstandigheden" toevoegen, en zal het 's nachts ander weer zijn dan overdag.

Ook is er het idee van "lights out". Tijdens de nacht, kan de kapitein alle lichten aan het schip uitdoen. Hiermee worden (bijna) alle rollen uitgeschakeld, maar zolang het nacht is ben je onzichtbaar voor anderen. Dit zit nog niet in het basisspel, maar is een plan voor de toekomst.

Dit is hoe de kaart er overdag en 's nachts uitziet.

<img decoding="async" src="https://res.cloudinary.com/nietdathetuitmaakt/image/upload/v1561120771/game_v1_nighttime.jpg" /> 

_Opmerking:_ ik vind het nog niet heel mooi ofzo. Het is functioneel. Genoeg om het spel te kunnen spelen. (Je merkt waarschijnlijk al dat ik het meeste aandacht heb besteed aan de spelerskant en de serverkant, NIET aan het beeldscherm :p) Ik ben wel een groot fan van zulke "nachtscenes", dus waarschijnlijk besteed ik eerst veel aandacht aan mooie lichtjes maken voor de schepen (inclusief brandende-fakkel-animaties).

_Opmerking 2:_ in het echte spel is de kaart aan het begin helemaal verhuld. Gaandeweg, naarmate je bijv. eilanden ontdekt, worden steeds meer vakjes onthuld. Dit deel van het spel werkt al helemaal prima, maar het is saai om dit te laten zien, daarom heb ik de foto gemaakt _zonder_ deze "mist" of "fog".

## De eerste testpotjes

Het moment was aangebroken! Ik zocht een gewillige vrijwilliger, legde in 3 minuten het hele spel uit, startte het op, en begon te spelen.

Eerst het goede nieuws: het spel crashte niet (gedurende de 40 beurten die we speelden), bijna alles werkte zoals het hoorde, en het was duidelijk/simpel/interessant genoeg.

Maar dan nu het slechte nieuws: **bijna het hele spelidee klopt niet :p**

Van héél veel elementen kom ik er nu achter dat ze:

  * Ofwel niet samenkunnen met een ander deel van het spel ...
  * Ofwel niet interessant of uitdagend zijn ...
  * Ofwel niet ver genoeg uitgewerkt zijn

**Een voorbeeld.** Als je schip langs een eiland vaart, checkt het spel of dit eiland al ontdekt is of niet. Zo niet, ben jij de eerste en mag je het een naam geven. Als dat is gelukt, verschijnt het hele eiland (inclusief naam) op het beeldscherm!

Dit deel vind iedereen waarmee ik het spel test/bespreek hartstikke leuk. Misschien wel één van de leukste onderdelen: je mag echt een wereld ontdekken en vormgeven.

Tegelijkertijd gaat dit systeem in tegen het kernidee van het spel: ronddwalen op zee en een wereld verkennen. Langzamerhand uitzoeken waar je bent en hoe de wereld eruitziet. Als jij binnen een paar beurten een eiland vindt, weet jij daarna _exact_ waar je bent (en weet iedereen hoe een groot deel van de wereld eruitziet).

Deze twee systemen zijn los van elkaar heel sterk, maar kunnen niet tegelijkertijd in het spel. Dit soort problemen zijn het vervelendst. Ik weet zo snel ook niet hoe ik dit ooit ga oplossen.

Dit waren de allerbelangrijkste punten uit de oefenpotjes:

  * Er zitten enkele cruciale fouten in. (Op sommige schermen werkt de hele interface niet, je raakt soms ineens bemanning kwijt, etc.)
  * Men weet niet wat upgrades doen. Ze begrijpen het belang niet en gebruiken ze dus ook niet.
  * De wereld voelt niet als een interessante, levendige wereld die je wilt ontdekken. Het is te groot en tegelijkertijd te eentonig/oppervlakkig.
  * Er zijn twee componenten aan dit spel: het _ontdekken_ ( = avontuur) en het _vechten_ ( = strategisch). Ik probeer nu allebei tegelijkertijd te doen, wat ervoor zorgt dat beide componenten niet uit de verf komen.
  * Je hebt geen duidelijk doel of plan. "Probeer overeind te blijven" of "probeer het schip van de tegenstander te laten zinken" zijn te vaag en teveel gericht op de lange termijn.

Deze punten zal ik in het volgende artikel bespreken.

Zoals je ziet verandert het idee en de structuur van een spel _voortdurend_. Ik ga in het volgende artikel vele ideeën en systemen opnoemen, waarvan een groot deel uiteindelijk niet in het spel komt of haaks staat op een huidig systeem waarin ik veel tijd en liefde heb gestoken.

Maar ach, dat is nodig om tot de écht goede ideeën te komen. Dat is nodig om te weten wat je moet doen en waarom dat de beste keuze is voor het spel. En wie weet---misschien kun je die slechte ideeën voor een toekomstig project véél beter gebruiken.

Tot het volgende speldagboek!

_Opmerking:_ het spel staat nu dus permanent online op een gratis server. Die is voor iedereen bereikbaar, dus je kunt de laatste versie van het spel gewoon uitproberen, maar het lijkt me handiger als we dat nog even niet doen. Ik ben namelijk constant die server aan het crashen met mijn laatste versies :p