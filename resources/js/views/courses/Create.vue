<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-04-06T17:49:50+01:00
-->



<template>
  <b-row>
    <b-col cols="8">

      <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
                  <ul>
                      <li v-for="error in errors" v-bind:key="error" >
                          {{ error }}
                      </li>
                  </ul>
              </p>
      <b-card title="Add Course" tag="article">
        <!-- change this code here -->
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter title"
            v-model="form.title"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Code:"
            label-for="input-2"
          >
          <b-form-input
            id="input-2"
            type="text"
            required
            placeholder="Enter code"
            v-model="form.code"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="codeValid">
           The code may not be greater than 5 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="codeValid">
            Looks Good.
          </b-form-valid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
          >
          <b-form-input
            id="input-3"
            type="text"
            required
            placeholder="Enter description"
            v-model="form.description"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Points:"
            label-for="input-4"
          >
          <b-form-input
            id="input-4"
            type="number"
            required
            placeholder="Enter points"
            v-model="form.points"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Level:"
            label-for="input-5"
          >
          <b-form-input
            id="input-5"
            type="number"
            required
            placeholder="Enter level"
            v-model="form.level"
          >
          </b-form-input>
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
      form: {
        title: '',
        code: '',
        description: '',
        points: '',
        level: ''
      },
      loggedIn: false,
      errors: []
    }
  },
  computed: {
    codeValid() {
      return this.form.code.length <= 5 && this.form.code.length > 0
    }
  },
  created() {
    console.log("hi");
    if (localStorage.getItem('token')) {
      this.loggedIn = true;

    }
    else {
      this.loggedIn = false;
      this.$router.push('/');

    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post('/api/courses', {
        title: app.form.title,
        code: app.form.code,
        description: app.form.description,
        points: app.form.points,
        level: app.form.level
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/courses');
      })
      .catch(function (error) {
        console.log(error.response.data);

    app.errors = Object.keys(error.response.data.errors).map(function(key, index) {
    return error.response.data.errors[key][0]
        })
      });











    }
  }
}
</script>
