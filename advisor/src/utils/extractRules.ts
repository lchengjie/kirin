import type { Rule } from "ant-design-vue/es/form"

/**
 * 此方法用来从fields里配置的rules里提取出可以用于form上验证的rules，
 * 目前仅支持的rules包括 required， min:22, max:55 三个规则以及他们的混合使用
 * @param fields CFG中获取的Wizard的fields数组
 * @returns 合并的可用于form验证的rules
 */
export function extractRules(fields: Record<string, any>[]) {
  const rules: Record<string, Rule[]> = {}

  fields.forEach((field) => {
    console.log("🚀 ~ fields.forEach ~ field:", field)
    if (field.rules && field.visible !== false) {
      const name: string = field.name
      const nameRules: Rule[] = []
      let sameHasMinMax = false
      const fieldRuleString: string = field.rules
      const fieldRules: string[] = fieldRuleString.split('|')
      if (fieldRuleString.indexOf('min') > -1 && fieldRuleString.indexOf('max') > -1) {
        sameHasMinMax = true
        // 同时有min和max，则同时处理这两个规则，否则单独处理。
        const minRule = fieldRules.find((item) => item.startsWith('min'))?.split(':')
        const maxRule = fieldRules.find((item) => item.startsWith('max'))?.split(':')
        if (minRule && maxRule) {
          let message = ''
          if (field.type === 'textarea' || field.type === 'text') {
            message = `Length should be ${minRule[1]} to ${maxRule[1]}`
          } else if (field.type === 'number') {
            message = `Number should be ${minRule[1]} to ${maxRule[1]}`
          }
          nameRules.push({ min: +minRule[1], max: +maxRule[1], message, trigger: 'blur' })
          // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        }
      }
      fieldRules.forEach((rule) => {
        if (rule === 'required') {
          console.log(rule)
          nameRules.push({ required: true, message: `Required`, trigger: 'change' })
          // { required: true, message: 'Please input a slogan', trigger: 'change' }
          // checkbox, date, number, text, select, textarea, password, autocomp2
        } else {
          // 对于同时拥有min和max的已经处理，此处忽略
          if (!sameHasMinMax) {
            // max:255, min:22
            const oneRule: string[] = rule.split(':')
            if (oneRule[0] === 'min') {
              let message = ''
              if (field.type === 'textarea' || field.type === 'text') {
                message = `Length should more than ${oneRule[1]}`
              } else if (field.type === 'number') {
                message = `Number should greater than ${oneRule[1]}`
              }
              nameRules.push({ min: +oneRule[1], message, trigger: 'blur' })
            } else {
              let message = ''
              if (field.type === 'textarea' || field.type === 'text') {
                message = `Length should less than ${oneRule[1]}`
              } else if (field.type === 'number') {
                message = `Number should less than ${oneRule[1]}`
              }
              nameRules.push({ max: +oneRule[1], message, trigger: 'blur' })
            }
            // min   text
            // max   text, select, number, textarea
            // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
          }
        }
      })
  
      // required|max:255
      // required|min:11|max:11
      // required_if:this.postForm.allocationLevel='Store'
    
      // { required: true, message: 'Please input a slogan', trigger: 'change' }
      rules[name] = nameRules
    }
  })
  
  console.log("🚀 ~ extractRules ~ rules:", rules)
  return rules
}
