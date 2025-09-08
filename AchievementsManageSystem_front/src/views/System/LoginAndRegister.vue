<template>
  <div class="base">
    <!-- Registration and Login Interface -->
    <div class="loginAndRegist">
      <!-- Login Form -->
      <div class="loginArea">
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Slogan -->
          <div v-show="isShow" class="title">
            LOGIN
          </div>
        </transition>
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Login Box -->
          <div v-show="isShow" class="pwdArea">
            <div style="flex: 1;justify-content: center;align-items: center">
              <el-form :model="formData" label-width="auto" label-position="top"
                style="margin-left: 22%;margin-right:30% ">
                <el-form-item label="Username" style="margin-bottom: 0;margin-top: 6%">
                  <el-input v-model="formData.username" placeholder="Input your UserID" clearable></el-input>
                </el-form-item>
                <el-form-item label="Password" style="margin-bottom: 0">
                  <el-input v-model="formData.password" placeholder="Input your password" show-password type="password"
                    clearable></el-input>
                </el-form-item>


              </el-form>
            </div>

          </div>
        </transition>
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Login Button -->
          <div v-show="isShow" class="btnArea">
            <el-button type="success" round
              style="width: 100px;margin-left: 25%;background-color:rgba(97,116,131,0.22);border: 1px solid #ccc8c8;letter-spacing: 2px"
              @click="login">Login
            </el-button>
          </div>
        </transition>
      </div>


      <!-- Registration Form -->
      <div class="registArea">
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Registration Header -->
          <div v-show="!isShow" class="rigestTitle">
            REGISTER
          </div>
        </transition>
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Registration Form Content -->
          <div v-show="!isShow" class="registForm">
            <el-form :model="ruleForm" :rules="rules" ref="checkForm" status-icon label-width="auto">
              <el-form-item label="UserID" style="margin-bottom: 17px;margin-top: 3%" prop="username">
                <el-input v-model="ruleForm.username" placeholder="Input your UserID" clearable></el-input>
              </el-form-item>
              <el-form-item label="Password" style="margin-bottom: 10px;margin-top: 0" prop="password">
                <el-input show-password type="password" placeholder="Input your Password" v-model="ruleForm.password"
                  autocomplete="off"></el-input>
              </el-form-item>
              <div class="demo-progress" style="margin-left:25%;height: 15px;margin-top: 13px">
                <el-progress striped striped-flow :duration="8" style="width: 240px;" :percentage="progressLength"
                  :format="format" :color="getColor" />
              </div>
              <el-form-item label="Confirm Password" style="margin-bottom: 17px;margin-top: 3px" prop="checkPass">
                <el-input show-password type="password" placeholder="Input the same password"
                  v-model="ruleForm.checkPass" autocomplete="off" maxlength="12"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </transition>
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Registration Button -->
          <div v-show="!isShow" class="registBtn">
            <el-button type="success" round
              style="width: 100px;margin-left:37%;background-color: rgba(97,116,131,0.22);border: 1px solid #ccc8c8;letter-spacing: 2px"
              @click="register">Signup
            </el-button>
            <el-button type="success" round
              style="background-color: rgba(97,116,131,0.22);width: 100px;border: 1px solid #ccc8c8;letter-spacing: 2px"
              @click="reSetForm">Reset info
            </el-button>
          </div>
        </transition>
      </div>
      <!-- Information Display Interface -->
      <div id="aaa" class="showInfo" :style="{
        borderTopRightRadius: styleObj.bordertoprightradius,
        borderBottomRightRadius: styleObj.borderbottomrightradius,
        borderTopLeftRadius: styleObj.bordertopleftradius,
        borderBottomLeftRadius: styleObj.borderbottomleftradius,
        right: styleObj.rightDis
      }" ref="showInfoView">

        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- When no username is entered or username not found -->
          <div v-show="isShow"
            style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
            <!-- Welcome Message -->
            <div
              style="flex: 2;display: flex;align-items: center;font-size: 22px;color:  rgba(97, 116, 131, 0.97);font-weight: bold">
              ParkingHelper
            </div>
            <!-- Welcome Image -->
            <div style="flex: 2">
              <el-button type="success" style="background-color: rgba(97,116,131,0.66);border: 1px solid #ccc8c8;" round
                @click="changeToRegiest">Haven't account yet? Click to signup
              </el-button>
            </div>
          </div>
        </transition>
        <!-- Show avatar and name when username is entered -->
        <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
          leave-active-class="animate__zoomOut" appear>
          <!-- Show information when user is registering -->
          <div v-show="!isShow"
            style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100%;height: 100%">
            <!-- Welcome message -->
            <div style="flex: 2;display: flex;align-items: center;font-size: 22px;color: #FFFFFF;font-weight: bold">
              Welcome to Register
            </div>
            <!-- Welcome image -->
            <div style="flex: 2">
              <el-button type="success" style="background-color:rgba(97,116,131,0.66);border: 1px solid #ccc8c8;" round
                @click="changeToLogin">Have account already? Click to login
              </el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import api from "../../api/index.js";
