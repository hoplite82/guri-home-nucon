<script setup lang="ts">
const answer = ref("Answer2")
const form = ref<HTMLFormElement | undefined >(undefined)
let loading = false
async function sendMail(){
    loading = true
    const formdata = new FormData(form?.value)

    const {data,pending,error} = await useFetch(".netlify/functions/hello-world",{method: "post",body: formdata})
    
    setAnswer(data?.value+"")
    loading = false
}

function setAnswer(ans: string){
    answer.value = ans
}
</script> 
<template>
    <form ref="form">
        <input type="text" name="name">
        
    </form>
    <button @click="sendMail">Submit</button>
    <PrimeButton class="btn btn-primary rounded-pill" @click="sendMail" icon="pi pi-send" type="submit" label="Submit" :loading="loading" />
    <p>{{ answer }}</p>
   
</template>