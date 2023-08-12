---
title: 'Speltrucjes: de "dash"'
author: tiamopastoor
date: 2021-07-19T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Laatst liep ik vast bij het maken van een eigen (computer)spel. Dus ik keek eens goed naar al mijn favoriete spellen en probeerde een patroon te ontdekken, of _iets_ dat me kon inspireren.

Zo kwam ik erachter dat bijna al die spellen het concept van een "dash" hebben. En toen ik er langer over nadacht, realiseerde ik _waarom_ het zo goed werkt.

En dat wil ik nu aan jullie uitleggen 🙂 (Zodat jij betere spellen kan maken, of gewoon omdat het interessant is.)

## Wat is een "dash"?

Stel je hebt een poppetje waarmee je rondloopt op een "normale" snelheid. Maar dit gaat te langzaam! Je moet sneller ergens zijn! 

In dat geval druk je op het "dash" knopje (meestal is dit de "B" knop op een XboX controller, of één van de grote schouderknoppen) en **maakt ineens een flinke sprong vooruit.** 

{{% video src="celeste_dash_example.webm" alt="Video niet van mij. De dash is natuurlijk het moment dat ze ineens naar links schiet. En haar kapsel blauw wordt." %}}

Na die grote sprong voorwaarts, rem je snel af, totdat je weer op normale snelheid loopt. Om ervoor te zorgen dat je dit niet _altijd_ gebruikt, hebben dit soort dingen altijd een _timer_: je kunt pas opnieuw dashen als je huidige dash (bijna) compleet is.

Dat is het. Eén knopje, een hele simpele actie, makkelijk te begrijpen en gebruiken. (En héél makkelijk om zelf te programmeren in je spel.)

## Voorbeelden

In het spel **Overcooked** moet je met meerdere spelers ("coöperatief") een keuken runnen. Het gebruik van dashes is _essentieel_ om de beste score te halen, en nét op tijd bij een pan te koken die bijna aanfikt, of nét nog iets af te leveren voordat het level voorbij is.

In heel veel schietspellen (zoals **Nuclear Throne**) is je doel om hele ladingen aan kogels/tegenstanders te ontwijken, terwijl je zelf de juiste items oppakt en de vijanden uitschakelt. Met een dash kun je nét een kogel ontwijken, of om een hoekje sprinten. 

Maar het heeft bij deze spellen nog een nut: meestal ben je tijdelijk "onschendbaar" als je dasht. Als je recht op een kogel afgaat, en je timing is goed, ontwijk je die kogel en loopt dus geen schade.

In het spel **Spelunky**, moet je (eventueel coöperatief) door ondergrondse gebieden springen, hangen, en vliegen op zoek naar de uitgang (en zoveel mogelijk goud). Normaal gesproken loop je relatief langzaam, want elke misstap kan je dood betekenen! (Bijvoorbeeld, je hebt spinnen die aan het plafond hangen, die op je hoofd vallen als je er onderdoor loopt.)

Maar je kunt ook een knop ingedrukt houden om volle bak te rennen. Dit is strikt genomen geen "dash", maar het heeft ongeveer dezelfde uitwerking: zo kan je héél snel van gevaar ontkomen, of nog nét een verre overkant halen.

## Waarom is het zo goed?

Oké. Dus het maakt je sneller in een spel waar _snelheid_ heel belangrijk is, dat is altijd goed. Maar ... waarom laten we de speler dan niet gewoon altijd keihard rennen?

Omdat het ook _nadelen_ heeft om té snel te gaan.

Als je in **Overcooked** tegen een medespeler aanbeukt, knal je naar achteren en kan eventjes niet lopen. Dus als twee mensen precies tegen elkaar "dashen", is dat niet bepaald handig. Ook heb je bijv. levels waar je op ijs staat en in het water kan vallen: je raadt het al, één dash de verkeerde kant op, en je ligt in het water (en je mooie gerecht is niks meer waard).

