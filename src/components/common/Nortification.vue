<template>
  <div class="d-flex align-items-center">
    <div class="avatar_wrapper mr-2">
      <img :src="avatar" class="avatar" />
    </div>
    <div class="norti_dis">
      <div class="norti_dis-alert">
        <strong class="mr-1">{{this.from}}</strong>{{this.message}}
      </div>
      <div class="norti_dis-time">{{this.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nortification",
  props:['avatar','message','time','from']
};
</script>

<style lang="scss" scoped>
.norti_dis-alert{
  font-size: .8rem;
}
  .norti_dis-time{
    font-size: .7rem;
  }
</style>