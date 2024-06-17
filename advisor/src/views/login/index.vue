<template>
  <div class="login-box">
    <div class="login-logo">
      <h1 class="mb-0 ml-2 text-3xl font-bold">TPM Admin</h1>
    </div>
    <a-form
      ref="formRef"
      layout="horizontal"
      :model="loginFormModel"
      :rules="rules"
      @finish="handleFinish">
      <a-form-item name="salesarea">
        <a-select
          v-model:value="loginFormModel.salesarea"
          size="large"
          style="width: 100%"
          placeholder="部门"
          :options="salesareaOptions"
        />
      </a-form-item>
      <a-form-item name="username">
        <a-input v-model:value="loginFormModel.username" size="large" placeholder="用户名">
          <template #prefix>
            <Icon icon="ant-design:user-outlined" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password">
        <a-input
          v-model:value="loginFormModel.password"
          size="large"
          type="password"
          placeholder="密码"
          autocomplete="new-password"
        >
          <template #prefix>
            <Icon icon="ant-design:lock-outlined" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="verifyCode">
        <a-input
          v-model:value="loginFormModel.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix>
            <Icon icon="ant-design:safety-outlined" />
          </template>
          <template #suffix>
            <img
              :src="captcha"
              class="absolute right-0 h-full cursor-pointer"
              @click="updateCaptcha"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="language">
        <a-radio-group v-model:value="loginFormModel.language">
          <a-radio value="en">EN</a-radio>
          <a-radio value="zh">中</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="loading" block>
          <span>登录</span>
          <template #icon>
            <Icon icon="ant-design:login-outlined"/>
          </template>
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { message, Modal } from 'ant-design-vue';
  import type { Rule } from 'ant-design-vue/es/form';
  import { Icon } from '@/components/basic/icon';
  import { useUserStore } from '@/stores/modules/user';
  // import Api from '@/api/index';
  import { to } from '@/utils/awaitTo';

  const formRef = ref();
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();

  const loading = ref(false);
  const captcha = ref('');

  const salesareaOptions = [{ value: 'B050B000501', label: '贝斯特/大中华区/销售部', icon: '🇨🇳', }]

  const loginFormModel = ref({
    salesarea: 'B050B000501',
    language: 'en',
    username: 'admin',
    password: '111111',
    verifyCode: '1234',
    captchaId: '',
  });
  // const loginFormModel = ref({
  //   salesarea: 'A001A000101',
  //   language: 'en',
  //   username: 'enterpriseadmin',
  //   password: '111111',
  //   verifyCode: '1234',
  //   captchaId: '',
  // });
  const rules: Record<string, Rule[]> = {
    salesarea: [{ required: true, message: 'Please select a salesarea', trigger: 'change'}],
    username: [
      { required: true, message: 'Please input User name', trigger: 'change' },
      { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' },
    ],
  };

  const updateCaptcha = async () => {
    // const data = await Api.captcha.captchaCaptchaByImg({ width: 100, height: 50 });
    // captcha.value = data.img;
    // loginFormModel.value.captchaId = data.id;
  };
  updateCaptcha();

  // 提交表单并验证通过后
  const handleFinish = async () => {
    // 规则没有完全处理的，这里可以添加额外认证
    const { verifyCode } = loginFormModel.value;
    // if (username.trim() == '' || password.trim() == '') {
    //   return message.warning('用户名或密码不能为空！');
    // }
    if (!verifyCode) {
      return message.warning('请输入验证码！');
    }
    console.log('kkkkkk')
    message.loading('登录中...', 0);
    loading.value = true;
    console.log(loginFormModel.value);
    // params.password = md5(password)
    // 
    // 从salesarea提取client，salesorg，division
    const { salesarea } = loginFormModel.value
    const client = salesarea.slice(0,4)
    const salesorg = salesarea.slice(4,9)
    const division = salesarea.slice(9)

    const [err] = await to(userStore.login({ ...loginFormModel.value, client, salesorg, division}));
    if (err) {
      Modal.error({
        title: () => '提示',
        content: () => err.message,
      });
      updateCaptcha();
    } else {
      message.success('登录成功！');
      setTimeout(() => router.replace((route.query.redirect as string) || '/'));
    }
    loading.value = false;
    message.destroy();
  };
</script>

<style lang="scss" scoped>
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    background: url('@/assets/login.svg');
    background-size: 100%;

    .login-logo {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      .svg-icon {
        font-size: 48px;
      }
    }

    :deep(.ant-form) {
      width: 400px;

      .ant-col {
        width: 100%;
      }

      .ant-form-item-label {
        padding-right: 6px;
      }
    }
  }
</style>
