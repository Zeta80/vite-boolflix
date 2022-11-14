<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import { store } from './store'
export default {
  components: {
    AppHeader
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
            this.store.arrayMovie = resp.data.results
            console.log(this.store.arrayMovie);
          })
        // AXIOS PER TV
        axios.get(this.store.apiTvURL + `?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
          .then((resp) => {
            this.store.arrayTv = resp.data.results
            console.log(this.store.arrayTv);
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
</template>


<style lang="scss">
@use './styles/general.scss';
</style>