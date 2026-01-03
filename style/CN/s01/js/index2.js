const { createApp } = Vue;

createApp({
  data(){
    return{
      step:0,
      progress:0,
      targetUrl: window.APP_CONFIG?.targetUrl || '',
      questions:[
        '你是否同意继续？',
        '是否接受规则？',
        '是否确认年龄？',
        '是否进入下一步？'
      ]
    }
  },
  methods:{
    next(){
      this.step++;
      if(this.step === 5){
        let t = setInterval(()=>{
          this.progress += 10;
          if(this.progress >= 100){
            clearInterval(t);
            this.step = 6;
          }
        },200);
      }
    },
    go(){
      fbq('track','Lead');
      location.href = this.targetUrl;
    }
  }
}).mount('#app');
