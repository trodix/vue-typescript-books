<template>

<v-container>
    <v-layout>
    <h1>Dashboard</h1>
    <BookList/>
  </v-layout>
</v-container>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BookList from '@/components/BookList.vue';

@Component({
  components: {
    BookList,
  },
})
export default class Dashboard extends Vue {}
</script>
