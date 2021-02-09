<template>
  <b-container>
    <form @submit.prevent="isEdit ? onUpdate() : onSubmit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <ui-textbox
            :class="{ error: errors.has('name') }"
            v-validate="'required|alpha'"
            name="name"
            type="text"
            floating-label
            label="Name"
            icon="person"
            placeholder="Enter your name"
            v-model="enteredname"
          ></ui-textbox>
          <span class="error" v-if="errors.has('name')">{{
            errors.first("name")
          }}</span>
        </div>
        <div class="form-group col-md-6">
          <ui-textbox
            :class="{ error: errors.has('email') }"
            v-validate="'required|email'"
            name="email"
            type="text"
            floating-label
            label="Email"
            icon="email"
            placeholder="Enter your Email"
            v-model="enteredEmail"
          ></ui-textbox>
          <span class="error" v-if="errors.has('email')">{{
            errors.first("email")
          }}</span>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <ui-datepicker
            :class="{ error: errors.has('date') }"
            v-validate="'required'"
            floating-label
            icon="date_range"
            class="material-icons"
            label="Date of Joining"
            placeholder="Select date of joining"
            type="text"
            name="date"
            v-model="enteredDate"
            :custom-formatter="pickerFormatter"
            @close="OnDate()"
          ></ui-datepicker>
          <span class="error" v-if="errors.has('date')">{{
            errors.first("date")
          }}</span>
        </div>
        <div class="form-group col-md-6">
          <ui-textbox
            :class="{ error: errors.has('phone') }"
            v-validate="'required|numeric'"
            name="phone"
            floating-label
            icon="phone"
            label="Phone number"
            placeholder="Enter your phone number"
            type="tel"
            v-model="enteredMobile"
          ></ui-textbox>
          <span class="error" v-if="errors.has('phone')">{{
            errors.first("phone")
          }}</span>
        </div>
      </div>
      <div class="button">
        <ui-button color="accent" size="normal">
          {{ isEdit ? "Update Employee" : "Add Employee" }}</ui-button
        >
      </div>
    </form>
  </b-container>
</template>
<script>
export default {
  props: ["isEdit"],
  data() {
    return {
      enteredname: "",
      enteredEmail: "",
      enteredMobile: "",
      enteredDate: null,
    };
  },
  mounted() {
    if (this.isEdit) {
      let employeeId = this.$route.params.id;
      let editItems = this.$store.state.items;
      let editData = editItems.find((el) => el.id === employeeId);
      this.enteredname = editData.name;
      this.enteredEmail = editData.email;
      this.enteredMobile = editData.phone;
      this.enteredDate = editData.date_of_joining;
    }
  },
  methods: {
    OnDate() {
      event.preventDefault();
    },
    pickerFormatter(date) {
      return date
        .toLocaleDateString("ja", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "-");
    },

    onSubmit() {
      this.$validator.validate().then((isValid) => {
        if (!isValid) {
          return;
        }
        let enteredEmployeeData = {
          id: Date.now(),
          name: this.enteredname,
          email: this.enteredEmail,
          phone: this.enteredMobile,
          date_of_joining: this.enteredDate,
        };
        this.$store.dispatch("onSubmit", enteredEmployeeData);
        this.$router.push("/");
      });
    },
    onUpdate() {
      let employeeId = this.$route.params.id;
      const employee_data = {
        id: employeeId,
        name: this.enteredname,
        email: this.enteredEmail,
        phone: this.enteredMobile,
        date_of_joining: this.enteredDate,
      };
      this.$store.dispatch("onUpdate", employee_data);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.button {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
span.error {
  color: #9f3a38;
}
.ui-button--type-primary.ui-button--color-accent {
  width: 32%;
  border-radius: 18px;
  box-shadow: 8px 8px 10px #d1d1d1, -8px -8px 10px #ffffff;
}
</style>
