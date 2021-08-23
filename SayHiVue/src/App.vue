<script langs="ts">
import { defineComponent, ref} from 'vue';
import Character from './types/Character';
export default defineComponent({
  name: 'App',
  components:{},
  setup(){
    const characters=ref<Character[]>([
      {
        
      }
    ]);
  }
});
</script>

<style>

</style>
