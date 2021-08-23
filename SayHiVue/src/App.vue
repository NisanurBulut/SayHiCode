<template>
  <div class="app">
     <header>
        <div class="title">
        <img src="./assets/winx.png" alt="site logo">
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="sorter">
        <button @click="handleClick('name')">Sort by name</button>
        <button @click="handleClick('power')">Sort by power</button>
        <button @click="handleClick('location')">Sort by location</button>
      </div>
    </header>
    <CharacterList :characters="characters" :sorter="sorter"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Character from './types/Character';
import SortTerm from './types/SortTerm';
import CharacterList from './components/CharactersList.vue'
export default defineComponent({
  name: 'App',
  components: { CharacterList },
  setup() {
    const characters = ref<Character[]>([
      {id:"1",name:"Bloom",description:"",location:"",powers:"",image_url:""}
    ])
   const sorter = ref<SortTerm>('name')
    const handleClick = (term: SortTerm) => {
      sorter.value = term
    }
    return { characters, sorter, handleClick }
  }
});
</script>
<style>
  header {
    text-align: center;
  }
  header .sorter {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
   header .title{
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>