import { ElMessage, ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter()
const formData = reactive({
  username: "",
  password: ""
})

const login = () => {
  // If admin => header displays parking management system
  api.post("/login", formData).then(res => {
    console.log("Login response data: ", res.data);
    if (res.data.flag === true) {
      // Login successful count +1
      store.commit("inittabList")// After successful login, initialize breadcrumb and tag labels
      // Store token
      let tokenValue = res.data.data.tokenValue;
      let tokenName = res.data.data.tokenName;
      let username = res.data.data.loginId;
      // Store role
      if (tokenValue && tokenName) {
        let role = res.data.message;
        sessionStorage.setItem('saToken', tokenValue); // Session storage
        sessionStorage.setItem('tokenName', tokenName);
        sessionStorage.setItem('role', role);
        sessionStorage.setItem('username', username);
        ElMessage({
          message: 'Login successful, welcome back! ' + formData.username,
          type: 'success',
        })


        router.push("/")


      }
    } else {
      ElMessage({
        message: res.data.message,
        type: 'error',
      })
    }
  })
}

const styleObj = reactive({
  bordertoprightradius: '15px',
  borderbottomrightradius: '15px',
  bordertopleftradius: '0px',
  borderbottomleftradius: '0px',
  rightDis: '0px'
})
const isShow = ref(true);

const changeToRegiest = () => {
  styleObj.bordertoprightradius = '0px'
  styleObj.borderbottomrightradius = '0px'
  styleObj.bordertopleftradius = '15px'
  styleObj.borderbottomleftradius = '15px'
  styleObj.rightDis = '50%'
  isShow.value = !isShow.value
};
const changeToLogin = () => {
  styleObj.bordertoprightradius = '15px'
  styleObj.borderbottomrightradius = '15px'
  styleObj.bordertopleftradius = '0px'
  styleObj.borderbottomleftradius = '0px'
  styleObj.rightDis = '0px'
  isShow.value = !isShow.value
}

const checkForm = ref(null) // ref object
// Custom validation rules for password confirmation
// Validate password input

const rules = reactive({ // Validation rules
  username: [{ required: true, message: 'Username is required', trigger: 'blur' }, {
    // Length should be 3-10
    min: 3,
    max: 10,
    message: 'Username length should be 3-10 characters',
    trigger: 'blur'
  }],

  password: [{ required: true, message: 'Password is required', trigger: 'blur' }
    , {
    // Length should be 2-10
    min: 2,
    max: 10,
    message: 'Password length should be 2-10 characters',
    trigger: 'blur'
  }
  ],
  checkPass: [{ required: true, message: 'Confirm password is required', trigger: 'blur' }, {
    // Length should be 3-10
    min: 3,
    max: 10,
    message: 'Confirm password length should be 3-10 characters',
    trigger: 'blur'
  }],

})
const ruleForm = reactive({
  username: "",
  password: '',
})
const progressLength = ref(0)
// Progress bar
// Watch object data
watch(() => ruleForm.password, (newValue, oldValue) => {
  progressLength.value = newValue.length * 10;
})
const format = (percentage) => {
  if (percentage <= 30) {
    return 'Password strength: Weak';
  } else if (percentage > 30 && percentage <= 60) {
    return 'Password strength: Medium';
  }
  else if (percentage > 60 && percentage <= 80) {
    return 'Password strength: Strong';
  }
  else {
    return "Password strength: Strong"
  }
}
const getColor = (percentage) => {
  if (percentage <= 30) {
    return '#f56c6c';
  } else if (percentage <= 60 && percentage > 30) {
    return '#e6a23c';
  }
  else if (percentage > 60 && percentage < 80) {
    return '#1989fa';
  }
  else {
    return '#5cb87a';
  }

}

//User registration
const register = () => {
  console.log(ruleForm.area);
  //Compare two passwords
  if (ruleForm.password !== ruleForm.checkPass) {
    ElMessage({
      type: 'warning',
      message: 'Passwords do not match',
    })
    return;
  }
  checkForm.value.validate((valid) => {
    if (valid) {
      api.post("/register", ruleForm).then(res => {
        console.log("After edit res is ", res);
        if (res.data.flag === true) {
          ElMessage({
            type: 'success',
            message: res.data.message,
          })
        } else {
          ElMessage({
            type: 'warning',
            message: res.data.message,
          })
        }
      })
    }
    else {
      ElMessage({
        type: 'warning',
        message: 'Please check if the form fields are valid',
      })
    }
  })
}
const reSetForm = () => {
  ruleForm.username = "";
  ruleForm.password = ''
  ruleForm.role = "Student"
  ruleForm.name = ""
  ruleForm.major = ''
  ruleForm.checkPass = ''
  ruleForm.status = 1
  ruleForm.area = ""
}
// Password recovery
const findPwd = () => {
  router.push({ name: 'passwordRecovery' })
  // Navigate to password recovery page
}
</script>

<style scoped>
.base {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/login/bgimg.png");

  background-size: 100% 100%;
}

.loginAndRegist {
  border: #e9fcff solid;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.loginArea {
  /*background-color: rgba(239, 233, 233, 0.78);*/
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 430px;
  width: 540px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.registArea {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 430px;
  width: 540px;
  /*background-color: rgba(239, 233, 233, 0.8);*/
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.showInfo {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  z-index: 2;
  height: 430px;
  width: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-image: url("../../assets/images/inside.jpg");*/
  background-size: 80% 85%;
}

.showInfo:hover {
  background-size: 100%;
  background-position: -80px -70px;
}

.title {
  width: 70%;
  flex: 1;
  border-bottom: 1px solid rgba(97, 116, 131, 0.97);
  display: flex;
  align-items: center;
  color: rgba(97, 116, 131, 0.97);
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
}

#aaa {
  transition: 0.3s linear;
}

.pwdArea {
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;


}

.pwdArea input {
  outline: none;
  height: 30%;
  border-radius: 13px;
  padding-left: 10px;
  font-size: 12px;
  border: 1px solid gray;
}

.pwdArea input:focus {
  border: 2px solid rgba(97, 116, 131, 0.97);
}

.btnArea {
  display: flex;
  flex: 1;
  width: 100%;
  display: flex;
  /*justify-content: space-around; !*horizontal center*!*/
}

.rigestTitle {
  margin-left: 10%;
  width: 70%;
  flex: 1;
  color: rgba(97, 116, 131, 0.97);
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(97, 116, 131, 0.97);
}

.registForm {
  flex: 2;
  width: 60%;
  flex-direction: column;
  color: rgba(97, 116, 131, 0.97);
  font-size: 16px;
}

.registBtn {
  width: 100%;
  flex: 1;
  display: flex;
  margin-top: 1px;
}
</style>
