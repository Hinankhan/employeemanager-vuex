<template>
  <section>
    <b-container class="mt-5">
      <ui-button
        color="accent"
        icon="keyboard_backspace"
        type="secondary"
        @click="toHome"
        >Back to home</ui-button
      >
      <h2 class="text-center">Edit Employee</h2>
      <employee-form :isEdit="true"></employee-form>
      <hr />
    </b-container>
  </section>
</template>


<script>
import employeeForm from "./employeeForm.vue";
export default {
  components: { employeeForm },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>