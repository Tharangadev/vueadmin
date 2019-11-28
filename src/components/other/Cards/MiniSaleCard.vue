<template>
  <div>
    <b-card no-body class="p-0 addbottommargin">
      <b-card-body
        class="p-2 m-0 d-flex align-items-center justify-content-start"
      >
        <div
          class="iconwrapper d-flex align-items-center justify-content-center"
          :style="{ backgroundColor: color }"
        >
          <font-awesome :icon="minicardicon"> </font-awesome>
        </div>
        <div class="ml-2">
          <div class="header-2">
            <strong>
              {{ minicardnumber }}
            </strong>
            {{ minicardtitle }}
          </div>
          <div class="subtext">
            {{ minicardsubhead }}
          </div>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "MiniSaleCard",
  props: ["color", "minicardnumber", "minicardtitle", "minicardsubhead"],
  data: () => ({
    minicardicon: "shopping-cart"
  })
};
</script>
<style lang="scss" scoped>
.iconwrapper {
  height: 2.5rem;
  width: 2.5rem;
  color: #fff;
  background: #e0e0e0;
  border-radius: 10%;
  path {
    color: #fff;
  }
}
</style>
