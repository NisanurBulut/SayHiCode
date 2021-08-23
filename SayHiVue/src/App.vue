<template>
  <div class="app">
    <CharactersList :characters="characters" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Character from "./types/Character";
import CharactersList from "./components/CharactersList.vue";

export default defineComponent({
  name: "App",
  components: { CharactersList },
  setup() {
    const characters = ref<Character[]>([]);
    return { characters };
  }
});
</script>

<style></style>
