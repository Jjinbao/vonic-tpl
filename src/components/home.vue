<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="0">
    <von-header theme="light">
      <span slot="title">首页</span>
    </von-header>
    <div class="page-content padding-top">
      <div class="button button-assertive" @click="getData">点击获取数据yes</div>
      <div v-for="myitem in items">{{myitem.message}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items:[
          {message: '第一个'},
          {message: '第二个'}
        ]
      }
    },
    ready: function(){
      self = this;
      this.$http.post(
        { url: 'http://123.57.225.89/sxtx/mobile/category/listOrderByCode',
          method: 'post',
          data: {"type":'holidaytheme_type'}
        }
      ).then(function(res){
        console.log(res)
      })
    },
    methods: {
      getData() {
        self = this;
        this.$http.post('http://123.57.225.89/sxtx/mobile/category/listOrderByCode', {"type":'holidaytheme_type'}).then(function(res){
          console.log(res)
        })
      }
    }
  }
</script>
