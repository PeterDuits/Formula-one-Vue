import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
    iconfont: 'md',
    theme: {
        themes: {
            light: {
                primary: '#e10600',
                secondary: '#15151e',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
};

export default new Vuetify(opts);
