<template>
  <div class="character-list">
    <p>Sortered by {{ sorter }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="character in characters" :key="character.id">
        <div class="row">
          <img :src="character.image_url" :alt="character.name" />
          <p>{{ character.description }}</p>
        </div>
     
        <div class="row">
         <p class="powers">{{ character.powers }}</p>
         <p class="location">{{ character.location }}</p>
        </div>
      </li>
    
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Character from "../types/Character";
import SortTerm from "../types/SortTerm";

export default defineComponent({
  props: {
    characters: {
      required: true,
      type: Array as PropType<Character[]>,
    },
    sorter: {
      type: String as PropType<SortTerm>,
      required: true,
    },
  },
  setup(props) {
    const sortedCharacters = computed(() => {
      return [...props.characters].sort((a: Character, b: Character) => {
        return a[props.sorter] > b[props.sorter] ? 1 : -1;
      });
    });
    return { sortedCharacters };
  },
});
</script>
<style scoped>

.row{
  display: flex;
  justify-content: space-between;
}

.character-list {
  max-width: 960px;
  margin: 40px auto;
}
.character-list ul {
  padding: 0;
}
.character-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.character-list li img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.location {
  color: #1a17bf;
  font-weight: bold;
  margin: 10px 4px;
}
.powers {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
</style>
