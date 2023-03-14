<template>
  <div>
    <b-form-group id="input-group-1" label="Username:" label-for="input-1">
      <b-form-input
        id="input-1"
        type="email"
        placeholder="Enter email"
        v-model="username"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-form-input
        id="input-2"
        type="password"
        placeholder="Password"
        v-model="password"
        required
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" @click="userLogin()"
      >login</b-button
    >
    <b-button type="reset" variant="danger">Reset</b-button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  layout: 'auth',
  methods: {
    userLogin() {
      axios
        .post('http://localhost:8000/login', {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res)
          Cookies.set('token', res.data.token)
          // window.location.href = '/'
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          Swal.fire('Error!', 'error')
        })
    },
  },
}
</script>

<style></style>
