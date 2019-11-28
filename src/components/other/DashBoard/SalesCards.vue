<template>
  <b-row>
    <b-col v-for="(i, key) in MiniSalesData" :key="key">
      <MiniSalesCard
        :minicardnumber="i.minicardnumber"
        :minicardtitle="i.minicardtitle"
        :minicardsubhead="i.minicardsubhead"
        :color="i.color"
      >
      </MiniSalesCard>
    </b-col>
  </b-row>
</template>
<style></style>
<script>
import MiniSalesCard from "../Cards/MiniSaleCard";
export default {
  name: "SalesCards",
  components: {
    MiniSalesCard
  },
  data() {
    return {
      MiniSalesData: [
        {
          color: "#cd201f",
          minicardnumber: 33,
          minicardtitle: "Total updates",
          minicardsubhead: "new  updates"
        },
        {
          color: "#5eba00",
          minicardnumber: 234,
          minicardtitle: "New custom",
          minicardsubhead: "new custormers"
        },
        {
          color: "#467fcf",
          minicardnumber: 92,
          minicardtitle: "Returns",
          minicardsubhead: "Shipment returns"
        },
        {
          color: "#f1c40f",
          minicardnumber: 1043,
          minicardtitle: "Reselling",
          minicardsubhead: "Reselling amount"
        }
      ]
    };
  }
};
</script>
