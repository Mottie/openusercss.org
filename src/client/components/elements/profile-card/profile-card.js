import {bulmaComponentGenerator as bulma} from 'vue-bulma-components'
import icon from '../icon/icon.vue'
import gravatarUrl from 'gravatar-url'
import flushImg from '../flush-img/flush-img.vue'
import moment from 'moment'
import log from 'chalk-console'
import {topToBottom} from '../../../src/client/components/animations'

window.moment = moment

export default {
  'components': {
    'b-tile':            bulma('tile', 'div'),
    'b-container':       bulma('container', 'div'),
    'b-container-fluid': bulma('container-fluid', 'div'),
    'b-box':             bulma('box', 'div'),
    'b-columns':         bulma('columns', 'div'),
    'b-column':          bulma('column', 'div'),
    'b-level':           bulma('level', 'div'),
    'b-level-left':      bulma('level-left', 'div'),
    'b-level-right':     bulma('level-right', 'div'),
    'b-section':         bulma('section', 'div'),
    icon,
    flushImg
  },
  'methods': {
    isOnline (date) {
      return moment(this.time).diff(date) < 600000
    },
    ...topToBottom
  },
  mounted () {
    setInterval(() => {
      this.time = Date.now()
    }, 20000)
  },
  data () {
    return {
      'time': Date.now()
    }
  },
  'computed': {
    lastOnlineDisplay (date) {
      return `Last seen ${moment(this.time).to(this.user.lastOnline)}`
    },
    user () {
      return {
        'avatarUrl': gravatarUrl('decentm@decentm.com', {
          'size': 185
        }),
        'displayname': 'DecentM',
        'installs':    3440,
        'rating':      8.4,
        'lastOnline':  1508231032868,
        'themes':      [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      }
    }
  }
}