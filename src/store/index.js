import {createStore} from 'vuex'

export default createStore({
    state: {
        ifLoginPopup:false,
        ifRegisterPopup:false
    },
    getters: {},
    mutations: {
        setLogin:function (state,login){
            state.ifLoginPopup=login;
        },
        setRegister:function (state,register){
            state.ifRegisterPopup=register;
        },
    },

    actions: {},
    modules: {}
})
