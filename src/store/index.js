import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100
    },
    getters: {},
    mutations: {
        countMutation(state) {
            console.log('触发了mutation')
            state.count++
        }
    },
    actions: {
        getCountAction(obj) {
            console.log('action触发', obj)
            obj.commit("countMutation")
        }
    },
    modules: {
        m1: {
            namespaced: true,
            state: {
                myName: 'fang'
            },
            mutations: {
                getNameMutation(state) {
                    state.myName += 1
                }
            },
            actions: {
                getNameAction(context) {
                    context.commit("getNameMutation")
                }
            }
        },
        m2: {

        }
    }
})

export default store;