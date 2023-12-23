import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
    state: () => ({
        movieLiked: [] as [],
    }),
    persist: {
        storage: persistedState.localStorage,
    },
    actions: {
        likeMovie(id: number) {
            const index = this.movieLiked.indexOf(id)

            /* no index in liked */
            if (index === -1) {
                this.movieLiked.push(id)
            } else {
                this.movieLiked.splice(index, 1)
            }
        }
    },
});
