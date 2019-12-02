const lineChart_data = {
  labels: ['01', '02', '03', '04', '05'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 13, 14, 10, 12],
      borderWidth: 1,
    },
  ],
};
////line chart data

const dash_lineCards = [
  {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        label: '# of Votes',
        data: [1, 10, 14, 10, 12],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        label: '# of Votes',
        data: [53, 32, 11, 10, 32],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        label: '# of Votes',
        data: [21, 17, 14, 14, 12],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 32, 1, 22, 39, 43],
        borderWidth: 1,
      },
    ],
  },
];

const lineChart_data2 = {
  labels: ['01', '02', '03', '04', '05', '06', 'o7'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 11, 9, 21, 33, 1, 5],
      borderWidth: 1,
    },
  ],
};
const line_options = {
  responsive: true,
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0, // disables bezier curves
    },
  },
  fill: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false,
          // color: '#eee'
        },

        scaleLabel: {
          display: false,
          labelString: 'Month',
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display: false,
          color: '#eee',
        },
        scaleLabel: {
          // display: true,
          // labelString: 'Value'
        },
      },
    ],
  },
};
export {lineChart_data2, dash_lineCards,lineChart_data, line_options};
