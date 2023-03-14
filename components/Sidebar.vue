<template>
  <div class="col-1">
    <b-button v-b-toggle.sidebar-no-header
      ><font-awesome-icon :icon="['fas', 'list']" class="icon alt"
    /></b-button>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <b-button @click="hide"
            ><font-awesome-icon :icon="['fas', 'list']" class="icon alt" />
          </b-button>
          <a>Grich @dawdwa</a>
        </div>
        <div class="p-3">
          <b-avatar
            src="https://placekitten.com/300/300"
            size="6rem"
            class="mb-3"
            badge
            badge-variant="success"
          ></b-avatar>
          <b-row>
            <b-col sm="2">
              <label for="text lg">Name:</label>
            </b-col>
            <b-col sm="10">
              <p>adwdwa#1235</p>
            </b-col>
          </b-row>
        </div>

        <nav class="mb-3">
          <div>
            <a
              class="btn text-white m-1"
              style="background-color: rgb(59 89 152 / 0%)"
              href="#!"
            >
              <font-awesome-icon :icon="['fa', 'house']" class="icon alt" />
            </a>
            <b-dropdown id="dropdown-divider" text="Dashboard">
              <b-dropdown-item-button>First item</b-dropdown-item-button>
              <b-dropdown-item-button>Second item</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Separated Item</b-dropdown-item-button>
            </b-dropdown>
          </div>
          <div>
            <a
              class="btn text-white m-1"
              style="background-color: rgb(59 89 152 / 0%)"
              href="#!"
            >
              <font-awesome-icon :icon="['fa', 'user']" class="icon alt" />
            </a>
            <b-dropdown id="dropdown-divider" text="Profile">
              <b-dropdown-item-button>First item</b-dropdown-item-button>
              <b-dropdown-item-button>Second item</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button>Separated Item</b-dropdown-item-button>
            </b-dropdown>
          </div>
        </nav>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {}
</script>

<style>
.b-sidebar {
  background-color: rgb(237, 65, 65) !important;
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  /* padding-top: 20px; */
}
.btn-block {
  display: block;
  width: 20%;
}
.input1 {
  border-radius: 30px;
  height: 25px;
  width: 100px;
  margin-right: 10px;
}
</style>
