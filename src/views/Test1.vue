<template>
  <div>
    <div class="aa">
      <svg-icon icon-class="edit"></svg-icon>
    </div>
    <div v-for="(item, key) in newsListShow" :key="key">
      <div>{{ item.name }}</div>
      <img src="item.thumbnail_pic_s" alt="">
      <div>{{ item.addr }}</div>
      <div>{{ item.sex }}</div>
    </div>
    <input type="button" value="add" @click="setNewsApi">
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsListShow: [],
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    setNewsApi: function () {
      this.$post('/news/index2', this.listQuery).then(res => {
        console.log(res)
        this.newsListShow = res.date
      })
    }
  }
}
</script>

<style scoped>
.svg-icon {
  font-size: 50px;
}
</style>
