<template>
  <b-card no-body>
    <b-card-body>
      <div class="text-center">
        <img
          src="../../assets/apple-iphone7-special.jpg"
          class="storeitemimg"
          alt=""
        />
      </div>
    </b-card-body>
      <b-card-footer class="card-header">
        <div class="d-flex  justify-content-between align-items-center ">
          <div>Apple iphone</div>
          <div>$750</div>
          <b-button>buy now</b-button>
        </div>
      </b-card-footer>
  </b-card>
</template>
<style lang="scss" scoped>
  .storeitemimg {
    height: 200px;
  }
</style>
<script>
  export default {
    name: 'Storeitem',
    data() {
      return {
        apple: 'apple',
      };
    },
  };
</script>
