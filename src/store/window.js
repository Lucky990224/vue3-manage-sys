// 这个文件是获取当前窗口的大小，专门给没有自适应组件使用的
import { defineStore } from 'pinia'

export const WindowStore = defineStore('window', {
    
  state: () => ({
    remSize: 'px',
  }),

  getters: {
    getSize(){
      return this.remSize;
    }
  },
  
  actions: {
    setRem(){  // 窗口大小变化时重置rem
      const baseSize = 100;
      const baseVal = baseSize / 1920;
      const vW = window.innerWidth;   // 当前窗口的宽度
      const rem = vW * baseVal; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
      window.$size = rem / 100;
      this.remSize = rem + 'px';
    //   document.documentElement.style.fontSize = rem + "px";
    },
  },
})
