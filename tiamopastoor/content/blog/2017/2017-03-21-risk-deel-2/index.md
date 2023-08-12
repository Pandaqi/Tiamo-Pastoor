---
title: Risk – Deel 2
author: tiamopastoor
date: 2017-03-21T20:00:10+00:00
language: nl
categories:
  - Miscellaneous

---
Dit is het vervolg van een eerdere post waarin ik probeer Risk te simuleren, en daarmee elk spellenavondje minder leuk maak door altijd te winnen. Of niet, we zullen zien of het iets oplevert.

## Vraag 5: Welke strategie is het beste?

Voordat we dat kunnen bekijken, moeten we weten hoe we "strategie-goedheid" meten. Het meest logische is natuurlijk: "hoe vaak de speler met die strategie wint". Als dit meer is dan normaal, is het een goede strategie, als het minder is, is het een slechte strategie.


Als je zo naar gemiddeldes kijkt, echter, kun je een vertekend beeld krijgen (aangezien niemand miljoenen potjes risk gaat spelen). Als gevolg kijk ik ook naar een ordening van winsten: hoe vaak komt elke speler op de eerste plek, de tweede, de derde, et cetera.

De speler die als eerste haar geheime missie haalt wint. Daarna krijgt iedere speler een score (huidige aantal legers + aantal legers per beurt), en wordt daarmee de verdere rangschikking gedaan.

## De Random Strategie

Voor de random strategie ziet de verdeling er als volgt uit.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      253
    </td>
    
    <td>
      254
    </td>
    
    <td>
      246
    </td>
    
    <td>
      247
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      302
    </td>
    
    <td>
      263
    </td>
    
    <td>
      209
    </td>
    
    <td>
      226
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      287
    </td>
    
    <td>
      303
    </td>
    
    <td>
      263
    </td>
    
    <td>
      147
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      158
    </td>
    
    <td>
      180
    </td>
    
    <td>
      282
    </td>
    
    <td>
      380
    </td>
  </tr>
</table>

We zien dat de verdeling van winst ongeveer gelijk is, maar wat opvalt is een verschuiving van één plek: speler 1 wordt het meeste tweede, speler 2 wordt het meeste derde, speler 3 het meeste vierde ... en gek genoeg wordt speler 4 ook het meeste vierde. Maar, de verschillen zijn niet gigantisch groot, dus het is een goed teken dat de kansen ongeveer gelijk zijn.

Zoals eerder gezegd: de eerdere spelers hebben wel een klein voordeel, aangezien zij als eerst mogen aanvallen of gebieden innemen, maar met de juiste strategie zou dat zo weggeveegd moeten worden.

## De Continenten Strategie

Speler 1 denkt vanaf nu "continenten eerst": hij kijkt waar hij het meeste poppetjes heeft, en probeert dat continent in de wacht te slepen. Dan doet hij hetzelfde bij het volgende continent, enzovoort.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      182
    </td>
    
    <td>
      262
    </td>
    
    <td>
      284
    </td>
    
    <td>
      272
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      206
    </td>
    
    <td>
      275
    </td>
    
    <td>
      239
    </td>
    
    <td>
      280
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      326
    </td>
    
    <td>
      285
    </td>
    
    <td>
      235
    </td>
    
    <td>
      154
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      286
    </td>
    
    <td>
      178
    </td>
    
    <td>
      242
    </td>
    
    <td>
      294
    </td>
  </tr>
</table>

Hmm, this doesn't look good. Speler 1 is er hard op achteruit gegaan door zich alleen op volledige continenten te focussen. Dus: niet doen. Maar, het is best wel een populaire strategie, dus ik ga even kijken hoe het is als twee mensen het gebruiken (speler 1 en 2):

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      191
    </td>
    
    <td>
      210
    </td>
    
    <td>
      299
    </td>
    
    <td>
      300
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      252
    </td>
    
    <td>
      175
    </td>
    
    <td>
      289
    </td>
    
    <td>
      284
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      343
    </td>
    
    <td>
      259
    </td>
    
    <td>
      225
    </td>
    
    <td>
      173
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      214
    </td>
    
    <td>
      356
    </td>
    
    <td>
      187
    </td>
    
    <td>
      243
    </td>
  </tr>
</table>

Tja, toch maar niet doen.

