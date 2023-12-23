import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => ({
        movieData: undefined
    }),
    getters: {
        getTopMovieName: () => {
            return;
        },
    },
    actions: {
        async fetchMovieData(lang: string) {

            const { movieToken } = useRuntimeConfig().public
            const authToken = `Bearer ${movieToken}`;

            const { data } = await useFetch(
                "https://api.themoviedb.org/3/movie/top_rated",
                {
                    headers: {
                        Authorization: authToken,
                    },
                    method: "GET",
                    query: {
                        language: lang,
                        page: 1,
                    },
                }
            );
            this.movieData = data.value;
            return data.value;
        }
    },
});
