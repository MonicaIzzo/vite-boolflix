<script>
import { store } from '../data/store';
import SearchForm from './SearchForm.vue';
export default {
    components: { SearchForm },
    methods: {
        setTitleFilter(term) {
            store.titleFilter = term;
        }
    },
    emits: ['search-submit'],


};
</script>

<template>
    <header>
        <SearchForm @term-change="setTitleFilter" @form-submit="$emit('search-submit')" />
    </header>
</template>

<style></style>
