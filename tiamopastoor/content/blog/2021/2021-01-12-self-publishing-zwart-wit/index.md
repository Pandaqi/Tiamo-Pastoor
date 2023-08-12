---
title: Self-publishing en zwart-wit pagina’s
author: tiamopastoor
date: 2021-01-12T15:59:17+00:00
language: nl
categories:
  - Miscellaneous

---
De problemen begonnen toen ik probeerde mijn prentenboek [De Konijnenklas][1] in eigen beheer uit te geven.

Om de drukkosten omlaag te brengen, en dus de verkoopprijs, probeer ik zoveel mogelijk pagina's zwart-wit te maken. In dit geval was het prentenboek zelf volledig in kleur, maar de pagina's eromheen (met bonusinhoud, zoals een geschetste epiloog) zijn zwart-wit getekend.

Echter, toen ik het bestand uploadde ... deed het systeem van MijnBestseller alsof _alle_ pagina's in kleur waren! Al dat werk voor niets!

Het was het verschil tussen 23 kleurenpagina's en 38 kleurenpagina's, wat neerkwam op zo'n 5 euro verschil in de verkoopprijs. Dat was natuurlijk onacceptabel.

Maar hoe lossen we dit op? Waarom herkent hij pagina's als _kleur_ wanneer ik letterlijk alleen tijdens het tekenen _zwart_ heb gebruikt?


## Mijn eerste theorie

Ik dacht: **Grijstinten mogen niet.** Het moet puur zwart en wit zijn.

Dat is _niet_ waar. (Gelukkig maar, want een schets zonder grijstinten is vrij lelijk.)

Het zou ook niet logisch zijn: grijstinten kosten juist _minder inkt_ dan wat dan ook en zouden heel goedkoop moeten zijn.

## Mijn tweede theorie

Tijdens het maken van dit boek gebruik ik _drie verschillende programma's_. De eerste voor de tekeningen, de tweede om de tekst toe te voegen, de derde om alles samen te voegen tot één PDF (in het juiste formaat).

Ik dacht: **Ergens in dit hele proces worden de kleuren omgezet.**

Dat was _ook niet waar_, hoewel het had gekund. In alle programma's stonden de instellingen op "keep color formatting" (of iets dergelijks), wat betekent dat ze dus niet horen te knoeien met de kleuren. (Hieronder leg ik iets meer uit over kleurenruimtes en wat die doen.)

Ook zette ik overal opties uit zoals "compressie" (om plaatjes kleiner te maken qua grootte, maar dat introduceert vrijwel altijd artefacts die je niet wilt) en "enable fast web view" (het web werkt het liefst met een specifieke soort kleuren, dus deze optie knoeit ook met je mooie pure zwart)

Maar alles was uitgezet, ik controleerde dat de plaatjes bij elke stap precies hetzelfde eruit zagen, en nog _steeds_ ging het mis.

Toen werd de programmeur in mij wakker en dacht "oké, het wordt tijd dat we dit systeem eens gaan _debuggen_". Ik ga een aantal extreme gevallen bedenken, die uploaden naar Mijn Bestseller, en dan kijken wat er gebeurt.

Eén van die gevallen was een PDF die _puur zwart wit was_. Ik had letterlijk een filter aangezet die alle lichte kleuren naar _wit_ trok en alle donkere kleuren naar _zwart_. Natuurlijk zag het boek er op die manier lelijk en onleesbaar uit. Het was niets meer dan grote zwarte vierkanten en cirkels op witte pagina's. Maar dit moest toch goed gaan? Het _hele boekje_ had _geen andere kleur dan zwart_.

Nee, dat ging ook fout.

Dus toen wist ik: het ligt niet aan grijstinten, het ligt niet aan de conversie van bestanden, het ligt aan iets anders. Namelijk, het feit dat ik bezig ben met _digitale_ bestanden, terwijl Mijn Bestseller zich klaar moet maken om ze _fysiek te printen_.

