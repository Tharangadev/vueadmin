<template>
  <b-card no-body class="addbottommargin">
    <b-card-header class="card-header border-0">
      <h6 class="mb-0">
        Users
      </h6>
    </b-card-header>
    <b-card-body class="p-0">
      <b-list-group>
        <b-list-group-item v-for="user in users" class="p-0 border-left-0 border-right-0 rounded-0  border-bottom">
          <div class="d-flex p-3 align-items-center justify-content-between">
            <div class="d-flex">
              <div class="">
                <img :src="user.avatar" class="rounded-circle" alt="" />
              </div>
              <div class="person_details ml-3">
                <div>{{ user.name }}</div>
                <small>{{ user.email }}</small>
              </div>
            </div>
            <div class="options">
              <b-dropdown
                variant="link"
                toggle-class="text-decoration-none"
                dropleft
                no-caret
              >
                <template v-slot:button-content>
                  <img :src="options" alt="" height="12px" />
                </template>
                <b-dropdown-item href="#">Invite</b-dropdown-item>
                <b-dropdown-item href="#">remove</b-dropdown-item>
                <b-dropdown-item href="#">add</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: "Usercard",
  data: () => ({
    options: require("@/assets/more-options.png"),
    users: [
      {
        id: 1,
        name: "Roxy Crunkhurn",
        email: "rcrunkhurn0@live.com",
        avatar: "https://robohash.org/voluptatemeosquo.jpg?size=50x50&set=set1"
      },
      {
        id: 2,
        name: "Joya Seyers",
        email: "jseyers1@bloomberg.com",
        avatar: "https://robohash.org/excepturiitaqueut.png?size=50x50&set=set1"
      },
      {
        id: 3,
        name: "Sonja Zamorano",
        email: "szamorano2@businesswire.com",
        avatar: "https://robohash.org/quodautitaque.png?size=50x50&set=set1"
      },
      {
        id: 4,
        name: "Sayres Bucklan",
        email: "sbucklan3@smugmug.com",
        avatar:
          "https://robohash.org/aspernaturducimusconsequatur.bmp?size=50x50&set=set1"
      },
      {
        id: 5,
        name: "Maureene Quinlan",
        email: "mquinlan4@delicious.com",
        avatar:
          "https://robohash.org/recusandaevoluptatibusdolores.png?size=50x50&set=set1"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
.person_details {
  div {
    font-size: 1rem;
  }

  small {
    font-size: 0.85rem;
  }
}
.option {
  button {
    padding: 0px;
  }
}
</style>
