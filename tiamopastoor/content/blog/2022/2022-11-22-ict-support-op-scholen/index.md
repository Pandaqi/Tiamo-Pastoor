---
title: ICT support op scholen
author: tiamopastoor
date: 2022-11-22T21:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Inmiddels heeft elke scholier verplicht een laptop of tablet. Het wordt ingezet bij werkelijk alle vakken en lessen. Ze moeten er verplicht elke avond nog op kijken of iets is veranderd (qua huiswerk of rooster), en zo is het misschien wel het meest belangrijke onderdeel van het hele systeem.

Het is dus jammer dat de ICT ondersteuning vaak nogal matig is.

Op mijn universiteit was de ondersteuning op zich prima. Maar daar heb je ook véél meer budget, krachtige laptops, en zij werken daar al veel langer mee. Als je daar met een probleem kwam, werd meegedacht, en kwam je laptop vaak binnen een paar dagen terug---werkend deze keer.

Op middelbare scholen (en sommige ICT winkels) is het een ander verhaal. 

## Controle & Netwerk

Het begint allemaal met **controle.** Als je een laptop via school koopt, verbinden ze die vaak met hun systeem. Zodoende kunnen ze van alles verbieden, afschermen, of veranderen aan hoe jij de laptop gebruikt.

Dit is **belachelijk.** Ik zou alle scholieren aanraden om te leren hoe je dit omzeilt en je hiervan los te wrikken. 

Waarom is het slecht?

  * Iemand anders heeft controle over _jouw_ laptop en _jouw_ bestanden.
  * Het maakt inloggen (en veel andere handelingen) langzamer. Of zorgt dat ze internet vereisen.
  * Als je van school afgaat, of wisselt, is het een _hel_ om jezelf los te maken van dat systeem
  * Deze controle wordt vaak gebruikt om, bijvoorbeeld, 
      * Vele websites te _verbieden_. (Net zoals je vroeger niet naar "spele.nl" mocht op de computers in de mediatheek :p)
      * Instellingen te verbieden. Ik kon bijvoorbeeld _niet_ mijn wachtwoord veranderen op mijn universiteitslaptop ... evenals de achtergrondkleur van mijn systeem. Wow. Het zal je maar overkomen. Je studenten kiezen een andere achtergrond! WAANZIN!

Ik heb dit dus zelf meegemaakt. Pas toen ik al _twee jaar_ weg was bij de uni, ontdekte ik dat ik nog steeds verbonden was. Nog steeds werden dingen verboden vanwege hun instellingen, nog steeds kon ik in sommige systemen. Ik wilde mijn account losmaken ... maar dat _kon niet_. Ik moest een nieuw account maken op mijn eigen computer, al mijn bestanden enzo kopiëren, en hopen dat ik niks vernielde in het proces. 

Ik had van alles vernield in het proces.

Dus, wat doe je als je een computer krijgt dat vastzit aan een schoolnetwerk? Jezelf meteen losmaken. (Ze zullen er boos over worden ... als het hen ooit opvalt. Doe dan maar alsof je computer ooit is gecrasht en het toen "plotseling anders werkte". Of zeg het eerlijk als je durft: "het is mijn laptop en ik hou niet van dictators die meekijken")

Hoe doe je dit? Mijn stukje hieronder geeft al enkele methodes. Maar het hangt heel erg af van _hoe_ het verbonden is, dus dan moet je simpelweg Googlen op dingen als "how to unlink from a network account" of "how to remove my computer from the company network".

Wat doe je als dat niet kan of mag? Kijk of je een tweede (administrator) account op je laptop kan krijgen. Gebruik _dat_ account voor alles. Het schoolaccount alleen als zij dat heel graag willen.

Wat doe je als dat niet kan? 

  * Installeer een gratis VPN (zoals Windscribe) zodat je de meeste dingen gewoon nog kunt opzoeken.
  * Maak altijd twee backups van wat je doet: eentje online (_Google Drive_ is prima) en eentje op een fysieke harde schijf (koop een SSD voor 50-100 euro). Geloof me. Er zal een moment komen dat die regelmatige backups je leven redden.
  * Probeer shit van je school te verwijderen. Of blokkeer de adressen in je "hosts" bestand.

## "Support"

Oké, stel dit werkt allemaal niet. Je zit nou eenmaal vast aan dat netwerk. 

En nu stopt je laptop met werken.

Ik schrijf dit artikel vanwege iets dat letterlijk gebeurde onlangs. Dus ik zal dat als voorbeeld nemen. (Maar ik zie dit soort situaties tientallen keren per jaar voorbijkomen, vrijwel altijd op de middelbare school.)

Mijn broertje en zusje konden van de ene op de andere dag niet meer inloggen. Hun wachtwoord was sowieso juist. Zij hadden _niks_ gedaan of veranderd.

