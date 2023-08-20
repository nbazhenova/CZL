import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        info: {},
    },
    mutations: {
        SET_DATA(state, ctx) {
            state.info = ctx
        },
        SORT_BY_ID(state) {
            if (state.info[0].id !== 1) {
                state.info.sort((a, b) => a.id - b.id)
            } else {
                state.info.sort((a, b) => b.id - a.id)
            }
        },
        SORT_BY_DEC_ABS(state, rowParam) {
            state.info.sort((a, b) => {
                if (a[`${rowParam}`].toLowerCase() < b[`${rowParam}`].toLowerCase()) {
                    return 1;
                }
                if (a[`${rowParam}`].toLowerCase() > b[`${rowParam}`].toLowerCase()) {
                    return -1;
                }
                return 0;
            })
        },
        SORT_BY_IMS_ABS(state, rowParam) {
            state.info.sort((a, b) => {
                if (a[`${rowParam}`].toLowerCase() > b[`${rowParam}`].toLowerCase()) {
                    return 1;
                }
                if (a[`${rowParam}`].toLowerCase() < b[`${rowParam}`].toLowerCase()) {
                    return -1;
                }
                return 0;
            })
        },
    },
    actions: {
        GET_DATA(context) {
            axios.get('/data.json').then(data => {
                if (data.status == 200) {
                    context.commit('SET_DATA', data.data);
                }
            })
        },
    },
    getters: {
        POSTS(state) {
            return state.info
        }
    }
})
