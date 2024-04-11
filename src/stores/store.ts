import { defineStore } from 'pinia'

export const useDataTableStore = defineStore('store', {
  state: () => {
    return {
      data: Object,
      dataItems: Object
    }
  },
  actions: {
    async receivingListDocuments(count: number, offset?: number) {         
      fetch('https://demo.ecm-consulting.ru/js-testing-service/data/list', {
        method: 'POST',
        body: JSON.stringify({
          "attributes": [
            "r_object_id",
            "ssa_name",
            "sdta_create_date",
            "ssa_parent_kind_name",
            "sdta_date_approval",
            "ssa_doc_life_cycle_value",
            "ssa_category"
          ],
          "order": {
            "attr": "r_object_id",
            "asc": true
          },
          "size": count,
          "offset": offset
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => this.data = json);
    },
    async receivingInfoDocuments(id: string) {
      fetch('https://demo.ecm-consulting.ru/js-testing-service/data/document/' + id)
        .then((response) => response.json())
        .then((json) => this.dataItems = json);
    }
  }
})
