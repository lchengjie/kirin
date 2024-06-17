export const cfgConfig = {
  profileConfig: {
    BaseProfile: {
      buttons: {
        main: {
          left: [
            { iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: false, visible: true, accessGroup: 'createAccessGroup' },
            { iconClass: 'r-upload', command: 'upload', text: 'overviewheader.upload', order: 2, editable: false, visible: true, accessGroup: 'uploadAccessGroup' },
            { iconClass: 'r-open', command: 'open', text: 'overviewheader.open', order: 3, editable: true, visible: true, accessGroup: 'readerAccessGroup' },
            { iconClass: 'r-download', command: 'download', text: 'overviewheader.download', order: 4, editable: true, visible: true, accessGroup: 'downloadAccessGroup' },
            { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: true, accessGroup: 'deleteAccessGroup' },
            { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
          ]
        }
      }
    },
    PromotionIdentificationProfile: {
      module: 'promotion',
      application: 'Prm',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'promotion', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Promotion' },
        { key: 'responsiblePkey', value: 'self:currentUserPkey' },
        { key: 'active', value: 'ref:this.activeStatus:true' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PromotionOverview', type: 'gridfilter' }
      // buttons: {
      //   main: {
      // left: [
      // { iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: false, visible: true, accessGroup: 'createAccessGroup' },
      // { iconClass: 'r-upload', command: 'upload', text: 'overviewheader.upload', order: 2, editable: false, visible: true, accessGroup: 'createAccessGroup' },
      // { iconClass: 'r-open', command: 'open', text: 'overviewheader.open', order: 3, editable: true, visible: true, accessGroup: 'readerAccessGroup' },
      // { iconClass: 'r-download', command: 'download', text: 'overviewheader.download', order: 4, editable: true, visible: true, accessGroup: 'downloadAccessGroup' },
      // { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: true, accessGroup: 'deleteAccessGroup' },
      // { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
      // ]
      //   }
      // }
    },
    PromotionForApprovalProfile: {
      module: 'promotion',
      application: 'Prm',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'forapproval', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Promotion' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ForApprovalOverview', type: 'gridfilter' }
    },
    PromotionChildPromotionProfile: {
      module: 'promotion',
      application: 'Prm',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'promotion', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Promotion' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PromotionChild', type: 'gridfilter' }
    },
    PromotionTacticProfile: {
      module: 'promotion',
      application: 'Tac',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'tactic', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Tactic' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PromotionTactic', type: 'gridfilter' }
    },
    EventIdentificationProfile: {
      module: 'promotion',
      application: 'Eve',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'event', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Event' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'EventOverview', type: 'gridfilter' }
    },
    ProgramIdentificationProfile: {
      module: 'promotion',
      application: 'Prg',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'program', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Program' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ProgramOverview', type: 'gridfilter' }
    },
    LtaIdentificationProfile: {
      module: 'promotion',
      application: 'Lta',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'lta', type: 'overview' }},
      apiurl: '/api/promotion', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'LTA' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'LtaOverview', type: 'gridfilter' }
      // buttons: {
      //   main: {
      //     left: [
      //       { iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: false, visible: true, accessGroup: 'createAccessGroup' },
      //       { iconClass: 'r-upload', command: 'upload', text: 'overviewheader.upload', order: 2, editable: false, visible: true, accessGroup: 'createAccessGroup' },
      //       { iconClass: 'r-open', command: 'open', text: 'overviewheader.open', order: 3, editable: true, visible: true, accessGroup: 'readerAccessGroup' },
      //       { iconClass: 'r-download', command: 'download', text: 'overviewheader.download', order: 4, editable: true, visible: true, accessGroup: 'downloadAccessGroup' },
      //       { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: true, accessGroup: 'deleteAccessGroup' },
      //       { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
      //     ]
      //   }
      // }
    },
    CheckbookIdentificationProfile: {
      module: 'checkbook',
      application: 'Cbk',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/checkbook'
      apiurl: '/api/checkbook', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'CheckbookOverview', type: 'gridfilter' }
    },
    PaymentIdentificationProfile: {
      module: 'payment',
      application: 'Pay',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/payment', // 查询列表的api地址
      params: [], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'PaymentOverview', type: 'gridfilter' }
    },
    FndtatemplateIdentificationProfile: {
      module: 'fndtatemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/tame', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'FndtatemplateOverview', type: 'gridfilter' }
    },
    PeriodIdentificationProfile: {
      module: 'period',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/checkbook'
      apiurl: '/api/period', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' }, { key: 'client', value: 'self:client' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'PeriodOverview', type: 'gridfilter' },
      buttons: {
        main: {
          left: [
            { iconClass: 'tree', command: 'newhierarchy', text: 'overviewheader.createperiodhierarchy', order: 7, editable: false, visible: true, accessGroup: 'createAccessGroup' }
          ]
        }
      }
    },
    OrgunitIdentificationProfile: {
      module: 'orgunit',
      application: 'Org',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/checkbook'
      apiurl: '/api/orgunit', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'OrgunitOverview', type: 'gridfilter' }
    },
    ProductIdentificationProfile: {
      module: 'product',
      application: 'Prd',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/product', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' },
        { key: 'salesorg', value: 'self:salesorg' },
        { key: 'metaType', value: 'Product' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'ProductOverview', type: 'gridfilter' }
    },
    ProductGroupIdentificationProfile: {
      module: 'product',
      application: 'Prd',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/product', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' },
        { key: 'salesorg', value: 'self:salesorg' },
        { key: 'metaType', value: 'PrdGroup' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'ProductGroupOverview', type: 'gridfilter' }
    },
    FundIdentificationProfile: {
      module: 'fund',
      application: 'Fnd',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/fund', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' },
        { key: 'salesorg', value: 'self:salesorg' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'FundOverview', type: 'gridfilter' }
    },
    TransactionIdentificationProfile: {
      module: 'transaction',
      application: 'Tra',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/ta', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' }, { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'TransactionOverview', type: 'gridfilter' }
    },
    PrdSetIdentificationProfile: {
      module: 'productset',
      application: 'Prd',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prdass', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' },
        { key: 'salesorg', value: 'self:salesorg' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'ProductsetOverview', type: 'gridfilter' }
    },
    PexRegionProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Region' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PexRegion', type: 'gridfilter' }
    },
    PexAreaProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Area' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PexArea', type: 'gridfilter' }
    },
    PexStoreProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Store' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PexStore', type: 'gridfilter' }
    },
    PexDistributorProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Distributor' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PexDistributor', type: 'gridfilter' }
    },
    Pex1grProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: '1GR' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Pex1gr', type: 'gridfilter' }
    },
    Pex2grProfile: {
      module: 'pex',
      application: 'Pex',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pex', // 查询列表的api地址
      params: [{ key: 'metaType', value: '2GR' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Pex2gr', type: 'gridfilter' }
    },
    Pap1grProfile: {
      module: 'pap',
      application: 'Pap',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pap', // 查询列表的api地址
      params: [{ key: 'metaType', value: '1GRApproval' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Pap1gr', type: 'gridfilter' }
    },
    Pap2grProfile: {
      module: 'pap',
      application: 'Pap',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pap', // 查询列表的api地址
      params: [{ key: 'metaType', value: '2GRApproval' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Pap2gr', type: 'gridfilter' }
    },
    PapDoneProfile: {
      module: 'pap',
      application: 'Pap',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/pap', // 查询列表的api地址
      // params: [{ key: 'metaType', value: '2GRApproval' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PapDone', type: 'gridfilter' }
    },
    CustomerIdentificationProfile: {
      module: 'customer',
      application: 'Cus',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/customer', // 查询列表的api地址
      params: [
        { key: 'salesorg', value: 'self:salesorg' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CustomerOverview', type: 'gridfilter' }
    },
    CustomerDistributorProfile: {
      module: 'customer',
      application: 'Cus',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'distributor', type: 'overview' }},
      apiurl: '/api/customer', // 查询列表的api地址
      params: [
        { key: 'customerType', value: 'Distributor' },
        { key: 'templateId', value: 'distributor' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'DistributorOverview', type: 'gridfilter' }
    },
    CustomerStoreProfile: {
      module: 'customer',
      application: 'Cus',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'store', type: 'overview' }},
      apiurl: '/api/customer', // 查询列表的api地址
      params: [
        { key: 'customerType', value: 'Store' },
        { key: 'templateId', value: 'Customer' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'StoreOverview', type: 'gridfilter' }
    },
    CustomerContactProfile: {
      module: 'customer',
      application: 'Cus',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/customer', // 查询列表的api地址
      params: [
        { key: 'templateId', value: 'ContactPartner' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ContactOverview', type: 'gridfilter' }
    },
    RoleIdentificationProfile: {
      module: 'role',
      application: 'Rol',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/usrrole', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'RoleOverview', type: 'gridfilter' }
    },
    DivisionIdentificationProfile: {
      module: 'division',
      application: 'Ent',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/division', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'DivisionOverview', type: 'gridfilter' }
    },
    FundtemIdentificationProfile: {
      module: 'fundtemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/fndme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'FndtemplateOverview', type: 'gridfilter' },
      buttons: {
        main: {
          left: [
            { iconClass: 'fund', command: 'newfundserver', text: 'overviewheader.createfundsviaserver', order: 7, editable: false, visible: true, accessGroup: 'fndserverAccessGroup' }
          ]
        }
      }
    },
    TpmrequestIdentificationProfile: {
      module: 'tpmrequest',
      application: 'Acr',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/tpmrequest', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'TpmrequestOverview', type: 'gridfilter' }
    },
    PextemIdentificationProfile: {
      module: 'pextemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/pexme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'PextemplateOverview', type: 'gridfilter' }
    },
    InitialIdentificationProfile: {
      module: 'init',
      application: 'Sys',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/init', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'InitialOverview', type: 'gridfilter' }
    },
    StatisticIdentificationProfile: {
      module: 'statistic',
      application: 'Stc',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/stcanchor', // 查询列表的api地址
      advancedFilter: { overview: 'StatisticOverview', type: 'gridfilter' }
    },
    CalendarIdentificationProfile: {
      module: 'calendar',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/calendar', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CalendarOverview', type: 'gridfilter' }
    },
    ModuleIdentificationProfile: {
      module: 'module',
      application: 'Sys',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/wssmodule', // 查询列表的api地址
      // params: [{ key: 'salesorg', value: 'self:salesorg' },
      //   { key: 'client', value: 'self:client' }
      // ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ModuleOverview', type: 'gridfilter' }
    },
    CurrencyIdentificationProfile: {
      module: 'currency',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/currency', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CurrencyOverview', type: 'gridfilter' }
    },
    ToggleIdentificationProfile: {
      module: 'toggle',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/toggle', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'ToggleOverview', type: 'gridfilter' }
    },
    SalesareaIdentificationProfile: {
      module: 'salesarea',
      application: 'Ent',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/salesarea', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }, { key: 'salesorg', value: 'self:salesorg' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'SalesareaOverview', type: 'gridfilter' }
    },
    ApplicationIdentificationProfile: {
      module: 'app',
      application: 'App',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/application', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ApplicationOverview', type: 'gridfilter' }
    },
    ClientIdentificationProfile: {
      module: 'client',
      application: 'Ent',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/client', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ClientOverview', type: 'gridfilter' }
    },
    PaptemIdentificationProfile: {
      module: 'paptemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/papme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'PaptemplateOverview', type: 'gridfilter' }
    },
    PrdasstemplateIdentificationProfile: {
      module: 'prdassortmenttemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prdassme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PrdassortmenttemplateOverview', type: 'gridfilter' }
    },
    PaymenttemIdentificationProfile: {
      module: 'paymenttemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/payme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'PaymenttemplateOverview', type: 'gridfilter' }
    },
    AllocationmapIdentificationProfile: {
      module: 'allocationmap',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/allocationmap', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'AllocationmapOverview', type: 'gridfilter' }
    },
    ConditiontemplateIdentificationProfile: {
      module: 'conditiontemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prdpriceme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ConditiontemplateOverview', type: 'gridfilter' }
    },
    SalesorgIdentificationProfile: {
      module: 'salesorg',
      application: 'Ent',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/salesorg', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'SalesorgOverview', type: 'gridfilter' }
    },
    SettingIdentificationProfile: {
      module: 'setting',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/setting', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'SettingOverview', type: 'gridfilter' }
    },
    NumberIdentificationProfile: {
      module: 'number',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/number', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'NumberOverview', type: 'gridfilter' }
    },
    UserIdentificationProfile: {
      module: 'user',
      application: 'Usr',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/users', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }, { key: 'client', value: 'self:client' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'UserOverview', type: 'gridfilter' },
      buttons: {
        main: {
          left: [
            { iconClass: 'password', command: 'newpassword', text: 'overviewheader.createuserpassword', order: 7, editable: false, visible: true, accessGroup: 'buttonAccessGroup' }
          ]
        }
      }
    },
    StctemIdentificationProfile: {
      module: 'stctemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/stcme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'StctemplateOverview', type: 'gridfilter' }
    },
    UserloginIdentificationProfile: {
      module: 'userlogin',
      application: 'Usr',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/logins', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Usrloginoverview', type: 'gridfilter' }
    },
    ReportIdentificationProfile: {
      module: 'report',
      application: 'Rpt',
      // 界面上用于显示的列的配置信息
      // this.overviewColumns = this.getMyColumn({ name: 'default', type: 'overview' })
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/checkbook'
      apiurl: '/api/rpt/acc', // 查询列表的api地址
      params: [{ key: 'client', value: 'self:client' }
        // { key: 'responsiblePkey', ref: 'currentUserPkey' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'RptAccPromotion', type: 'gridfilter' },
      buttons: {
        main: {
          left: [
            { iconClass: 'r-download', command: 'download', text: 'overviewheader.download', order: 1, editable: true, visible: true },
            { iconClass: 'r-help', command: 'help', text: '', order: 2, editable: true, visible: true }
          ]
        }
      }
    },
    CustemIdentificationProfile: {
      module: 'customertemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/bpame', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'CustomertemplateOverview', type: 'gridfilter' }
    },
    PrmmetaPrmtemplateIdentificationProfile: {
      module: 'promotiontemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prmme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'Promotiontemplatepromotiontemplate', type: 'gridfilter' }
    },
    PrmmetaPromotionIdentificationProfile: {
      module: 'promotiontemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prmme', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Promotion' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PromotionTemplateOverview', type: 'gridfilter' }
    },
    PrmmetaTacticIdentificationProfile: {
      module: 'promotiontemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prmme', // 查询列表的api地址
      params: [{ key: 'metaType', value: 'Tactic' }], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PromotionTemplateTactic', type: 'gridfilter' }
    },
    CheckbooktemplateIdentificationProfile: {
      module: 'checkbooktemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/cbkme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CbktemplateOverview', type: 'gridfilter' },
      buttons: {
        main: {
          left: [
            { iconClass: 'checkbook', command: 'newcheckbook', text: 'overviewheader.createcheckbooksviaserver', order: 7, editable: false, visible: true, accessGroup: 'cbkServerAccessGroup' }
          ]
        }
      }
    },
    RegionalIdentificationProfile: {
      module: 'regional',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      // url: '/api/tame'
      apiurl: '/api/regionaloptions', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      // overview router name
      advancedFilter: { overview: 'RegionalOverview', type: 'gridfilter' }
    },
    PrdtemplateIdentificationProfile: {
      module: 'prdtemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/prdme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'PrdtemplateOverview', type: 'gridfilter' }
    },
    controlscriptIdentificationProfile: {
      module: 'controlscript',
      application: 'Sys',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/wsscs', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'ControlscriptOverview', type: 'gridfilter' }
    },
    UsertemplateIdentificationProfile: {
      module: 'usertemplate',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/usrme', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'UsertemplateOverview', type: 'gridfilter' }
    },
    CronscheduleIdentificationProfile: {
      module: 'cronschedule',
      application: 'Sys',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/wsscron', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CronscheduleOverview', type: 'gridfilter' }
    },
    WorkflowIdentificationProfile: {
      module: 'workflow',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/workflow', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'WorkflowOverview', type: 'gridfilter' }
    },
    CfgIdentificationProfile: {
      module: 'cfg',
      application: 'Mtn',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/cfg', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'CfgdataOverview', type: 'gridfilter' }
    },
    AttachmentIdentificationProfile: {
      module: 'attachment',
      application: 'Att',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/attachment', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'AttOverview', type: 'gridfilter' }
    },
    RolesetIdentificationProfile: {
      module: 'roleset',
      application: 'Rol',
      // 界面上用于显示的列的配置信息
      column: { type: 'grid', columnIdentification: { name: 'default', type: 'overview' }},
      apiurl: '/api/roleset', // 查询列表的api地址
      params: [{ key: 'salesorg', value: 'self:salesorg' },
        { key: 'client', value: 'self:client' }
      ], // listQuery需要传入的参数，是否需要待进一步考虑
      advancedFilter: { overview: 'RolesetOverview', type: 'gridfilter' }
    }
  },
  detailContextConfig: {
    promotionDetailContext: {
      module: 'promotion',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Prm',
      // 配置打开详情的路由地址
      routeName: 'EditPromotion',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-upload', command: 'upload', text: 'overviewheader.upload', order: 2, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-start', command: 'kickoff', text: 'overviewheader.kickoff', order: 5, editable: false, visible: true, accessGroup: 'kickoffAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: true, visible: true, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        product: [{ iconClass: 'r-extract', command: 'myExtractProduct', text: 'Extract Group', order: 1, editable: true, visible: true, accessGroup: 'prdExtractAccessRight' },
          { iconClass: 'r-add', command: 'myInsertProduct', text: 'Add', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteProduct', text: 'Delete', order: 3, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        tactic: [{ iconClass: 'r-add', command: 'myInsertTactic', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTactic', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'businesspartner', command: 'myCalculateTactic', text: 'Calculate', order: 3, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'close', command: 'myCloseTactic', text: 'Close Tactic', order: 4, editable: true, visible: true, accessGroup: 'closeTacticAccessGroup' },
          { iconClass: 'plus', command: 'myCreateTransaction', text: 'Create Transaction', order: 5, editable: false, visible: false, accessGroup: 'createTransactionAccessGroup' },
          { iconClass: 'plus', command: 'myCreatePayment', text: 'Create Payment', order: 6, editable: false, visible: false, accessGroup: 'createPaymentAccessGroup' }
        ],
        tacticfund: [{ iconClass: 'r-add', command: 'myInsertTacticFund', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'tacticFundAccessRight' },
          { iconClass: 'r-delete', command: 'myDeleteTacticFund', text: 'Delete', order: 2, editable: false, visible: false, accessGroup: 'tacticFundAccessRight' }
        ],
        attachment: [{ iconClass: 'r-add', command: 'myInsertAttachment', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'eye', command: 'myPreviewAttachment', text: 'Preview', order: 2, editable: false, visible: false, accessGroup: 'readerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteAttachment', text: 'Delete', order: 3, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ],
        segcondition: [{ iconClass: 'r-add', command: 'myInsertCondition', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-edit', command: 'myEditCondition', text: 'Delete', order: 2, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteCondition', text: 'Delete', order: 3, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ],
        segresult: [{ iconClass: 'businesspartner', command: 'myCreateSegmentation', text: 'Create Segmentation', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ],
        segstore: [{ iconClass: 'r-add', command: 'myInsertStore', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteStore', text: 'Delete', order: 2, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ],
        segselected: [{ iconClass: 'businesspartner', command: 'myCreateSelected', text: 'Create Selected Stores', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    tacticDetailContext: {
      module: 'promotion',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Tac',
      routeName: 'EditPromotion',
      uiGroup: {
        tactic: {} // 标准的tactic
      }
    },
    programDetailContext: {
      module: 'promotion',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Prg',
      routeName: 'EditPromotion',
      uiGroup: {
        program: {} // 标准的program
      }
    },
    ltaDetailContext: {
      module: 'promotion',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Lta',
      routeName: 'EditPromotion',
      uiGroup: {
        lta: {} // 标准的lta
      }
    },
    eventDetailContext: {
      module: 'event',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Eve',
      routeName: 'EditEvent',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    checkbookDetailContext: {
      module: 'checkbook',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Cbk',
      // 配置打开详情的路由地址
      routeName: 'EditCheckbook',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        status: [{ iconClass: 'r-add', command: 'myInsertCbkStatus', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteCbkStatus', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    paymentDetailContext: {
      module: 'payment',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Pay',
      // 配置打开详情的路由地址
      routeName: 'EditPayment',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: true, visible: true, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        prmtactics: [{ iconClass: 'eye', command: 'myAllocate', text: 'Allocate', order: 1, editable: true, visible: true, accessGroup: 'allocateAccessRight' },
          { iconClass: 'r-add', command: 'myInsertTactics', text: 'Add', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTactics', text: 'Delete', order: 3, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        fund: [{ iconClass: 'r-add', command: 'myInsertFunds', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'addFundAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteFunds', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        attachment: [{ iconClass: 'r-add', command: 'myInsertAttachment', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'eye', command: 'myPreviewAttachment', text: 'Preview', order: 2, editable: false, visible: false, accessGroup: 'readerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteAttachment', text: 'Delete', order: 3, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ],
        stores: [{ iconClass: 'r-add', command: 'myInsertStores', text: 'Add', order: 1, editable: false, visible: false, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteStores', text: 'Delete', order: 3, editable: false, visible: false, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    papDetailContext: {
      module: 'pap',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Pap',
      // 配置打开详情的路由地址
      routeName: 'EditPap',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: true, visible: true, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
        // store: [{ iconClass: 'r-export', command: 'myExportStores', text: 'Export', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }]
      }
    },
    fndtatemplateDetailContext: {
      module: 'fndtatemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditFndtatemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        roles: [{ iconClass: 'r-add', command: 'myInsertRoles', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRoles', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    periodDetailContext: {
      module: 'period',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPeriod',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    orgunitDetailContext: {
      module: 'orgunit',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Org',
      // 配置打开详情的路由地址
      routeName: 'EditOrgUnit',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        management: [{ iconClass: 'r-add', command: 'myInsertManager', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteManager', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        customer: [{ iconClass: 'r-add', command: 'myInsertCustomer', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteCustomer', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        parent: [{ iconClass: 'r-add', command: 'myInsertParent', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteParent', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        status: [{ iconClass: 'r-add', command: 'myInsertStatus', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteStatus', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    productDetailContext: {
      module: 'product',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Prd',
      // 配置打开详情的路由地址
      routeName: 'EditProduct',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        management: [{ iconClass: 'r-add', command: 'myInsertPrdManage', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePrdManage', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        condition: [{ iconClass: 'r-add', command: 'myInsertPrdPrice', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePrdPrice', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        hierarchy: [{ iconClass: 'r-add', command: 'myInsertPrdRel', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePrdRel', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        status: [{ iconClass: 'r-add', command: 'myInsertPrdState', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePrdState', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    productgroupDetailContext: {
      module: 'product',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Prd',
      routeName: 'EditProduct',
      uiGroup: {
        productgroup: {}
      }
    },
    fundDetailContext: {
      module: 'fund',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Fnd',
      // 配置打开详情的路由地址
      routeName: 'EditFund',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    transactionDetailContext: {
      module: 'transaction',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Tra',
      // 配置打开详情的路由地址
      routeName: 'EditTransaction',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        funds: [{ iconClass: 'r-add', command: 'myInsertTaFunds', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTaFunds', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }],
        targetfunds: [{ iconClass: 'r-add', command: 'myInsertTargetFunds', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTargetFunds', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }]
      }
    },
    prdsetDetailContext: {
      module: 'productset',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Prd',
      // 配置打开详情的路由地址
      routeName: 'EditProductset',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        products: [{ iconClass: 'r-add', command: 'myInsertProduct', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteProduct', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    pexDetailContext: {
      module: 'pex',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Pex',
      // 配置打开详情的路由地址
      routeName: 'EditPex',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: true, visible: true, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        store: [{ iconClass: 'r-add', command: 'myInsertStores', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteStores', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-import', command: 'myImportStores', text: 'Import', order: 3, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-export', command: 'myDownloadStores', text: 'Export', order: 4, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-submit', command: 'mySubmitStores', text: 'Submit', order: 5, editable: false, visible: false, accessGroup: 'submitAccessGroup' }
        ]
      }
    },
    customerDetailContext: {
      module: 'customer',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Cus',
      // 配置打开详情的路由地址
      routeName: 'EditCustomer',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-upload', command: 'upload', text: 'overviewheader.upload', order: 2, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 5, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 6, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 7, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        orgunit: [{ iconClass: 'r-add', command: 'myInsertOrgunit', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteOrgunit', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        management: [{ iconClass: 'r-add', command: 'myInsertManager', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteManager', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        role: [{ iconClass: 'r-add', command: 'myInsertRole', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRole', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        parent: [{ iconClass: 'r-add', command: 'myInsertParent', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteParent', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        address: [{ iconClass: 'r-add', command: 'myInsertAddress', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteAddress', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        distributor: [{ iconClass: 'r-add', command: 'myInsertDistributor', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteDistributor', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        contact: [{ iconClass: 'r-add', command: 'myInsertContact', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteContact', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    roleDetailContext: {
      module: 'role',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Rol',
      // 配置打开详情的路由地址
      routeName: 'EditRole',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        userroles: [{ iconClass: 'r-add', command: 'myInsertUserRole', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteUserRole', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    divisionDetailContext: {
      module: 'division',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Ent',
      // 配置打开详情的路由地址
      routeName: 'EditDivision',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    fundtemDetailContext: {
      module: 'fundtemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditFndtemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    tpmrequestDetailContext: {
      module: 'tpmrequest',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Acr',
      // 配置打开详情的路由地址
      routeName: 'EditTpmRequest',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'tree', command: 'createclient', text: 'overviewheader.createclient', order: 4, editable: false, visible: false, accessGroup: 'clientbtnGroup' },
          { iconClass: 'tree', command: 'createsalesorg', text: 'overviewheader.createsalesorg', order: 5, editable: false, visible: false, accessGroup: 'salesorgbtnGroup' },
          { iconClass: 'tree', command: 'createdivision', text: 'overviewheader.createdivision', order: 6, editable: false, visible: false, accessGroup: 'divisionbtnGroup' },
          { iconClass: 'tree', command: 'createsalesarea', text: 'overviewheader.createsalesarea', order: 7, editable: false, visible: false, accessGroup: 'salesareabtnGroup' },
          { iconClass: 'tree', command: 'createinitial', text: 'overviewheader.createinitial', order: 8, editable: false, visible: false, accessGroup: 'initialbtnGroup' },
          { iconClass: 'tree', command: 'initialclient', text: 'overviewheader.initialclient', order: 9, editable: false, visible: false, accessGroup: 'initialclientbtnGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 10, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 11, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 12, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    pextemDetailContext: {
      module: 'pextemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPextemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    initialDetailContext: {
      module: 'initial',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Sys',
      // 配置打开详情的路由地址
      routeName: 'EditInitial',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'tree', command: 'initial', text: 'overviewheader.initialclient', order: 4, editable: false, visible: false, accessGroup: 'initialGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 5, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 6, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 7, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    statisticDetailContext: {
      module: 'statistic',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Stc',
      // 配置打开详情的路由地址
      routeName: 'EditStatistic',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        weeks: [{ iconClass: 'r-add', command: 'myInsertWeek', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteWeek', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
          // { icon: 'el-icon-printer', command: 'myPrintWeek', text: 'Delete', order: 3, editable, visible }
          // { icon: 'el-icon-download', command: 'myExportWeek', text: '', order: 4, editable, visible }
        ],
        month: [{ iconClass: 'r-add', command: 'myInsertMonth', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteMonth', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    calendarDetailContext: {
      module: 'calendar',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditCalendar',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        items: [{ iconClass: 'r-add', command: 'myInsertItems', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteItems', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    moduleDetailContext: {
      module: 'module',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Sys',
      // 配置打开详情的路由地址
      routeName: 'EditModule',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    currencyDetailContext: {
      module: 'currency',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditCurrency',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        conversions: [{ iconClass: 'r-add', command: 'myInsertConversions', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteConversions', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    toggleDetailContext: {
      module: 'toggle',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditToggle',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        items: [{ iconClass: 'r-add', command: 'myInsertItems', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteItems', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        itexts: [{ iconClass: 'r-add', command: 'myInsertItemDesc', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteItemDesc', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    salesareaDetailContext: {
      module: 'salesarea',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Ent',
      // 配置打开详情的路由地址
      routeName: 'EditSalesarea',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    applicationDetailContext: {
      module: 'application',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'App',
      // 配置打开详情的路由地址
      routeName: 'EditApplication',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    clientDetailContext: {
      module: 'client',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Ent',
      // 配置打开详情的路由地址
      routeName: 'EditClient',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    paptemDetailContext: {
      module: 'paptemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPaptemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    prdasstemplateDetailContext: {
      module: 'prdassortmenttemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPrdassortmenttemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    paymenttemDetailContext: {
      module: 'paymenttemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPaymenttemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        roles: [{ iconClass: 'r-add', command: 'myInsertRoles', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRoles', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        tames: [{ iconClass: 'r-add', command: 'myInsertTaTemplate', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTaTemplate', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    allocationmapDetailContext: {
      module: 'allocationmap',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditAllocationmap',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    conditiontemplateDetailContext: {
      module: 'conditiontemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditConditiontemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    salesorgDetailContext: {
      module: 'salesorg',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Ent',
      // 配置打开详情的路由地址
      routeName: 'EditSalesorg',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ]
      }
    },
    settingDetailContext: {
      module: 'setting',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditSetting',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
        // values: [{ iconClass: 'r-add', command: 'myInsertValues', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
        // { iconClass: 'r-delete', command: 'myDeleteValues', text: 'Delete', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' }]
      }
    },
    numberDetailContext: {
      module: 'number',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditNumber',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        segments: [{ iconClass: 'r-add', command: 'myInsertSegments', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteSegments', text: 'Delete', order: 2, editable: false, visible: true, accessGroup: 'plannerAccessGroup' }]
      }
    },
    userDetailContext: {
      module: 'user',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Usr',
      // 配置打开详情的路由地址
      routeName: 'EditUser',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }
        ],
        salesarea: [{ iconClass: 'r-add', command: 'myInsertSalesArea', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteSalesArea', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        userroles: [{ iconClass: 'r-add', command: 'myInsertRoles', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRoles', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        userrolesets: [{ iconClass: 'r-add', command: 'myInsertUserRoleSets', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteUserRoleSets', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        parent: [{ iconClass: 'r-add', command: 'myInsertParent', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteParent', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        orguser: [{ iconClass: 'r-add', command: 'myInsertOrgunit', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteOrgunit', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        mgmtUser: [{ iconClass: 'r-add', command: 'myInsertPrdmgt', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'planner2AccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePrdmgt', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'planner2AccessGroup' }
        ],
        login: [],
        notification: []
      }
    },
    stctemDetailContext: {
      module: 'stctemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditStctemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    profileDetailContext: {
      module: 'user',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditProfile',
      buttons: {
        main: [{ iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 1, editable: true, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'password', command: 'newpassword', text: 'overviewheader.createuserpassword', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: true, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 5, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    custemDetailContext: {
      module: 'customertemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditCustomertemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    promotiontemplateDetailContext: {
      module: 'promotiontemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPromotiontemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        roles: [{ iconClass: 'r-add', command: 'myInsertRoles', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRoles', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        compenmodels: [{ iconClass: 'r-add', command: 'myInsertModels', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteModels', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        paymethods: [{ iconClass: 'r-add', command: 'myInsertPayment', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeletePayment', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        deparents: [{ iconClass: 'r-add', command: 'myInsertParent', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteParent', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        dechilds: [{ iconClass: 'r-add', command: 'myInsertChild', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteChild', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    checkbooktemplateDetailContext: {
      module: 'checkbooktemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditCbktemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    regionalDetailContext: {
      module: 'regional',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditRegional',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 4, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 6, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 7, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 8, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
      // const url = `/${applicationMapping[this.application]}/edit/${pkey}?__f_=${currentRoutePath}`
    },
    prdtemplateDetailContext: {
      module: 'prdtemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditPrdtemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    controlscriptDetailContext: {
      module: 'controlscript',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Sys',
      // 配置打开详情的路由地址
      routeName: 'EditControlscript',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        entries: [{ iconClass: 'r-add', command: 'myInsertEntry', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteEntry', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    usertemplateDetailContext: {
      module: 'usertemplate',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditUsertemplate',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    cronscheduleDetailContext: {
      module: 'cronschedule',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Sys',
      // 配置打开详情的路由地址
      routeName: 'EditCronschedule',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    workflowDetailContext: {
      module: 'workflow',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditWorkflow',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        status: [{ iconClass: 'r-add', command: 'myInsertStatus', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteStatus', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        trans: [{ iconClass: 'r-add', command: 'myInsertTransaction', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteTransaction', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    cfgDetailContext: {
      module: 'cfg',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Mtn',
      // 配置打开详情的路由地址
      routeName: 'EditCfgdata',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        field: [{ iconClass: 'r-add', command: 'myInsertField', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteField', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    },
    attachmentDetailContext: {
      module: 'attachment',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Att',
      // 配置打开详情的路由地址
      routeName: 'EditAtt',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }]
      }
    },
    rolesetDetailContext: {
      module: 'roleset',
      detailName: 'defaultDetail', // 确定哪个detail的tab配置
      wizardName: 'defaultWizard', // 确定哪个detail的tab配置
      application: 'Rol',
      // 配置打开详情的路由地址
      routeName: 'EditRoleset',
      buttons: {
        main: [{ iconClass: 'r-new', command: 'new', text: 'overviewheader.new', order: 1, editable: true, visible: true, accessGroup: 'createAccessGroup' },
          { iconClass: 'r-save', command: 'save', text: 'overviewheader.save', order: 2, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-saveback', command: 'saveback', text: 'overviewheader.saveback', order: 3, editable: false, visible: true, accessGroup: 'saveAccessGroup' },
          { iconClass: 'r-cancel', command: 'cancel', text: 'overviewheader.cancel', order: 4, editable: true, visible: true, accessGroup: 'cancelAccessGroup' },
          { iconClass: 'r-delete', command: 'delete', text: 'overviewheader.delete', order: 5, editable: false, visible: false, accessGroup: 'deleteAccessGroup' },
          { iconClass: 'r-help', command: 'help', text: '', order: 6, editable: true, visible: true, accessGroup: 'helpAccessGroup' }],
        userroles: [{ iconClass: 'r-add', command: 'myInsertRoles', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteRoles', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ],
        user: [{ iconClass: 'r-add', command: 'myInsertUser', text: 'Add', order: 1, editable: true, visible: true, accessGroup: 'plannerAccessGroup' },
          { iconClass: 'r-delete', command: 'myDeleteUser', text: 'Delete', order: 2, editable: true, visible: true, accessGroup: 'plannerAccessGroup' }
        ]
      }
    }
  },
  uiGroupConfig: {
    promotion: {
      // Event
      // Program
      // Promotion
      // Tactic
      // Long-term Agreement
      //
      // 按照部门，可由这3个部门创建Promotion：Marketing, Trade Marketing, Key Account Management
      // 1. Marketing：一般创建Event，或Program，都是Promotion的时间段或高层计划，non-executable promotion
      // 2. Trade Marketing：
      // 3. Key Account Management：
      // Regional Promotion：区域性质的促销活动，一般也是高层的promotion
      // Consumer Promotion：一般由Trade Marketing创建， TV， Radio， newspaper Ads，reduced consumer price etc.
      // Customer Promotion：为了提高销量，一般由KAM依据计划Account Plan/Program创建
      // Tailer-made Promotion：一般由KAM为了支持特定的需求而创建的Promotion。

      default: {
        // 配置需要显示的tab
        tabs: ['main', 'tactic', 'segmentation', 'attachment', 'approval',
          'accruals', 'regionallocation', 'areaallocation', 'storeallocation', 'distributorallocation', 'pex1gr', 'pex2gr'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        tactic: {
          name: 'tactic',
          text: 'prmdetailtab.tactic',
          slot: 'tactic',
          condition: { // TODO 配置额外需要显示该tab的条件, 目前方法仅支持meta表中配置的数据的值或列表值的过滤，且为and关系，如果需要or关系或其他表的数据的判断，需要扩展displayTabs 计算属性的逻辑
            meta: { useTactic: true }
          },
          content: {}
        },
        segmentation: {
          name: 'segmentation',
          text: 'prmdetailtab.segmentation',
          slot: 'segmentation',
          condition: {
            meta: { useSegmentation: true, allocationLevel: ['Distributor', 'Store', 'DistributorOrStore'] }
          },
          content: {}
        },
        attachment: {
          name: 'attachment',
          text: 'prmdetailtab.attachment',
          slot: 'attachment',
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'prmdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        },
        accruals: {
          name: 'accruals',
          text: 'prmdetailtab.accruals',
          slot: 'accruals',
          condition: {
            meta: { needAccrual: true },
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        },
        regionallocation: {
          name: 'regionallocation',
          text: 'prmdetailtab.regionallocation',
          slot: 'regionallocation',
          // Region->Area->Store
          // Region->Store
          // Area->Store
          // Store
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Region->' }}
          },
          content: {}
        },
        areaallocation: {
          name: 'areaallocation',
          text: 'prmdetailtab.areaallocation',
          slot: 'areaallocation',
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Area->' }}
          },
          content: {}
        },
        storeallocation: {
          name: 'storeallocation',
          text: 'prmdetailtab.storeallocation',
          slot: 'storeallocation',
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Store' }}
          },
          content: {}
        },
        distributorallocation: {
          name: 'distributorallocation',
          text: 'prmdetailtab.distributorallocation',
          slot: 'distributorallocation',
          condition: {
            main: { allocationLevel: 'Distributor', executable: true }
          },
          content: {}
        },
        pex1gr: {
          name: 'pex1gr',
          text: 'prmdetailtab.pex1gr',
          slot: 'pex1gr',
          condition: {
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        },
        pex2gr: {
          name: 'pex2gr',
          text: 'prmdetailtab.pex2gr',
          slot: 'pex2gr',
          condition: {
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        }
      }, // 修剪的标准promotion，TailerMadePromotion
      promotion: {
        // 配置需要显示的tab
        tabs: ['main', 'tactic', 'segmentation', 'attachment', 'approval',
          'accruals', 'regionallocation', 'areaallocation', 'storeallocation', 'distributorallocation', 'pex1gr', 'pex2gr'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        tactic: {
          name: 'tactic',
          text: 'prmdetailtab.tactic',
          slot: 'tactic',
          condition: { // TODO 配置额外需要显示该tab的条件, 目前方法仅支持meta表中配置的数据的值或列表值的过滤，且为and关系，如果需要or关系或其他表的数据的判断，需要扩展displayTabs 计算属性的逻辑
            meta: { useTactic: true }
          },
          content: {}
        },
        segmentation: {
          name: 'segmentation',
          text: 'prmdetailtab.segmentation',
          slot: 'segmentation',
          condition: {
            meta: { useSegmentation: true, allocationLevel: ['Distributor', 'Store', 'DistributorOrStore'] }
          },
          content: {}
        },
        attachment: {
          name: 'attachment',
          text: 'prmdetailtab.attachment',
          slot: 'attachment',
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'prmdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        },
        accruals: {
          name: 'accruals',
          text: 'prmdetailtab.accruals',
          slot: 'accruals',
          condition: {
            meta: { needAccrual: true },
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        },
        regionallocation: {
          name: 'regionallocation',
          text: 'prmdetailtab.regionallocation',
          slot: 'regionallocation',
          // Region->Area->Store
          // Region->Store
          // Area->Store
          // Store
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Region->' }}
          },
          content: {}
        },
        areaallocation: {
          name: 'areaallocation',
          text: 'prmdetailtab.areaallocation',
          slot: 'areaallocation',
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Area->' }}
          },
          content: {}
        },
        storeallocation: {
          name: 'storeallocation',
          text: 'prmdetailtab.storeallocation',
          slot: 'storeallocation',
          condition: {
            main: { phase: 'Committed', executable: true, allocationLevel: 'Store', allocationStyle: { 'op.like': 'Store' }}
          },
          content: {}
        },
        distributorallocation: {
          name: 'distributorallocation',
          text: 'prmdetailtab.distributorallocation',
          slot: 'distributorallocation',
          condition: {
            main: { allocationLevel: 'Distributor', executable: true }
          },
          content: {}
        },
        pex1gr: {
          name: 'pex1gr',
          text: 'prmdetailtab.pex1gr',
          slot: 'pex1gr',
          condition: {
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        },
        pex2gr: {
          name: 'pex2gr',
          text: 'prmdetailtab.pex2gr',
          slot: 'pex2gr',
          condition: {
            main: { phase: 'Committed', executable: true }
          },
          content: {}
        }
      }, // 标准的可执行promotion，也可以是子promotion, 默认和default相同
      parent: {
        // 配置需要显示的tab
        tabs: ['main', 'childpromotion', 'tactic', 'segmentation', 'attachment', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        childpromotion: {
          name: 'childpromotion',
          text: 'prmdetailtab.childpromotion',
          slot: 'childpromotion',
          content: {}
        },
        tactic: {
          name: 'tactic',
          text: 'prmdetailtab.tactic',
          slot: 'tactic',
          condition: { // TODO 配置额外需要显示该tab的条件, 目前方法仅支持meta表中配置的数据的值或列表值的过滤，且为and关系，如果需要or关系或其他表的数据的判断，需要扩展displayTabs 计算属性的逻辑
            meta: { useTactic: true }
          },
          content: {}
        },
        segmentation: {
          name: 'segmentation',
          text: 'prmdetailtab.segmentation',
          slot: 'segmentation',
          condition: {
            meta: { useSegmentation: true, allocationLevel: ['Distributor', 'Store', 'DistributorOrStore'] }
          },
          content: {}
        },
        attachment: {
          name: 'attachment',
          text: 'prmdetailtab.attachment',
          slot: 'attachment',
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'prmdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        }
      }, // 作为母活动的promotion，没有可执行的任务，但可以查看子活动清单
      // tactic: {}, // 标准的tactic
      program: {
        // 配置需要显示的tab, main, child promotion, stores, attachment, approval
        tabs: ['main', 'childpromotion', 'segmentation', 'attachment', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        childpromotion: {
          name: 'childpromotion',
          text: 'prmdetailtab.childpromotion',
          slot: 'childpromotion',
          content: {}
        },
        segmentation: {
          name: 'segmentation',
          text: 'prmdetailtab.segmentation',
          slot: 'segmentation',
          condition: {
            meta: { useSegmentation: true, allocationLevel: ['Distributor', 'Store', 'DistributorOrStore'] }
          },
          content: {}
        },
        attachment: {
          name: 'attachment',
          text: 'prmdetailtab.attachment',
          slot: 'attachment',
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'prmdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        }
      }, // 标准的program
      // lta: {}
      // 标准的lta，用于返利类型的活动的主活动，对于每一期的费用，可以通过每一期一个活动然后付款来处理，也可以直接针对本LTA进行付款处理，作为两个选项
      // 需要针对不同的经销商分别建立不同的LTA，即LTA的anchor为经销商（如果是Key Account，则需要建立一个同名的经销商数据，一般均是由经销商从制造商处进货分销）
      // 返利一般分为三种类型：月度返利、季度返利、年度返利。
      // 每种类型会针对不同产品或系列产品有不同的返利标准，按照销量或按照金额等计算。
      // 每次返利均要进行预提，故采用选项1为推荐方案。如果不需要预提推荐选项2，如果客户选择选项2且仍然需要预提需考虑定制化方案。
      // LTA主活动输入要求：1.基本信息，2.Anchor（经销商），3.返利类型（月、季、年），4.起止日期（1年或以上）
      // 5.产品（参与产品或系列），
      // 6.返利计算模型：
      //  不考虑某个产品，只考虑总销售额：总销量达到XXXX元，返利YYYY元。
      //    6.1.按照总销售额固定返利，并可配置是否设置上限及上限，即在合同期间总销售额达到一定金额后，按照固定比例计算返利，若配置了上限，计算结果超过上限按照上限处理，否则按照计算金额处理。
      //    6.2.按照总销售额阶梯返利，并可配置是否设置上限及上限，即在合同期间总销售额达到一定金额后，按照配置阶梯计算返利，若配置了上限，计算结果超过上限按照上限处理，否则按照计算金额处理。
      //    6.3.按照总销售额达标固定返利，即在合同期间总销售额达到要求金额后，按照固定金额返利。
      //    6.4.按照总销售额设置阶梯达标要求并按照阶梯固定返利，即在合同期间总销售额达到某个阶梯要求金额后，按照阶梯设置的固定金额返利。
      //  考虑某些产品
      //    6.5.某些产品的总销售额达到。。。。。。
      // 选项1:通过每期一个活动来处理
      // 选项2:
      // 本方案中的返利不考虑中间对返利活动的修改，仅考虑返利合同已确定，并按照该合同建立活动的情况，对于后期对该LTA的修改，按照新返利合同处理修改部分（新建LTA即可）
      // 如果某个经销商的返利活动（如年返）已经进行了几个月了，单返利标准修改了，如修改了返利比例，或修改了产品等，如何处理？
      // a，新建返利活动对原来的返利活动修改，若修改了返利比例，加上原来3%，现改为5%，则新活动设置为2%，则合起来为5%。
      //    若修改了产品，则新活动选择添加的产品即可，每个LTA的总销售额是根据LTA选择的产品累加出来的（如提供的销量数据没有产品的情况则另说）
      // b，取消原来的活动（复杂，需要处理金额或撤销付款等），新建返利活动，并将过去的返利进行调整。
    },
    event: {
      default: {
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    }, // 标准的event
    checkbook: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'funds', 'promotionfunds', 'paymentfunds', 'passivefunds'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'cbkdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        funds: {
          name: 'funds',
          text: 'cbkdetailtab.funds',
          slot: 'funds',
          content: {}
        },
        promotionfunds: {
          name: 'promotionfunds',
          text: 'cbkdetailtab.promotionfunds',
          slot: 'promotionfunds',
          content: {}
        },
        paymentfunds: {
          name: 'paymentfunds',
          text: 'cbkdetailtab.paymentfunds',
          slot: 'paymentfunds',
          content: {}
        },
        passivefunds: {
          name: 'passivefunds',
          text: 'cbkdetailtab.passivefunds',
          slot: 'passivefunds',
          condition: {
            meta: { hierarchyType: 'headquarter' }
          },
          content: {}
        }
      }
    },
    payment: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'stores', 'attachment', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'paymentdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        stores: {
          name: 'stores',
          text: 'paymentdetailtab.stores',
          slot: 'stores',
          content: {}
        },
        attachment: {
          name: 'attachment',
          text: 'paymentdetailtab.attachment',
          slot: 'attachment',
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'paymentdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        }
      }
    },
    fndtatemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    period: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    orgunit: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'management', 'customer', 'hierarchy', 'status'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        management: {
          name: 'management',
          text: 'orgunitdetailtab.management',
          slot: 'management',
          content: {} // 待扩展
        },
        customer: {
          name: 'customer',
          text: 'orgunitdetailtab.customer',
          slot: 'customer',
          content: {} // 待扩展
        },
        hierarchy: {
          name: 'hierarchy',
          text: 'orgunitdetailtab.hierarchy',
          slot: 'hierarchy',
          content: {} // 待扩展
        },
        status: {
          name: 'status',
          text: 'orgunitdetailtab.status',
          slot: 'status',
          content: {} // 待扩展
        }
      }
    },
    product: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'management', 'condition', 'hierarchy', 'status'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prddetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        management: {
          name: 'management',
          text: 'prddetailtab.management',
          slot: 'management',
          content: {} // 待扩展
        },
        condition: {
          name: 'condition',
          text: 'prddetailtab.condition',
          slot: 'condition',
          content: {} // 待扩展
        },
        hierarchy: {
          name: 'hierarchy',
          text: 'prddetailtab.hierarchy',
          slot: 'hierarchy',
          content: {} // 待扩展
        },
        status: {
          name: 'status',
          text: 'prddetailtab.status',
          slot: 'status',
          content: {} // 待扩展
        }
      }
    },
    fund: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        approval: {
          name: 'approval',
          text: 'fnddetailtab.approvalhistory',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        }
      }
    },
    transaction: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'promotion', 'fundingsources', 'targetfund', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tadetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        promotion: {
          name: 'promotion',
          text: 'tadetailtab.promotion',
          slot: 'promotion',
          condition: {
            meta: { taType: ['Payment', 'Withdrawal'] }
          },
          content: {}
        },
        fundingsources: {
          name: 'fundingsources',
          text: 'tadetailtab.fundingsources',
          slot: 'fundingsources',
          condition: {
            meta: { taType: ['Withdrawal', 'Promotion', 'Payment'] }
          },
          content: {}
        },
        targetfund: {
          name: 'targetfund',
          text: 'tadetailtab.targetfund',
          slot: 'targetfund',
          condition: {
            meta: { taType: ['Transfer', 'Allocation', 'CancelledPayment'] }
          },
          content: {}
        },
        approval: {
          name: 'approval',
          text: 'tadetailtab.approvalhistory',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        }
      }
    },
    productset: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prdsetdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    pex: {
      default: {
        // 配置需要显示的tab
        tabs: ['region', 'area', 'distributor', 'stores', 'firstgr', 'secondgr', 'main', 'approval'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'prmdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        approval: {
          name: 'approval',
          text: 'pexdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        },
        region: {
          name: 'region',
          text: 'pexdetailtab.region',
          slot: 'region',
          condition: {
            meta: { metaType: 'Region' }
          },
          content: {}
        },
        area: {
          name: 'area',
          text: 'pexdetailtab.area',
          slot: 'area',
          condition: {
            meta: { metaType: 'Area' }
          },
          content: {}
        },
        stores: {
          name: 'stores',
          text: 'pexdetailtab.store',
          slot: 'stores',
          condition: {
            meta: { metaType: 'Store' }
          },
          content: {}
        },
        distributor: {
          name: 'distributor',
          text: 'pexdetailtab.distributor',
          slot: 'distributor',
          condition: {
            meta: { metaType: 'Distributor' }
          },
          content: {}
        },
        firstgr: {
          name: 'firstgr',
          text: 'pexdetailtab.firstgr',
          slot: 'firstgr',
          condition: {
            meta: { metaType: '1GR' }
          },
          content: {}
        },
        secondgr: {
          name: 'secondgr',
          text: 'pexdetailtab.secondgr',
          slot: 'secondgr',
          condition: {
            meta: { metaType: '2GR' }
          },
          content: {}
        }
      }
    },
    pap: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'approval', 'firstgr', 'secondgr'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'papdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        approval: {
          name: 'approval',
          text: 'papdetailtab.approval',
          slot: 'approval',
          condition: {
            meta: { useWorkflow: true }
          },
          content: {}
        },
        firstgr: {
          name: 'firstgr',
          text: 'pexdetailtab.firstgr',
          slot: 'firstgr',
          condition: {
            meta: { metaType: '1GRApproval' }
          },
          content: {}
        },
        secondgr: {
          name: 'secondgr',
          text: 'pexdetailtab.secgr',
          slot: 'secondgr',
          condition: {
            meta: { metaType: '2GRApproval' }
          },
          content: {}
        }
      }
    },
    customer: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'orgunit', 'management', 'roles', 'relationships', 'address', 'distributor', 'contact'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'customerdetailtab.main',
          slot: 'main',
          content: {} // 待扩展
        },
        orgunit: {
          name: 'orgunit',
          text: 'customerdetailtab.orgunit',
          slot: 'orgunit',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        management: {
          name: 'management',
          text: 'customerdetailtab.management',
          slot: 'management',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        roles: {
          name: 'roles',
          text: 'customerdetailtab.roles',
          slot: 'roles',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        relationships: {
          name: 'relationships',
          text: 'customerdetailtab.relationship',
          slot: 'relationships',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        address: {
          name: 'address',
          text: 'customerdetailtab.address',
          slot: 'address',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        distributor: {
          name: 'distributor',
          text: 'customerdetailtab.distributor',
          slot: 'distributor',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        },
        contact: {
          name: 'contact',
          text: 'customerdetailtab.contact',
          slot: 'contact',
          condition: {
            meta: { bpaType: ['C', 'POS'] }
          },
          content: {} // 待扩展
        }
      }
    },
    role: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    division: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    fundtemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    tpmrequest: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    pextemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    initial: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    statistic: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'monthlydata'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        monthlydata: {
          name: 'monthlydata',
          text: 'stcdetailtab.monthlydata',
          slot: 'monthlydata',
          content: {} // 待扩展
        }
      }
    },
    calendar: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    module: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    currency: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    toggle: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    salesarea: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    application: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    client: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    paptemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    prdassortmenttemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    paymenttemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'settings'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        settings: {
          name: 'settings',
          text: 'tabname.settings',
          slot: 'settings',
          content: {} // 待扩展
        }
      }
    },
    allocationmap: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    conditiontemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    salesorg: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    setting: {
      default: {
        tabs: ['main'],
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    number: {
      default: {
        tabs: ['main'],
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    user: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'salesarea', 'roles', 'hierarchy', 'orgunits', 'prdmanagement', 'login', 'notifications'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        salesarea: {
          name: 'salesarea',
          text: 'userdetailtab.salesarea',
          slot: 'salesarea',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        roles: {
          name: 'roles',
          text: 'userdetailtab.roles',
          slot: 'roles',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        hierarchy: {
          name: 'hierarchy',
          text: 'userdetailtab.hierarchy',
          slot: 'hierarchy',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        orgunits: {
          name: 'orgunits',
          text: 'userdetailtab.orgunits',
          slot: 'orgunits',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        prdmanagement: {
          name: 'prdmanagement',
          text: 'userdetailtab.prdmanagement',
          slot: 'prdmanagement',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        login: {
          name: 'login',
          text: 'userdetailtab.login',
          slot: 'login',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        },
        notifications: {
          name: 'notifications',
          text: 'userdetailtab.notifications',
          slot: 'notifications',
          condition: {
            self: { routename: ['CreateUser', 'EditUser'] }
          },
          content: {} // 待扩展
        }
      }
    },
    stctemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    customertemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    promotiontemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'dependencies'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        dependencies: {
          name: 'dependencies',
          text: 'tabname.dependencies',
          slot: 'dependencies',
          content: {} // 待扩展
        }
      }
    },
    checkbooktemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    regional: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    prdtemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    controlscript: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    usertemplate: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    cronschedule: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    workflow: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'status'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        status: {
          name: 'status',
          text: 'tabname.status',
          slot: 'status',
          content: {} // 待扩展
        }
      }
    },
    cfg: {
      default: {
        // 配置需要显示的tab
        tabs: ['main', 'field'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        },
        field: {
          name: 'field',
          text: 'tabname.field',
          slot: 'field',
          content: {} // 待扩展
        }
      }
    },
    attachment: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    },
    roleset: {
      default: {
        // 配置需要显示的tab
        tabs: ['main'],
        // 配置每个tab的内容
        main: {
          name: 'main',
          text: 'tabname.main',
          slot: 'main',
          content: {} // 待扩展
        }
      }
    }
  },
  accessGroupConfig: {
    // meta: 模版中的字段
    // main: 主表中的字段
    // self: this 中封装的方法
    // tactic: 当前tactic
    // 也许还有其他
    // 默认时and关系，or: 表示内部的各个条件之间时or关系
    // value可以是固定值，如字符串、boolean值、数字。如果是其他变量待考虑进步方案？？？
    promotion: {
      anchorAccessGroup: { visible: { meta: { anchorType: { notEqual: 'No' }}}, editable: false },
      settingAccessGroup: { visible: { meta: { allocationLevel: { notEqual: 'NoAllocation' }}}, editable: false },
      statusAccessGroup: { visible: { meta: { metaType: 'Promotion' }}, editable: false },
      responsibilityAccessGroup: { visible: { meta: { showResponsibility: true }}, editable: false },
      miscAccessGroup: { visible: { meta: { metaType: 'Promotion' }}, editable: false },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { isPlanningResponsibleUser: true }}},
      promotionAccessGroup: { visible: { 'op.and': [{ meta: { metaType: 'Promotion' }}, { meta: { referenceMode: { notEqual: 'Dynamic' }}}] }, editable: { meta: { referenceMode: 'Static' }, self: { isPlanningResponsibleUser: true }}},
      workflowAccessGroup: { visible: true, editable: { 'op.or': [{ self: { isPlanningResponsibleUser: true }}, { self: { isForApprovalResponsibleUser: true }}, { self: { isRejectedResponsibleUser: true }}] }},
      parentAccessGroup: { visible: { main: { parentPkey: { notNull: true, notEmpty: true }}}, editable: false },
      allocationLevelAccessGroup: { visible: { meta: { allocationLevel: { notEqual: 'NoAllocation' }}}, editable: { meta: { allocationLevel: { notIn: ['Distributor', 'Store'] }}, self: { isPlanningResponsibleUser: true }}},
      allocationStyleAccessGroup: { visible: { 'op.or': [{ meta: { allocationLevel: 'Store' }}, { 'op.and': [{ meta: { allocationLevel: 'DistributorOrStore' }}, { main: { allocationLevel: 'Store' }}] }] }, editable: { self: { isPlanningResponsibleUser: true }}},
      phaseAccessGroup: { visible: true, editable: { meta: { autoPhase: false }, self: { isPlanningResponsibleUser: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      saveAccessGroup: { visible: true, editable: [{ 'op.or': [{ self: { isPlanningResponsibleUser: true }}, { self: { isForApprovalResponsibleUser: true }}, { self: { isRejectedResponsibleUser: true }}] }, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      kickoffAccessGroup: { visible: [{ self: { isCommittedResponsibleUser: true }}, { main: { kickoff: false }}, { main: { executable: true }}], editable: [{ self: { isCommittedResponsibleUser: true }}, { main: { kickoff: false }}, { main: { executable: true }}] },
      closeTacticAccessGroup: { visible: { self: { isCommittedResponsibleUser: true }, meta: { automCloseTactics: false }}, editable: { self: { isCommittedResponsibleUser: true, tactic: { closed: false }}}},
      createTransactionAccessGroup: { visible: [{ self: { rolesIdList: { includes: 'createtrabtnusr' }}}, { self: { isCommittedPhase: true }}, { self: { canWrite: true }}, { tactic: { createBudgetMethod: { notEqual: 'None' }}}, { meta: { autoCreatePromotionTransaction: false }}], editable: [{ self: { rolesIdList: { includes: 'createtrabtnusr' }}}, { self: { isCommittedPhase: true }}, { self: { canWrite: true }}, { tactic: { createBudgetMethod: { notEqual: 'None' }}}, { meta: { autoCreatePromotionTransaction: false }}] },
      createPaymentAccessGroup: { visible: [{ self: { rolesIdList: { includes: 'createpaybtnusr' }}}, { self: { isCommittedPhase: true }}, { self: { canWrite: true }}], editable: [{ self: { rolesIdList: { includes: 'createpaybtnusr' }}}, { self: { isCommittedPhase: true }}, { self: { canWrite: true }}] },
      tacticFundAccessRight: { visible: { tactic: { createBudgetMethod: 'Manual' }}, editable: { self: { isPlanningResponsibleUser: true }}},
      prdExtractAccessRight: { visible: { meta: { mustExtractProduct: true }}, editable: { self: { isPlanningResponsibleUser: true }}}
    },
    'promotion.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: true, editable: { self: { canCreate: true }}},
      uploadAccessGroup: { visible: true, editable: { self: { canCreate: true }}},
      // 对于overview，当选中一行时，可以判断针对这一行用户是否可读，可删除
      // 如果选中多行时，
      // 1. 则不能读，因为不清楚要读哪一行？
      // 2. 可删除，当所有行均可以删除时
      // 3. 可提交，当所有均处于草稿状态时
      // 4. 可批准，当所有均由当前人审批时
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      downloadAccessGroup: { visible: true, editable: { self: { canDownload: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      submitForApprovalAccessGroup: { visible: true, editable: { self: { canBeSubmitForApproval: true }}},
      approvedAccessGroup: { visible: true, editable: { self: { canBeApproved: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    event: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { isEventResponsibleUser: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canEventDelete: true }}, editable: { self: { canEventDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    checkbook: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isResponsibleUser: true }}, { self: { canWrite: true }}] }] },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isResponsibleUser: true }}, { self: { canWrite: true }}] }, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: false, editable: false },
      helpAccessGroup: { visible: true, editable: true }
    },
    'checkbook.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: false, editable: false },
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    payment: {
      // deductionDateGroup: { visible: { meta: { id: 'Deduction' }}, editable: false },
      // checkDateGroup: { visible: { meta: { id: 'CustomerClaim' }}, editable: false },
      // receptionDateGroup: { visible: { meta: { id: 'Deduction' }}, editable: false },
      // responsibilityAccessGroup: { visible: { meta: { showResponsibility: true }}, editable: false },
      // miscAccessGroup: { visible: { meta: { metaType: 'Promotion' }}, editable: false },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { isPlanningResponsibleUser: true }}},
      // promotionAccessGroup: { visible: { 'op.and': [{ meta: { metaType: 'Promotion' }}, { meta: { referenceMode: { notEqual: 'Dynamic' }}}] }, editable: { meta: { referenceMode: 'Static' }, self: { isPlanningResponsibleUser: true }}},
      workflowAccessGroup: { visible: true, editable: { 'op.and': [{ self: { isResponsibleUser: true }}, { main: { phase: { notEqual: 'Committed' }}}] }},
      allocateAccessRight: { visible: { meta: { needAllocation: true }, main: { phase: 'Planning' }}, editable: { meta: { needAllocation: true }, main: { phase: 'Planning' }}},
      addFundAccessGroup: { visible: { meta: { addFundsManually: true }}, editable: { meta: { needAllocation: true }, main: { phase: 'Planning' }, self: { canWrite: true }}},
      phaseAccessGroup: { visible: true, editable: { meta: { autoPhase: false }, self: { isPlanningResponsibleUser: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      saveAccessGroup: { visible: true, editable: [{ 'op.or': [{ self: { isPlanningResponsibleUser: true }}, { self: { isForApprovalResponsibleUser: true }}] }, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'payment.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: true, editable: { self: { canCreate: true }}},
      uploadAccessGroup: { visible: true, editable: { self: { canCreate: true }}},
      // 对于overview，当选中一行时，可以判断针对这一行用户是否可读，可删除
      // 如果选中多行时，
      // 1. 则不能读，因为不清楚要读哪一行？
      // 2. 可删除，当所有行均可以删除时
      // 3. 可提交，当所有均处于草稿状态时
      // 4. 可批准，当所有均由当前人审批时
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      downloadAccessGroup: { visible: true, editable: { self: { canDownload: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      submitForApprovalAccessGroup: { visible: true, editable: { self: { canBeSubmitForApproval: true }}},
      approvedAccessGroup: { visible: true, editable: { self: { canBeApproved: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    fndtatemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'fndtatemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    period: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] }
    },
    'period.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    orgunit: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }}
    },
    'orgunit.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    product: {
      // clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'product.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    fund: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { isPlanningResponsibleUser: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      workflowAccessGroup: { visible: true, editable: { 'op.or': [{ self: { isPlanningResponsibleUser: true }}, { self: { isForApprovalResponsibleUser: true }}] }},
      phaseAccessGroup: { visible: true, editable: { meta: { autoPhase: false }, self: { isPlanningResponsibleUser: true }}},
      productAccessGroup: { visible: { self: { displayProduct1: true }}, editable: false },
      orgunitAccessGroup: { visible: { self: { displayOrgunit1: true }}, editable: false },
      customerAccessGroup: { visible: { self: { displayCustomer1: true }}, editable: false }
    },
    'fund.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    transaction: {
      transferdataAccessGroup: { visible: { 'op.and': [{ meta: { taType: { notEqual: 'Promotion' }}}, { meta: { taType: { notEqual: 'Transfer' }}}, { meta: { taType: { notEqual: 'Allocation' }}}, { meta: { taType: { notEqual: 'Payment' }}}] }, editable: false },
      sourcefundAccessGroup: { visible: { 'op.or': [{ meta: { taType: 'Transfer' }}, { meta: { taType: 'Allocation' }}] }, editable: false },
      paymentAccessGroup: { visible: { meta: { taType: 'Payment' }}, editable: false },
      tacticAccessGroup: { visible: { 'op.or': [{ meta: { taType: 'Promotion' }}, { meta: { taType: 'Transfer' }}, { meta: { taType: 'Allocation' }}] }, editable: false },
      promotionAccessGroup: { visible: { meta: { taType: 'Promotion' }}, editable: false },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { isPlanningResponsibleUser: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      workflowAccessGroup: { visible: true, editable: { 'op.or': [{ self: { isPlanningResponsibleUser: true }}, { self: { isForApprovalResponsibleUser: true }}] }},
      fndMainPkey1AccessGroup: { visible: { meta: { taType: 'Initial' }}, editable: false },
      fndMainPkeyAccessGroup: { visible: { 'op.or': [{ meta: { taType: 'Adjustment' }}, { meta: { taType: 'Transfer' }}, { meta: { taType: 'Allocation' }}] }, editable: false },
      phaseAccessGroup: { visible: true, editable: { meta: { autoPhase: false }, self: { isPlanningResponsibleUser: true }}},
      totalEarningsAccessGroup: { visible: { meta: { taType: 'Promotion' }}, editable: false },
      tacAccessGroup: { visible: { 'op.or': [{ meta: { taType: 'Transfer' }}, { meta: { taType: 'Allocation' }}, { meta: { taType: 'Promotion' }}] }, editable: { 'op.and': [{ self: { isPlanningResponsibleUser: true }}, { 'op.or': [{ meta: { taType: 'Transfer' }}, { meta: { taType: 'Allocation' }}] }] }}
    },
    'transaction.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false },
      submitForApprovalAccessGroup: { visible: true, editable: { self: { canBeSubmitForApproval: true }}},
      approvedAccessGroup: { visible: true, editable: { self: { canBeApproved: true }}}
    },
    productset: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] }
    },
    'productset.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    pex: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isPexResponsibleUser: true }}, { main: { taskStatus: false }}, { self: { canWrite: true }}, { 'op.or': [{ self: { isPlanningPhase: true }}, { self: { isRejectedPhase: true }}] }] }] },
      workflowAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isPexResponsibleUser: true }}, { main: { taskStatus: false }}, { self: { canWrite: true }}] }] },
      submitAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isPexResponsibleUser: true }}, { main: { taskStatus: false }}, { self: { canWrite: true }}, { 'op.or': [{ 'op.and': [{ meta: { metaType: { notEqual: '2GR' }}}, { meta: { metaType: { notEqual: '1GR' }}}] }, { 'op.and': [{ meta: { metaType: '1GR' }}, { 'op.or': [{ self: { submit1grrejectedstores: true }}, { self: { submit1grdraftstores: true }}] }] }, { 'op.and': [{ meta: { metaType: '2GR' }}, { 'op.or': [{ self: { submitrejectedstores: true }}, { self: { submitdraftstores: true }}] }] }] }] }] },
      // submitAccessGroup: { visible: true, editable: true },
      phaseAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isPexResponsibleUser: true }}, { main: { taskStatus: false }}, { self: { canWrite: true }}] }] },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isPexResponsibleUser: true }}, { self: { canWrite: true }}] }, { main: { taskStatus: false }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'pex.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: true, editable: { self: { canCreate: true }}},
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      uploadAccessGroup: { visible: false, editable: false }
    },
    pap: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: true },
      workflowAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isResponsibleUser: true }}, { self: { canWrite: true }}, { main: { phase: { notEqual: 'Committed' }}}] }] },
      createAccessGroup: { visible: false, editable: false },
      saveAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { isResponsibleUser: true }}, { self: { canWrite: true }}] }, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canBeDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'pap.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      uploadAccessGroup: { visible: false, editable: false }
    },
    customer: {
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'customer.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    role: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: false },
      salesorgAccessGroup: { visible: true, editable: false },
      maskplannerAccessGroup: { visible: true, editable: [{ 'op.and': [{ main: { roleType: 'functionRole' }}, { self: { canWrite: true }}] }] },
      idroletyAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'role.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    division: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'division.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    fundtemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'fundtemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false },
      fndserverAccessGroup: { visible: { self: { isServerResponsibleUser: true }}, editable: { self: { canBeServer: true }}}
    },
    tpmrequest: {
      clientbtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { clientPkey: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { clientPkey: { isNull: true }}}] }},
      salesorgbtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { clientPkey: { notEmpty: true }}}, { main: { salesorgPkey: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { salesorgPkey: { isNull: true }}}] }},
      divisionbtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { salesorgPkey: { notEmpty: true }}}, { main: { divisionPkey: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { divisionPkey: { isNull: true }}}] }},
      salesareabtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { divisionPkey: { notEmpty: true }}}, { main: { salesareaPkey: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { salesareaPkey: { isNull: true }}}] }},
      initialbtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { salesareaPkey: { notEmpty: true }}}, { main: { initialPkey: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { initialPkey: { isNull: true }}}] }},
      initialclientbtnGroup: { visible: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { initialPkey: { notEmpty: true }}}, { main: { initiated: { isNull: true }}}] }, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { isEdit: true }}, { main: { initiated: { isNull: true }}}] }},
      createInitialAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { main: { initiated: { isNull: true }}}] }},
      createDivisionAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { main: { divisionPkey: { isNull: true }}}] }},
      createSalesorgAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { main: { salesorgPkey: { isNull: true }}}] }},
      createClientAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { main: { clientPkey: { isNull: true }}}] }},
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'tpmrequest.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    pextemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'pextemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    initial: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      initialGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { main: { initiated: false }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}, { main: { initiated: false }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}, { main: { initiated: false }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { canWrite: true }}, { main: { initiated: false }}] }] },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'init.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    statistic: {
      // clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'statistic.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    calendar: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'calendar.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    module: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'module.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    currency: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'currency.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    toggle: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'toggle.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    salesarea: {
      // idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'salesarea.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    application: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'app.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    client: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'client.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    paptemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'paptemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    prdassortmenttemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'prdassortmenttemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    paymenttemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'paymenttemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    allocationmap: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'allocationmap.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    conditiontemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'conditiontemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    salesorg: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'salesorg.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    setting: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'setting.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    number: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'number.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    user: {
      // idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      // clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      planner2AccessGroup: { visible: true, editable: [{ 'op.or': [{ route: { name: 'EditProfile' }}, { self: { canWrite: true }}] }, { self: { rolesIdList: { includes: 'usermender' }}}] },
      plannerAccessGroup: { visible: true, editable: { 'op.or': [{ route: { name: 'EditProfile' }}, { self: { canWrite: true }}] }},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ 'op.or': [{ route: { name: 'EditProfile' }}, { self: { canWrite: true }}] }, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'user.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false },
      buttonAccessGroup: { visible: [{ 'op.and': [{ self: { rolesIdList: { includes: 'usermender' }}}, { self: { canBePassword: true }}] }], editable: [{ 'op.and': [{ self: { rolesIdList: { includes: 'usermender' }}}, { self: { canWrite: true }}] }] }
      // buttonAccessGroup: { visible: [{ 'op.and': [{ self: { rolesIdList: { includes: 'usermender' }}}, { self: { canWrite: true }}] }], editable: [{ 'op.and': [{ self: { rolesIdList: { includes: 'usermender' }}}, { self: { canWrite: true }}] }] }
    },
    stctemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'stctemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    'userlogin.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: false, editable: false },
      deleteAccessGroup: { visible: false, editable: false },
      helpAccessGroup: { visible: false, editable: false },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: false, editable: false },
      uploadAccessGroup: { visible: false, editable: false }
    },
    'report.overview': {
      baseAccessGroup: { visible: true, editable: true },
      createAccessGroup: { visible: false, editable: false },
      deleteAccessGroup: { visible: false, editable: false },
      helpAccessGroup: { visible: false, editable: false },
      downloadAccessGroup: { visible: true, editable: true },
      readerAccessGroup: { visible: false, editable: false },
      uploadAccessGroup: { visible: false, editable: false }
    },
    customertemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'customertemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    promotiontemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'promotiontemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    checkbooktemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'checkbooktemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false },
      cbkServerAccessGroup: { visible: { self: { isServerResponsibleUser: true }}, editable: { self: { canBeServer: true }}}
    },
    regional: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'regional.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    prdtemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'prdtemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
      // cbkServerAccessGroup: { visible: { self: { isServerResponsibleUser: true }}, editable: { self: { canBeServer: true }}}
    },
    controlscript: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'controlscript.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    usertemplate: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'usertemplate.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    cronschedule: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      // salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'cronschedule.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    workflow: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'workflow.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    cfg: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'cfg.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    attachment: {
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'attachment.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    },
    roleset: {
      idAccessGroup: { visible: true, editable: { 'op.and': [{ self: { canWrite: true }}, { self: { pkey: '' }}] }},
      clientAccessGroup: { visible: { self: { client: 'A001' }}, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      salesorgAccessGroup: { visible: true, editable: [{ 'op.and': [{ self: { pkey: '' }}, { self: { canWrite: true }}] }] },
      baseAccessGroup: { visible: true, editable: false },
      plannerAccessGroup: { visible: true, editable: { self: { canWrite: true }}},
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      saveAccessGroup: { visible: true, editable: [{ self: { canWrite: true }}, { 'op.or': [{ self: { manualChanged: true }}, { self: { dataChanged: true }}] }] },
      cancelAccessGroup: { visible: true, editable: true },
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canDelete: true }}},
      helpAccessGroup: { visible: true, editable: true }
    },
    'roleset.overview': {
      baseAccessGroup: { visible: true, editable: false },
      createAccessGroup: { visible: { self: { canCreate: true }}, editable: { self: { canCreate: true }}},
      deleteAccessGroup: { visible: { self: { canDelete: true }}, editable: { self: { canBeDelete: true }}},
      helpAccessGroup: { visible: true, editable: true },
      downloadAccessGroup: { visible: false, editable: false },
      readerAccessGroup: { visible: true, editable: { self: { canBeRead: true }}},
      uploadAccessGroup: { visible: false, editable: false }
    }
  }
}