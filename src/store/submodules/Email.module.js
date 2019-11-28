import {ADD_VIEWMAIL} from '../action.type';
import {ADD_MAINMAIL} from '../mutations.type';
import * as _ from 'underscore'

const state = {
  inbox: [
    {
      id: 1,
      name: 'Melamie Loble',
      title: 'Suez',
      content:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      from: 'mloble0@tuttocitta.it',
      time: '5:07 AM',
      date: '3/6/2019',
    },
    {
      id: 2,
      name: 'Rochelle Grassin',
      title: 'Black Orpheus (Orfeu Negro)',
      content:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      from: 'rgrassin1@sohu.com',
      time: '11:36 AM',
      date: '1/7/2019',
    },
    {
      id: 3,
      name: 'Nappy Ortiger',
      title: 'Shade',
      content:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      from: 'nortiger2@nbcnews.com',
      time: '6:50 AM',
      date: '12/12/2018',
    },
    {
      id: 4,
      name: 'Fonsie Starte',
      title: 'Semper Fi',
      contentinciduntt:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      from: 'fstarte3@theglobeandmail.com',
      time: '3:52 AM',
      date: '7/6/2019',
    },
    {
      id: 5,
      name: 'Mommy Gott',
      title: 'Best Man Holiday, The',
      content:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      from: 'mgott4@google.cn',
      time: '9:39 AM',
      date: '11/21/2018',
    },
    {
      id: 6,
      name: 'Lefty Dimitriades',
      title: 'That Old Feeling',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      from: 'ldimitriades5@stanford.edu',
      time: '10:00 AM',
      date: '9/30/2019',
    },
    {
      id: 7,
      name: 'Kalli Tomkowicz',
      title: "God's Little Acre",
      content:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      from: 'ktomkowicz6@elegantthemes.com',
      time: '10:35 PM',
      date: '5/16/2019',
    },
    {
      id: 8,
      name: 'Imojean Lutwidge',
      title: 'Mooring, The',
      content:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      from: 'ilutwidge7@nps.gov',
      time: '12:22 AM',
      date: '11/15/2018',
    },
    {
      id: 9,
      name: 'Tadeo Clougher',
      title: 'Diary of a Wimpy Kid: Rodrick Rules',
      content:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      from: 'tclougher8@unblog.fr',
      time: '8:00 AM',
      date: '9/26/2019',
    },
    {
      id: 10,
      name: 'Jordain Sawer',
      title: 'Pin...',
      content:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      from: 'jsawer9@prnewswire.com',
      time: '11:10 PM',
      date: '7/29/2019',
    },
    {
      id: 11,
      name: 'Libbi Aliberti',
      title: 'Matrix Revolutions, The',
      content:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      from: 'lalibertia@google.ru',
      time: '2:12 PM',
      date: '1/25/2019',
    },
    {
      id: 12,
      name: 'Ertha Morales',
      title: "Valentine's Day",
      content:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      from: 'emoralesb@chron.com',
      time: '12:16 AM',
      date: '5/1/2019',
    },
    {
      id: 13,
      name: 'Gualterio Waller-Bridge',
      title: 'Black and White',
      content:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      from: 'gwallerbridgec@typepad.com',
      time: '7:15 AM',
      date: '11/21/2018',
    },
    {
      id: 14,
      name: 'Bordy Andrys',
      title: 'Darkman',
      content:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      from: 'bandrysd@bbb.org',
      time: '1:31 AM',
      date: '7/17/2019',
    },
    {
      id: 15,
      name: 'Gisele Golby',
      title: 'Ride the Pink Horse',
      content:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      from: 'ggolbye@taobao.com',
      time: '7:48 AM',
      date: '4/7/2019',
    },
    {
      id: 16,
      name: 'Codi Pughsley',
      title: 'Sonny Boy',
      content:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      from: 'cpughsleyf@fda.gov',
      time: '8:51 PM',
      date: '7/23/2019',
    },
    {
      id: 17,
      name: 'Dewain Skoggings',
      title: "Inside (À l'intérieur)",
      content:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      from: 'dskoggingsg@simplemachines.org',
      time: '6:11 PM',
      date: '5/29/2019',
    },
    {
      id: 18,
      name: 'Jeffy Britt',
      title: 'Moonlight Serenade',
      content:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      from: 'jbritth@senate.gov',
      time: '12:58 PM',
      date: '4/28/2019',
    },
    {
      id: 19,
      name: 'Bruis Crennell',
      title: 'John Dies at the End',
      content:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      from: 'bcrennelli@bandcamp.com',
      time: '11:06 AM',
      date: '8/21/2019',
    },
    {
      id: 20,
      name: 'Hope Winscomb',
      title: 'Torpedo Run',
      content:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      from: 'hwinscombj@slate.com',
      time: '4:28 AM',
      date: '3/7/2019',
    },
  ],
  sentmail: [
   
  {
    id: 1,
    name: 'Gustavo West',
    title: 'Simply Irresistible',
    content: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    to: 'gwest0@forbes.com',
    time: '8:43 AM',
    date: '5:01 PM'
  },
  {
    id: 2,
    name: 'Kerrill Matthewman',
    title: 'Peg o\' My Heart',
    content: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    to: 'kmatthewman1@wunderground.com',
    time: '4:14 AM',
    date: '6:32 AM'
  },
  {
    id: 3,
    name: 'Emlynn Staley',
    title: 'The Conrad Boys',
    content: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    to: 'estaley2@arizona.edu',
    time: '7:21 AM',
    date: '4:05 PM'
  },
  {
    id: 4,
    name: 'Randall Ehrat',
    title: 'Eastern Plays',
    content: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    to: 'rehrat3@ocn.ne.jp',
    time: '9:52 PM',
    date: '7:18 PM'
  },
  {
    id: 5,
    name: 'Renaldo Worvell',
    title: 'Repentance (Monanieba)',
    content: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    to: 'rworvell4@yahoo.com',
    time: '8:41 AM',
    date: '1:55 PM'
  },
  {
    id: 6,
    name: 'Germana Joscelyne',
    title: 'Pee-wee\'s Big Adventure',
    content: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    to: 'gjoscelyne5@last.fm',
    time: '2:45 AM',
    date: '2:46 AM'
  },
  {
    id: 7,
    name: 'Oralle Dunkerton',
    title: 'Rise of Catherine the Great, The',
    content: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    to: 'odunkerton6@simplemachines.org',
    time: '2:22 AM',
    date: '7:05 AM'
  },
  {
    id: 8,
    name: 'Carmita Lummasana',
    title: 'Colpo in canna',
    content: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    to: 'clummasana7@sfgate.com',
    time: '6:38 PM',
    date: '6:56 AM'
  },
  {
    id: 9,
    name: 'Gabriella Mapother',
    title: 'Burnt Money (Plata Quemada)',
    content: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    to: 'gmapother8@fda.gov',
    time: '3:58 AM',
    date: '10:02 AM'
  },
  {
    id: 10,
    name: 'Valentia Dregan',
    title: 'Goodnight, Mister Tom',
    content: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    to: 'vdregan9@irs.gov',
    time: '6:59 AM',
    date: '8:36 AM'
  }
   
  ],
  viewmail: {
    id: 1,
    name: 'Melamie Loble',
    title: 'Suez',
    content:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    from: 'mloble0@tuttocitta.it',
    time: '5:07 AM',
    date: '3/6/2019',
  },
};

const mutations = {
  [ADD_MAINMAIL](state, payload) {
    if (payload.mailType = 'inbox') {
	   state.viewmail=_.find(state.inbox,(num)=>{
		   return payload.id===num.id
	   })
    } else if (payload.mailType = 'sent') {
	   state.viewmail=_.find(state.sentmail,(num)=>{
		   return payload.id===num.id
	   })
    }
  },
};
const actions = {
  [ADD_VIEWMAIL]({commit}) {
    commit(ADD_MAINMAIL, viewDetails);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
