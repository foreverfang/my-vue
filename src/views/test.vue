<template>
    <div class="test">
        <div class="box">
            hello fang
        </div>
        <ScopeSlot>
            <template v-slot:default="scope">
                {{scope.user.name}}
            </template>
        </ScopeSlot>
    </div>
</template>
<script>
const islogin = true
export default {
    components: {
        ScopeSlot: ()=>import('../components/scopeSlot')
    },
    data(){
        return {
            name: 'fang111'
        }
    },
    // 局部路由守卫
    beforeRouteEnter (to, from, next) {
        // ...
        if(islogin){
            next()
        }else {
            alert('没有登录')
        }
    }
}
</script>
<style>
.box {
    box-sizing: border-box;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border: 1px solid lightblue;
    background: lightcyan;
}
/*方案1 定位*/ 
/* body{
    position: relative;
}

.box {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px; 
    margin-top: -25px;  */
    /* transform: translate(-50%, 50%) */
/* } */

/* 方案2 display */
body{
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>