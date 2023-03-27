<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="card border-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="mb-4 text-center">
                    <h3 class="h4 font-weight-bold text-theme">เข้าสู่ระบบ</h3>
                  </div>
                  <div class="text-center mb-3">
                    <p>ลงชื่อด้วย</p>

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
                      style="background-color: #000000"
                      href="#!"
                      role="button"
                      ><i class="fab fa-twitter"></i
                      ><font-awesome-icon
                        :icon="['fab', 'tiktok']"
                        class="icon alt"
                    /></a>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #ff0018"
                      href="#!"
                      role="button"
                      ><i class="fab fa-instagram"></i
                      ><font-awesome-icon
                        :icon="['fab', 'instagram']"
                        class="icon alt"
                    /></a>

                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #40d71f"
                      href="#!"
                      role="button"
                      ><i class="fab fa-github"></i
                      ><font-awesome-icon
                        :icon="['fab', 'line']"
                        class="icon alt"
                    /></a>
                  </div>

                  <!-- <h6 class="h5 mb-0">Welcome back!</h6>
                  <p class="text-muted mt-2 mb-5">
                    Enter your email address and password to access admin panel.
                  </p> -->

                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Username</label>
                      <input
                        type="email"
                        outlined
                        dense
                        placeholder="Enter email"
                        class="form-control"
                        id="exampleInputEmail1"
                      />
                    </div>
                    <div class="form-group mb-5">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        id="exampleInputPassword1"
                      />
                      <div class="mt-2">
                        <b-form-checkbox> remember </b-form-checkbox>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-theme">
                      เข้าสู่ระบบ
                    </button>
                    <a href="#l" class="forgot-link float-right text-primary"
                      >Forgot password?</a
                    >
                  </form>
                </div>
              </div>

              <div class="col-lg-6 d-none d-lg-inline-block">
                <div class="account-block rounded-right">
                  <div class="overlay rounded-right"></div>
                  <div class="account-testimonial">
                    <h4 class="text-white mb-4">เข้าสู่ระบบ</h4>
                    <p class="lead text-white">เป็นตัวแทน</p>
                    <p>User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <p class="text-muted text-center mt-3 mb-0">
          ไม่สามารถเข้าสู่ระบบได้หรือ ?
          <a href="/register" class="text-primary ml-1">ลงทะเบียน</a>
        </p>

        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- Row -->
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin-top: 20px;
  background: #f6f9fc;
}
.account-block {
  padding: 0;
  background-image: url(https://bootdey.com/img/Content/bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
}
.account-block .overlay {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
  text-align: center;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}

.text-theme {
  color: #5369f8 !important;
}

.btn-theme {
  background-color: #5369f8;
  border-color: #5369f8;
  color: #fff;
}
</style>
