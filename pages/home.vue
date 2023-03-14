<template>
  <div>
    <Navigation />
    <div class="col-12 sm-6">
      <div class="row">
        <div class="col-6 bgColor1">
          <div class="text-align mt-6">
            <h1>Hello</h1>
            <p>adwwadawdwadwd</p>
            <b-button variant="danger">About us</b-button>
          </div>
        </div>

        <div class="col-6 bgColor2 text-align">
          <b-card class="rounded mt-5" style="max-width: 30rem">
            <!-- Pills navs -->
            <ul
              class="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="tab-login"
                  data-mdb-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  >Login</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="tab-register"
                  data-mdb-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  >Register</a
                >
              </li>
            </ul>
            <!-- Pills navs -->

            <!-- Pills content -->
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form>
                  <div class="text-center mb-3">
                    <p>Sign in with:</p>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #3b5998"
                      href="#!"
                      role="button"
                      ><i class="fab fa-facebook-f"></i
                      ><font-awesome-icon
                        :icon="['fab', 'facebook']"
                        class="icon alt"
                    /></a>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #55acee"
                      href="#!"
                      role="button"
                      ><i class="fab fa-twitter"></i
                      ><font-awesome-icon
                        :icon="['fab', 'twitter']"
                        class="icon alt"
                    /></a>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #dd4b39"
                      href="#!"
                      role="button"
                      ><i class="fab fa-instagram"></i
                      ><font-awesome-icon
                        :icon="['fab', 'instagram']"
                        class="icon alt"
                    /></a>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #ac2bac"
                      href="#!"
                      role="button"
                      ><i class="fab fa-github"></i
                      ><font-awesome-icon
                        :icon="['fab', 'github']"
                        class="icon alt"
                    /></a>
                  </div>

                  <p class="text-center">or:</p>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="loginName"
                      class="form-control"
                      placeholder="Email or username"
                    />
                    <!-- <label class="form-label" for="loginName"
                      >Email or username</label
                    > -->
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      class="form-control"
                      placeholder="Password"
                    />
                    <!-- <label class="form-label" for="loginPassword"
                      >Password</label
                    > -->
                  </div>

                  <!-- 2 column grid layout -->
                  <div class="row mb-4">
                    <div class="col-md-6 d-flex justify-content-center">
                      <!-- Checkbox -->
                      <div class="form-check mb-3 mb-md-0">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="loginCheck"
                          checked
                        />
                        <label class="form-check-label" for="loginCheck">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div class="col-md-6 d-flex justify-content-center">
                      <!-- Simple link -->
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary mb-4">
                    Sign in
                  </button>

                  <!-- Register buttons -->
                  <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form>
                  <div class="text-center mb-3">
                    <p>Sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>

                  <p class="text-center">or:</p>

                  <!-- Name input -->
                  <div class="form-outline mb-4">
                    <input type="text" id="registerName" class="form-control" />
                    <label class="form-label" for="registerName">Name</label>
                  </div>

                  <!-- Username input -->
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="registerUsername"
                      class="form-control"
                    />
                    <label class="form-label" for="registerUsername"
                      >Username</label
                    >
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="registerEmail"
                      class="form-control"
                    />
                    <label class="form-label" for="registerEmail">Email</label>
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="registerPassword"
                      class="form-control"
                    />
                    <label class="form-label" for="registerPassword"
                      >Password</label
                    >
                  </div>

                  <!-- Repeat Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      class="form-control"
                    />
                    <label class="form-label" for="registerRepeatPassword"
                      >Repeat password</label
                    >
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="registerCheck"
                      checked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label class="form-check-label" for="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary mb-3">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <!-- Pills content -->
          </b-card>
        </div>
      </div>
    </div>

    <div class="first" id="project">
      <div class="row">
        <div class="col-12">
          <div class="child bgColor2">
            <!-- <b-icon color="#A7121D" x-large class="ml-3"
              >mdi-palette-swatch</b-icon
            > -->
            <h3 class="white--text ml-3 mt-4">ตัวแทน</h3>
            <p class="grey--text ml-3 mt-6">
              กฟไกไกไฟไกฟไฟ <br />ฟไกฟไกไฟกฟไฟไกฟไ
            </p>
            <b-btn color="#A7121D" dark text>
              เพิ่มเติม
              <!-- <b-icon right>mdi-arrow-right</b-icon> -->
            </b-btn>
          </div>
          <div class="child bgColor2">
            <!-- <b-icon color="" x-large class="ml-3" dark>mdi-shopping</b-icon> -->
            <h3 class="white--text ml-3 mt-4">สินค้า</h3>
            <p class="grey--text ml-3 mt-6">
              ฟกไฟกฟไกไฟกไฟ <br />ฟไกฟไกไฟไฟกฟไกไฟก
            </p>
            <b-btn color="" dark text>
              เพิ่มเติม
              <!-- <b-icon right>mdi-arrow-right</b-icon> -->
            </b-btn>
          </div>
          <div class="child bgColor2">
            <!-- <b-icon color="#A7121D" x-large class="ml-3"
              >mdi-book-open-page-variant</b-icon
            > -->
            <h3 class="white--text ml-3 mt-4">Grich</h3>
            <p class="grey--text ml-3 mt-6">
              ฟกฟไกฟไกฟไกฟไ <br />ฟไกฟไกฟไกฟไกไฟกไฟกไ
            </p>
            <b-btn color="#A7121D" dark text>
              เพิ่มเติม
              <!-- <b-icon right>mdi-arrow-right</b-icon> -->
            </b-btn>
          </div>
        </div>
        <div class="col-12 mt-10">
          <div class="child1">
            <h1 class="red--text text--darken-4 mt-4 number">12</h1>
            <h3 class="white--text mt-4">ประสบการณ์หลายปี</h3>
          </div>
          <div class="child2 mRight">
            <div class="row">
              <div class="col-12 childcol">
                <div class="child2 mButton padding bgColor2">
                  <h1 class="red--text text--darken-4">60+</h1>
                  <p class="grey--text">ลูกค้า</p>
                </div>
              </div>
              <div class="col-12 childcol">
                <div class="child2 padding bgColor2">
                  <h1 class="red--text text--darken-4">122+</h1>
                  <p class="grey--text">โครงการที่เสร็จสมบูรณ์</p>
                </div>
              </div>
            </div>
          </div>
          <div class="child2">
            <div class="row">
              <div class="col-12 childcol">
                <div class="child2 mButton padding bgColor2">
                  <h1 class="red--text text--darken-4">08</h1>
                  <p class="grey--text">Years Experience</p>
                </div>
              </div>
              <div class="col-12 childcol">
                <div class="child2 padding bgColor2">
                  <h1 class="red--text text--darken-4">10</h1>
                  <p class="grey--text">ความสำเร็จ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Navigation, Footer },
  name: 'Home',
  data: () => ({}),
}
</script>

<style scoped>
.red {
  color: red;
}
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #ec5050 50%,
    #e23a3a 50%,
    #ec5050 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');
  height: 86vh;
}
.bgColor2 {
  background-color: #eb1523;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
.input1 {
  border-radius: 30px;
  height: 40px;
  width: auto;
  margin-left: 95px;
  margin-right: 10px;
}
.text-align {
  text-align: -webkit-center;
}
</style>
