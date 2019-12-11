import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//importing fonts
import {faHeart, faShoppingCart,faBookmark,faAngleDoubleRight, faBell, faInbox, faCloudUploadAlt, faInfo, faStar, faTag, faTrash, faHome, faCube, faCheck, faPencilAlt, faCamera, faCalendar, faTrashAlt, faFile, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart,faShoppingCart,faBookmark,faAngleDoubleRight, faBell, faInbox, faCloudUploadAlt, faInfo, faStar, faTag, faTrash, faHome, faCube, faCheck, faCamera, faCalendar, faFile, faTwitter, faTrashAlt, faFacebook, faSkype, faPhone, faPencilAlt)

Vue.component('font-awesome', FontAwesomeIcon)
