import { ApexOptions } from "apexcharts";

export const candleStickOptions: ApexOptions = {
  chart: {
    type: "candlestick",
    height: 350,
    toolbar: {
      show: false, // This removes the menu that appears on the chart
    },
  },
  title: {
    text: "Stock Price Data",
    align: "center",
    style: {
      color: "#fff",
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#00B746",
        downward: "#EF403C",
      },
    },
  },
  tooltip: {
    theme: "dark", 
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    x: {
      show: true,
      format: "dd MMM yyyy HH:mm", 
      formatter: (val: number) => {
        const date = new Date(val);
        return date.toLocaleString(); 
      },
    },
    y: {
      formatter: (val: number) => {
        return `${val}`;
      },
      title: {
        formatter: (seriesName: string) => seriesName,
      },
    },
    marker: {
      show: true,
    },
  },
};
