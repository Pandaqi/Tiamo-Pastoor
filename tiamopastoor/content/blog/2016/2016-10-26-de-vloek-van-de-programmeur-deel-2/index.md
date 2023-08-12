---
title: De Vloek van de Programmeur – Deel 2
author: tiamopastoor
date: 2016-10-26T14:00:41+00:00
language: nl
categories:
  - Miscellaneous

---
Iedereen die ooit iets van code heeft geschreven, weet dat je _comments_ kunt achterlaten. Je kunt een leuk berichtje voor jezelf achterlaten (in de code) waarin je uitlegt wat een stukje code doet, of wat er nog gedaan moet worden, of dat je er twee maanden geleden achterkwam dat er iets goed fout zat, maar je hebt geeeen idee wat het probleem is. (Zoals, "wat gebeurt hier in vredesnaam? Hij moet de naam van speler 1 weergeven, maar in plaats daarvan zie ik allemaal Chinese tekens. Raar ding. Zal wel aan de computer liggen.") Comments worden weggehaald wanneer de code wordt uitgevoerd, en ze zorgen over het algemeen niet tot problemen met de grootte of snelheid van wat je dan ook aan het maken bent.

Niet geheel onverwacht, zijn deze comments dan ook een belangrijk speerpunt van menig programmeer-cursus. Als je voor jezelf programmeert, mag je het helemaal zelf weten. Je mag nergens comments neerzetten (dat maakt de code soms wel korter en overzichtelijker, trouwens), je mag van mij een kleine autobiografie schrijven voor elke, individuele, regel. Maar als anderen er naar gaan kijken, komt er sowieso gezeik over de comments.


Toen ik op de universiteit programmeerles kreeg (in Java, wat ik nog nooit had gebruikt), had ik al een hoop programmeerervaring (in zo'n beetje alles behalve Java eigenlijk). In plaats van naar colleges komen of druk huiswerkopgaves oefenen, besteedde ik mijn extra verkregen tijd aan andere vakken en eigen projecten. Toen het eindtentamen kwam, was ik er helemaal klaar voor. Ik ging zitten, na drie kwartier was ik als eerste klaar, leverde het in, en ging met een goed gevoel naar huis (het was immers zomervakantie).

Ik wist zeker dat alles goed was, want dat kon je testen. Als een opgave vroeg om met een "for-loop" de eerste twintig priemgetallen uit te printen, dan kon je dat checken. En als je zonder "for-loop" alleen  maar "Kaas" op je scherm printte, wist je zeker dat je het fout had.

Maar ik had geen tien. Ik had een 8,5. Want, ik had te weinig comments, en ze waren niet constructief genoeg. Waar ik bovenaan elke opgave typte

> "variabele x doet dit, variabele y doet dit, deze for loop doet dit---klaar is kees!"

wilden zij blijkbaar bij elke regel

> "dit is een variabele x. Hij houdt van 's ochtends de krant lezen, een donut eten, en lekker naar zijn werk rijden. 's Avonds als hij thuis komt houdt hij de waarde 20 vast, want dat is het aantal priemgetallen dat hij elke dag zoekt. Hij heeft een hondje Japie, en als hij die gaat uitlaten komt hij altijd variabele y tegen, die checkt of iets wel een priemgetal is of niet. Samen willen ze een boyband oprichten, maar dat heeft niks met de opgave te maken."

Comments zijn handig en je moet ze zeker gebruiken, maar we moeten niet overdrijven. Als je met mensen samenwerkt moet je zeker gezamenlijk een stijl afspreken, zodat er geen onduidelijkheid ontstaat en je nooit commentaar krijgt (of hoort te krijgen) over je comments. Maar comments zijn bedoeld om onduidelijkheid weg te werken, en extra duidelijkheid te scheppen. Ze zijn dus alleen broodnodig als de code die je schrijft op zichzelf een grote spaghetti is :p