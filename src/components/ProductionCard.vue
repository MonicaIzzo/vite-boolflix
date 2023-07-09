<script>
import { pics } from '../data';
export default {
    props: {
        item: Object
    },
    computed: {
        hasFlag() {
            const availableFlags = ['it', 'en'];
            return availableFlags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url)
            return url.href
        },
        posterPath() {
            if (!this.item.poster_path) return pics.placeholder;
            return pics.prefix + this.item.poster_path
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },
    methods: {
        iconClass(n) {
            return n <= this.vote ? 'fas' : 'far';
        }
    }

};
</script>


<template>
    <ul>
        <li>{{ item.title || item.name }}</li>
        <li>{{ item.original_title || item.original_name }}</li>
        <li>
            <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <span v-else>{{ item.original_language }}</span>
        </li>
        <li>
            <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconClass(n), 'star']" />
        </li>
        <li>
            <img :src="posterPath" alt='{{ item.original_title || item.original_name }}'>
        </li>
    </ul>
</template>

<style></style>