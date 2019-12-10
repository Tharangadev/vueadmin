<template>
  <b-card no-body class="d-flex flex-row addbottommargin">
    <img class="blogimage" src="https://picsum.photos/id/866/200/300" alt />
    <div>
      <b-card-body class="flex-column d-flex h-100">
        <h4>some headline goes here</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet natus excepturi nemo ducimus! Omnis deleniti ex voluptas fugit odio. Fugit, eligendi! Inventore quasi quam asperiores voluptatum quae aliquid animi.</p>
        <div class="card-avatar d-flex align-items-center mt-auto">
          <div class="image">
            <img src="@/assets/avatar.svg" height="50" alt class="rounded-circle" />
          </div>
          <div class="ml-2 mt-auto">
            <div>kitty mousehunter</div>
            <small>3 mins ago</small>
          </div>
          <div class="ml-auto like">
            <span class="likeicon" @click="postlike" :class="{liked:liked}">
              <font-awesome icon="heart"></font-awesome>
            </span>
          </div>
        </div>
      </b-card-body>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "ImageCard",
  data() {
    return {
      liked: false
    };
  },
  methods: {
    postlike() {
      this.liked = !this.liked;
    }
  }
};
</script>

<style scoped lang="scss">
.likeicon {
  cursor: pointer;
}
.liked {
  path {
    color: red;
  }
}
.blogimage {
}
</style>
