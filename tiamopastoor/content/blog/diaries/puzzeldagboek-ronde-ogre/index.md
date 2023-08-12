---
draft: true
title: '[Puzzeldagboek] Ronde Ogre'
author: tiamopastoor
date: 2021-12-01T19:09:18+00:00
language: nl
layout: horizontal
thumb: ""
categories: ["Diary"]
---

Welkom bij mijn "devlog" voor _Ronde Ogre_!

Dit spel is een uitbreiding/vervolg/toevoeging op het spel _Vierkante Ogre_.

In de devlog van dat spel kan je lezen _waarom_ ik hiervoor heb gekozen, want origineel was ik nooit van plan om twee spellen hiervan te maken.

Net als de vorige keer is dit devlog _enorm lang geworden_ (want zulke dingen maken is moeilijk en kost tijd). Als je alleen de belangrijkste conclusies en wijsheden wilt weten, lees dan "Wat is het Idee?" en ga dan helemaal omlaag naar "Conclusie"

Ik zal dan ook geen introductie meer geven, maar meteen overgaan tot de actie!

## Wat is het idee?

Net als in het originele spel, bestuur je één poppetje – Ronde Ogre.

Het **doel** is om haar naar de _uitgang_ te krijgen in het aantal gegeven beurten.

Elke **beurt** kan je een richting aangeven (links/rechts/boven/onder). (Dit kan door te _swipen_ op mobiel, of de pijltjestoetsen op de computer.) Vervolgens zal Ogre net zo lang die kant op rennen totdat _iets haar tegenhoudt_.

Dat is het! Net zo simpel als Vierkante Ogre, grotendeels hetzelfde.

Maar natuurlijk vond ik dat niet genoeg voor een uitbreiding. Dus hier komt de rest van het algemene plan:

**De Hoofdregel:** omdat ze zo snel beweegt, is ze ook snel moe! Om de X vakjes, valt ze in slaap. Dat verandert natuurlijk wat je wel/niet kan doen en zien.

(Dit is haar "hoofdregel" die het hele spel mogelijk maakt. Die van de Vierkante Ogre was dat hij levens erbij/eraf krijgt op basis van hoe ver hij kan zien.)

**De nieuwe mechanismes**: ik heb een berg aan mechanismes geprobeerd voor Vierkante Ogre die uiteindelijk niet pasten of te veel werden. Die ga ik voor dit spel gebruiken.

  * **Dubbelspel:** ze krijgt een schattig huisdiertje – een mol. Die doet precies haar laatste zet na. Soms moet je hem gebruiken in je puzzel (om iets te verplaatsen bijv.), maar uiteindelijk moet hij naar zijn _eigen_ uitgang.
  * **Rugzakje:** ze krijgt een rugzak en moet in veel puzzels allerlei items oppakken en gebruiken
  * **Dynamische wezens:** ze is niet meer het enige dat beweegt! Ik wil ook elementen toevoegen die uit zichzelf, na elke beurt, iets doen. (Draaien, bijvoorbeeld, of een stap in haar richting zetten.)

## Waar moeten we beginnen?

Als ik het goed aanpak, kan ik precies dezelfde code hergebruiken als voor _Vierkante Ogre_.

Dat spel heeft namelijk al het "ijsje" dat precies hetzelfde doet als _Ronde Ogre_: je schiet door tot je iets tegenkomt. Dus in dit spel kan ik "ice mode" gewoon _altijd_ aan laten staan :p

Vervolgens moet ik inbouwen dat het systeem _telt_ hoeveel vakjes je verplaatst en op basis daarvan switcht naar slaap/wakker modus.

Daarnaast is ondersteuning voor "dynamische wezens" en het "rugzakje" al ingebouwd, ik moet het nu weer **aanzetten** en vervolgens **helemaal invullen.** (Bijvoorbeeld: in het huidige systeem zijn er maar 3 voorwerpen voor het rugzakje, dat moeten er natuurlijk véél meer worden.)

De **mol** ( = haar huisdier) is ook gewoon een dynamisch wezen, al is hij belangrijker dan de rest. Na elke beurt kopieer ik haar zet en laat de mol hetzelfde uitvoeren.

### Iets slims

**Maar**, hier wil ik iets slims doen!

De huidige methode: ik kan de computer de _moluitgang_ (waar hij naartoe moet) op een _willekeurige plek_ laten zetten en dan hopen dat er toevallig een oplossing bestaat.

Maar ik kan ook de computer een puzzel laten oplossen en dan _achteraf_ de uitgang plaatsen.

Immers, ik weet waar de mol eindigt in de huidige oplossing. Als er meerdere oplossingen bestaan, kies ik er willekeurig eentje.

Dit heeft het risico dat die plek al bezet is. Dus misschien moet de uitgang van de mol niet een _vakje_ zijn, maar een _muursoort_, want vakjes hebben vrijwel altijd wel een vrije rand.

### Nog iets slims

**Ten eerste:** Bij _Vierkante Ogre_ kostte het me veel tijd om de _oplossingen_ van de puzzels in het prentenboek te krijgen. Ik heb handmatig elke oplossing gekopieerd (dat zijn gewoon lijsten met getalletjes) en omgezet in pijltjes.

Dat kan een computer natuurlijk ook. Beter zelfs! Dus deze keer schrijf ik een kleine scriptje dat de _oplossing_ om kan zetten in een stel mooie pijltjes, die ik dan gewoon als plaatjes in het prentenboek kan gooien.

**Ten tweede:** Bij _Vierkante Ogre_ heb ik een meer traditionele structuur gebruikt voor het spel. Zo is het hoofdmenu gewoon een paar grote knoppen onder elkaar, die leiden naar andere schermen (zoals de _instellingen_), of het spel zelf.

Maar ... dit zijn computerspellen! Waarin je met je poppetje ergens naartoe beweegt! Dus het lijkt me leuk om echt een interactief menu te maken, waarbij je bijvoorbeeld Ogre naar links moet bewegen om te spelen, en naar rechts om de instellingen te openen. Ik denk dat zoiets hartstikke leuk en passend is.

Als ik het zo opschrijf, _lijkt_ het nauwelijks werk. De grootste vraag is eigenlijk: **wat is precies het verschil tussen slaap/wakker-modus?** Wat kan je niet als je slaapt? Wat wel? Tja, dat zal even tijd kosten om iets goeds te vinden.

## Stap 1: ondersteuning inbouwen

Ondersteuning inbouwen was simpel. Bovenaan de code (zowel de simulatie als het spel) staat een variabele "roundOgre". Als ik die naar _true_ zet, zitten we ineens in de "Ronde Ogre" versie van het spel! (En als die op _false_ blijft, zitten we in Vierkante Ogre.)

In deze versie doet het spel alsof je _altijd_ beweegt vanaf een **ijsje**. Daardoor schiet Ronde Ogre automatisch door totdat ze ergens tegenaan botst, want dat had ik al ingebouwd!

Ook krijgt elk bord de variabelen **sleepCounter** en **sleepState**. Je begint altijd _wakker_ (sleepState = false) en met je counter op waarde _4_.

Dit zijn dan de hoofdregels van dit spel:

  * Voor elk **vakje** dat je verplaatst, gaat de teller eentje omlaag. (Bijvoorbeeld: jij _swipet_ naar links, en Ronde Ogre zoeft drie vakjes door het level heen voordat ze bij een muur komt. Dan gaat er dus drie vanaf.)
  * Is de teller **** (of lager)? Dan val je in slaap!
  * Als je in **slaap** bent, ga je voorzichtig slaapwandelen. Je beweegt op de normale manier (één vakje per keer). Bovendien zijn je ogen dicht en kan je dus niks zien.
  * Is de teller opnieuw **** (of lager)? Dan word je weer wakker!

Deze cyclus herhaalt zich tot het einde van de puzzel.

(Om de code simpel te houden, telt hij deze dingen ook als je in Vierkante Ogre zit. Maar dan negeert hij simpelweg of je slaapt of niet.)

**Hmm, dat lijkt ingewikkeld?** Valt heel erg mee. Het is superduidelijk als je het _ziet_ gebeuren bij je eerste puzzel. Bovendien kan ik deze regels natuurlijk stuk voor stuk uitzetten. Net zoals bij Vierkante Ogre, worden ze _langzaam_ geïntroduceerd over de eerste paar werelden, in plaats van allemaal tegelijkertijd.

### Waarom het getal "4"?

Omdat dit het vervolg is op _vier_kante Ogre. Bovendien verwacht ik dat de meeste levels van deze puzzel 4×4 zullen worden. Het is altijd fijn om consistent te zijn met je getallen, dat voelt voor mensen "fijn" en "samenhangend".

Ook zal je in de meeste gevallen 1-3 vakjes kunnen zoeven met je beweging, waardoor je gemiddeld zo om de 2-3 zetten in slaap valt. Leek me een goed idee.

Maar de belangrijkste reden: uit ervaring weet ik dat je getallen altijd _laag_ wilt houden. Het zorgt voor een toegankelijker spel, maar ook betere puzzels, want je wisselt veel sneller tussen slaap en ontwaken. Elk vakje te veel of te weinig maakt een verschil.

Als dit getal 10 was, of iets dergelijks, dan zou je in de kleine puzzels _nooit in slaap vallen_ en in de grote puzzels dit systeem _hoogstens één keer gebruiken_. (Bovendien is het moeilijk bij te houden.)

En als ik dit getal laag houdt ... kan ik speciale vakjes ontwerpen die het juist weer ophogen!

### Dynamische Wezens zijn Vervelend

In dit spel wil ik dus die _dynamische wezens_ toevoegen, beginnende met de mol.

Ik _dacht_ dat ik er al ondersteuning voor had, maar die was nogal gebrekkig. Pas toen ik _wist_ wat ik nodig had, zag ik de fouten in dat systeem.

Dus ik moest even heel wat dingetjes verplaatsen en opnieuw schrijven.

**Bijvoorbeeld:** eerst stond de "checkDynamicEntities" functie hélemaal aan het einde van je beurt. Nadat je al had gecheckt of je het spel had gewonnen of verloren, zeg maar. Dat was stom, want die wezens kunnen natuurlijk _veranderen_ wat de uitkomst van die "game over" check is.

**Bijvoorbeeld:** omdat deze wezens _bewegen_, moeten ze een korte animatie hebben in het spel die laat zien wat ze doen. Maar dat betekent dat ik moet _wachten_ tot die animatie voorbij is, voordat de speler weer mag bewegen. Dat is vervelender om in te bouwen dan je denkt, want wat als er meerdere wezens zijn? Dan moet de tweede op de eerste wachten, en de derde op de tweede, enzovoort totdat eindelijk _iedereen_ is gecheckt.

**Bijvoorbeeld:** daarop doorgaand, moet er dus een _volgorde_ in de wezens zitten. Na lang nadenken besloot ik om deze _elke keer anders te maken_. (In plaats van dat je bijv. zegt "wezens worden altijd gecheckt van linksboven naar rechtsonder") Maar dat betekent dat de simulatie dus een volgorde moet aanwijzen en vervolgens de hele tijd alle wezens moet verzamelen en _sorteren_ op die volgorde.

Afijn, een dag vervelend werk, maar dan functioneert dit systeem tenminste.

Nu is alle ondersteuning ingebouwd voor dit spel! Door naar de volgende stap.

## Stap 2: de mol

Er waren meerdere opties, maar ik wist niet welke het _beste_ zou werken.

De mol doet altijd jouw laatste stap na, en ...

  * ... doet niks anders speciaals.
  * ... moet naar z’n eigen uitgang en _verdwijnt_ als hij daar is.
  * ... moet op z’n eigen uitgang _eindigen_.
  * ... moet bepaalde vakjes "verzamelen" tijdens het oplossen van de puzzel. (Dus er zijn vakjes die je moet hebben, maar die _alleen_ de mol kan oppakken.)

Ik heb ze allemaal ingebouwd en ... ze zijn allemaal even goed, op hun eigen manier.

Als de mol in het level zit, helpt hij met je zicht blokkeren (zodat je geen lamp ziet) en je beweging blokkeren (want je kan niet dwars door hem heen). Dus dat is op zichzelf interessant!

