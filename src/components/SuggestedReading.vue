<script>
//當我按下id="FORchild"時，name1~4會顯示兒童文章的標題
import {getArticleById as getArticleById1} from '../data/articles';
import {getArticleById as getArticleById2} from '../data/article2.js';
import {getArticleById as getArticleById3} from '../data/article3.js';
import {useRouter} from "vue-router";
import {watch} from "vue";

let routeName = '';//路由名稱
export default {
  data() {
    return {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      img1: '',
      img2: '',
      img3: '',
      img4: ''
    }
  },
  methods: {
    //根據不同的類型顯示不同的文章
    tochild() {
      this.currentType = 'child';
      this.name1 = getArticleById1(1).title;
      this.img1 = getArticleById1(1).img;
      this.name2 = getArticleById1(2).title;
      this.img2 = getArticleById1(2).img;
      this.name3 = getArticleById1(3).title;
      this.img3 = getArticleById1(3).img;
      this.name4 = getArticleById1(4).title;
      this.img4 = getArticleById1(4).img;
    },
    toadult() {
      this.currentType = 'adult';
      this.name1 = getArticleById2(1).title;
      this.img1 = getArticleById2(1).img;
      this.name2 = getArticleById2(2).title;
      this.img2 = getArticleById2(2).img;
      this.name3 = getArticleById2(3).title;
      this.img3 = getArticleById2(3).img;
      this.name4 = getArticleById2(4).title;
      this.img4 = getArticleById2(4).img;
    },
    toexam() {
      this.currentType = 'exam';
      this.name1 = getArticleById3(1).title;
      this.img1 = getArticleById3(1).img;
      this.name2 = getArticleById3(2).title;
      this.img2 = getArticleById3(2).img;
      this.name3 = getArticleById3(3).title;
      this.img3 = getArticleById3(3).img;
      this.name4 = getArticleById3(4).title;
      this.img4 = getArticleById3(4).img;
    },

    //導航到文章詳細頁面，將文章ID作為參數
    navigateToArticle(id) {
      const router = useRouter();
      if (this.currentType === 'child') {
        routeName = 'c_Article';
      } else if (this.currentType === 'adult') {
        routeName = 'a_Article';
      } else if (this.currentType === 'exam') {
        routeName = 'e_Article';
      }
      this.$router.push({name: routeName, params: {id:id}});
    }

  },
  created() {
    this.tochild(); // Default to child articles
  }
};




</script>

<template>
  <legend class="title text-center mt-3">精選文章</legend>

<!--選擇按鈕-->
  <fieldset>





    <div class="button-group">
      <input type="radio" id="FORexam" name="frameworks"  @click="toexam"/>
      <label for="FORexam">考試</label>
    </div>
  </fieldset>


<!--文章-->
  <div class="row d-flex">
    <div class="col-4  d-flex w-100 justify-content-around">
      <div class="card">
          <img :src="img1" alt="article.title">
        <span>{{name1}}</span>
        <button type="submit" @click="navigateToArticle(1)" > Read Me
        </button>
      </div>

      <div class="card">
          <img :src="img2" alt="article.title">
        <span>{{name2}}</span>
        <button type="submit" @click="navigateToArticle(2)"> Read Me
        </button>
      </div>

      <div class="card">
          <img :src="img3" alt="article.title">
        <span>{{name3}}</span>
        <button type="submit" @click="navigateToArticle(3)"> Read Me
        </button>
      </div>

      <div class="card">
          <img :src="img4" alt="article.title">
        <span>{{name4}}</span>
        <button type="submit" @click="navigateToArticle(4)"> Read Me
        </button>
      </div>

    </div>
  </div>

</template>

<style>

.title {
  font-size: 20px;
  color: #d7d9fa;
  font-weight: 600;
  background-color: #385c7e;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  width: 10%;
}

/* 選擇按鈕*/
.button-group {
  margin: 20px;
}

.button-group input[type="radio"] {
  display: none;
}

.button-group label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #2b426d;
  background-color: #385c7e;
  color: white;
  border-radius: 15px;
  transition: all ease 0.2s;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  width: 90px;
  font-size: 13px;
  margin: 5px;
  box-shadow: 0px 0px 50px -15px #000000;
}

.button-group input[type="radio"]:checked + label {
  background-color: white;
  color: #02375a;
  border: 1px solid #2b426d;
}

fieldset {
  border: 0;
  display: flex;
  flex-wrap: wrap;
}


/*文章*/
.card {
  width: 250px;
  height: 290px;
  background: #385c7e;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px rgba(20, 11, 172, 0.42);
  justify-content: space-around;
  padding-top: 20px;

}


.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 3px;
  font-size: 16px;
}



.card >img {
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-radius: 15px;

}

.card button {
  padding: 8px 25px;
  display: block;
  margin: 10px;

  border-radius: 8px;
  border: none;
  background: rgba(119, 178, 239, 0.85);
  color: white;
  font-weight: 600;
}

.card button:hover {
  background: #a9155a;
  transition: 0.6s;
}

</style>