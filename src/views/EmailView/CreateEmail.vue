<template>
  <b-card no-body class="cardshadow">
    <b-card-header>Create a new mail</b-card-header>
    <b-card-body>
      <b-row class="mb-2">
        <b-col cols="2">To:</b-col>
        <b-col cols="10">
          <b-form-input class="w-100 formborderradious"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col cols="2">From:</b-col>
        <b-col cols="10">
          <b-form-input class="w-100 formborderradius"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-textarea class="mt-2 formborderradius" rows="10"></b-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button  class="button-normal float-right ml-2 mt-2">Send the message</b-button>

          <b-button class="  float-lg-right ml-2 mt-2" variant="light">cancel</b-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
    name:"CreateEmail"
};
</script>

<style>
</style>
