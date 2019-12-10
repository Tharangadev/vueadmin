import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {API_URL} from './config'

const ApiService ={
  init(){
 Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader(){

  },
  get(){

  }

}
export default ApiService

export const ArticleService={
  query(type,params){
    return Vue.axios.get(`API_URL/${params}`).catch((error)=>{
      console.log(error)
    })
  }
}








