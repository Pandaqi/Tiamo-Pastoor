---
title: Hoe ik de Levenssaga website ontwikkelde
author: tiamopastoor
date: 2023-01-22T15:00:00+00:00
language: nl
thumb: /uploads/2022/10/levenssaga_website_header-1.webp
categories:
  - Miscellaneous

---
De Levenssaga is een erg experimenteel project. Het is een raamvertelling van korte verhalen. Het probeert de hele geschiedenis van de aarde op een soort "fantasy" manier te behandelen. Ik schreef het eerste verhaal toen ik dertien was.

Maar in dit artikel zal ik uitleggen hoe het meest opvallende tot stand kwam: **de levenssaga _is_ een website_._**

Het project is niet toevallig digitaal beschikbaar. Het project _is_ een website. Puur ontwikkeld om zo makkelijk mogelijk, en zonder afleiding, alles te vinden en te lezen. 

Dit project is hier te bezoeken en te lezen: [De Levenssaga][1]!

Hoe kwam dit tot stand? Waarom koos ik hiervoor? Welke problemen kwam ik tegen?

## Stap 1: waarom een website?

**Eerste reden:** de wereld verandert. Het is cliché, ik weet het, maar het is de waarheid.

De hoeveelheid mensen die leest vanaf hun mobiel, computer, of e-reader is groeiende. Ik weet dat veel kinderen enorm zouden genieten van bepaalde boeken _als je hen kan overtuigen om het een kans te geven._ 

Maar video's en schermen leiden af. Fysieke boeken worden door de ouders niet zo snel meer gekocht. Zeker dikke boeken voelen intimiderend.

Dus ik dacht: kan ik een schrijfproject bedenken dat geheel digitaal kan worden aangeboden?

Maar ...

  * Elke keer een nieuwe website oprichten voor een nieuw boek is duur en onzinnig. Voor je het weet heb je twintig verschillende domeinnamen, met hun eigen systemen, die je allemaal moet bijhouden en betalen.
  * Alle boeken op één website is net zo onhandig. Je kan elk boek geen eigen uiterlijk of plekje geven, je hebt geen duidelijke landingspagina voor specifieke projecten, die ene website wordt _gigantisch_.

En toen vond ik een oud project terug. Iets dat praktisch al af was en ik eigenlijk direct wilde uitgeven: _De Levenssaga_.

En het paste perfect. Het is een collectie van korte verhalen in een raamvertelling. Dus elk verhaal staat op zichzelf, maar _samen_ vertellen ze een gigantisch samenhangend verhaal. Het project was opgezet om altijd te kunnen groeien, altijd te kunnen veranderen.

Het project gaat tevens over _het ontstaan van leven_. En daarin speelt evolutie natuurlijk de hoofdrol: de soort die het beste mee verandert met omstandigheden zal overleven. Dus dit project is ook gemaakt om mee te veranderen met de tijden.

**Tweede reden:** websites zijn _ideaal_! Als je het slim opzet, kan je met één druk op de knop alles aanpassen. Ook kan je zo'n website exporteren tot een formaat dat je fysiek kan printen. Na een paar dagen zwoegen, leerde ik hoe je die website omzet in een .epub (voor e-readers) of een .pdf (om te printen).

Iets dat vele uren handmatig werk zou kosten in een ander programma, is zo op te lossen als je een website hebt. 

{{% example %}}
Als ik besluit dat alle kopjes van alle hoofstukken anders moeten, kan ik dat doen met een regeltje code. In Word of InDesign was dit minstens een ramp geweest. Sommige dingen die websites met gemak doen kunnen die programma's _in het algeheel niet_.
{{% /example %}}

Het nadeel is natuurlijk dat je heel goed moet _weten hoe websites werken_. Maar dat weet ik, dus dan zie ik alleen maar voordelen.

## Stap 2: hoe voeren we de verhalen in?

### Systemen

Ik hoefde niet lang na te denken hierover. Ik koos voor het **Hugo** systeem waarin je pagina's schrijft in **Markdown**.

**Hugo** is een "static site generator". Dat betekent dat je de website geheel (offline) op je computer kan maken en vormgeven met duizenden superhandige hulpmiddelen. Zodra je tevreden bent, _exporteer_ je dit als een "statische website": folders en bestanden, niks meer en niks minder. Deze kan je simpelweg naar je server uploaden en je bent klaar.

_Waarom is dit handig?_ Het is _heel snel_. Want de server hoeft niks meer uit te rekenen of te vragen aan een database. Je website is een verzameling kleine tekstbestanden die een computer uit 1980 nog snel kan laden.

Daarnaast heb je dus hele krachtige manieren om de website aan te passen. Ik hoef bijvoorbeeld maar één regel code te schrijven om Hugo dingen te laten zien als "categorieën". Het maakt dan voor elke categorie automatisch overzichtspagina's aan. (En het kan natuurlijk meer dingen doen, zoals uitrekenen hoeveel er in zo'n categorie zit, of links aanmaken. Zo heeft de website een pagina met alle personages uit alle verhalen waarop je kan klikken.)

**Markdown** is een universele opmaaktaal die is gemaakt om zo min mogelijk in de weg te zitten terwijl je schrijft. Dus 99% van de tijd typ ik alsof ik in Word bezig ben. Maar als ik iets schuingedrukt wil, bijvoorbeeld, zet ik er sterretjes omheen: _\*dit is schuingedrukt\*_. (In plaats van de sneltoets te gebruiken of op het icoontje in een programma te klikken.)

_Waarom is dit handig?_ Het is snel en flexibel. Deze bestanden kan je in _elk denkbaar programma_ openen en editen. Ik kan binnen een minuut gigantische operaties toepassen op alle bestanden van de hele levenssaga als ik wil.

Daarnaast kan je "frontmatter" toevoegen. Dus ik kan elk verhaal of elk hoofdstuk makkelijk voorzien van extra informatie, zoals die "categorieën" of notities.

Het overzetten van de oude verhalen was wel een flink karwei. Ik begon dit project bijna 15 jaar geleden, en in die tijd heb ik allemaal verschillende programma's gebruikt. Dus alle oude verhalen hadden weer een _ander_ bestandsformaat :p Maar dat was prima, want ik moest die verhalen toch flink editen om de kwaliteit op te krikken.

