<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useProducts from '@/composables/useProducts.ts'

  const store = useProducts()

  const { totalPages, currentPage } = storeToRefs(store)

  const { nextPage, previousPage, } = store

</script>

<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>
