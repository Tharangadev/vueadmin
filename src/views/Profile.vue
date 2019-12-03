<template>
  <div>
 <b-row>
<b-col>
  <h3 class="mainpageTitle mb-4">Profile Page</h3>
</b-col>
 </b-row>
    <b-row>
      <b-col sm="12" lg="4" md="4" xs="12">
        <ProfileCard />
        <ProfileCardSmall />
      </b-col>
      <b-col sm="12" lg="8" md="8" xs="12">
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