In die **schietspellen** is je positie natuurlijk van levensbelang. Als je de verkeerde kant op dasht, kan je _juist_ middenin de kogels terechtkomen. Daarnaast, wat je ook doet, na zo'n dash zal je op een hele andere plek staan en dus weer sneel moeten inspelen op de situatie daar.

In **Spelunky** geldt hetzelfde idee. Meestal ga ik (of een medespeler) dood omdat we volle bak wegrennen voor het ene gevaar ... en daardoor de steen die pijlen afschiet over het hoofd zien. Dat ding heeft een heel duidelijk ontwerp, en is op langzame snelheid niet te missen, maar als je ongeduldig wordt en te snel wilt gaan ...

Oftewel, de _dash_ geeft je sowieso een groot voordeel (je bent sneller, je ontwijkt een kogel, je kan dingen halen die je anders nooit had gehaald), maar het heeft altijd grote _risico's_ en _mogelijke nadelen_.

Dit maakt het een strategische zet, een keuze, een creatieve optie. Als je hem gebruikt, moet je hem ook goed gebruiken.

## Over de "timer"

De _timer_ die je een tijdje vastzet is alleen nodig/essentieel in sommige spellen.

In die **schietspellen**: als je halverwege je dash opnieuw kan dashen (eventueel in een andere richting), kan je letterlijk _alle kogels ontwijken_ en _overal zomaar komen_, en het enige wat je hoeft te doen is constant op alle knoppen rammen. Niet leuk. Niet uitdagend.

In **Overcooked**: zoals in het echte leven, zijn de meeste keukens vierkant (en de tafels/machines/kookplaten ook). Dat betekent dat je vaak lange rechte stukken hebt waar je eigenlijk altijd _sneller_ zou willen lopen. Door de dash te timen, moet je alsnog uitkijken wanneer je hem inzet. (Want als je hem precies doet wanneer je eigenlijk de hoek om wilt, knal je dus keihard vooruit.) 

Daarnaast is het een bescherming voor de speler. In zulke chaotische spellen, gaat het sowieso gebeuren dat je knoppen in paniek vier keer indrukt, of niet helemaal perfect je poppetje stuurt, of dingen vertraagt meekrijgt. Doordat je maar één of twee keer per seconde kan dashen, wordt de chaos een beetje weggehaald, en wordt jouw geram op de knoppen omgezet in één zinnige actie :p

Maar niet alle spellen hebben dat. 

In het spel **Celeste** moet je in steeds moeilijker levels springen, dashen, en rennen naar de top van de berg. Dit spel leunt op de dash op alle mogelijke manieren: het is een essentiële _move_ die het spel definieert. Dit is hoe hij werkt:

  * Vlak na het dashen heb je even geen controle over je poppetje. (0.15 seconde)
  * Daarna komt controle terug, maar je vliegt nog steeds door (duurt ongeveer een seconde voordat het klaar is)
  * **Je kunt pas opnieuw dashen als je de grond hebt geraakt**

Oftewel, in plaats van een tijdslimiet op de achtergrond, heeft het spel een simpele _regel_ ingevoegd die je dashes limiteert. Want wat alle spellen gemeen hebben, is dat een "oneindige" dash het hele idee verpest en niet leuk is.

## Conclusie

Als je een spel hebt waarin je poppetjes bestuurt die rondlopen, is het toevoegen van een dash-achtig mechanisme vrijwel altijd een goed idee. (Probeer het op z'n minst, je kan het altijd later weer weghalen.)

Waarom? Omdat het een duidelijk voordeel geeft waar spelers dolgraag gebruik van maken ... maar ook risico's meebrengen die vaardigheid en inzicht vereisen om te omzeilen.

Zorg dat je na de dash eventjes niet kunt bewegen/bijsturen, zorg dat hij snel voorbij is, en zorg dat hij nooit _oneindig_ kan worden gebruikt. Ofwel via een reset over tijd, ofwel door zelf een regeltje te bedenken (dat past bij je spel).

Veel plezier met spellen maken!