import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

const INITIAL_PRODUCTS = [
  {
    name: 'Americano',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Espresso',
    image: 'https://picsum.photos/48',
    status: 'yellow',
    date: null,
  },
  {
    name: 'Mocha',
    image: '',
    status: 'green',
    date: null,
  },
  {
    name: 'White Mocha',
    image: '',
    status: 'yellow',
    date: 704305433,
  },
  {
    name: 'Latte',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: 1666715033,
  },
  {
    name: 'Cappucino',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Walking with Giants',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Turbinator 2',
    image: 'https://picsum.photos/48',
    status: 'red',
    date: null,
  },
  {
    name: 'Super Cali Fragilistic Expialidocious',
    image: '',
    status: 'red',
    date: 704305433,
  },
  {
    name: 'Baseball Hat',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
{
    name: 'Americano',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Espresso',
    image: 'https://picsum.photos/48',
    status: 'yellow',
    date: null,
  },
  {
    name: 'Mocha',
    image: '',
    status: 'green',
    date: null,
  },
  {
    name: 'White Mocha',
    image: '',
    status: 'yellow',
    date: 704305433,
  },
  {
    name: 'Latte',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: 1666715033,
  },
  {
    name: 'Cappucino',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Walking with Giants',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
  {
    name: 'Turbinator 2',
    image: 'https://picsum.photos/48',
    status: 'red',
    date: null,
  },
  {
    name: 'Super Cali Fragilistic Expialidocious',
    image: '',
    status: 'red',
    date: 704305433,
  },
  {
    name: 'Baseball Hat',
    image: 'https://picsum.photos/48',
    status: 'green',
    date: null,
  },
]

const useProducts = defineStore('products', () => {
  const filterProducts = (products:string) => {
    if (!products) return INITIAL_PRODUCTS;

    return INITIAL_PRODUCTS.filter(product => product.name.toLowerCase().includes(products.toLowerCase()))
  };

  const inputRef = ref('')
  const state = reactive({ products: INITIAL_PRODUCTS})

  const updateSearchQuery = () => {
    state.products = filterProducts(inputRef.value)
  }

  const itemsPerPage = ref(10);
  const currentPage = ref(1);
  const totalPages = computed(() => Math.ceil(state.products?.length / itemsPerPage.value));

  const sortedProducts = computed(() => {
    return state.products?.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  });

  const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    return sortedProducts.value?.slice(startIndex, endIndex);
  });

  const previousPage = () => {
    currentPage.value--;
  };

  const nextPage = () => {
    currentPage.value++;
  };

  return {
    inputRef,
    totalPages,
    currentPage,
    paginatedProducts,
    updateSearchQuery,
    nextPage,
    previousPage,
    itemsPerPage,
  }
})

export default useProducts;
