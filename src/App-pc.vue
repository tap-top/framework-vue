<template>
  <div id="app">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">aa</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">aa</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">aa</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">aa</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    '$route' (to, from) {
      // 切换动画
      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
        from.meta.keepAlive = false
        to.meta.keepAlive = true
        // console.log('退后不缓存from' + JSON.stringify(from.path))
        // console.log('退后缓存to' + JSON.stringify(to.path))
      } else {
        from.meta.keepAlive = true
        to.meta.keepAlive = false
        // console.log('前进缓存from' + JSON.stringify(from.path))
        // console.log('前进不缓存to' + JSON.stringify(to.path))
        if (this.$route.path.split('/').length < 3) {
          this.transitionName = 'slide-fade'
        } else {
          this.transitionName = 'slide-left'
        }
      }
      this.$router.isBack = false
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  @import 'mobile/assets/scss/common';

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
