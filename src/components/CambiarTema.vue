<script lang="ts">
import {ref} from 'vue'
export default{
    setup(){
      
        const selectTheme= ref<string>("coffee");
        const themes=ref<string[]>(["light", "dark", "cupcake", "cyberpunk", "coffee", "retro", "aqua"])
        const changeTheme=()=>{
            document.body.dataset.theme = selectTheme.value;
        };
        return{selectTheme, themes, changeTheme}; 
    },
};
</script>
<template>
  <nav class="bg-base-300 shadow-2xl fixed w-[100%] z-10">
    <div class="theme-controls">
        <label  :data-theme="theme" v-for="theme in themes" :key="theme" class="inline-flex content-between px-2 py-1 my-1 rounded-md">
        <input type="radio" :value="theme" v-model="selectTheme" @change="changeTheme"  class="radio radio-secondary">
        <p class="px-2">{{ theme }}</p>
        </label>
    </div>
  </nav>
</template>