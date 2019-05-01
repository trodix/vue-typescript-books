<template>
  <div id="app">
    <v-app>
      <SideNav sidenavTitle="MaterialBook App" toolbarTitle="MaterialBook App" />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNav from '@/components/SideNav.vue'; // @ is an alias to /src

@Component({
  components: {
    SideNav,
  },
})
export default class App extends Vue {}
</script>


<style>
  @import url('./main.css');
</style>
