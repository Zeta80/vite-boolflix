<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './store'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    titleSearch() {
      if (this.store.searchKey !== "") {
        // AXIOS PER MOVIE
        axios.get(this.store.apiMovieURL + `?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
          .then((resp) => {
            this.store.arrayMovie.results = resp.data.results
            console.log(this.store.arrayMovie, "film");
          })
        // AXIOS PER TV
        axios.get(this.store.apiTvURL + `?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
          .then((resp) => {
            this.store.arrayTv.results = resp.data.results
            console.log(this.store.arrayTv, "serie");
          })
      }
    }
  },

  created() {

  }
};
</script>

<template>
  <AppHeader @titleSearch="titleSearch" />
  <AppMain />
</template>


<style lang="scss">
@use './styles/general.scss';
</style>