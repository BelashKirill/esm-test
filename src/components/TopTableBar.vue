<template>
  <div class="top-bar">
    <div class="top-bar__left">
      <div class="top-bar__actions">
        <v-select
          label="Действия"
          :items="['Удалить']"
          variant="outlined"
          :hide-details="true"
          density="compact"
        ></v-select>
      </div>
      <div class="top-bar__search">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          density="compact"
        ></v-text-field>
      </div>
      <div class="top-bar__filters">
        <v-select
          label="Фильтр"
          :items="['Дата']"
          variant="outlined"
          :hide-details="true"
          density="compact"
        ></v-select>
      </div>
    </div>
    <div class="top-bar__right">
      <v-btn variant="tonal">Открыть</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  &__left {
    display: flex;
  }

  &__actions,
  &__filters {
    width: 200px;
  }

  &__filters {
    margin-left: 15px;
  }

  &__search {
    width: 300px;
    margin-left: 15px;
  }
}
</style>