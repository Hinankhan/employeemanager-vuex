import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)


export default new Vuex.Store({
  state() {
    return {
      items: [],
    }
  },
  mutations: {
    deleteData(state, id) {
      let idd = id;
      state.items = state.items.filter((item) => item.id !== idd);
      let employee_data_array = JSON.parse(localStorage.getItem("items"));
      for (let i = 0; i < employee_data_array.length; i++) {
        if (employee_data_array[i].id == idd) {
          employee_data_array.splice(i, 1);
          localStorage.setItem("items", JSON.stringify(employee_data_array));
        }
      }
      JSON.parse(localStorage.getItem("items"));
    },
    // add employee
    onSubmit(state, payload) {
      let employeeData = payload

      const newEmployee = {
        id: employeeData.id,
        name: employeeData.name,
        email: employeeData.email,
        phone: employeeData.phone,
        date_of_joining: employeeData.date_of_joining,
      };
      console.log('newEmployee', newEmployee)

      let newItems
      if (localStorage.getItem("items")) {
        newItems = state.items
        console.log('new items', newItems)
      } else {
        newItems = new Array();
        console.log('new items else', newItems)
      }
      newItems.push(newEmployee);
      localStorage.setItem("items", JSON.stringify(newItems)); // save to local storage
      // }

    },
    //update employee
    onUpdate(state, payload) {
      console.log('payload', payload)
      let updatedData = state.items
      let employeeId = payload.id
      // let item_data_array = JSON.parse(localStorage.getItem("items")); // parse code
      for (let i = 0; i < updatedData.length; i++) {
        if (updatedData[i].id == employeeId) {
          updatedData.splice(i, 1, payload);
          localStorage.setItem("items", JSON.stringify(updatedData));
        }
      }
    },
  },
  actions: {
    deleteData(context, id) {
      context.commit('deleteData', id)
    },
    onSubmit(context, payload) {
      context.commit('onSubmit', payload)
    },
    onUpdate(context, payload) {
      context.commit('onUpdate', payload)
    }
  },
  getters: {
    items(state) {
      return state.items
    },
  }
})