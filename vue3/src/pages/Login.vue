<template>

    <div class="parent">
  <div class="child">
    <form class="login" @submit.prevent="Login">
      <h1>Sign in</h1>
      <label>Username</label>
      <input required v-model="name" type="text" placeholder="name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <p>
        Dont have an account??<router-link to="/register">click here</router-link>
      </p>
      <hr/>
      <button type="submit" >Login</button>
    </form>
    <p>{{ clicked }}</p>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: {
        name: '',
        password: '',
      },
    }
  },
  methods: {

    Login () {
      const name = this.name
      const password = this.password
      fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
        }),
      })
        .then(res => {
          res.json()
          if (res.status === 401) { alert('Invalid credential') }
          if (res.status === 200) {
            alert('Login sucessfull'); this.$router.push('/Home'); localStorage.setItem('token', res.token); console.log(res.token)
          }
        })
        .catch(error => { this.error = error })
    },
  },
}

</script>

<style>
.parent {
  display: grid;
  place-items: center;
  
  background:#2D5B90;
  width: 100%;
  height: 100%;
  
  
  overflow: auto;
}

.child {
  
  padding: 0.5rem;
  border-radius: 10px;
  border: 2px solid rgba(39, 38, 39, 0.418);
  background: rgb(160, 156, 216);
  font-size: 2rem;
  text-align: center;
}

</style>