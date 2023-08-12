---
title: Risk – Deel 4
author: tiamopastoor
date: 2017-03-25T15:00:47+00:00
language: nl
categories:
  - Miscellaneous

---
Als laatste, voor de geïnteresseerden, een stappenplan van hoe ik dingen heb gedaan:

  * Ik heb een simulatie geschreven in `Java`. Die speelt gewoon een heel potje, waarbij elke speler volgens een bepaalde strategie speelt ("compleet random" is ook een strategie, een vrij makkelijk te programmeren strategie zelfs). Dat doet hij heel vaak achter elkaar, en neemt gemiddeldes van dingen, en stuurt dat naar een bestand toe (genaamd `simulationResults.r`).
  * Vervolgens schrijf ik code in `R` die dit bestand leest, en er een plaatje van maakt. Hij stapt door elke beurt heen, maakt steeds een nieuw plaatje, en levert zo uiteindelijk een folder vol met honderden, misschien wel duizenden plaatjes van één potje Risk.
  * Vervolgens open ik de command line, en doe ik iets met `ffmpeg` om al die plaatjes om te zetten in één filmpje. Het precieze commando is:  
    Je moet wel eerst, in de command line, naar de folder gaan waar alle bestanden inzitten.

De map van het bordspel Risk heb ik helemaal zelf moeten tekenen en omzetten in een shapefile (`.shp`) om in te lezen in `R`. (Het was een pokkewerk, maar het wel waard.)

Alle bestanden zijn te vinden [in deze Google Drive folder](https://drive.google.com/drive/folders/1QgPrBVIdqUFGw2CT9ZiIAwpmQ0jZjwT8?usp=sharing" target="_blank" rel=).

(Het is een project dat je direct in NetBeans zou kunnen openen. Plots worden automatisch in de "Plots" folder gezet, bij het R-bestand moet je eventueel nog de working directory aanpassen naar waar deze folder op je harde schijf staat.)

{{% update %}}
Voor latere simulaties heb ik een gratis programmaatje "ImageJ" gebruikt. Hierin kun je een folder laden (met daarin je reeks plaatjes), en met één druk op de knop maakt ie er een video van.
{{% /update %}}

{{% update %}}
Een alternatief dat ik voor andere projecten wel eens heb gebruikt, is het gratis programmaatje "LiceCap". Hiermee kun je gewoon je computerscherm opnemen (terwijl je de plaatjes afspeelt, of iets anders interessants doet). Daarvan maakt hij vervolgens een GIF-bestand. (Een geanimeerd plaatje, in plaats van een video.)
{{% /update %}}