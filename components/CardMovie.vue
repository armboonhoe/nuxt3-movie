<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  release_date: {
    type: String || Date,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="movie">
    <NuxtImg class="movie__image" :src="props.poster_path" />
    <div class="movie__text">
      <div class="movie__about">
        <h1>{{ props.title }}</h1>
        <p>{{ props.overview || $t("common.noInfo") }}</p>
      </div>
      <span class="self-end text-right">
        <LikeButton :id="props.id" />
        {{ $t("common.vote", { vote: props.vote }) }}<br />
        {{ $t("common.releaseDate", { releaseDate: props.release_date }) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie {
  @apply flex rounded-lg shadow;
  @apply flex-col sm:flex-row;
  @apply border border-gray-200 border-gray-700;
  @apply bg-gray-800 hover:bg-gray-100 hover:bg-gray-700;
  @apply max-w-3xl w-full;
  @apply p-6 my-4 gap-x-4;
  &__image {
    @apply w-full h-auto rounded-lg;
    @apply sm:w-auto sm:h-[250px];
  }
  &__text {
    @apply flex flex-col justify-between text-white;
    @apply w-full;
  }
  &__about {
    @apply flex-col gap-y-2;
    h1 {
      @apply text-xl;
    }
    p {
      @apply text-sm text-gray-400;
    }
  }
}
</style>
