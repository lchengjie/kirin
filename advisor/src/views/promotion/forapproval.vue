<template>
  <InsertPromotionWizard v-model:open="createPromotionWizardModal.visible" :id="createPromotionWizardModal.id" :title="createPromotionWizardModal.title" />
  <a-page-header
    class="b-solid b-1 p-2 mb-1"
    style="border-color: rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => $router.go(-1)"
  >
    <template #extra>
      <a-tooltip title="Create">
        <a-button shape="circle" :icon="h(PlusOutlined)" @click="handleCreatePromotion" />
      </a-tooltip>
      <a-tooltip title="Filter">
        <a-button shape="circle" :icon="h(FilterOutlined)" />
      </a-tooltip>
      <a-button key="3"><FilterOutlined /></a-button>
      <a-button key="2">Operation</a-button>
      <a-button key="1" type="primary">Primary</a-button>
    </template>
    <!-- <a-descriptions size="small" :column="3">
      <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
      <a-descriptions-item label="Association">
        <a>421421</a>
      </a-descriptions-item>
      <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
      <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
      <a-descriptions-item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </a-descriptions-item>
    </a-descriptions> -->
  </a-page-header>
  <div class="main-grid-container">
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 300 }"
      :pagination="pagination"
      class="mytable"
      style="height: 100%"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
      <!-- <template #summary>
        <a-table-summary fixed>
          <a-table-summary-row>
            <a-table-summary-cell>Total</a-table-summary-cell>
            <a-table-summary-cell>
              <a-typography-text type="danger">{{
                totals.totalBorrow
              }}</a-typography-text>
            </a-table-summary-cell>
            <a-table-summary-cell>
              <a-typography-text>{{ totals.totalBorrow }}</a-typography-text>
            </a-table-summary-cell>
          </a-table-summary-row>
        </a-table-summary>
      </template> -->
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import type { GridColumnConfig } from "CFG";
import { useCfgStore } from "@/stores/modules/cfg";
import { useI18n } from '@/hooks/useI18n';
const { t } = useI18n();
import { FilterOutlined, PlusOutlined } from '@ant-design/icons-vue';
import InsertPromotionWizard from './components/insertPromotionWizard.vue'

import Api from '@/api/';

const cfgStore = useCfgStore();


interface DataItem {
  pkey: string;
  id: string;
  client: string;
  clientDesc: string;
  salesorg: string;
  salesorgDesc: string;
  application: string;
  applicationDesc: string;
  value: string;
}

const data = ref([]);

const createPromotionWizardModal = ref({
  visible: false,
  id: 'create-promotionwizard-modal',
  title: t('wizard.promotion'),
  okTitle: t('global.girdoktitle'),
  content: ''
})

// 获取界面上用于显示的列的配置信息
// const mycolumn = cfgStore.getMyColumn("promotion", "promotion", "overview");
const mycolumn = cfgStore.getMyColumn("setting", "default", "overview");
console.log("🚀 ~ mycolumn:", mycolumn);

import type { TableColumnsType } from "ant-design-vue";
import { computed, onMounted, ref } from "vue";
import type { IPagination } from "GridList";
import { keys } from "lodash-es";
const columns: TableColumnsType = [];
if (mycolumn) {
  mycolumn.forEach((e: GridColumnConfig) => {
    const { label, key, width } = e;
    columns.push({
      title: t(label || ''),
      key,
      dataIndex: key,
      width,
      filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    });
  });
}

console.log("🚀 ~ columns:", columns);

// const { getPromotionList } = Api.promotion
// const params = ref({ client: 'A001', salesorg: 'A0001', division: '01', language: 'en' })
// const { rows: promotionData } = await getPromotionList(params.value)
// console.log("🚀 ~ promotionData:", promotionData)
const { getSettingList } = Api.setting
// const params = ref({ client: 'A001', salesorg: 'A0001', division: '01', language: 'en' })
// const { rows: settingData } = await getSettingList(params.value)
// console.log("🚀 ~ settingData:", settingData)

const pagination = ref<IPagination>({
    current: 1,
    pageSize: 13,
    total: 0, // 数据总数，通常需要后端提供
  });
const handleTableChange = async (paginations: IPagination, filters: Record<string, string[] | null>, sorter) => {
    // 当分页、筛选或排序变化时触发
    // 在这里可以发起网络请求，根据新的分页信息获取数据
    // console.log('当前页码：', paginations);
    console.log('params', paginations, filters, sorter);
    

    // const params = { client: 'A001', salesorg: 'A0001', division: '01', language: 'en' }
    const params = { client: 'B050', salesorg: 'B0005', division: '01', language: 'en' }
    const page = paginations.current
    const pageSize = paginations.pageSize

    // const ppp = ref([])
    // Object.keys(filters).forEach((item) => {
    //   if (filters[item]) {
    //     ppp.value[item] = filters[item]
    //   }
    // })
    // {
    //   "clientDesc": null,
    //   "description": null,
    //   "salesorgDesc": null,
    //   "applicationDesc": null,
    //   "id": [
    //       "Jim"
    //   ]
    // }

    const { rows: settingData, count } = await getSettingList({ ...params, page, pageSize, ...filters })
    data.value = settingData
    pagination.value = { current: page, pageSize, total: count }
  };

const handleCreatePromotion =async () => {
  // 设置open为true则显示对话框
  createPromotionWizardModal.value.visible = true
}

onMounted(() => {
  handleTableChange(pagination.value, null, null)
  // if (headline.value) {
  //   console.log('mounted.....', headline.value.innerHTML)
  // }
  // console.log('mounted.....', headline.value)
})
// [
//   { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
//   { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
//   { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
//   { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
//   { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
//   { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
//   { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
//   { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
//   { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
//   { title: 'Column 8', dataIndex: 'address', key: '8' },
//   {
//     title: 'Action',
//     key: 'operation',
//     fixed: 'right',
//     width: 100,
//   },
// ];

// interface DataItem {
//   key: number;
//   name: string;
//   age: number;
//   address: string;
// }


// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

// const totals = computed(() => {
//   let totalBorrow = 0;

//   data.forEach(({ age }) => {
//     totalBorrow += age;
//     // totalRepayment += repayment;
//   });
//   return { totalBorrow };
// });
</script>
