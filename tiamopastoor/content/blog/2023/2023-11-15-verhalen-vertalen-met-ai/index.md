---
title: Verhalen vertalen met AI
author: tiamopastoor
date: 2023-11-15T03:00:00+00:00
language: nl
categories:
  - Miscellaneous

---
Ik heb inmiddels behoorlijk veel geschreven in het Nederlands. Maar weet je wat het grootste deel van de wereld niet spreekt? Nederlands. Ik maak langzaam de transitie naar Engels, want daarmee bereik je simpelweg een veel groter publiek, en het kost mij niet meer moeite om verhalen in die taal te schrijven.

Maar ik wilde kijken of ik mijn Nederlandse verhalen kon _laten_ vertalen door AI. Dit deed ik in eerste instantie als grappige experiment, een half uurtje voor het naar bed gaan, maar veranderde langzaam in iets dat serieus _haalbaar was._

Ik heb (sinds vorig jaar) [De Levenssaga][1] online staan. Korte verhalen, opgedeeld in 10 hoofdstukken elk van 1,000-1,500 woorden, geschreven in het Nederlands maar voor alle doelgroepen/leeftijden. Het systeem erachter heeft hele goede ondersteuning voor _meertaligheid_.

Dus dit was het idee:

  * Ik geef ChatGPT één hoofdstuk per keer.
  * En vraag om het te vertalen van Nederlands naar Engels.
  * Eventueel met indicatie van stijl, of specifieke wensen, of extra informatie (voor een meer natuurlijke vertaling)
  * Dat knip-en-plak ik terug in de website, en ta da, de Levenssaga is nu ook Engels.

## Werkt dat?

Alles begint natuurlijk met een naïeve eerste poging. "Please translate the following text from Dutch to English", met daarna het hele hoofdstuk erin geplakt.

Dit ... was al 80% van het werk.

De vertaling die volgt is _grotendeels_ goed leesbaar, accuraat, en meteen bruikbaar. De grootste problemen zijn:

  * Er zit een (niet geheel te voorspellen) limiet aan de antwoordlengte, waardoor hij soms maar de helft doet. Het is ongeveer 500 woorden, net iets minder dan de helft van de meeste hoofdstukken.
  * Hij heeft geen besef van stijl of richting, waardoor het automatisch dingen heel droog en letterlijk vertaald, alsof het een wetenschappelijk paper moet worden.
  * Ik zoek nog een manier om opmaak zoals _schuingedrukte woorden_ te behouden :p

Hieronder een voorbeeld van een veel te letterlijke vertaling.

  * Nederlands: "Zeg, maak eens wat minder herrie, sommige wezens proberen hier te slapen."
  * Engels: "Hey, make a little less noise, some creatures are trying to sleep here."

_Make a little less noise_ ... vind ik nou niet zo'n lekkere vertaling. Correct, ja, maar het loopt niet en pakt niet dezelfde toon. Ik zou eerder iets doen als "keep that noise down" of "do you have to be so loud?"

Nog een voorbeeld.

  * Nederlands: "Als ik het zo voel, worden we zo de zon ingezogen"
  * Engels: "If I feel it like this, we'll be sucked into the sun in a moment"

_If I feel it like this_? Heeft _iemand_ dat ooit gezegd? Dit moet zoiets zijn als "The way I see it" of simpelweg "Feels like we'll be sucked into the sun any moment now."

En toen vroeg ik ChatGPT om door te gaan (nadat de output te vroeg was afgekapt) ...

## De wondere wereld van AI

Toen ik zei "please continue your response", gebeurde er iets raars. Het was vergeten dat het moest vertalen. In plaats daarvan begon het zelf te verzinnen---in het Nederlands---hoe het verhaal verder zou gaan.

En het was schokkend hoeveel dingen het had opgepikt over het verhaal.

Het gebruikte de namen en eigenschappen juist. Het begreep het algemene idee van het hoofdstuk:

  * Godenkinderen zijn verbannen door hun vader
  * En neergestort op een barre planeet vol lava en vlammen
  * En veranderd in de gedaante van dieren
  * Onze hoofdpersoon is hard op zoek naar zijn broers en zussen, terwijl hij zich afvraagt waarom ze zijn verbannen.

Al deze feiten had het opgepikt uit de 500 woorden van daarvoor (die het al wel had vertaald), en vervolgens accuraat gebruikt in diens verzonnen vervolg.

