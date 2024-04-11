<template>
  <RouterLink to="/">Назад</RouterLink>
  <div v-for="(item, i) in infoDoc" :key="i">
    <p>{{ item }}</p>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import { useDataTableStore } from "../stores/store";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const store = useDataTableStore();
    const route = useRoute();
    const infoDoc = computed(() => {
      return store.dataItems;
    });

    onMounted(() => {
      store.receivingInfoDocuments(route.params.id);
    });

    return {
      store,
      route,
      infoDoc,
    };
  },
});
</script>