<template>
  <a-modal
    v-bind="$attrs"
    width="100%"
    wrap-class-name="full-modal"
    :maskClosable="false"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
  >
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item
        v-for="field in showFields"
        :key="field.id"
        :label="t(field.label)"
        :name="field.name"
      >
        <a-input
          v-if="['text'].includes(field.type)"
          v-model:value="formState[field.name]"
          :placeholder="t(field.placeholder)"
          :allowClear="field.clearable || true"
          :disabled="field.disabled"
          @change="handleChange(field.name, formState[field.name])"
        />
        <a-input-password
          v-if="['password'].includes(field.type)"
          v-model:value="formState[field.name]"
          :placeholder="t(field.placeholder)"
          :allowClear="field.clearable || true"
          :disabled="field.disabled"
          @change="handleChange(field.name, formState[field.name])"
        />
        <a-date-picker
          v-if="['date'].includes(field.type)"
          v-model:value="formState[field.name]"
          type="date"
          :placeholder="t(field.placeholder)"
          :format="'YYYY/MM/DD'"
          :allowClear="field.clearable || true"
          :disabled="field.disabled"
          style="width: 100%"
          @change="handleChange(field.name, formState[field.name])"
        />
        <a-input-number
          v-if="['number'].includes(field.type)"
          v-model:value="formState[field.name]"
          :placeholder="t(field.placeholder)"
          :min="field.min"
          :max="field.max"
          :disabled="field.disabled"
          @change="handleChange(field.name, formState[field.name])"
        />
        <a-select
          v-if="['select'].includes(field.type)"
          v-model:value="formState[field.name]"
          :allowClear="field.clearable || true"
          :disabled="field.disabled"
          :placeholder="t(field.placeholder)"
          :options="field.optionsList"
          @change="handleChange(field.name, formState[field.name], field.optionsList)"
        />
        <!-- {{ field.visible }} -->
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts" setup>
import { computed, reactive, ref, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import type { FormInstance } from 'ant-design-vue';
import type { Rule } from "ant-design-vue/es/form";

import { useI18n } from "@/hooks/useI18n";
const { t } = useI18n();

// 设置默认值的props
const props = withDefaults(defineProps<{ fields: any[], rules: Record<string, Rule[]>, initialData: Record<string, any> }>(), {
  fields: () => ([]),
  rules: () => ({}),
  initialData: () => ({}),
})

const confirmLoading = ref<boolean>(false);
const formRef = ref<FormInstance>();
const labelCol = { span: 8, lg: { span: 6 }};
const wrapperCol = { span: 16, lg: { span: 15 }};
// 初始化值，如果传入的initialData有值，则使用它初始化formState
// 此处将formState指向传入的intialData，这样可以在修改formState的时候同时反映在父组件的intialData变量里
const formState: UnwrapRef<Record<string, any>> = reactive(props.initialData);

const showFields = computed(() => props.fields.filter((item) => item.visible !== false))

const emit = defineEmits<{ handleOk: [state: Record<string, any>], change: [fieldName: string, value: string, selectedOption: any] }>()

// 验证通过后出发handleOk事件，由下层处理
const handleOk = () => {
  confirmLoading.value = true;
  // const values = await formRef.value?.validateFields();
  formRef.value
    ?.validate()
    .then(() => {
      emit('handleOk', toRaw(formState))
      confirmLoading.value = false;
    })
    .catch((error: any): void => {
      console.log("error", error);
      confirmLoading.value = false;
    })
};

const handleChange = (fieldName: string, value: any, optionsList?: any[]) => {
  const selectedOption = optionsList?.find((item) => item.value === value)
  console.log(`selected field: ${fieldName}, value: ${value}, current selected Option: ${selectedOption}`);
  // TODO 需要根据field上的配置来确定是否需要出发change事件
  emit('change', fieldName, value, selectedOption)
};

</script>
