import {} from '@/common/api.services';
import axios from 'axios';
import {API_URL} from '@/common/config';
import {GRAB_ARTICLES} from '../action.type';
import {FETCH_ARTICLES} from '../mutations.type';
import NProgress from 'nprogress'
const state = {
  articles: [],
};
const actions = {
  async [GRAB_ARTICLES](context) {
    NProgress.start()
    await axios.get(`${API_URL}posts`).then(data => {
    NProgress.done()
      context.commit(FETCH_ARTICLES, data.data);
      return data;
    });
  },
};
const mutations = {
  [FETCH_ARTICLES](state, articles) {
    state.articles = articles;
  }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
