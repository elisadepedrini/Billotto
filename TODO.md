# TODO — Billotto (Progetto 1)

Percorso minimo che l'utente deve poter completare (happy path MVP):
apre l'app → inserisce cliente e voci di lavoro → sceglie il regime IVA → vede il totale calcolato → salva il preventivo → scarica il PDF → ritrova il preventivo nell'archivio → lo trasforma in fattura quando serve.

## Core (MVP)

### 1. Setup progetto
- [ x ] Inizializzare il progetto con Vite + React + TypeScript
- [ x ] Configurare la struttura delle cartelle (components, types, utils, pages)
- [ x ] Installare le dipendenze necessarie (@react-pdf/renderer)
- [ x ] Configurare il deploy su Vercel con una pagina placeholder (demo live cliccabile fin da subito)

### 2. Componenti di base e navigazione
- [ x ] Creare Button.tsx riutilizzabile (bottone primario/secondario, dal design system)
- [ x ] Installare React Router (`npm install react-router`)
- [ x ] Creare AppSidebar.tsx con i link alle tre sezioni
- [ x ] Creare DefaultLayout.tsx che racchiude sidebar + area di contenuto
- [ x ] Configurare le tre rotte (nuovo preventivo, archivio, fatture), anche con pagine vuote per ora
- [ x ] Verificare che cliccando le voci della sidebar cambi davvero la pagina visualizzata

### 3. Logica di calcolo (la parte da scrivere a mano, non da fidarsi di un suggerimento AI non verificato)
- [ ] Definire i tipi TypeScript per Cliente, VoceLavoro, Preventivo, Fattura
- [ ] Scrivere la funzione di calcolo di subtotale, IVA e totale
- [ ] Gestire le tre opzioni di regime: IT standard 22%, IT esente (regime forfettario), CH standard 8.1%
- [ ] Verificare manualmente i casi di arrotondamento dei decimali (un classico errore da junior)

### 4. Form di inserimento preventivo
- [ ] Creare FormCustomer.tsx per i dati del cliente
- [ ] Creare Table.tsx per le voci di lavoro, con aggiungi/rimuovi riga
- [ ] Creare FormTaxRegime.tsx per il selettore del regime IVA a livello di documento
- [ ] Creare CardSummary.tsx per il riepilogo (subtotale/IVA/totale)
- [ ] Collegare il calcolo automatico al form, aggiornando CardSummary in tempo reale
- [ ] Gestire la validazione dei campi obbligatori e i messaggi di errore

### 5. Persistenza dati (LocalStorage)
- [ ] Scrivere le funzioni di salvataggio, lettura e cancellazione preventivi in LocalStorage
- [ ] Collegare il salvataggio del preventivo dal form a LocalStorage
- [ ] Gestire lo stato del documento (bozza / inviato / pagato)

### 6. Generazione PDF
- [ ] Creare il template PDF del preventivo
- [ ] Collegare la generazione e il download del PDF al form
- [ ] Verificare la resa del PDF con dati reali (non solo con dati di prova brevi)

### 7. Archivio preventivi
- [ ] Creare la schermata lista/archivio
- [ ] Gestire lo stato vuoto (nessun preventivo ancora creato)
- [ ] Implementare ricerca/filtro per cliente o data
- [ ] Permettere di aprire un preventivo salvato per modificarlo o duplicarlo

### 8. Fatture
- [ ] Creare la schermata di inserimento dati fattura (numero, data emissione, scadenza)
- [ ] Implementare la conversione da preventivo a fattura (precompilazione voci)
- [ ] Generare il PDF della fattura riusando il template del preventivo con le differenze necessarie
- [ ] Salvare le fatture in LocalStorage e renderle visibili nell'archivio

### 9. Rifinitura finale
- [ ] Gestire i casi limite (es. nessuna voce inserita, importi a zero, campi vuoti)
- [ ] Rifinire il build di produzione e aggiornare il deploy
- [ ] Completare il README con istruzioni, screenshot e narrazione del progetto