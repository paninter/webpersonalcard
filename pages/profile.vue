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
                  <p class="text-secondary mb-1">บัตรตัวแทน</p>
                  <p class="text-muted font-size-sm">สามารถติดตามได้ที่</p>
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
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">ชื่อ</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="John Doe" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">อีเมล</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    value="john@example.com"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">เบอร์โทร</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <!-- <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    value="(320) 380-4539"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    value="Bay Area, San Francisco, CA"
                  />
                </div>
              </div> -->
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">facebook</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">line</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">tiktok</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">instagram</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9 text-secondary text-right">
                  <input
                    type="button"
                    class="btn btn-primary px-4"
                    value="แก้ไขโปรไฟล์"
                  />
                  <b-button variant="danger" onclick="window.history.back();"
                    >ย้อนกลับ</b-button
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="d-flex align-items-center mb-3">Project Status</h5>
                  <p>Web Design</p>
                  <div class="progress mb-3" style="height: 5px">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>Website Markup</p>
                  <div class="progress mb-3" style="height: 5px">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style="width: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>One Page</p>
                  <div class="progress mb-3" style="height: 5px">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 89%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>Mobile Template</p>
                  <div class="progress mb-3" style="height: 5px">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 55%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>Backend API</p>
                  <div class="progress" style="height: 5px">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style="width: 66%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
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
