<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <b-container class="mt-4">
      <router-view></router-view>
    </b-container>
    <Footer></Footer>
  </div>
</template>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700,900&display=swap');

* {
  font-family: 'Lato', sans-serif;
  color: rgb(73, 80, 87);
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: left;
}
.App {
  height: 100%;
}
.App-chat {
  overflow: hidden;
}
body {
  background: #f5f7fb;
}
.navbarMain {
}

.avatar {
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: #eee;
}

.avatar-md {
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: #eee;
}

.avatar_dis {
  font-size: 0.95rem;

  div {
    line-height: 1.1;

    &:last-child {
      font-size: 0.7rem;
    }
  }
}
//buttons
.button-normal {
  background-color: #346cb0;
  color: #fff !important;
  border: 1px solid #346cb0;
}

///backgrounds
.white-bg {
  background: #fff;
}

///margins paddings
.addbottommargin {
  margin-bottom: 1.5rem;
}

//TODO :fix this with scss
.mainPageTitle {
}
.text-header {
  font-size: 3rem;
}

.header-2 {
  font-size: 1.1rem;
}

.subtext {
  font-size: 85%;
}

.card-header {
  background: #fff;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;
}

////shadows
.circleShadow {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.cardshadow,
.common-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

///colors
.icongrey {
  color: #9aa0ac;
  path {
    color: #9aa0ac;
  }
}
//border-radious
.formborderradius {
  border-radius: 3px;
}
.background-grey {
  background: #eee;
}
///dropdown menu
///dropdown menu
.dropdown-menu {
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 3px;
  // margin-top: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .dropdown-item {
    padding: 0.5rem 1.7rem;
    font-size: 0.9rem;
    color: #9aa0ac;
    &:active {
      background-color: #346cb0;
      color: #fff !important;
      div {
        strong {
          color: #fff;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        color: #fff;
      }
    }
  }
}
.left-menu {
  .dropdown-menu {
    .dropdown-item {
      &:before {
        position: absolute;
        left: 6px;
        top: -6px;
        display: inline-block;
        height: 10px;
        width: 10px;
        background: white;
        transform: rotate(45deg);
        border-top: 1px solid #ced4da;
        border-left: 1px solid #ced4dad9;
        content: '';
      }
    }
  }
}
.right-menu {
  .dropdown-item {
    &:before {
      position: absolute;
      top: -6px;
      right: 6px;
      display: inline-block;
      height: 10px;
      width: 10px;
      background: white;
      transform: rotate(45deg);
      border-top: 1px solid #ced4da;
      border-left: 1px solid #ced4dad9;
      content: '';
    }
  }
}

@media screen and (max-width: 500px) {
  .dropdown-menu {
    border: none;
    box-shadow: none;
  }
  .left-menu .dropdown-menu .dropdown-item:before {
    display: none;
  }
}
</style>
<script>
import Menu from './components/common/Menu';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>
