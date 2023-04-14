<script setup lang="ts">
  const addProduct = () => {
    // NOTE: As per functional requirements the app does not need to add a product.
    // TODO: add product logic.
    return;
  };
</script>

<template>
  <div>
    <input type="text" placeholder="Search products" />
    <button @click="addProduct">
      <slot>Add Product</slot>
    </button>
  </div>
</template>
