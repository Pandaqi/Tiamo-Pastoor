---
title: Hoe maak ik mijn website sneller?
author: tiamopastoor
date: 2021-10-14T14:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Mijn online aanwezigheid bestaat op dit moment uit maar liefst 4 unieke websites:

  * Dit blog (Niet Dat Het Uitmaakt)
  * Mijn spellenstudio ([Pandaqi][1]) + bijbehorend blog ([Pandaqi Blog][2]) + bijbehorende tutorial website ([Pandaqi Tutorials][3])
  * Mijn muziekwebsite ([El Troubadour][4])
  * En mijn portfolio die alles samenbrengt ([Rode Panda][5])

Dat is vrij veel. Een aantal van die websites heb ik _jaren_ geleden gemaakt. Sindsdien heb ik er wel veel inhoud op gezet ... maar de achterliggende code is onaangeraakt gebleven. Met een hele logische reden: die code is een grote rotzooi en overduidelijk geschreven toen ik pas net begon met (professionele) websites ontwikkelen.

Het probleem wordt verergerd doordat ik altijd een laag budget heb gehad. Daardoor kwam de _snelheid_ (en _simpelheid_) van de website vooraan, in plaats van een goede code/systeem/gebruiksvriendelijkheid. 

Mijn portfolio is letterlijk één bestand die, met allerlei trucjes, toch een hele grote website kan laten zien. Dat is best _knap_ (vind ik zelf), maar niemand bezoekt mijn portfolio om te zien hoe knap ik ben :p Ze willen een mooie, functionele website die vaak wordt geüpdatet. En dat is het nu niet echt.

Dat lage budget heb ik nog steeds. Al mijn websites draaien op één server, met een ultralage hoeveelheid geheugen (en bandbreedte = hoeveel data ik per maand mag verbruiken). 

(Ik wil sowieso upgraden, maar dan moet ik eerst een reserve aanleggen, zodat ik in de voorzienbare toekomst een _echt goede server_ kan onderhouden. Want nadat ik alle updates in dit artikel heb gedaan, is veruit de grootste boosdoener het feit dat ik een langzame server heb.)

Maar gelukkig ben ik inmiddels gegroeid. Die oude projecten hebben me veel geleerd, waardoor ik nu veel beter weet wat je wél moet doen. 

Ook is het internet gegroeid. Allerlei technologieën zijn nu beschikbaar die er pakweg vijf jaar geleden niet waren. (En vrijwel overal ondersteund. Behalve door Apple, want die lopen altijd hopeloos achter qua web browser, en dat is nog een understatement.)

In dit artikel leg ik uit **welke lessen ik heb geleerd en wat ik allemaal heb veranderd (aan mijn oude websites) om ze véél beter, sneller en effectiever te maken.**

Als je zelf geïnteresseerd bent in het internet, websites, of programmeren, is dit een geweldig artikel voor jou! Als je niks weet van programmeren maar wél een inkijkje wil in _wat er allemaal achter de schermen gebeurt_, is dit ook wel een grappig artikel.

{{% remark %}}
Ik heb besloten mijn tutorial website (de oudste van allemaal) voor nu te laten voor wat het is. Die heeft zoveel unieke onderdelen dat het overzetten makkelijk een klus kan worden die meer dan een maand duurt. En dat terwijl ik op dit moment niet van plan ben ooit nog tutorials toe te voegen. Dus ik heb het vooral over mijn portfolio en mijn spellenwebsite.
{{% /remark %}}

## Wat is nou eigenlijk het probleem?

Ik heb deze veranderingen lang uitgesteld, met het idee van "zo erg is het niet". Want meerdere websites helemaal opnieuw ontwerpen _is best veel werk_.

Maar uiteindelijk zijn de problemen overduidelijk.

**Probleem #1:** mijn oude websites zijn _langzaam_. Ze moeten elke keer opnieuw dingen van de server halen, dingen uitrekenen, en meestal een paar trucjes toepassen om alles mooi te maken. De plaatjes zijn veel te groot. Ik maak geen gebruik van moderne technologie.

**Probleem #2:** ik wil véél meer plaatjes gaan gebruiken op die websites. Nu gebruik ik een gratis website om mijn plaatjes te hosten ... maar dat is heel gevaarlijk. Wat als ze ermee ophouden? Wat als ze eruit liggen? Wat als ze het een keer betaald maken? Ik zou _al mijn werk moeten overzetten_. Dus ik wil de plaatjes op mijn eigen server hebben _en_ veel kleiner maken.

