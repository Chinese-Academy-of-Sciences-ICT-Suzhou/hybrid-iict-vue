import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
//axios
import axios from 'axios'
// css库
import './assets/style.css'
import './assets/animation.css'
import './assets/lib.css'

// 第三方专用
import VueLazyload from 'vue-lazyload' // 圖片嬾加載
import flexible from 'flexible.js' //手機自適應

//muse-ui用
import 'muse-ui/lib/styles/base.less'
import {
    Progress,
    Button,
    Select,
    Snackbar,
    Icon,
    Dialog,
    TextField,
    Grid,
    BottomNav,
    AppBar,
    Form,
    Tabs
} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import Toast from 'muse-ui-toast'
//字体
import './assets/iconfont/material-icons.css'

//Message弹框
import 'muse-ui-message/dist/muse-ui-message.css'
import Message from 'muse-ui-message'
Vue.use(Tabs)
Vue.use(Form)
Vue.use(AppBar)
Vue.use(BottomNav)
Vue.use(Message)
Vue.use(Grid)
Vue.use(TextField)
Vue.use(Button)
Vue.use(Select)
Vue.use(Toast)
Vue.use(Snackbar)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Progress)
import Helpers from 'muse-ui/lib/Helpers'

Vue.use(Helpers)

flexible(960)

Vue.use(VueLazyload)
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
