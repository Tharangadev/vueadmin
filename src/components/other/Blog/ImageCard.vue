<template>
<b-card no-body class="addbottommargin">
    <img src="https://picsum.photos/id/237/300/200" alt />
    <b-card-body class="d-flex flex-column">
        <h4>{{item.title}}</h4>
        <p>{{item.discription}}</p>
        <div class="card-avatar d-flex align-items-center mt-auto">
            <div class="image">
                <img src="@/assets/avatar.svg" height="50" alt class="rounded-circle" />
            </div>
            <div class="ml-2">
                <div>{{item.author}}</div>
                <small>{{articleDate(item.time)}} Days ago</small>
            </div>
            <div class="ml-auto like">
                <span class="likeicon" @click="postlike" :class="{liked:liked}">
                    <font-awesome icon="heart"></font-awesome>
                </span>
            </div>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
import moment from "moment";
export default {
    name: "ImageCard",
    data() {
        return {
            liked: false
        };
    },
    props: ["item"],
    computed: {},
    methods: {
        postlike() {
            this.liked = !this.liked;
        },
        articleDate(artDate) {
            let borodinoBattle = moment(artDate, "DD/MM/YYYY HH:mm:ss");
            let now = moment();
            let days = now.diff(borodinoBattle, 'days');
            return days;
        }
    }
};
</script>

<style lang="scss" scoped>
.likeicon {
    cursor: pointer;
}

.liked {
    path {
        color: red;
    }
}
</style>
