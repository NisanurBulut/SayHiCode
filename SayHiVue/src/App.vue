<template>
  <div class="app">
     <header>
      <div class="order">
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
</style>