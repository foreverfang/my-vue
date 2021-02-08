<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="onreset">重置</el-button>
    <el-input v-model="form.input"></el-input>
    <KeywordInput v-model.trim="queryParams.keyword" @enter="searchList"></KeywordInput>
    <ElCascader></ElCascader>
  </div>
</template>
<script>
import KeywordInput from "@/components/keywordInput.vue"
import ElCascader from "@/components/elCascader.vue"
export default {
    data(){
        return {
            queryParams: {
                keyword: ""
            },
            form: {
                input: ''
            }
        };
    },
    created(){
        // this.form.input = ''
    },
    methods: {
        searchList() {
            console.log("keyword",this.queryParams.keyword);
        },
        onreset(){
            this.queryParams.keyword = "";
            this.searchList();
        }
    },
    components: {
        KeywordInput,
        ElCascader
    }

}
</script>
