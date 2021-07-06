<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="6">
        <apexchart
          type="area"
          width="100%"
          :options="areaOptions"
          :series="areaSeries"
        ></apexchart>
      </b-col>
      <b-col cols="6">
        <apexchart
          width="100%"
          type="bar"
          :options="barOptions"
          :series="barSeries"
        ></apexchart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import auth from "@/middlewares/auth";
export default {
  middleware: [auth],
  layout: "loggedIn",
  data() {
    return {
      barOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      barSeries: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      areaSeries: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      areaOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
};
</script>