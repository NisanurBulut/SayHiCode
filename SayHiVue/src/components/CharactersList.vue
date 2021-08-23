<template>
  <div class="character-list">
    <ul>
      <li v-for="character in characters" :key="character.id">
        <h2>{{ character.name }} in {{ character.location }}</h2>
        <div class="salary">
          <p>{{ character.powers }}</p>
        </div>
        <div class="description">
          <p>{{character.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Character from "../types/Character";

export default defineComponent({
  props: {
    characters: {
      required: true,
      type: Array as PropType<Character[]>,
    },
  },
  setup() {},
});
</script>
<style scoped>
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
  .character-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .powers {
    display: flex;
  }
  .powers img {
    width: 30px;
  }
  .powers p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
</style>