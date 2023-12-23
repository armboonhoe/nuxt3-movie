<script setup lang="ts">
import HeartEmpty from "~/assets/icon/HeartEmpty.svg";
import Heart from "~/assets/icon/Heart.svg";
import { useFavoriteStore } from "~/stores/favorite.store";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const favoriteStore = useFavoriteStore();
const movieLikedComputed = computed(() => favoriteStore.movieLiked);
const onClickLike = (id: number) => favoriteStore.likeMovie(id);
</script>
<template>
  <div>
    <ClientOnly>
      <HeartEmpty
        v-if="!movieLikedComputed.includes(props.id)"
        class="icon"
        @click="onClickLike(props.id)"
      />
      <Heart v-else class="icon" @click="onClickLike(props.id)" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  @apply cursor-pointer;
  @apply w-[30px] h-[30px];
  @apply ml-auto;
}
</style>