Maar als hij _weg gaat_ na het vinden van de uitgang, wordt het ook interessant: je moet hem _precies_ op het juiste moment laten gaan.

Maar als hij op dat vakje moet _eindigen_, is het óók interessant! Het maakt de puzzel ietsje _makkelijker_ (want je weet of je laatste paar stappen kloppen), maar de computer kan dit gebruiken om creatievere puzzels te verzinnen.

En datzelfde geldt voor de laatste optie.

Dus, wat doe je dan? Nou, je verzint een manier om ze allemaal in puzzels te laten verschijnen (maar niet tegelijkertijd):

  * Als er een moluitgang is, dan moet de mol daarop eindigen.
  * (Bij een volgende wereld) => Als er speciale _edelstenen_ in het level zijn, moet je die allemaal oppakken. De mol kan deze als enige pakken.
  * (Tientallen levels later) => Regelwijziging: de mol moet _ergens een keer_ op de moluitgang komen, dan verdwijnt hij.

En als geen van die dingen waar is (geen uitgang of edelstenen), dan is de mol dus gewoon iets wat lekker met je meebeweegt in de puzzel, zonder eigen doel.

### Waar komen die edelstenen vandaan?

Nou, Ronde Ogre heeft dus een rugzakje waarin ze dingen kan stoppen.

En wat kosten dingen? Juist ja: geld.

Ik denk dat dit een interessante manier is om aan dat geld te komen. De mol kan als enige _graven_ en die waardevolle stenen verkrijgen.

Vervolgens kan Ronde Ogre hiermee iets kopen op bepaalde marktvakjes, dat ze nodig heeft om de puzzel op te lossen.

Ik _denk_ dat zoiets geweldig goed samenwerkt, maar we zullen zien.

### Worden het geen hele lange oplossingen zo?

Ik denk het niet. Omdat je poppetje _beweegt zo ver als ze kan_, kan je héél snel van de ene uithoek naar de andere uithoek.

Sterker nog, toen ik de eerste puzzels wilde genereren had ik géén minimaal aantal zetten ingesteld. Wat denk je? Alle puzzels die terugkwamen hadden 2 of 3 zetten, want zo snel kon je uit elke positie naar de uitgang racen.

Pas als ik een minimum van 5 zetten vereiste (op een 3×3 level, geen speciale vakjes oid) moest de computer een slim level bedenken met veel obstakels.

Naarmate levels groter worden én meer speciale vakjes hebben, hoop ik deze restrictie te kunnen laten varen, en dat de oplossingen weer in die "sweet spot" van 4-12 zetten komen.

### Was je niet van plan iets "slims" te doen?

Ja, ik was van plan om _bij te houden_ waar de mol allemaal naartoe liep, en dan _achteraf_ (als de rest van de puzzel al bedacht is) gewoon diens uitgang op één van die bezochte vakjes te ploppen.

Sterker nog, dat had ik met succes ingebouwd.

Maar als ik al die verschillende "molfuncties" ga inbouwen, heeft dit weinig nut.

Bovendien kan het dus zijn dat de mol _na_ het bezoeken van de uitgang nog van belang is (door bijv. zicht te blokkeren), dus dan zou het een stukje ingewikkelder zijn om zo "achteraf" de uitgang juist te plaatsen.

Als laatste merkte ik dat het eigenlijk totaal niks opleverde. De computer zoekt nog steeds puzzels met _precies één oplossing_, dus als de moluitgang pas achteraf wordt geplaatst, _maakt het niks uit en heeft het geen invloed op de oplossing_.

Dus ja. Dat "slimme" moet ik maar bewaren voor een spel waarbij het daadwerkelijk slim is.

### Tol betalen

Toen ik de _edelstenen_ had ingebouwd (die alleen de mol kan oppakken), dacht ik: "hartstikke leuk, maar waarvoor gebruiken we ze?"

Het simpelste dat ik kon bedenken was een soort "poort" waar je tol moet betalen: je moet minstens X edelstenen in je rugzakje hebben, voordat je op dat vakje mag staan.

Dus dat heb ik ingebouwd! Het lijkt goed te werken. Hoewel ik nog niet al te veel puzzels ermee heb kunnen genereren.

### Dynamische Wezens blijven vervelend

Leerpuntje: programmeer voor het volgende project meteen _van tevoren_ een _degelijke ondersteuning_ voor dingen die ik misschien later nodig heb.

Want nu heb ik wederom een paar uur dingen herschreven, versimpeld, verplaatst, veranderd, omdat er _allerlei fouten verschenen_ met deze wezens. (Al hingen die fouten ook samen met het _undo-systeem_ en _hint-systeem_. Bijvoorbeeld, ik had nog geen mogelijkheid in de "undo" om wezens die _verdwenen_ zijn weer terug tot leven te toveren.)

Ach ja, het lijkt nu allemaal netjes te werken.

## Stap 3: meer wezens

### De eerste ideeën

Nu er een goed systeem op de plek zit, is het relatief makkelijk om nieuwe wezens in te voeren.

Eerste wezen: **"de duizelaar"** Na elke beurt, draait deze automatisch een kwartslag. Ziet hij jou? Dan verlies je meteen.

Tweede wezen: **"de ijsbeer".** Hij ijsbeert letterlijk over de puzzel. Na elke beurt zet hij een stapje vooruit, in een rechte lijn. Als hij niet verder kan, draait hij om. (Zodat hij daarna weer terug de andere kant op loopt.)

<a>Derde wezen: **"de muis". **Als je kaas vast hebt, kruipen ze elke beurt een beetje dichterbij. Anders kruipen ze elke beurt juist een beetje verder weg.</a>

Vierde wezen: **"de duif"**. (Of kraaien, of uilen, in ieder geval een vogel die redelijk herrie maakt.) Als dit wezen _naast_ je staat, word je direct wakker, en kan je niet in _slaap_ vallen.

Vijfde wezen: **"de nachtegaal"**. Je raadt het al: als je naast dit wezen staat, val je meteen in slaap, en kan je niet _wakker_ worden.

Dit zijn een beetje mijn gedachtegangen, maar ...

### De eerste problemen

... er zijn een aantal problemen waar ik nu al op stuit.

**Probleem #0:** een klein probleempje. Zoiets als "de duif" is alsnog statisch, want het beweegt niet. Ik kan natuurlijk een soort regel voor "vliegen" toevoegen, maar dat wordt waarschijnlijk al snel rommelig. Het is niet persé _erg_ om sommige wezens niet te laten bewegen.

**Probleem #1:** Deze wezens moeten niet te moeilijk worden. Zeker als deze puzzels op papier moeten werken, moet alles erg simpel en overzichtelijk zijn.

  * Op papier zal er een lijst naast de puzzel moeten staan met de _volgorde_ van dynamische wezens.
  * Dit betekent ook dat er maar één van elke soort in de puzzel kan zitten. (Want anders weet je niet welke ijsbeer precies welke ijsbeer aanwijst :p)

**Probleem #2:** Het moet wel binnen het thema van **zicht** blijven. En dat van **rust/ontspanning** waar Ronde Ogre specifiek over gaat.

  * Om die reden zou het logischer zijn om bijvoorbeeld **vuurvliegjes** toe te voegen.
  * En van die vissen met lampen. Of kwallen. Maar dan moet ik het spel _watervakjes_ geven, of een onderwaterwereld, of iets dergelijks. (Klinkt wel interessant ... maar ook lastig en veel werk.)
  * Sterker nog, na wat onderzoek, zijn **gloeiwormen** de ideale kandidaat. Die zitten ook écht in grotten en leveren van die prachtige Efteling-achtige taferelen op.
  * Ja. Hoe leuk die ideeën ook zijn (bijv. vogels die herrie maken), ze passen niet bij het huidige thema. Ik wil liever focussen op allerlei wezens die licht geven, of juist in het donker leven.

**Probleem #3:** Toen ik de eerste paar wezens in de simulatie zette, werden ze keihard genegeerd. De computer gaf mij alleen puzzels waarbij hij de ijsberen achter een hoop muren had geplaatst, zodat ze geen obstakel vormden.

  * Op zich is dat logisch, want een 3×3 puzzel is al redelijk vol, en zo’n ijsbeer die rondloopt zit behoorlijk in de weg.
  * Maar het levert dus geen goede puzzels op. Wat doe je dan? Flauwe restricties toevoegen zodat de computer iets leuks doet.
  * Idee 1: als een ijsbeer **niet** kan bewegen (en dus gevangen zit), verlies je meteen het level. Dit hoeft niet eens een _echte_ regel te zijn, ik kan het ook alleen in de simulatie gebruiken.
  * Idee 2: een ijsbeer heeft een direct **nut**. Bijvoorbeeld: een ijsbeer kan die vissen van hierboven uitschakelen.

### Eventjes afstand

Ik heb eventjes afstand genomen om na te denken over al deze mogelijkheden, en de beste weg voorwaarts.

**Eerste conclusie:** ja, we moeten (in de eerste plaats) focussen op _lichtgevende dieren_.

Daarbij komt een tweede focus: _natuurgebieden_. Alle puzzels tot nog toe hebben hetzelfde blauwe vakje als ondergrond, wat een simpele "neutrale grond" is. Maar _vissen_ leven in het water. Vogels, vuurvliegjes, insecten, die leven allemaal in bomen en jungles en dergelijke.

Het lijkt me logisch om elk vakje een _natuursoort_ te geven. Vervolgens gebruik ik deze voor de beweging en functie van wezens.

Als het goed is, hoef ik hiervoor slechts één variabele toe te voegen aan tegels, en die simpele plaatjes te geven (zodat ik kan zien of iets gras is, of water, of wat dan ook).

**Tweede conclusie:** die wezens laten we even voor wat we zijn. Ik wil eerst de _speciale vakjes_ inbouwen en de _voorwerpen uit Ogre’s rugzakje_.

Die zijn namelijk een stuk _makkelijker_ om in te bouwen en uit te leggen aan spelers. Dus ze zullen wel vóór de wezens worden uitgelegd in het boek.

Als ik dat eenmaal uit de weg heb, zal ik een veel duidelijker beeld hebben van wat deze wezens nou _eigenlijk moeten doen_. Zijn de puzzels te makkelijk? Te moeilijk? Te eentonig? Heb je te veel beweegruimte, of juist te weinig?

Ik heb geen idee. Dus dat moeten we eerst uitvogelen.

## Stap 4: de campagne

Om iets van structuur te krijgen in deze chaos van ideeën en probeersels, probeer ik altijd terug te gaan naar de kern. Stapje voor stapje, begin bij het begin, probeer een goede volgorde te vinden.

Zo heb ik een algemeen idee van de campagne opgeschreven. Elke "fase" introduceert een groot nieuw element en zal 5+ werelden bevatten.

  * Fase 1: herinnering aan wat je leerde in Vierkante Ogre, enkele nieuwe muren/vakjes (die nog _niet_ met die slaapregel werken)
  * Fase 2: de mol! Het is iets compleet nieuws, ik denk dat het kinderen het erg leuk zouden vinden, en tegelijkertijd is het gewoon een sterk idee.
  * Fase 3: de slaapregels. (Dus na X vakjes val je in slaap, dan weer na X vakjes word je wakker.) => deze heeft waarschijnlijk véél werelden, want de regels zelf mogen wat tijd hebben, maar ik heb ook véél mogelijke speciale vakjes kunnen bedenken.
  * Fase 4: het rugzakje.
  * Fase 5: de dynamische wezens.

## Fase 1+2: Nieuwe "simpele" vakjes

Mijn taak was nu: hoeveel vakjes kan ik bedenken die nog _niet_ het "slaapsysteem" nodig hebben?

Ik kwam op vier muren:

  * **Gevangenisdeur:** als je er doorheen bent gelopen, valt hij dicht (permanent). Een omgekeerde deur, dus.
  * **Matrasmuur:** als je er tegenaan botst, keer je om en gaat in die richting verder.
  * **Gatenmuur:** alleen de mol kan hierdoorheen lopen
  * **Moddermuur:** alleen de mol kan hierdoorheen lopen => maar als hij dat doet, breekt de muur af

