<template>
  <div class="right-chat-block d-flex float-right align-items-center">
    <div class="p-3 m-2 rounded chat-bubble background-grey">
      <p class="content">Ipsum dolor veritatis possimus voluptas cupiditate? Quibusdam modi ut esse sunt alias Libero maiores sequi repudiandae fugiat sed? Debitis quaerat assumenda nisi aliquid veritatis. Labore ullam aliquid eos cupiditate nostrum?</p>
      <div class="chat-trangle"></div>
    </div>
    <div class="avatar_block d-flex">
      <div class="avatar-md mr-3">
        <img
          class="rounded-circle circleShadow w-100 h-100"
          src="https://robohash.org/suntliberovel.jpg?size=50x50&set=set1"
          alt
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .right-chat-block {
    margin-right: 20px;
    .chat-bubble {
      position: relative;
      .chat-trangle {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #eee;
        position: absolute;
        right: -10px;
        top: 10px;
      }
    }
  }
</style>
<script>
  export default {
    name: 'Right-bubble',
  };
</script>
