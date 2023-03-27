<template>
  <div>
    <b-modal v-model="show" id="modal-1" title="สร้าง">
      <div align="center" justify="center">
        <b-input-group>
          <b-form-file
            id="form-image"
            accept="image/*"
            v-model="img"
          ></b-form-file>
        </b-input-group>
      </div>
      <b-form-group id="input-group-2" label="ชื่อ" label-for="input-2">
        <b-form-input v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email" label-for="input-2">
        <b-form-input v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="เบอร์โทร" label-for="input-2">
        <b-form-input v-model="tel"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Facebook" label-for="input-2">
        <b-form-input v-model="facebook"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Line" label-for="input-2">
        <b-form-input v-model="line"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Tiktok" label-for="input-2">
        <b-form-input v-model="tiktok"></b-form-input>
      </b-form-group>
      <template #modal-footer>
        <div class="d-flex justify-content-between">
          <b-button variant="ok-primary" block @click="onSubmit()">
            สร้าง
          </b-button>

          <b-button variant="light" @click="close()"> ยกเลิก </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1',
      },
      show: false,
      name: '',
      email: '',
      img: null,
      imgqr: null,
      facebook: '',
      tiktok: '',
      tel: '',
      line: '',
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },

    onSubmit() {
      // console.log(Cookies.get('token'))
      axios
        .post(
          'http://localhost:8000/user/create',
          {
            name: this.name,
            img: this.img,
            imgqr: this.imgqr,
            email: this.email,
            facebook: this.facebook,
            line: this.line,
            tiktok: this.tiktok,
            tel: this.tel,
          },
          {
            headers: {
              Authorization: Cookies.get('token'),
            },
          }
        )
        .then((res) => {
          console.log(res)
          Swal.fire('สำเร็จ!', 'คุณได้สร้างตัวแทนใหม่แล้ว', 'success')
          this.close()
          this.$emit('getdata')
        })
    },
  },
}
</script>

<style></style>
