---
title: Het zoveelste voorbeeld waarom programmeren soms een hel is
author: tiamopastoor
date: 2022-08-02T02:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Ik heb vorig jaar mijn spellenwebsite een gigantische update gegeven. Het is nu, in mijn ogen, echt professioneel, mooi, functioneel, snel te updaten voor mij, ga zo maar door.

Maar om dit te bereiken moest ik achter de schermen best wat moeilijke capriolen uithalen.

Om de website sneller te maken, gebruik ik nieuwere bestandsformaten (zoals **.webp**) die kleiner zijn en dus sneller laden. Maar niet alle browsers ondersteunen alle formaten, dus je wilt er _meerdere_ aanbieden.

Om mijzelf een berg werk te voorkomen, schreef ik een stukje code. Als ik zeg "Hé ik wil een plaatje hier", doet de code "Ta da, hier is een lijst met alle mogelijke versies zodat de browser zelf kan kiezen!"

Dit werkte prima ... behalve in één geval. Als ik een plaatje _tussen_ een stuk tekst wilde zetten, negeerde hij deze code. (Alle andere plaatjes zijn logos, kopjes, knoppen, allemaal los van paragrafen tekst.) 

Wat ik ook probeerde, het werkte niet, hij wilde er niet aan.

Uiteindelijk koos ik dus om voor deze plaatjes maar een omweg te schrijven. Iets anders dat "soort van goed genoeg" werkte, zodat ik door kon.

We spoelen een jaar vooruit. Ik update mijn "static website generator" (ik gebruik _Hugo_ om mijn websites te genereren) naar de nieuwste versie. Dat werd tijd, want ik zat op versie 81 en we waren inmiddels bij versie 101.

(Eén van de redenen dat ik Hugo gebruik is omdat het echt heel actief wordt bijgehouden. Constant wordt het sneller, beter, slimmer, etcetera. En inderdaad, na deze update was het genereren van deze gigantische spellenwebsite 10x zo snel.)

De dag erna wil ik een nieuw bordspel op de website zetten en **alles crasht.**

Hij stopt meteen met genereren omdat hij een hele hoop plaatjes nergens kan vinden.

Dus ik zoek terug in de "changelogs" (lijst met wat er precies is veranderd in elke versie) maar kan _niks_ vinden dat ook maar _iets_ te maken heeft met plaatjes laten zien op de manier die ik doe.

Ik lees de error. Hij kan de plaatjes niet vinden omdat de URL _van geen kant klopt_. Maar ja, ik heb géén idee waarom het niet klopt. Zeker omdat het alleen bij een paar plaatjes gebeurt, niet bij andere.

Uiteindelijk ben ik **een hele ochtend kwijt geweest** aan achterhalen wat de stomme oorzaak van het probleem was.

Ik heb de oorzaak natuurlijk al verklapt: die omweg die ik had geschreven.

Inmiddels hadden ze _ergens_ die fout gefikst waardoor ik _een jaar geleden_ die omweg moest programmeren. Dit was waarschijnlijk een voetnoot. Een detail. Misschien hebben ze het niet eens _bewust_ opgelost. Daarom kon ik het niet vinden.

Maar het goede nieuws was dus dat **de omweg niet meer nodig was!** Hij stuurde nu automatisch die plaatjes tussen tekst _ook_ naar de juiste plek. 

(Dit is een versimpelde uitleg. Er was een extra stap nodig om dit te laten werken. Iets dat natuurlijk nergens was uitgelegd, maar slechts een _comment_ was onder een stukje code. Ik gebruikte namelijk een standaardfunctie om tekst+plaatjes om te zetten in een webpagina. Maar blijkbaar als je _die_ functie gebruikt, werkt het dus niet altijd! Er was een _andere_ functie die hetzelfde deed, maar dan wél overal werkte. Soms vraag ik me af hoe de makers van zo'n systeem hier zelf over denken.)

Dit betekende dat ik vervolgens nog een halfuur alle sporen van die omweg moest wissen, want die stuurde nu alles in de war.

Maar nu werkt het weer. De website is geüpdatet en de laatste projecten staan er op.

Wat is de conclusie? Door te updaten naar de laatste (veel betere) versie van iets, kan je hele project zomaar crashen. En dan moet je urenlang zoeken voordat je realiseert dat je dat hele stuk plakcode moet weghalen waar je een jaar geleden ook al een paar dagen aan had besteed, _omdat de huidige versie niet helemaal werkte zoals het hoort._

En je kan niks anders dan urenlang _zoeken en proberen_, want de computer kan je nauwelijks nuttige informatie geven.

Tot zover mijn volgende voorbeeld waarom programmeren (of werken met computers) soms een regelrechte hel is.