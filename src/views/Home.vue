<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <base-component :test="1" @customize-click="handleMyClick">
      <h2 slot="mySlot">BaseComponent slot</h2>
      <p>default slot</p>
    </base-component>
    <enhanced-com :test="2">
      <h2 slot="mySlot">EnhancedComponent slot</h2>
      <p>default slot</p>
    </enhanced-com>
    <h1>hello 我是传过来的{{name}}</h1>
    <hr>
    <span>{{$store.state.name}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseComponent from '@/components/baseComponent.vue'
import highComponent from "@/components/highComponent.js"
const EnhancedCom = highComponent(BaseComponent)

export default {
  name: 'Home',
  props: {
    name: {
        type: String
    }
  },
  components: {
    HelloWorld: ()=>import('@/components/HelloWorld.vue'),
    EnhancedCom,
    BaseComponent
  },
  methods: {
      handleMyClick(val){
          console.log('点个寂寞', val)
      }
  }
}
</script>