### Structuur

De oude verhalen waren allemaal ongeveer 15,000 woorden in ongeveer 5 hoofdstukken.

Dit was te lang. Toen ik dit invoerde, zag ik dat pagina's een muur van tekst werden. 

Het nadeel van een website is dat het dus niet is opgedeeld in fysieke pagina's. Een hoofdstuk is ook echt _het hele hoofdstuk in één klap onder elkaar._ Dus digitale verhalen moeten, in mijn ogen, in meer stukjes worden gehakt.

Dus de verhalen moesten tussen 10,000-15,000 woorden en verdeeld in 10 hoofdstukken. Dan is het ongeveer 1,000 woorden per hoofdstuk, wat in een boek 4-5 pagina's zou zijn. 

Dus voor elk verhaal maak ik een nieuwe folder aan (met de titel van het verhaal):

  * Elk hoofdstuk heeft zijn eigen bestand. 
  * Er is een _outline_ bestand met een samenvatting van het verhaal.
  * Er is een _notes_ bestand met alle notities en opmerkingen die ik heb.
  * Er is een "_index.md" bestand wat een soort van de "hoofdpagina" is. Dáár zet ik alle informatie over het verhaal neer en dat zie je als je op een verhaal klikt.

Herinner: de website _is_ de levenssaga. Er is geen geheime andere folder op mijn computer. Wat online staat, is wat ik heb geschreven en zelf heb gebruikt. Daarom zijn mijn _outline_ en _notities_ ook beschikbaar.

(In eerste instantie was dit niet het geval. Maar ik merkte dat het veel handiger was om alles bij elkaar te houden, zelfs als het betekende dat ik moest uitkijken niet per ongeluk spoilers te geven in mijn notities. Dit is _wederom_ een experimenteel deel van het project :p)

### Specifieke vormgeving

