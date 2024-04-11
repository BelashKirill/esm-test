<template>
  <TopTableBar />
  <v-table height="400px" fixed-header>
    <thead>
      <tr>
        <th class="check-area">
          <v-checkbox :hide-details="true"></v-checkbox>
        </th>
        <th class="text-left font-weight-bold">Номер</th>
        <th class="text-left font-weight-bold">Название</th>
        <th class="text-left font-weight-bold">Вид</th>
        <th class="text-left font-weight-bold">Дата создания</th>
        <th class="text-left font-weight-bold">Дата утверждения</th>
        <th class="text-left font-weight-bold">Стадия</th>
        <th class="text-left font-weight-bold">Категория</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in dataTable"
        :key="i"
        @click="openDoc(item.r_object_id)"
      >
        <td>
          <v-checkbox :hide-details="true"></v-checkbox>
        </td>
        <td>{{ item.r_object_id }}</td>
        <td>{{ item.ssa_name }}</td>
        <td>{{ item.ssa_parent_kind_name }}</td>
        <td>{{ formatDate(item.sdta_create_date) }}</td>
        <td>{{ formatDate(item.sdta_date_approval) }}</td>
        <td>{{ item.ssa_doc_life_cycle_value }}</td>
        <td>{{ item.ssa_category }}</td>
      </tr>
    </tbody>
  </v-table>
  <BottomTableBar
    :count="store.data.size"
    @selectCountItems="updateList"
    @nextPage="updateListNext"
    @prevPage="updateListPrev"
    @firstPage="goFirstPage"
    @lastPage="goLastPage"
  />
</template>
``
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useDataTableStore } from "../stores/store";
import TopTableBar from "../components/TopTableBar.vue";
import BottomTableBar from "../components/BottomTableBar.vue";
import router from "../router";

export default defineComponent({
  components: {
    TopTableBar,
    BottomTableBar,
  },
  setup() {
    const store = useDataTableStore();
    
    const dataTable = computed(() => {
      return store.data.atributes;
    });

    const updateList = (data: number) => {
      store.receivingListDocuments(data);
    };
    const updateListNext = (data: number) => {
      let offset = 0;

      if (dataTable.value.length >= data) {
        offset = store.data.offset + data;
        store.receivingListDocuments(data, offset);
      }
    };
    const updateListPrev = (data: number) => {
      let offset = 0;

      if (store.data.offset !== 0) {
        offset = store.data.offset - data;
        store.receivingListDocuments(data, offset);
      }
    };
    const goFirstPage = (data: number) => {
      store.receivingListDocuments(data, 0);
    };
    const goLastPage = (data: number) => {
      let offset = 0;

      if (dataTable.value.length >= data) {
        if (Number.isInteger(store.data.size / data)) {
          offset = (store.data.size / data) * data;
          store.receivingListDocuments(data, offset);
        } else {
          offset = Math.trunc(store.data.size / data) * data;
          store.receivingListDocuments(data, offset);
        }
      }
    };
    const formatDate = (date: string) => {
      if (date) return new Date(date).toLocaleDateString();
    };
    const openDoc = (id: string) => {
      router.push({ name: "about", params: { id } });
    };

    onMounted(() => {
      store.receivingListDocuments(10, 0);
    });

    return {
      dataTable,
      store,
      updateList,
      formatDate,
      openDoc,
      updateListNext,
      updateListPrev,
      goFirstPage,
      goLastPage
    };
  },
});
</script>

<style lang="css" scoped>
.check-area {
  display: flex;
  align-items: center;
}
</style>