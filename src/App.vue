<template>
  <div id="nav">
   
  </div>
  <router-view/>
</template>
  <script>
    import {reactive, onMounted, ref} from 'vue'
    import db from './db'
    export default {
      name:'App',
    setup() {
      const email = ref("");
      const password = ref("");
      const c_password = ref("");
      // const successMessage = '';
      const register_state = reactive({
        errorMessage : "",
        successMessage : ""
      })
      
     const Register = ()=>{
      //  alert(password.value)
        if(password.value == '' || c_password.value == '' ||  email.value == ''){
          register_state.errorMessage = 'All fields are required!'
          // register_state.errorMessage = ''
          console.log(register_state.errorMessage)
        }
         else if (password.value !== c_password.value) {
          register_state.errorMessage = 'Password  do not match!'
          // register_state.errorMessage = ''
          console.log(register_state.errorMessage)
        }
        else{
          try {
            //  db.auth().createUserWithEmailAndPassword(email.value,password.value);
             register_state.successMessage = 'Registered Successfully!'
             window.location.href = '/views/Home'
                console.log(register_state.successMessage)
          } catch (err) {
            console.log('error')
          }        
        }
        
     }

     return {
       email,
       password,
       c_password,
       Register,
      //  successMessage,
       register_state,
     }
    }
    }
  </script>
<style scoped>

</style>
