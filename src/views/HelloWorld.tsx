import { useThemeStore } from '@/stores/theme'

export default defineComponent({
  setup() {
    const theme = useThemeStore()
    const active = ref<boolean>(theme.isDark)
    return {
      active,
      theme,
    }
  },
  render() {
    const { theme } = this
    return <main class='fc bg-[var(--input-color-disabled)] p-20'>
      <div>
        <n-switch v-model:value={this.active} size="large" v-slots={{
          'checked-icon': () => <i class='i-lucide:sun text-12px' />,
          'unchecked-icon': () => <i class='i-lucide:moon text-12px' />,
        }}
          onUpdate:value={() => theme.toggle()}
        />
      </div>
    </main>
  },
})
