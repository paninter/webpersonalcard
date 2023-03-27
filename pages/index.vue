<template>
  <div class="content">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="col-sm-4">
          <a
            href="#custom-modal"
            class="btn btn-custom waves-effect waves-light mb-4 mt-5"
            data-animation="fadein"
            data-plugin="custommodal"
            data-overlayspeed="200"
            data-overlaycolor="#36404a"
            ><h4>รายชื่อตัวแทน</h4>
          </a>
        </div>
        <b-button
          class="btn btn-custom waves-effect waves-light mb-4 mt-5"
          variant="primary"
          pill
          @click="openModalCreate()"
          >+ สร้าง</b-button
        >

        <!-- end col -->
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-lg-4" v-for="(user, index) in users" :key="index">
          <div class="text-center card-box">
            <div class="member-card pt-2 pb-2">
              <div class="thumb-lg member-thumb mx-auto">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  class="rounded-circle img-thumbnail"
                  alt="profile-image"
                />
              </div>
              <div class="">
                <h4>{{ user.name }}</h4>
                <p class="text-muted">
                  @Tiktok <span>| </span
                  ><span
                    ><a href="#" class="text-pink">{{ user.tiktok }}</a></span
                  >
                </p>
              </div>
              <ul class="social-links list-inline">
                <li class="list-inline-item">
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
                </li>
                <li class="list-inline-item">
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
                </li>
                <li class="list-inline-item">
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
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                @click="openModalDetail(user)"
              >
                <font-awesome-icon :icon="['fa', 'user']" class="icon alt" />
              </button>
              <button
                type="button"
                class="btn btn-success mt-3 btn-rounded waves-effect w-md waves-light"
                @click="openModalEdit(user)"
              >
                <font-awesome-icon :icon="['fa', 'pen']" class="icon alt" />
              </button>
              <button
                type="button"
                class="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light"
                @click="openModalDelete(user)"
              >
                <font-awesome-icon :icon="['fa', 'trash']" class="icon alt" />
              </button>
              <!-- <div class="mt-4">
                <div class="row">
                  <div class="col-4">
                    <div class="mt-3">
                      <h4>2563</h4>
                      <p class="mb-0 text-muted">Wallets Balance</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mt-3">
                      <h4>6952</h4>
                      <p class="mb-0 text-muted">Income amounts</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mt-3">
                      <h4>1125</h4>
                      <p class="mb-0 text-muted">Total Transactions</p>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- end col -->
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-12">
          <div class="text-right">
            <ul class="pagination pagination-split mt-0 float-right">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous"
                  ><span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span></a
                >
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next"
                  ><span aria-hidden="true">»</span>
                  <span class="sr-only">Next</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <ModalDetailUser ref="detail"></ModalDetailUser>
    <ModelEditUser ref="edit" @getdata="getData()"></ModelEditUser>
    <ModelCreateUser ref="create" @getdata="getData()"></ModelCreateUser>
    <!-- container -->
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'IndexPage',
  layout: 'content',
  data() {
    return {
      users: [],
      id: 0,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      axios
        .get('http://localhost:8000/list')
        .then((res) => {
          this.users = res.data.user
          console.log(res.data.user)
        })
        .catch(() => {
          return
        })
    },

    openModalDetail(user) {
      this.$refs.detail.open(user)
    },
    openModalEdit(user) {
      this.$refs.edit.open(user)
    },
    openModalCreate() {
      this.$refs.create.open()
    },
    openModalDelete(user) {
      Swal.fire({
        title: 'คุณแน่ใจไหม?',
        text: 'คุณจะเปลี่ยนกลับไม่ได้!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post('http://localhost:8000/user/delete', {
              id: user.id,
            })
            .then((res) => {
              console.log(res)
              Swal.fire('ลบเสร็จ!', 'คุณได้ลบตัวแทนแล้ว', 'success')
              this.getData()
              this.$emit()
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
    },
  },
}
</script>

<style>
body {
  background: #dcdcdc;
}
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}

/* .social-links li a {
  border-radius: 50%;
  color: rgba(121, 121, 121, 0.8);
  display: inline-block;
  height: 30px;
  line-height: 27px;
  border: 2px solid rgba(121, 121, 121, 0.5);
  text-align: center;
  width: 30px;
} */

.social-links li a:hover {
  color: #797979;
  border: 2px solid #797979;
}
.thumb-lg {
  height: 88px;
  width: 88px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.text-pink {
  color: #ff679b !important;
}
.btn-rounded {
  border-radius: 2em;
}
.text-muted {
  color: #98a6ad !important;
}
h4 {
  line-height: 22px;
  font-size: 18px;
}
</style>
