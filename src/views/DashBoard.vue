<template>
  <div>
    <h3>Home</h3>
    <NumberCardBlock></NumberCardBlock>
    <SalesCards></SalesCards>
    <GraphCard></GraphCard>
    <Invoice></Invoice>
    <b-row>
      <b-col lg="4" md="6" xs="12" sm="12">
        <ProfileCard></ProfileCard>
      </b-col >
      <b-col lg="4" md="6" xs="12" sm="12">
        <GraphcardPie chartTitle="This month sales"></GraphcardPie>
      </b-col>
      <b-col  lg="4" md="6" xs="12" sm="12">
        <GraphcardBar chartTitle="this is a bar chart"></GraphcardBar>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <UserCard></UserCard>
      </b-col>
      <b-col>
        <Activity></Activity>
      </b-col>
    </b-row>
  </div>
</template>

<script>
//componet stripes
import NumberCardBlock from "../components/other/DashBoard/NumberCardBlock";
import SalesCards from "../components/other/DashBoard/SalesCards";
import GraphCard from "../components/other/DashBoard/GraphCardSlot";
import Invoice from "../components/other/DashBoard/Invoice";
//cards
import ProfileCard from "../components/other/Profiles/ProfileCard";
import GraphcardPie from "../components/other/Cards/GraphcardPie";
import GraphcardBar from "../components/other/Cards/GraphcardBar";
import UserCard from "../components/other/Cards/Usercard.vue";
import Activity from "../components/other/Cards/Activity.vue";

export default {
  name: "DashBoard",
  components: {
    GraphcardPie,
    NumberCardBlock,
    GraphcardBar,
    SalesCards,
    GraphCard,
    Invoice,
    ProfileCard,
    UserCard,
    Activity
  }
};
</script>

<style></style>
