<template>
  <div class="page">
    <mt-header fixed :title="$route.meta.title">
      <mt-button slot="left" icon="back" @click="back"></mt-button>
      <router-link v-if="$route.meta&&$route.meta.right" :to="$route.meta.right.url" slot="right">
        {{$route.meta.right.label}}
      </router-link>
    </mt-header>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
.page {
  padding: 40px 0 0;
}
</style>
