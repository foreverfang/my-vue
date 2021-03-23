<template>
    <div>
        <div v-if="loading" style="background: lightblue">
            loading...
        </div>
        <div v-if="post">
            <h2>已加载数据！</h2>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loading: true,
            post: false
        }
    },
    created(){
        this.getData()
    },
    watch: {
        $route(){
            this.getData()
        }
    },
    methods: {
        getData(){
            setTimeout(() => {
                this.loading = false
                this.post = true
            }, 3000)
        }
    }
}
</script>