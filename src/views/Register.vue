<template>
   <div class="container">
		  <div class="row mt-5 justify-content-center align-items-center">
			  <div class="col-md-4 shadow p-2">
				    <form @submit.prevent="Register">
              <h2 class="text-secondary text-center">Register</h2>
              <!-- error message -->
              <div class="error-message" v-if="register_state.errorMessage !== ''" :class="(register_state.errorMessage !== '' ? 'alert alert-danger' : '')">
                {{register_state.errorMessage}}</div>
                <!-- success message -->
                <div class="success-message" v-if="register_state.successMessage !== ''" :class="(register_state.successMessage !== '' ? 'alert alert-success' : '')">
                {{register_state.successMessage}}</div>
              <div class="form-group my-2">
                <label for="">Email</label>
                <input type="email"  v-model="email" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
              <div class="form-group my-2">
                <label for="">Username</label>
                <input type="text"  v-model="username" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
              <div class="form-group my-2">
                <label for="">Password</label>
                <input type="password"  name="" v-model="password" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
              <div class="form-group my-2">
                <label for="">Confirm Password</label>
                <input type="password"  name="" v-model="c_password" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
               <button type="submit" class="my-2 btn btn-primary">Register</button>
               <!-- <router-view> -->
					</form>
			  </div>
		  </div>
	</div> 
</template>

<script>
    import {reactive, onMounted, ref} from 'vue'
    
    import db from '../db'
    export default {
      name:'Register',
    setup() {
      const email = ref("");
      const password = ref("");
      const c_password = ref("");
      const username = ref("")
      // const auth = getAuth();
      // const successMessage = '';
      const register_state = reactive({
        errorMessage : "",
        successMessage : ""
      })
      
     const Register = ()=>{
      //  alert(password.value)
        if(password.value == '' || c_password.value == '' ||  email.value == '' ||  username.value == ''){
          register_state.successMessage = ''
          register_state.errorMessage = 'All fields are required!'
          console.log(register_state.errorMessage)
          console.log(username.value)
        }
         else if (password.value !== c_password.value) {
          register_state.successMessage = ''
          register_state.errorMessage = 'Password  do not match!'
          console.log(register_state.errorMessage)
        }
        else{
          
          db.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user; // current user
              // const db_ref = db().ref(''); // database reference
              let user_data = { 
                email : email.value,
                username : username.value
              }
              db.database().ref().child('users/' + user.uid).set(user_data) // saving user data in users table
              register_state.errorMessage = ''
              register_state.successMessage = 'Registered Successfully!'
              setTimeout(()=>{
                window.location.href = '/login'
              },500)
              // ...
            })
            .catch((error) => {
              // console.log(error.code);
              register_state.successMessage = ''
              register_state.errorMessage = error.message;
              // ..
            });
          // try {
          //    db.auth().createUserWithEmailAndPassword(email.value,password.value);
          //   //  register_state.successMessage = 'Registered Successfully!'
          //   //  this.$route.router.push('Home')
          //   //  window.location.href = '/login'
          //       console.log(register_state.successMessage)
          // } catch (err) {
          //   console.log('error')
          // }        
        }
        
     }

     return {
       email,
       password,
       c_password,
       Register,
       username,
      //  successMessage,
       register_state,
     }
    }
    }
</script>
<style scoped>

</style>