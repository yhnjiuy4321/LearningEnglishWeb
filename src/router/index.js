import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Adult from '../views/Adult.vue'
import Child from '../views/Child.vue'
import ForExam from "@/views/ForExam.vue";
import article_child  from "@/views/Article_child.vue";
import article_adult  from "@/views/Article_adult.vue";
import article_forexam from "@/views/Article_forexam.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/homepage',
      component: HomeView
    },

    {
      path: '/adult',
      component: Adult
    },

    {
      path: '/child',
      component: Child
    },
    {
      path: '/forExam',
      component: ForExam
    },
    {
      path: '/child/article/:id',
      component: article_child,
      name: 'c_Article',
      props: true

    },
    {
      path: '/adult/article/:id',
      component: article_adult,
      name: 'a_Article',
      props: true
    },
    {
      path: '/forExam/article/:id',
      component: article_forexam,
      name: 'e_Article',
      props: true
    }
  ]
})

export default router