<template>
  <div>
    <b-card no-body class="p-0 addbottommargin">
      <div class="d-flex align-items-center p-3 justify-content-between">
        <h3 class="mb-0">243</h3>
        <p class="mb-0 header-2">New users</p>
      </div>
<!--      //:TODO =>height should be number-->
      <LineChart :color="colors" :data="graphdata" :options="graphoptions"/>
    </b-card>
  </div>
</template>
<style></style>
<script>
import LineChart from "./charts/Line";
export default {
  name: "Grphcardtype1",
  components: { LineChart },
  data() {
    return {
      graphdata: this.lineChart_data,
      graphoptions: this.line_options,
      linechart:100
    };
  },
  methods:{
  },
  props: ["colors", "lineChart_data", "line_options"],
};
</script>
