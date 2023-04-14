<script setup lang="ts">
  import useProducts from '@/composables/useProducts.ts'
  import { storeToRefs } from 'pinia'

  const store = useProducts()

  const { paginatedProducts } = storeToRefs(store)
</script>
<template>
  <ul class="product__wrapper">
    <li v-for="product in paginatedProducts" :key="product.name" class="product">
      <img :src="product.image" :alt="product.name" class="product__img"/>
      <span :style="{ background: product.status }" class="product__status"></span>
      <span>{{ product.name }}</span>
      <span>{{ product.date }}</span>
    </li>
  </ul>
</template>
