import { useLoadingBar } from 'naive-ui'
import { createCommentVNode } from 'vue'

export default defineComponent({
  setup() {
    const loadingBar = useLoadingBar()
    window.$loading = loadingBar
  },
  render() {
    return createCommentVNode()
  },
})
