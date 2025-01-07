<template>
  <div class="container">
    <h1 class="aaa">{{article.title}}</h1>
    <img :src="article.img" alt="article.title">
    <div class="customCheckBoxHolder">
      <input type="checkbox" id="cCB1" class="customCheckBoxInput" @click="showChinese">
      <label for="cCB1" class="customCheckBoxWrapper">
        <div class="customCheckBox">
          <div class="inner">顯示翻譯</div>
        </div>
      </label>
    </div>
    <p>{{article.content}}</p>
    <br>
    <p v-if="showTranslation">{{article.translation}}</p>
  </div>
</template>

<script>
// 引入文章數據模塊
import { getArticleById } from '../data/articles';


export default {
  props: ['id'],
  data() {
    return {
      article: {},
      showTranslation: false
    }
  },
  created() {
    // 使用數據模塊中的函數來獲取文章標題
    this.article = getArticleById(this.id);
  },
  methods: {
    showChinese() {
      this.showTranslation = !this.showTranslation;
    }
  }
}




</script>

<style scoped>

h1 {
  font-size: 32px;
  color: rgb(13, 99, 205);
  text-align: center;
  margin-bottom: 40px;
}

.container {
  padding: 20px;
  max-width: 800px;
  margin-top: 100px;
  color: #000000;
  font-size: 22px;
  text-align: start;
}

.container>img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.customCheckBoxWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}



/* From Uiverse.io by WhiteNervosa */
.customCheckBoxHolder {
  margin: 5px;
  display: flex;
}

.customCheckBox {
  width: fit-content;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  padding: 2px 8px;
  background-color: rgba(0, 0, 0, 0.16);
  border-radius: 0px;
  color: rgba(255, 255, 255, 0.7);
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 300ms;
  transition-property: color, background-color, box-shadow;
  display: flex;
  height: 32px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
  outline: none;
  justify-content: center;
  width: 300px;
}

.customCheckBox:hover {
  background-color: #2c2c2c;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
}

.customCheckBox .inner {
  font-size: 18px;
  font-weight: 900;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 300ms;
  transition-property: transform;
  transform: translateY(0px);
}

.customCheckBox:hover .inner {
  transform: translateY(-2px);
}

/* Multiple Checkboxes can be chained together for a radio input */
.customCheckBoxWrapper:first-of-type .customCheckBox {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-right: 0px;
}

.customCheckBoxWrapper:last-of-type .customCheckBox {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-left: 0px;
}

.customCheckBoxInput {
  display: none;
}

.customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox {
  background-color: #2d6737;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
}

.customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox .inner {
  transform: translateY(-2px);
}

.customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox:hover {
  background-color: #34723f;
  box-shadow: rgba(0, 0, 0, 0.26) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.15) 0px 3px 6px 2px;
}

.customCheckBoxWrapper .customCheckBox:hover .inner {
  transform: translateY(-2px);
}



</style>
