/*
Proviamo a replicare il frontend di un'appplicazione per visualizzare film e serie TV.
L'esercizio si svolgerà su 3 giorni con scadenza "ufficiale" Venerdì alle 18.
Naturalmente siete liberi di continuare a lavorarci e migliorarlo anche dopo!
Ogni mattina ci troviamo in classe per fare il punto e poi avrete a disposizione i ticket fino alle 13:00 e come sempre dalle 15:00 alle 18:00

In allegato il brief e le bandierine.
Per la grafica potete ispirarvi agli screen nel brief, alla grafica vista nella registrazione della lezione o a qualche piattaforma realmente esistente.


parte iniziale dell'URL delle immagini:https://image.tmdb.org/t/p/ 


ESEMPIO:
https://image.tmdb.org/t/p/w342 + "QUELLO CHE MI ARRIVA DALL'API"


Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png


DIMENSIONI POSSIBILI DELLE IMMAGINI:
"backdrop_sizes": [
  "w300",
  "w780",
  "w1280",
  "original"
],
"logo_sizes": [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original"
],
"poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
"profile_sizes": [
  "w45",
  "w185",
  "h632",
  "original"
],
"still_sizes": [
  "w92",
  "w185",
  "w300",
  "original"
]


STELLINE per arrotomdare in eccesso un numero 1.3 - Math.ceil()

ESEMPIO:
var a = Math.ceil(1.8); // Risultato: 2

ATTENZIONE!!!! I voti che arrivano sono da 1 a 10;
Vanno trasformati da 1 a 5 (andranno divisi / 2)
Non gestire le mezze STELLINE!!!
Installare fontawesome

*/


<script>
import axios from 'axios';

// TRIP PER GESTIRE MEGLIO LE CHIAMATE API
const config = {
    params: {
        api_key: '37021d95c3f7c7054fcdeb1f22d26d8d',
        language: 'it_IT',
        query: this.term
    }
}
axios.get('https://api.themoviedb.org/3/', config)
    .then((res) => { })



export default {
    name: 'Boolflix',
    data() {
        return {

        }
    }
}
</script>

<template>
    <h1>Ciao</h1>
</template>

<style></style>