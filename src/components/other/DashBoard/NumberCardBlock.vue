<template><b-row>
    <b-col>
      <NumberCard percentage="23" variation="+" cardnumber="21" cardtext="new items sold"></NumberCard>
    </b-col>
    <b-col>
      <NumberCard percentage="12" variation="+" cardnumber="7" cardtext="Profit increase"></NumberCard>
    </b-col>
    <b-col>
      <NumberCard percentage="7" variation="-" cardnumber="18" cardtext="Retails gain"></NumberCard>
    </b-col>
    <b-col>
      <NumberCard percentage="11" variation="+" cardnumber="1233" cardtext="best some"></NumberCard>
    </b-col>
    <b-col>
      <NumberCard percentage="17" variation="+" cardnumber="22" cardtext="In app purches"></NumberCard>
    </b-col>
    <b-col>
      <NumberCard percentage="10" variation="+" cardnumber="2103" cardtext="some other text"></NumberCard>
    </b-col></b-row>
</template>

<script>
import NumberCard from "../Cards/NumberCard";
export default {
  name: "NumberCardblock",
  components: {
    NumberCard
  }
};
</script>

<style>
</style>