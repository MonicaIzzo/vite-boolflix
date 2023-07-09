<script>
// qui la logica
/* TRIP PER GESTIRE MEGLIO LE CHIAMATE API
const config = {
    params: {
        api_key: '37021d95c3f7c7054fcdeb1f22d26d8d',
        language: 'it_IT',
        query: this.term
    }
}
axios.get('https://api.themoviedb.org/3/', config)
    .then((res) => { })

*/
import axios from 'axios';
import { api } from './data';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'Boolflix',
    components: { AppHeader, AppMain },

    methods: {
        setTitleFilter(term) {
            store.titleFilter = term;
        },
        searchProductions() {
            console.log(store.titleFilter);
            if (!store.titleFilter) {
                store.movies = [];
                store.series = [];
                return;
            };



            axios.get(`${api.baseUri}/search/movie?api_key=${api.key}&language=${api.language}&query=${store.titleFilter}`)
                .then((res) => {
                    store.movies = res.data.results;
                });

            axios.get(`${api.baseUri}/search/tv?api_key=${api.key}&language=${api.language}&query=${store.titleFilter}`)
                .then((res) => {
                    store.series = res.data.results;
                });

        }
    }
};
</script>

<template>
    <!--qui HTML-->
    <AppHeader @search-submit="searchProductions" />
    <AppMain />
</template>

<style>
/* qui CSS */
</style>