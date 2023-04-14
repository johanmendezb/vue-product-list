<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useProducts from '@/composables/useProducts.ts'

  const store = useProducts()

  const { itemsPerPage } = storeToRefs(store)
</script>

<template>
  <div class="products-pre-view">
    <label for="pet-select">Choose a pet:</label>

    <select v-model="itemsPerPage" id="pet-select">
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>
</template>
