<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-03-27T20:38:06+00:00
-->
 <template>
  <div>
    Test Login <br>
    <button @click="login()">Login</button>
    <br>
    Test Logout <br>
    <button @click="logout()">Logout</button>
    <br>
    Test courses <br>
    <button @click="getCourses()"> Get Courses </button>
  </div>
</template>
<script>
export default {
  name: 'example',
  components: {

  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      courses: []
    }
  },
  mounted() {
    if (localStorage.getItem('token') !== null) {
      console.log('***USER LOGGED IN***');
    }
    else {
      console.log('user not logged in');
    }
  },
  methods: {
    login() {
      let app = this;
      axios.post('/api/login', {
        email: app.email,
        password: app.password
      })
      .then(function(response) {
        console.log(response.data);
        app.name = response.data.name;
        app.email = response.data.email;
        localStorage.setItem('token', response.data.token);
      })
      .catch(function (error) {
        console.log(error);
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

    logout() {
      let token = localStorage.getItem('token');
      axios.get('api/logout',{
        headers:{ Authorization: "Bearer " + token}
          })
      .then(function (response) {
        console.log(response);
        })
      .catch(function(error){
        console.log(error);
      });

    localStorage.removeItem('token');
    }
  }
}
</script>
<style>
</style>
