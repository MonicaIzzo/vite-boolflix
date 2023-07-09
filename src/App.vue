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
import SearchForm from './components/SearchForm.vue';

export default {
    name: 'Boolflix',
    components: { SearchForm },
    data() {
        return {
            store,
            titleFilter: ''
        }
    },
    methods: {
        setTitleFilter(term) {
            this.titleFilter = term;
        },
        searchProductions() {
            console.log(this.titleFilter);
            if (!this.titleFilter) {
                store.movies = [];
                store.series = [];
                return;
            };



            axios.get(`${api.baseUri}/search/movie?api_key=${api.key}&language=${api.language}&query=${this.titleFilter}`)
                .then((res) => {
                    store.movies = res.data.results;
                });

            axios.get(`${api.baseUri}/search/tv?api_key=${api.key}&language=${api.language}&query=${this.titleFilter}`)
                .then((res) => {
                    store.series = res.data.results;
                });

        }
    }
};
</script>

<template>
    <!--qui HTML-->
    <SearchForm @term-change="setTitleFilter" @form-submit="searchProductions" />
    <section id="movies">
        <h2>Movies</h2>
        <ul v-for="movie in store.movies" :key="movie.id">
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ul>
    </section>
    <section id="series">
        <h2>Series</h2>
        <ul v-for="serie in store.series" :key="movie.id">
            <li>{{ serie.name }}</li>
            <li>{{ serie.original_name }}</li>
            <li>{{ serie.original_language }}</li>
            <li>{{ serie.vote_average }}</li>
        </ul>
    </section>
</template>

<style>
/* qui CSS */
</style>