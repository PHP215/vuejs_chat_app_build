<template>
  <div id="nav">
   <div class="container">
		  <div class="row justify-content-center align-items-center">
			  <div class="col-md-4 shadow p-2">
				    <form @submit.prevent="Register">
              <h2 class="text-secondary">Register</h2>
              <div class="form-group my-2">
                <label for="">Email</label>
                <input type="text" v-model="email" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              </div>
              <div class="form-group my-2">
                <label for="">Password</label>
                <input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                <button type="submit" class="my-2 btn btn-primary">Regisser</button>
              </div>
					</form>
			  </div>
		  </div>
	</div>
  </div>
  <!-- <router-view/> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
