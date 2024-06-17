
declare module 'CFG' {

  interface WizardConfig {
    module: string;
    name: string;
    wizard: {
        title?: string;
        fields: WizardFieldConfig[];
    };
  }

  interface WizardFieldConfig extends Record<string, any>{
    id: string,
    label: string,
    name: string,
    type: string,
    description?: string,
    placeholder?: string,
    rules?: string,
    options?: string,
    formater?: string,
    sort: number,
    editable?: boolean,
    visible?: boolean,
    disabled?: boolean,
    text?: string,
    value?: string,
    min?: number,
    max?: number
  }

  interface GridConfig {
    name: string,
    type: string,
    columns: GridColumnConfig[]
  }

  interface GridColumnConfig {
    key: string,
    label?: string,
    type?: string,
    sort?: number,
    editable?: boolean,
    width?: string,
    sortable?: boolean,
    sortKey?: string,
    formater?: string,
    thStyle?: string,
  }

  interface TabConfig {
    name: string,
    title: string,
    foldingCard: TabItemConfig[]
  }

  interface TabItemConfig {
    accessGroup?: string,
    fieldItemIds?: string,
    name: string,
    title: string,
    sort?: number,
    expanded?: boolean,
    fieldItem?: string[],
  }

  interface GridFilterFieldConfig extends Record<string, any> {
    label: string,
    name: string,
    rules: string,
    type: string,
    options: string,
    sort: number,
    placeholder: string,
    text: string,
    value: string,
    visible: boolean,
    disabled: boolean,
    default: string,
  }

  interface AccessGroupConfig extends Record<string, Record<string, { editable: Object, visible: Object }>> {}
  
  interface ProfileConfig extends Record<string, BaseProfile | MainProfile> {}
  interface BaseProfile {
    buttons: {
      main: {
        left: { iconClass: string, command: string, text: string, order: number, editable: boolean, visible: boolean, accessGroup: string }[]
      }
    }
  }
  interface MainProfile extends Record<string, any> {
    module: string,
    application: string,
    column: { type: string, columnIdentification: { name: string, type: string }},
    apiurl: string,
    params?: { key: string, value: string }[],
    advancedFilter: { overview: string, type: string },
    buttons?: {
      main: {
        left: { iconClass: string, command: string, text: string, order: number, editable: boolean, visible: boolean, accessGroup?: string }[]
      }
    }
  }


  interface DetailContextConfig extends Record<string, DetailContextItemConfig> {}
  interface DetailContextItemConfig extends Record<string, any> {
    module: string,
    detailName: string,
    wizardName?: string,
    application?: string,
    routeName: string,
    buttons?: Record<string, { iconClass: string, command: string, text: string, order: number, editable: boolean, visible: boolean, accessGroup: string }[]>
  }

  

  interface UiGroupConfig extends Record<string, Record<string, UiGroupTabConfig>> {}
  interface UiGroupTabConfig extends Record<string, UiGroupTabValueConfig | string[]> {
    tabs: string[],
  }
  interface UiGroupTabValueConfig { name: string, text: string, slot: string, condition?: Record<string, any>, content?: Object }

}
