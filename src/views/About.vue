<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="onreset">重置</el-button>
    <KeywordInput v-model.trim="queryParams.keyword" @enter="searchList"></KeywordInput>
  </div>
</template>
<script>
import KeywordInput from "@/components/keywordInput.vue"
export default {
    data(){
        return {
            queryParams: {
                keyword: ""
            }
        };
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
        KeywordInput
    }

}
</script>
