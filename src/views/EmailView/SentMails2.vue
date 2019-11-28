<template>
  <b-card no-body class="cardshadow">
    <b-card-body>
      <b-list-group>
        <div :class="{list_slot:mailView}" class="emaillist">
          <b-list-group
            class="rounded-0"
            i
            v-for="(singleMail,index) in sentMail"
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
      </b-list-group>
    </b-card-body>
  </b-card>
</template>

<script>
  import EmailInboxItem from '@/components/other/Emails/EmailInboxItem';
  import MailView from './MailView';
  import {mapState} from 'vuex';
  export default {
    name: 'Sentmails',
    components: {EmailInboxItem, MailView},
	  data:(){
		  return{
			  mailView:false
		  }
	  },
	  methods:(){
		  
	  }, 
    computed: {
      ...mapState({
        sentMail: state => state.email.sentMails,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .sender {
    strong {
      font-size: 1.2rem;
    }
  }
</style>
