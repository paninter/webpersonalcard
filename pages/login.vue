<template>
  <div class="container py-3 login">
    <div class="card" style="min-width: 414px">
      <div class="login-card">
        <b-col cols="12" class="text-center">
          <h5>เข้าสู่ระบบ</h5>
          <p class="text-center">หรือ</p>
          <div class="text-center mb-3">
            <p>ลงชื่อเข้าใช้ด้วย</p>

            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              ><i class="fab fa-facebook-f"></i
              ><font-awesome-icon :icon="['fab', 'facebook']" class="icon alt"
            /></a>

            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #000000"
              href="#!"
              role="button"
              ><i class="fab fa-twitter"></i
              ><font-awesome-icon :icon="['fab', 'tiktok']" class="icon alt"
            /></a>

            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #ff0018"
              href="#!"
              role="button"
              ><i class="fab fa-instagram"></i
              ><font-awesome-icon :icon="['fab', 'instagram']" class="icon alt"
            /></a>

            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #40d71f"
              href="#!"
              role="button"
              ><i class="fab fa-github"></i
              ><font-awesome-icon :icon="['fab', 'line']" class="icon alt"
            /></a>
          </div>
        </b-col>
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
        <div class="col-12 d-flex mt-2" style="justify-content: space-between">
          <nuxt-link to="/register">ลงทะเบียน</nuxt-link>
          <b-button pill type="submit" variant="primary" @click="userLogin()"
            >login</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
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
          Cookies.set('token', res.data.token)
          // console
          //   .log(token + headers.Authorization)
          // window.location.href = '/'
          // this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          Swal.fire('ชื่อและรหัสไม่ถูกต้อง!', 'กรุณาลองใหม่อีกครั้ง')
        })
    },
  },
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  padding: 2.5rem 2rem;
  background-color: #fff;
  max-width: 414px;
  width: 100%;
  margin: 0 auto;
  display: inline-block;
  justify-content: center;
}
.text-title-login {
  color: #4f4f4f;
  font-size: 1.5rem;
  font-weight: 600;
}
.forget-password {
  color: #828282;
  font-size: 0.9rem;
  font-weight: 300;
}
.register {
  color: #009ef7;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
