import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/LearningEnglishWeb/', //設定部署的基礎路徑
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))//解釋 這裡是指定src資料夾的位置 這樣就可以在其他地方使用@/components/xxx
    }
  }
})
