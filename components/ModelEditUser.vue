<template>
  <div>
    <b-modal v-model="show" id="modal-1" title="แก้ไข">
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
            Edit
          </b-button>

          <b-button variant="light" @click="close()"> Cancle </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      show: false,
      name: '',
      email: '',
      facebook: '',
      tiktok: '',
      tel: '',
      line: '',
      id: 0,
    }
  },
  methods: {
    open(user) {
      this.show = true
      this.id = user.id
      this.name = user.name
      this.email = user.email
      this.facebook = user.facebook
      this.tel = user.tel
      this.line = user.line
      this.tiktok = user.tiktok
    },
    close() {
      this.show = false
    },
    onSubmit() {
      axios
        .post('http://localhost:8000/user/edit', {
          id: this.id,
          name: this.name,
          email: this.email,
          facebook: this.facebook,
          line: this.line,
          tiktok: this.tiktok,
          tel: this.tel,
        })
        .then((res) => {
          console.log(res)
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
          this.close()
          this.$emit('getdata')
        })
    },
  },
}
</script>

<style></style>
