<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-04-07T00:09:09+01:00
-->



<template>
  <b-row align-h="center">
    <b-col cols="8">
      <h3 v-if="!loggedIn">You are not logged in!!</h3>
      <b-card
        v-else
        title="Edit Course"
        tag="article"
      >

        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="course.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Code:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="course.code"
              type="text"
              required
              placeholder="Enter code"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="course.description"
              type="text"
              required
              placeholder="Enter description"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Points:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="course.points"
              type="number"
              required
              placeholder="Enter points"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Level:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="course.level"
              type="number"
              required
              placeholder="Enter level"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        course: {},
        show: true,
        loggedIn: false
      }
    },
    created() {
      // console.log(localStorage.getItem('token'));
      if (localStorage.getItem('token')) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }

      let app = this;
      let token = localStorage.getItem('token');
      axios.get(`/api/courses/${app.$route.params.id}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(function (response) {
        app.course = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        let app = this;
        let token = localStorage.getItem('token');
        axios.put(`/api/courses/${app.$route.params.id}`, {
            title: app.course.title,
            code: app.course.code,
            description: app.course.description,
            points: app.course.points,
            level: app.course.level,
        },
        {
          headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
          app.$router.push('/courses');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style>

body {
  background-color:#ebebeb;
}

.createCard {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  background-color: #DC143C;
}

.my-title{
  color:#ffffff;
}

.my-input{
  color:#ffffff;
}
</style>
