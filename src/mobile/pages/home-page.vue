<template>
  <div class="home">
    <div class="banner">
      <swiper loop auto
              :list="baseList"
              dots-position="center"
              @on-index-change="change"></swiper>
      <div>
        我是首页
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import { mapGetters } from 'vuex'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      swiperIndex: 1
    }
  },
  created () {
    this.$store.dispatch('getSwiperData')
  },
  computed: {
    ...mapGetters(
      {
        baseList: 'swiperList'
      }
    )
  },
  mounted () {
  },
  methods: {
    change: function (index) {
      // console.log(index)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/common';
  .banner {
    background: white;
    width: 100%;
  }
</style>
