<template>
  <InsertCustomerWizard v-model:open="createCustomerWizardModal.visible" :id="createCustomerWizardModal.id" :title="createCustomerWizardModal.title" />

  <a-page-header
    class="b-solid b-1 p-2 mb-1"
    style="border-color: rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => $router.go(-1)"
  >
    <template #extra>
      <a-tooltip title="Create">
        <!-- <a-button shape="circle" :icon="h(PlusOutlined)" /> -->
        <a-button shape="circle" :icon="h(PlusOutlined)" @click="handleCreateCustomer" />
      </a-tooltip>
      <a-tooltip title="Filter">
        <a-button shape="circle" :icon="h(FilterOutlined)" />
      </a-tooltip>
      <a-button key="3"><FilterOutlined /></a-button>
      <a-button key="2">Operation</a-button>
      <a-button key="1" type="primary">Primary</a-button>
    </template>
    <a-table
      :columns="columns"
      :scroll="{ x: '100%', y: 'calc(100vh - 300px)' }"
      :dataSource="state.data"
      :loading="state.loading"
      :pagination="state.pagination"
      :rowKey="(record: any) => record.pkey"
      :rowSelection="rowSelection"
      @change="handleTableChange"
      @resizeColumn="handleResizeColumn"
    >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <SmileOutlined />
          Name
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.key === 'name'">
        <a>{{ text }}</a>
        <RouterLink :to="{ path: `/bpa/edit/${record.pkey}`, replace: true }"
          class="ant-btn ant-btn-primary">
          {{ text }}
        </RouterLink>
      </template>
    </template>
  </a-table>
  </a-page-header>

</template>

<script setup lang="ts">
import { computed, h, onMounted, reactive, ref, unref } from 'vue';
import { useCfgStore } from "@/stores/modules/cfg";
import { useI18n } from '@/hooks/useI18n';
const { t } = useI18n();
import { FilterOutlined, PlusOutlined, SmileOutlined } from '@ant-design/icons-vue';
import Api from '@/api/';
import type { TableColumnsType } from 'ant-design-vue';
import type { GridColumnConfig } from 'CFG';
import { Table } from 'ant-design-vue';
// import { ResizableColumn } from '@/components/core/resizable-column';
import InsertCustomerWizard from './components/insertCustomerWizard.vue'

const { getCustomerList } = Api.customer

const remoteData = ref<boolean>(true)

const cfgStore = useCfgStore();

const createCustomerWizardModal = ref({
  visible: false,
  id: 'create-promotionwizard-modal',
  title: t('wizard.promotion'),
  okTitle: t('global.girdoktitle'),
  content: ''
})

const mycolumn = cfgStore.getMyColumn("customer", "default", "overview");

const columns: TableColumnsType = reactive([]);
if (mycolumn) {
  mycolumn.forEach((e: GridColumnConfig) => {
    const { label, key, width } = e;
    // fixed: 'left'
    let fixed1 = { ellipsis: true }
    if (key === 'id') {
      fixed1['fixed'] = 'left' // = { 'fixed': 'left' }
    }
    columns.push({
      ...fixed1,
      resizable: true,
      title: t(label || ''),
      key,
      dataIndex: key,
      width,
      filters: [
        { text: 'First', value: 'First' },
        { text: 'local', value: 'local' },
      ],
      // 当筛选项较多时，提供该筛选项的查询过滤
      // filterSearch: (input, filter) => (filter.value as string).indexOf(input) > -1,
      // 选项是多选还是单选
      // filterMultiple: false,
      // 当一次性查出现所有数据时则使用前端搜索
      onFilter: (value, record) => {
        console.log("🚀 ~ mycolumn.forEach ~ value:", record, value)
        
        return record.id.includes(value)
      },
    });
  });
}

// const handleResize = ({ index, width }) => {
//   console.log("🚀 ~ handleResize ~ index, width:", index, width)
//   columns[index].width = width;
// };

const handleCreateCustomer =async () => {
  // 设置open为true则显示对话框
  createCustomerWizardModal.value.visible = true
}


function handleResizeColumn(w, col) {
  col.width = w;
}

const state = reactive({
  data: [] as API.CustomerInfo[], // 数据类型需要定义
  pagination: {
    current: 1,
    pageSize: 50,
    total: 0,
  },
  loading: false,
  sorter: {
    field: '',
    order: '',
  },
  query: '',
});

async function fetchData() {
  state.loading = true;

  const page = state.pagination.current
  const pageSize = state.pagination.pageSize

  // 如果不使用远程查询分页load数据，则一次性load全部不分页数据，数据行数应该设限制
  const { rows: settingData, count } = await getCustomerList({ 
    page: remoteData.value ? page : undefined,
    pageSize: remoteData.value ? pageSize : undefined,
    ...state.sorter,
    // ...filters
  })

  state.data = settingData;
  state.pagination.total = count;
  state.loading = false;
}

onMounted(() => {
  fetchData()
})

function handleTableChange(pagination, filters, sorter) {
  console.log("🚀 ~ handleTableChange ~ filters:", filters)
  state.pagination.current = pagination.current;
  state.sorter.field = sorter.field;
  state.sorter.order = sorter.order;

  // 需要远程查询时才重新load数据
  if (remoteData.value) {
    fetchData();
  }
}

const selectedRowKeys = ref<API.CustomerInfo['key'][]>([]); // Check here to configure the default column
const onSelectChange = (changableRowKeys: string[]) => {
  console.log('selectedRowKeys changed: ', changableRowKeys);
  selectedRowKeys.value = changableRowKeys;
};

const rowSelection = computed(() => {
  return {
    selectedRowKeys: unref(selectedRowKeys),
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };
});

</script>