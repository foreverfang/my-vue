<template>
    <div>
        <span @click="handleClick">props：{{test}}</span>
        <slot name="mySlot"></slot> <!--具名插槽-->
        <p>========================</p>
        <slot></slot> <!--默认插槽-->
    </div>
</template>
<script>
export default {
    name: 'BaseComponent',
    props: {
        test: Number
    },
    methods: {
        handleClick(){
            this.$emit('customize-click')
        }
    }
}
</script>