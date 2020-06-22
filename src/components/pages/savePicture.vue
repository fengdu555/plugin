<!-- canvas保存图片 -->
<template>
  <div class="main fontColor">
    <div ref="ent-rela-echart">
      <p>先转为canvas图片</p>
      <p>在执行canvas 保存图片</p>
      <canvas></canvas>
    </div>这是保存图片
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {};
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    downloadPhotos() {
      //确定图片的类型 获取到的图片格式 data:image/Png;base64,......
      let type = "jpeg";
      let canvas = this.$refs["ent-rela-echart"].querySelector("canvas");
      console.log(this.$refs["ent-rela-echart"]);
      console.log(canvas);
      let imgdata = canvas.toDataURL(type, 1.0);
      //将mime-type改为image/octet-stream,强制让浏览器下载
      let fixtype = function(type) {
        type = type.toLocaleLowerCase().replace(/jpg/i, "jpeg");
        let r = type.match(/png|jpeg|bmp|gif/)[0];
        return "image/" + r;
      };
      imgdata = imgdata.replace(fixtype(type), "image/octet-stream");

      let base64Img2Blob = code => {
        let parts = code.split(";base64,"),
          contentType = parts[0].split(":")[1],
          raw = window.atob(parts[1]),
          rawLength = raw.length,
          uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
      };
      //将图片保存到本地
      let savaFile = function(data, filename) {
        let isIe = navigator.msSaveOrOpenBlob;
        let save_link = document.createElement("a");
        if (isIe) {
          let url = base64Img2Blob(data);
          save_link.addEventListener("click", function() {
            window.navigator.msSaveOrOpenBlob(url, filename);
          });
          document.body.appendChild(save_link);
          save_link.click();
          document.body.removeChild(save_link);
        } else {
          save_link.href = data;
          save_link.download = filename;
          let event = new MouseEvent("click");
          save_link.dispatchEvent(event);
        }
      };
      let filename = "" + new Date().getSeconds() + "." + type;
      //用当前秒解决重名问题
      savaFile(imgdata, filename);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.downloadPhotos()
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>