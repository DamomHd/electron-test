/*
 * @Author: Damom
 * @Date: 2021-03-23 22:20:44
 * @LastEditors: Damom
 * @LastEditTime: 2021-03-23 22:20:56
 * @Description: 引入图标
 */
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faMarkdown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
