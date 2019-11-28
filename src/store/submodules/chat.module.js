import {SEARCHCHATUSER} from '../action.type';
import * as _ from 'underscore';
import {ADDSEARCHUSERS} from '../mutations.type';
let state = {
  chatusers: [
    {
      id: 1,
      name: 'Demott Ellcome',
      avatar: 'https://robohash.org/istenumquamut.bmp?size=50x50&set=set1',
      email: 'dellcome0@pagesperso-orange.fr',
    },
    {
      id: 2,
      name: 'Marcelle McKerley',
      avatar: 'https://robohash.org/suntliberovel.jpg?size=50x50&set=set1',
      email: 'mmckerley1@nasa.gov',
    },
    {
      id: 3,
      name: 'Chane Rigate',
      avatar: 'https://robohash.org/autmaioresut.bmp?size=50x50&set=set1',
      email: 'crigate2@nature.com',
    },
    {
      id: 4,
      name: 'Tyson Mathis',
      avatar: 'https://robohash.org/etfugitdistinctio.bmp?size=50x50&set=set1',
      email: 'tmathis3@ed.gov',
    },
    {
      id: 5,
      name: 'Julie Kemble',
      avatar:
        'https://robohash.org/aliquiddictarepellat.jpg?size=50x50&set=set1',
      email: 'jkemble4@123-reg.co.uk',
    },
    {
      id: 6,
      name: 'Marcille Yallowley',
      avatar: 'https://robohash.org/modisolutaadipisci.png?size=50x50&set=set1',
      email: 'myallowley5@engadget.com',
    },
    {
      id: 7,
      name: 'Brittany Coleford',
      avatar:
        'https://robohash.org/autimpeditexplicabo.png?size=50x50&set=set1',
      email: 'bcoleford6@jugem.jp',
    },
    {
      id: 8,
      name: 'Henrik Gladhill',
      avatar:
        'https://robohash.org/laudantiumasperioreseos.bmp?size=50x50&set=set1',
      email: 'hgladhill7@shareasale.com',
    },
    {
      id: 9,
      name: 'Mickey Pottberry',
      avatar: 'https://robohash.org/maioresestanimi.jpg?size=50x50&set=set1',
      email: 'mpottberry8@exblog.jp',
    },
    {
      id: 10,
      name: 'Quillan Bunney',
      avatar: 'https://robohash.org/quoquisquia.bmp?size=50x50&set=set1',
      email: 'qbunney9@ning.com',
    },
    {
      id: 11,
      name: 'Alano Duprey',
      avatar: 'https://robohash.org/commodifugiatenim.png?size=50x50&set=set1',
      email: 'adupreya@skype.com',
    },
    {
      id: 12,
      name: 'Anabal Kinglake',
      avatar: 'https://robohash.org/delectusquaenam.jpg?size=50x50&set=set1',
      email: 'akinglakeb@soup.io',
    },
    {
      id: 13,
      name: 'Zondra Bertson',
      avatar: 'https://robohash.org/utquisconsequatur.png?size=50x50&set=set1',
      email: 'zbertsonc@pcworld.com',
    },
    {
      id: 14,
      name: 'Codi Decreuze',
      avatar:
        'https://robohash.org/iustoporrovoluptatem.bmp?size=50x50&set=set1',
      email: 'cdecreuzed@blog.com',
    },
    {
      id: 15,
      name: 'Titus Mattheis',
      avatar: 'https://robohash.org/aearumsuscipit.bmp?size=50x50&set=set1',
      email: 'tmattheise@yale.edu',
    },
    {
      id: 16,
      name: 'Kris Yarnall',
      avatar: 'https://robohash.org/quieaoccaecati.bmp?size=50x50&set=set1',
      email: 'kyarnallf@skype.com',
    },
    {
      id: 17,
      name: 'Toni Crich',
      avatar:
        'https://robohash.org/teneturcupiditatedolor.bmp?size=50x50&set=set1',
      email: 'tcrichg@yellowbook.com',
    },
    {
      id: 18,
      name: 'Catha Mouser',
      avatar: 'https://robohash.org/quiaabdignissimos.jpg?size=50x50&set=set1',
      email: 'cmouserh@tuttocitta.it',
    },
    {
      id: 19,
      name: 'Joete Stuckford',
      avatar: 'https://robohash.org/aliasminusfacere.png?size=50x50&set=set1',
      email: 'jstuckfordi@google.co.jp',
    },
    {
      id: 20,
      name: 'Marielle Fines',
      avatar: 'https://robohash.org/quietaperiam.jpg?size=50x50&set=set1',
      email: 'mfinesj@joomla.org',
    },
  ],
  searchUserResults: [],
};
let mutations = {
  [ADDSEARCHUSERS](state, chatsearchusers) {
    state.searchUserResults = chatsearchusers;
  },
};
let actions = {
  [SEARCHCHATUSER](context, searchword) {
    if (searchword !== '') {
      let searchResults = _.filter(state.chatusers, function(user) {
        if (user.name.includes(searchword)) {
          return user;
        }
      });
      context.commit(ADDSEARCHUSERS, searchResults);
    } else {
      context.commit(ADDSEARCHUSERS, []);
    }
  },
};
let getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
