<template>
  <div>
 <b-row>
<b-col>
  <h3 class="mainpageTitle mb-4">Profile Page</h3>
</b-col>
 </b-row>
    <b-row>
      <b-col cols="4">
        <ProfileCard />
        <ProfileCardSmall />
      </b-col>
      <b-col cols="8">
        <CommentBox />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import ProfileCard from "../components/other/Profiles/ProfileCard";
import ProfileCardSmall from "../components/other/Profiles/ProfileCardSmall";
import CommentBox from "../components/other/Profiles/CommentBox";

  export default {
    name: 'Profile',
    components: {CommentBox, ProfileCardSmall, ProfileCard},
  };
</script>
<style lang="scss" scoped></style>
