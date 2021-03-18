<template>
  <div>
        <el-form :model="receiptForm" ref="receiptForm" label-width="100px">
          <div id="receiptPrint">
            <el-row>
              <el-col :span="12">
                <img :src="titleImgDataURL" class="img_title">
              </el-col>
              <el-col :span="12">
                <h1 class="sessionclass">{{receiptForm.exhibitionSession}}</h1>
              </el-col>
            </el-row>
            <h2 class="receipt_item">国内采购商办证回执</h2>
            <el-row>
              <el-col>
                <span>尊敬的先生/女士：</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <p class="receipt_begin">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢您对广交会进口展区的支持！您的国内采购商办证申请已经顺利通过，
                  请与会前务必携带办证回执以及个人二代身份证原件及复印件，前往中国进出口商品交易会
                  展馆A区展馆西路人行道临时棚领取证件。以下是您的申请信息：</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item :label="language.name">
                  <span>{{receiptForm.applyUserName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="language.fee">
                  <span>{{receiptForm.totalPrice}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item :label="language.idCardNo">
                  <span>{{receiptForm.idcardNo}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="language.dayNumber">
                  <span>{{receiptForm.feeType}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="生效时间：">
                  <span>{{receiptForm.effectStartDate}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="language.licenseLocation">
                  <el-row>
                    <el-col>
                      <span>{{receiptForm.takeBadgeAddr}}</span>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item :label="language.certificate">
                  <barcode :value="receiptForm.idcardNo" :options="barcodeOption" class="barcodeclass" id="barcodeCanvas" v-if="!isReceiptPrint&&!dataURL"></barcode>
                  <img :src="dataURL" class="barcode-to-picture" v-else>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <span class="address-tips">注：A区新港东地铁站A出口白帐篷 国内采购商领证点</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <div class="receipt_footer">
                  <div>
                    <span>主办单位：中华人民共和国商务部</span>
                  </div>
                  <div>
                    <span class="receipt_footer_text">广东省人民政府</span>
                  </div>
                  <div>
                    <span>承办单位：中国对外贸易中心</span>
                  </div>
                  <div>
                    <span class="receipt_footer_telephone">广交会客户联络中心电话：</span>
                    <span>4000-888-999（境内）</span>
                  </div>
                </div>
                <img :src="bottomImgDataURL" class="img_bottom">
              </el-col>
            </el-row>
          </div>
          <el-form-item>
            <el-button icon="el-icon-close" @click="dialogVisible = false">{{language.cancel}}</el-button>
            <el-button icon="el-icon-printer" type="primary" @click="print" v-print="'#receiptPrint'">{{language.print}}</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>
<script>
import barcode from '@xkeshi/vue-barcode';
export default {
  data() {
    return {
      receiptForm: {},
      dialogVisible: false,
      barcodeOption: {
        displayValue: false, //是否展示条形码值
        // textPosition: 'top', //条形码数据显示的位置
        width: '1px', //单个条形码的宽度
        height: '30px',
        margin: 0,
        fontSize: '10px' //字体大小
      },
      isReceiptPrint: this.isPrintNow,
      dataURL: "",
      titleUrl: "../../../../../../static/img/impExbImg/receiptTitle.png",
      bottomUrl: "../../../../../../static/img/impExbImg/receiptBottom.png",
      titleImgDataURL: "",
      bottomImgDataURL: ""
    };
  },
  mounted() {
    //将本地静态图片转成base64
    this.getImgDataUrl(this.titleUrl, "titleImgDataURL");
    this.getImgDataUrl(this.bottomUrl, "bottomImgDataURL");
  },
  methods: {
    // 打印
    print() {
      this.dialogVisible = false;
      this.canvasSwitchImg();
    },
    //canvas转Images解决打印凭证空白bug
    canvasSwitchImg() {
      let canvas = document.getElementById('barcodeCanvas');
      this.dataURL = canvas ? canvas.toDataURL("image/png") : "";
      this.isReceiptPrint = true;
    },
    //base64图片显示 解决打印空白bug
    getImgDataUrl(url, dataUrl) {
      let image = new Image();
      image.src = url;
      image.onload = () => {
        this[dataUrl] = this.convertImgToBase64(image);
        // console.log(this[dataUrl]);
      };
    },
    //图片转base64
    convertImgToBase64(img) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      let dataURL = canvas.toDataURL("image/" + ext);
      return dataURL;
    }
  },
  components: {
    barcode
  }
};
</script>
<style scoped>
.receiptclass {
  width: 85%;
}
.barcodeclass {
  width: 100%;
}
.barcode-to-picture {
  width: 100%;
  height: 50px;
}
.address-tips {
  color: #909399;
}
.img_title {
  width: 60%;
  height: 50px;
}
.sessionclass {
  float: right;
  color: #ff0000;
}
.receipt_item {
  text-align: center;
}
.receipt_begin {
  line-height: 30px;
}
.receipt_footer {
  position: absolute;
  top: 30px;
  right: 10px;
  line-height: 35px;
  font-weight: 600;
}
.img_bottom {
  width: 100%;
  height: 300px;
}
.receipt_footer_text {
  margin-left: 70px;
}
.receipt_footer_telephone {
  color: #ff0000;
}
</style>
