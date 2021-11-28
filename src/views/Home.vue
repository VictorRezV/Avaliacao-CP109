<template>
  <div>
    <h1>{{title}}</h1>
    <v-row>
      <v-col
        v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        md="4"
        xs="2"
      >
        <MyCard :cardId="i" :cardInfo="data" ></MyCard>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  import MyCard from '../components/MyCard'

  export default {
    name: 'Home',
    data(){
      return{
        titleview:this.$store.state.title
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    },
    components: {
      MyCard,
    },
  }
</script>
