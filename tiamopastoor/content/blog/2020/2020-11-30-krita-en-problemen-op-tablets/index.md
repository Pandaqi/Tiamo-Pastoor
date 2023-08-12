---
title: Krita en problemen op Tablets
author: tiamopastoor
date: 2020-11-30T16:00:48+00:00
language: nl
categories:
  - Miscellaneous

---
De gratis tekensoftware [Krita][1] maakt al jarenlang steeds meer indruk op mij, elke keer als ik een nieuwe update voorbij zie komen.

(Bovendien hebben ze een mooie website. Niet eentje die eruit ziet alsof het uit 1990 komt, wat doorgaans jammer genoeg het geval is bij gratis software.)

Dus ik wilde dit programma proberen!

Binnen een minuut was het gedownload en geïnstalleerd, maar toen ik wilde tekenen op mijn **Surface Pro** ... ging er van alles mis.

De lijn was haperig, vertraagd, soms niet eens waar ik tekende. Hij reageerde nauwelijks op verschil in druk. Nog raarder: hij deed het _perfect_ in het "testgebied" van elke brush, maar _compleet verkeerd_ als ik op een andere plek ging tekenen.

Hoe lossen we dit op? Laat mij jou een frustrerende paar uur besparen en uitleggen hoe ik dat heb gedaan!

Deze stappen zijn voor **Krita 4.4.1** en de **Surface Pro 4**, maar ze zullen nuttig zijn voor de meeste softwareversies en de meeste tablets.


## Stap 0

**Stap 0:** Als je het programma _niet_ in het Engels hebt staan, verander dat dan zo snel mogelijk.

Ik zie oprecht het nut niet van dit soort software in het Nederlands gebruiken. Alle informatie die je online vindt is niet (direct) bruikbaar. De gebruikte termen zijn in de hele industrie hetzelfde, dus die moet je toch kennen.

Ga naar Settings > Switch Application Language > American English. Hij vraagt automatisch of je wilt herstarten, accepteer dat.

## Stap 1

**Stap 1:** Ga naar Settings (menu aan de bovenkant, richting het einde) > Configure Krita > Tablet Settings.

Verander de setting naar **Windows 8+ Pointer Input**.

Herstart het programma! (Heel belangrijk. Anders merk je geen enkel verschil. Deze keer doet hij het _niet_ automatisch.)

## Stap 2

**Stap 2:** Nog steeds in de settings, ga naar General > Tools > **Enable Touch Painting**.

Zet dit uit.

Anders denkt het programma dat elke aanraking met je vingers of muis óók een poging tot tekenen is. (Nu kan je het scherm inzoomen, draaien, etc. _zonder_ bang te zijn voor rare stippen en lijnen.)

## Stap 3

**Stap 3:** selecteer de Brush tool (het penceelicoontje, of druk op B).

Ga nu naar het venster rechtsboven, daar moet je een tabblad "Tool Options" zien. Selecteer dat.

Hier kan je de "**Brush Smoothing**" kiezen. Als je merkt dat je lijnen nog steeds haperig/lelijk/hard zijn, en je vindt dat niet leuk, zet dit dan naar iets anders dan "None".

In mijn geval was "Basic" helemaal prima.

(Als alternatief kan je de Dynamic Brush kiezen, die staat een stukje rechtsonder de Brush. Deze doet iets soortgelijks automatisch, maar je hebt iets van vertraging in je lijn zitten omdat hij deze moet corrigeren.)

## Stap 4

**Stap 4:** teken erop los!

Dit is een soort wereldkaart die ik vanochtend tekende voor een prentenboek waaraan ik werk. (Ik moet nog een beetje leren wat alle verschillende _brushes_ doen en hoe je ze het beste gebruikt, maar op zich vind ik het resultaat redelijk.)

![](/uploads/2020/11/Kaart_result.webp)

Zo, dit was even een korte aankondiging. Ik heb _urenlang_ in groeiende frustratie geprobeerd dit programma normaal te laten functioneren met mijn tablet, wetende dat er niks mis was met de pen of de rest van het apparaat. De stappen hierboven hebben uiteindelijk alles opgelost.

 [1]: https://krita.org/en/