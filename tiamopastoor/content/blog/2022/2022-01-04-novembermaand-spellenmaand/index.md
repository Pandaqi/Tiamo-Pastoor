---
title: Novembermaand, spellenmaand
author: tiamopastoor
date: 2022-01-04T15:00:00+00:00
language: nl
categories:
  - Games

---
Er zijn een aantal maanden waarin traditioneel de grote spellenwedstrijden plaatsvinden. November is één daarvan en voor mij persoonlijk de handigste. (De andere zitten rond de zomer en ik heb dan geen zin om een week strak achter mijn laptop te zitten, binnen, om een spel in elkaar te flansen.)

Dus ik besloot weer mee te doen. Twee wedstrijden dit keer:

  * [GitHub Game Off][1] => twee na grootste van de wereld (als ik het goed heb), duurt de hele maand
  * [GoGodot Jam][2] => om "Godot" te promoten, de software die ik gebruik om spellen te maken, duurt de halve maand

Als je de spellen wilt zien of spelen, dit zijn de links:

  * [Windowsilk:][3] 1-6 spelers zijn spinnen die proberen kleinere insecten op te eten, maar te vluchten voor grotere insecten die _hen_ opeten, terwijl ze het spinnenweb steeds meer uitbouwen en veranderen.
  * [Windup Wizards][4]: een schattig puzzelspel waarin je probeert om konijnen terug te laten verdwijnen in goochelaarshoeden

{{% remark %}}
Het was niet mijn bedoeling om alle woorden met een "W" te laten beginnen, maar die dingen gebeuren soms.
{{% /remark %}}

Het plan was als volgt:

  * Eerste twee weken (tot ongeveer 15 Nov) werk ik aan het eerste spel
  * Laatste twee weken (tot de deadline op 1 Dec) werk ik aan het andere spel

Dat betekent dat het eerste spel wat grootser en beter wordt dan het tweede. Want het beste wat je kan doen voor creatief werk is _afstand en tijd nemen_. (En jahoor, ook deze keer realiseerde ik pas rond 25 Nov een paar grote problemen met het eerste spel en hoe ik ze moest oplossen.)

## Ging dat goed?

En om eerlijk te zijn is de korte conclusie best saai: dit plan heb ik uitgevoerd zonder al te veel problemen :p Beide spellen kwamen af, op tijd, en zijn redelijk goed geworden.

Maar de lange conclusie is natuurlijk interessanter.

Het fijne van deze spellenwedstrijden is dat je:

  * Een vast thema hebt waar je omheen moet werken. (En soms nog enkele andere restricties.)
  * Een strakke deadline die dichterbij is dan comfortabel voelt.
  * Een gigantische groep mensen hebt die meedoet, dus je kan inspiratie opdoen van anderen, of zelf je voortgang delen en goede reactie krijgen.

Het gevolg hiervan is dat je heel snel leert om gewoon _keuzes te maken_. Ze hoeven niet goed te zijn, ze hoeven niet de optimale keuze te zijn, maar je moet _constant keuzes maken en doorgaan_. Hierdoor krijg je ineens in twee weken een spel af dat anders twee maanden had geduurd. Hierdoor stuit je juist op dingen die je nóóit had voorzien toen je begon.

Ik heb het idee alsof ik met elke wedstrijd waaraan ik meedoe (dit was de 4e) ineens een berg inzichten en goede gewoontes krijg. Ineens zie je dat oude gewoontes zinloos waren of slecht met je tijd om gingen. Ineens weet je wél wat prioriteit heeft en wat niet. Ineens zie je een slimmere manier van werken, die je ook kan gebruiken in latere projecten.

## Inzicht #1

Dit bevestigt nogmaals wat ik nu al jaren tegen anderen zeg: **je moet dingen gewoon heel vaak doen om er beter in te worden**. 

Twee spellen maken in korte tijd is véél beter dan al die tijd bezig zijn met "(be)studeren hoe je het beste spel maakt" of "het perfecte, meest geweldige spel ontwikkelen".

