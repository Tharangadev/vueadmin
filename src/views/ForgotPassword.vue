<template>
  <b-row>
    <b-col class="mx-auto logincard" cols="4">
      <b-card no-body class="mt-3 p-3">
        <b-card-body>
          <h4 class="mb-3">Forgot password</h4>
          <p class="mb-3">
            Enter email address and password reset link will be sent to you
          </p>
          <b-form-group>
            <slot>
              <strong class="mb-2">
                Enter email address
              </strong>
            </slot>
            <b-form-input type="email"></b-form-input>
          </b-form-group>
          <b-button class="pt-2 w-100" variant="primary">
            Send the mail
          </b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'forgot-password',
  };
</script>

<style lang="scss" scoped>
  p {
    font-size: 15px;
  }
</style>