Ook de presentatie/vormgeving van de verhalen verandert als het een website is. Dit leerde ik al snel toen ik de verhalen invoerde:

  * Gebruik dubbele haakjes voor dialoog ("bla bla"). Enkele haakjes (of andere methodes) zijn te onzichtbaar op veel schermen.
  * Zorg dat je lettertype een eigen _schuine variant_ heeft. De browser houdt je soms voor de gek door simpelweg de letters schuin te zetten van een lettertype dat dit niet ondersteunt, wat altijd lelijk is.
  * Een liggende streep, ook wel _em dash_, doe je met _drie streepjes_ (&#8212;). Niet met _twee_ (---). 
  * Laat bovendien géén ruimte eromheen, want dat is in mijn ogen minder duidelijk en geeft je browser kans om zinnen op hele rare plekken af te breken.
      * Onhandig: "Hij had gelijk – een zeldzame gebeurtenis."
      * Beter: "Hij had gelijk---een zeldzame gebeurtenis."
  * Drie puntjes (...) worden door markdown automatisch omgezet in het ellipsis karakter, zoals het hoort.
  * Gebruik _kortere paragrafen_ en _grotere lettertypes_ dan je in een boek zou doen. Dit is wederom iets dat simpelweg beter leest op schermen, die een lagere resolutie hebben dan geprinte boeken.

Hèhè, nu kon ik eindelijk de website gaan vormgeven.

## Stap 3: het belangrijkste doel

Wat heeft de hoogste prioriteit bij deze website? 

  * Makkelijk het gewenste verhaal vinden
  * Makkelijk het eerste hoofdstuk beginnen
  * Makkelijk door het verhaal heen lezen
  * En vervolgens makkelijk naar het _volgende_ verhaal gaan

### Het gewenste verhaal vinden

Eerst wilde ik de thuispagina meteen laten beginnen met het eerste verhaal. Maar dat was verwarrend en onhandig.

Toen wilde ik de verhalen oplopend laten zien (dus eerste verhaal boven, tweede verhaal daaronder, etcetera). Maar dat was opnieuw onhandig. Want dan kunnen lezers dus nooit de nieuwste/laatste verhalen snel vinden, terwijl over tijd mensen vooral _daarnaar_ zullen zoeken.

Vandaar dat ik zeg "makkelijk het _gewenste_ verhaal vinden". Dit is met grote kans het _eerste_ of het _laatste_ verhaal. 

Dus de thuispagina sorteert de verhalen aflopend (nieuwste eerst). Maar daarboven staat een tekstje van twee regels (want meer lezen mensen echt niet).

> "Welkom bij _De Levenssaga_ <span style="text-decoration: underline;">(?)</span> Begin bij het <span style="text-decoration: underline;">eerste verhaal</span>, of lees een van de laatste verhalen hieronder, of <span style="text-decoration: underline;">zoek een specifiek verhaal</span>."

Je weet waar je bent en wat alles voorstelt. Je hebt links naar de pagina over de levenssaga, het eerste verhaal, de laatste paar verhalen, en een manier om specifieker te zoeken.

Deze "specifieke zoekmethode" is simpelweg een lijst van categorieën (bundel, genre, tijdperk, ...) waarop je kunt klikken. Onderaan de pagina staat wel een algemene zoekbalk, maar dat is geen geweldige manier om door zo'n website te zoeken. (Daarover dadelijk meer.)

### Het eerste hoofdstuk

Dit kwam pas _laat_ in de ontwikkeling. Bij de eerste versie, als je op een boek klikte, kreeg je de lijst van alle hoofdstukken waarop je kon klikken. 

Dus je had eigenlijk _twee_ stappen nodig: klik op het verhaal, klik op het eerste hoofdstuk. (Waarbij je waarschijnlijk per ongeluk ziet hoe andere hoofdstukken beginnen ... )

Nu staat er dus een knop bovenaan met "Begin met lezen!" die dit probleem oplost.

### Makkelijk doorlezen

Dit is vrij simpel. Onderaan elk hoofdstuk staan twee grote knoppen om naar het hoofdstuk hiervoor of hierna te gaan.

Ze staan niet bovenaan. Ik wil zo _min_ mogelijk dingen boven de tekst plaatsen, want daar zou je _elke keer langs moeten scrollen_ als je wilt lezen. Daarnaast is de kans klein dat je helemaal aan het _begin_ van een hoofdstuk beseft dat je naar een andere wilt.

### Naar het volgende verhaal

Ook dit kwam laat in de ontwikkeling. Het kwam gewoon niet in mij op, totdat ik de website had gevuld met verhalen en het zelf testte alsof ik een lezer was.

Eerst eindigde het verhaal en stond er dus "Geen volgend hoofdstuk :(" en dat was het.

Ik wilde dat niet _vervangen_, want dat werd verwarrend en inconsistent. (De knop links gaat naar het vorige _hoofdstuk_, maar de knop rechts naar het volgende _verhaal_.)

Dus daar _onder_ staat een grote knop om meteen naar het volgende verhaal te gaan.

## Stap 4: de essentiële tekst

De tweede prioriteit is dat de tekst van de verhalen zo duidelijk en leesbaar mogelijk wordt gepresenteerd.

(_Is dit niet de eerste prioriteit?_ Nee, want als niemand het verhaal überhaupt kan vinden, maakt het niet uit hoe leesbaar het is. Het lijkt stom, en ik ontkende dit lang, maar dat is wat ik heb geleerd. Marketing en die eerste "drempel" overkomen is belangrijker dan de inhoud van je product.)

De meeste websites die ik erg fijn vind lezen, doen het volgende:

  * De tekst is een vrij _nauwe kolom_. (Zinnen zijn zo'n 45-80 karakters breed. De levenssaga zit aan de hoge kant daarvan, want je kan ook té kort worden.)
  * De tekst is links uitgelijnd. (Alsjeblieft, centreer nooit je tekst.)
  * De _kolom_ is niet gecentreerd, maar staat meer naar de linkerkant. (Ik denk dat wij dit fijner vinden om dat we van links naar rechts lezen.)
  * De enige kop is die met de titel van het hoofdstuk, en die is significant groter/dikker dan de tekst.
  * Vrij hoge regelhoogte ("line height"), dus veel witruimte tussen regels.
  * Vrij grote lettergrootte ("font size").
  * En natuurlijk een mooi, stabiel, leesbaar lettertype.

Ik wilde geen plaatjes tussen de tekst door, of andere fratsen die zouden afleiden. Het onderscheid tussen _titel_ en _inhoud_ moet overduidelijk zijn.

Nogmaals, de website _is_ de levenssaga en 100% bedoeld om zo fijn mogelijk te lezen.

### Lettertypes

En dan is de belangrijkste keuze dus het **lettertype.** 

Tot vlak voor lancering gebruikte ik het standaardlettertype **Georgia**. Hier is niks mis mee. Elk apparaat heeft het. Het is specifiek ontwikkeld als sierlijk "boeklettertype" voor het web (door het dikker te maken).

Maar echt mooi of uniek is het dus niet. Na lang twijfelen besefte ik ineens: _waarom zou ik een keuze maken? Waarom laat ik bezoekers niet zelf hun favoriete lettertype kiezen?_ _Iedereen heeft eigen voorkeuren, schermen, instellingen._

Dus ik verzamelde zo'n 15 lettertypes met compleet andere stijlen, die gratis beschikbaar zijn en ik als "altijd goed leesbaar" beschouw. En ik maakte een knop waarmee je dit overzicht opent en een nieuwe kan kiezen.

_Hoe vind ik zulke lettertypes?_ Google Fonts is geweldig. Maar het komt vooral neer op ervaring en veel zoekwerk. Ik heb lang geleden veel typografie bestudeerd en focus onbewust op allerlei eigenschappen die mij vertellen of iets "goed leesbaar" is of niet. (Ze noemen dit vaak "workhorse fonts": perfect leesbaar op elke grootte, in elke samenstelling, in elke tekst.) Zelfs dan kan ik makkelijk een half uur het internet afzoeken en niks vinden dat past.

_Hoe bouw je dynamische inhoud in een statische website? (Ofwel: hoe heb je dit gemaakt?)_ Met JavaScript. Als jij op een lettertype klikt, slaat hij de naam op in je _local storage_. Bovenin elke pagina zit een stukje code dat deze informatie leest en vervolgens de link opzoekt waar dit lettertype staat.

In de _stylesheet_ zitten een hoop _classes_ met diezelfde namen. Deze classes laden dus dat specifieke lettertype, en eventueel andere aanpassingen. (Sommige lettertypes vallen véél groter uit dan andere, dus die moeten dan een beetje gekrompen om consistent te blijven.)

Uiteindelijk plakt JavaScript de _link_ naar het lettertype in de header (zodat het wordt geladen) en plakt de juiste _class_ op de body (het hele document).

Je kan al deze code vrijuit bekijken door de website te bezoeken en op F12 te klikken.

## Stap 5: hoe laten we "een verhaal" zien?

Een link? Een knop met tekst? Een plaatje? 

Plaatjes zijn niet ideaal. Ze maken de website langzamer én zouden betekenen dat ik voor elk verhaal een uniek plaatje moet tekenen. (Want ik ga géén ongerelateerde _stock images_ van internet plukken :p)

Maar kleine links of knoppen zijn makkelijk te missen. En de website ziet er dan snel "leeg" uit, zeker als er nog maar 5-10 verhalen zijn.

Dus ik houd erg van lekker grote knoppen. "Chunky" noem ik het vaak in de code. Het voorkomt ook dat Google je mails stuurt over "té kleine klikbare elementen op mobiel!!!!"

Een verhaal wordt dus weergegeven als een groot vierkant (wel met ronde hoeken voor een zachter uiterlijk). Daarin staat de titel en een handmatig geschreven "blurb": een paar zinnen marketing die het verhaal moeten uitleggen en interessant maken.

### Icoontjes

Maar een website met _niks dan tekst_ vond ik ook niet ideaal. Plaatjes, en zeker icoontjes, helpen enorm met snel begrijpen wat iets voorstelt, en zouden fijne variatie brengen.

Dus ik besloot wél voor elk verhaal een icoontje te maken. Deze staat bovenaan in dit vierkant, en is tevens te zien op alle andere plekken waar je de titel van een verhaal ziet.

De icoontjes zijn simpel. Ze worden vaak redelijk klein weergegeven, dus ik heb de eerste icoontjes meerdere keren opnieuw gedaan om dat ik té veel detail en té dunne lijnen gebruikte.

Maar het voegt echt veel toe. Ik navigeer zelf regelmatig puur op basis van de icoontjes. Maar ik ken ze dan ook goed, want ik heb ze getekend :p

### De dubbele titel

_Waarom staat de titel overal dubbel?_ Eerst klein en in hoofdletters, daarna de supergrote opvallende variant.

Nou, dat weet ik ook niet, maar ik vind dit _mooi_ en _fijn_.

Op de meeste pagina's is alleen de bovenste titel klikbaar (en brengt je terug naar de hoofdpagina). Dat vind ik eleganter dan als ik die gigantische dikke titel klikbaar maak, door bijvoorbeeld een lijntje eronder te zetten.

Daarnaast past het kleine icoontje mooier naast een _kleine_ titel.

Maar buiten die redenen heb ik dit zo gemaakt omdat het simpelweg professioneel eruitzag. Ik zag het op veel andere websites.

### Kleuren

De icoontjes herinnerden mij dat andere manieren (dan tekst) om hiërarchie aan te brengen altijd gewenst zijn.

Dus ik gaf elk tijdperk een eigen kleur. En verhalen uit dat tijdperk worden gehuld in die tinten, zowel de samenvatting (dat vierkant), als de pagina's met het verhaal zelf.

Het is altijd een balans tussen "contrasterende, duidelijke kleuren" en "het moet geen onleesbare regenboog worden".

Daarnaast leggen de kleuren uit waar elk tijdperk over gaat. De twee "conflicten" hebben de agressieve kleuren oranje en rood. De "eerste stappen" is natuurlijk groen. De "vondst van floria", die vooral gaat over het woestijngebied Floria, is gelig. De ruimtereis heeft _omgekeerde_ kleuren, want het is het enige tijdperk in de toekomst, en is diep donkerblauw.

Oftewel, met minimale middelen, heb je nu een website waarbij:

  * Elk verhaal lekker groot en klikbaar is
  * (Hetzelfde voor alle andere links, die zijn een afgeleide van deze hoofd "class".)
  * Icoontjes helpen met verhalen herkennen en de tekst opbreken.
  * Kleur helpt met variatie en meteen weten waarbij een verhaal hoort

## Stap 6: de header

Zoals ik eerder al zei: ik wil _zo min mogelijk bovenaan een website hebben_.

Het is ruis. Het is rotzooi waar iemand _elke keer_ langs moet kijken of scrollen.

Maar de tekst op een pagina in een boek begint ook niet bij het absolute begin van de pagina. Sterker nog, redelijk veel _fysieke_ boeken hebben headers waarin je ziet in welk hoofdstuk je bent, of waarin iets van decoratie staat.

Dus ik wilde een minimale header met de allerbelangrijkste navigatie:

  * Logo + tekst van de Levenssaga (zodat je weet waar je bent)
  * Klikbare naam van je huidige boek (als van toepassing)
  * Naam van je huidige hoofdstuk (als van toepassing)
  * De knop om je lettertype/lay-out aan te passen.
  * Een knop met een grote pijl omlaag, want in de _footer_ staat de rest :p

Deze techniek zie je op _al_ mijn websites. Want het werkt wonderbaarlijk. Je hebt geen rotzooi bovenaan je pagina waar mensen langs moeten. Je "verkleint" niet het zichtbare deel van je website. Tegelijkertijd mis je niks en kan je onderaan meer dan genoeg kwijt.

(Maar zonder een grote knop met een grote pijl, zullen bezoekers dit soms niet doorhebben, en bespaar je natuurlijk scrollwerk.)

Ik twijfelde of de "over" knop hier nog bij moest. Maar dat is een pagina die _sommige_ lezers misschien _eenmaal_ bezoeken, dus nee.

### Extra decoratie

Deze verhalen zijn zeker ook voor kinderen/jongeren. En dan is zo'n blokkerige website met een dunne vierkante header wat karig. 

Dus voor de _homepage_ besloot ik een variant te maken waarbij het logo naar het midden gaat en er meer decoratie is.

Decoratie moet de _verhalen_ niet in de weg gaan zitten. Maar bij de header/footer, en de thuispagina, kan ik het best inzetten.

Uiteindelijk heb ik veel plaatjes opgezocht van sprookjesboeken, van die symbolen/lettertypes/visuele grapjes die je in zo'n vergeeld magisch Disneyboek zou vinden, en daar wat van overgenomen.

## Stap 7: de footer

De meeste navigatie en informatie moest dus naar de footer. Hier kom je dus alleen aan het einde van een verhaal/boekpagina of als je specifiek ernaar zoekt.

Wat is dan het belangrijkste?

  * Knoppen naar elk **tijdperk**: dit is de _beste_ verdeling die er is. De verhalen zullen altijd gelijk verdeeld zijn over de tijdperken en het worden er nooit meer of minder.
  * Knoppen naar de **laatste verhalen**. Deze vind je immers alleen op de voorpagina, maar het zou fijn zijn als je ze ook vanaf alle andere plekken kon vinden. (En dit vind ik nuttiger dan de _eerste verhalen_ geven. En zeker nuttiger dan een lijst _willekeurige verhalen_.)
  * Standaard **navigatie:** thuispagina, terug naar boven, over dit project algemene zoekbalk.
  * Knoppen die **mij** helpen: bezoek mijn portfolio, doneer/steun dit project

Die laatste moet je niet onderschatten. Ik vergat dit jarenlang. Maar als je nooit iemand _vraagt_ om je te steunen, als je nooit uitlegt dat het helemaal gratis is en je nergens geld aan verdient, dan krijg je het ook nooit.

Ook voeg ik altijd een "willekeurig" knop toe. Sommige mensen voelen zich avontuurlijk, of weten niet wat ze willen, en dan is dit een geweldige manier om de computer iets voor je te laten beslissen :p Ook deze moet je niet onderschatten.

En helemaal onderaan schrijf ik de kleine lettertjes. De startdatum van de website. Wie het heeft gemaakt, met welk systeem, andere opmerkingen. Zoals je een handtekening zet, of copyright tekst in het colofon aan het begin van je fysieke boek.

Het is wederom iets dat technisch gezien weinig betekent (het is niet dat zo'n zinnetje nou de doorslag gaat zijn in copyrightzaken), maar het maakt de website af en staat/voelt professioneel.

_Waarom gebruik je geen "sidebar"? Of iets anders dan deze hele simpele structuur?_ Nou, omdat het de boel een stuk minder simpel maakt, terwijl je er praktisch niks voor terugkrijgt. Ik zie niet wat iemand zou willen doen dat maar dan 1-3 logische klikken kost. 

Een balk aan de zijkant toevoegen levert weer véél visuele ruis op. Daarbovenop wordt het internet nu vooral via mobiel bekeken, waar zo'n balk altijd moet worden weggehaald.

(Sidebars werden vooral populair toen mensen beseften dat ze er een hele hoop advertenties in konden plaatsen. Ik heb lang geleden gezegd nooit advertenties te gebruiken, of pop-ups, of iets in die richting. Daar houd ik me ook aan. En dan worden websites ineens heel ... simpel.)

## Stap 8: de hoofdpagina van verhalen

Hiermee heb ik het meeste gestoeid.

In het originele idee voor de Levenssaga begon elk verhaal met een voorpagina inclusief gedichtje. Dit wilde ik behouden! Maar ... hoe laat je dit duidelijk zien? Het moet eigenlijk wel bovenaan, boven de hoofdstukken. Maar dat duwt de hoofdstukken zelf weer te ver naar beneden.

En wil ik het icoontje nog groter laten zien? Wil ik een aparte voorkant tekenen, iets dat ik sowieso zal moeten doen als ik de verhalen als _fysieke boeken_ wil uitgeven? Laat ik die dan ernaast zien, of op de achtergrond?

_Onder_ het boek wilde ik dus extra informatie laten zien. De outline, de notities, het tijdperk, de karakters die in het boek zitten, etcetera. Maar dat zijn gigantische spoilers. Moet dit geen aparte pagina zijn, of moeilijker te vinden?

Vragen, vragen, vragen.

Uiteindelijk koos ik het volgende.

Het **gedichtje** wordt "voorpagina" genoemd. Op die manier blijf je bij de originele gedachte erachter en is (hopelijk) duidelijk dat het dus _de voorpagina van het verhaal is_. Niet het verhaal zelf.

Het wordt schuingedrukt, in niet al te grote letters, en gecentreerd. Maar mocht ik voorkanten gaan tekenen, dan zullen die _ernaast_ komen: plaatje links, gedichtje rechts.

Door hieronder de grote knop "Begin direct met lezen!" te zetten, voelt het allemaal logisch. Je leest het gedichtje, je weet waar het verhaal ongeveer over gaat---begin met lezen! 

Hierdoor wordt het hoofdstukkenoverzicht naar onderen geduwd en neergezet als een extra hulpmiddel voor als je niet vanaf het begin wilt beginnen.

De **extra informatie** heb ik op dezelfde pagina gezet, open en bloot. Dat was het duidelijkst en het mooist, ook voor mij. (Ik zet er wel groot _spoilers!_ bij.)

Ook is de hoeveelheid over tijd flink gegroeid. Ik hield steeds meer bij per verhaal. Want, ik zeg het een laatste keer, de website _is_ de levenssaga :p

Door alles netjes op te schrijven en een eigen (klikbare) categorie te maken, is de website meteen een soort _Wikipedia_ van zichzelf. Stel ik schrijf een verhaal over de Zandkoning, dan klik ik op die naam en zie meteen alles waarin dit personage speelt! Stel een _lezer_ houdt heel erg van de Zandkoning, dan vindt diegene net zo makkelijk alle verhalen daarover.

Hier zie je dus de kracht van Hugo, van een publieke webversie van een verhaal, en van netjes "metadata" bijhouden van wat je schrijft.

## Stap 9: details, details

### Over knoppen

Ik vind knoppen/links het duidelijkst als ze _contrast wisselen_. Dus als het eerst donkere tekst op een lichte achtergrond is, wil ik dat dit _omdraait_ als je er met de muis overheen gaat: lichte tekst op donkere achtergrond.

Dit kan je makkelijk doen in CSS door simpelweg "filter: invert();" te gebruiken. Maar soms doe ik het handmatig, als dat beter werkt.

(De "verhaalblokken" doen dit niet, want die zijn _zo groot_ dat dit een nogal ingrijpend effect zou zijn. Zij worden simpelweg een stuk lichter, via "filter: brightness(30%);")

### Over beschrijvingen

Die grote "verhaalblokken" hebben dus een titel en daaronder een beschrijving/samenvatting. Voor verhalen voer ik dit handmatig in. Ik probeer in 1-2 zinnen het verhaal uit te leggen en interesse te lokken.

Maar voor hoofdstukken doe ik dit niet. Daar pakt het gewoon de eerste paar zinnen.

Dat was een probleem. Hugo snijdt deze "samenvatting" af _aan het einde van de zin_, als je X aantal karakters bent gepasseerd. Het gevolg is dat sommige hoofdstukken een superlange beschrijving hadden (want ze begonnen toevallig met wat lange zinnen), en andere een superkorte.

Daarnaast gaf dit de impressie dat deze samenvattingen óók met de hand waren geschreven. Mensen waren verbaasd toen ze het hoofdstuk lazen en dezelfde beginzinnen opnieuw lazen.

Dus ik schreef een eigen functie. Die snijdt de eerste paar zinnen af na X aantal _woorden_, en voegt altijd een ellipsis (...) toe om duidelijk te maken: "dit is het begin van het verhaal, hierna gaat het verder"

Kleine details, maken denk ik veel verschil.

### Subtiele decoratie

In eerste instantie had ik een vrij simpel logo gemaakt, maar wel in kleur.

Maar ... alle andere icoontjes waren zwart-wit. En het was onmogelijk om deze kleuren te laten passen bij alle _andere_ kleuren (van de tijdperken) op de website.

Dus ik maakte een zwart-wit (transparante) versie van het logo, die zie je nu linksbovenaan.

Ik maakte ook een variant de andere kant op: gedetailleerder, volledig kleur, die ik _groot_ wilde laten zien op de voorpagina. Ik heb tientallen decoraties uitgetest voordat ik uitkwam op deze krullen aan de zijkant en de tekst erdoorheen geschreven. (De rest was te onduidelijk op kleine grootte, paste niet bij de stijl, was te overheersend, etcetera.)

Want hoe meer ik naar de website keek, hoe meer ik voelde dat de voorpagina mooier en indrukwekkender moest zijn dan één zin en daaronder de lijst met verhalen.

Dus ik plaatste een extra gekleurd blok, met het grote (gedetailleerde) logo links en de openingstekst rechts.

Die tekst heb ik opgedeeld in kleine zinnetjes. (Gewoon door de komma te vervangen door een punt.) Ik had het idee dat kinderen dat beter zouden kunnen lezen.

Ook stond er een vraagteken waarop je kon klikken. Die bracht je naar de "over" pagina. Maar dit was slecht te zien, want een vraagteken is nou niet bepaald een aandachttrekkende symbool. Dus ik besloot deze link uit te schrijven tot "wat is dit?".

Deze verbeteringen waren geweldig, maar alsnog miste er iets. Het waren nu slechts gekleurde blokken. De hele website was gekleurde blokken!

Dus ik wilde nog twee dingen doen: de blokken een beetje opbreken, en iets van een grote _header_ maken voor de voorpagina.

**Blokken opbreken:** hiervoor kwam ik uit bij mijn oude vriend "border-image". Je kan een plaatje invoeren en die wordt dan door de website in stukjes gesneden en rondom de rand van je element geplaatst. Na wat gegoochel met de settings, kreeg ik die golfjes uit het logo netjes rondom de verhaalblokken. (Door het op deze manier te doen, groeien ze automatisch mee met verschillende schermformaten. Dat kan niet als ik gewoon één plaatje had gemaakt en die over de verhaalblokken had gelegd.)

Ik gebruik altijd de [border-image tool][2] van Mozilla om hiermee te spelen.

**Header:** dit was het lastigst. Want de levenssaga gaat over zoiets algemeens ... hoe geef je dat weer in een plaatje? Iets dat er mooi uitziet, maar ook simpel en abstract? Iets dat kinderen zou aanspreken, maar volwassenen niet wegstuurt omdat het er kinderachtig uitziet? Iets dat niet clasht met de vele andere kleuren op de website?

Uiteindelijk kwam ik steeds terug op twee ideeën: _levensboom_ en _tijdlijn_. Ik moest denken aan dingen zoals de [Kurtzgesagt poster van evolutie][3]. Een combinatie tussen een tijdlijn en simpele iconen/figuren van belangrijke delen daarvan. Die figuren kunnen dan silhouetten zijn, de tijdlijn kan van links naar rechts over het scherm lopen.

Dus toen heb ik geprobeerd om zoiets te maken en te verwerken achter/rondom de voorpagina. Dit is iets waarover ik het meeste twijfelde en waarop ik het meeste vast zat. Dus dit zal in de loop van tijd nog wel veranderen. (Ik zal kijken of ik een diepgaander artikel kan schrijven over dit hele proces.)

### Over de structuur

In eerste instantie was er één folder ("books") waarin alle verhalen zaten. 

De URL naar verhalen was dan "delevenssaga.nl/books/BOEKTITEL"

Maar zelfs met ~15 verhalen vond ik deze folder erg vol worden en wilde ik al een betere structuur. Dus toen heb ik alles omgeschreven om eerst alles in te delen per _cyclus_. 

De URL naar verhalen werd dan automatisch "delevenssaga.nl/books/cyclusnaam/BOEKTITEL"

En elke folder zou nooit een belachelijke hoeveelheid inhoud krijgen.

Zoiets is _meer werk dan je denkt_. Want alle code was al lang en breed ingesteld op de oude structuur. Maar ik wist uit ervaring dat dit essentieel was. Ik zou mezelf later hartelijk bedanken voor een veel betere en vooral _specifiekere_ structuur.

### Over hulpmiddelen

Toen ik met de website begon, was het vooral bedoeld voor _mezelf_. Dus de opmaak was erg kaal en ik hoefde alleen de hoofdstukken aan te kunnen klikken. Maar het groeide, ik besloot dat het publiek zou worden, dat het _de_ Levenssaga zou worden.

En zo kwamen in een laat stadium allemaal extra hulpmiddelen. (Net zoals het kiezen van je eigen lettertype.) Deze besefte ik pas toen ik zelf de afgemaakte website wilde gebruiken en teruglezen.

De grootste is **bijhouden wat iemand heeft gelezen.** Dit gaat automatisch. Ik wilde geen extra knoppen zodat lezer _zelf_ moesten aangeven of ze ergens klaar mee waren, mede omdat 99% van de mensen dat _gaat vergeten_.

Dus het is een combinatie van gokwerk en simpele dingen bijhouden. Voor elk verhaal houdt de website een _getal_ bij. Dit getal geeft aan wat het _laatste hoofdstuk is dat je hebt gelezen_.

  * Als je een verhaal aanklikt, of de grote knop "begin met lezen", gaat het getal naar 0.
  * Als je een hoofdstuk leest en _naar het einde scrollt_, gaat het getal naar dit hoofdstuk.
  * Als je zelf op de knop naar het volgende hoofdstuk klikt, gaat het getal ook naar dit hoofdstuk.
  * Zodra je het hele boek hebt gelezen, staat het getal dus op 10 als het goed is.

Als je bent begonnen aan een verhaal, verschijnt een tweede grote knop: "lees verder"

Het getal gaat nooit _omlaag_. Het kiest altijd het hoogste hoofdstuk dat je las. Het _reset_ als je opnieuw op de knop "begin met lezen" drukt. (Zodat je verhalen _opnieuw_ kunt lezen, en het nog steeds netjes je voortgang bijhoudt!)

Voor de gebruiker verander ik dit in iets dat duidelijker is.

  * Getal bestaat niet? "Ongelezen"
  * Getal = 0? "Begonnen"
  * Getal = 10? "Uitgelezen"
  * Ander getal? "Laatst gelezen hoofdstuk: <getal>"

Een ander hulpmiddel is voor mijzelf: de **leesbaarheidsscore.** Dit is een script dat enkele dingen telt (lettergrepen, woorden, zinnen) en op basis van de Nederlandse coëfficiënten de Flesch-Kincaid score uitrekent. Dit is natuurlijk geen perfecte formule, maar het geeft een _indicatie_ hoe moeilijk het verhaal is om te lezen. En als dit erg hoog is, moet ik mezelf achter de oren krabben en kijken waar het misging.

## Stap 10: vorm versus functie

Als je tot zover hebt gelezen, zal je hebben gemerkt dat de _inhoud_ en de _vorm_ elkaar nogal beïnvloeden.

Ik heb de verhalen opgedeeld in 10 hoofdstukken omdat dit beter las en mooier eruit zag _op een website_. Dus de inhoud is aangepast puur vanwege de vorm.

Andersom heb ik de website dus veranderd op basis van de inhoud. Zo gebruik ik regelmatig schuingedrukte woorden/zinnen in deze verhalen, om nadruk te leggen of als je in iemands gedachten zit. Dus ik moest lettertypes hebben die hier een hele mooie variant voor hadden.

Misschien wel het beste voorbeeld zijn de "drop caps". Zo noem je het als de eerste letter van een tekst veel groter en sierlijker is, zoals je bij oude werken vaak ziet. Waarom? Omdat het hielp met het begin (of jouw huidige plek) vinden in een stuk tekst. Omdat het een meer aantrekkelijke/mooie introductie is dan gewoon ... beginnen aan de lap tekst.

Anderzijds kan je hier dus hele sierlijke letters voor pakken, die door velen al worden geassocieerd met "sprookjes" of "legendes".

Dus ik wilde per se mooie traditionele drop caps.

Maar ... sommige hoofdstukken begonnen met _dialoog_. Dus ze begonnen met dubbele haakjes. Dat is natuurlijk hartstikke lelijk op deze manier! (Ik kon geen voorbeeld vinden waarin ik begon met iets nóg gekkers, maar dat zou sowieso ook lelijk zijn geweest.)

Dus ik heb uiteindelijk het begin van een stuk of 10 hoofdstukken moeten _veranderen_, puur vanwege de _vorm_ waarin de verhalen worden gepresenteerd.

(Er zijn altijd discussies over of je wel met dialoog een scene/hoofdstuk moet beginnen. En hoewel ik niet denk dat het een doodzonde is, zoals sommige andere schrijvers, is het inderdaad iets dat ik vroeger deed maar nu vrijwel nooit meer zou doen.)

Tevens ga ik soms _binnen een hoofdstuk_ naar twee verschillende scenes. Nu deed ik dat door simpelweg een witregel en een hekje (#) te plaatsen. 

Maar _drop caps_ zijn juist ideaal om aan te geven: "hé, dit is een hele nieuwe scene/sectie!". Dus ik verving al die hekjes door een "horizontal rule". (Dat is een HTML element dat, tja, een horizontale lijn maakt, bedoeld als manier om dingen van elkaar te scheiden.) Zo kan ik makkelijk aangeven wanneer een nieuwe scene begint, want in Markdown hoef je alleen "\___" te typen voor zo'n HR. 

Vervolgens plaatst de website automatisch een nieuwe drop cap op de eerste letter ná een HR. 

Door te spelen met de vorm, is de inhoud veranderd. En efficiënter geworden.

In mijn ogen is het nooit "vorm _versus_ inhoud", maar simpelweg dat vorm en inhoud elkaar constant zouden moeten beïnvloeden.

## Stap 11: de zoekfunctie

Omdat het een statische website betreft, is dit ook iets dat een andere aanpak nodig heeft. 

Normaal gesproken leest je website constant informatie uit een _database_. Een zoekopdracht is niks anders dan de database vragen "hé geef mij alle artikelen waarin dit woord voorkomt" en dat resultaat laten zien.

Maar deze website hééft geen database en verstuurt nooit verzoeken.

Wat dan? Dan moeten we weer een JavaScript oplossing gebruiken.

Ik koos voor het redelijk bekende **LunrJS**. Het werkt als volgt:

  * Op de zoekpagina laat ik Hugo een groot object printen met _alle_ artikelen, hun inhoud, en hun metadata (zoals titel en tijdperk).
  * Vervolgens kan je dat omzetten in een "Lunr Index" (met enkele regels standaardcode).
  * Vervolgens kan je deze index vragen stellen in de vorm van zoektermen: idx.search("zoekterm")
  * Dat geeft resultaten terug. Ik _loop_ daar doorheen en laat ze allemaal zien.

Het probleem hier is dat dit _elke keer ter plekke moet worden uitgerekend_. Het kan prima 2-5 seconden duren, omdat hij die hele grote index moet bouwen én raadplegen.

Eerst moest ik, echter, wat kleinere probleempjes oplossen:

  * Hij zoekt nu alleen op exacte termen. Zoek je op "hondje" dan vindt hij "hond" niet. Dit los je op door "~<getal>" achter de zoekterm te plaatsen. Dat getal geeft aan hoeveel karakters een match ervan af mag zitten. (Dit noem ik zelf _search fuzziness_.)
  * Lunr sorteert zelf op basis van relevantie, dus dat is fijn. Maar het leek me wel handig om de gebruiker ook te vertellen hoe sterk de match was. Sterker nog, ik kan vertellen welke woorden je exact hebt gematcht!
  * Hele algemene zoekopdrachten geven _alles_ als resultaat. Dat is overweldigend om weer te geven. Dus ik geef alleen alles weer met een score die hoog genoeg is.
  * (Sommige browsers hebben een functie dat je "#:~:text=<iets>" achter je URL kunt zetten. Als de pagina laadt, scrolt deze direct naar de eerste overeenkomst met <iets>, en markeert deze. Ik plaats zo de zoekterm achter de URL. Kost mij vijf seconden, levert heel wat op in sommige browsers.)

### Sneller en beter

Oké, hoe voorkomen we dat de "zoekindex" steeds opnieuw moet worden gebouwd? Nou, door hem één keer te bouwen, dan op te slaan in een JSON bestand, en _dat_ in te laden.

Als je slim bent, kan je dit vast automatiseren. Maar ik heb het zo gedaan:

  * Als ik de website aanpas op mijn computer ("localhost"), dan bouwt hij de index steeds opnieuw.
  * Eens in de zoveel tijd kopieer ik die variabele en plak het in dat JSON bestand. (Zodra ik weer een of twee verhalen heb toegevoegd die nu dus missen in de zoekresultaten.)
  * Als ik _niet_ op localhost zit (dus het is de online website), leest hij dat JSON bestand, in plaats van dat hij de index zelf opbouwt.

Merk op dat er eigenlijk _twee_ dingen zijn die dit systeem nodig heeft: een lijst met de _inhoud van de website_, en een _index om snel mee te zoeken_. De index wordt ter plekke afgeleid uit de inhoud. Maar ik heb ze allebei nodig.

Ik zou die index ook kunnen opslaan. Het zou nog veel meer tijd schelen. Maar dat bestand zou op dit moment _4 mB_ zijn, wat veel te groot is en te langzaam laadt. 

Dat is het nadeel van dit project. Zelfs met 10 verhalen hebben we al 100 hoofdstukken en zo'n 120,000 woorden. Dat is _véél_ om doorheen te zoeken. 

Dus de _inhoud_ opslaan is ook al 800 kB op dit punt. Rest ons de laatste uitdaging: _hoe krijgen we dit bestand vele malen kleiner?_

Daarvoor moeten we dieper nadenken over waarvoor een zoekfunctie wordt gebruikt. Niemand zoekt op leestekens, of standaardwoorden als "de" en "het". Ze zoeken op specifieke, unieke dingen die een verhaal zou kunnen hebben.

Dus ik schreef een stuk code om _alles_ weg te strippen waarvan ik dacht dat het weg kon. Ik begon met leestekens en lidwoorden: het bestand werd 650 kB.

Toen merkte ik dat veel leestekens werden gemist omdat ze in HTML vorm stonden. (Een linker-dubbel-haakje is ", maar kan ook via HTML geschreven als &ldquo;) Die gingen ook weg. Ik verhoogde de standaardwoorden naar dingen zoals _hij, zij, ik, er, te_ .. 

Het bestand werd exact 600 kB.

Maar we kunnen nog verder. Veelvoorkomende werkwoorden als _zei, dacht, liep_. Voorzetsels zoals _naar, bij, achter_. Voegwoorden zoals _want, maar, en_.

### Nóg sneller en beter

Toen leerde ik een hoop over _regular expressions_. (Dat is een manier om met een kort stukje code een tekst op hele specifieke manieren te manipuleren. Zoals dus een hele lijst specifieke woorden weghalen, _mits_ ze worden omringd door witruimte. Want je wilt niet "er" weghalen als dit het begin is van "ervaren", bijvoorbeeld.

En toen kwam ik erachter de Go (de taal waarin Hugo werkt) een achterlijke keuze maakte. Ze ondersteunen iets genaamd "look ahead assertions" niet. Dus zodra meerdere van die woorden naast elkaar stonden, zou hij alleen de _eerste_ vervangen (en de rest negeren).

Waarom? Nou, hij ziet "hé, een spatie, dat woord, en weer een spatie => ik vervang dat geheel door één spatie". Maar dan is hij al bij het volgende woord. Hij is die spatie al voorbij, dus het woord erna gaat nooit voldoen aan de regel "spatie-woord-spatie".

De oplossing was simpel en stom: alle spaties verdubbelen. En aan het einde alle dubbele spaties weer terugbrengen tot één :p

Na al die moeite is het bestand terug tot 500 kB.

De server die ik gebruik kan zoiets gelukkig nog kleiner maken. Het gebruikt Brotli compressie, wat het bestand naar 150 kB brengt. (GZip compressie, wat jarenlang de standaard was, levert 180 kB op.) Ja, dat scheelt enorm! Mijn bestand laat zich dan ook _heel goed comprimeren_, omdat het lange blokken natuurlijke tekst zijn. Daarin zitten veel patronen en hergebruikte karakters.

Het is nog steeds niet ideaal. Zeker als je bedenkt dat deze dus steeds groter zal worden. Stel we zijn bij 10 cycli, dan is dit bestand dus 1.5 mB om te laden, de eerste keer dat je probeert iets te zoeken op de website. 

Maar voor nu is het acceptabel en werkt het prima. Tegen de tijd dat we bij 10 cycli zijn, zal het internet ook wel weer flink zijn veranderd.

(Een bonus van dit systeem is dat je allerlei geavanceerde manieren van zoeken er gratis bijkrijgt. Deze karakters/codes die je kan gebruiken leg ik uit onderaan de zoekpagina. Het is vrij simpel, maar werkt vaak beter dan alleen een paar woorden geven.)

## Conclusie: een bijzonder project

De website heeft een hele simpele lay-out. Het is echt volledig ingericht op makkelijk schrijven (achter de schermen) en makkelijk lezen, op snel laden en snel navigeren.

Het was sowieso de moeite waard om dit experiment aan te gaan. Ik denk ook dat het goed is gelukt en hoop dat deze website nog jarenlang veel mensen mag verblijden. En mag groeien tot iets groots.

Hopelijk was dit artikel leerzaam. Hopelijk legde het genoeg uit over _hoe_ of _waarom_ ik dingen wel/niet heb gedaan.

En natuurlijk zal de website in de toekomst nog veranderen. Naarmate ik meer feedback krijg, nieuwe hulpmiddelen bedenk, misschien toch overal een plaatje voor wil hebben.

Hopelijk vindt iemand dit project, raakt geïnspireerd, en bouwt een nog beter "website schrijfproject". Want dit idee is dermate bijzonder dat ik de meeste dingen zelf moest uitvogelen. En de tijd zal leren of ik de juiste keuzes heb gemaakt.

Geniet van de levenssaga. Tot het volgende experimentele project!

 [1]: https://thesagaoflife.com/nl//
 [2]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Border-image_generator
 [3]: https://shop-eu.kurzgesagt.org/products/evolution-poster?variant=37879773757629