<template>
  <b-card no-body class="cardshadow rounded-0 p-0 mail_wrapper">
    <b-card-body class="p-0">
      <div class="d-flex">
        <div :class="{list_slot:mailView}" class="emaillist">
          <b-list-group
            class="rounded-0"
            i
            v-for="(singleMail,index) in emails"
            :key="index"
          >
            <!--                        TODO:use vuex instead of emitiing -->
            <EmailInboxItem
              v-on:viewMail="viewMail($event)"
              :details="singleMail"
            ></EmailInboxItem>
          </b-list-group>
        </div>
        <transition name="mailview">
          <div :class="{view_slot:mailView}" v-if="mailView">
            <MailView></MailView>
          </div>
        </transition>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
  import EmailInboxItem from '@/components/other/Emails/EmailInboxItem';
  import MailView from './MailView';
  import {mapState, mapActions} from 'vuex';
  import {ADD_VIEWMAIL} from '@/store/action.type';

  export default {
    name: 'InboxEmail',
    components: {EmailInboxItem, MailView},
    data() {
      return {
        mailView: false,
        mailId: null,
      };
    },
    methods: {
      viewMail(id) {
        if (!this.mailView) {
          this.mailView = true;
        }
         this.$store.commit(ADD_VIEWMAIL, {mailType: 'inbox', id});
      },
    },
    computed: {
      ...mapState({
        emails: state => state.email.inbox,
      }),
    },
  };
</script>
<style lang="scss" scoped>
*{
  background-color:none;
}
  .mail_wrapper {
    overflow-x: hidden;
  }
  .sender {
    strong {
      font-size: 1.2rem;
    }
  }
  .emaillist {
    width: 100%;
    height: calc(100vh - 120px);
    overflow-y: scroll;
  }
  .list_slot {
    /*width: 40%;*/
  }
  .view_slot {
    width: 150%;
  }
  ///animation mail
  .mailview-enter,
  .mailview-leave-to {
    /*opacity: 0;*/
    transform: translateX(100%);
  }
  .mailview-leave,
  .mailview-enter-to {
    /*opacity: 1;*/
  }
  .mailview-leave-active,
  .mailview-enter-active {
    transition: all 0.2s ease-in-out;
  }

</style>