En vier speciale vakjes:

  * **Gatenvakje:** alleen de mol kan hierop staan
  * **Moddervakje:** alleen de mol kan hierop staan => maar als hij dat doet, wordt het vakje normaal
  * **Grote lichtknop:** zet _alle_ lampen in het level aan/uit.
      * Om de speler alvast klaar te maken voor het idee van "als de Ogre slaapt, kan ze niks zien"
      * Bovendien kan de mol deze schakelaar _ook_ gebruiken.
      * En natuurlijk is het idee van een "gigantische schakelaar die alle lampen in een grot regelt" een prachtidee voor een prentenboek :p
  * **GPS**: je _moet_ deze bekijken voordat je naar de uitgang kan. (Immers, de GPS geeft je de juiste route.) Maar, eenmaal bekeken, veranderen ALLE GPS-vakjes in een reguliere lamp.
      * _Wat is hier het idee achter?_ Ik wilde iets dat _goed_ was als je er één keer naar keek, maar _slecht_ als je er meerdere keren naar keek. (Eigenlijk proberen deze puzzels constant het idee van _balans_ aan te leren: kijken naar een scherm is prima, gewoon niet te veel.)

### Een belangrijke regel

De regel, tot nog toe, is dat je _alleen de actie uitvoert van het vakje waarop je eindigt_. Dus als je beweegt en je zoeft langs drie andere speciale vakjes, dan negeer je dat gewoon compleet.

In eerste instantie wilde ik dit opschudden door speciale **vakjes/muren** toevoegen die iets doen als je er _langs gaat_ maar _niet op eindigt_. Maar hoe meer ik erover nadacht ... hoe moeilijker dat zou worden. Misschien kan er _één_ vakje komen dat zoiets doet, maar als ik die regel te veel breek, wordt het alleen maar verwarrend.

### Nog zo’n belangrijke regel

De algemene regel is: de mol activeert _niet_ speciale vakjes ... behalve natuurlijk die paar vakjes die specifiek zijn ontworpen voor de mol. (Zoals de moddermuur.)

Als ik die vakjes een duidelijk _ander_ uiterlijk geef, en er niet meer dan 4-5 in het spel stop, denk ik dat het kan.

Maar het moet niet meer worden dan dat. Als speler moet je snel kunnen zien: met dit vakje gaat de mol _iets_ doen, al die andere vakjes worden genegeerd.

(Dit breidt zich overigens uit naar alle dynamische wezens: ze activeren geen speciale vakjes, 1 of 2 uitzonderingen daargelaten.)

### Matrasmuren zijn de duivel

Die _matrasmuren_ waren echt héél lastig om te programmeren!

Waarom? Het hele systeem is ingebouwd op het idee: elke zet beweeg je één stap. Maar bij die matrasmuren is het _mogelijk_ om een zet te doen terwijl je nergens heen gaat. Jij swipet naar links, botst tegen een muur, draait om ... maar er is geen vakje rechts van jou, dus je beurt stopt meteen.

Uiteindelijk heb ik maar het concept van de "no-move turn" ingebouwd. In de simulatie accepteert hij dat óók als een geldige zet (enkele regeltjes extra code), in het spel speelt hij heel snel een animatie _waarbij de speler gewoon op dezelfde plek blijft_ :p

(Het is niet de meest "_clean"_ oplossing, en ik deed het liever niet, maar na een paar uur kon ik niks beters bedenken. En het werkt eigenlijk heel goed voor een paar regeltjes code.)

En er waren nog tientallen andere kleine foutjes. Ze waren _zo moeilijk om op te sporen_ dat ik ze niet eens kan uitleggen hier zonder vele paragrafen te typen. Dus geloof me: dit was vervelend. Gelukkig is het wél een heel interessant puzzelonderdeel geworden.

### Gaten vóór modder

Die _gatenvakjes_ zijn natuurlijk de voorloper voor de _moddervakjes_. Ze zullen dan ook in dezelfde wereld passen, waarin je langzaam het concept leert dat de mol sommige dingen kan die Ogre _niet_ kan.

(Terwijl ik dit schrijf genereert de computer trouwens 50% van de tijd puzzels waarin deze muren _niet_ worden gebruikt, wat mij doet twijfelen over het nut. Maar dit komt waarschijnlijk ook doordat hij alleen kleine levels maakt (3×3), waarin zoiets weinig verschil maakt, en omdat ergens anders een _bug_ in de code zit waardoor hij deze muren soms alleen aan de rand plaatst :p)

## Intermezzo: verhaal

Op dit punt merkte ik dat veel van mijn ideeën _of_ niks met zicht te maken hadden (het hoofdthema) _of_ te generiek waren.

Dat was wel te verwachten, want ik heb dus géén idee wat het _verhaal_ en de _doelstelling_ van het prentenboek gaat worden. Dus ik maak nu vooral puzzels op basis van wat _goede puzzels oplevert_.

Ik zat een beetje vast qua inspiratie en besloot nu dus het verhaal iets verder uit te diepen. Dat heeft, net als de vorige keer, z’n eigen devlog gekregen: **[Visueel Devlog] Ronde Ogre<TO DO: Link>**

Na een hoop nadenken, ideeën opschrijven en dan weer doorkrassen, heb ik denk ik een goede start gevonden. In de rest van dit devlog zal ik het vertellen wanneer dit _verhaal_ de keuzes beïnvloedt en waarom.

## Fase 3: Slaapvakjes

Deze vakjes zijn redelijk _straightforward_.

  * Een vakje dat je direct wakker maakt. (En natuurlijk het omgekeerde: eentje die je direct in slaap laat vallen.)
  * Eentje waar je alleen overheen kan als je _sleep counter_ hoger of lager is dan het aangegeven getal.
  * Eentje die je sleep counter _ophoogt_ of _verlaagt_ (met één) als je eroverheen komt.
  * Muren waar je alleen doorheen kan met de juiste toestand.

Er zijn maar twee dingen waarover ik me zorgen moet maken:

  * Het moet niet _te veel worden_. Ik moet alleen de simpelste én sterkste vakjes houden.
  * Elk vakje moet een sterke thematische reden hebben. (Het moeten geen abstracte puzzels worden waarin je constant moet hoofdrekenen en herinneren wat een vakje ook alweer deed.)

### Stap voor stap

Daarnaast leek het me een strak plan om de regels weer _stap voor stap_ uit te leggen. (Net zoals Vierkante Ogre er meerdere werelden over doet om de hoofdregel te vertellen.)

Want, als je het allemaal tegelijk bekijkt, zijn het gewoon veel regels:

  * Je hebt een "sleep counter"
  * Voor elk vakje dat je verplaatst, gaat die eentje omlaag.
  * Als die 0 bereikt, switch je van wakker naar slapen, of andersom.
  * Als je slaapt, zet je maar één stap per keer, en kan je niks zien.

Dat moet je niet proberen in één keer uit te leggen!

Dus ik heb geprobeerd om precies die stappen op te breken in hun eigen werelden:

  * Eerst komt de "sleep counter" in het spel. Je leert als speler slechts dat hij naar 0 gaat en dan reset.
      * Om dit aan te leren, komt er een speciale muur: je mag hier alleen doorheen als je counter HOGER is dan het aangegeven getal*
  * De wereld daarna leer je "als de counter reset, val je in slaap".
      * Om dit aan te leren, komen er twee speciale vakjes: eentje waarop je alleen mag komen als je _slaapt_, en eentje waarop je alleen mag komen als je _wakker bent_.
  * Pas dáárna leer je dat je, al slapend, niks ziet en slechts één stap per keer zet.

Vanaf dat moment is deze regel hopelijk een gewoonte en kan ik daarop doorbouwen.

*Om het te versimpelen, zou ik deze muren ook standaard het getal 2 kunnen geven. Anders krijgen we te veel getalletjes op het scherm, die ook in elkaars weg kunnen zitten.

In dat geval is zo’n muur een "one-off element". Het verschijnt in deze wereld om spelers _iets aan te leren_, en verdwijnt daarna weer compleet uit het spel. Het liefst doe je dat niet, maar ik heb inmiddels geleerd dat zulke elementen een geweldige oplossing kunnen bieden.

### Heb ik me terecht zorgen gemaakt?

Een beetje. Het zijn vrij veel vakjes en voor enkele daarvan heb ik nog geen sterke thematische reden gevonden. (Ik heb gewoon snel iets getekend om het uit te proberen in het spel.)

Aan de andere kant zijn ze supermakkelijk uit te leggen en zie ik dat de puzzels er interessanter van worden. Dus waarschijnlijk blijven ze allemaal in het spel en probeer ik voor allemaal iets van een _logische/intuïtieve_ verklaring te vinden.

Wél introduceert deze wereld dus twee vakjes die óók activeren als je eroverheen vliegt:

  * Het vakje waarmee je direct stopt met bewegen en slaap<=>wakker wisselt.
  * Het vakje dat je counter ophoogt/verlaagt.

Het eerste geval is natuurlijk logisch: het hele _idee_ van dit vakje is dat je _tijdens_ een beweging ineens kan worden afgeremd.

Het tweede geval komt voort uit een probleem. Als je counter wordt opgehoogd/verlaagd _aan het einde van je beurt_ (dus als je op dat vakje eindigt) ... dan wordt het heel verwarrend. Want op dat moment is je counter al geüpdatet (volgens de normale regel, altijd eentje eraf) en ben je al gewisseld van slaapstatus (als nodig).

Nee, het moet daarvóór gebeuren. Maar dan zou dit het _enige_ vakje zijn in het hele spel waarvoor dat geldt! Dat is stom. Dus, om het consistent te maken, wordt dit vakje geactiveerd _als je eroverheen komt_ (en niet aan het einde van je beurt). Dit versimpelde tevens de code enorm :p

Dus ik ga nu de laatste vakjes helemaal inbouwen en dan kunnen we door naar het rugzakje!

## Fase 4: Rugzakje

Over deze fase ben ik eigenlijk nog het meest onzeker.

Het heeft enerzijds eindeloze mogelijkheden: ik kan _allerlei voorwerpen bedenken_, die in je rugzakje laten stoppen, en daar iets mee doen.

Maar daardoor wordt het ook snel _moeilijk en onoverzichtelijk_. Veel van de _functionaliteit_ van die voorwerpen kan ik ook gewoon in een speciaal vakje stoppen, of een speciale muur. Dat zou zelfs duidelijker zijn.

### Twijfel 1: waarom een rugzak?

Wat is de reden voor de rugzak? Wat voor soort voorwerpen zouden erin moeten? Wat voegt het toe dat een ander deel van het spel _niet_ kan toevoegen?

  * **Reden 1:** het is makkelijk en leuk op papier (in het prentenboek). Je maakt gewoon een paar fiches en het voelt voor de speler alsof je écht dingen verzamelt.
  * **Reden 2:** je kunt dingen _sparen_ zodat je ze later _in één keer gebruikt_. (Bijvoorbeeld, je spaart meerdere draaikolken, zodat je ergens anders in één keer veel kan draaien!)
  * **Reden 3:** op diezelfde manier zijn effecten _permanent_. (Bijvoorbeeld, ik kan een "slecht" voorwerp maken dat je rugzak simpelweg opvult en zorgt dat je niks anders meer op die plek kan zetten. Of "vergif" waardoor je vanaf nu sneller moe wordt.)
  * **Reden 4:** er zijn enkele dingen die echt véél _logischer_ zijn als voorwerp. (Bijvoorbeeld, _eten en drinken_ heb je doorgaans meegenomen in je tas/rugzak als je op avontuur gaat. Dat ligt niet doodleuk op de vloer ergens.)

### Twijfel 2: hebben we genoeg ruimte?

Als Ronde Ogre uiteindelijk 10-15 hoofdstukken krijgt ... is er dan wel ruimte voor dat hele idee van de rugzak?

Het uitleggen van de voorwerpen, van de rugzak zelf, het toepassen van alles ... dat kan makkelijk vijf hoofdstukken duren.

Ik weet niet of we die ruimte hebben. Dan introduceer ik liever meerdere _dynamische wezens_ voor Ronde Ogre, want dat past beter bij haar. (Ze heeft immers al haar mol én haar hele idee is dat ze vol leven is en vol liefde voor de natuur.)

Maar ja ... hoe stom is het om nou wéér een deel 3 te maken (weet ik veel, Driehoekige Ogre) alleen maar voor die rugzak? :p

