<template>
  <div class="settings">
    <Title msg="Settings" />
    <h3>{{ userName }}</h3>
    <h4>{{ userSurname }}</h4>
    <hr />
    <h4>Número de likes:</h4>
    <div class="contador">
      <button @click="acumular(-1)">-</button>
      <p>{{ number }}</p>
      <button @click="acumular(+1)">+</button>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Settings",
  components: {
    Title,
  },
  computed: {
    ...mapState([
      "userName", "userSurname", "number"
    ])
  },
  methods: {
    ...mapActions([
      "acumular"
    ])
  }
};
</script>

<style lang="scss" scoped>
  .contador {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
