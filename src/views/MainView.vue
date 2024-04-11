<template>
  <main>
    <TableDocs />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableDocs  from "../components/TableDocs.vue";

export default defineComponent({
  components: {
    TableDocs
  }
})
</script>

<style lang="scss">
main {
  padding: 10px;
}
</style>

