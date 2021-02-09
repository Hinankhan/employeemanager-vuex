
<template>
  <b-container class="mt-5">
     <ui-button
        color="accent"
        icon="keyboard_backspace"
        type="secondary"
        @click="toHome"
        >Back to home</ui-button
      >
    <h2 class="text-center">Create Employee</h2>
    <employee-form :isEdit="false"></employee-form>
    <hr />
  </b-container>
</template>


<script>
import EmployeeForm from "./employeeForm.vue";

export default {
  components: {
    EmployeeForm,
  },
  data() {
    return {};
  },
   methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
/* hr {
  color: blue;
  border: 1px solid;
} */
</style>