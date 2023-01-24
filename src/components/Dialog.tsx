import { useDialog } from 'naive-ui'
import { createCommentVNode } from 'vue'

export default defineComponent({
  setup() {
    const dialog = useDialog()
    window.$dialog = dialog
  },
  render() {
    return createCommentVNode()
  },
})