Aan de kant van hun school was iets misgegaan. Dit werd bevestigd toen hele _rijen_ studenten met een niet-werkende laptop langs de ICT gingen, de volgende ochtend.

Dus wat doet de ICT? Wat zeggen ze? Hoe lossen ze dit op?

Dit is de standaardreactie op 95% van de problemen: "geef maar hier, ik wis en reset je hele computer, komt voor elkaar"

{{% example %}}
Deze reactie kreeg ik ook toen mijn allereerste computer, een iMac, ineens niks meer deed. Ik was 13 en wist nog niks van computers. Dus ik was alles kwijt, want ik had geen backups, en een week later was de hele computer gereset. En vroegen ze 100 euro arbeidskosten. Inmiddels weet ik dat ik het hele probleem in 3 minuten zelf had kunnen oplossen, zonder bestanden te verliezen.
{{% /example %}}

Dit is wederom een **belachelijke reactie.** Je computer wissen en (geforceerd) resetten is een **laatste redmiddel**. Al je bestanden kwijtraken, al je instellingen, en met een schone lei beginnen werkt _altijd_ ... maar is een paardenmiddel.

Mijn broertje had niks om te verliezen en was dus meteen weer langs de ICT gegaan. Nogmaals, het probleem was dat de laptop maar één vast account had (en verder alles afgeschermd), en het _100% juiste wachtwoord daarvoor_ was van de ene op de andere dag _niet meer juist_.

Mijn zusje had een hele hoop bestanden: samenvattingen, oude toetsen, etcetera van de afgelopen _jaren_. Dat wilde ze niet verliezen.

Dus ze vroeg mij om eens ernaar te kijken. En dat deed ik.

Anderhalf uur later had ze weer toegang tot haar computer. (En een gastaccount los van het netwerk.)

## De oplossing

Wat heb ik gedaan?

  * Zet internet volledig uit. We willen niet dat netwerk of services zich ermee bemoeien.
  * Houdt `SHIFT` ingedrukt terwijl je op "Opnieuw Opstarten" drukt
  * Je krijgt wat opties. Ga naar "geavanceerde opties" en dan "opstartinstellingen". Klik de knop om opnieuw op te starten.
  * Even wachten. Je krijgt een paar andere opties om op te starten. Kies "Safe mode with command prompt" (`F6`)
  * Waarschijnlijk _kan je nu gewoon inloggen._ 
      * Het kan wel 30+ minuten duren voordat je computer dit accepteert. (Daarom duurde het zo lang.)
  * Je krijgt een zwart scherm met een teksteditor daarvoor. (De "command prompt".)
  * Vervolgens type je `sfc /scannow`. (Druk op Enter na elk commando, ook de volgende in deze lijst).
      * Je computer word gecheckt op fouten. Als mogelijk, worden ze meteen gerepareerd. Dit duurt ook 30+ minuten.
  * Vervolgens typ je `net user administrator /active:yes`. Dit forceert simpelweg het algemene administrator account om actief te worden.
  * Vervolgens typ je `net user administrator WACHTWOORD`. Zo geef je een nieuw wachtwoord aan dat algemene account. Dat kan alles zijn, maar het liefst iets simpels om te testen, zoals, tja, "test".
  * Maak een gastaccount waar je altijd in kan. Typ `net user GASTNAAM WACHTWOORD /add`
  * Optioneel: type `net user` om een lijst te krijgen van alle users op je computer. Zo kan je bevestigen dat de _administrator_ en je _gastaccount_ bestaan. (Er staan ook wat andere dingen bij die Windows zelf gebruikt, ga daar maar **niet** mee knoeien.)
  * Typ `CTRL` + `ALT` + `DELETE` en kies de optie om opnieuw op te starten. (In Safe Mode mis je de andere schermen enzo die je normaal gesproken zou gebruiken.)

Herstart. Log in met je nieuwe wachtwoord. Dans de polka en hang de vlag uit. 

Het kan zijn dat de administrator leeg is. (Dan was er echt iets goed fout en kon je computer niet hetzelfde account behouden als administrator.) 

In dat geval is je originele account nog op de computer! Geen zorgen, het haalt nooit iets weg! Maar moet je die even zoeken. Al je bestanden staan nog onder "Users".

