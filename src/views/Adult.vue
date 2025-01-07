<template>
  <div class="container">
    <h1>成人文章</h1>
    <div class="grid-container">
      <div v-for="(article, index) in articles" :key="index" class="card1" @click="goToArticle(index)">
        <p class="card-content">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>

//跳轉至此畫面時，畫面到最上層



export default {
  data() {
    return {
      articles : [
        { id: 1, title: 'The Importance of Time Management' },
        { id: 2, title: 'The Role of Emotional Intelligence in Leadership' },
        { id: 3, title: 'The Impact of Digital Transformation on Modern Businesses' },
        { id: 4, title: 'Sustainable Practices in Modern Agriculture' },
        { id: 5, title: 'The Benefits of Lifelong Learning' },
        { id: 6, title: 'The Evolution of E-commerce and Its Future Trends' },
        { id: 7, title: 'The Role of Innovation in Economic Development' },
        { id: 8, title: 'The Challenges of Remote Work and How to Overcome Them' },
        { id: 9, title: 'The Evolution of Educational Technology' },
        { id: 10, title: 'The Significance of Financial Literacy' },
        { id: 11, title: 'The Benefits of Networking for Career Growth' },
        { id: 12, title: 'The Role of Critical Thinking in Problem Solving' }
      ]
    }
  },
  methods: {
    goToArticle(index) {
      // 導航到對應的文章詳細頁面，將文章ID作為參數
      this.$router.push({ name: 'a_Article', params: { id: this.articles[index].id } });
        window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  color: white;
}

.container>h1 {
  font-size: 46px;
  color: rgb(81, 141, 209);
  text-align: center;
  margin-top: 110px;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr); /* 每行4個卡片 */
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: rgb(81, 141, 209);
  margin-top:40px;
  margin-bottom:10px;
}

.card1 {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px; /* 減少內邊距 */
  text-align: center;
  height: 100px; /* 增加高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; /* 確保文字顏色為黑色 */
  cursor: pointer; /* 鼠標移動到卡片上時顯示為點擊手勢 */
  border-radius: 10px;
  width:250px;
  box-shadow: 1px 5px 60px 0px rgba(20, 11, 172, 0.42);
}

.card-content {
  font-weight: bold;
  margin: 0;
}
</style>
