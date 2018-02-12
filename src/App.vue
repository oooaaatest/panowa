<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Comment-Modal></Comment-Modal>
  </div>
</template>

<script>
import './theme/css/panova.css'
import CommentModal from './components/CommentModal'

export default {
  name: 'app',
  components: {
    CommentModal: 'Comment-Modal'
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
