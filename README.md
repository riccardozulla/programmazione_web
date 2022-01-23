# Progetto programmazione web
Realizzazione di una applicazione web per tenere traccia degli spostamenti svolti da un utente in una giornata.
La piattaforma è stata realizzata utilizzando:
 - Tomcat 9
 - MongoDB
 - Vue.js 
 - +altre librerie

# Installazione software
1. Copiare il file .war (programmazione_web.war) nella cartella webapp di Tomcat
2. Aprire il link http://localhost:8080/programmazione_web/

# Utilizzo
Per effettuare il primo accesso è possibile utilizzare un utente creato come prova:

    - Email: test@gmail.com
    - Password: test

Alcuni viaggi test sono stati creati nelle date: 
- 23 gennaio 2022 
- 24 gennaio 2022

Altrimenti è possibile creare un nuovo utente.

### Specifiche
- **Visualizzazione viaggi:**
    - scelta del giorno utilizzando il dataPicker
    - inserimento nuovo viaggio premendo il bottone `Add`
    - elenco dei viaggi creati con breve descrizione
    - visualizzazione dettagli del viaggio utilizzando la tendina dropdown
    - le tappe importanti sono contrassegnate da un pin
    - ***Extra***
        - visualizzando i dettagli di un viaggio, la mappa si adatta al viaggio in osservazione
- **Visualizzazione dettagli di un viaggio:**
  - elenco delle tappe e rispettive coordinate
  - modifica del viaggio selezionato premendo il bottone `Edit`
  - eliminazione del viaggio selezionato premendo il bottone `Delete`

- **Aggiunta o modifica di un viaggio**
    - inserimento breve descrizione del viaggio
    - inserimento coordinate di una tappa
    - aggiunta di una tappa utilizzando il bottone `+`
    - eliminazione di una tappa utilizzando il bottone `-`
    - definizione di una tappa importante contrassegnando il checkbox vicino alla tappa associata
    - scelta del mezzo utilizzato per percorrere lo spostamento
    - tutti i campi possono essere modificati
    - ***Extra***
      - inserimento/modifica coordinate di una tappa tramite importazione di un punto sulla mappa
- ***Extra***
  - Registrazione nuovo utente sulla piattaforma
