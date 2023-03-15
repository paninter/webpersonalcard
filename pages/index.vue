<template>
  <div>
    <b-container>
      <div class="d-flex align-items-center justify-content-between">
      <div>
        <h5>รายชื่อตัวแทน</h5>

      </div>
      <div>
        <b-button class="mt-5" variant="outline-primary" @click="openModalCreate()"
      >+ สร้าง</b-button>
      </div>
    </div>
    <b-table-simple hover small caption-top responsive class="mt-3">
      <b-thead>
        <b-tr>
          <b-th>#</b-th>
          <b-th>ชื่อ</b-th>
          <b-th>Email</b-th>
          <!-- <b-th>เบอร์โทร</b-th>
          <b-th>Facebook</b-th>
          <b-th>Line</b-th>
          <b-th>Tiktok</b-th> -->
          <b-th>action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(user, index) in users" :key="index">
          <b-td>{{ index + 1 }}</b-td>
          <b-td>{{ user.name }}</b-td>
          <b-td>{{ user.email }}</b-td>
          <!-- <b-td>{{ user.tel }}</b-td>
          <b-td>{{ user.facebook }}</b-td>
          <b-td>{{ user.line }}</b-td>
          <b-td>{{ user.tiktok }}</b-td> -->
          <b-td>
            <b-button variant="outline-primary" @click="openModalDetail(user)"
              >รายละเอียด</b-button
            >
            <b-button variant="outline-secondary" @click="openModalEdit(user)"
              >แก้ไข</b-button
            >
            <b-button variant="outline-danger" @click="openModalDelete(user)"
              >ลบ</b-button
            >
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    </b-container>
    <ModelEditUser ref="edit" @getdata="getData()"></ModelEditUser>
    <ModelCreateUser ref="create" @getdata="getData()"></ModelCreateUser>
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
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      axios
        .get('http://localhost:8000/users/list')
        .then((res) => {
          this.users = res.data.user
          console.log(res.data.user)
        })
        .catch(() => {
          return
        })
    },
    openModalDetail(user) {
      this.$refs.edit.open(user)
    },
    openModalEdit(user) {
      this.$refs.edit.open(user)
    },
    openModalCreate() {
      this.$refs.create.open()
    },
    openModalDelete(user) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:8000/user/${user.id}`).then((res) => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            this.getData()
          })
        }
      })
    },
  },
}
</script>
