import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Nortifications from './submodules/Nortifications.module';
import Profile from './submodules/profile.module';
import comments from './submodules/comments.module';
import blog from './submodules/blog.module';
import email from './submodules/Email.module';
import chat from './submodules/chat.module';

export default new Vuex.Store({
  modules: {
    Nortifications,
    Profile,
    comments,
    blog,
    email,
    chat,
  },
});
