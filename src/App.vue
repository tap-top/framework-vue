<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      broswer: ''
    }
  },
  created () {
    let ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('mobile') > -1) {
      this.broswer = 'mobile'
    } else if (ua.indexOf('micromessenger') > -1) {
      this.broswer = 'wechat'
    } else if (ua.indexOf('QQ') > -1) {
      this.broswer = 'QQ'
    } else if (ua.indexOf('applewebkit') > -1) {
      this.broswer = 'webKit'
    } else {
      this.broswer = 'other'
    }

    if (this.broswer !== 'webKit') {
      this.$router.replace({
        path: '/AppMobile'
      })
    } else {
      this.$router.replace({
        path: '/AppPC'
      })
    }
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang='less'>
  @import '~vux/src/styles/reset.less';
</style>
<style lang='scss'>
  @import 'mobile/assets/scss/common';

  html,body {
    height: 100%;
  }

</style>