### Dus wat gaan we doen?

Ik ga denk ik eerst de werelden maken die nu al zijn bedacht. Dat betekent:

  * Voor elk nieuw element een _tutorialplaatje_ maken. (Kan ik meteen testen hoe makkelijk het uit te leggen is enzo.)
  * Veel puzzels genereren en per wereld de meeste interessante samenstellen, op volgorde van makkelijk naar moeilijk.
  * Andere mensen het spel laten testen.

Zo kan ik zien _hoeveel werelden er nodig zijn_ om bij het rugzakje te komen. (En hoe _snel/langzaam ik dingen moet introduceren_.)

Op basis daarvan kan ik veel beter inschatten waarvoor ik nog tijd heb en waarvoor niet.

(En het geeft even tijd om langer over dit probleem na te denken. Een paar nachtjes slapen doet altijd wonderen.)

## Tussenresultaten

Inmiddels heb ik gezien dat ...

  * De computer "_Gevangenisdeuren"_ en de "_Grote schakelaar"_ nauwelijks gebruikt. Het is niet dat ze waardeloos zijn, maar _op zichzelf_ (zonder andere elementen) komen er nauwelijks hele interessante puzzels uit.
  * Alleen fase 1 al 7 werelden en 150 levels heeft opgeleverd ... maar eigenlijk slechts een paar nieuwe vakjes introduceert.

Hierdoor twijfel ik een beetje. Ik heb het idee dat dit eerste stuk van het spel niet de meest spectaculaire levels zijn. En dat wil je natuurlijk niet: je wil dat het hele spel goed en uitdagend is, _zeker_ het begin (zodat het mensen aantrekt).

Dus de kans bestaat dat ik de slechtst scorende vakjes alsnog weghaal.

De volgende fase (met de mol) zal ik dus alle levels _in twee stappen genereren_: eentje met de vakjes die ik sowieso wil houden/introduceren, en eentje met de twijfelvakjes. Mocht ik uiteindelijk kiezen om die weg te doen, kan ik simpelweg een "hap" nemen uit elke wereld en het spel moet nog werken.

### Verbeteringen aan de simulatie

**Verbetering #1:** Ik merkte dat _gevangenisdeuren_ en _breekbare vakjes_ een beetje dezelfde functie bekleedden. Allebei sluiten ze iets _af_ als je er eenmaal langs bent gekomen.

(Hoe wist ik dat zeker? Nou, ik kreeg véél betere levels met gevangenisdeuren ... als ik de breekbare vakjes uitzette.)

Dus in de eerste fase heb ik constant één van de twee uitgezet, en daarna de _kans_ op breekbare vakjes lager gemaakt dan bij Vierkante Ogre.

**Verbetering #2:** De computer is alleen geïnteresseerd in de _snelste oplossing_. Dat betekent dat ik véél levels terugkreeg waarin hij gewoon vier keer heen en weer ging (met behulp van die _matrasmuren_) zodat hij daarna doodleuk naar de uitgang kon stappen.

(Door dat heen-en-weer-gaan had hij inmiddels een paar deuren gesloten, lampen uitgezet, en de weg vrijgemaakt.)

Dat is natuurlijk saai. Dus ik bouwde een kleine _check_ in die bijhoudt _op welke vakjes je elke beurt eindigt_. Vervolgens zei ik: **wijs elke puzzel af waarbij je in de oplossing _twee keer na elkaar op hetzelfde vakje eindigt_.**

Het is niet perfect, want die matrasmuren kunnen nog wat variatie geven. Maar de mééste puzzels hebben nu niks van deze capriolen meer in diens oplossing.

**Verbetering #3:** je kan de uitgang niet vinden als de lichten uitstaan. Anders deed de computer bij elke puzzel gewoon _zo snel mogelijk_ de lichten uit en liep daarna naar de uitgang. (Want ja, er waren toch geen lampen meer, je kon overal lopen!)

Dus nu moet je de lichten ook weer aanzetten voordat je de uitgang kan "vinden".

Om eerlijk te zijn ... ik weet niet _zeker_ of dit wel een verbetering is. Ik kreeg misschien wel betere puzzels met de oude regel ...

Maar dat snap ik niet. De nieuwe regel lijkt me veel logischer en sterker. Dus ik ga er voor nu mee door, namelijk:

**Verbetering #4:** de GPS-vakjes kan je dus óók niet zien als de lampen uit zijn. Hierdoor moet je beter opletten wanneer je de schakelaar aan/uit doet, want je moet minstens één keer een GPS zien. (Anders kan je, wederom, de uitgang niet "vinden".)

Deze verbeteringen samen leveren allemaal prima puzzels op, soms zelfs behoorlijk moeilijk. Maar zoals ik boven al zei: ik heb het gevoel alsof het "te weinig" is en het spel een te langzaam begin geeft. But we shall see ...

### Makkelijkere uitleg

Voor enkele elementen heb ik, net zoals bij fase 3 hierboven, de regel weer gesplitst in meerdere stappen.

Bijvoorbeeld: de eerste keer dat _trampolines_ terugkomen, werken ze zoals voorheen. Je springt twee vakjes, negeert de eerste.

Even later pas komt de "volledige regel" (voor Ronde Ogre) in het spel: na de sprong gaat Ronde Ogre _gewoon door met bewegen tot ze iets tegenkomt_. Dat is wat ze doet: blijven bewegen tot ze iets raakt. Maar omdat spelers de trampoline kennen uit het vorige deel, vond ik het verwarrend om zomaar aan te nemen dat ze deze aanpassing begrijpen.

Vandaar zo’n splitsing, maakt alles net wat makkelijker. Meer "stapje voor stapje".

Zodoende denk ik wél dat dit spel een hele goede **tutorial** heeft. Alles krijgt de tijd, alles wordt gesplitst tot de _simpelst_ mogelijke stapjes, ik denk dat iedereen dit moet begrijpen.

En ja, daar ben ik heel blij mee, want dat is helemaal niet zo vanzelfsprekend. Het heeft me jaren gekost om überhaupt het belang van "_alles kan simpeler"_ te begrijpen, laat staan de uitvoering ervan.

 (De puzzels, daarentegen, kunnen behoorlijk pittig worden :p)

### En weer door

Dus ja, fase 1 is af (alle werelden, levels, uitlegplaatjes, etc.). Binnenkort test ik het, maar ik verwacht weinig problemen.

Dus ik ga meteen door met fase 2: de mol en de eerste stapje richting de hoofdregel van "slapen".

Daarna test ik het weer.

Dan maak ik fase 3, en aan het einde _daarvan_ zal ik een goed beeld hebben van hoeveel tijd we nog hebben. Wordt die rugzak te veel? Passen die andere wezens nog? Moet ik inderdaad een paar vakjes (zoals de gevangenisdeuren) aan het begin van het spel weghalen om ruimte te creëren?

We shall see!

### Enkele _playtests_ later

Zo, het spel heeft een groot deel van die inhoud gekregen (fase 1 + de helft van fase 2), en is weer behoorlijk getest.

Dit zijn de conclusies:

  * De levels zijn veel beter dan ik dacht! Omdat ik zelf het spel maak, en alle puzzels test met behulp van de computer, heb ik een vertekend beeld van de moeilijkheidsgraad. Dus ik dacht dat levels wat saai of makkelijk zouden worden, maar kijkend naar mijn testspelers ... lijkt het eigenlijk perfect. Misschien zelfs een tandje te lastig.
  * Het tempo is ook prima. Uitleg van nieuwe onderdelen gebeurt snel, maar niet te snel. (De beslissing om geen enkele wereld groter dan 20-25 vakjes te maken, zelfs als ik genoeg levels daarvoor heb, lijkt ook een juiste.)
  * Die splitsing tussen "zekere vakjes" en "twijfelvakjes" werkt eigenlijk best goed. Hierdoor kan elke wereld _simpel_ beginnen (terwijl het de nieuwe regel uitlegt, en niks anders), maar gaandeweg automatisch _uitdagender_ worden. Waarschijnlijk houd ik die tweedeling nog wel een tijdje.
  * Ja, het is een goed idee om een wereld te doen met "de mol moet _eindigen_ op z’n uitgang" ... maar het daarna weer te vervangen door de regel "de mol _verdwijnt_ als die op zijn uitgang komt" Dit is namelijk _makkelijker_ (want je kan dus in principe op elk moment de mol "afleveren"), maar geeft tegelijkertijd meer _mogelijkheden_.
  * **Het belangrijkste:** er zijn wel een paar regeltjes die _gestroomlijnd_ zouden kunnen worden ...

### De vervelende regeltjes

Oké, er zijn een paar dingetjes die verwarrend kunnen zijn:

  * "Breekbare" vakjes breken af als je ervan _afstapt_. Dat betekent dat ze dus óók afbreken als je tegen een matrasmuur aanloopt, omdraait, en dan in de andere richting verderloopt.
      * Want ja, het eerste vakje dat je verplaatst, stap je nog steeds ervan af. Qua regels compleet logisch, maar voor sommigen "counter intuïtief".
  * Dingen die je denk ik als speler zelf moet ontdekken:
      * Je hebt dus de matrasmuur die een "no move turn" kan opleveren.
      * En de trampoline vermindert je slaap counter dus met _twee_, want ja, je beweegt _twee vakjes_. Maar dit is wederom iets wat compleet logisch is.
  * Je zicht wordt gecheckt aan het einde van _jouw_ beurt. Daarná worden de levende wezens, zoals de mol, afgehandeld. Dat betekent dat je alsnog _verliest_ als de mol, na jouw beurt, op een lamp gaat staan waar je naar kijkt. Want op het moment dat je keek, was ie er nog niet, en zag je dus een lamp.
  * De mol doet jouw laatste _input_ na, niet jouw laatste _beweging_. (Dus als een matrasmuur je omdraait, bijvoorbeeld, gebruikt hij niet de richting waarin je uiteindelijk gaat. Nee, hij doet gewoon de richting na _waarin je hebt geswipet_.)
  * Het "GPS"-vakje wordt pas omgezet naar reguliere lampen _aan het eind van de gehele beurt_. Dus niet op het moment dat je ze ziet. Die vertraging zit erin omdat het de boel flink overzichtelijker maakt, zowel in de code als voor de speler.
  * Het "zware muur"-vakje (dat slechts bestaat om jou het idee van de _sleep counter_ stap voor stap uit te leggen) blokkeert óók de mol, volgens precies dezelfde regel.
      * Wederom, hartstikke _logisch_ om te zeggen dat iets voor _iedereen geldt_, maar voor sommigen is het juist een extra denkstap. Maar, in dit geval, kan ik er wel gewoon het symbooltje van de mol opzetten ter herinnering.
  * Je _stappenteller_ wordt geüpdatet aan het _einde_ van je beweging. Dus éérst beweeg je, dan check je of er iets gebeurt op dat nieuwe vakje (99% van de tijd is dat niet zo), en dan telt hij deze beweging op je stappenteller.
      * Dit wordt eigenlijk alleen belangrijk véél later, met enkele vakjes die je teller ophogen/verlagen tijdens een beurt. Maar mijn code was in eerste instantie _niet consistent_ hierover, wat een goed teken is dat spelers er misschien ook _even aan herinnerd moeten worden_.

Ik vind dit vervelend.

Ik wil dingen altijd simpeler maken, _cleaner_, gestroomlijnder.

Aan de andere kant komen al deze regeltjes voort uit de _logica_ van het spel. Als ik ze verander, worden ze misschien in eerste instantie "intuïtiever" of "makkelijker te zien", maar krijg je juist méér uitzonderingen!

(Want ja, alle andere vakjes, en heel Vierkante Ogre, werkt met het idee "je checkt je zicht aan het einde van je beurt". Als ik dat nu ineens verander na "je checkt je zicht aan het einde van _alle beurten van alle wezens_", wordt dat juist een extra uitzondering.)

**Opmerking:** vanaf nu ga ik de sleep counter hernoemen naar de _step counter_ (of de stappenteller in het boek). Want dat is wat het is. Het telt letterlijk je stappen. Het telt niet je "slaap" :p Dus die naam is veel duidelijker en intuïtiever.

