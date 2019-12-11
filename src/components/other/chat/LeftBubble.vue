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
        <p class="content">Consectetur consequuntur nisi soluta ut rem? Pariatur tenetur veniam eos cumque laborum dignissimos Dolores corporis libero consequuntur libero laboriosam voluptates? Alias facilis excepturi similique placeat quas Quam eveniet ipsa amet</p>
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
        border-bottom: 10px solid transparent;
        border-top: 10px solid transparent;
        border-right: 10px solid #eee;
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
