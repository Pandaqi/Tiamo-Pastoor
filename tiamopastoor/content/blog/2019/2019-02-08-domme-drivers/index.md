---
title: Domme drivers
author: tiamopastoor
date: 2019-02-08T16:00:47+00:00
language: nl
categories:
  - Anecdotes

---
Onlangs startte ik mijn laptop op en werd begroet door een angstaanjagende error: _de computer kan niet opstarten omdat de ventilatoren niet goed werken_. (Met daaronder de opmerking: als je hem alsnog opstart heb je grote kans op crashes en kapotte computeronderdelen door oververhitting. Het was alsof de laptop me uitdaagde.)

Hoewel het een oude laptop is, werkt hij nog goed genoeg om er mijn dagelijks werk mee te verrichten. Ik was dan ook niet van plan om hem zomaar kapot te laten gaan. Ik bekeek de ventilatoren, maar kon zo snel niks zien dat deze blokkeerde. Voor de zekerheid richtte ik een föhn (op koude stand) op alle open delen van de laptop, maar ook hierbij kwam geen vuilprop tevoorschijn. De laptop wilde nog steeds niet opstarten.

Maar ik hoorde de ventilator wel langzaam draaien. Dus hij was ook niet kapot. Wat was het dan? Had ik weer de pech dat een minuscuul draadje ergens binnenin de laptop kapot was gegaan? Moest ik een offer brengen aan de laptopgoden? Was mijn aura vandaag anti-techniek?


Ik startte de laptop opnieuw op. Deze keer negeerde ik de waarschuwing en dwong de laptop om helemaal op te starten. Alles werkte nog, alles ging nog met dezelfde snelheid, _so far so good_. Ik herinnerde dat er ooit een "assistent"-programma werd geleverd bij deze computer. Ik opende dat programma voor het eerst. Wat denk je? In rode letters, met uitroeptekens en stoptekens, stond er:

> "KRITIEKE DRIVER UPDATE"

Blijkbaar had ik een zwaar verouderde versie van de BIOS. (Dit is de code die communiceert tussen de _hardware_ van een computer---zoals de ventilatoren en het scherm---en de _software_---zoals het besturingssysteem.) Dat had hij ook wel even eerder kunnen melden.

Ik zette alle updates aan, liep weg, kwam even later terug, en voilà---weg error! De laptop voelde als herboren!

Toen wilde ik op het internet. Maar ik had geen internet. Het was niet alsof ik geen verbinding had, of slechte ontvangst, _het hele Wi-Fi systeem was van mijn computer gehaald_. Dit was het proces dat de computer had doorlopen:

  1. "Hé, een update! Eentje voor de internetverbinding! Wat leuk, laten we die installeren."
  2. "Zo, eerst even de oude weghalen. Deïnstalleer Wi-Fi!"
  3. \*even wachten\*
  4. "Hèhè, nu kan ik de nieuwe installeren."
  5. "Wacht---deze nieuwe driver is helemaal niet voor deze computer bedoeld! OH NEE!"
  6. \*ABORT MISSION\*
  7. \*ABORT MISSION\*

Zodoende had ik dus geen Wi-Fi kaart meer over. Hoe moest ik dit oplossen? Nou, het _geniale advies_ op de site van de laptopmaker was natuurlijk "bezoek deze URL en download de drivers weer op je laptop."

MAAR IK HEB GEEN INTERNET. DAT IS HET HELE PROBLEEM.

Lang verhaal kort: ik heb op een andere computer de drivers gedownload, op een USB-stick gezet, teruggezet op mijn laptop, geïnstalleerd ... en toen gezien dat dit geen verschil maakte. Die drivers waren óók de verkeerde.

Uiteindelijk ging ik in 80 dagen rond het internet om uit te zoeken welke driver ik wél nodig had. Bleek ik een "zeer verouderd" model te hebben (bijna 5 jaar oud is blijkbaar zeer verouderd) die dus een compleet andere soort driver nodig had. In de nieuwste versie hadden ze support voor oudere modellen eruit gegooid, dus ik moest door honderden versies terugzoeken welke mijn laptop nog ondersteunde. Gek genoeg hadden ze niet even doorgegeven dat deze update niet automatisch op alle laptops moest worden toegepast.

Na het doorlopen van hetzelfde omslachtige proces als hierboven werkte deze gelukkig wél.

Ik haat drivers. En vooral bedrijven die updates forceren (_looking at you, Microsoft_), maar tegelijkertijd niet zeggen dat ze iets doen of dat er iets aan de hand is.

Als ik een lijstje moest maken van "waarschijnlijkste oplossingen voor problemen met de pc", zou dit de top 3 zijn:

  * Opnieuw opstarten/installeren.
  * Nog een keer drukken.
  * Drivers updaten.

Hierbij hoort ook een eervolle vermelding voor "eigen schuld, dikke bult". Schrikbarend veel mensen zetten 100 tabbladen open en zijn dan verbaasd dat de computer enorm traag reageert.