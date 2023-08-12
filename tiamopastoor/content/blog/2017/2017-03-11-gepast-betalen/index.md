---
title: Gepast Betalen
author: tiamopastoor
date: 2017-03-11T15:00:49+00:00
language: nl
categories:
  - Miscellaneous

---
Laatst was ik bezig met een eigen kaartspel/bordspel, en hoefde ik nog maar één onderdeel te ontwerpen: de geldbriefjes. Geld is een erg belangrijk onderdeel in het spel, aangezien je uit het spel ligt als je het niet hebt, en niks kan als je er te weinig van hebt. Het is om die reden dat ik hoge eisen stel aan mijn geldbriefjesvoorraad:

  * Het mag nooit opraken tijdens het spel.
  * Iedereen moet altijd gepast kunnen betalen. Dus, stel je bent iemand 7 euro verschuldigd, dan moet je niet verplicht zijn 20 euro te geven omdat je niks kleiners hebt. (In sommige spellen, zoals Koehandel, is dit wel een grappig element overigens. Vaak ben je veel meer kwijt dan je hebt geboden, omdat je niet gepast kan betalen en het spel geeft er geen reet om.)

Maar, er kwam een oud en bekend probleem om de hoek kijken: mijn grondstoffen zijn schaars en ik ben sterfelijk! Ik kan niet duizenden vellen met geldbriefjes uitprinten, want dat kost teveel tijd en geld, en is niet nodig.


Dus, om dit probleem op te lossen, moest ik op zoek naar de optimale verdeling van geldbriefjes. Ofwel, elk mogelijk getal in een bepaald interval (zeg, 0 euro tot 1000 euro) moet op _zoveel mogelijk manieren_ gemaakt kunnen worden. Hierbij moet ik twee vragen beantwoorden:

  * Welke verschillende waardes voor geldbriefjes moet ik nemen?
  * Hoeveel moet ik van elke soort in het spel stoppen?

## La Theorie!

Gelukkig ken ik hiervoor een simpele wiskundige aanpak, die ik nu ga proberen uit te leggen. Wiskunde doet veel met functies, en in dit geval gaan we dingen doen met _machtreeksen_. Een machtreeks is niets anders dan heel veel verschillende machten van een getal opgeteld:

![](/uploads/2021/09/latex-image-6.png)

Nou kunnen wij die machten gebruiken, om verschillende waardes van geldbriefjes weer te geven! Dus, bijvoorbeeld, voor het geldbriefje met waarde 5 wordt de machtreeks

![](/uploads/2021/09/latex-image-7.png)

_Wat is blabla? Dat klinkt niet wiskundig!_ Klopt, het staat in dit geval voor "dit gaat oneindig lang door". En dat is vaak ook wat je wil, zij het niet dat ik geen oneindig aantal briefjes heb. Stel ik heb maar vier briefjes van vijf, dan moet ik de machtreeks na 4 termen afkappen:

![](/uploads/2021/09/latex-image-8.png)

In dit geval heet het een _formele machtreeks_, just so you know. En, die 1 aan het begin van de machtreeks is wat er gebeurt als je 0 briefjes van 5 gebruikt, want elk getal tot de macht 0 is 1.

## La Toepassing!

Nu we dit weten, kunnen we iets heel leuks gebruiken om ons probleem in één klap op te lossen; we vermenigvuldigen al onze machtreeksen met elkaar!

_Waarom zouden we dat doen?_ Oké, stel je hebt twee briefjes van één, en twee briefjes van twee. Als we hun machtreeksen vermenigvuldigen, krijgen we

![](/uploads/2021/09/latex-image-9.png)

Versimpel:

![](/uploads/2021/09/latex-image-10.png)

Versimpel nog een keer:

![](/uploads/2021/09/latex-image-11.png)

Ofwel, we kunnen de waardes 0, 1, 2, 3, 4, 5 en 6 maken met deze briefjes. Bovendien kunnen we de waardes 2 en 4 op twee manieren maken, want er staat een 2 voor.

