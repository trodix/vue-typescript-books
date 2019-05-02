<template>
    <ul class="books">
        <li class="book" v-for="book in books" :key="book.id">{{ book.title }}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import booksModule from '@/store/modules/book.module';
import Book from '@/models/Book.model';


@Component
export default class BookList extends Vue {

    

    public created() {
        this.books = booksModule.getAllBook();
    }

}
</script>

<style scoped>

</style>