Als je de wachttijd en vertraging weghaalt, kost dit 3 minuten werk. Ik weet niet eens _wat_ het probleem was. Maar ik doe de standaardstappen bij elk computerprobleem:

  * Netwerk uit en log in via "safe mode".
  * Vraag de computer om alles te checken en repareren. (Je hebt nog meer commando's daarvoor, maar die had ik niet eens nodig. Google erop los, zou ik altijd zeggen.)
  * Reset of overschrijf de dingen die van belang zijn met iets _anders_.
  * Maak een backup of omweg aan, voor problemen in de toekomst.
  * Profiteer.

Ergens heeft dit het probleem opgelost. Dit waren mijn gedachten:

  * Haar wachtwoord had een hekje. Misschien vond het systeem dat ineens niet meer leuk.
  * Door de accounts te overschrijven, worden de instellingen automatisch veranderd. Dus een "foute instelling" is daardoor misschien weggehaald of overschreven.
  * Safe Mode zet automatisch allerlei dingen _uit_ die anders automatisch _aan_ staan. 
  * Die scan had één ding gerepareerd. Ik kon niet precies zien wat, maar het had te maken met de verbinding met OneDrive van school. Het is dus aannemelijk dat _hier_ het probleem zat.

## Wat is mijn punt?

_Waarom doet ICT dit niet? Waarom gebruiken ze automatisch het minst handige paardenmiddel? Hoezo krijgen zij hiervoor betaald?_

En het enige antwoord dat ik ken, is omdat het zoveel _makkelijker_ is. Ze hebben USB-sticks (of andere computers) klaarstaan, de hele dag, die direct jouw computer kunnen resetten. Na 5-10 minuten is alles leeg en je probleem dus waarschijnlijk opgelost. 

Maar het is alsof je een klein brandje blust door er een hele oceaan op te gooien. Alsof je een gat in de muur van een huis oplost door maar het hele huis naar de grond te werken.

En wat is de boodschap?

Als iemand zegt dat je hele computer leeg moet of gereset, moet je dat niet klakkeloos accepteren. De kans is groot dat het _niet_ hoeft. De kans is groot dat problemen dan terugkomen, want je lost ze niet écht op, je duwt ze gewoon even in een hoekje.

Ik begrijp nu heel veel over hoe Windows werkt en hoe accounts worden geregeld. Dit wist ik niet voordat ik hieraan begon. Maar als ik (of iemand anders) nu hetzelfde probleem heb? Dan kan ik al met 99% zekerheid de oorzaak vinden.

## Conclusie

Drie adviezen:

  * Verbind jezelf niet met een algemeen systeem of netwerk, zoals een schoollaptop automatisch zal doen. Koppel jezelf los en geniet.
  * Maak altijd backups, het liefst elke dag, op twee onafhankelijke plekken.
  * Probeer zelf computerproblemen uit te zoeken. Het is een vaardigheid die alleen maar _belangrijker wordt_, elk jaar. Het voorkomt tevens dat de officiële ICT support jouw hele apparaat "moet" leeghalen voor de lage prijs van een paar honderd euro arbeidskosten.

Om eerlijk te zijn, ik schreef dit artikel vooral om vast te leggen wat ik heb gedaan om dit probleem op te lossen. (Ik stuur het door naar mijn broertje en zusje om te delen, om verdriet bij andere leerlingen te voorkomen.)

_Hoe weet jij dit allemaal?_ Ik ben geen "computernerd" of afgestudeerde informaticus. Ik heb vanaf mijn twaalfde constant mijn eigen apparaten laten crashen en geprobeerd websites/spellen te maken die eigenlijk niet konden :p Zo leer je om niet bang te zijn en stapje voor stapje een computer weer aan de praat te krijgen. Je leert een hoop van vallen ... zolang je weer opstaat.

Zoals ik altijd zeg: werkt je apparaat niet? Ga op alle knoppen drukken en probeer kabels in alle gaten te steken. Het geeft je op z'n minst een indicatie waar je de oplossing moet zoeken. (Er zijn vrij weinig knoppen of commando's die data _weghalen_ of iets definitief _vernielen_. Je hoeft daar meestal niet bang voor te zijn.) En zelfs als je een keer een grote fout maakt en je computer wist, dan doe je dit in de toekomst _nooit meer_!

_Leuk Tiamo, maar dit werkt niet voor mij?_ Dan kan je altijd nog een opstart-USB maken. Gebruik een computer die wel werkt, download de "Windows Media Creation Tool", volg de stappen om het op een USB te zetten. Plug de USB in je crashende computer. Vervolgens kan je bij die "geavanceerde opties" kiezen om "vanaf een opstartschijf op te starten".

Door op te starten vanaf die USB, heb je nu volledige toegang om de originele computer te repareren of veranderen, zonder dat fouten daar in de weg zitten. Maar dat moet je even verder Googlen als het nodig is.

De opstartschijf is in mijn ogen al een "laatste redmiddel". Het werkt meestal, maar het is veel meer werk en heeft wat haken en ogen. Dat ICT automatisch nog een paar stappen _daarna_ kiest, is onbegrijpelijk.