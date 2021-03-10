# TESTANGULAR

## Cypress branch
<code>npm install cypress</code> om Cypress toe te voegen, mocht dat nog niet het geval zijn.

Om Cypress vervolgens te runnen type:
<br> <code>npm run cypress:open</code>

De files voor cypress zijn te vinden in: <br> 
`cypress` <br>

Zelf heb ik al files in `cypress/integration` gezet.

Mochten er nog vragen zijn stel die uiteraard.

Ole

## Hoe heb ik het geïnstalleerd?
* Ik heb eerst `npm install cypress` gedaan
* Dit duurde best lang maar eenmaal toen het klaar was, werkt de interface al meteen. Hiervoor moest je wel een lang 
commando tikken naar het pad van de cypress executable.
* Om een korter commando te kunnen tikken moest ik het script toevoegen aan de package.json. Hierdoor kon ik nu het 
simpelere commando intikken.
* Echter kreeg ik nog wel een bug waardoor de testen niet konden worden gerunt. Na opzoeken kwam ik erachter dat dit lag
 aan de browserlist, een aparte file die de javascript voor een of andere reden niet kon inlezen. 
 Om dit te fixen moest ik de properties vanuit die file ook in de package.json zetten, hierna werkte alles helemaal top.
* Bij de installatie werd er meteen al een cypress package aangemaakt binnen het project met hierin al verschillende
sample testen.
* Ik geef het installeren een 7, het was simpel, echter duurde het installeren best lang (15 min bezig, terwijl een 
soortgelijke package naar mijn idee altijd vele malen korter is) en de bug die ik zelf nog moest
fixen waren wel minpunten.
<hr>

#### Handige linkjes verder:
* https://www.cypress.io/
* https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test
