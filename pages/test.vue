<template>
  <div>
    <img :src="base64Img" />
    <label
      >File
      <input
        type="file"
        id="file"
        ref="file"
        v-on:change="onChangeFileUpload()"
      />
    </label>
    <button v-on:click="submitForm()">Upload</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      facebook: '',
      line: '',
      tiktok: '',
      users: [],
      file: '',
      imageData: null,
      imageUrl: '',
      id: 0,
      base64Img: '',
      tel: '',
    }
  },
  mounted() {
    this.getData()
    // this.getImg()
    // this.fetchImage()
  },

  methods: {
    async getData() {
      try {
        await axios.get('http://localhost:8000/user/37').then((res) => {
          this.name = res.data.user.name
          this.email = res.data.user.email
          this.tel = res.data.user.tel
          this.facebook = res.data.user.facebook
          this.tiktok = res.data.user.tiktok
          this.line = res.data.user.line
          this.img = res.data.user.img
          console.log(res.data.user)
        })
      } catch (error) {
        console.log(error)
      }
    },
    async submitForm() {
      let formData = new FormData()
      formData.append('file', this.file)
      try {
        const res = await axios.post('http://localhost:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.imageUrl = res.data
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0]
      this.encodeImage(this.file)
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.base64Img = e.target.result
        }
        reader.readAsDataURL(input)
      }
    },

    // async getImg() {
    //   try {
    //     await axios.get('http://localhost:8000/img').then((res) => {
    //       const imageData = res.data.toString('base64')
    //       // console.log(imageData)
    //       return { imageData }
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
  // computed: {
  //   imageUrl() {
  //     // console.log(imageData)
  //     return `data:image/png;base64,${this.imageData}`
  //   },
  // },
}
</script>

<!-- <style scoped>
.bg-img {
  background-image: url('../assets/image/BG.png');
  background-repeat: no-repeat;
}
.row {
  margin: 0px;
}
/* .b-form-input {
  border-radius: 30px;
  height: 40px;
  width: auto;
  margin-left: 95px;
  margin-right: 10px;
} */
.line {
  background-image: url('../assets/image/linee.png');
  height: auto;
  width: 400px;
  background-size: cover;
}
.name {
  background-image: url('../assets/image/name1.png');
  height: auto;
  width: 400px;
  background-size: cover;
}
.facebook {
  background-image: url('../assets/image/face.png');
  height: auto;
  width: 400px;
  background-size: cover;
}
.phone {
  background-image: url('../assets/image/phone.png');
  height: auto;
  width: 400px;
  background-size: cover;
}
.tiktok {
  background-image: url('../assets/image/tiktok.png');
  height: auto;
  width: 400px;
  background-size: cover;
}
.form-control {
  height: 73px;
  border-radius: 35px;
  width: 400px;
  background-color: #fff0;
  margin-left: 90px;
  border: 1px solid #ced4da00;
  padding: 0.45rem 2rem;
  font-size: x-large;
}
</style> -->
