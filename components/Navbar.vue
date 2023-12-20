<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const open = ref(true);
const toggle = () => (open.value = !open.value);
</script>

<template>
  <div>
    <nav class="navbar-container">
      <div class="title">
        <span class="font-bold text-xl">Movie Shop</span>
      </div>
      <div class="block sm:hidden">
        <button @click="toggle()" class="toggle">
          <svg
            class="fill-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'flex' : 'hidden'" class="link-wrapper">
        <div class="text-sm">
          <NuxtLink to="/" class="link"> Home </NuxtLink>
          <NuxtLink to="#" class="link"> Examples </NuxtLink>
          <NuxtLink to="#" class="link"> Blog </NuxtLink>
        </div>
        <div>
          <input
            type="text"
            class="search"
            placeholder="Search..."
            @input="emit('update:modelValue', $event.target.value)"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  @apply flex items-center justify-between flex-wrap bg-gray-800;
  @apply p-6;
}
.toggle {
  @apply flex items-center border rounded hover:text-white hover:border-white;
  @apply px-3 py-2;
}
.title {
  @apply flex items-center text-white;
  @apply mr-6;
}
.link-wrapper {
  @apply w-full flex-col flex-grow;
  @apply sm:items-center sm:justify-between sm:flex-row sm:w-auto;
}
.link {
  @apply no-underline block text-white;
  @apply hover:text-white;
  @apply sm:inline-block;
  @apply mt-4 mr-4 sm:mt-0;
}
.search {
  @apply w-full rounded-md border-0 text-gray-900 placeholder:text-gray-400;
  @apply ring-1 ring-inset ring-gray-300;
  @apply focus:ring-2 focus:ring-inset focus:ring-indigo-600;
  @apply sm:text-sm sm:leading-6;
  @apply py-1.5 px-4 mt-4 sm:mt-0;
}
</style>
