import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en'
import cn from './cn'
import kr from './kr'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'en': en,
        'cn': cn,
        'kr': kr
    }
})

export default i18n