<script setup lang="ts">
  import useProducts from '../composables/useProducts.ts'
  import { storeToRefs } from 'pinia'

  const store = useProducts()

  const { inputRef } = storeToRefs(store)

  const { updateSearchQuery } = store
</script>

<template>
  <div>
    <input type="text" v-model="inputRef" placeholder="Search products" />
    <button @click="updateSearchQuery">Search</button>
  </div>
</template>
