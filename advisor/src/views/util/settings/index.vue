<template>
  <a-page-header
    class="b-solid b-1 p-2 mb-1"
    style="border-color: rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => $router.go(-1)"
  >
    <template #extra>
      <a-tooltip title="Create">
        <a-button shape="circle" :icon="h(PlusOutlined)" @click="handleCreate" />
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
      :dataSource="state.data"
      :loading="state.loading"
      :pagination="state.pagination"
      :rowKey="(record: any) => record.key"
      @change="handleTableChange"
    />
  </a-page-header>

</template>

<script setup lang="ts">
import { h, onMounted, reactive, ref } from 'vue';
import { useCfgStore } from "@/stores/modules/cfg";
import { useI18n } from '@/hooks/useI18n';
const { t } = useI18n();
import { FilterOutlined, PlusOutlined } from '@ant-design/icons-vue';
import Api from '@/api/';
import type { TableColumnsType } from 'ant-design-vue';
import type { GridColumnConfig } from 'CFG';

const { getSettingList } = Api.setting

const remoteData = ref<boolean>(false)

const cfgStore = useCfgStore();

const mycolumn = cfgStore.getMyColumn("setting", "default", "overview");

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
        
        return record.description.includes(value)
      },
    });
  });
}


const state = reactive({
  data: [] as API.SettingInfo[], // 数据类型需要定义
  pagination: {
    current: 1,
    pageSize: 10,
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
  const { rows: settingData, count } = await getSettingList({ 
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

const handleCreate =async () => {
  // TODO 处理Create事件
  // 设置open为true则显示对话框
  // createPromotionWizardModal.value.visible = true
}


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

// const handleTableChange = async (paginations, filters, sorter) => {
//     // 当分页、筛选或排序变化时触发
//     // 在这里可以发起网络请求，根据新的分页信息获取数据
//     // console.log('当前页码：', paginations);
//     console.log('params', paginations, filters, sorter);
    

//     // const params = { client: 'A001', salesorg: 'A0001', division: '01', language: 'en' }
//     const params = { client: 'B050', salesorg: 'B0005', division: '01', language: 'en' }
//     const page = paginations.current
//     const pageSize = paginations.pageSize

//     const { rows: settingData, count } = await getSettingList({ ...params, page, pageSize, ...filters })
//     data.value = settingData
//     pagination.value = { current: page, pageSize, total: count }
//   };


</script>