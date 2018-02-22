<template>
  <div class="scroll-range">
    <div class="time-list">
      <div class="time-panel" v-for="( item, index) in timeList" :key="index"
           :class="{'selected':item.day === dutyDate}"
           @click="hasSelect(item, index)">
        <p>{{item.weekday}}</p>
        <p>{{item.monthDay}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from 'vux'
const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export default {
  name: 'time-select',
  props: {
    dutyDate: String
  },
  data () {
    return {
      isSelect: 0,
      timeList: []
    }
  },
  created () {
    let time = new Date()
    time.setDate(time.getDate() - 1) // 从今天开始
    for (let i = 0; i < 30; i++) {
      time.setDate(time.getDate() + 1)
      var month = time.getMonth() + 1
      var date = time.getDate()
      if (month < 10) {
        month = '0' + month
      }
      if (date < 10) {
        date = '0' + date
      }
      // var day = time.getFullYear() + '-' + month + '-' + date
      var day = dateFormat(time, 'YYYY-MM-DD')
      this.timeList.push({
        'weekday': weekday[ time.getDay() ], // 星期
        'monthDay': month + ' - ' + date, // 月份和天 mth-dd
        'day': day // 格式化后的时间 yyyy-mth-dd
      })
    }
  },
  methods: {
    hasSelect (item, index) {
      this.isSelect = index
      this.$emit('listenDateSelect', item)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/common';
  .scroll-range{
    width: 100%;
    overflow: auto;
  }
  .time-list{
    width: 30 * px2rem(160px);
  }
  .time-panel{
    display: inline-block;
    width: px2rem(160px);
    padding: 5px 0;
    border:1px solid #D2C9CC;
    border-left:0;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
    background-color: white;
    &:first-child{
      border-left:1px solid #D2C9CC;
    }
  }
  .selected {
    background-color: #0F9FF6;
    color: white;
  }
</style>
