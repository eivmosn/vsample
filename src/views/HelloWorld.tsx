import { useThemeStore } from '@/stores/theme'

export default defineComponent({
  setup() {
    const theme = useThemeStore()
    const active = ref<boolean>(theme.isDark)
    const handleUpdateValue = () => theme.toggle()

    return {
      active,
      handleUpdateValue,
    }
  },
  render() {
    return <main class='fc'>
      <div class='mt-14'>
        <n-switch v-model:value={this.active} size="large" v-slots={{
          'checked-icon': () => <i class='i-lucide:sun text-12px' />,
          'unchecked-icon': () => <i class='i-lucide:moon text-12px' />,
        }}
          onUpdate:value={this.handleUpdateValue}
        />
      </div>
    </main>
  },
})
