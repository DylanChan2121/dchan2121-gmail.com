<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-03-27T22:47:27+00:00
-->



<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Title</b-th>
            <b-th>Code</b-th>
            <b-th>Description</b-th>
            <b-th>Points</b-th>
            <b-th>Level</b-th>
            <b-th>Actions</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="(item, index) in items" :key="item.id">
            <b-td>{{ item.title }}</b-td>
            <b-td>{{ item.code }}</b-td>
            <b-td>{{ item.description }}</b-td>
            <b-td>{{ item.level }}</b-td>
            <b-td>{{ item.points }}</b-td>
            <b-td><router-link :to="`/courses/edit/${item.id}`">Edit</router-link></b-td>
              <b-td><button v-on:click="deleteCourse(item.id, index)">delete</button></b-td>
          </b-tr>
        </b-body>
      </b-table-simple>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/courses', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.items = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {
    // original
    deleteCourse(id, index){
      let app = this;
      let token = localStorage.getItem('token');
      axios.delete('/api/courses/'+id,{
        headers: { Authorization: "Bearer " + token}
      })
      .then(function(response){
        console.log(response.data);
        app.$delete(app.items, index);
      })
    }
  }
}
</script>
<style>
</style>
