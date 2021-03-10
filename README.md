# TESTANGULAR

## Protractor branch

### De stappen van testen

De Eerste test word er getest of je op de pagina 'Interactieve connectie met de db' kan komen
    
- In de app.e2e.spec.ts onder 'should route to DB connectie page' word de eerste test getest
- page.navigateTo() zorgt ervoor dat je op de start pagina belang
- Vervolgens klikt het systeem op de button waardoor er geroute word naar de 'Interactieve connectie met de db'
  
  - Deze route button in de header word door het systeem gevonden door de getDBConnectiePageButton() functie in de app.po.ts
  
- Als laatste word er dat gekeken met expect of de test gelukt is.

In de tweede test word er gekeken of de frontend data terug krijgt van de backend

- In de app.e2e.spec.ts onder 'should show feedback from de db' word de tweede test getest
- De eerste regels word er weer geroute naar de pagina met 'Interactieve connectie met de db'
- Daarna klikt het systeem op de knop om feedback van de db naar voren te laten komen

  - Hiervoor word de functie getDBConnectieFeedbackButton() in de app.po.ts gebruikt
  
- Als laatst word er naar het resultaat gekeken of ze gelijk zijn.

  - Hier word in de functie getDBConnectieText() gekeken naar het id contentReturned (Het id word gezocht door heel het project) en daarva het resultaat word vergeleken met het verwachtte resultaat.
