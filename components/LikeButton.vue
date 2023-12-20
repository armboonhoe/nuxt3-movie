<script setup lang="ts">
import HeartEmpty from "~/assets/icon/HeartEmpty.svg";
import Heart from "~/assets/icon/Heart.svg";
import { useMoviesStore } from "~/stores/movie.store";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const moviesStore = useMoviesStore();
const movieLikedComputed = computed(() => moviesStore.movieLiked);
const onClickLike = (id: number) => moviesStore.likeMovie(id);
</script>
<template>
  <div>
    <div class="icon" @click="onClickLike(props.id)">
      <HeartEmpty
        v-if="!movieLikedComputed.includes(props.id)"
        class="w-full h-auto"
      />
      <Heart v-else class="w-full h-auto" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  @apply w-[30px] h-[30px];
  @apply ml-auto;
}
</style>
