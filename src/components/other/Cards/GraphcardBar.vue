<template>
  <b-card no-body class="p-0 addbottommargin">
    <b-card-header class="card-header">
      <h6 class="mb-0">
        {{ chartTitle }}
      </h6>
    </b-card-header>
    <!--      //:TODO =>height should be number-->
    <b-card-body class="p-5">
      <Bar></Bar>
    </b-card-body>
  </b-card>
</template>
<style></style>
<script>
import Bar from "../charts/Bar";
export default {
  name: "GraphcardBar",
  components: { Bar },
  props: ["chartTitle"],
  data() {
    return {};
  }
};
</script>
