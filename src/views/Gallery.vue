<template>
  <div>
    <b-row>
      <b-col>
        <h3 class="mainpageTitle mb-4">Chat Page</h3>
      </b-col>
    </b-row>
    <b-row class>
      <b-col sm="6" lg="4" v-for="(i,index) in 20" :key="index">
        <b-card no-body class="addbottommargin cardshadow">
          <b-card-body class="p-3">
            <b-card-img-lazy src="https://placeimg.com/300/200/any" fluid class="w-100"></b-card-img-lazy>
          </b-card-body>
          <b-card-footer class="bg-white border-0 d-flex justify-content-between pt-0">
            <div class="avatar_block d-flex">
              <div class="avatar-md">
                <img class="rounded-circle circleShadow w-100 h-100" src="../assets/kitty.jpg" alt />
              </div>
              <div class="avatar_name pl-2">
                <div class>Kitty mousehunter</div>
                <div class="icongrey">12 Days ago</div>
              </div>
            </div>
            <div class="liked-count d-flex align-items-center">
              <div class="liked p-2">
                <font-awesome icon="heart" class="icongrey"></font-awesome>
              </div>
              <div class="seen p-2">
                <font-awesome icon="eye" class="icongrey"></font-awesome>
              </div>
            </div>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Gallery"
};
</script>

<style scoped lang="scss">
.liked-count {
  div {
    cursor: pointer;
  }
}
</style>