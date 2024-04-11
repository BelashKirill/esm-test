<template>
  <div class="bottom-bar">
    <div class="bottom-bar__count-items">
      <p>Строк на страницу</p>
      <v-select
        :items="[10, 50, 100]"
        variant="outlined"
        :hide-details="true"
        v-model="countSelect"
        :value="10"
        density="compact"
        :update:modelValue="$emit('selectCountItems', countSelect)"
      ></v-select>
    </div>
    <p>1 - {{ countSelect >= count ? count : countSelect }} из {{ count }}</p>
    <div class="bottom-bar__pagination">
      <a
        ><v-icon
          icon="mdi-skip-previous-outline"
          @click="$emit('firstPage', countSelect)"
        ></v-icon
      ></a>
      <a
        ><v-icon
          icon="mdi-chevron-left"
          @click="$emit('prevPage', countSelect)"
        ></v-icon
      ></a>
      <a
        ><v-icon
          icon="mdi-chevron-right"
          @click="$emit('nextPage', countSelect)"
        ></v-icon
      ></a>
      <a
        ><v-icon
          icon="mdi-skip-next-outline"
          @click="$emit('lastPage', countSelect)"
        ></v-icon
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  props: ["count"],
  emits: ["selectCountItems", "nextPage", "prevPage", "lastPage", "firstPage"],
  setup(props) {
    let countSelect = ref<number>(10);

    return {
      props,
      countSelect,
    };
  },
});
</script>


<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  &__count-items {
    width: 300px;
    display: flex;
    gap: 15px;
    align-items: center;
  }

  &__pagination {
    display: flex;
    gap: 10px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #e4dede;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
</style>