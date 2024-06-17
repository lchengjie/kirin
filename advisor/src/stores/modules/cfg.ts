import { defineStore } from 'pinia';
import { store } from '@/stores';
import Api from '@/api/';
import { ref } from 'vue';
import { cfgConfig } from './cfg/cfgconfig'
import { convert2GridConfig, convert2RulesConfig, convert2DetailConfig, convert2WizardConfig, convert2GridFiltersConfig } from '@/utils/cfghelper'
import { find } from 'lodash-es';
import type { AccessGroupConfig, DetailContextConfig, ProfileConfig, UiGroupConfig } from 'CFG';

// TODO 返回值需要定义格式
export const useCfgStore = defineStore(
  'cfg',
  () => {
    const globalConfig = ref<API.CfgMain[]>([]);
    const profileConfig = ref<ProfileConfig>(cfgConfig.profileConfig)
    const detailContextConfig = ref<DetailContextConfig>(cfgConfig.detailContextConfig)
    const uiGroupConfig = ref<UiGroupConfig>(cfgConfig.uiGroupConfig)
    const accessGroupConfig = ref<AccessGroupConfig>(cfgConfig.accessGroupConfig)

    // 初始化CFG配置信息，在登入成功后初始化一次
    const initConfig = async (para: any) => {
      const params = { active: true, ...para }
      const { listcfg } = Api.cfg
      const { rows: configData } = await listcfg(params)

      globalConfig.value = configData;
      // Storage.set(CFG_KEY, configData);
    };

    const getMyColumn = (module: string, name: string, type: string) => {
      const columns = find(getGridConfig(module).grids, { name, type })?.columns

      if (!columns) {
        throw new Error(
          `missing configuration module ${module}, profile ${name} and type ${type} grid.`
        )
      }

      // 对最后一列进行特殊处理
      if (type === 'detail') {
        const tailcolumn = {
          key: 'tailcolumn',
          label: '',
          thStyle: `width: 50%`
        }
        let hasTailColumn = false
        columns?.forEach((item) => {
          if (item.width) {
            item.thStyle = `width: ${item.width}px`
          }
          if (item.key === 'tailcolumn') {
            hasTailColumn = true
          }
        })
        !hasTailColumn && columns && columns.push(tailcolumn)
      }

      return columns
    }

    const getGridConfig = (module: string) => {
      if (module) {
        const selectedConfig = find(globalConfig.value, { module, type: 'grid' })
        if (!selectedConfig) {
          throw new Error(
            `missing configuration module ${module} and type grid.`
          )
        }
        return convert2GridConfig(selectedConfig)
      } else {
        throw new Error(
          `missing configuration module ${module} and type grid.`
        )
      }
    }

    const getRulesConfig = (module: string) => {
      if (module) {
        const selectedConfig = find(globalConfig.value, { module, type: 'rules' })
        if (!selectedConfig) {
          throw new Error(
            `missing configuration module ${module} and type rules.`
          )
        }
        return convert2RulesConfig(selectedConfig)
      } else {
        throw new Error(
          `missing configuration module ${module} and type grrulesid.`
        )
      }
    }
    const getPageDetailConfig = (module: string, detailName: string) => {
      if (module) {
        const selectedConfig = find(globalConfig.value, { module, name: detailName })
        if (!selectedConfig) {
          throw new Error(
            `missing configuration module ${module} and detail ${detailName}.`
          )
        }
        return convert2DetailConfig(selectedConfig)
      } else {
        throw new Error(
          `missing configuration module ${module} and detail ${detailName}.`
        )
      }
    }
    const getPageWizardConfig = (module: string, detailName: string) => {
      if (module) {
        const selectedConfig = find(globalConfig.value, { module, name: detailName })
        if (!selectedConfig) {
          throw new Error(
            `missing configuration module ${module} and wizard ${detailName}.`
          )
        }
        return convert2WizardConfig(selectedConfig)
      } else {
        throw new Error(
          `missing configuration module ${module} and wizard ${detailName}.`
        )
      }
    }
    const getOverviewGridFilterConfig = (module: string, overviewName: string) => {
      if (module) {
        const selectedConfig = find(globalConfig.value, { module, name: overviewName, type: 'gridfilter' })
        if (!selectedConfig) {
          throw new Error(
            `missing configuration module ${module} and overview ${overviewName} and type gridfilter..`
          )
        }
        return convert2GridFiltersConfig(selectedConfig)
      } else {
        throw new Error(
          `missing configuration module ${module} and overview ${overviewName} and type gridfilter..`
        )
      }
    }

    return {
      globalConfig,
      profileConfig,
      detailContextConfig,
      uiGroupConfig,
      accessGroupConfig,
      initConfig,
      getGridConfig,
      getRulesConfig,
      getPageDetailConfig,
      getPageWizardConfig,
      getOverviewGridFilterConfig,
      getMyColumn
    }
  },
  {
    persist: true,
  },
)

// Need to be used outside the setup
export function useCfgStoreWithOut() {
  return useCfgStore(store);
}