### Weer een moeilijke keuze

Dus **wat is mijn beslissing voor nu?**

De regeltjes die het makkelijkst worden vergeten (of verkeerd opgevat) krijgen een kleine pop-up ergens van "herinnering: dit en dit is dus hoe het werkt", net zoals de "tutorials" opkomen aan het begin van elke wereld.

In het **prentenboek** haal ik de ruwe randjes er compleet vanaf:

  * Ik kies geen enkele puzzel die één van de regeltjes hierboven gebruikt. (Of een uitzondering vormt op wat voor manier dan ook.)
  * Ik laat vakjes weg die puzzels doorgaans in één klap _veel moeilijker_ maken. (Zoals de trampoline. Het is heel lastig voor mensen om te zien wat die precies kan doen, want je springt 2 vakjes, eventueel over gaten of muren heen. Het computerspel _helpt je enorm daarbij_, maar op papier kan dat niet, want je moet alles zelf bijhouden.)
  * Ik laat vakjes weg (uit Vierkante Ogre) die vooral met _zicht_ te maken hebben. Mede omdat je de "view counter" mist, zijn deze gewoon lastig om bij te houden, en het kost te veel tijd/ruimte om ze nóg een keer uit te leggen.

Dit betekent dat je makkelijkere puzzels krijgt, minder speciale vakjes, en dat ik hiervoor _extra puzzels moet laten genereren_ (volgens specifieke voorwaarden).

Maar het is tenminste gestroomlijnd en goed te spelen, ook voor (jonge) kinderen. Want nu komen er waarschijnlijk maar vier "onderdelen" in Ronde Ogre:

  * Hé, Ronde Ogre beweegt zo ver ze kan ( + wat variaties)
  * Hé, de mol doet precies jouw beweging na ( + wat variaties)
  * Hé, de stappenteller zorgt ervoor dat je een slaapcyclus krijgt ( + wat variaties)
  * Hé, er zijn meer levende wezens zoals de mol ( + wat variaties)

Als ik het goed regel, past het "stappenplan" hiervoor op één pagina, en blijft het behapbaar en overzichtelijk.

## Nog meer moeilijke keuzes

Inmiddels ben ik halverwege het implementeren van fase 3. Enkele dingen zijn mij opgevallen:

  * **Klein is fijn:** Vaak zijn de _kleinste_ puzzels, aan het begin van een wereld (die vooral de nieuwe regels/vakjes moeten uitleggen), het meest interessant. Grotere puzzels zijn ook uitdagend, en interessant op hun eigen manier, maar bij de 3×3 puzzels dacht ik het meest "aah wat slim" of "aha! Ik heb het!"
  * **Selectie maken:** Het computerspel wordt veel te groot. Ik zal voor het prentenboek sowieso een _selectie_ moeten maken en puzzels moeten genereren _die alleen in het boek komen_.
  * **Toch een deel 3:** En ja, omdat het zo groot wordt, zal er toch een deel 3 moeten komen die de allerlaatste ideeën gebruikt. Deze zal wel sowieso een stuk kleiner worden, want zóveel is er niet meer over.
  * **Het slaapmechanisme maakt veel vakjes een beetje "waardeloos".**

De eerste twee punten betekenen dat ik _waarschijnlijk_ voor het prentenboek een unieke verzameling 3×3 puzzels ga maken. Dat maakt puzzels sowieso meer behapbaar en gestroomlijnd (zeker in prentenboekvorm), maar zal ook veel pagina’s moeten schelen.

Maar vooral dat laatste punt is belangrijk.

### Vakjes "verouderen"

Enerzijds is dit **goed**. Ik heb met dit project geleerd hoe _nuttig_ het is om vakjes te "verouderen".

**Voorbeeld:** de "grote schakelaar" die aan het begin wordt geïntroduceerd, zet alle lampen uit. Waarom zit deze in het spel? Omdat het je _voorbereid_ op de slaapregel: als Ogre slaapt, _ziet_ ze niks, dus ook geen lampen!

Maar als deze regel eenmaal is geïntroduceerd, dan hoeft die schakelaar dus nooit meer in een level te zitten! Hij is "onnodig" geworden, vervangen door iets beters, en kan weg.

**Voorbeeld:** veel ideeën beginnen als een _vakje_. Dat is lekker groot, en goed zichtbaar, en duidelijk ... maar neemt daardoor ook veel ruimte in. Daarom wordt het vaak even later vervangen door een _muur_ die (ongeveer) hetzelfde doet, zodat alle levels daarna weer wat minder vol zijn en ruimte maken voor de _volgende_ nieuwe regels!

Op deze manier kan je spelers heel makkelijk steeds meer/nieuwere regels aanleren, terwijl puzzels simpel blijven.

### Vakjes verliezen hun nut

Anderzijds is dit **niet zo handig**. Het zorgt ervoor dat vakjes – die ik misschien heel leuk of speciaal vind – eigenlijk geen nut meer hebben.

**Voorbeeld:** neem de "wakkermuren" (en het broertje de "slaapmuren"); je mag hier _alleen doorheen lopen_ als je wakker bent. Ik vind het ontwerp mooi, het is simpel, en de eerste testen lieten zien dat het heel nuttig was.

Maar ... als Ogre in slaap valt, dan gaat ze slaapwandelen. Dat betekent dat ze sowieso één stap per keer zet. Dus de kans dat zo’n muur überhaupt invloed heeft ... is erg klein.

En dat werd bevestigd door mijn simulatie. Als ik hem _dwong_ om de muur te gebruiken, kon ik tien minuten wachten, en er kwam geen enkele puzzel terug.

### Algemene regels

Een ander probleem is dat ik één _algemene/consistente regel_ wil hebben voor hoe andere wezens met deze vakjes omgaan.

Tot nog toe was de regel: de mol wordt óók geblokkeerd door muren, net zoals Ogre, volgens dezelfde regels. Hij "triggert" simpelweg niets. (Dus hij kan, bijvoorbeeld, niet een deur sluiten.)

Ik zou een uitzondering kunnen maken voor die "wakkermuren". Zeggen dat de mol daar óók alleen doorheen mag als Ogre wakker is.

En hoewel dat sneller puzzels oplevert ... is het ook inconsistent. De ene keer geldt het wél voor de mol? De andere keer niet? En alle andere levende wezens dan? De puzzels worden wel moeilijker, maar vooral _omdat de speler er niks meer van begrijpt_.

Dus ik hou denk ik toch voet bij stuk: die speciale muren houden de mol gewoon altijd tegen.

### Hoe lossen we dit op?

Ik heb geen idee wat slim is.

**Oplossing 1:** Ik zou al deze "nutteloze" vakjes weg kunnen halen. Het probleem? Dat is jammer, want ik heb ze bedacht omdat ze iets interessants hebben, een groot potentieel.

**Oplossing 2:** Ik zou deze vakjes naar _voren_ kunnen halen. Dus dat ik de slaap/wakker muren introduceer vóór de slaapregel, omdat ze op dat moment nog meer nut hebben. Het probleem? Dan zijn het een soort eendagsvliegen die het spel opvullen, is dat het waard?

**Oplossing 3:** Ik zou deze vakjes juist naar _achteren_ kunnen verplaatsen. Dat ik eerst enkele andere vakjes introduceer die _helpen_ om nut te geven.

Bijvoorbeeld: ik heb vakjes gepland die je _stappenteller_ eentje omhoog of omlaag gooien – daarmee kan je natuurlijk beïnvloeden wanneer je wel/niet wakker bent, en daardoor die wakkermuren wel/niet gebruiken. Of vakjes waarmee je _direct_ je huidige status reset.

**Oplossing 4:** Ik _verander_ deze vakjes naar iets dat beter is. Het probleem? Ze worden _ingewikkelder_.

Bijvoorbeeld, ik kan "wakkermuren" veranderen naar:

  * "Je kan er alleen doorheen _lopen_ én _kijken_ als je wakker bent"
  * "Als je erdoorheen bent gelopen, verdwijnt de muur"
  * "Als de _mol_ erdoorheen loopt, verdwijnt de muur"

Dan krijgt het meer nut en kan de computer het beter gebruiken (voor betere puzzels). Maar dat is moeilijker te onthouden en gebruiken, en dit spel is al niet al te makkelijk!

### Wat heb ik uiteindelijk gekozen?

Optie 3 bleek het beste. Ik hoef de regels niet moeilijker te maken, ik hoef niks weg te snijden uit het spel, en er zijn geen eendagsvliegen.

Het gevolg is wel dat ik de _volgorde_ op de schop moest gooien en een hoop oude levels moest weggooien. (Maar ach, de computer genereert ze zo opnieuw, dus zo erg is het niet.)

De volgorde is nu:

  * "Reset" => dit vakje zorgt ervoor dat je iets _minder_ in de slaaptoestand zit
  * "Eureka" => dit vakje heeft een getal; je stappenteller moet boven of onder dit getal zijn (afhankelijk van welke eureka het is).
      * Deze vakjes zijn het "broertje" van de vergrootglazen uit Vierkante Ogre. In dat spel waren deze vakjes erg succesvol in het langzaam uitleggen van gewoontes (zoals de stappenteller bijhouden) én genereren van goede puzzels, dus dat doen we lekker opnieuw.
  * "Ophoger/Verlager" => verandert je teller met één in een bepaalde richting.
      * Ietsje lastiger "to wrap your head around", daarom komen ze later, en wil ik eerst opbouwen met de andere vakjes.
      * Máár ... als je al deze vakjes hebt gekregen, heb je veel meer _variatie_ in de slaapcyclus, en denk ik dat "wakkermuren" eindelijk goed tot z’n recht kunnen komen! Dus ...
  * Slaapmuren/Wakkermuren

Vooralsnog lijkt dit heel goed te werken.

Hiermee leren we ook een volgende wijze les: **sommige puzzelelementen werken niet in isolatie, maar wel gecombineerd.**

Ik moet dus niet altijd _forceren_ dat de eerste 5-10 puzzels van een wereld _alleen het nieuwe element gebruiken_. In sommige gevallen moet je deze combineren met 1 of 2 al eerder uitgelegd vakjes, zodat het beter tot z’n recht komt en _juist_ een betere introductie vormt.

Ik ga deze werelden maken, en dan zijn we al bij de laatste fase! (De dynamische wezens, want het rugzakje gaat met 95% zekerheid naar een soort deel drie.)

## Tussenresultaten II

Inmiddels heeft het spel zo’n 20+ werelden, 500 levels, en fases 1-3 helemaal ingebouwd. Het is weer een aantal keer getest door anderen en ... het werkt helemaal prima 🙂

Elk nieuw element is interessant. Men vindt het tempo (grotendeels) goed: niet te snel, niet te langzaam, elke wereld is zo groot als hij moet zijn. Ik hoef niks extra uit te leggen, of op te helderen, want de _tutorials_ (en eerste paar _introductory levels_) doen dat goed.

(Desondanks ga ik nog wel _iets_ van perfectionisme toelaten en de eerste werelden hier en daar inkorten, of iets meer variatie geven, of puzzels iets mooier eruit laten zien.)

Het spel is nu even groot als Vierkante Ogre. (Sterker nog, het is _ietsje_ groter.) Het werkt compleet, alles heeft de juiste uitleg en animatie, het is in principe "af".

Ik kan overwegen om hier nu te stoppen. Dan kan ik in een paar dagen het spel helemaal afmaken (alle fouten eruit, opschonen, geluidseffecten, etc.) en dan is dat gedaan.

Maar dat doe ik niet. Waarom?

  * Omdat het veel dingen hergebruikt van het origineel. Als je die weghaalt, houd je een spel over dat een stuk kleiner is dan Vierkante Ogre, en minder nieuwe ideeën opwerpt. Dus daarvoor moet ik compenseren.
  * Omdat ik sowieso een _selectie_ ga maken van de beste puzzels en elementen voor het prentenboek, maakt het niet uit als het computerspel een stuk groter is. Bovendien kan ik natuurlijk een _betere_ selectie maken, als ik véél meer heb om uit te kiezen!
  * Omdat dit spel de _ideale plek is_ om dynamische wezens uit te leggen. Je hebt immers al de _mol_ gezien, en veel wezens die ik heb bedacht werken perfect samen met het idee van de Ronde Ogre. Als ik dat doorschuif naar het derde deel, past het een heel stuk minder.

