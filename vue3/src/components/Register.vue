<template>
<div class="parent">
  <div class="child">
    <form class="login" @submit.prevent="Register">
      <h1>Creation of the account</h1>
      <label>Email  :</label>
      <input required v-model="name" type="text" placeholder="Username"/>
      <label>Password  :</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <label> Secret  :</label>
      <input required v-model="secret" type="text" placeholder="Secret"/>
      <p>
        Already have an account??<router-link to="/login">click here</router-link>
      </p>
      <hr/>
      <button type="submit">Register</button>
    </form>
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

    Register () {
      const name = this.name
      const password = this.password
      const secret = this.secret
      fetch('http://localhost:4000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
          secret,
        }),
      })
        .then(res => {
          res.json()
          this.$router.push('/log')
          alert('Congratulation your account is created')
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