**Probleem #3:** ze vervullen hun functie niet geweldig. Mijn portfolio, bijvoorbeeld, laat heel netjes alles zien wat ik heb gemaakt + hoe je mij kunt inhuren. Maar ik doe zoveel verschillende dingen, dat elke potentiële werkgever waarschijnlijk niet weet wat ik nou precies doe en waar diegene moet kijken. Dat kan en moet beter. Overzichtelijker, gestroomlijnder, mooier, etcetera.

**Probleem #4:** het is een _hel_ voor mij om de websites aan te passen. Het kost veel tijd en moeite, terwijl ik weet dat het zoveel makkelijker kan. En het gevolg van zo'n onhandig systeem? _Je hebt geen zin meer om de websites te updaten._ Waardoor, op het moment dat ik dit schrijf, mijn laatste 5 projecten niet eens op het portfolio staan.

Dat dus. Laten we nu kijken hoe we dat oplossen.

## Databases zijn niet geweldig

Toen ik websites leerde maken, was het internet nog piepjong. (Het lijkt nu misschien alsof ik heel oud ben, maar dan moet je even beseffen dat het internet nu nog steeds verschrikkelijk jong is.)

Het nieuwste, hipste, meest geweldige dat door iedereen werd gebruikt? Databases. (En PHP/MySQL, de talen om ermee te communiceren.) Dus ik gebruikte het ook voor alles.

Het idee is simpel. Alle informatie over je website (de artikelen, de gebruikersaccounts, etcetera) wordt opgeslagen, _los van de website_, in een tabel ergens. Elke keer als iemand je website bezoekt, gaat jouw code (op basis van de URL) zoeken naar het juiste artikel in de database om te laten zien. Als hij iets vindt, plopt hij het op de website, en stuurt het geheel terug.

Maar inmiddels zijn er veel betere manieren gevonden.

Dit zijn namelijk de nadelen van databases:

  * Het is een los systeem van je website. Dat betekent dat je een extra taal moet leren, meer dingen op je server moet (aan)zetten, een extra account moet hebben waarop je steeds opnieuw moet inloggen
  * De database moet steeds opnieuw worden geraadpleegd, elke keer als iemand komt kijken, want misschien is het wel ondertussen veranderd. Dat kost allemaal tijd, moeite, en bandbreedte.
  * Een database is letterlijk een droge tabel. Dat is niet bepaald gebruiksvriendelijk om bij te houden en te updaten.
  * Met één kleine fout kan je ineens hele delen kwijtraken, of je website crashen, en het kan lang duren om dat goed te herstellen.

Sommige delen hiervan worden opgelost met een "CMS" (Content Management System), zoals het bekende WordPress. Dan hoef je namelijk niet _zelf_ handmatig met je database te knoeien, maar je hoeft alleen op een paar knopjes te drukken en de CMS doet alles voor je.

Maar het lost niet alle delen op. Want je hebt nog steeds een database waarmee je constant communiceert. Je hebt een heel _extra_ systeem dat je moet installeren (de CMS zelf), wat ook weer superveel baggage meebrengt en je website vertraagt. (Dit blog, ondanks mijn vele pogingen het te versnellen, is veruit de langzaamste van al mijn websites.)

## Statische websites zijn (meestal) beter

En zo kwam ik, na heel wat onderzoek en probeersels, op het bestaan van de **static site generator**.

Dit is het idee:

  * Je installeert een klein programmaatje op je computer.
  * Je werkt op je computer (dus zonder server, zelfs zonder internetverbinding als je wilt) aan de website, met behulp van allerlei handige _tools_ die het programmaatje je geeft.
  * Als je klaar bent, druk je op "Exporteer!" (of je typt het commando daarvoor), en jouw inhoud die je hebt toegevoegd worden _omgebouwd_ tot een volledige website met alles erop en eraan.
  * Je sleept deze folder rechtstreeks naar je server en klaar is kees.

Oftewel, in plaats van dat je een losse database hebt die je constant raadpleegt, _wordt de database in je website zelf gezet_ (wanneer je op die exporteer-knop drukt). Je website is niets anders dan normale tekstbestanden in normale folders.

Dit maakt hem ongelofelijk snel. Een pagina bezoeken, ongeacht hoe groot en complex die is, is vaak niets meer dan een paar kilobyte van de server downloaden. 

