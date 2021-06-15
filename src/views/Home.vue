<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Title msg="This is your home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>
