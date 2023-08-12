---
title: Problemen met CloudFlare
author: tiamopastoor
date: 2021-10-04T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Ik gebruik al jarenlang de (gratis) service van [CloudFlare][1] om mijn websites te verbeteren. (Geheel gratis kunnen zij je snelheid verbeteren, je website beveiligen tegen aanvallen, en nog veel meer.)

Dus mijn eerste suggestie is: als je dit nog niet doet voor jouw websites, doe het wel! 

CloudFlare is de enige reden dat ik al vijf jaar lang een aantal gigantische websites heb laten draaien op een hosting waar ik maar 25 GB per maand mag versturen (naar bezoekers) en 2 GB opslagruimte heb. Zij zorgen bijv. voor een "cache" op hun netwerk, zodat bezoekers niet eens meer mijn server hoeven lastig te vallen. (Alleen al de afgelopen 24 uur hebben zij mij op deze manieer 11 MB bespaart.)

{{% remark %}}
Hun uitleg voor dit gratis plan: "we kopen systemen/infrastructuur in bulk op, dus waarom alles wat we toch over hebben niet inzetten voor gratis gebruikers?" En, voor zover ik kan zien, zijn ze hierdoor alleen maar groter en succesvoller geworden.
{{% /remark %}}

Maar ... als je gaat rotzooien met je server kunnen er natuurlijk altijd problemen ontstaan.

Onlangs heb ik alle plaatjes van dit blog (en mijn andere spellenblog) overgezet naar een nieuw formaat. Dit formaat is veel kleiner, waardoor de websites sneller en kleiner worden.

Dit was een behoorlijk langdurend proces. Zeker omdat ik zo intelligent was om, de eerste paar jaren waarin ik online was, mijn plaatjes _op 5+ verschillende plekken op te slaan_. Dus ik moest alles bij elkaar verzamelen, de juiste naam geven, converteren, en weer terugzetten.

Het resultaat? Tot mijn verbazing deed de helft van de plaatjes het perfect ... en de andere helft verscheen niet!

**Eerste stap:** kijken of de URL wel klopt. (Rechtermuisknop => klik op het gebroken plaatje => "Inspect" => bekijk de URL(s).) Ja, die lijkt te kloppen. Even dubbelchecken met mijn server ... jup, perfect.

Dus waarom wordt hij niet gevonden?

**Tweede stap:** misschien een probleem met mijn eigen "cache" of instellingen op de computer. Dus ik uitloggen van mijn servers, alles leegmaken, cache opschonen, etcetera.

Maar het verandert niks. Een groot deel van de plaatjes is perfect overgekomen, maar een groot deel ook niet.

**Derde stap:** misschien iets met het originele bestandsformaat? Maar nee, ook daarin was geen patroon te herkennen. Of het originele plaatje nou .PNG was, of .JPEG, of wat dan ook, de helft deed het wel gewoon.

**Vierde stap:** oké, wat als ik het plaatje _direct_ probeer te bezoeken? (Door de URL te kopiëren naar de adresbalk van de browser en dan op Enter te drukken.)

Dan zegt WordPress (het blogsysteem dat ik gebruik): **"Too many redirects".**

Aha! Daar kunnen we iets mee!

Redirects worden geregeld in een bestandje genaamd `.htaccess` 

Voor sommige websites (die niet een bestaand systeem gebruikten) heb ik dit helemaal zelf moeten programmeren, dus ik dacht meteen "dit is het, ergens in dat bestand staat een regeltje over plaatjes redirecten die anders/weg moet!" Ik was hoopvol.

Maar nee. Ik download het bestand, open het, en er staat niks anders dan de standaard paar regels die WordPress toevoegt. Zoals het hoort, in dit geval.

**Vijfde stap:** Dus ik ga Googlen. Wat kan het zijn? Ik heb alles geprobeerd! Alles wat ze aanraden heb ik ook al geprobeerd!

Nou, afgaande op de titel, raad je het antwoord al. Iemand zei nonchalant in een _comment_: 

> "Mwah, het kan soms ook te maken hebben met je beveiliging. CloudFlare, bijvoorbeeld, heeft verschillende instellingen voor "SSL" (beveiligde verbindingen. Je moet degene kiezen waarbij ze _niet_ met jouw server knoeien."

Als je naar je CloudFlare dashboard gaat, heb je een hoop knoppen bovenaan. Eén daarvan is "SSL/TLS". Als je daarop klikt, krijg je vier opties om dit in te schakelen:

  * **Off** => het staat helemaal uit; geen beveiling; nooit doen 
  * **Flexible** => CloudFlare beveiligt het voor jou, als ze het nodig achten
  * **Full** => volledige beveiliging, vereist dat je zelf een certificaat hebt op je server
  * **Full (strict)** => zelfde als "full", maar nu moet het een officieel certificaat van CloudFlare zelf zijn

Dit blog is een van mijn oudste websites. Toen ik hem oprichtte was deze hele beveiliging nog niet zo'n ding en wist ik ook niet hoe je het moest doen. Als gevolg daarvan is, bij de oprichting, deze instelling naar _Flexible_ gezet. (Ik denk automatisch, maar misschien heb ik dat zelf wel gedaan.)

Maar inmiddels hebben al mijn websites hun eigen certificaten, die ik zelf regel, op hun eigen server.

Dus je ziet het probleem hier al: CloudFlare probeerde iets te beveiligen _wat al was beveiligd_, maar deed dat alleen _voor sommige (oudere) plaatjes_, wat ergens een kortsluiting creëerde waarbij alle servers naar elkaar begonnen te wijzen. ("Nee, _jij_ moet het beveiligen. Nee, _jij_ moet het beveiligen!" => Too many redirects.)

Dus ik zet het naar "Full". Twee seconden later is het opgeslagen. Ik bezoek mijn blog: alles werkt perfect.

_En die andere website dan?_ Twee dagen later bezoek ik die andere website op mijn mobiel, om het nieuwe ontwerp daar te testen. En dan zie ik dat hier óók de plaatjes gebroken waren. Ook hier werkten ineens sommige plaatjes wel, sommige niet.

Maarja, inmiddels had ik geleerd van mijn fouten :p Dus ik bezoek CloudFlare, ga naar SSL, en je raadt het nooit: ook van deze website stond het op "Flexible". Ik zet het naar "Full", leeg mijn cookies/cache, en ta da: alles werkt weer.

Dus dat is hoe je dit hele specifieke probleem oplost. 

Links naar pagina's/plaatjes werken niet, ondanks het feit dat de URL sowieso klopt?

  * Ten eerste: regel je eigen SSL certificaten voor je websites, het is gratis en supermakkelijk. 
  * Ten tweede: zet dan de CloudFlare optie naar "Full".
  * Doe alsof je een internetgenie bent en alsof je niet _urenlang_ hebt vastgezeten op zoiets stoms.


 [1]: https://cloudflare.com