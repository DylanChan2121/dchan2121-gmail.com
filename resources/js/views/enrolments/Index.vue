<!--
@Date:   2020-04-06T20:16:21+01:00
@Last modified time: 2020-04-06T23:42:46+01:00
-->
<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Date</b-th>
            <b-th>Time</b-th>
            <b-th>status</b-th>
            <b-th>course title</b-th>
              <b-th>lecturer name</b-th>
          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="(item, index) in items" :key="item.id">
            <b-td>{{ item.date }}</b-td>
            <b-td>{{ item.time }}</b-td>
            <b-td>{{ item.status }}</b-td>
            <b-td>{{item.course.title}}</b-td>
              <b-td>{{item.lecturer.name}}</b-td>

            <b-td><router-link :to="`/enrolments/edit/${item.id}`">Edit</router-link></b-td>
            <b-td><button v-on:click="deleteEnrolments(item.id, index)">delete</button></b-td>
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
    axios.get('/api/enrolments', {
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
    deleteEnrolments(id, index){
      let app = this;
      let token = localStorage.getItem('token');
      axios.delete('/api/enrolments/'+id,{
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
