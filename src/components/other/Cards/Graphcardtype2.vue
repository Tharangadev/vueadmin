<template>
  <div>
    <b-card no-body class="p-0 addbottommargin">
      <b-card-header class="card-header">
        <h6 class="mb-0">
          Activities
        </h6>
      </b-card-header>
      <!--      //:TODO =>height should be number-->
      <b-card-body class="p-5">
        <Pie></Pie>
      </b-card-body>
    </b-card>
  </div>
</template>
<style></style>
<script>
import Pie from "./Pie";
export default {
  name: "Grphcardtype2",
  components: { Pie },
  data() {
    return {};
  }
};
</script>
