<template>
<li>
        <div class="row">
          <h2>{{character.name}}</h2>
        </div>
        <div class="row">
          <img :src="character.image_url" :alt="character.name" />
          <p>{{ character.description }}</p>
        </div>
     
        <div class="row">
         <p class="powers">{{ character.powers }}</p>
         <p class="location">{{ character.location }}</p>
        </div>
      </li>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Character from "../types/Character";

export default defineComponent({
  name: 'CharacterItem',
  props: {
    character: {
      required: true,
    }
  }
});
</script>
<style scoped>
.sort-text {
    color: white;
  font-weight: bold;
}
.row{
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.character-list {
  max-width: 960px;
  margin: 40px auto;
}
  .character-list h2 {
      color:#014EFE;
    margin: 0 0 10px;
    text-transform: capitalize;
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
