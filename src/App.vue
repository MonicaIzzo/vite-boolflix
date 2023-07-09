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
import ProductionCard from './components/ProductionCard.vue';

export default {
    name: 'Boolflix',
    components: { SearchForm, ProductionCard },
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
        <ProductionCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </section>
    <section id="series">
        <h2>Series</h2>
        <ProductionCard v-for="serie in store.series" :key="serie.id" :item="serie" />
    </section>
</template>

<style>
/* qui CSS */
</style>