<script setup>
const token = "e5d85bcbcb9265ab84624e37ea488b9b47471306"
import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi(token)
var t = ['p1','p2']

const {data } = await api.getProjects();

</script>
<template>
    <main>
        <h1>Todos</h1>
        Projects
        <ul>
           <li v-for="p in t" :key="p.id"> {{p.name}}
            </li> 
        </ul>
        conecting to guri project
        
    </main>
</template>