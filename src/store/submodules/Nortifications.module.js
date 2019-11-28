import {NORTIFICATIONS_CLEAR} from '../action.type'
import {REMOVE_NORTIFICATIONS} from '../mutations.type'

const state = {
    nortifications: [
        {
            message: "some message goes here",
            time: "201212121",
            imgSrc: "https://robohash.org/istenumquamut.bmp?size=50x50&set=set1",
            from: "Ethen"
        },
        {
            message: "some message goes here",
            time: "201212121",
            imgSrc: "https://robohash.org/quoquisquia.bmp?size=50x50&set=set1",
            from: "sam"
        },
        {
            message: "some message goes here",
            time: "201212121",
            imgSrc: "https://robohash.org/utquisconsequatur.png?size=50x50&set=set1",
            from: "apple"
        },
    ]
}
const getters = {
    allNortifications(state) {
        return state.nortifications
    }
}
const actions = {
    [NORTIFICATIONS_CLEAR]({commit}) {
        commit(REMOVE_NORTIFICATIONS)
    }
}
const mutations = {
    [REMOVE_NORTIFICATIONS](state) {
        state.nortifications = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
