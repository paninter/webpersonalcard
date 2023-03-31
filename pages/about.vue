<template>
  <div align="center" justify="center">
    <b-container>
      <b-col cols="12" sm="12">
        <img :src="imageUrl" v-if="imageUrl" />
        <!-- <img
          v-bind:src="'data:image/png;base64,' + `${imageData}`"
          v-if="imageUrl"
        /> -->
        <!-- <span>{{ imageUrl }}</span> -->
        <b-card :src="'../assets/image/BG.png'" class="bg-img row">
          <b-row>
            <b-col class="container" cols="6" md="6">
              <b-card-text class="mt-2">
                <b-col cols="12" sm="12">
                  <b-img
                    src="../assets/image/logogrich.png"
                    alt="My Logo"
                    class="logo-img"
                    width="450px"
                    height="125px"
                  />
                </b-col>
                <div align="center" class="mt-4">
                  <!-- <img :src="imageUrl" /> -->
                  <b-img
                    :src="require(`../picture/${imgname}`)"
                    class="rounded-lg"
                    alt="กรอบพร้อมfontรูป.png"
                    width="auto"
                    height="auto"
                  ></b-img>
                </div>
                <div align="center" justify="center" class="mt-3">
                  <b-col cols="12" sm="10">
                    <div>
                      <div class="name mt-2">
                        <b-input v-model="name" disabled autocomplete="false" />
                      </div>
                    </div>
                  </b-col>
                  <b-img
                    src="../assets/image/grich.png"
                    alt="grich"
                    class="grich-img"
                    width="400px"
                    height="auto"
                  />
                </div>
              </b-card-text>
            </b-col>
            <b-col class="container" cols="6" md="6">
              <b-card-text class="mt-4">
                <div>
                  <div align="right" class="mt-6">
                    <b-img
                      src="../assets/image/font.png"
                      alt="font"
                      width="250px"
                      height="auto"
                    />
                  </div>
                  <figure class="figure">
                    <div align="center" class="mt-5">
                      <b-img
                        src="../assets/image/กรอบพร้อมfontQR.png"
                        alt="กรอบพร้อมfontQR.png"
                        width="300px"
                      ></b-img>
                      <div class="mt-4">
                        <b-img
                          src="../assets/image/fontdee.png"
                          alt="fontdee"
                          width="auto"
                          height="40px"
                        />
                      </div>
                    </div>

                    <div class="mt-4">
                      <b-img
                        src="../assets/image/fontรหัส.png"
                        alt="fontรหัส"
                        width="300px"
                      >
                      </b-img>
                    </div>
                  </figure>

                  <b-row align="center" justify="center">
                    <div class="mt-2">
                      <div class="facebook">
                        <b-input
                          autocomplete="false"
                          v-model="facebook"
                          disabled
                        />
                      </div>
                      <div class="line mt-2">
                        <b-input autocomplete="false" v-model="line" disabled />
                      </div>
                      <div class="tiktok mt-2">
                        <b-input
                          autocomplete="false"
                          v-model="tiktok"
                          disabled
                        />
                      </div>
                      <div class="phone mt-2">
                        <b-input autocomplete="false" v-model="tel" disabled />
                      </div>
                    </div>
                  </b-row>
                </div>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-container>
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
      imageData: null,
      imageUrl: '',
      id: 0,
      tel: '',
      imgname: '0001.png',
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
    async fetchImage() {
      try {
        const res = await axios.get('http://localhost:8000//img/:file(*)')
        this.imageUrl = res.data
        console.log(res.data)
      } catch (error) {
        console.log(error)
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

<style scoped>
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
</style>
