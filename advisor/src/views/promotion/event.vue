<template>
  <a-form :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-row :gutter="16">
      <a-col :xs="24" :sm="12" :md="12" :lg="12">
        <a-form-item label="用户名" name="username">
          <a-input v-model="formData.username" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12">
        <a-form-item label="邮箱" name="email">
          <a-input v-model="formData.email" />
        </a-form-item>
      </a-col>
    </a-row>
    <!-- 其他表单项 -->
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Form, Input, Row, Col } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-row': Row,
    'a-col': Col
  },
  setup() {
    const formData = reactive({
      username: '',
      email: ''
    });

    const labelCol = {
      xs: { span: 24 },
      sm: { span: 8 },
      md: { span: 8 },
      lg: { span: 8 }
    };

    const wrapperCol = {
      xs: { span: 24 },
      sm: { span: 16 },
      md: { span: 16 },
      lg: { span: 16 }
    };

    // 表单提交处理函数
    const onSubmit = () => {
      // 处理逻辑
    };

    return {
      formData,
      labelCol,
      wrapperCol,
      onSubmit
    };
  }
});
</script>