Bijvoorbeeld, voor deze spellen programmeerde ik met het idee van "commando's". Alles wat gebeurt is een commando (zoals "Kill" of "GivePoints") dat gedaan en ongedaan kan worden. Dit betekent dat alle logica van het spel uiteindelijk verstopt zit in 20 bestanden ... van hoogstens 5-10 regels code per stuk.

Extreem overzichtelijk, je krijgt een gratis "undo" feature erbij, en er kan bijna niks misgaan.

En toch ... een half jaar geleden nog deed ik niets van dit alles. Ik heb een spel klaarstaan voor publicatie waarbij meerdere scripts (zoals die van de speler) _meer dan 2000 regels code bevatten_. Ik gooide alles wat bij de speler hoorde in datzelfde script, want ja, dat is waar het thuishoorde toch? 

Bij dat spel heb ik regelmatig een hele dag lang moeten zoeken naar allerlei vage fouten en crashes, met mijn neus in een onnavolgbare brei codetaal. Bij de twee spellen van deze wedstrijden is de code schoon en overzichtelijk, en ging er dus veel minder mis.

Als ik deze wedstrijden niet had gedaan, had ik nooit gerealiseerd hoeveel ik was gegroeid in één jaar tijd (qua computerspellen maken dan). Maar door gewoon 5-10 kleine spelletjes te maken, aan de lopende band, gebeurt zoiets automatisch.

(Als je dit trouwens in actie wilt zien: de eerste wedstrijd had als verplichting dat je het hele project vrij beschikbaar stelde. Dus je kunt alle code, afbeeldingen, muziek, etcetera gratis bekijken en gebruiken van het eerste spel: [Windowsilk (Source)][5])

## Inzicht #2

**Ik kan nog steeds niet objectief inschattingen maken over mijn eigen werk.**

Als ik denk dat iets saai en "meh" is, vinden anderen het geweldig (als ik het laat testen).

Als ik denk dat iets geweldig is, of duidelijk uitgelegd, kom ik er na 10 seconden testen achter dat dit bij anderen helemáál niet binnenkomt.

Ik moet gewoon ophouden met proberen, denk ik. Bij elk project, zonder uitzonderingen, denk ik 80% van de tijd "Wat ben ik aan het doen? Dit is een rotzooi. Niemand gaat dit spelen. Het ziet er stom uit." En dat blijkt eigenlijk nooit waar en zit me alleen maar in de weg.

Wederom een voordeel van de wedstrijden: ik kan nog zo vaak denken "wat een prutidee ben ik aan het uitwerken", zodra ik het idee koos (op de eerste dag) zat ik eraan vast en moet ik het gewoon binnen twee weken afhebben. Dus je werkt door.

Ik heb het gevoel alsof hier een levensles inzit :p Niet twijfelen, snel keuzes maken. En als je iets kiest, ga er dan ook voor. 

De spellen voor deze wedstrijden werden uiteindelijk behoorlijk groot en goed. Als dat lukt in twee weken, moet je nagaan wat voor superkrachten mensen hebben als ze in het algemeen stoppen met twijfelen.

## Inzicht #3

**3D is een optie in de toekomst** (voor mij). Ik heb, met één gefaalde uitzondering, exclusief 2D spellen gemaakt in mijn leven. 

De reden was: 2D is veel makkelijker dan 3D, want ja, je hebt een dimensie minder. Minder code nodig, makkelijker plaatjes maken, etcetera.

Maar het is niet altijd de juiste keuze, want als je 2D er goed uit wilt laten zien, moet je tot op zekere hoogte 3D "faken". Je moet dingen in perspectief tekenen, zelf schaduwen geven, etcetera.

Dus ondanks het feit dat ik voor geen meter 3D kan modelleren en veel domme fouten heb gemaakt, was het de juiste keuze om voor het tweede spel naar 3D te gaan. Het scheelt zó veel werk om dingen er juist uit te laten zien en mooi licht te geven.

(Het stomste is nog wel dat ik alle modellen de verkeerde kant op liet kijken. Normaal gesproken is _met de klok mee_ een positieve draaiing, en _tegen de klok in_ een negatieve draaiing. Maar omdat ik het andersom deed, moest ik op alle plekken in de code waar ik iets draaide een minnetje ervoor zetten :p)

