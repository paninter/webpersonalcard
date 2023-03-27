<template>
  <div class="main-body">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="Admin"
                  class="rounded-circle p-1 bg-primary"
                  width="110"
                />
                <div class="mt-3">
                  <h4>John Doe</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">
                    Bay Area, San Francisco, CA
                  </p>
                  <button class="btn btn-primary">Follow</button>
                  <button class="btn btn-outline-primary">Message</button>
                </div>
              </div>
              <hr class="my-4" />
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
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
                  </h6>
                  <span class="text-secondary">https://facebook.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
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
                  </h6>
                  <span class="text-secondary">https://twitter.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
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
                  </h6>
                  <span class="text-secondary">https://instagram.com</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
                    <a
                      class="btn text-white btn-floating m-1"
                      style="background-color: #40d71f"
                      href="#!"
                      role="button"
                      ><i class="fab fa-line"></i
                      ><font-awesome-icon
                        :icon="['fab', 'line']"
                        class="icon alt"
                    /></a>
                  </h6>
                  <span class="text-secondary">https://line.com</span>
                </li>
                <!-- <li
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0">
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
                  </h6>
                  <span class="text-secondary">bootdey</span>
                </li> -->
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <b-card class="shadow-sm">
                <div class="d-flex justify-content-between">
                  <div><h5>เปลี่ยนรหัสผ่าน</h5></div>
                  <div>
                    <b-button
                      pill
                      variant="outline-primary"
                      onclick="window.history.back();"
                      >ย้อนกลับ</b-button
                    >
                    <b-button variant="outline-primary" @click="submit()"
                      >ยืนยัน</b-button
                    >
                  </div>
                </div>
                <div class="mt-3">
                  <b-form-group
                    label="อีเมล"
                    label-for="input-formatter"
                    class="mb-0"
                  >
                    <b-form-input
                      id="input-formatter"
                      placeholder="อีเมล"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="รหัสผ่านใหม่"
                    label-for="input-lazy"
                    class="mb-0"
                  >
                    <b-form-input
                      id="input-lazy"
                      placeholder="รหัสผ่านใหม่"
                      lazy-formatter
                    ></b-form-input>
                  </b-form-group>

                  <!-- <b-form-group
          label="ยืนยันรหัสผ่าน"
          label-for="input-lazy"
          class="mb-0"
        >
          <b-form-input
            id="input-lazy"
            placeholder="ยืนยันรหัสผ่าน"
            lazy-formatter
          ></b-form-input>
        </b-form-group> -->
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: { Footer },
}
</script>

<style>
body {
  background: #f7f7ff;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
    0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
  margin-right: 0.5rem !important;
}
</style>
