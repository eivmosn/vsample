import { useMessage } from 'naive-ui'
import { createCommentVNode } from 'vue'

export default defineComponent({
  setup() {
    const message = useMessage()
    window.$message = message
  },
  render() {
    return createCommentVNode()
  },
})
