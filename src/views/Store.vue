<template>
  <div>
    <b-row>
      <b-col>
        <h3>
          Store
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <StoreItem></StoreItem>
      </b-col>
      <b-col>
        <StoreItem></StoreItem>
      </b-col>
      <b-col>
        <StoreItem></StoreItem>
      </b-col>
      <b-col>
        <StoreItem></StoreItem>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import StoreItem from '../components/other/Store/StoreItem'
  export default {
    name: 'home',
    components: {
      StoreItem,
    },
  };
</script>

<style scoped></style>
