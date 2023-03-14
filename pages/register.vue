<template>
  <div class="py-3">
    <b-container>
      <b-card class="mt-3">
        <h4 class="text-center">ลงทะเบียนเข้าสู่ระบบ</h4>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <b-form-input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <b-form-input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <b-form-input type="password" id="password" v-model="password" required />
      </div>
      <div class="mt-3 d-flex align-items-center justify-content-end">
        <b-button variant="outline-success" type="submit">Register</b-button>
      </div>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    async register() {
      try {
        // perform registration logic here
        // you can use Axios or any other library to send a POST request to your backend API
        // and handle the response accordingly
      } catch (error) {
        this.errorMessage = error.message
      }
    }
  }
}
</script>
