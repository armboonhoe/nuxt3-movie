<script setup lang="ts">
import { useMoviesStore } from "~/stores/movie.store";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import CardMovie from "~/components/CardMovie.vue";

import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

import TH from "~/assets/icon/flags/TH.svg";
import UK from "~/assets/icon/flags/UK.svg";

dayjs.extend(buddhistEra);

const moviesStore = useMoviesStore();

const { locale } = useI18n();

const langComputed = computed(
  () => `${locale.value}-${locale.value.toUpperCase()}`
);
const formatComputed = computed(() =>
  locale.value === "th" ? "DD MMMM BBBB" : "MMMM D, YYYY"
);

const changeLanguage = () => {
  if (locale.value === "th") {
    locale.value = "en";
  } else {
    locale.value = "th";
  }
};

await moviesStore.fetchMovieData(langComputed.value);
const movies = ref(moviesStore.movieData?.results);

const searchElement = ref("");
const moviesSearch = computed(() =>
  movies.value.filter((movie) => {
    return movie.title.toLowerCase().includes(searchElement.value);
  })
);

watch(locale, async (newVal) => {
  await moviesStore.fetchMovieData(langComputed.value);
  movies.value = moviesStore.movieData?.results;
});
</script>

<template>
  <div class="page">
    <div class="changeLang" @click="changeLanguage()">
      <TH v-if="locale === 'th'" class="w-[30px] h-[30px]" />
      <UK v-else class="w-[30px] h-[30px]" />
    </div>
    <Navbar v-model="searchElement" />
    <CardMovie
      v-if="moviesSearch.length"
      v-for="(movie, index) in moviesSearch"
      class="mx-auto"
      :key="index"
      :id="movie.id"
      :title="movie.title"
      :overview="movie.overview"
      :release_date="
        $dayjs(movie.release_date).locale(locale).format(formatComputed)
      "
      :vote="movie.vote_average"
      :poster_path="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`"
    />
    <div v-else class="flex">
      <div class="no-information">
        {{ $t("common.noInfo") }}
      </div>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.no-information {
  @apply bg-gray-800 rounded-full;
  @apply flex items-center justify-center;
  @apply m-auto p-4;
  @apply text-white;
}
.changeLang {
  @apply fixed right-5 bottom-5 bg-white p-2 rounded-full;
}
.page {
  @apply grid grid-rows-[auto_1fr_auto];
  @apply min-h-screen m-0;
}
.search {
  @apply w-full rounded-md border-0 py-1.5 px-4 text-gray-900 placeholder:text-gray-400;
  @apply ring-1 ring-inset ring-gray-300;
  @apply focus:ring-2 focus:ring-inset focus:ring-indigo-600;
  @apply sm:text-sm sm:leading-6;
}
</style>
