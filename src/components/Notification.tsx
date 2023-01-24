import { useNotification } from 'naive-ui'
import { createCommentVNode } from 'vue'

export default defineComponent({
  setup() {
    const notification = useNotification()
    window.$notification = notification
  },
  render() {
    return createCommentVNode()
  },
})
