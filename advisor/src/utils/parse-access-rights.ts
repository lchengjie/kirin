
function parseAccessGroup(accessGroup, mappingObj) {
  const { editable: editableConfig, visible: visibleConfig } = accessGroup

  const editable = editableConfig && parseConfig(editableConfig, mappingObj)
  const visible = visibleConfig && parseConfig(visibleConfig, mappingObj)
  return { editable, visible }
}
function parseConfig(config, mappingObj) {
  // 要么配置boolean值
  if (typeof config === 'boolean') {
    return config
  }
  // 要么配置为对象，可以用or或and表示多个条件的逻辑，但是or和and不同时在同一层
  // { or: { 1, 2 } }
  // [{ or: { 1, 2 }}, { or: { 3, 4 } }] 等同于=== { and: [{ or: { 1, 2 }}, { or: { 3, 4 } }] }
  // { and: { 1, 2 } }  等同=== { 1, 2 }
  // { and: { 1, 2, or: { 3, 4, 5 } } } 等同=== { 1, 2, or: { 3, 4, 5 } }
  // { and: { 1, 2, or: { 3, and: { 4, 5 } } } } 等同=== { 1, 2, or: { 3, and: { 4, 5 } } }
  // { or: { 1, 2, and: { 3, 4, 5 } } } // 不支持这种，or 的值只支持数组
  // { or: [{ and: { 1, 2 }}, { and: { 3, 4, 5 } }] }
  // 如上述例子：1: or和and不在同一层；2: and在第一层是可以忽略，其他层不能忽略（因为如果忽略可能会没有key，不合JSON格式要求）
  if (Array.isArray(config)) {
    // 如果是数组，每个元素之间是and关系
    return config.every((item) => {
      // 每一个元素都递归使用同样方法处理，每个元素的配置和根配置相同
      return parseConfig(item, mappingObj)
    })
  }
  // 如果是对象，只能配一个op.or或op.and或者不配置（本对象是and关系），不会存在多个op.or或op.and的情况
  if (config['op.or']) {
    if (Array.isArray(config['op.or'])) {
      return config['op.or'].some((item) => {
        // 每一个元素都递归使用同样方法处理，每个元素的配置和根配置相同
        return parseConfig(item, mappingObj)
      })
    }
    // return this.parseConfigOr(config['op.or'])
  }
  if (config['op.and']) {
    // 对于op.and的内容，递归处理：boolean，array
    return parseConfig(config['op.and'], mappingObj)
  } else {
    // 此时处理具体的and里的每一个条件
    return parseConfigAnd(config, mappingObj)
  }
  // return false
}
function parseConfigAnd(config, mappingObj) {
  // config一定是一个对象而不是数组。也不是boolean
  // 可能会包含多个条件, 每个条件是一个对象
  // meta,self,main,tactic
  const meetCondition = Object.keys(config)
    .every((ii) => {
      // config[ii] 里边配置一个key, 以及对应的值的要求
      const fieldKey = Object.keys(config[ii])[0]
      
      console.log("🚀 ~ .every ~ mappingObj[ii]:", mappingObj[ii])
      console.log("🚀 ~ .every ~ mappingObj:", mappingObj)
      console.log("🚀 ~ .every ~ currentValue,ii:", ii, ',fieldKey:', fieldKey)
      const currentValue = mappingObj[ii][fieldKey]
      const configValue = config[ii][fieldKey]

      // 支持当前用户roles中是否包含特定的role。即动态数据中是否包含特定的一个值的情形
      if (Array.isArray(currentValue)) {
        // 当前值为数组，切配置的value为includes：萨达撒地方
        if (configValue.includes) {
          return currentValue.includes(configValue.includes)
        }
      }
      // 如果是boolean，字符串，日期等
      if (typeof configValue === 'boolean') {
        return currentValue === configValue
      }
      if (typeof configValue === 'string') {
        return currentValue === configValue
      }
      // 如果配置为数组，表示值在这个数组列表的值范围内
      if (Array.isArray(configValue)) {
        return configValue.includes(currentValue)
      }

      const configValuesKeys = Object.keys(configValue)
      if (configValuesKeys.includes('notEqual')) {
        return currentValue !== configValue.notEqual
      }
      if (configValuesKeys.includes('notIn')) {
        return !configValue.notIn.includes(currentValue)
      }
      if (configValuesKeys.includes('notEmpty')) {
        return currentValue && currentValue !== ''
      }
      if (configValuesKeys.includes('isNull')) {
        return currentValue === null || currentValue === undefined
      }
      // TODO 其他关键字处理
      return false
    })

  return meetCondition
}

export default function parseAccessRights(currentAccessGroupConfig, mappingObj) {
  // 默认全部加上base，这个是为了兼容原来的设计，以后需要考虑删除
  const right: Record<string, Object> = { base: { editable: false, visible: true } }
  Object.keys(currentAccessGroupConfig)
    .forEach(accessGroup => {
      right[accessGroup] = parseAccessGroup(currentAccessGroupConfig[accessGroup], mappingObj)
    })
  return right
}
