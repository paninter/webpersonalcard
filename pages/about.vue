<template>
  <div align="center" justify="center">
    <b-container>
      <b-col cols="12" sm="12">
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
                  <b-img
                    src="../assets/image/กรอบพร้อมfontรูป.png"
                    class="rounded-lg"
                    alt="กรอบพร้อมfontรูป.png"
                    width="auto"
                    height="auto"
                  ></b-img>
                </div>
                <div align="center" justify="center" class="mt-3">
                  <b-col cols="12" sm="10">
                    <div>
                      <b-img
                        src="../assets/image/name1.png"
                        alt="name1"
                        class="mt-4"
                        width="400px"
                      >
                        <b-form-input id="name" autocomplete="false" />
                      </b-img>
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
                    <div class="mt-4">
                      <b-img
                        src="../assets/image/face.png"
                        alt="face"
                        width="400px"
                      >
                        <b-form-input
                          id="facebook"
                          placeholder="facebook"
                          autocomplete="false"
                        />
                      </b-img>
                      <b-img
                        src="../assets/image/linee.png"
                        alt="linee"
                        width="400px"
                      >
                        <b-form-input
                          id="line"
                          placeholder="line"
                          autocomplete="false"
                        />
                      </b-img>
                      <b-img
                        src="../assets/image/tiktok.png"
                        alt="tiktok"
                        width="400px"
                      >
                        <b-form-input
                          id="textarea"
                          placeholder="tiktok"
                          autocomplete="false"
                        />
                      </b-img>
                      <b-img
                        src="../assets/image/phone.png"
                        alt="phone"
                        width="400px"
                      >
                        <b-input
                          id="phone"
                          placeholder="phone"
                          autocomplete="false"
                        />
                      </b-img>

                      <!-- <b-input
                        id="textarea"
                        placeholder="Facebook"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-6"
                      />
                      <b-input
                        id="textarea"
                        placeholder="Line"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-6"
                      />
                      <b-input
                        id="textarea"
                        placeholder="Tiktok"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-6"
                      />
                      <b-input
                        id="textarea"
                        placeholder="Phone"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-6"
                      /> -->
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
export default {
  data() {
    return {
      name: '',
      email: '',
      facebook: '',
      line: '',
      tiktok: '',
      tel: '',
    }
  },
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
.b-form-input {
  border-radius: 30px;
  height: 40px;
  width: auto;
  margin-left: 95px;
  margin-right: 10px;
}
</style>