## De "Ik win dik of verlies hopeloos" strategie

Je valt aan. Elke beurt, zelfs als je leger grote kans heeft het niet te winnen.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      132
    </td>
    
    <td>
      290
    </td>
    
    <td>
      312
    </td>
    
    <td>
      266
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      275
    </td>
    
    <td>
      253
    </td>
    
    <td>
      221
    </td>
    
    <td>
      251
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      299
    </td>
    
    <td>
      297
    </td>
    
    <td>
      241
    </td>
    
    <td>
      163
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      294
    </td>
    
    <td>
      160
    </td>
    
    <td>
      226
    </td>
    
    <td>
      320
    </td>
  </tr>
</table>

Okee, het wordt er niet bepaald beter op. Maar dat was ook wel te verwachten. Als speler 1 een ronde wint, dan doet hij dat ongelofelijk snel. Maar meestal wint hij niet.

## De "Misschien ben ik saai, maar ik ga zeker niet verliezen" strategie

Je valt alleen aan als je vrijwel zeker bent dat je gaat winnen (twee keer zoveel poppetjes), en verspreidt je poppetjes netjes over je territoria.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      487
    </td>
    
    <td>
      154
    </td>
    
    <td>
      175
    </td>
    
    <td>
      184
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      253
    </td>
    
    <td>
      303
    </td>
    
    <td>
      200
    </td>
    
    <td>
      244
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      196
    </td>
    
    <td>
      320
    </td>
    
    <td>
      317
    </td>
    
    <td>
      167
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      64
    </td>
    
    <td>
      223
    </td>
    
    <td>
      308
    </td>
    
    <td>
      405
    </td>
  </tr>
</table>

I guess we have a winner :p Dit is wel een indrukwekkende voorsprong, dus ik denk niet dat er nog een strategie overheen kan, maar we zullen kijken. Eerst: wat nu als twee mensen deze verdedigende strategie hebben?

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      419
    </td>
    
    <td>
      364
    </td>
    
    <td>
      85
    </td>
    
    <td>
      132
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      341
    </td>
    
    <td>
      361
    </td>
    
    <td>
      159
    </td>
    
    <td>
      139
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      193
    </td>
    
    <td>
      221
    </td>
    
    <td>
      453
    </td>
    
    <td>
      133
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      47
    </td>
    
    <td>
      54
    </td>
    
    <td>
      303
    </td>
    
    <td>
      596
    </td>
  </tr>
</table>

Okee, dan gaan ze er allebei op vooruit, alhoewel speler 1 dat meer doet dan speler 2. Dit gaat allemaal ten koste van de spelers die niet verdedigend spelen. Dus, de eerste waardevolle tip van deze reeks: BALANS IS ALLES.

## De "Jullie kunnen me lekker niet pakken" strategie

Je kijkt of er territoria zijn met weinig connecties, zodat je daar redelijk veilig zit (men kan niet makkelijk bij je komen). Daar gooi je al je legers neer, en vanuit daar stuur je ze naar andere minder veilige gebieden toe. Een soort hoofdkwartier-idee. Klinkt tactisch toch? Let's see.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      128
    </td>
    
    <td>
      284
    </td>
    
    <td>
      302
    </td>
    
    <td>
      286
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      352
    </td>
    
    <td>
      217
    </td>
    
    <td>
      215
    </td>
    
    <td>
      216
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      381
    </td>
    
    <td>
      253
    </td>
    
    <td>
      208
    </td>
    
    <td>
      158
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      139
    </td>
    
    <td>
      246
    </td>
    
    <td>
      275
    </td>
    
    <td>
      340
    </td>
  </tr>
</table>

Nope, totaal niet tactisch. Zo zie je maar weer: wie hoofdkwartieren heeft uitgevonden was een slecht militair strateeg.

## De "Ik wil wel balans, maar ik ben ongeduldig" strategie

Hetzelfde als de succesvolle balans-strategie hiervoor, maar je valt al aan als je evenveel of meer legers hebt.

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      325
    </td>
    
    <td>
      224
    </td>
    
    <td>
      210
    </td>
    
    <td>
      241
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      266
    </td>
    
    <td>
      279
    </td>
    
    <td>
      227
    </td>
    
    <td>
      228
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      283
    </td>
    
    <td>
      288
    </td>
    
    <td>
      264
    </td>
    
    <td>
      165
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      126
    </td>
    
    <td>
      209
    </td>
    
    <td>
      299
    </td>
    
    <td>
      366
    </td>
  </tr>
