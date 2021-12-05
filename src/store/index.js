import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cards:[{info:"Padaria Azul", img:"https://picsum.photos/id/191/2560/1707.jpg"},
    {info:"Confeitaria esmeralda", img:"https://picsum.photos/id/193/3578/2451.jpg"},
    {info:"ABCookies", img:"https://picsum.photos/id/200/1920/1280.jpg"},
    {info:"Sem nome", img:"https://picsum.photos/id/211/1920/1280.jpg"},
    {info:"Abacaxi", img:"https://picsum.photos/id/26/4209/2769.jpg"},
    {info:"Biscoitaria", img:"https://picsum.photos/id/292/3852/2556.jpg"},
    {info:"Macã", img:"https://cdn.vuetifyjs.com/images/cards/cooking.png"},
    {info:"Irlanda", img:"https://picsum.photos/id/30/1280/901.jpg"},
    {info:"Netuno", img:"https://picsum.photos/id/315/2100/1500.jpg"},
  ],
    title:"Stuff",
    api:[],
  },
  mutations: {
    set_api(state,payload){
      state.api=payload
      console.log(state.api.url)
    }
  },
  actions: {
    fetchCats(){
      axios.get('https://thatcopy.pw/catapi/rest/')
      .then(res=>{
        console.log(res.data.url)
        const payload = res.data
        this.commit('set_api', payload)})
      .catch(err=>(console.log(err)))
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
