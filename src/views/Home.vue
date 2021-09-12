<template>
  <div class="home">
	  <div class="container">
		  <div class="row justify-content-center align-items-center">
			  <div class="col-md-4 shadow p-2">
				    <form @submit.prevent="login">
						<h2 class="text-secondary">Login System</h2>
						<div class="form-group my-2">
							<label for="">Username</label>
							<input type="text" v-model="inputUsername" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
						</div>
						<div class="form-group my-2">
							<label for="">Password</label>
							<input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
							<button type="submit" class="my-2 btn btn-primary">Login</button>
						</div>
					</form>
			  </div>
		  </div>
		  <div class="row">
			  <div class="col-md-6">
				  <div class="chat view">
					  <h1>Chat View</h1>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, onMounted, ref} from 'vue'
import db from '../db'
export default {
  name: 'Home',
  components: {

  },

  setup(){
	const InputUsername = ref("");
	const state = reactive({
		username : "",
		messages : []
	});

	const Login = ()=>{
		if (inputUsername.value !== null || inputUsername.value !== "") {
			state.username = inputUsername.value
			inputUsername.value = ""
		}
	}


	return {
		InputUsername,
		Login,
		state
	}
  }
}
</script>
