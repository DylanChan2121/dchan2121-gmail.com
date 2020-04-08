<!--
@Date:   2020-03-28T19:17:44+00:00
@Last modified time: 2020-04-07T00:12:24+01:00
-->
<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>Address</b-th>
            <b-th>Email</b-th>
            <b-th>Phone</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="(item, index) in items" :key="item.id">
            <b-td>{{ item.name }}</b-td>
            <b-td>{{ item.address }}</b-td>
            <b-td>{{ item.email }}</b-td>
            <b-td>{{ item.phone }}</b-td>

            <b-td><router-link :to="`/lecturers/edit/${item.id}`">Edit</router-link></b-td>
            <b-td><button v-on:click="deleteLecturer(item.id, index)">delete</button></b-td>
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
    axios.get('/api/lecturers', {
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
    deleteLecturer(id, index){
      let app = this;
      let token = localStorage.getItem('token');
      axios.delete('/api/lecturers/'+id,{
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
.createCard {
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
  background-color: #DC143C;
}
</style>
