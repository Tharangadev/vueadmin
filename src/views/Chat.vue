<template><div>
   <b-row>
<b-col>
  <h3 class="mainpageTitle mb-4">
    Chat Page
  </h3>
</b-col>
    </b-row>
  <b-card no-body class="chat-box">
    <b-card-body class="p-0 h-100">
      <b-row class="h-100">
        <b-col cols="3" class="pr-0 h-100">
          <div class="d-flex flex-column h-100 position-relative">
            <!------- -->
            <b-form-group class="searchbar mb-0 pt-2 background-grey p-2">
              <b-form-input
                class="rounded-pill"
                placeholder="Search"
                v-model="searchBox"
              ></b-form-input>
            </b-form-group>
            <!------- -->
            <ul class="usersearch_drop" v-if="chatSearch.length>0">
              <li v-for="(sUser,index) in chatSearch" :key="index">
                {{sUser.name}}
              </li>
            </ul>
            <!------- -->
            <div class="chat-userlist">
              <b-list-group v-for="(user,index) in users" :key="index">
                <b-list-group-item class="border-0 m-0">
                  <div class="d-flex align-items-center">
                    <div class="avatar_block d-flex">
                      <div class="avatar-md mr-3">
                        <img
                          class="rounded-circle circleShadow w-100 h-100"
                          :src="user.avatar"
                          alt
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <strong>{{user.name}}</strong>
                      </div>
                      <div>{{user.email}}</div>
                    </div>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </div>
            <!------- -->
          </div>
        </b-col>
        <b-col cols="9" class="h-100 pl-0">
          <b-card no-body class="h-100 border-0">
            <b-card-header>
              <h3>Chatting with James may</h3>
            </b-card-header>
            <b-card-body>
              <LeftBubble></LeftBubble>
              <RightBubble></RightBubble>
            </b-card-body>
            <b-card-footer>
              <!-- Using components -->
              <b-input-group class="mt-3">
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button class="button-normal chatSend_btn">send</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card></div>
</template>
<script>
  import {mapState} from 'vuex';
  import {SEARCHCHATUSER} from '../store/action.type';
  import LeftBubble from '@/components/other/chat/LeftBubble.vue';
  import RightBubble from '@/components/other/chat/RightBubble.vue';
  export default {
    name: 'Chat',
    data() {
      return {
        searchBox: '',
      };
    },
    components: {
      LeftBubble,
      RightBubble,
    },
    computed: {
      ...mapState({
        users: state => state.chat.chatusers,
        chatSearch: state => state.chat.searchUserResults,
      }),
    },
    watch: {
      searchBox(val) {
        this.$store.dispatch(SEARCHCHATUSER, this.searchBox);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .list-group-item {
    background: #eee;
  }
  .chat-box {
    height: calc(100vh - 120px);
  }
  .chat-userlist {
    height: calc(100% - 55px);
    overflow-y: scroll;
  }
  .searchbar {
    height: 55px;
  }
  .usersearch_drop {
    position: absolute;
    width: calc(100% - 44px);
    border-radious: 30px;
    top: 44px;
    padding: 0px 10px;
    margin: 0px 22px;
    background: #eeeeee;
    box-shadow: 0px 4px 2px 2px #96969642;
    left: 0px;
    z-index: 1;
    border: 1px solid #989898;
    border-top: none;
    li {
      padding: 0.25rem 1.5rem;
      list-style: none;
      cursor: pointer;
    }
  }
  .chatSend_btn{

  }
</style>
