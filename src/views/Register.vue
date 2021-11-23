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
export default {
    
}
</script>
<style scoped>

</style>