Dus we gaan lekker door!

**Opmerking:** overigens zijn er wel héél veel kleine dingetjes verbeterd ondertussen. Ik heb de code en de structuur flink opgeschoond, waardoor alles sneller laadt en verschijnt, en het spel toch een kleinere grootte heeft. Ik heb toegestaan dat je je laatste zet terugneemt _zelfs als je al hebt verloren_ – maakt het gewoon minder "frustrerend" op de allermoeilijkste levels. Ik heb regeltjes gestroomlijnd, fouten uit de code (of simulatie) gehaald, extra checks toegevoegd, etc. Maar deze devlogs zijn voor een algemeen idee van het proces – en ze worden al lang genoeg – dus _aaaal_ die details laat ik weg.

## Fase 5: Levende wezens

### Het plan

Dus, wat staat er op het programma?

Dit moet ik stap voor stap gaan uitleggen aan de spelers:

  * **Tutorial #1:** dynamische wezens voeren hun beurt uit ná jou. Je raadt het al: de _mol_ was je allereerste dynamische wezen!
      * Hier verschijnt voor het eerst een "getal" op de mol.
      * Verder is dit level supermakkelijk, een standaard "mollevel"
  * **Tutorial #2:** elk wezen heeft een getal. Dat is de _volgorde_ waarop ze hun beurt uitvoeren.
      * Hier verschijnt voor het eerst een _overzicht_ van de dynamische wezens (welke er zijn + hun volgorde) aan de zijkant.
      * Wederom een standaardlevel.
  * **Tutorial #3:** een nieuw dynamisch wezen, waarschijnlijk de _rotator_. (Draait elke beurt een kwartslag, mag jou niet zien.)
      * De rotator staat afgesloten van jou, zodat ik de volgende tutorial in het level hierna pas kan doen ...
  * **Tutorial #4:** zoals je al weet, kan je niet door deze wezens _kijken_ of _lopen_. (Dit wordt ook aangegeven als een "reminder").

Vanaf dat moment volgt het weer de normale structuur: een nieuw wezen per wereld, inclusief tutorialplaatje, en 10-20 puzzels om deze te begrijpen.

### Twijfels

Maar er zijn enkele dingen waarover ik twijfel:

  * Dit spel kent echt véél speciale vakjes en inmiddels ook wat extra regels (en "doelen" die moet volbrengen voordat je kan finishen). Hoe kunnen we dat verminderen? Hoe kunnen we het voor iedereen, van alle leeftijden, simpel en leuk houden?
      * Ik wil kijken of ik een aantal vakjes weer kan "verouderen" ( = permanent weghalen vanaf nu), als ze qua functie ongeveer overeenkomen met een wezen.
      * Bovendien ga ik natuurlijk de eerste levels met dynamische wezens _supermakkelijk_ maken, en alleen standaardmuren en -vakjes gebruiken.
      * (En mocht alles toch niet in _Ronde Ogre_ passen, kan ik deze puzzels nog overhevelen naar die deel drie, omdat ze zo "vanilla" zijn.)
  * Sommige wezens gebruiken verschillende _terreinsoorten_. (Bijvoorbeeld, kwallen bewegen alleen over watervakjes.) Ga ik dat _in één keer uitleggen_ in de eerste wereld? Of ga ik, bij elk wezen, _twee tutorials maken:_ "hé nieuw terrein" + "hé nieuw monster dat dit terrein gebruikt"
  * Veel wezens hebben een regel waaraan ze niet altijd kunnen voldoen. (Bijvoorbeeld, als motten een lamp zien, gaan ze erop af. Maar wat als ze géén lamp zien?) De beste oplossing in vrijwel alle gevallen is om te zeggen: als een wezen niks kan, draait deze een _kwartslag_.
      * De twijfel is: moet ik dit een _algemene regel_ maken die automatisch voor _alle wezens geldt?_ (En dat bijvoorbeeld een icoontje op de wezens je daaraan herinnert?)
      * Of zet ik dit in de tutorials erbij, omdat het alleen geldt voor ~50-75% van de wezens?
      * Die eerste optie zou het wel enorm _versimpelen en stroomlijnen_. Bovendien zorgt het ervoor dat je als speler géén wezen vergeet, want je moet ze altijd (op z’n minst) even draaien. Aan de andere kant geeft het me nóg minder opties en dingen die ik zou kunnen toevoegen.

### Eureka moment

Eerder noemde ik al dat het erg lastig was om de computer te _dwingen_ deze wezens te gebruiken. (Ze zijn zo "dynamisch", zo "vrij", dat de computer ze makkelijk ergens in een hoekje kan zetten en de hele puzzel negeren.)

Maar toen realiseerde ik: **dit probleem heb ik al opgelost!**

De eerste _check_ die ik inbouwde was: "leeg het hele veld, check of de oplossing hierdoor korter wordt. Zo niet, dan hebben al die speciale vakjes dus _geen zin_, en is de puzzel slecht."

Dat kan ik nu ook gebruiken!

Maar met enkele aanpassingen. Dynamische wezens blokkeren namelijk je _zicht_ en je _lopen_, dus ik moet niet de _wezens_ weghalen ... maar gewoon het hele vakje. (Want dan kan je er niet meer doorheen zien of lopen.)

Dus de check wordt: "vervang alle dynamische wezens met lege ruimte, check of de oplossing hierdoor korter wordt. Zo niet, dan doen die speciale wezens dus _niks_, en is de puzzel slecht."

En ta daaaaa! Nu worden de wezens netjes gebruikt!

**Opmerking:** sommige wezens krijgen een "speciale behandeling". Hun invloed wordt niet gemeten door het langer maken van de oplossing, maar gewoon doordat ze worden _gezien_ of iets anders _triggeren_. Voor deze wezens houd ik weer een lijst bij (_triggeredDynamicIDs_) en check aan het einde of die lijst gevuld is met de juiste waardes.

**Opmerking:** bovendien heb ik hiermee een grote fout in mijn code gevonden ... Het is ergens een wonder dat alle puzzels hiervoor wél goed werkten, want het was best een serieuze fout. (Samenvattend: bij het verplaatsen van dingen, stopte ik per ongeluk de _oude versie_ van het ding in het _nieuwe vakje_, in plaats van de _nieuwe versie_. Dat werd pas duidelijk toen dynamische wezens op magische wijze _verdwenen_ uit de puzzel :p)

**Opmerking:** natuurlijk kan je eenzelfde check nog op andere plekken doen. Terreintypes, bijvoorbeeld. Als een level verschillende terreinen heeft (grasvakjes, watervakjes, etc.) vervang ik die óók door het "standaardterrein" en kijk of dat de oplossing verandert.

### Tweede Eureka moment

Na het inbouwen van meerdere wezens, kwam ik enkele patronen (en problemen) tegen.

**Patroon #1:** Ja, bijna _alle_ wezens draaien als ze niet kunnen bewegen. Dus het lijkt me verstandig om dat de standaardregel te maken: **als een wezen niet kan (of wil) bewegen, draait die een kwartslag** (naar rechts). Versimpelt code gigantisch, versimpelt ook de regels die de speler moet onthouden.

(Die _ijsbeer_ van hiervoor draait nu ook gewoon een kwartslag, in plaats van een halve slag. Lekker simpel, lekker consistent!)

**Probleem #1:** De computer vindt het leuk om wezens in een hoekje te zetten en niet meer te laten bewegen. Dus we voegen een extra check toe: als een wezen _niet_ heeft bewogen de hele puzzel, is het een slechte puzzel.

**Probleem #2:** enkele wezens maken je "wakkerder" als je ernaar kijkt. Het probleem is alleen ... de "check" voor wakker zijn/in slaap vallen gebeurt _vóórdat_ het kijkalgoritme plaatsvindt.

Het zou extreem onhandig en inconsistent zijn om, alleen voor deze wezens, de volgorde te veranderen. (Als dat überhaupt nog kan ... )

Dus dit kan simpelweg niet. Wat wél kan ...

**Patroon #2:** is checken of een dynamisch wezen _náást_ de Ogre staat. Dat wilde ik sowieso gebruiken en diezelfde code kon ik eigenlijk naadloos op de vorige wezens plakken. Nu word je _wakkerder_ van naast een vuurvliegje staan – die geeft immers een beetje licht af.

(Het is geen probleem, trouwens, om een wezen te maken waardoor je meteen _verliest_ als je ernaar kijkt. Dan is het namelijk gewoon een lamp die kan bewegen :p Dat past makkelijk in de code. Nee, het probleem zit hem in die _step counter_ en de volgorde waarin handelingen plaatsvinden. Die wil ik gestroomlijnd houden en zeker niet meer aanpassen in dit stadium.)

Dus ik heb er weer een flinke dag programmeren, testen, werelden maken, zien dat er van alles mis is, en meer ongein op zitten.

Maar bijna alle levende wezens lijken nu te werken 🙂 Er komen goede puzzels uit, de regels zijn simpel en gestroomlijnd.

### En we gaan door

Het is nu weer eventjes later ... en ik heb gemerkt dat het nog niet perfect is. (Maar het gaat de juiste richting op.)

**Probleem #1:** De wezens die een speciale bodemsoort nodig hebben, werken eigenlijk alleen als die soort _echt heel veel in het level zit_. En zelfs dan zitten ze soms vooral in een hoekje heen en weer te bewegen.

**Probleem #2:** Ook is er nu weinig _invloed_ op wat de wezens doen. Vaak komen ze toevallig op je pad en moet je er dus omheen. Of kan je zo’n wezen slim gebruiken wanneer deze tussen jou en een lamp staat. Maar het is relatief zeldzaam en erg "indirect".

Aan de andere kant, als ik dingen ga zeggen als: "deze wezens doen óók jouw laatste zet na" wordt het al snel ingewikkeld.

**Probleem #3:** ik merk dat vliegende wezens het _beste_ functioneren. (Zij negeren muren en lege vakjes en dergelijke, want, tja, ze kunnen vliegen.) Ze hebben gewoon meer vrijheid om te bewegen en doen daarom interessantere dingen.

Het gevolg? Ik wil kijken of ik zoveel mogelijk wezens kan laten vliegen. Of op z’n minst muren kan laten negeren of langere afstanden afleggen.

**Probleem #4:** een kwartslag draaien is in veel gevallen eigenlijk _net_ te weinig om snel te bewegen/iets te doen. Maar een halve slag is te veel. (En maakt het zeer waarschijnlijk dat een wezen _niet_ kan bewegen, het hele level lang.) Dus misschien moet ik levende wezens óók gebruik laten maken van de draaikolken?

Maar dat zou dan de _enige_ uitzondering moeten zijn. (Want verder negeren wezens alle speciale vakjes.)

Sterker nog, misschien moet ik een **speciale draaikolk** maken, die er net wat anders uitziet. Waarom? Omdat "kwartslag naar links" zinloos is, want het wezen gaat dat toch weer ongedaan maken daarna. Dus één "levende draaikolk" die een halve slag draait lijkt me voldoende.

**Opmerking:** ik was vergeten te zeggen dat ik inderdaad heb ingesteld dat **elk wezen maximaal één keer voorkomt**. (Dus geen twee ijsberen in een puzzel, bijvoorbeeld.) Dit versimpelt alles, zonder dat er iets verloren gaat, en maakt het véél makkelijker om deze puzzels over te nemen in het prentenboek.

### En we gaan er maar mee door

Tja, veel twijfels, kleine probleempjes, niet optimale puzzels. Maar ja, zo is het leven.

Ik ga nu maar alles inbouwen zoals ik _denk_ dat het gaat werken. Dan zien we daarna wel of er nog (grote) veranderingen nodig zijn!

(Bovendien heb ik, zoals altijd, tijdens het inbouwen vele nieuwe ideeën gekregen voor wezens. Maar dat gaat zéker niet allemaal passen in dit spel. Het zijn er nu al 15.

Dus ik wil kijken of ik een soort _overlap_ kan maken met deel 3: levende wezens worden wel geïntroduceerd bij Ronde Ogre, maar na de meest interessante – die ook goed samenwerken met haar _slaapmechanisme_ – stopt het spel. In deel 3 begint het dan met een stuk of 5-10 nieuwe levende wezens.)

