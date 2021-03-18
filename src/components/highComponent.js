export default function HighComponent(WrappedComponent) {
    return {
        // 高阶组件 非侵入式  1、透传 props 2、透传没有被声明为 props 的属性 3、透传事件
        name: 'HighComponent',
        mounted() {
            console.log('已经加载完成')
        },
        props: WrappedComponent.props,
        render(h) {
            // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
            const slots = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => { // 手动更正context
                    vnode.context = this._self
                    return vnode
                })

            return h(WrappedComponent, {
                on: this.$listeners,
                attar: this.$attar,
                props: this.$props,
                // 透传 scopedSlots
                scopedSlots: this.$scopedSlots
            }, slots) // 将 slots 作为 h 函数的第三个参数
        }
    }
}

// 高阶组件，侵入式
// export default function HighComponent(WrappedComponent) {
//     return {
//         template: '<wrapped v-on="$listeners" v-bind="$attrs"/>',
//         components: {
//             wrapped: WrappedComponent
//         },
//         mounted() {
//             console.log('I have already mounted')
//         }
//     }
// }