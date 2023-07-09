<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    props: {
        placeholder: String,
        submitLabel: String,
    },
    emits: ['term-change', 'form-submit']
};

</script>


<template>
    <form @submit.prevent="$emit('form-submit')">
        <input v-model.trim="searchTerm" type="text" :placeholder="placeholder || 'Scrivi qui...'"
            @keyup="$emit('term-change', searchTerm)">
        <button type="submit">{{ submitLabel || 'Cerca' }}</button>
    </form>
</template>


<style></style>