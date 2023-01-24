import Dialog from './Dialog'
import Message from './Message'
import Loading from './Loading'
import Notification from './Notification'
import { useThemeStore } from '@/stores/theme'

export default defineComponent({
  setup() {
    const theme = useThemeStore()

    return {
      theme,
    }
  },
  render() {
    const { theme } = this
    return <n-config-provider theme={theme.color} theme-overrides={theme.themeOverrides}>
            <n-loading-bar-provider>
                <Loading />
                <n-dialog-provider>
                    <Dialog />
                    <n-notification-provider max={5}>
                        <Notification />
                        <n-message-provider>
                            <Message />
                            <n-el class="bg-[var(--card-color)] h-full">
                                {
                                    this.$slots.default && this.$slots.default()
                                }
                            </n-el>
                        </n-message-provider>
                    </n-notification-provider>
                </n-dialog-provider>
            </n-loading-bar-provider>
        </n-config-provider>
  },
})
