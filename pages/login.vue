<template>
  <div class="container py-3 login">
    <div class="card" style="min-width: 414px">
      <div class="login-card">
        <b-col cols="12" class="text-center">
                <h5>เข้าสู่ระบบ</h5>
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
        <div
              class="col-12 d-flex mt-2"
              style="justify-content: space-between"
            >
          <nuxt-link to="/register">ลงทะเบียน</nuxt-link>
          <b-button type="submit" variant="primary" @click="userLogin()"
            >login</b-button
          >
        </div>
        </div>
    </div>
  </div>
</template>

<script>
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

<style  scoped>
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
