<!--
@Date:   2020-03-26T17:40:34+00:00
@Last modified time: 2020-03-27T19:51:19+00:00
-->



<template>
  <div>
  

    <MyNavbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<script>
import MyNavbar from './components/MyNavbar'
import Example from './components/Example'
export default {
  name: 'app',
  components: {
    Example,
    MyNavbar
  },
  data() {
    return {

    }
  }
}
</script>
<style>
</style>
