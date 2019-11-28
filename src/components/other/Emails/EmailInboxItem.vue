<template>
  <b-list-group-item class="d-flex rounded-0 border-left-0 border-top-0 mb-0" @click="mailview">
    <font-awesome icon="bookmark" class="bookmark"></font-awesome>
    <div class="avatar_block d-flex">
      <div class="avatar-md mr-3">
        <img class="rounded-circle circleShadow w-100 h-100" src="@/assets/kitty.jpg" alt />
      </div>
    </div>
    <div class="w-100" :class="{afterslide_margin:menuon}">
      <div class="sender">
        <strong>{{this.details.name}}</strong>
      </div>
      <div class="title d-flex justify-content-between mb-1">
        <span>{{this.details.title}}</span>
        <span>12/20/2017</span>
      </div>
      <div>{{this.details.content}}</div>
      <div>{{this.details.time}}</div>
    </div>
    <transition name="mailmenu">
      <div
        class="action_blocks d-flex position-absolute h-100 justify-contet-center align-items-center"
        v-if="menuon"
      >
        <div
          class="delete_mail d-flex h-100 justify-content-center align-items-center border-left"
          @click="deleteMail"
        >
          <font-awesome icon="trash-alt"></font-awesome>
        </div>
        <div class="open_mail d-flex h-100 justify-content-center align-items-center border-left">
          <font-awesome icon="angle-double-right"></font-awesome>
        </div>
      </div>
    </transition>
  </b-list-group-item>
</template>

<script>
export default {
  name: "EmailInboxItem",
  data() {
    return {
      menuon: false
    };
  },
  props: ["details"],
  methods: {
    mailview() {
      this.$emit("viewMail",this.details.id);
    }
  }
};
</script>

<style>
.bookmark{
  position: absolute;
  right: 20px;
  top: 0px;
}
.list-group-item {
  cursor: pointer;
}
.action_blocks {
  right: 0px;
  top: 0px;
}
.afterslide_margin {
  margin-right: 160px;
  transition: 200ms cubic-bezier(0.22, 0.61, 0, 1.07);
}
.delete_mail,
.open_mail {
  width: 80px;
  background: #fff;
  cursor: pointer;
}
.mailmenu-enter,
.mailmenu-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.mailmenu-leave-active,
.mailmenu-enter-active {
  transition: all 0.1s ease;
}
</style>