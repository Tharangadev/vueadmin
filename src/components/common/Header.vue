<template>
    <b-navbar class="white-bg navbarMain pt-2 pb-2 pl-0 pr-0"><b-container>
        <b-navbar-brand href="#">
            <!-- <img width="100px" src="@/assets/subway.png" alt /> -->
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- drop down nortifications  -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="allNortifications.length" class="right-menu">
                <template v-slot:button-content>
                    <font-awesome icon="bell"></font-awesome>
                </template>
                <!-- <template>
                              <div>
              :TODO make this space for the trangle
                              </div>
                </template>-->

                <b-dropdown-item  href="#" v-for="(nortification,key) in allNortifications" :key="key">
                    <Nortification
                            :from="nortification.from"
                           :avatar="nortification.imgSrc"
                           :message="nortification.message"
                           :time="nortification.time"
                    ></Nortification>
                </b-dropdown-item>

                <template>
                    <div class="border-top text-center p-2 clear-norti" @click="clearNortifications">Mark all as read</div>
                </template>
            </b-nav-item-dropdown>
            <!-- end of notificaitons -->
            <b-navbar-brand href="#" right class="ml-3 p-0">
                <div class="d-flex align-items-center">
                    <img src="https://robohash.org/quiaabdignissimos.jpg?size=50x50&set=set1" class="avatar"/>
                    <div class="avatar_dis pl-2">
                        <div>Homer Simpson</div>
                        <div class="mt-1">Administrator</div>
                    </div>
                </div>
            </b-navbar-brand>
        </b-navbar-nav>
   </b-container> </b-navbar>
</template>

<script>
    import Nortification from "./Nortification";
    import {NORTIFICATIONS_CLEAR} from '@/store/action.type'
    import {mapGetters} from 'vuex'

    export default {
        name: "Header",
        components: {
            Nortification
        },
        methods: {
            clearNortifications(){
                this.$store.dispatch(NORTIFICATIONS_CLEAR)
            }
        },
        computed: {
            ...mapGetters(['allNortifications'])
        },
        data() {
            return {

            }
        }
    };
</script>

<style scoped lang="scss">
    .clear-norti{
        cursor: pointer;
    }

</style>