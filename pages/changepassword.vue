<template>
  <div>
    <Navigation />
    <b-card class="shadow-sm">
      <div class="d-flex justify-content-between">
        <div><h5>เปลี่ยนรหัสผ่าน</h5></div>
        <div>
          <b-button variant="outline-danger">ยกเลิก</b-button>
          <b-button variant="outline-primary" @click="submit()"
            >ยืนยัน</b-button
          >
        </div>
      </div>
      <div class="mt-3">
        <b-form-group label="อีเมล" label-for="input-formatter" class="mb-0">
          <b-form-input
            id="input-formatter"
            placeholder="อีเมล"
            v-model="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="รหัสผ่านใหม่" label-for="input-lazy" class="mb-0">
          <b-form-input
            id="input-lazy"
            placeholder="รหัสผ่านใหม่"
            lazy-formatter
            v-model="password"
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

    <Footer />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  //   methods: {
  //     submit() {
  //       axios
  //         .post('http://localhost:8000/users/changepassword', {
  //           email: this.email,
  //           password: this.password,
  //         })
  //         .then((res) => {
  //           console.log(res)
  //           Swal.fire('Success!', 'เปลี่ยนรหัสผ่านเรียบร้อบ')
  //         })
  //         .catch((error) => {
  //           //   console.log(error)
  //           Swal.fire('Error!', 'email ไม่ถูกต้อง')
  //         })
  //     },
  //   },
}
</script>

<style></style>
