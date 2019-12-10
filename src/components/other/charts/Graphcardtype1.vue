<template>
  <div>
    <b-card no-body class="p-0 addbottommargin">
      <div class="d-flex align-items-center p-3 justify-content-between">
        <span class="mb-0">{{numbers}}</span>
        <span>{{title}}</span>
      </div>
      <LineChart :color="colors" :data="graphdata" :options="graphoptions"/>
    </b-card>
  </div>
</template>
<style></style>
<script>
import LineChart from "./Line";
export default {
  name: "Grphcardtype1",
  components: { LineChart },
  data() {
    return {
      graphdata: this.lineChart_data,
      graphoptions: this.line_options,
      linechart:100,
      numbers:this.number
    };
  },
  methods:{
  },
  props: ["colors", "lineChart_data", "line_options","number","title"],
};
</script>
