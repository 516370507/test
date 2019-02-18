<template>
  <div>
    <h1>test</h1>
    <div v-for="(item, key) in newsListShow" :key="key">
      <news-cell :newsDate="item" :key="key"></news-cell>
    </div>
    <input v-model="username">
    <input v-model="password">
    <input type="button"
           value="ok"
           v-on:click="getCode">
  </div>
</template>

<script>
import NewsCell from './NewsCell.vue'
export default {
  data () {
    return {
      test: '',
      username: '',
      password: '',
      newsListShow: []
    }
  },
  components: {
    NewsCell
  },
  methods: {
    getCode () {
      const params = { username: this.username, password: this.password }
      console.log(params)
      this.$post('admin/login/douserLogin', params).then((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
    },
    setNewsApi: function(){
      this.$post('/news/index', 'type-top&key=123456').then(res => {
        console.log(res);
        this.newsListShow = res.articles;
      })
    }
  },
  created(){
    this.setNewsApi();
  },
  mounted () {

  }
}
</script>

<style scoped>
</style>