## Mijn derde (kloppende) theorie

Deze boeken worden _geprint_, dus je moet denken volgens het kleurensysteem van een _printer_, niet van een _scherm_.

Printers werken met het **CMYK systeem**. Ze hebben vier kleuren: Cyan, Magenta, Yellow en Key ( = zwart) Deze _mengen_ ze, door ze over elkaar te leggen, om de gewenste kleur te krijgen.

Schermen werken met het **RGB systeem**. In ons scherm zitten héél veel kleine Rode, Groene en Blauwe lampjes dicht op elkaar. Als Rood en Groen samen aangaan, bijvoorbeeld, wordt een pixel geel.

Dit levert _niet_ dezelfde kleuren op, want het is een hele andere manier van kleuren maken, en onze ogen zien het anders. Als je zwart maakt met RGB is het _anders_ dan zwart gemaakt door inkt ("pure black").

Eigenlijk zijn de systemen een soort tegenovergestelde van elkaar.

  * Als je print, krijg je de kleur _wit_ door _geen inkt te gebruiken_. (Want pagina's zijn standaard wit, en je gooit er gewoon niks op.)
  * Maar bij een scherm krijg je de kleur _wit_ juist door _alle lampjes aan te zetten_. (Want schermen zijn standaard zwart, maar Rood+Groen+Blauw = Wit.)

Ik had al mijn pagina's gemaakt middels het RGB systeem. En toen ik controleerde hoe die kleuren eruit zagen in CMYK, was het vaak iets van (60, 70, 80, 60). Oftewel, er zat veel zwart in, maar ook veel _kleur_ om het een zogenaamde "rich black" te maken.

Dáár zat het probleem. Bij de kern. En juist omdat er niet meer met de kleuren werd geknoeid later, werd dat probleem door elk programma overgenomen, tot aan de uiteindelijke PDF.

## Hoe los je dit op?

Door je pagina's _vanaf het begin_ in te stellen als **CMYK**. Elk (grafisch) programma moet een optie hebben, wanneer je een nieuw document maakt, om de kleurruimte te kiezen.

Bij het kiezen van de kleuren moet je vervolgens _alleen_ spelen met de waarde van K.

Die andere drie moeten _altijd_ op 0 staan, anders denkt het systeem "ik moet kleureninkt toevoegen!" en wordt het als kleurenpagina gemarkeerd. (Bijvoorbeeld, veel van mijn pagina's hebben nu alleen de kleur (0,0,0,100), want dat is puur zwart.)

Het is nóg beter als je programma's een **Grayscale** modus hebben. In mijn geval was dat zo: zowel _Krita_ (mijn tekenprogramma) als _Affinity Designer_ (algemeen layoutprogramma) hebben deze optie. Als ik deze naar Grayscale zette, kon ik alleen grijstinten kleuren, die ook perfect werden overgenomen in het PDF bestand dat ik uiteindelijk uploadde.

Soms is dit niet genoeg. In Affinity Designer, bijvoorbeeld, werkte het perfect als ik een plaatje erin stopte met de juiste kleuren. Maar als ik in het programma _zelf_ iets erbij ging tekenen, zoals tekst of paginanummers, pakte hij toch koppig steeds kleuren erbij.

Hoe los je dit op? Meestal hebben die programma's een concept van "Adjustment Layers". Eentje daarvan zou Black & White of Grayscale moeten heten. Als je die overal je hele _artwork_ gooit, maakt hij alles automatisch zwart-wit, op de juiste manier.

Eén kanttekening: hoewel ze proberen om het contrast perfect te behouden, gaat dat zeker niet altijd goed. Iets dat in kleur overduidelijk verschillend was, kon met die layer ineens precies dezelfde grijstint krijgen. Dus als je dit gaat doen, controleer vaak of de kleuren goed blijven en het contrast intact blijft.

## Wat ik uiteindelijk heb gedaan

Ik wist dit dus _niet_ terwijl ik werkte aan De Konijnenklas. Ik ontdekte het pas toen ik al bezig was met de laatste zwart-wit (bonus)pagina's.

Daardoor moest ik met een hoop trucs de situatie oplossen voor oudere plaatjes.

Uiteindelijk heb ik twee PDFs gemaakt: alle kleurenpagina's en alle pagina's die zwart-wit _zouden moeten zijn._ Die tweede PDF opende ik in Adobe Acrobat en exporteerde ik naar Grayscale via de Preflight. (Geen zorgen. Dit zijn te veel stappen om uit te leggen, maar een snelle Google zal het antwoord geven.)

_Dat was het enige dat werkte._ Ik voegde de PDFs samen en MijnBestseller herkende alles correct. Geloof me, ik heb hier _lang_ naar moeten zoeken. Alle andere dingen die ik probeerde, hoe extreem of hopeloos ook, werden alsnog herkend als kleur.

Tja, mijn fout. Ik weet al jaren dat er een verschil is (tussen RGB en CMYK) en wat het ongeveer inhoudt, maar ik dacht niet dat kennis van de details zó essentieel zou worden.

Uiteindelijk is het allemaal goed gekomen. Het boekje kan nu verkocht voor 13,50 euro, wat ongeveer de gemiddelde prijs is voor prentenboeken. (Anders was het richting de 20 euro gegaan. En dat voor een boekje waarvan maar de helft volledig in kleur is! Belachelijk!)

Het ziet er mooi uit. De tinten zwart zijn inderdaad mooi uit de printer gekomen. Hopelijk helpt dit artikel je om niet dezelfde fout te maken!

## Laatste tips

### Gebruik geen PNG, maar TIFF

Het is mijn gewoonte om plaatjes in het PNG formaat te exporteren, aangezien dat vrijwel altijd het beste idee is. (Het heeft transparantie, een kleine bestandsgrootte, en wordt door vrijwel alles geaccepteerd en gebruikt.)

In dit geval niet!

PNG behoudt namelijk geen kleurinformatie en wordt automatisch als het RGB systeem geïnterpreteerd. Ik herhaal: PNG kan _géén_ CMYK informatie vasthouden.

Je kunt beter het "TIFF" formaat kiezen, of desnoods een JPEG (zonder compressie), want die knoeien niet met je kleuren. (Ook hier kwam ik pas veel te laat achter.)

### Ga niet via het web

Browsers kennen óók het concept van CMYK niet. Die behandelen alles als RGB. Dus probeer niet je bestanden online te converteren, of een online programma te gebruiken voor de tekeningen en opmaak. Of zelf een website te schrijven die je PDF naar grayscale omzet (zoals ik misschien eventjes heb geprobeerd ...)**  
** 

### Let op schermfilters

De meeste systemen hebben iets van een "nachtlamp". Als het buiten donker wordt, verandert je scherm langzaam naar een rodere kleur, zodat je minder blauw licht binnenkrijgt en beter kan slapen. Dat is goed! Zet dat aan!

Maar het probleem is dat dit een groot effect heeft op dingen die puur zwart-wit zijn. Als ik 's avonds laat werkte aan die pagina's, zag het geheel er meer gelig/beige uit, en kon ik moeilijk inschatten hoe het eruit zou zien op de uiteindelijke pagina.

Op diezelfde manier knoeien schermen in het algemeen met kleuren. Dit doen ze om alles te "optimaliseren" voor onze ogen. Ook dit is goed! Dat zorgt ervoor dat dingen er mooier en duidelijker uitzien op schermen, dat kleuren er vanaf kunnen spatten, dat we er goed naar kunnen kijken.

Maar dit knoeit, wederom, met je perceptie van kleuren. Dus het advies is eigenlijk: heb een printer bij de hand om vaak te testen hoe iets er in het echt uitziet. (En als je gaat self-publishen, bestel op z'n minst een paar fysieke proefexemplaren.)

 [1]: /books/de-konijnenklas