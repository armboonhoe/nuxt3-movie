import { defineStore } from "pinia";
const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjRlOGM1NmNlMGU3NWQzOGVhMzBiYzc0YjY5M2UyZCIsInN1YiI6IjY1ODE1ODQ2N2U0MDNkMDkyNWY1NGQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOvgAXyNTYzNSNFh2EEhthx4xW-y1eruq5Ghk6smz48";
export const useMoviesStore = defineStore("movies", {
    state: () => ({
        movieData: undefined,
        movieLiked: [] as Number[]
    }),
    getters: {
        getTopMovieName: () => {
            return;
        },
    },
    actions: {
        async fetchMovieData() {
            const { data } = await useFetch(
                "https://api.themoviedb.org/3/movie/top_rated",
                {
                    headers: {
                        Authorization: authToken,
                    },
                    method: "GET",
                    query: {
                        language: "en-EN",
                        page: 1,
                    },
                }
            );
            this.movieData = data.value;
            return data.value;
        },
        likeMovie(id: number) {
            if (!this.movieLiked?.includes(id)) {
                this.movieLiked?.push(id)
            }
            else {
                const index = this.movieLiked.indexOf(id)
                this.movieLiked.splice(index, 1)
            }
        }

    },
});
