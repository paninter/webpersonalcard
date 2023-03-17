<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-5">
        <div class="card cardbox">
          <div class="card-header">ลงทะเบียน</div>
          <div class="card-body">
            <!-- <div class="social-buttons">
              <ul class="social-links list-inline">
                <li class="list-inline-item">
                  <a
                    class="btn text-white btn-floating m-1"
                    style="background-color: #3b5998"
                    href="#!"
                    role="button"
                    ><font-awesome-icon
                      :icon="['fab', 'facebook']"
                      class="icon alt"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="btn text-white btn-floating m-1"
                    style="background-color: #55acee"
                    href="#!"
                    role="button"
                    ><font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="icon alt"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="btn text-white btn-floating m-1"
                    style="background-color: #ff0018"
                    href="#!"
                    role="button"
                    ><font-awesome-icon
                      :icon="['fab', 'instagram']"
                      class="icon alt"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="btn text-white btn-floating m-1"
                    style="background-color: #00fe30"
                    href="#!"
                    role="button"
                    ><font-awesome-icon
                      :icon="['fab', 'line']"
                      class="icon alt"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="btn text-white btn-floating m-1"
                    style="background-color: #343a40"
                    href="#!"
                    role="button"
                    ><font-awesome-icon
                      :icon="['fab', 'tiktok']"
                      class="icon alt"
                  /></a>
                </li>
              </ul>
            </div> -->
            <div class="py-3">
              <form @submit.prevent="register">
                <div>
                  <label for="username">Username:</label>
                  <b-form-input
                    type="text"
                    id="username"
                    v-model="username"
                    required
                  />
                </div>
                <div>
                  <label for="password">Password:</label>
                  <b-form-input
                    type="password"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>

                <div class="mt-3 d-flex align-items-center justify-content-end">
                  <b-button
                    pill
                    variant="outline-primary"
                    onclick="window.history.back();"
                    >ย้อนกลับ</b-button
                  >
                  <b-button pill variant="outline-success" type="submit"
                    >Register</b-button
                  >
                </div>
              </form>
              <p v-if="errorMessage">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
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
        axios
          .post('http://localhost:8000/register', {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res)
          })
      } catch (error) {
        this.errorMessage = error.message
      }
    },
  },
}
</script>

<style>
.row {
  margin-top: 50px;
  margin-bottom: 50px;
}

/* .masthead-text {
  height: 300px;
}

.form-control {
  height: 45px;
}

select:hover {
  color: #444645;
  background: #ddd;
}

.login-or {
  position: relative;
  font-size: 18px;
  color: #aaa;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  background-color: #cdcdcd;
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}
#login-dp .help-block {
  font-size: 12px;
}

#login-dp .social-buttons {
  margin: 12px 0;
}
#login-dp .social-buttons a {
  width: 49%;
}
#login-dp .form-group {
  margin-bottom: 10px;
}
.btn-fb {
  color: #fff;
  background-color: #3b5998;
}
.btn-fb:hover {
  color: #fff;
  background-color: #496ebc;
}
.btn-tw {
  color: #fff;
  background-color: #55acee;
}
.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}
@media (max-width: 768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
}

.progress {
  height: 5px;
}

.block-help {
  font-weight: 300;
}

.hide {
  display: none;
} */
</style>