**Update #1:** er zaten weer héél veel kleine foutjes in mijn code. Dat gebeurt gewoon als zo’n project gigantisch groeit. Bovendien is code soms correct _voor één ding_, maar niet meer als er ineens _meerdere wezens/vakjes gebruik van maken._ Hier gaat veel tijd verloren, omdat het vaak piepkleine foutjes zijn die slechts 1 op de 10 keer voorkomen.

_"Hoe los je deze kleine onzichtbare foutjes dan op?"_

Nou, dit is ongeveer het stappenplan:

  * Lees alle relevante code na. Check elke regel voor de logica, een typefout, een overduidelijke miskleun.
  * Check of de logica _precies hetzelfde_ is tussen de simulatie en het computerspel. (Soms doet de simulatie het eigenlijk goed, maar is mijn visualisatie gewoon compleet verkeerd. Als je deze optie niet overweegt, kan je zo urenlang zoeken en niks vinden, terwijl de oplossing letterlijk voor je neus ligt.)
  * Laat de computer stukken tekst _printen_ terwijl het puzzels maakt, die exact de waardes van variabelen weergeven. (Dus bijvoorbeeld: "Beurt 6 – draaiing Ogre is _links_") Als hier iets wordt geprint dat niet klopt, weet je dat in dat stukje code dus iets niet klopt.
  * Vraag de computer hele extreme puzzels te bedenken, in de hoop de fout op te wekken.
  * Als dat allemaal niet werkt ... tja, dan moet je _alles uitzetten_, _helemaal terug naar de basis_, en dan langzaam één voor één _alles weer inschakelen._ Ergens zal je de fout moeten vinden. De vraag is of dat gebeurt vóórdat je het hele project maar opgeeft :p

**Update #2:** nog een check. Ik merkte dat de computer veel wezens pas _aan het einde_ gebruikte. Dus de oplossing was 10 beurten lang precies hetzelfde, met een wezen dat in een hoekje stilstond, maar alleen bij de _laatste zet_ moest je even een omweg nemen. Saai natuurlijk. Telt niet echt als "gebruiken" van de wezens.

Dus de nieuwe check is: de _eerste_ _helft_ van de normale oplossing en degene _zónder_ wezens MOET verschillend zijn. Heel makkelijk in te bouwen (letterlijk vijf getalletjes vergelijken), maar maakt een wéreld van verschil!

Maarmet die veranderingen kan ik, gelukkig, melden dat het allemaal werkt! Nu worden de wezens écht gebruikt en alle puzzels zijn uitdagend.

Dus ik ga bovenstaand plan gewoon op volgorde invoeren. (Puzzels maken, wereld samenstellen, tutorials toevoegen, en natuurlijk alle plaatjes/animaties/code.)

In het spel zullen je eerste paar wezens _niet_ perse allemaal met zicht of het slaapmechanisme te maken hebben. Waarom? Omdat ze simpeler zijn en helpen met dit nieuwe systeem aanleren aan spelers.

In het prentenboek, daarentegen, zullen deze verdwijnen en alleen de wezens tevoorschijn komen die _echt alleen met Ronde Ogre (en het thema "zicht") samenwerken_.

**Update #3:** de "mot" heeft heel veel _ruimte_ nodig, anders zijn er niet genoeg lampen én kan deze ze niet goed zien. (En zal daardoor dus niet bewegen en geen enkele invloed hebben op de puzzel.) Dus in die wereld heb ik alles extra teruggeschaald en zitten weer iets meer grote levels. Waarschijnlijk blijf ik daarna in de "terug geschaalde" versie (waarin _minder_ speciale vakjes worden geplaatst), want het is toch nét wat overzichtelijker en beter om te speler.

(Met deze levende wezens erbij gaan de puzzels weer naar een heel nieuw niveau qua moeilijkheid, dus ik vind het wel nodig om dit te balanceren door op andere plekken enorm te versimpelen.)

## Fase 5 is Afgerond!

Zo, de laatste werelden/puzzels van het spel zijn gedaan! (Nou ja, ik moet nog even de puntjes op de i zetten, maar het is zo goed als afgesloten.)

Ik heb uiteindelijk inderdaad besloten om het _kort_ te houden in Ronde Ogre met de levende wezens. Slechts een handjevol heeft specifiek met haar te maken en die wil ik natuurlijk nu gebruiken. Allerlei andere wezens passen beter in het laatste deel van de trilogie.

Bovendien is het spel nu al ongelofelijk lang/groot, dus ik probeer weg te snoeien waar ik kan. Daarover gesproken ...

### Geheime werelden

Al sinds het begin van dit hele project zit ik met het probleem "hoeveel puzzels is te veel?"

Ik wil de speler goed nieuwe elementen laten begrijpen, maar ik wil ze niet doodgooien met 30 haast dezelfde puzzels. Wat is een goed tempo? Wat is een goede hoeveelheid per wereld?

Het antwoord is natuurlijk: dat verschilt per persoon. Ik heb 5 puzzels nodig om een nieuw vakje écht goed te begrijpen, maar ik speel en maak natuurlijk véél puzzelspellen. Veel van mijn proeftesters vinden het prima dat een wereld 20 puzzels heeft, omdat ze dan richting het einde pas écht weten hoe je met dit nieuwe wezen omgaat.

En nou heb ik dus zo’n mooie simulatie die, relatief snel, heel veel _behoorlijk goede puzzels_ kan teruggeven (precies binnen de restricties die ik stel). Het zou zonde zijn om die weg te gooien, toch?

Uiteindelijk bedacht ik het concept van **geheime werelden.**

De meeste elementen hebben een _gewone wereld_ (met 15-20 levels om het aan te leren, steeds uitdagender). Maar als je die hebt uitgespeeld ... verschijnt er een sterretje ergens op de kaart. Als je daarop klikt, ga je naar een **geheime bonuswereld** met 0-20 extra levels die te maken hebben met dit nieuwe mechanisme.

Oftewel, als je het geen leuk mechanisme vindt (of je begrijpt het al helemaal, of je wilt gewoon door naar het volgende), dan kan je lekker doorgaan. Maar als je het een hele leuke regel vindt, of je begrijpt hem nog niet hélemaal, dan kan je de bonuswereld ingaan.

Ik heb dit nu al toegepast bij alle "levende wezens werelden" en het werkt perfect. Dus ik hoef het alleen nog, met terugwerkende kracht, op het begin van het spel toe te passen. (Want daar kan ik zeker 50-100 puzzels als een "bonus" zetten.)

### Details, details

Ten eerste: omdat levende wezens het veld veel meer _blokkeren_, kan ik eigenlijk niet meer dan 2 wezens kwijt op een klein 3×3 veld. Dus ondanks dat ik heb geleerd dat "klein is fijn" met puzzels, ga ik voor de laatste paar wezens toch veel grotere puzzels maken, anders is er gewoon geen _ruimte_ voor wezens om te lopen en interessante dingen te doen.

Maar dat vind ik toegestaan, want het zijn letterlijk de laatste 3-5 werelden van het hele spel, en die zouden ook het meest uitdagend moeten zijn.

Ten tweede: heel veel checks zijn een klein beetje verbeterd. Zo moet een wezen nu minstens _twee vakjes_ lopen, in plaats van "als je ook maar iets van een stap hebt gezet, is het goed". Waarom? Je raadt het al: de computer gaf mij puzzels waar de wezens gewoon 10 beurten stilstonden, en alleen in de _laatste beurt_ een lullig stapje deden.

Dit soort verstrakkingen zorgen wel dat het soms fors langer duurt om resultaten te krijgen. (Voor 4×4 puzzels, met alle wezens er verplicht in, die alle checks passeert, kan ik nu zo een half uur wachten.) Maar dat is ook prima, want het is wederom het einde van het spel, en ik kan tijdens dat halfuur alvast tekeningen maken en aan iets anders werken.

Ten derde: de _kwal_ gaat uit dit spel. (Als je in het water staat naast de kwal, word je geëlektrocuteerd en verliest.) Het had niks te maken met Ogre en haar slaapmechanisme.

De _nachtegaal_ komt in het spel. Op dit moment, heb ik alleen meerdere wezens die je ietsje _wakkerder_ maken als je erlangs loopt (want ze geven een beetje licht af). In het hele spel heb ik altijd overal een tegenhanger van gemaakt, dus dat moet ik hier eigenlijk ook doen.

(Het is niet ideaal dat de nachtegaal niks met _zicht_ doet, maar met _geluid_. Maar ik kon niks natuurlijks, intuïtiefs, simpels bedenken dat je _iets meer in slaap zou brengen_. Ja, je zou iets kunnen eten/drinken. Of je zou "in het donker kunnen gaan liggen". Maar stop dat maar eens in de laatste wereld van zo’n spel op een begrijpelijke manier :p)

### Conclusie?

Dit is fase 5:

  * Mol + Duizelaar
  * IJsbeer
  * Mot
  * Mol + terreinsoorten
  * Gloeiworm
  * Vuurvlieg
  * Nachtegaal
  * Einde spel

Voor mijn doen, heb ik dat behoorlijk kort en gestroomlijnd gehouden :p

(En we vergeten even dat ik überhaupt nooit van plan was om Ronde Ogre te maken en dacht dat Vierkante Ogre een "klein, schattig prentenboekje" zou worden met twintig puzzels.)

**Opmerking:** overigens liep ik wel tegen een probleem aan met _terreinsoorten_. Als ik twee (of meer) wezens in het level heb die hun eigen terreinsoort behoeven ... dan kreeg ik nooit puzzels van de computer terug! Er was immers te weinig ruimte om al deze terreinen kwijt te kunnen, dus de wezens konden niet (of nauwelijks) bewegen, problemen overal.

Ik heb dat opgelost door de "neutrale terreinsoort" handmatig te verwijderen in dat soort levels. Maar in het vervolg moet ik zéker een **jokerterrein** toevoegen die _alle wezens_ kunnen gebruiken. (Of een speciaal vakje dat **terrein kan veranderen/weghalen** als je erop staat.)

### En het prentenboek dan?

Daarmee is het computerspel af.

Wat ga ik met het prentenboek doen?

Ik maak een selectie van de belangrijkste elementen, waarbij ik vooral let op _thematisch belang_ (zodat het goed past binnen het verhaal en de boodschap van het prentenboek), en of het _simpel is uit te voeren in een prentenboek_.

(Alle elementen die ik heb ingebouwd en gemaakt, hebben een reden – iets interessants en uitdagends dat goed werkt met de rest van de regels. Dus dáár ga ik niet meer op letten voor het prentenboek.)

Waar moet je dan aan denken?

**Bijvoorbeeld:** aan het begin van het spel zitten een paar hele interessante vakjes, zoals de GPS. (Je moet hem één keer zien, maar daarna worden het lampen en je verliest meteen.) Maar ze zijn niet essentieel. Ik zou ze compleet weg kunnen laten uit het prentenboek, niemand die het merkt. En dat zou een verbetering zijn, want ze zijn _héél moeilijk_ om handmatig uit te voeren.

**Bijvoorbeeld:** de mol krijgt veel tijd, met muren en vakjes waar alleen _hij_ op kan. Heel leuk, maar die zijn ook niet essentieel. In veel puzzels zit de mol niet eens. En als hij er wel iets, gebruikt de computer deze vakjes niet zó vaak dat ik denk "goh, we kunnen echt niet zonder"

Voor de consistentie, gaat het prentenboek óók 16 hoofdstukken krijgen. Dus ik kan hoogstens zoveel unieke elementen meenemen.

Vervolgens genereer ik unieke 3×3 puzzels voor alle regels, waarschijnlijk zo’n 2-4 per hoofdstuk. Ik maak een speciaal screenshot in het computerspel (met enkele aanpassingen, grotere resolutie, etc.) en kopieer deze naar het prentenboek.

Klinkt simpel ... zal waarschijnlijk véél meer werk worden dan ik denk :p Maar dat is het plan.

## Conclusie

Dus, wat heb ik geleerd? Wat zijn mijn grootste wijsheden en valkuilen bij het maken van _puzzels_ (in de vorm van een computerspelletje of interactief prentenboek)?