</table>

Nog steeds goed, maar minder goed dan eerst. Dat betekent dat het voorzichtig zijn met aanvallen toch een groot voordeel is, en één van de redenen dat de balans-strategie goed is.

Merk wel op dat dit alleen werkt als je ook de juiste verplaatsing-strategie toepast: je verplaatst alleen van A naar B als achteraf zowel A als B meer legers hebben dan A eerst had.

_Wat?_ Stel A heeft 4 legers, en B heeft er 8. Dan verplaats je er twee, en krijgt A = 6, B = 6 en dat is goed. Beide gebieden hebben namelijk meer dan de 4 legers die A in eerste instantie bevatte. (Als A = 7 en B = 8, dan verplaats je niet, want dat gaat niet goed.)

Oh, ja, men verplaatst altijd de helft van de poppetjes. Dit is simpelweg het meest logisch en redelijk. (Daarbovenop zorgden andere waardes ervoor dat de simulatie erg lang duurde.)

## De "We laten Mexico betalen voor de muur" strategie

Je plaatst al je troepen in grensgebieden, en verplaatst ook al je nieuwe troepen daar naar toe. Als je gaat vechten kijk je eerst of er nog ergens een binnengebied is dat jou van binnenuit kapot zou kunnen maken.

_Wat zijn grensgebieden_? Een grensgebied betekent dat minstens één buurland niet van jou is. (Het is dus de grens tussen jouw territorium en dat van een andere speler.)

_Wat zijn binnengebieden_? Een gebied dat niet van jou is, terwijl alle (of de meeste) buurlanden wél van jou zijn. (In zekere zin is het een "gat" in jouw territorium.)

Ook dit vind ik redelijk goed klinken. (Het zal wel weer tegenvallen, maar goed.)

<table>
  <tr>
    <td>
    </td>
    
    <td>
      Speler 1
    </td>
    
    <td>
      Speler 2
    </td>
    
    <td>
      Speler 3
    </td>
    
    <td>
      Speler 4
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 1
    </td>
    
    <td>
      332
    </td>
    
    <td>
      206
    </td>
    
    <td>
      255
    </td>
    
    <td>
      207
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 2
    </td>
    
    <td>
      269
    </td>
    
    <td>
      275
    </td>
    
    <td>
      200
    </td>
    
    <td>
      256
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 3
    </td>
    
    <td>
      261
    </td>
    
    <td>
      304
    </td>
    
    <td>
      275
    </td>
    
    <td>
      160
    </td>
  </tr>
  
  <tr>
    <td>
      Positie 4
    </td>
    
    <td>
      138
    </td>
    
    <td>
      215
    </td>
    
    <td>
      270
    </td>
    
    <td>
      377
    </td>
  </tr>
</table>

Het is een succes! God zij geprezen! Het is bijna net zo goed als de balans-strategie. Zo zie je maar weer: nooit van binnenuit iemand jouw leger kapot laten maken, en in plaats van grenzen sluiten, kun je ze ook gewoon uitbreiden. (Disclaimer: geldt vooralsnog alleen voor Risk.)

## Nu begint het echte werk

Maar maar maar, nu hebben we steeds speler 1 (en soms speler 2) in z'n eentje een speciale strategie laten uitvoeren, en de rest random laten spelen. Ook hebben we steeds maar voor 4 spelers gekeken. Wat ik in het volgende deel ga doen, is alle spelers een strategie laten kiezen, én proberen om een 6-speler spel te visualiseren.

_Opmerking:_ is het jullie ook opgevallen dat speler 3 steeds profiteert als speler 1 het slecht doet? Dat was bij andere spellen die ik simuleerde ook al zo, misschien zit er een speciale magie op de derde speler. Hij wordt niet hard aangepakt, want hij is niet één van de eerste, maar hij heeft ook niet de nadelen van laatste zijn. Of het is toeval, maar dat zou saai zijn.

WORDT VERVOLGD: [Risk---deel 3][1]

 [1]: /wiskundig-gewauwel/zinderende-simulaties/risk-deel-3/