<template>
  <b-card no-body class="pb-5 addbottommargin cardshadow">
    <b-card-header class="headerimage p-0">
      <img src="https://picsum.photos/id/1041/300/200" alt="" />
    </b-card-header>
    <b-card-body class="profilecardbody">
      <div class="text-center image pb-2">
        <img
          class="rounded-circle circleShadow"
          src="@/assets/kitty.jpg"
          alt=""
        />
      </div>
      <h3 class="text-center text-capitalize pb-2">
        {{user.name}}
     </h3>
      <p class="text-center">
        {{user.discription}}
      </p>
      <!--        //TODO:Replace image with fontawesome icon-->
      <div class="text-center mt-5">
        <a :href="user.social.twitter">
          <b-button variant="primary" size="sm">
            <img
              src="@/assets/twitter-white.svg"
              width="15px"
              alt=""
              class="mr-2"
            />Twitter</b-button
          >
        </a>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'ProfileCard',
    data() {
      return {};
    },
    computed: {
      ...mapState({
        user: state => state.Profile,
      }),
    },
  };
</script>

<style scoped lang="scss">
  .headerimage {
    height: 10rem;
    background-size: cover;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .profilecardbody {
    .image {
      img {
        margin-top: -5rem;
      }
    }
    p {
      font-size: 1.2rem;
    }
  }
</style>
