<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "barchart",
  data: () => ({
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgb(28, 51, 83)",
            "rgb(70, 127, 207)",
            "rgb(200, 217, 241)",
            "rgb(126, 165, 221)"
          ],
          borderColor: ["rgba(255, 255, 255, 255)"],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false
              // color: '#eee'
            },

            scaleLabel: {
              display: false,
              labelString: "Month"
            }
          }
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              color: "#eee"
            },
            scaleLabel: {
              // display: true,
              // labelString: 'Value'
            }
          }
        ]
      }
    }
  }),
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>
