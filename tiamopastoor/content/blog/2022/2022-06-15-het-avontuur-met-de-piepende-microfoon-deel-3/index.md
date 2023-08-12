---
title: 'Het avontuur met de piepende microfoon: deel 3'
author: tiamopastoor
date: 2022-06-15T21:26:00+00:00
language: nl
categories:
  - Miscellaneous

---
Welkom bij deel 3.

Ter herinnering: we hebben een luid piepende microfoon (die daardoor compleet onbruikbaar is en klinkt alsof hij kapot is), maar als we hem in een andere kamer plaatsen werkt hij perfect. Wat is er in hemelsnaam aan de hand?

## Een externe piep? 

Het eerste dat ik controleerde was natuurlijk: is er iets van een apparaat die letterlijk een hoog piepgeluid maakt, en deze microfoon is simpelweg gevoeliger daarvoor en de eerste die het oppikt?

(Het is heel onwaarschijnlijk. Zo'n piepgeluid zouden je oren veel eerder oppikken. Maar je weet het nooit.)

Dus ik plaatste de microfoon op verschillende plekken in mijn kamer. En toen checkte ik of het uitmaakte dat een apparaat wel/niet aanstond, de lamp aanstond, een kabel in de buurt liep, de deur openstond, etcetera.

Het resultaat? Nee, het maakt niet uit.

Voor de zekerheid heb ik mijn mobiel gepakt, een frequentie app gedownload (die letterlijk vertelt wat je mobiel hoort), en heb werkelijk alle hoeken en gaten van dichtbij geanalyseerd. Maar nee hoor, overal klonk het precies hetzelfde (als standaardruis).

## Ground loop? 

Toen kwam ik de tweede mogelijke reden tegen: een _ground loop_. Het betekent dat je apparaten op zo'n manier zijn ingeschakeld dat er _meerdere_ routes zijn richting het stopcontact, waardoor een signaal gaat lopen dat de boel verstoort.

(Dit is een hele simpele en niet geheel correcte uitleg, maar het is goed genoeg voor nu.)

Bijvoorbeeld: je computer zit in een stopcontact, en je digitale piano zit in hetzelfde stopcontact, én een USB-kabel verbindt je computer en je piano. Nu is er een _loop_. De piano is op twee manieren verbonden met het stopcontact: via z'n eigen kabel, en via de USB, via de computer.

Dit hoeft geen problemen op te leveren. Als je apparatuur van goede kwaliteit is, je huis goed bedraad, zal je dit niet tegenkomen.

Maar mijn zolderkamer is allesbehalve goed bedraad. (Het is aangelegd door de vorige bewoner, en als je de deur enigszins hard dichtdoet gaat de lamp aan. Dat soort dingen.) 

Ik wilde het minstens controleren.

Mijn eigen laptop _moet_ in het stopcontact zitten, evenals mijn huidige audiokastje. Heel veel kans op loops. Een opzet waarvan velen online zeggen dat het hen problemen opleverde.

Maar ik kon een andere laptop testen die nog wél een werkende batterij heeft, evenals een audiokastje die compleet op USB werkt.

Op die manier was de opzet simpelweg: LAPTOP + USB-kabel naar AUDIOKASTJE. Niks anders. Geen enkele kans op loops of rare elektriciteitsperikelen.

Verschil? Nope.

(Mocht je dit probleem hebben, moet je dus eerst proberen je opzet te veranderen, dan iemand je elektrische bedrading laten checken, en als dat niet werkt heb je "DI Boxes" met een "Ground Lift" die je tussen je kabels kan stoppen en die de loops doorbreken.)

## Signal Interference? 

Na lang zoeken ontdekte ik enkele video's die _precies_ het geluid lieten horen dat ik had. En allemaal kwam het door _interference_: signalen van buitenaf die in de microfoon (of de draden) terechtkomt.

Er zijn twee grote boosdoeners:

  * RFI: _Radio Frequency Interference_. Letterlijk de radiofrequenties die door de lucht vliegen die in je signaal komen.
  * EMI: _ElectroMagnetic Interference._ Alle apparaten creëren een klein elektromagnetisch veld om zich heen. Dus als je mobiel vlak naast je microfoon (of microfoondraad) ligt, bijvoorbeeld, krijg je problemen.

Mijn geval klonk exact zoals de mensen die last van RFI hadden. 

(Bovendien werd het steeds onwaarschijnlijker dat het kwam door een ander apparaat. Ik doe altijd al moeite om zo weinig mogelijk spullen aan te hebben staan. Maar tijdens het testen van de microfoon heeft op veel momenten letterlijk alles in een straal van 5-10 meter compleet uitgestaan. En het maakte geen haar verschil.)

Dus deze microfoon, en eventueel de kabel, is daar blijkbaar niet heel goed tegen beschermd.

Maar weet je nog hoe het probleem wég ging toen ik ergens anders ging zitten? 

Dat suggereert dat er toch _iets_ in mijn omgeving stralen uitzendt die het heel leuk vinden om door mijn hele slaapkamer te gaan.

Dat kunnen we testen!

Ik ben met de hele opzet (laptop + kastje + microfoon op standaard) door het huis gelopen.

Mijn slaapkamer is een zolderkamer, de tweede verdieping. Het is dus aangelegd door de vorige bewoners zelf en niets meer dan een soort houten hutje dat ze erin hebben gekwakt. Houdt dat in het achterhoofd.

Mijn resultaten:

  * Het piepen is veruit het luidst (en compleet onwerkbaar) tegen de achterste muur van mijn slaapkamer.
  * Het zakt behoorlijk zodra je mijn kamer uitstapt, maar blijft zeer aanwezig. Het is ook aanwezig in de opbergruimte náást mijn kamer.
  * Het wordt minder en minder als je de trap afloopt.
  * Onderaan die trap is het compleet weg.
  * Als je een stukje doorloopt, en dus op de eerste verdieping _onder_ mijn kamer staat, komt het weer terug. (Zeker als je daar omhoog wijst of richting de straatkant wijst.)
  * Loop nog ietsjes door, naar de volgende trap (richting de begane grond), en het verdwijnt volledig.
  * Vanaf dat moment is het helemaal weg.

Oké. Mijn hoop dat ik mijn opzet simpelweg een meter kon verplaatsen in mijn kamer is vervlogen :p

Praktisch de hele zolder zit onder deze signalen. Mijn kamer lijkt het epicentrum. 

Let op dat er dus letterlijk géén elektriciteit aanstaat, geen apparaat aanstaat, nog geen lamp is aangezet. En dat weglopen uit de kamer het volume van het gepiep al enorm verminderd. 

Ook merkte ik dat het geluid (soms drastisch) afnam als je de microfoon met je hand vasthield. Ook kon ik mijn lichaam gebruiken om de interference te "blokkeren" op veel plekken, en zelfs soms het geluid veranderen door de kabel vast te pakken.

(Wat deze test ook moeilijk maakte, want ik leerde dus dat ik de microfoon moest neerzetten, op een standaard, met de kabel helemaal los, en dan _weglopen_, anders had ik invloed op het resultaat.)

Dit bevestigt wederom dat het deze interference is. Want dát kan je blokkeren met je lichaam, dat kan je geleiden door je hand. Daarom heb je op die manier invloed op het geluid. (Maar de microfoon altijd met je hand vasthouden en je lichaam in een of andere hoek wringen is natuurlijk geen goede oplossing.)

## Hoe lossen we dit op? 

Ik zie drie opties:

  * Probeer de bron te vinden en te elimineren.
  * Koop apparatuur (voornamelijk microfoonkabels) met beter schild tegen dit soort signalen.
  * Verplaats je hele opnamestudio naar een andere kamer.

De tweede optie is niet geweldig, want zulke kabels zijn _duur_, en het is niet eens een garantie dat het probleem verdwijnt.

De derde optie zou betekenen dat ik mijn werkkamer anders moet inrichten, maar vooral flink geluidsdempend maken. (Ook omdat deze nóg dichterbij de drukke straat voor ons huis ligt.) Dit betekent ook de aanschaf van extra duur materiaal, maar in dit geval is het iets dat ik in het algemeen al langer wilde hebben. Materieel om je akoestiek te controleren is erg nuttig om gewoon te hebben als muzikant :p

De eerste optie zou ideaal zijn ... maar haast onbegonnen werk. Signalen kunnen van ver komen, onze wereld staat vol met apparaten. Niet alleen in mijn huis, maar ook de huizen om ons heen.

Zo staat aan de overzijde van de straat een chocoladefabriek, met op het dak een grote antenne die ongeveer in de richting van mijn kamer wijst. Kan dat het zijn? Misschien wel, misschien niet.

Zo is het geluid veruit het ergst rond mijn achterste muur: aan de andere kant staan onze CV-ketel en een meter buitenlucht waarna het huis van de buren volgt. 

Zendt de CV-ketel iets uit, zelfs als hij, op warme dagen als deze, helemaal niks aan het doen is? 

Heeft het huis naast ons (_een museum met een alarm dat maar al te vaak per ongeluk afgaat_) een systeem aanstaan dat bij mij binnenkomt? (Maar wat door de andere kamers, op andere verdiepingen, wordt tegengehouden, omdat ze fatsoenlijke muren hebben en geen kleine houten zolder zijn?)

Blijkbaar staat 100-150 meter verderop een zendmast. Was me nooit eerder opgevallen. Mijn moeder vertelde zelfs iemand in de buurt een zoon had die heel ziek werd van de straling daarvan. Dat is best dichtbij, zou dat het zijn?

## Op jacht naar geesten 

Toen leerde ik twee dingen:

  * De meeste smartphones hebben een _magnetometer_. Daarmee moet je in staat zijn om elektromagnetische velden te meten. Het grappige is dat er veel gratis apps zijn die dit voor je doen ... maar origineel bedoeld zijn om "op geesten te jagen". Want, zoals iedereen weet, versturen dode entiteiten elektromagnetische signalen?
  * Elektrische gitaren werken volgens eenzelfde systeem: ze hebben een _pickup_ (of meerdere) die verstoringen in het veld boven zich meet, en zodoende weet of je een snaar aanslaat.

Dus ik ben met een telefoon (met zo'n app) door mijn hele slaapkamer gelopen. Vervolgens ging ik door de rest van het huis heen. En als laatste heb ik hetzelfde gedaan met mijn elektrische gitaar (aangesloten op een versterker, het deel met de pickup in verschillende hoeken geduwd).

Het resultaat?

  * Onze verwarmingsbuizen hebben veel elektromagnetische straling. De app werd gek als ik hem bij de knop van mijn verwarming hield (die uitstond). Het gebeurde zelfs, in mindere mate, als ik door het huis heen de mobiel bij willekeurige verwarmingsbuizen hield. _Dit is consistent met de microfoon: die piepte hier ook veel luider._
  * Er zijn heel wat apparaten die, zelfs als ze uit staan, een enorm veld om zich heen hebben. Mijn speakers maakten de app _helemaal gek._ De batterijkant van mijn laptop deed hetzelfde. Een andere mobiel was ook raak.
  * De straling wordt hoger van beneden naar boven. Op de begane grond was de waarde meestal rond de 10-20. De verdieping daarboven is het vrij constant 40-50. En als je nog hoger gaat, naar mijn slaapkamer, zit je gemiddeld op de 60-70. Als je de mobiel richting bepaalde plekken in de muur houdt, gaat het naar de 100+. Ik gok dat daar de elektriciteitsdraden zitten.
  * De ruimte met de CV-ketel, naast mijn kamer, was verrassend stralingsvrij. Hoe dichter ik bij de ketel kwam, hoe minder het werd.

Oftewel, er is wel degelijk een hele hoop elektromagnetische straling opgebouwd in en rond mijn kamer. Maar het is niet 100% consistent. Het meeste komt van de muur of apparaten die uit staan, terwijl de microfoon blijft piepen, zelfs als het ver uit de buurt van beide staat.

(Dit is wederom een herinnering aan hoeveel straling we constant de wereld insturen. Ik denk dat je echt een gigantisch verschil kan maken, voor je gezondheid, door bijvoorbeeld _niet_ je telefoon in je zak mee te nemen of je laptop constant op schoot te hebben. Door apparaten compleet uit het stopcontact te halen als je ze niet gebruikt. Want anders leef je in een bubbel van constante straling, heb ik nu gemerkt en gemeten.)

De test met de elektrische gitaar was iets specifieker. Die probeert de straling namelijk om te zetten in geluid, _een beetje zoals de microfoon_. Van alle dingen die de meter lieten uitslaan, bleef vooral _een andere smartphone_ over, en in mindere mate de _verwarming_ en die nare plekken in mijn _achterste muur_.

(Wat bedoel ik hiermee? Nou, als ik mijn smartphone in de buurt van de elektrische gitaar houdt, maakt hij een piepgeluid dat verdraaid veel lijkt op wat de microfoon hoort. Maar als ik mijn gitaar bij mijn speakers houdt, die ook een groot veld om zich heen hebben, wordt het geluid gewoon _harder_ maar is er geen pieptoon te bekennen.)

Toen ik alle informatie nog eens bekeek, besefte ik dat de grootste uitslagen toch echt rondom de verwarming en mijn speakers zaten. Zelfs op de verdieping onder mij was de pieptoon alleen hoorbaar als je _ongeveer onder mijn speakers staat_.

De logische volgende stap? Ik verplaats mijn speakers (en mijn smartphone) naar beneden, en richt de microfoon zo ver mogelijk _weg_ van de verwarming en het batterijelement van de laptop.

Het resultaat daarvan?

Ik heb werkelijk _alle_ apparaten uit mijn slaapkamer gehaald, zelfs stekkers die niks deden uit de kamer gehaald, maar het maakt geen verschil. Dan ben ik 99% zeker dat het de slecht aangelegde elektriciteit/verwarmingsbuizen zijn in mijn muur.

**Een ander probeersel:** Ik heb tevens geprobeerd de microfoon af te schermen met aluminiumfolie. Dat werkte voor veel mensen met eenzelfde probleem. (Want een dikke laag folie houdt signalen buiten. Koperfolie schijnt sterker te zijn, maar dat vind je niet zomaar in huis.) 

Het goede nieuws? Ja, dat werkt! Het volume van de piep gaat drastisch omlaag als je de microfoon helemaal inpakt in een grote prop aluminiumfolie. Tevens bewijst het (wederom) dat het in de _microfoon_ zit, niet de draad.

Het slechte nieuws? Het is niet genoeg, het is nog steeds hoorbaar, té hoorbaar. En op deze manier is het erg onhandig om de microfoon te verplaatsen of te draaien :p

**Een tweede testlocatie:** mijn zus gaat wel eens naar het huis van een familielid een straat verderop, om daar piano op te nemen. Zij had de microfoon meegenomen om te testen of de piep daar te horen was. Nee dus. Op die plek werkt de microfoon ook perfect, zonder gepiep. (Ondanks het feit dat die woonkamer vól staat met apparaten en dingen die herrie kunnen maken.) Dus met de microfoon is echt niks mis, het is mijn slaapkamer waar ráre signalen worden verstuurd.

## Dus waarop komen we uit? 

Dat het met 99.9% zekerheid de schuld is van de locatie---een slecht aangelegde oude zolder, in een nog ouder huis vol slechte elektriciteit en verwarmingsbuizen---dat de microfoon deze piepgeluiden maakt. Het kan theoretisch opgelost door een ongelofelijke hoeveelheid tijd (en misschien geld) steken in de precieze bron achterhalen, maar dat is het niet waard.

(Bovendien zal het huis de komende jaren door mijn ouders compleet worden verbouwd, dus om nu veel geld te steken in betere bedrading is zinloos.)

Een betere oplossing is simpelweg een andere microfoon kopen. Er zijn nog twee types microfoon die ik "mis" in mijn verzameling en graag zou hebben vanwege hun unieke eigenschappen: een dynamische microfoon en een lintmicrofoon.

Het enige probleem? Deze types staan _juist_ bekend om dat ze extra gevoelig zijn voor dit soort problemen, extra gevoelig voor ruis. Dus ik schat de kans groot dat, wat ik ook koop, deze exact hetzelfde zou doen op mijn locatie.

Dus dan is de beste oplossing om de komende tijd vooral dingen op te nemen waarvoor ik de piepmicrofoon niet nodig heb, terwijl ik plan om de hele studio te verhuizen naar een hele andere plek.

Een beetje een anticlimax, ik weet het. Maar dit is hoe het avontuur ging en hoe het is geëindigd. 

Ik weet vrij zeker dat voor 99% van de mensen (die een soortgelijk probleem hebben) de informatie in dit artikel genoeg is om hun oorzaak te vinden en hun oplossing. 

Om een of andere reden is het universum tegen mij, echter, en zijn mijn problemen altijd de uitzondering op de regel. Ik probeer het maar te zien alsof het universum mij extra goed wil voorbereiden op de toekomst en nu alvast alle grote ondoorgrondelijke problemen tegen me aangooit :p

## Conclusie 

Nou, hopelijk was dit artikel over een rare pieptoon in één van mijn microfoons interessant om te lezen :p

De conclusie is eigenlijk: er kan heel veel misgaan in de _vele_ apparatuur die je nodig hebt voor geluid opnemen. 

Goedkoop materiaal is echt prima in 99% van de gevallen. Mijn "goede" microfoons waren immers slechts een paar tientjes duurder dan de "slechte". Duurder materiaal zal net een slag beter zijn, minder ruis bevatten van zichzelf, maar vooral _consistenter_ zijn.

Iets duurdere apparatuur is beter beschermd tegen de _interference_ van buitenaf, het heeft minder ruis, het is consistenter en stabieler. Vergeet ook vooral niet het belang van alle _kabels_ in je opzet, die zijn immers verantwoordelijk voor het versturen van al die opnames.

Let op de _self noise_ van een microfoon voordat je die koopt. Een waarde als 20 db/A is gewoon te hoog, voor mijn oren tenminste. Dit is geen probleem als je weet dat je alleen luide bronnen (met veel hoge frequenties) gaat opnemen. Of dat je opnames in een drukkere mix komen, en dus zachtjes afgespeeld of overschaduwd door andere instrumenten.

(Ik ben een singer/songwriter, dus veel nummers zullen niks anders zijn dan stem + gitaar, en dan kan je die ruis dus niet verbergen, noch de gitaar als een idioot keihard inspelen.)

Of zorg ervoor dat je de microfoon anders plaatst, of een instrument anders bespeeld, om er het beste geluid uit te krijgen. (Spaanse gitaren klinken sowieso beter als je _harder_ speelt, heb ik inmiddels geleerd, dus het is in het algemeen een goed idee om er een automatisme van te maken _harder_ te spelen.)

Ik kan de **Lewitt LCT 140 Air** dan ook niet aanbevelen. Want mijn andere microfoons (van **sE Electronics**), in dezelfde prijsklasse, zijn wél perfect beschermd tegen invloed van buitenaf en hebben nog een lagere ruis ook.

Ik stel voor dat je een hele goede koptelefoon hebt vóórdat je andere apparatuur koopt, en dat je elke nieuwe aanschaf rigoureus controleert: verschillende bronnen, verschillende (extreme) volumes, verschillende locaties in het huis. Acceptabele ruis is een gemiddeld hoog _hissssss_ geluid dat je alleen bewust hoort op extreme volumes. Als je echt een lage brom of zoem hoort, is het mis. Als je een hoge piep hoort, is het mis. 

En als alles niet werkt, is de beste optie simpelweg om van locatie te veranderen of je verlies te nemen en nieuwe apparatuur aan te schaffen die wel perfect voor je werkt. De hoeveelheid tijd (en beetjes geld) die ik uiteindelijk in dit probleem heb gestoken, zijn nauwelijks goed te praten.

Doe daarmee wat je wilt.