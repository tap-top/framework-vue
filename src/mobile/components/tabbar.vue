<template>
  <div v-show="isShowTabbar">
    <tabbar>
      <tabbar-item :selected="nowTab=='homePage'" link="/homePage">
        <!--<img slot="icon" src="../assets/images/ico_sever_def@2x.png">-->
        <!--<img slot="icon-active" src="../assets/images/ico_sever_act@2x.png">-->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="nowTab=='components'" link="/components">
        <!--<img slot="icon" src="../assets/images/ico_me_def@2x.png">-->
        <!--<img slot="icon-active" src="../assets/images/ico_me_act@2x.png">-->
        <span slot="label">组件</span>
      </tabbar-item>
      <tabbar-item :selected="nowTab=='my'" link="/my">
        <!--<img slot="icon" src="../assets/images/ico_home_ef@2x.png">-->
        <!--<img slot="icon-active" src="../assets/images/ico_home_act@2x.png">-->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  // props: {
  //   nowTab: String
  // },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    isShowTabbar () {
      let routeLength = this.$route.path.split('/').length
      if (routeLength > 2) {
        return false
      } else {
        return true
      }
    },
    nowTab () {
      var path = this.$route.path.split('/')[1]
      return path
    }
  }
}
</script>
