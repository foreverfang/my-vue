<template>
    <div class="test">
        <div class="box">
            hello fang
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
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