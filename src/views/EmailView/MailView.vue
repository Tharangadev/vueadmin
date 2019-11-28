<template>
  <b-card no-body class="rounded-0 border-0">
    <b-card-body>
      <p class="mb-1">
        <strong>From:</strong>
      </p>
      <p class="mb-2">
        <strong>
          To:
        </strong>
        <span >
         {{viewMail.to || viewMail.from}}
        </span>
      </p>
      <div class="email_body">{{viewMail.content}}</div>
    </b-card-body>
  </b-card>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'MailView',
    computed: {
      ...mapState({
        viewMail: state => state.email.viewmail,
      }),
    },
  };
</script>

<style scoped></style>
