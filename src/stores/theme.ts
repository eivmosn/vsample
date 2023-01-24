import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, lightTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark({
    selector: 'body',
  })

  const toggle = useToggle(isDark)

  const color = computed<GlobalTheme>(() => {
    return isDark.value ? darkTheme : lightTheme
  })

  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColorHover: '#4098FCFF',
      primaryColorSuppl: '#4098FCFF',
      primaryColor: '#2080F0FF',
      primaryColorPressed: '#1060C9FF',
    },
  }

  return {
    isDark,
    toggle,
    color,
    themeOverrides,
  }
})