_Klopt dit? _Jazeker, 2 kunnen we maken met één briefje van twee (2), of twee briefjes van één (1 + 1).  Ook kunnen we 4 maken met twee briefjes van twee (2 + 2), of één briefje van twee plus twee briefjes van één (2 + 1 + 1).

## La Resultaten?

Het enige dat we moeten doen is heel veel verschillende combinaties briefjes afgaan, hiervoor de machtreeksen vermenigvuldigen, en checken welke het meeste mogelijkheden geeft.

Dit is waar de simpele theorie een beetje ophoudt, echter, en we maar beter de computer het verdere werk kunnen laten doen.

Opmerkingen:

  * Alle standaard bedragen in het spel zitten tussen de 0 en 10 euro. Met hoogstens 8 spelers, denk ik dat het redelijk is om aan te nemen dat ik alle mogelijke waardes tot 8 * 30 = 240 wil kunnen maken.
  * Door allerlei speciale omstandigheden of kaarten, kan een bedrag oplopen tot wel honderden euro's. Ik neem dus aan dat ik met de geldbriefjes hoogstens 8 * 500 = 4000 kan maken.
  * Ik kan, met het huidige ontwerp, 36 geldbriefjes op één A4-tje printen. Ik maak hier even de aanname dat ik niet meer dan 4 A4-tjes wil printen, dus we hebben in totaal 4 x 36 = 144 briefjes om te verdelen. Omdat de resultaten van het algoritme gewoon op te schalen zijn, ga ik hem runnen voor 14 briefjes (en dan de uitslag keer 10 doen).

De resultaten? De beste distributie van briefjes is:

| Soort | Hoeveelheid |
| ----- | ----------- |
| 1 Euro | 43 |
| 2 Euro | 33 |
| 5 Euro | 20 |
| 10 Euro | 10 |
| 20 Euro | 3 |
| 50 Euro | 3 |
| 100 Euro | 26 |
| 200 Euro | 6 |

<!--- Java Results: [6, 6, 5, 2, 0, 2, 7, 0] --->

Hierbij moet ik vermelden dat de resultaten opschalen natuurlijk wel een beetje vals spelen is, aangezien we met gehele getallen werken. Stel je zou, met 140 briefjes, 5 briefjes van 100 moeten hebben, dan zou je bij 14 briefjes er 0.5 moeten hebben, en dat kan het algoritme niet. Dus ik heb het meerdere keren met verschillende hoeveelheden en instellingen gerund, en daarvan het gemiddelde genomen.

Vervolgens heb ik het afgerond naar beneden, en de paar briefjes die ik dan overhoud heb ik gegeven aan de 20 en 50 euro, aangezien die in elke simulatie letterlijk o keer werden gekozen. En dat is ook logisch, want ze zijn te groot om kleine bedragen gepast te betalen, maar te klein om echt grote bedragen te krijgen

Hierbij moet ik ook vermelden dat het algoritme heel zwaar is (aangezien er ongelofelijk veel mogelijkheden zijn om langs te gaan), dus bij nader inzien had ik het misschien niet in R moeten doen en het moeten optimaliseren, maar ach.

## Klopt dit wel?

Jup, voor mijn spel ziet het er logisch uit. Maar, met andere voorwaarden wordt het weer heel anders; Monopoly, bijvoorbeeld, werkt veelal met grotere bedragen (in de tienduizenden), dus daarbij zul je minder kleine briefjes krijgen en veel meer grote.

Ik hoop dat je er wel iets van hebt geleerd, en eventueel iets mee kan. En ik hoop dat ik heb laten zien dat wiskunde van tijd tot tijd toch nog redelijk nuttig kan zijn.

## De Code

Zie deze Google Drive folder: [Gepast Betalen (Simulatie)][1]

 [1]: https://drive.google.com/drive/folders/1RSj2DY9EClNm6TbOTEq9a6Ks0rIhdPPm?usp=sharing