(Voor de duidelijkheid, WordPress laadt standaard een aantal _megabyte_ (dus duizend kilobyte) bij elke pagina mee, want die code heeft het nodig om te functioneren. Of die code _denkt_ het nodig te hebben. In mijn ervaring zijn veel ontwikkelaars een beetje nonchalant bij het ontwerpen van hun thema en voegen lukraak allerlei dingen toe die ze niet meer gebruiken :p)

Oftewel, op alle mogelijke manieren hebben deze "statische websites" grote voordelen. Als je de "[Google Speed Test][6]" doet voor dit blog, krijg je (op moment van schrijven) een score van 61/100, ondanks mijn vele pogingen dit te verbeteren. 

Mijn laatste website (El Troubadour) is al een statische website en krijgt, zonder enige moeite van mijn kant, 83/100.

{{% remark %}}
Ik ga dadelijk praten over die ~20 scorepunten die ik nog mis. Want ik weet inmiddels waardoor het komt en hoe je het oplost.
{{% /remark %}}

{{% remark %}}
Overigens gebruik ik hier de resultaten voor _mobiel_, want voor _desktop_ is het altijd sneller en beter, en kan je met veel meer wegkomen. En nee, zo'n test is natuurlijk niet alles, maar het is wel een geweldige moderne richtlijn waarbij _hoger altijd beter is_. De test is van Google zelf, en zij geven snellere websites sterk de voorkeur, dus je kan maar beter een beetje meewerken.
{{% /remark %}}

**Waarom gebruikt niet iedereen dit?** Nou, deze redenen kan ik zien:

  * Het is een vrij recente ontwikkeling en het kost moeite om oude websites (die bijv. WordPress gebruiken) over te zetten.
  * Veel mensen weten niet dat het bestaat. Ze zoeken gewoon "hoe maak ik een blog", vinden waarschijnlijk WordPress, en gebruiken dat (met redelijk succes).
  * Het is een _net_ iets hogere drempel dan andere systemen, want je moet ietsje meer verstand hebben van computers en servers.
  * Als een website heel _dynamisch_ is (met inhoud die _constant_ updatet, gepersonaliseerde pagina's voor bezoekers, etcetera) werkt dit natuurlijk nooit. Punt.

Vooral die laatste reden is belangrijk. Mijn spellenwebsite is zo'n dynamische website: elk spel heeft een _eigen_ omgeving, met eigen plaatjes, filmpjes, lay-out, functionaliteit. Dus daarvoor kan ik het systeem niet gebruiken. (Tenzij ... ik wat extra onderzoek doe en aanpassingen maak, daarover later meer.)

Maar voor mijn portfolio? Perfetto!

Dus de eerste stap is nu: _al die tekst uit de database kopiëren naar mijn statische website_. Ik spreek jullie weer over een week :p

Sommige mensen ondermijnen het nut van statische websites door te zeggen "door deze X trucjes/plugins te gebruiken kan je WordPress (bijna) net zo snel maken!" (In dit artikel is WordPress een beetje een stand-in voor "elke soort website die een database gebruikt".) En ja, dat is ook waar, en meestal goed om te doen. 

Het enige probleem is dat de "plugins" die je gebruikt ... je website steeds statischer maken :p  
  
Eén van die trucjes is bijvoorbeeld door heel sterk te "cachen". Dat betekent dat pagina's 100% worden vastgelegd in het geheugen en alleen eens in de zoveel tijd worden ververst. Zo hoef je, wanneer een bezoekers langskomt, niks meer aan de database te vragen, maar alleen de vastgelegde pagina terug te geven. 

Maar ja, dat is dus compleet statisch!  
  
Dus je doet heel veel moeite om van WordPress iets anders te maken, waarbij je alle voordelen verliest en het jezelf moeilijker hebt gemaakt.

Deze reeks gaat verder in deel 2: [Hoe maak ik mijn website sneller (deel 2)][7]

 [1]: https://pandaqi.com
 [2]: https://pandaqi.com/blog
 [3]: https://pandaqi.com/tutorials
 [4]: https://eltroubadour.com
 [5]: https://rodepanda.com
 [6]: https://developers.google.com/speed/pagespeed/insights/
 [7]: /blog/2021/2021-10-14-hoe-maak-ik-mijn-website-sneller-deel-2