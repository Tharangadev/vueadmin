<template>
  <div>
    <b-row>
<b-col>
  <h3 class="mainpageTitle mb-4">
    Blog posts
  </h3>
</b-col>
    </b-row>
    <b-row>
      <b-col cols="3" class="d-flex">
        <ImageCard></ImageCard>
      </b-col>
      <b-col cols="3" class="d-flex">
        <ImageCard></ImageCard>
      </b-col>
      <b-col cols="3" class="d-flex">
        <ImageCard></ImageCard>
      </b-col>
      <b-col cols="3" class="d-flex">
        <ImageCard></ImageCard>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <ImageCardH></ImageCardH>
      </b-col>
      <b-col cols="6">
        <ImageCardH></ImageCardH>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <ImageCardH></ImageCardH>
      </b-col>
      <b-col cols="6">
        <ImageCardH></ImageCardH>
      </b-col>
    </b-row>
    <!-- verticle posts -->
    <b-row>
      <b-col cols="3" class="d-flex" v-for="(post,index) in posts" :key="index">
        <ImageCard :item="post"></ImageCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ImageCard from "../components/other/Blog/ImageCard";
import ImageCardH from "../components/other/Blog/ImageCardH";
export default {
  name: "Blog",
  components: {
    ImageCard,
    ImageCardH
  },
  computed: {
    ...mapState({
      posts: state => state.blog.articles
    })
  }
};
</script>

<style scoped></style>
