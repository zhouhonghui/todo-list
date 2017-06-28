<template>
  <div id="app">
     <h1>{{title}}</h1> 
     <div>
       <input type="text" v-model="newitems" @keyup.enter="additem">
     </div>
     <ul>
       <li v-for="item in items" v-bind:class="{finsh:item.finsh}" v-on:click="finsh(item)">{{item.label}}</li>
     </ul>
  </div>
</template>

<script>
import store from './store.js'
console.log(store)
export default {
  name: 'app',
  data () {
    return {
      title: 'this is a vue todo list',
      items:store.fetch(),
      newitems:''
    }
  },
  watch:{
      items:{
        handler:function(items){
          store.save(items)
        },
        deep:true
      }
  },
  methods:{
    finsh:function(item){
      item.finsh=!item.finsh
    },
    additem:function(){
      console.log(this.newitems)
      this.items.push({
            label:this.newitems,
            finsh:false
          })
      this.newitems=''
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: #f00;
  padding-bottom: 50px;
}
input{
  width: 500px;
  height: 30px;
}
ul{
  padding: 50px 0px;
}
li{
  list-style: none;
  line-height: 30px;
}
li:nth-child(2n+1){
  background: #ccc;

}
.finsh{
  display: none;
}
</style>
