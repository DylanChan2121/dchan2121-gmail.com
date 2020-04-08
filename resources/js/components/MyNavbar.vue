<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-04-06T20:36:11+01:00
-->



<template>
  <div>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <!-- <router-link to="/">Home</router-link> -->
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item-dropdown text="Courses" left>
        <b-dropdown-item to="/courses">View Courses</b-dropdown-item>
        <b-dropdown-item to="/courses/create">Create Courses</b-dropdown-item>
      </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Lecturers" left>
          <b-dropdown-item to="/lecturers">View lecturers</b-dropdown-item>
          <b-dropdown-item to="/lecturers/create">Create lecturers</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Enrolments" left>
            <b-dropdown-item to="/enrolments">View enrolments</b-dropdown-item>
            <b-dropdown-item to="/enrolments/create">Create enrolments</b-dropdown-item>
            </b-nav-item-dropdown>

    </b-navbar-nav>

    <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <!-- View user by id -->
          <router-link :to="`/users/1`">Profile</router-link>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "myNavbar",
  methods: {


    logout() {
      let token = localStorage.getItem('token');
      axios.get('api/logout',{
        headers:{ Authorization: "Bearer " + token}
          })
      .then(function (response) {
        console.log(error);
        })
      .catch(function(error){
        console.log(error);
      });

    localStorage.removeItem('token');
    }
  }
};
</script>
<style>
.navbar {
  margin-bottom: 40px;
}
</style>
