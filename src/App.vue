<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import ProductSearch from '@/components/ProductSearch.vue'
import AddProduct from '@/components/AddProduct.vue'
import Pagination from '@/components/Pagination.vue'
import ProductsPerViewDropdown from '@/components/ProductsPerViewDropdown.vue'
import Headline from './components/Headline.vue'
</script>

<template>
  <div>
    <Headline>Products</Headline>
    <ProductSearch />
    <AddProduct />
    <ProductList />
    <Pagination />
    <ProductsPerViewDropdown />
  </div>
</template>