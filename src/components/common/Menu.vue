<template>
  <div class="menubar">
    <b-navbar class="white-bg border-top border-bottom pl-2">
      <b-container>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">
              <font-awesome icon="home"></font-awesome>
              <span class="menuItem pl-2">Home</span>
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <font-awesome icon="cube"></font-awesome>
            <span class="menuItem pl-2">Interface</span>
          </b-nav-item>
          <b-nav-item-dropdown no-caret class="navbar-drop left-menu">
            <template v-slot:button-content>
              <font-awesome icon="file"></font-awesome>
              <span class="menuItem pl-2">Pages</span>
            </template>
            <b-dropdown-item>
              <router-link to="/profile">Profile</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/login">Login</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/register">Register</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/forgot password">Forgot password</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/gallery">Gallery</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/email">Email view</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/store">Store</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="Blog">Blog</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/chat">Chat</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">
            <font-awesome icon="check"></font-awesome>
            <span class="menuItem pl-2">Form</span>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/gallery">
              <font-awesome icon="camera"></font-awesome>
              <span class="menuItem pl-2">Gallery</span>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Menu"
};
</script>
<style lang="scss" scoped>
.menubar {
  font-size: 0.95rem;
  svg {
    path {
      color: rgb(154, 160, 172);
    }
  }
  .menuItem {
    font-size: 0.9rem;
    color: rgb(154, 160, 172);
    &:hover {
      color: #5c5f64;
      path {
        color: #5c5f64;
      }
    }
  }
  li {
    min-width: 2rem;
  }
}
</style>
