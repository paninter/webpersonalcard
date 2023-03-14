<template>
  <!-- Footer -->
  <div class="footer-main fixed-bottom">
    <!-- <b-container> -->
      <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <h4>Get connected with us on social networks:</h4>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
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
          style="background-color: #55acee"
          href="#!"
          role="button"
          ><i class="fab fa-twitter"></i
          ><font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"
        /></a>
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #dd4b39"
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
          ><i class="fab fa-google"></i>
          <font-awesome-icon :icon="['fab', 'line']" class="icon alt"
        /></a>
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #000000"
          href="#!"
          role="button"
          ><i class="fab fa-google"></i>
          <font-awesome-icon :icon="['fab', 'tiktok']" class="icon alt"
        /></a>
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
          ><i class="fab fa-github"></i
          ><font-awesome-icon :icon="['fab', 'github']" class="icon alt"
        /></a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Laravel</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgb(61 61 61 / 17%)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
        >MDBootstrap.com</a
      >
    </div>
    <!-- Copyright -->
  </footer>
    <!-- </b-container> -->

  </div>
  <!-- Footer -->
</template>

<script>
export default {}
</script>

<style scoped>
.footer-main {
  position: relative;
  bottom: 0;
  z-index: 90;
  width: 100%;
  background-color: #1e1e1e;
  color: #fff;
}
.footer-college {
  font-size: 1.2rem;
  background-color: #0b76bc !important;
  border-color: #0b76bc !important;
  color: #fff;
  text-align: center;
}
</style>
