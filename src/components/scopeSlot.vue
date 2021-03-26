<template>
    <div>
        <h1>作用域插槽：</h1>
        <slot v-bind:user="user">
            {{user.name}}
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user: {
                name: 'fang666'
            }
        }
    }
}
</script>