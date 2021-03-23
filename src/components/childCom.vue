<template>
    <div>
        <h1>hello 我是传过来的{{name}}</h1>
    </div>
</template>
<script>
export default {
    props: {
        name: string
    },
    data(){
        return {

        }
    }
}
</script>