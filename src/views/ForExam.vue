<template>
  <div class="container">
    <h1>考試專區</h1>
    <div class="grid-container">
      <div v-for="(article, index) in articles" :key="index" class="card" @click="goToArticle(index)">
        <p class="card-content">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles : [
        { id: 1, title: 'Preparing for a Job Interview' },
        { id: 2, title: 'Planning a Family Vacation' },
        { id: 3, title: 'Hosting a Dinner Party' },
        { id: 4, title: 'Starting a New Hobby' },
        { id: 5, title: 'Organizing a Community Event' },
        { id: 6, title: 'Maintaining a Healthy Lifestyle' },
        { id: 7, title: 'Understanding Financial Budgeting' },
        { id: 8, title: 'Exploring Local Culture Through Festivals' },
        { id: 9, title: 'Navigating Public Transportation' },
        { id: 10, title: 'Starting a Home Renovation Project' },
        { id: 11, title: 'Mastering Time Management Techniques' },
        { id: 12, title: 'Developing Effective Communication Skills' }
      ]
    }
  },
  methods: {
    goToArticle(index) {
      // 導航到對應的文章詳細頁面，將文章ID作為參數
      this.$router.push({ name: 'e_Article', params: { id: this.articles[index].id } });
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  color: white;
}

.container>h1 {
  font-size: 46px;
  color:  #137544;
  text-align: center;
  margin-top: 110px;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-color: #137544;
  grid-template-columns: repeat(4, 1fr); /* 每行4個卡片 */
  margin-top:40px;
  margin-bottom:10px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px; /* 減少內邊距 */
  text-align: center;
  height: 100px; /* 增加高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; /* 確保文字顏色為黑色 */
  cursor: pointer;
}

.card-content {
  font-weight: bold;
  margin: 0; /* 確保段落沒有額外的邊距 */
}
</style>
