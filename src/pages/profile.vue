<!-- <template>Profile</template> -->
<script setup lang="ts">
import EPWorld from "@/components/EP-World.vue"
import HelloWorld from '@/components/HelloWorld.vue';                   




</script>
<template>
    <div>
      <EPWorld
        :title="'EP World Profile'"
        :count="1000"
        
        />
       
        <HelloWorld /> 
       
    </div>
</template>