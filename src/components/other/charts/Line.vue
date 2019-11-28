<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  name: "LineChart",
  props: ["data", "options", "color"],
  mounted() {
    this.data.datasets[0].backgroundColor = this.color.background;
    this.data.datasets[0].borderColor = this.color.border;
    this.renderChart(this.data, this.options);
  }
};
</script>
<style lang="scss">

</style>
