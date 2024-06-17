import { fromPairs, last, get } from 'lodash-es';
import { ref } from 'vue';
import type { TabConfig, GridConfig, WizardConfig, GridFilterFieldConfig, WizardFieldConfig } from 'CFG';

const deepPick = (paths: string[], obj: API.CfgField) => {
  return fromPairs(paths.map(p => [
    last(p.split('.')),
    get(obj, p)
  ]))
}

export function convert2GridConfig(configInfo: API.CfgMain): { module: string, grids: GridConfig[] } {
  if (!configInfo) throw Error('Error on loading configuration.')

  const { module, field } = configInfo

  const preGrids = field.map(image => deepPick(
    ['label', 'name', 'type', 'id', 'grid', 'editable', 'sortable', 'sortBy', 'formater', 'width', 'gridType', 'sort'], // gridtype, gridname
    image
  )).sort((a, b) => {
    const nameA = a.gridType.toUpperCase() + a.grid.toUpperCase(); // ignore upper and lowercase
    const nameB = b.gridType.toUpperCase() + b.grid.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal, and then sort by sort field
    return a.sort - b.sort;
  })

  const grids = ref<GridConfig[]>([]);
  const oneGridItem = ref<GridConfig>();
  preGrids.forEach((cardItem, idx) => {
    // 对于detail的grid中的selected需要特殊处理
    const { grid, gridType, label, name, type, editable, width, sortable, sortBy: sortKey, sort, formater } = cardItem
    if (idx === 0) {
      // first
      // 新对象开始
      if (name === 'selected') {
        oneGridItem.value = { name: grid, type: gridType, columns: [{ key: 'selected' }] }
      } else {
        oneGridItem.value = { name: grid, type: gridType, columns: [{
          key: name, label, type, sort, editable, width, sortable, sortKey, formater
        }] }
      }
    } else {
      // 中间的，判断当前的和上一个是否属于相同的tab
      if (grid === oneGridItem.value?.name) {
        if (name === 'selected') {
          oneGridItem.value?.columns.push({ key: 'selected' })
        } else {
          oneGridItem.value?.columns.push({
            key: name, label, type, sort, editable, width, sortable, sortKey, formater
          })
        }
      } else {
        // 把当前添加进去，并创建新对象
        oneGridItem.value && grids.value.push(oneGridItem.value)
        // 新对象开始
        if (name === 'selected') {
          oneGridItem.value = { name: grid, type: gridType, columns: [{ key: 'selected' }] }
        } else {
          oneGridItem.value = { name: grid, type: gridType, columns: [{
            key: name, label, type, sort, editable, width, sortable, sortKey, formater
          }] }
        }
      }
      // 如果最后一个，还需要把构造的对象添加进去
      if (idx === preGrids.length - 1) {
        // console.log('pushed the last one:', oneGridItem)
        oneGridItem.value && grids.value.push(oneGridItem.value)
      }
    }
  })

  console.log('convert2GridConfig will return:', { module, grids: grids.value })

  // const bbb: { module: string, grids: GridConfig[] } = { module, grids: grids.value }
  return { module, grids: grids.value }
}

export function convert2RulesConfig(configInfo: API.CfgMain) {
  if (!configInfo) throw Error('Error on loading configuration.')

  const { module, name, field } = configInfo
  const fields = field.map(image => deepPick(
    ['label', 'name', 'id', 'type', 'description', 'placeholder', 'rules', 'options', 'formater', 'prop', 'accessGroup', 'sort'],
    image
  )).sort((a, b) => a.sort - b.sort);
  const rule: { module: string, rules: Record<string, any> } = { module, rules: {}}
  
  rule.rules[name] = fields
  console.debug('rule:', rule)
  // console.log('rules: ', rule)
  return rule
}

export function convert2DetailConfig(configInfo: API.CfgMain): { module: string, name: string, tabs: TabConfig[] } {
  console.debug('pre convert2DetailConfig:', configInfo)
  if (!configInfo) throw Error('Error on loading configuration.')

  const { module, name, field } = configInfo
  const preTabs = field.map(image => deepPick(
    ['id', 'tab', 'tabTitle', 'foldingCard', 'foldingCardAccessGroup', 'foldingCardTitle', 'fieldItemIds', 'sort', 'foldingCardExpanded'],
    image
  )).sort((a, b) => {
    const nameA = a.tab.toUpperCase(); // ignore upper and lowercase
    const nameB = b.tab.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal, and then sort by sort field
    return a.sort - b.sort;
  })

  const tabs = ref<TabConfig[]>([]);
  const oneTabItem = ref<TabConfig>();
  const preTabsLen = preTabs.length
  preTabs.forEach((cardItem, idx) => {
    const { tab, tabTitle, fieldItemIds, foldingCard: name, foldingCardAccessGroup: accessGroup, foldingCardTitle: title, sort, foldingCardExpanded: expanded } = cardItem
    const foldingCardItem = { fieldItemIds: fieldItemIds.split(','), name, accessGroup, title, fieldItem: [], sort, expanded }

    if (idx === 0) {
      // first 新对象开始
      oneTabItem.value = { name: tab, title: tabTitle, foldingCard: [foldingCardItem] }
    } else {
      // 中间的，判断当前的和上一个是否属于相同的tab
      if (tab === oneTabItem.value?.name) {
        oneTabItem.value?.foldingCard.push(foldingCardItem)
      } else {
        // 把当前添加进去，并创建新对象
        oneTabItem.value && tabs.value.push(oneTabItem.value)
        // 新对象开始
        oneTabItem.value = { name: tab, title: tabTitle, foldingCard: [foldingCardItem] }
      }
    }
    // 如果最后一个，还需要把构造的对象添加进去
    if (idx === preTabsLen - 1) {
      oneTabItem.value && tabs.value.push(oneTabItem.value)
    }
  })
  const result: { module: string, name: string, tabs: TabConfig[] } = { module, name, tabs: tabs.value }
  console.debug('post convert2DetailConfig:', result)
  return result
}

export function convert2WizardConfig(configInfo: API.CfgMain): WizardConfig {
  if (!configInfo) throw Error('Error on loading configuration.')

  const { module, name, title, field } = configInfo
  const fields = field.map(image => deepPick(
    ['label', 'name', 'id', 'type', 'description', 'placeholder', 'rules', 'options', 'formater', 'sort', 'editable', 'visible', 'disabled', 'text', 'value', 'min', 'max'],
    image
  )).sort((a, b) => a.sort - b.sort) as WizardFieldConfig[];
  // console.log("🚀 ~ convert2WizardConfig ~ fields:", fields)
  const wizard: WizardConfig = { module, name, wizard: { title, fields }}
  console.log("🚀 ~ convert2WizardConfig ~ wizard:", wizard)
  return wizard
}

export function convert2GridFiltersConfig(configInfo: API.CfgMain): { module: string, fields: GridFilterFieldConfig[]} {
  if (!configInfo) throw Error('Error on loading configuration.')

  const { module, field } = configInfo

  const fields = field.map(image => deepPick(
    ['label', 'name', 'rules', 'type', 'options', 'sort', 'placeholder', 'text', 'value', 'visible', 'disabled', 'default'],
    image
  )).sort((a, b) => a.sort - b.sort) as GridFilterFieldConfig[];

  return { module, fields }
}
