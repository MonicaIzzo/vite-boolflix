<script>
import ProductionCard from './ProductionCard.vue';
import { store } from '../data/store.js';
export default {
    components: { ProductionCard },
    data() {
        return {
            store
        }
    },
};
</script>

<template>
    <section id="movies">
        <h2>Movies</h2>
        <ProductionCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
    </section>
    <section id="series">
        <h2>Series</h2>
        <ProductionCard v-for="serie in store.series" :key="serie.id" :item="serie" />
    </section>
</template>

<style></style>