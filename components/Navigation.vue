<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">หน้าหลัก</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">แนะนำ</b-nav-item>
          <b-nav-item href="#">เกี่ยวกับเรา</b-nav-item> -->
        <b-nav-item href="/about">บัตรตัวแทน</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="ค้นหา"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >ค้นหา</b-button
          >
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="sign" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar
              badge
              badge-variant="success"
              src="https://placekitten.com/300/300"
            ></b-avatar>
          </template>
          <b-dropdown-item href="/login">ล็อกอิน</b-dropdown-item>
          <b-dropdown-item href="/register">ลงทะเบียน</b-dropdown-item>
          <b-dropdown-item href="/profile">โปรไฟล์</b-dropdown-item>
          <b-dropdown-item href="/changepassword"
            >เปลี่ยนรหัสผ่าน</b-dropdown-item
          >
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style>
.bg-dark {
  background-color: #fb0019 !important;
}
</style>
