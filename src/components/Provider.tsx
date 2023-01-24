import Dialog from './Dialog'
import Message from './Message'
import Loading from './Loading'
import Notification from './Notification'

export default defineComponent({
  render() {
    return <n-config-provider>
            <n-loading-bar-provider>
                <Loading />
                <n-dialog-provider>
                    <Dialog />
                    <n-notification-provider max={5}>
                        <Notification />
                        <n-message-provider>
                            <Message />
                            <n-el class="bg-[var(--card-color)]">
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
