<template>
  <div class="left-chat-block d-flex float-left align-items-center">
    <div class="avatar_block d-flex">
      <div class="avatar-md mr-3">
        <img
          class="rounded-circle circleShadow w-100 h-100"
          src="https://robohash.org/suntliberovel.jpg?size=50x50&set=set1"
          alt
        />
      </div>
      <div class="p-3 m-2 rounded chat-bubble background-grey">
        <p class="content">
          apple is a good fruit ,orange is too ,banana is yello bit radio active
          too ,
        </p>
        <div class="chat-trangle"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .left-chat-block {
    margin-left: 20px;
    .chat-bubble {
      position: relative;
      .chat-trangle {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #eee;
        position: absolute;
        left: -10px;
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
