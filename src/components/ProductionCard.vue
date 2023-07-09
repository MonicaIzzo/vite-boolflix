<script>
export default {
    props: {
        item: Object
    }

};
</script>


<template>
    <ul>
        <li>{{ item.title }}</li>
        <li>{{ item.original_title }}</li>
        <li>{{ item.original_language }}</li>
        <li>{{ item.vote_average }}</li>
    </ul>
</template>

<style></style>