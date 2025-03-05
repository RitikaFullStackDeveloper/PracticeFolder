<template>
    <div>
        <!-- {{ title }}
        {{ count }}
        {{ varName }} -->

        <v-text-feild 
        v-model="varName"
        lable=""></v-text-feild>
       
        <!-- {{ '--------' }} -->
        {{ varName }}
        <!-- <button @click="clickHere('EP new title')">Click Me</button> -->

        <label for="name">"enter your name"</label>
        <input
        type="text"
        v-model="varName"
        @input="handleInput
        }"
        >
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { onMounted,ref } from 'vue';


// defineProps<{
//     title:string
// }
// >()

const props = withDefaults(defineProps<{
    title:string;
    count?: number
}>(),{
    count:0
});

const varName = ref<string>('empty')



onMounted(()=>{
    console.log("title----->",props.title)
    varName.value = props.title
})

onBeforeMount(()=>{
    console.log("title onBeforeMount ---->", props.title)
})
 const clickHere =(newTitle : string="")=>{
    console.log(newTitle)
    varName.value = newTitle
 }

 const handleInput
</script>