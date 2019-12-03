<template>
  <b-card no-body class="addbottommargin">
    <b-card-body>
      <div class="d-flex align-content-center">
        <img
          alt=""
          class="avatarBig rounded-circle circleShadow"
          src="@/assets/avatar.svg"
          height="75"
        />
        <div class="pl-3">
          <h3 class="header">
            {{user.name}}
          </h3>
          <p class="subheader">
            {{user.motto}}
          </p>

          <b-button-group class="socialbuttons mt-0">
            <b-button variant="link" class="pl-0" :href="user.twitter">
              <div>
                <font-awesome :icon="{ prefix: 'fab', iconName: 'twitter' }" />
              </div>
            </b-button>
            <b-button variant="link" :href="user.facebook">
              <div>
                <font-awesome :icon="{ prefix: 'fab', iconName: 'facebook' }" />
              </div>
            </b-button>
            <b-button variant="link" :href="user.skype">
              <div>
                <font-awesome :icon="{ prefix: 'fab', iconName: 'skype' }" />
              </div>
            </b-button>
            <b-button variant="link" :tel="user.phone">
              <div>
                <font-awesome :icon="{ prefix: 'fas', iconName: 'phone' }" />
              </div>
            </b-button>
          </b-button-group>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'ProfileCardSmall',
computed:{
  ...mapState({
    user:state=>state.Profile
  })

  }
}
</script>

<style lang="scss" scoped>
  .subheader {
    margin-bottom: 0;
  }
  .header {
    margin-bottom: 0;
  }
  .socialbuttons {
    button {
      div {
        background: #eee;
        border-radius: 50%;
        padding: 0.2em 0.5em;

        path {
          color: #9aa0ac;
        }
      }
    }
  }
</style>
