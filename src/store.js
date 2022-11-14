import { reactive } from 'vue'

export const store = reactive({

    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiTvURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "a68f13aee5d2ef1ab0ada61e0ddaa6e9",
    searchKey: "",
    arrayMovie: [],
    arrayTv: [],
    loading: false,
});