De kwaliteit van het stuk was, daarentegen, niet al te best. Het liep niet echt. Het ging nergens heen: het was meer een herhaling van zetten. (Wat logisch is, want de computer kent die zetten, maar weet niet magisch een richting waarin het verhaal volgend hoofdstuk gaat.) 

Dus deze elementen, zoals dat ze de rest moeten vinden en terug naar het hemelpaleis van Vader, werden gewoon _keer op keer herhaald_ op net iets andere manieren in de dialoog :p En verder gebeurde er niks. Behalve dan een cliché vondst van een grot en een monster dat erin woonde.

Het is _totaal_ niet alsof ik nu de computer maar kan vragen om mijn verhalen (af) te schrijven. Maar _vertalen_? Dat gaat meer dan behoorlijk.

## Volgende poging

Dus we proberen wat nieuws.

  * We leggen uit dat het voor een (jeugd) fantasy verhaal is. => "The text is for a children's fantasy short story."
  * Als het wordt afgesneden, vragen we het om verder te gaan. => "Your response was cut off. Please continue your previous response from: "<LAATSTE ZIN>". Please only translate from Dutch to English, do NOT change the story or invent anything new."
  * En _na_ de generatie, vragen we ChatGPT om zelf de tekst te verbeteren en natuurlijker te schrijven. => "Please rewrite the text above to sound more natural, interesting and beautiful. It should fit in a chapter from an acclaimed fantasy novel."

Wat ik ook probeerde, het wilde _niet_ onthouden dat het moest vertalen. Soms bleef het een paar paragrafen goed (alleen vertalen, niks nieuws verzinnen), maar ging het daarna alsnog mis. Ik heb minstens 30 variaties op zinnen en prompts geprobeerd, maar uiteindelijk moest ik maar de simpele oplossing accepteren: alleen maar stukjes geven die niet té lang zijn en worden afgekapt.

De andere twee toevoegingen maken wél veel (positief) verschil. 

Ik zal een voorbeeld geven. Eerste tekst is het origineel, de tweede is de eerste vertaling, de derde is de vertaling na aanmoediging.

{{% image-gallery %}}
 ![](/uploads/2023/04/levenssaga_vertalen_part1.png) ![](/uploads/2023/04/levenssaga_vertalen_part2.png) ![](/uploads/2023/04/levenssaga_vertalen_part3.png) 
{{% /image-gallery %}} 

Zoals je ziet, is de eerste vertaling meestal _correct_, maar leest vaak voor geen meter en verliest toon of gevoel. De tweede vertaling is véél mooier, gevarieerder, passender. Maar om dat te bereiken verandert het wel een paar (cruciale) feiten: zoals dat Ardus zogenaamde de laatste zin zou zeggen, wat helemaal niet waar is.

Spelen met dit systeem gaf me verrassend veel inzicht over mijn eigen schrijfstijl :p De meeste zinnen die "clunky" werden vertaald, waren zinnen die in het Nederlands misschien beter klonken ... maar nog steeds onnodige woorden hadden of een onhandige volgorde. Zo'n AI legt nog enkele valkuilen bloot, wat heel leerzaam was.

Het ideale resultaat is iets tussen het eerste en tweede plaatje in.

## Alternatieven

Natuurlijk zijn er meer aanbieders van vertalingen, de meeste inmiddels gebaseerd op AI. 

De meeste, echter, zijn _niet grati_s :p En zelfs dan, hebben ze vaak nog strengere restricties dan ChatGPT. De enige twee alternatieven die ertoe deden, na lang onderzoek, waren:

  * **Google Translate:** niet de beste, maar goed genoeg als begin. Ik kan simpelweg de URL geven naar elk hoofdstuk en het vertaalt de hele pagina op de plek.
  * **DeepL:** restricties in het gratis plan, maar doorgaans goede vertalingen en iets makkelijker mee te werken dan ChatGPT.

Dus voor de eerste paar hoofdstukken probeerde ik alle drie de services en vergeleek welke resultaten ik het meest bruikbaar vond.

## Tijd voor het echte werk

Dus ik schreef een simpel stukje code die alle verhalen van de levenssaga presenteert in blokjes van ~500 woorden. Vervolgens kan ik die steeds kopiëren naar een chat, laten vertalen, laten verbeteren, en terug kopiëren.

@TODO

 [1]: https://delevenssaga.nl