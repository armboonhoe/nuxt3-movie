import { defineStore } from "pinia";

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
