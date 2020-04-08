<!--
@Date:   2020-04-06T20:30:45+01:00
@Last modified time: 2020-04-07T00:27:08+01:00
-->
<template>
  <b-row>
    <b-col cols="8">


      <b-card title="Add Enrolment" tag="article">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Date:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            type="date"
            required
            placeholder="Enter Date"
            v-model="enrolment.date"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Time:"
            label-for="input-2"
          >
          <b-form-input
            id="input-2"
            type="time"
            required
            placeholder="Enter time"
            v-model="enrolment.time"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Status:"
            label-for="input-3"
          >

          <b-form-input
            id="input-3"
            type="text"
            required
            placeholder="status must be as follows: assigned, associate, interested or career_break. "
            v-model="enrolment.status"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="course_id"
            label="Courses:"
            label-for="input-5"
          >

          <b-form-select
          name='courses'
          v-model='enrolment.course'
          class='form-control'>

          <option
          placeholder="Select a course"
          v-for="course in courses"
          v-bind:value='course.id'>
          {{course.title}}
        </option>

      </b-form-select>
    </b-form-group>

    <b-form-group
      id="lecturer_id"
      label="Lecturer:"
      label-for="input-5"
    >

    <b-form-select
    name='lecturers'
    v-model='enrolment.lecturer'
    class='form-control'>

    <option
    placeholder="Select a lecturer"
    v-for="lecturer in lecturers"
    v-bind:value='lecturer.id'>
    {{lecturer.name}}
  </option>

</b-form-select>
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
      enrolment:{},
        date: '',
        time: '',
        status: '',
        courses: '',
        lecturers: '',

      loggedIn: true,
      errors: [],
      courses: [],
      lecturers: []
    }
  },

  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }

    this.getCourses();
    this.getLecturers();
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post(`/api/enrolments`, {
        date: app.enrolment.date,
        time: app.enrolment.time,
        status: app.enrolment.status,
        course_id: app.enrolment.course,
        lecturer_id: app.enrolment.lecturer,
      }, {
        headers: { Authorization: "Bearer " + token}
      })
      .then(function(response) {
        app.$router.push('/enrolments');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });
    },
    getCourses() {
      let app = this;
      let token = localStorage.getItem('token');
      axios.get('/api/courses', {
        headers: { Authorization: "Bearer " + token}
      })
      .then(function (response) {
         console.log(response.data);
         app.courses = response.data.data;
      })
      .catch(function (error) {
         console.log(error);
      })
    },
    getLecturers() {
      let app = this;
      let token = localStorage.getItem('token');
      axios.get('/api/lecturers', {
        headers: { Authorization: "Bearer " + token}
      })
      .then(function (response) {
         console.log(response.data);
         app.lecturers = response.data.data;
      })
      .catch(function (error) {
         console.log(error);
      })
    },
  }
}
</script>
