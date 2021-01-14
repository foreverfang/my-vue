<template>
  <div class="print">
    <button v-if="!isIEBrowser" v-print="printObj">nb打印</button>
    <el-button v-else @click="onPrint">printJs打印</el-button>
    <div id="taskQueryPrint" ref="taskQueryPrint" style="background:#bed742;">
        <p>葫芦娃，葫芦娃</p>
        <p>一根藤上七朵花</p>
        <p>小小树藤是我家啦啦啦啦 </p>
        <p>叮当当咚咚当当浇不大</p>
        <p> 叮当当咚咚当当是我家</p>
        <p> 啦啦啦啦</p>
        <p>...</p>
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import printJs from 'print-js';
export default {
  name: 'Home',
  data(){
    return{
      printObj: {
        id: "taskQueryPrint",
        popTitle: 'good print',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
      isIEBrowser: false
    };
  },
  mounted(){
      this.isIEBrowser = this.isIE();
  },
  methods: {
      // 判断是否是IE浏览器
        isIE(){
          let isIE = false;
          if (!!window.ActiveXObject || "ActiveXObject" in window || window.navigator.userAgent.indexOf("MSIE")>= 1) {
            isIE = true;
          }
          return isIE;
        },
        onPrint() {
            const printContent = this.$refs.taskQueryPrint;
            // 获取dom 宽度 高度
            const width = printContent.clientWidth;
            const height = printContent.clientHeight;
            // 创建一个canvas节点
            const canvas = document.createElement('canvas');
  
            const scale = 4; // 定义任意放大倍数，支持小数；越大，图片清晰度越高，生成图片越慢。
            canvas.width = width * scale; // 定义canvas 宽度 * 缩放
            canvas.height = height * scale; // 定义canvas高度 *缩放
            canvas.style.width = width * scale + 'px';
            canvas.style.height = height * scale + 'px';
            canvas.getContext('2d').scale(scale, scale); // 获取context,设置scale
 
           const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动轴滚动的长度
           const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; // 获取水平滚动轴的长度
 
           html2canvas(printContent, {
             canvas,
             backgroundColor: null,
             useCORS: true,
             windowHeight: document.body.scrollHeight,
             scrollX: -scrollLeft, // 解决水平偏移问题，防止打印的内容不全
             scrollY: -scrollTop
           }).then((canvas) => {
             const url = canvas.toDataURL('image/png')
             printJs({
               printable: url,
               type: 'image',
               documentTitle: '', // 标题
               style: '@page{size:auto;margin: 0cm 1cm 0cm 1cm;}' // 去除页眉页脚
             })
           }).catch(err=>{
             console.error(err);
           })
        }
  }
}
</script>
<style scoped>
.print {
    text-align: center;
}
</style>
