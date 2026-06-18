# TODO — Billotto (Progetto 1)

Percorso minimo che l'utente deve poter completare (happy path MVP):
apre l'app → inserisce cliente e voci di lavoro → sceglie il regime IVA → vede il totale calcolato → salva il preventivo → scarica il PDF → ritrova il preventivo nell'archivio → lo trasforma in fattura quando serve.

## Core (MVP)

### 1. Setup progetto
- [ ] Inizializzare il progetto con Vite + React + TypeScript
- [ ] Configurare la struttura delle cartelle (components, types, utils, pages)
- [ ] Installare le dipendenze necessarie (jsPDF o react-pdf)
- [ ] Configurare il deploy su Vercel/Netlify con una pagina placeholder (demo live cliccabile fin da subito)

### 2. Logica di calcolo (la parte da scrivere a mano, non da fidarsi di un suggerimento AI non verificato)
- [ ] Definire i tipi TypeScript per Cliente, VoceLavoro, Preventivo, Fattura
- [ ] Scrivere la funzione di calcolo di subtotale, IVA e totale
- [ ] Gestire le tre opzioni di regime: IT standard 22%, IT esente (regime forfettario), CH standard 8.1%
- [ ] Verificare manualmente i casi di arrotondamento dei decimali (un classico errore da junior)

### 3. Form di inserimento preventivo
- [ ] Creare il componente per i dati del cliente
- [ ] Creare la tabella delle voci di lavoro con aggiungi/rimuovi riga
- [ ] Collegare il calcolo automatico al form (subtotale/IVA/totale aggiornati in tempo reale)
- [ ] Creare il selettore del regime IVA a livello di documento
- [ ] Gestire la validazione dei campi obbligatori e i messaggi di errore

### 4. Persistenza dati (LocalStorage)
- [ ] Scrivere le funzioni di salvataggio, lettura e cancellazione preventivi in LocalStorage
- [ ] Collegare il salvataggio del preventivo dal form a LocalStorage
- [ ] Gestire lo stato del documento (bozza / inviato / pagato)

### 5. Generazione PDF
- [ ] Creare il template PDF del preventivo
- [ ] Collegare la generazione e il download del PDF al form
- [ ] Verificare la resa del PDF con dati reali (non solo con dati di prova brevi)

### 6. Archivio preventivi
- [ ] Creare la schermata lista/archivio
- [ ] Gestire lo stato vuoto (nessun preventivo ancora creato)
- [ ] Implementare ricerca/filtro per cliente o data
- [ ] Permettere di aprire un preventivo salvato per modificarlo o duplicarlo

### 7. Fatture
- [ ] Creare la schermata di inserimento dati fattura (numero, data emissione, scadenza)
- [ ] Implementare la conversione da preventivo a fattura (precompilazione voci)
- [ ] Generare il PDF della fattura riusando il template del preventivo con le differenze necessarie
- [ ] Salvare le fatture in LocalStorage e renderle visibili nell'archivio

### 8. Navigazione e rifinitura finale
- [ ] Creare la navigazione tra le tre schermate (nuovo preventivo, archivio, fatture)
- [ ] Gestire i casi limite (es. nessuna voce inserita, importi a zero, campi vuoti)
- [ ] Rifinire il build di produzione e aggiornare il deploy
- [ ] Completare il README con istruzioni, screenshot e narrazione del progetto

## Miglioramenti futuri (fuori MVP)
- [ ] Export/import JSON dei dati come backup manuale
- [ ] Invio automatico via email
- [ ] Integrazione con firma digitale
- [ ] Multi-lingua (italiano/tedesco/francese)
- [ ] Dashboard con statistiche su fatturato mensile
