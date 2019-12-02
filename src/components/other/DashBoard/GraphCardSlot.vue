<template>
  <b-row>
    <b-col sm="6" cols="6" ls="3" lg="3" v-for="(item,num) in 4" :key="num">
      <Graphcardtype1
        :colors="graph_colors[item-1]"
        :lineChart_data="dash_lineCards[num]"
        :line_options="line_options"
       title="some title"
        number="121"
      ></Graphcardtype1>
    </b-col>
  </b-row>
</template>
<script>
import Graphcardtype1 from "../charts/Graphcardtype1";
//data for dashboard specific card
import { dash_lineCards, line_options } from "@/data/graph.js";
export default {
  name: "Graphcardslot",
  components: { Graphcardtype1 },
  data: () => ({
    dash_lineCards: dash_lineCards,
    line_options: line_options,
    graph_colors: [
      {
        background: "#edf2fb",
        border: "#5f90d5"
      },
      {
        background: "#fdedec",
        border: "#e95f50"
      },
      {
        background: "#eff8e6",
        border: "#5eba00"
      },
      {
        background: "#fef9e7",
        border: "#f0c40f"
      }
    ]
  })
};
</script>
<style lang="scss" scoped></style>