### Wijsheid #1: klein is fijn

De beste puzzels in het spel, die ikzelf het leukst en meest uitdagend vond, waren de allerkleinste: 3×3 vakjes.

Grotere puzzels zijn ook leuk, maar om andere redenen. (Bijvoorbeeld, er is meer ruimte voor wezens om te bewegen. Of je moet aan het begin alvast nadenken of je een deur open moet maken die je pas over 10 zetten nodig hebt.)

Het probleem is alleen dat grotere puzzels automatisch een _flinke extra moeilijkheidsgraad_ met zich meebrengen en al snel overweldigend overkomen. Dat je als speler denkt "woah, hoe ga ik óóit de oplossing vinden?!" in plaats van "hmm, eens proberen of dit werkt"

Uiteindelijk heb ik dus vooral 3×3 puzzels laten maken, en de grotere puzzels komen aan het einde van een wereld, of in een optionele _bonuswereld_. Voor het prentenboek zal _alles_ 3×3 worden.

### Wijsheid #2: vernieuwen en verouderen

Een puzzelspel wil eigenlijk steeds dingen _leren_. Het wil je constant nieuwe vakjes, regels, trucjes, manieren van oplossen leren.

Maar dat kan je niet zomaar doen. Spelers moeten tijd krijgen om het te begrijpen, om er goed in te worden. Puzzels moeten niet zó bomvol worden dat je niet meer weet waar je het zoeken moet.

Hoe lossen we dat op? Met _vernieuwen_ en _verouderen_. Wat bedoel ik daarmee?

**Vernieuwen:** elk nieuw element moet kunnen worden uitgelegd in **één simpele regel tekst** en het liefst **een update zijn op een vorig element**.

Een voorbeeld: de _mol_.

  * Hij wordt geïntroduceerd met "hé, hij doet jouw laatste zet na!"
  * Enkele levels later komt er een _update_: "hé, hij wil ook naar zijn eigen uitgang toe!"
  * Enkele levels later komt er en _update:_ "hé, als hij z’n uitgang heeft bereikt, verdwijnt hij!"
language: nl
  * Een hele hoop werelden later komt de laatste _update_: "hé, de mol kan alleen over _moddergrond_ lopen"

Het resultaat is dat elke uitleg, elk nieuwe beetje informatie, _zo simpel mogelijk is_. Het is één kort zinnetje. Eén nieuw idee. Maar over tijd, als je alles samenneemt, is de mol een heel complex en uitdagend wezen geworden.

(Jij bestuurt compleet wat hij doet, en hij wil naar z’n eigen uitgang, maar kan alleen over moddergrond. En als hij bij de uitgang is, verdwijnt hij uit het level, wat óók cruciaal kan zijn voor de oplossing.)

Dit heeft natuurlijk een limiet. Je kunt niet keer op keer nieuwe regels bovenop hetzelfde mechanisme gooien, keer op keer zeggen "hé, vanaf nu is het weer helemaal aangepast!". Dat wordt juist extra verwarrend en frustrerend.

**Verouderen:** probeer zoveel mogelijk vakjes **weg te halen** als ze minder relevant zijn geworden, of vervangen door **iets beters met ongeveer dezelfde functionaliteit**.

We nemen weer de mol als voorbeeld.

  * Eerst is de regel: "de mol moet eindigen op z’n uitgang"
  * Daarna wordt hij: "de mol verdwijnt als hij z’n uitgang bereikt"

De nieuwe regel _veroudert_ de oude. De oude is overbodig geworden, vervangen, komt nooit meer terug. Dus de nieuwe regel is niet iets "extras om te onthouden" – de totale hoeveelheid regels voor de mol blijft hetzelfde.

Maar tegelijkertijd is de nieuwe regel beter. Het geeft meer mogelijkheden, meer vrijheid, meer opties, terwijl puzzels juist ietsje makkelijker worden.

**Het resultaat?** Door dit systeem toe te passen, is er geen _enkel deel van het spel_ dat méér dan een simpel regeltje nodig heeft om te worden uitgelegd.

Het spel heeft 750 levels over vele werelden, maar bij de allerlaatste levels zijn er "slechts" iets van 8 vakjes en 8 muren die kunnen verschijnen. Want héél veel van de speciale onderdelen zijn inmiddels verouderd, vervangen door iets beters, of irrelevant geworden door een frisse richting die het spel neemt.

### Wijsheid #3: als je puzzels simuleert, moet je veel _tweaken_

Voor dit spel kon ik de complete simulatie van Vierkante Ogre hergebruiken. Met één druk op de knop, gaf hij mij (eventjes later) 5 prachtige puzzels terug.

Maar dat was een valkuil.

Ronde Ogre is _anders_ dan Vierkante Ogre. Ze beweegt véél sneller, heeft haar eigen regeltjes die haar interessant maken (of dingen die juist _niet_ moeten voorkomen). Pas toen ik dit doorhad, kon ik écht goede puzzels maken.

Daarom werkten 3×3 puzzels, met weinig zetten, ook zo goed hier: Ronde Ogre beweegt zó snel ... als een puzzel 16 zetten nodig heeft is het gewoon _onmogelijk_ voor een mens om op te lossen.

Op diezelfde manier heb ik lange tijd puzzels gegenereerd met code die wel _werkte_, maar niet _ideaal was_. Er waren kleine foutjes hier en daar, waardoor de computer alleen saaie puzzels ermee bedacht. Ik eiste bijvoorbeeld dat een muur minstens één keer werd gebruikt ... terwijl minstens _twee keer_ in dit geval véél betere puzzels opleverde.

Voortaan zal ik méér aandacht besteden aan precies de perfecte getalletjes en instellingen vinden, en natuurlijk de code rigoureus nalopen op fouten, vóórdat ik op die knop druk en puzzels in het spel stop.

**Opmerking:** dit is een veelvoorkomende valkuil. Om een of andere reden denken mensen "oh, maar als het werkt voor A, moet het ook wel (precies hetzelfde) werken voor B!"

Maar dat is niet zo. Verschillende situaties, verschillende projecten, verschillende systemen ... ze vergen allemaal een _verschillende aanpak_.

Het is geen "tijdsverspilling" om de code compleet opnieuw te schrijven als je een vervolg maakt op je computerspelletje. Het is gewoon logisch, want de twee producten zijn niet exact hetzelfde. (Je zou toch ook geen autobanden onder een fiets plaatsen?)

### Wijsheid #4: _uitdaging_ is iets anders dan _streng zijn_

In eerste instantie had dit spel géén _undo_-knop. Moet je nagaan! Elke keer als je een fout maakt helemaal opnieuw beginnen!

Dit is geen "uitdaging". Dit is gewoon onnodig streng zijn voor je spelers en de ervaring vervelend maken.

Vervolgens had je wel een _undo-knop_, maar níet meer als je al definitief had verloren. (Op het _game over_ scherm.) Moet je nagaan! Elke keer als je _net_ de verkeerde kant op draait en een lamp ziet, moet je helemaal opnieuw beginnen!

Nu kan je oneindig vaak je zetten terugnemen, zelfs als je hebt verloren. Ook heb ik de code geoptimaliseerd om echt _extreem snel_ levels te laden, herladen, en veranderen. Bovendien kan je een hint vragen, waarbij je de eerste helft (naar boven afgerond) van de oplossing te zien krijgt.

(Deze verbeteringen zijn trouwens ook in Vierkante Ogre gezet. Die heb ik aan het einde geüpdatet naar het niveau van Ronde Ogre.)

Wat denk je? Mensen hebben véél meer plezier, vooral op de moeilijkste puzzels. Je kan namelijk gewoon proberen, dingen testen, rondjes lopen en zien wat precies het effect is, zonder enige angst dat je _helemaal opnieuw moet beginnen_ of ineens verliest.

Vanaf nu zal ik in al mijn spellen extreme moeite doen om alles zo (gebruiks)vriendelijk mogelijk te maken. Zelfs als dat wel degelijk betekent dat het spel "makkelijker" en "minder strategisch" wordt. (Want ja, als je toch elke zet kan terugnemen, ga je niet 5 zetten vooruitdenken. Je probeert gewoon wat en kijkt hoe het afloopt.)

### Wijsheid #5: _print_ en _digitaal_ zijn andere media

Dat wist ik al. Dat ik niet zomaar mijn ideeën van het prentenboek naar een computerspel kon brengen, of andersom.

Maar in Vierkante Ogre _probeerde_ ik om het boek en het computerspel zoveel mogelijk gelijk op te laten lopen. En dat is gelukt: de 16 hoofdstukken uit het prentenboek zijn óók de eerste 16 werelden van het computerspel, met precies dezelfde elementen en volgorde. (Daarna gaat het computerspel nog even verder met elementen die niet pasten in het boek.)

Maar ... wat is de winst? Het kostte echt véél moeite en denkwerk om dit te maken, terwijl het echt niks had uitgemaakt als ik het computerspel compleet ondersteboven had gegooid.

Als je het boek niet hebt gelezen, zie je het verschil toch niet. En als je wél eerst het boek las, dan is het toch juist leuk om variatie te hebben en andere dingen tegen te komen?

Dus voor Ronde Ogre heb ik het laten varen. Het prentenboek heeft een soort "best of", een goede selectie, van de puzzels uit het gehele spel. Op een volgorde die het beste past bij het _verhaal_ en de _plaatjes_.

Omdat ik het computerspel helemaal heb gemaakt kan ik nu véél beter die keuze maken en een véél betere selectie produceren.

En als iemand het boek heeft gelezen en méér puzzels wil? Dan staat diegene juist voor een mooie verrassing: het computerspel heeft al vanaf het begin allerlei onderdelen die het prentenboek mist!

### Wijsheid #6: elke dag iets

Er waren veel momenten tijdens dit project dat ik dacht: wat ben ik aan het doen?! Vinden mensen dit nog wel leuk? Ik heb géén idee hoe ik verder moet!

En dat is oké. Dat gebeurt bij vrijwel alle projecten.

Het belangrijkste is om toch _iets_ te doen. Twijfel zoveel je wilt, maar kies _iets_, en ga er dan gewoon een paar uur aan werken.

Zodoende zijn er vele elementen die _niet_ in Ronde Ogre zijn gekomen, maar die wel netjes een plaatje hebben, stukken code, en een hoop bijbehorende puzzels. Sommige hiervan komen misschien nog terug in het laatste deel, anderen zijn voorgoed afgeschreven.

Maar was dat verspilde tijd? Nee! Het maken van die elementen _leerde_ me dat ze een slecht idee waren, wat wel en niet werkte, en hoe ik dus wél verder moest.

Dus onthoudt: zelfs als je aan het einde van de dag uren van werk moet verfrommelen en weggooien, _je hebt iets geleerd_ en _je hebt iets gedaan_. De dag erna zal je dat Eureka moment krijgen en weten hoe het verder moet.

**Opmerking:** wel grappig. Alle speciale vakjes zitten in één plaatje waar ik ze tijdens het spel uitsnijdt (want dat is efficiënt voor de computer). Ze zijn op volgorde van het alfabet. Het eerste plaatje is een lamp en die kan ik aanroepen door een vakje met ID "a" te pakken (in de code).

En wat zit er op "b"? Helemaal niks :p Het _tweede element_ dat ik ooit maakte voor al deze spellen ... is er uiteindelijk nooit ingekomen.

Maar omdat ik het maakte, kwam ik erachter dat enkele dingen superstom waren en beter konden. Alleen daardoor kon ik Vierkante Ogre écht maken en zijn we nu hier.

### Dat was het!

Nu is het tijd om dat prentenboek helemaal vorm te geven en uit te brengen. (Klinkt als een simpele taak op deze manier, maar dat zal een maand flink zwoegen zijn.)

En daarna, of misschien al tegelijkertijd, kan ik beginnen met het laatste deel van de trilogie van de Ogres. (Met de werktitel "Driehoekige Ogre", maar dat gaat sowieso veranderen.)

Met alles wat ik heb geleerd moet dat wel het _allerbeste puzzelspel ooit_ worden. (Ik heb wat gewaagde ideeën. Hopelijk werken ze.)

Tot de volgende devlog,

Tiamo