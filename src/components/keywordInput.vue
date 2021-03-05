<template>
    <div>
        <el-input
            v-model.trim="myvalue"
            placeholder="请输入"
            @change="change"
            @input="$emit('input', $event)"
            style="width:250px"
            @keyup.enter.native="search"
        >
            <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
            <i slot="prefix" class="el-icon-circle-close" style="position: absolute;top:10px;margin-left:200px" @click="close" v-if="myvalue !=''"></i>
        </el-input>
    </div>
</template>
<script>

/**
 * 模糊查询输入框
 */
export default {
  name: "KeywordInput",
  props: {
    value: {
      require: true,
      type: String,
      default: ''
    }
  },
  customOption: 1,
  data() {
    return {
        myvalue: this.value
    }
  },
  created(){
      console.log("customOption:",this.$options.customOption)
  },
  watch: {
      value: function(val){
          this.myvalue = val;
      }
  },
  methods: {
    search(){
      this.$emit("enter", this.myvalue);
    },
    change(){
      this.$emit('input', this.myvalue);
    },
    close() {
      this.myvalue = ''
      this.$emit('input', this.myvalue);
      this.search();
    }
  }
};

</script>
