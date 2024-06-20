import type { MainProfile, ProfileConfig } from "CFG"

export default function getCurrentProfile(profileConfig: ProfileConfig, profile: string) {
  const baseProfileConfig = profileConfig['BaseProfile']
  const thisProfileConfig = profileConfig[profile]
  let newButtons = []
  if (thisProfileConfig?.buttons?.main?.left) {
    baseProfileConfig.buttons.main.left
      .forEach(baseButton => {
        // 新加的按钮逻辑没加
        const foundItem = thisProfileConfig.buttons.main.left.find((item) => item.command === baseButton.command)
        if (foundItem) {
          // 找到就覆盖
          newButtons.push({ ...foundItem })
        } else {
          // 没有找到，则使用原来的
          newButtons.push({ ...baseButton })
        }
      })
    thisProfileConfig.buttons.main.left
      .forEach(profileButton => {
        // 新加的按钮逻辑
        const newItem = baseProfileConfig.buttons.main.left.find((item) => item.command === profileButton.command)
        if (!newItem) {
          // 找到basebutton里不存在的按钮就添加进去
          newButtons.push({ ...profileButton })
        }
      })
  } else {
    newButtons = [...baseProfileConfig.buttons.main.left]
  }
  thisProfileConfig.buttons = { main: { left: newButtons.sort((a, b) => a.order - b.order) }}
  return thisProfileConfig as MainProfile
}
