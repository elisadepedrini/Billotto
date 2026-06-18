# Generatore di Preventivi e Fatture Freelance

> Stato: in sviluppo 🚧

## Descrizione

Applicazione web che permette a un freelance di creare preventivi e fatture in modo rapido e professionale, senza dover ricorrere a Excel o a strumenti costosi.

## Problema che risolve

Ogni freelance ha bisogno di emettere documenti commerciali chiari e corretti, con calcoli di IVA precisi e un formato professionale da inviare al cliente. Questo progetto nasce per risolvere esattamente questo bisogno concreto.

## Funzionalità previste

- Inserimento di voci di lavoro (descrizione, quantità, tariffa)
- Calcolo automatico di subtotale, IVA e totale
- Possibilità di scegliere tra regime fiscale italiano e svizzero
- Generazione di un PDF professionale scaricabile
- Archivio dei preventivi/fatture emessi (consultabili in seguito)

## Stack tecnico

### Frontend
- React
- Typescript
- Tailwind CSS

### Generazione PDF
- jsPDF / react-pdf

### Backend
- Nessuno: l'applicazione gira interamente nel browser, senza server.

### Database / Persistenza dati
- LocalStorage (i dati restano nel browser dell'utente)
- Il PDF generato per ogni preventivo/fattura è il documento di riferimento da conservare; LocalStorage serve solo per la comodità di ritrovare lo storico mentre si usa l'app, non come archivio fiscale definitivo.


## Possibili evoluzioni future

- [ ] Invio automatico via email del preventivo al cliente
- [ ] Integrazione con firma digitale
- [ ] Multi-lingua (italiano/tedesco/francese)
- [ ] Dashboard con statistiche su fatturato mensile

## Note sull'uso dell'AI

_Da aggiornare durante lo sviluppo: quali parti sono state generate con l'aiuto dell'AI e quali scritte/verificate manualmente, con relativa motivazione._
