<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import CardMovie from "~/components/CardMovie.vue";
import { useMoviesStore } from "~/stores/movie.store";

const moviesStore = useMoviesStore();
const moviesFetch = await moviesStore.fetchMovieData();
const movies = ref(moviesFetch.results);

const searchElement = ref("");
const moviesSearch = computed(() =>
  movies.value.filter((movie) => {
    return movie.title.toLowerCase().includes(searchElement.value);
  })
);
</script>

<template>
  <div>
    <Navbar v-model="searchElement" />
    <CardMovie
      v-for="(movie, index) in moviesSearch"
      class="mx-auto"
      :key="index"
      :id="movie.id"
      :title="movie.title"
      :overview="movie.overview"
      :release_date="$dayjs(movie.release_date).format('MMM D, YYYY')"
      :vote="movie.vote_average"
      :poster_path="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply w-full rounded-md border-0 py-1.5 px-4 text-gray-900 placeholder:text-gray-400;
  @apply ring-1 ring-inset ring-gray-300;
  @apply focus:ring-2 focus:ring-inset focus:ring-indigo-600;
  @apply sm:text-sm sm:leading-6;
}
</style>
