import Provider from '@/components/Provider'

export default defineComponent({
  render() {
    return <Provider v-slots={{
      default: () => <router-view />,
    }} />
  },
})