Dit tweede spel ziet er zeker niet daverend uit, maar toch "meer dan prima", en op sommige vlakken zelfs professioneel. Met wat meer oefening (want daar draait het om, weten we nu) moeten 3D spellen toch lukken.

Dit stemde me zo positief, dat ik meteen een stuk of 6 nieuwe spelideeën bedacht die in 3D supergaaf zouden zijn. En oude ideeën opnieuw bezocht om te kijken of 3D niet beter zou passen.

## En, heb je gewonnen?

Ehm, "winnen" is een beetje een ander concept in de wereld van spellenwedstrijden. Men doet vooral mee vanwege

  * Die voordelen en de oefening die het meebrengt.
  * De lol van snel een spelidee onderzoeken (zonder consequenties of er al te lang aan vast te zitten)
  * Bekendheid verwerven en reclame voor jezelf maken

Dat eerste en tweede punt heb ik al besproken. Maar het derde punt is misschien wel nóg belangrijker voor mij, aangezien ik daadwerkelijk hier mijn vak van wil maken en geld mee verdienen.

Er doen duizenden mee aan zo'n wedstrijd. Die spellen allemaal elkaars spellen. Ook worden de spellen vaak door een jury (of de "hosts" van de jam) gespeeld, gestreamd, en beoordeeld. 

De _feedback_ die je krijgt is ongelofelijk nuttig. De _hoeveelheid mensen_ die ineens jouw bestaan kennen, je andere spellen spelen, je volgen is ook niet verwaarloosbaar. (Mijn hoeveelheid volgers is +15 gegaan door de wedstrijden, wat een verdubbeling van 100% is.)

Dus om een beetje filosofisch te zijn: puur door mee te doen en een spel in te sturen, heb ik al gewonnen :p

  * De eerste spelwedstrijd had geen prijs, maar is zó groot dat het veel social media aandacht verwerft.
  * De tweede wedstrijd had een symbolische prijs van ongeveer 50 dollar voor de eerste drie plaatsen. Ook hier ging het meer om het promoten van die software en meer mensen fan maken van "Godot". (Iets waaraan ik dus graag meewerk, want ik was een van de eersten die het gebruikte. En het feit dat ik het nog steeds voor alles gebruik zegt genoeg.)

Desondanks wordt er natuurlijk wel gestemd, en er worden top-10 lijstjes gemaakt, en ratings uitgedeeld.

### **Wedstrijd #1**

Gedurende de "voting period" checkte ik regelmatig hoeveel mensen een rating hadden achtergelaten. Dat getal was de hele tijd erg laag. 

(Je kunt zien wat het _totale_ aantal ratings is. Als je dat deelt door de hoeveelheid spellen, krijg je de _gemiddelde hoeveelheid ratings per spel_. Ik had vaak de helft van dat getal. Bovendien, vanaf ongeveer 18 december is er praktisch geen enkel spel meer gespeeld of geratet. Want ja, dan begin het Kerstseizoen, dus mensen doen andere dingen en vergeten die hele wedstrijd.)

Ik weet niet precies waardoor het kwam. Misschien omdat het "local multiplayer" was (1-6 spelers), terwijl de meesten natuurlijk in hun eentje spelen en alles negeren wat anders lijkt te zijn. 

Misschien was het gewoon niet _uniek_ genoeg om mensen aan te trekken. 

Misschien had ik zelf actiever moeten zijn rondom de wedstrijd en constant mijn werk moeten aanprijzen en feedback achtergelaten op andermans spellen. (Ik wil dat altijd doen, maar tijdgebrek zorgt dat ik vaak maar ~5 spellen van anderen kan spelen.)

