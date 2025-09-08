import { createStore } from "vuex";
import api from "../api/index.js";
const store = createStore({
  state: {
    isCollapse: false, //Control sidebar collapse
    isManager: false, //Whether is administrator
    tabsList: [
      //Breadcrumb data  //When clicking menu, add new data to breadcrumb;
      {
        path: "/home",
        name: "home",
        label: "Home",
        icon: "HomeFilled",
      },
    ],
    role: "",
    username: "", //Student's username
  },
  mutations: {
    getUsername(state) {
      if (sessionStorage.getItem("role") === "student") {
        //student
        api.get("/getUserInfo").then((res) => {
          console.log("Retrieved user information", res.data.data.username);
          if (res.data.flag === true) {
            state.username = res.data.data.username;
            console.log("vuex obtained username is ", state.username);
          }
        });
      } else {
        //admin
        state.username = "";
      }
    },
    getRole(state) {
      state.role = sessionStorage.getItem("role");
      console.log("vuex obtained user role:", state.role);
    },
    inittabList(state) {
      state.tabsList = [
        //Breadcrumb data  //When clicking menu, add new data to breadcrumb;
        {
          path: "/home",
          name: "home",
          label: "Home",
          icon: "HomeFilled",
        },
      ];
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse; //collapse;
      console.log("vuex!!====", state.isCollapse);
    },
    // confirmManager(state){ //Confirm as administrator, call this function
    //
    //     state.isManager=true;
    //     console.log("isManager value changed to",state.isManager)
    // },
    // confirmStudent(state){ //
    //     state.isManager=false;
    //     console.log("isManager value changed to",state.isManager)
    // },
    //Update breadcrumb
    updateBread(state, val) {
      //state is the state object in state, val is the data obtained when clicking menu
      console.log("Clicked navigation val is", val); //val is the object when clicking page menu

      //First must not be home page  //home page appears by default
      if (val.name !== "home") {
        //Then judge whether the clicked page has not appeared before.///////// Because home already exists in tablelist
        //findIndex() traverses array, parameter is the element in array
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        //If not found, return -1, then can add element;
        if (index === -1) {
          console.log("not found this element");
          state.tabsList.push(val);
        }
      }
    },
    //Delete tag
    closetag(state, item) {
      console.log("closetag's item is ", item); //Get the information of the clicked delete tag.
      for (let i = 0; i <= state.tabsList.length; i++) {
        //Traverse to find and delete.
        if (state.tabsList[i] === item) {
          state.tabsList.splice(i, 1);
          break;
        }
      } //Traverse and delete
      console.log("tablist length is", state.tabsList.length);
    },
  },
});
export default store;
