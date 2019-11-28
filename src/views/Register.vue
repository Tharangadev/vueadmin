<template>
  <b-row>
    <b-col class="mx-auto logincard" cols="4">
      <h3 class="mb-3 text-center">Register</h3>
      <b-card no-body>
        <b-card-body>
          <div class="mb-4 logincardtitle">
            Enter register details
          </div>
          <b-form-group
            label="Email Address"
            label-class="text_label"
          >
            <b-form-input trim type="email"></b-form-input>
          </b-form-group>

          <b-form-group
                  label="User name"
                  label-class="text_label"
          >
            <b-form-input trim type="email"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password"
            label-class="text_label"
          >
            <b-form-input trim type="password"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Repeat password"
            label-class="text_label"
          >
            <b-form-input trim type="password"></b-form-input>
          </b-form-group>
          <b-button class="w-100 mt-2" variant="primary"
            ><strong class="text-white">Login</strong></b-button
          >
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'Login',
  };
</script>
<style lang="scss" scoped>
  .loginPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 120px);
  }

  .logincard {
    max-width: 24rem;
  }

  .logincardtitle {
    font-size: 1.5rem;
  }

  .text_label {
    font-weight: bold;
  }
</style>
