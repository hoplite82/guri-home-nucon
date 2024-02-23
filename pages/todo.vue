<script>
const token = "e5d85bcbcb9265ab84624e37ea488b9b47471306";
import { TodoistApi } from "@doist/todoist-api-typescript";
import { ref, onMounted } from "vue";

export default {
  name: "TodoistProject",
  props: {},
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData() {
      loading.value = true;
      // I prefer to use fetch
      const api = new TodoistApi(token);
      return api
        .getProjects()
        .then((json) => {
          // set the response data
          data.value = json.data;
        })
        .catch((err) => {
          error.value = err;
          // In case a custom JSON error response was provided
          if (err.json) {
            return err.json.then((json) => {
              // set the JSON response message
              error.value.message = json.message;
            });
          }
        })
        .then(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
    };
  },
};
</script>
<template>
  <div>
    <h1>Todos</h1>
    <ul v-if="!loading && data && data.length">
      <li v-for="p of data">
        <p><strong>{{ p.name }}</strong></p>
        <p></p>
      </li>
    </ul>

    <p v-if="loading">Still loading..</p>
    <p v-if="error"></p>
  </div>
</template>
