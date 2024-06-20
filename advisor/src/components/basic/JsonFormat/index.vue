<template>
  <pre v-html="preSetColor(jsonData)" id="preDom"></pre>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  jsonData: {
    type: Object,
    default: () => ({}),
  },
  // 各种颜色的配置
  colors: {
    type: Object,
    default: () => ({}),
  },
  // 展示 JSON 的步长
  step: {
    type: [Number, String],
    default: 4,
  },
});

// 颜色映射关系
const colorMap = {
  string: 'green',
  number: 'darkorange',
  boolean: 'blue',
  null: 'magenta',
  key: 'red',
};

// 添加样式标签
const addStyle = () => {
  const obj = { ...colorMap, ...props.colors };
  if (document.querySelector('#pre-id')) return;
  const style = document.createElement('style');
  style.id = 'pre-id';
  style.innerText = `
    .string { color: ${obj['string']}; }
    .number { color: ${obj['number']}; }
    .boolean { color: ${obj['boolean']}; }
    .null { color: ${obj['null']}; }
    .key { color: ${obj['key']}; }
  `;
  document.head.appendChild(style);
};

addStyle();

// 格式化 JSON 数据
function preSetColor(data: any) {
  function syntaxHighlight(json: any) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>');
    return json.replace(
      /(\"(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\\"])*\"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g,
      (match: string) => {
        let cls = 'number';
        if (/^\"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  }

  const handler = JSON.stringify(data, null, +props.step);
  return syntaxHighlight(handler);
}
</script>
