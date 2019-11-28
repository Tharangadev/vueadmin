<template>
    <b-card no-body>
        <b-card-header>
            <b-input-group>
                <b-form-input></b-form-input>
                <b-input-group-append>
                    <b-button variant="outline-light" class="greyborder"
                    >
                        <font-awesome icon="camera"
                        />
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card-header>
        <b-card-body class="p-0">
            <b-list-group flush>
                <b-list-group-item v-for="(comment,key) in comments" :key="key">
                    <b-media>
                        <template v-slot:aside>
                            <img
                                    alt=""
                                    class="rounded-circle circleshadow"
                                    height="50px"
                                    src="@/assets/kitty.jpg"
                            />
                        </template>
                        <h5 class="mt-0">{{comment.name}}</h5>
                        <p>{{comment.comment}}</p>

                        <b-media v-if="comment.subComment" v-for="(subcomment,key) in comment.subComment">
                            <template v-slot:aside>
                                <img
                                        alt=""
                                        class="rounded-circle circleshadow"
                                        height="50px"
                                        src="@/assets/ratty.jpeg"
                                />
                            </template>
                            <h5 class="mt-0">{{subcomment.name}}</h5>
                            <p class="mb-0">{{subcomment.comment}}</p>
                        </b-media>
                    </b-media>
                </b-list-group-item>
            </b-list-group>
        </b-card-body>
    </b-card>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Commentbox',
        computed: {
            ...mapState({
                comments: state => state.comments
            })
        },
        data() {
            return {}
        }
    };
</script>

<style lang="scss" scoped>
    h5 {
        font-size: 1rem;
        font-weight: bold;
    }

    p {
        font-size: 1rem;
    }

    .media {
        margin-top: 1rem;
    }

    .greyborder {
        border: 1px solid #ced4da;
    }
</style>
