<template>
  <b-row class="mt-3">
    <b-col class="mt-3" cols="12" sm="2">
      <h2>Mail server</h2>
      <b-list-group class="bg-transparent border-0 mailmenu">
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="/email/inbox">
            <font-awesome class="mr-2 congrey" icon="inbox" />Inbox
            <b-badge class="float-right">12</b-badge>
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="/email/createmail">
            <font-awesome class="mr-2 congrey" icon="pencil-alt" />Create a mail
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="/email/sentmail">
            <font-awesome class="mr-2 congrey" icon="cloud-upload-alt" />Sent
            Mail
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="#">
            <font-awesome class="mr-2 congrey" icon="info" />Important
            <b-badge class="float-right">2</b-badge>
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="#">
            <font-awesome class="mr-2 congrey" icon="star" />Starred
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="#">
            <font-awesome class="mr-2 congrey" icon="tag" />Tags
          </router-link>
        </b-list-group-item>
        <b-list-group-item class="bg-transparent border-0 text-left pl-0">
          <router-link to="#">
            <font-awesome class="mr-2 congrey" icon="trash" />Trash
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </b-col>
    <b-col cols="12" sm="10">
      <router-view class="mailRouterView"></router-view>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'EmailView',
    created() {
      this.$router.push({name: 'inbox'});
    },
  };
</script>

<style lang="scss" scoped>
  .mailmenu {
    .list-group-item {
      font-size: 1.1rem;
      svg {
        width: 25px;
        path {
          color: #9aa0ac;
        }
      }
    }
  }
</style>