Mijn uiteindelijke score? **121e van de 538 inzendingen**, gebaseerd op **9 ratings**. (Met gemiddeld **12 ratings** per spel. Je kan stemmen op verschillende gebieden (design, gameplay, thema, audio, etcetera. Dit is het gemiddelde van al die scores.)

Natuurlijk een beetje een tegenvaller, aangezien ik 10e plaats had toen ik twee jaar geleden met deze wedstrijd meedeed. En dat spel was een _stuk_ minder goed dan wat ik nu had gemaakt! Maar ach, veel van geleerd, en de plaatjes en algemene ideeën wil ik sowieso hergebruiken voor een puzzelspel later. 

En, aangezien we meer dan een _maand_ verder zijn, geef ik wat minder om wat mensen van het spel vinden. Als je ergens middenin zit, en zeker als het nét af is, geef je natuurlijk _superveel_ om wat anderen ervan vinden. Je wilt dat het goed is, anders voelt het alsof je net weken van je leven hebt verspild. Maar nu? Ik zag het resultaat van de wedstrijd, haalde mijn schouders op, en ging door met mijn leven :p

Het verbaast me een beetje, en ik weet niet wat ik er verder van moet leren. Voor "Audio" en "Graphics" scoor ik bijvoorbeeld het slechtst (#140 en #219). Terwijl ik dat juist mijn sterke punten vond en de reacties bevestigden dat. Ik kan niet naar dat spel kijken en een lelijk spel zien, of slechte geluidseffecten, of iets wat super onafgewerkt is.

Dus ik weet niet wat ik moet met dit project. Te lang aan gewerkt om gewoon zo te laten liggen (denk ik), maar als het blijkbaar niet aanslaat of iets essentieels mist, is het meer tijd misschien niet waard. Dan maak ik liever dat puzzelspel (met zelfde plaatjes en ideeën) en laat dit voor wat het is.

### **Wedstrijd #2**

Mijn score: **64e van de 187 inzendingen**, gebaseerd op **30 ratings**.

Op zich prima, maar toch teleurstellend, zeker als ik zie wat er nog boven mij staat. (Lelijke spellen, spellen met veel fouten, spellen die echt niks met het thema doen.)

De mensen die mijn spel speelden en begrepen waren laaiend enthousiast.

Maar ... er zijn ook mensen die het niet meteen begrepen en geen zin hadden om de korte uitlegtekstjes te lezen. En daarom alles 1 of 2 sterren gaven. 

Dit weet ik, want sommige juryleden _streamden_ het spel op hun YouTube en gaven daarbij commentaar. Eentje was 10 minuten lang aan het zeuren dat het "inconsistent" was dat je soms één vakje verplaatste en soms twee, terwijl het altijd één moest zijn. 

Maar _er staat letterlijk aan het begin uitgelegd dat je zo ver verplaatst als je kunt_. Er staat nergens "je verplaatst altijd 1 vakje" of iets dergelijks. Die persoon had die ene zin niet gelezen, daarop de aanname gebaseerd dat het spel niet klopte en inconsistent was, en daar 10 minuten over gezeurd zonder een poging te doen de waarheid te achterhalen.

Tja ... daar kan ik niet tegenop. Frustrerend dat je wordt afgekraakt op basis van niets, maar ik moet het naast me leggen en maar proberen om het volgende spel nóg meer "foolproof" te maken.

{{% remark %}}
Het is niet allemaal verloren hoor. Zoals ik zei: dit spel wordt érg vaak bezocht en de meesten zijn heel enthousiast en spelen heel ver. Het is mijn #2 meest succesvolle en populaire spel tot nog toe. En ik ga het afmaken en een fatsoenlijke lancering geven! Maar als zoiets ook wordt gereflecteerd in de ratings, dan helpt dat enorm met bekendheid en bezoekers op de lange termijn.
{{% /remark %}}

{{% update %}}
Inmiddels is het spel al afgemaakt en fatsoenlijk gelanceerd: [Windup Wizards](/blog/2021/2021-12-13-windup-wizards/) 

Het is inderdaad veel meer "foolproof" geworden, van slimmere opbouw in de eerste levels/werelden, van meer concrete (niet-te-missen) uitleg van enkele onderdelen. En ja, ik kan nu wel zien dat dat een belangrijke stap voorwaarts was.
{{% /update %}}

## Lessen geleerd

**Les #1: bij een spellenwedstrijd worden spellen maar kort en snel gespeeld, dus maak iets zo simpel dat een idioot het kan begrijpen**, anders gaat het dus mis op deze manier. Bovendien zijn mensen meer of minder bedreven in bepaalde genres, dus iemand die nooit puzzelt en dan jouw puzzelspel moet beoordelen, zal altijd een lagere score geven.

**Les #2: probeer niet té creatief te zijn.** Veel van de winnende spellen waren, in mijn ogen, nogal hetzelfde en een niet echt creatieve/vernieuwende aanpak op het bestaande thema. Mijn eigen spel bij de tweede wedstrijd kreeg van de jury 1 ster voor _thema_ omdat zij de connectie niet zagen ... terwijl alle andere spelers het wél met gemak zagen, het was gewoon één stapje verder dan de supermakkelijke uitleg.

Dit is het punt: zo'n wedstrijd is té kort om een echt vernieuwend idee tot een goed einde te brengen. Vanwege tijdsgebrek _moet_ je vasthouden aan bestaande ideeën, clichés binnen spellen, veilige keuzes. Anders moet je van héél goede huize komen om in die tijd iets baanbrekends te bedenken en het ook nog goed uit te werken.

**Les #3: jammer genoeg gaat het toch weer vooral om marketing**. Als je constant over je spel vertelt, interactie hebt met anderen in de jam, misschien je eigen YouTube of Twitter hebt waarop je steeds het spel deelt, _ga je gewoon veel meer ratings krijgen._ Mijn spellen doen het vaak redelijk goed omdat ik een logo teken, een trailer maak, de pagina mooi maak, etcetera. Maar omdat ik geen grote fanbase heb, moet ik het toch hebben van vreemdelingen die een willekeurig spel aanklikken.

Ik heb hier al eens over gesproken met de organisatoren van zulke wedstrijden, maar de conclusie is eigenlijk dat er geen weg omheen is, en dat het huidige formaat toch wel het beste compromis is.

Dus dat is de allesomvattende les: een spelwedstrijd is _niet_ hetzelfde als een "wedstrijd om het beste spel te maken". Het heeft zijn eigen regels, restricties, tips & tricks, allemaal vanwege het tijdsgebrek en het stemsysteem. 

Dus als je meedoet, probeer dan niet "het beste spel te maken", maar "een zo goed mogelijk spel _voor deze spelwedstrijd_". Dat zal ik doen bij de volgende wedstrijd 🙂 

(Hoewel dat wel even kan duren, want ik ben nu compleet uitgeput qua spellenwedstrijden :p)

## Conclusie

Tot zover de kronieken van mijn November 2021, waarin ik maar liefst twee grote spellen maakte voor twee nog grotere spellenwedstrijden 🙂

(Ik kan niet vaak genoeg benadrukken dat beide spellen gewoon écht grote en bijna-professionele spellen zijn. Ik heb heel November letterlijk nergens anders aan kunnen werken, zo druk was ik ermee :p)

Veel dingen geleerd, twee mooie spellen gemaakt die veel bezoekers trokken en goede reacties krijgen, en ondanks de teleurstellende resultaten moet ik toch concluderen dat het al die moeite waard was. 

(En ja, ik weet dat ik bij allebei de wedstrijden nog steeds bij de top 30% zat. Maar bij vorige wedstrijden was ik top 10%, of zelfs beter, dus ik weet even niet waar het mis ging.)

Terwijl ik dit schrijf ben ik bijvoorbeeld mijn volgende spel aan het opzetten. En binnen een uur of twee kon het puzzels genereren ... terwijl dat eerst echt _dagenlan_g duurde (minstens). Deze wedstrijden dwongen mij nieuwe dingen te proberen, mijn werkwijze te versnellen, en dat zal nog lang doorwerken in de toekomst.

En het staat mooi op het portfolio, weer twee spellen met leuke logo's erbij.

 [1]: https://itch.io/jam/game-off-2021
 [2]: https://itch.io/jam/go-godot-jam-2
 [3]: https://pandaqi.itch.io/windowsilk
 [4]: https://pandaqi.itch.io/windup-wizards
 [5]: https://github.com/Pandaqi/Windowsilk