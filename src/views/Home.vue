<template>
  <div class="home">
    <!-- {{ count }} -->
    <!-- {{ book.title }} -->
    1
    <el-button>22</el-button>
    <sky-button>按钮</sky-button>
    <!-- <sky-test>按钮</sky-test> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, provide } from 'vue'
import { useStore } from 'vuex'
import SkyButton from '@sky/button'

export default defineComponent({
  components: {
    SkyButton
  },
  name: 'home',
  setup(props, ctx) {
    provide('user', '张三')
    const store = useStore()
    // console.log(store.state)
    store.commit('setUser', { id: 111, name: '222' })
    // console.log(store.state.user)
    const count = ref(1)
    const book = reactive({ title: 'vue' })

    const onClick = () => {
      count.value++
      book.title = 'vue1'
      provide('user', '张三111')
    }

    onMounted(() => {
      // console.log(this)
    })

    return {
      count,
      book,
      onClick
    }
  }
  // mounted() {
  //   console.log(this.$store)
  //   this.setUser({
  //     id: 1,
  //     name: '张三'
  //   })
  //   console.log(this.$store)
  // },
  // methods: {
  //   ...mapMutations(['setUser'])
  // }
})
</script>
<style scoped></style>
