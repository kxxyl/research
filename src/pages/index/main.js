import Vue from 'vue'
import App from './index'
import mpvueToastRegistry from 'mptoast/registry'

const app = new Vue(App)
app.$mount()
mpvueToastRegistry(Vue)
