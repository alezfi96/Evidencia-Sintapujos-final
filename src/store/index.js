import { createStore } from "vuex";

const store = createStore({
    state() {
        return {




            rol: localStorage.getItem('persona'),

        };
    },

    mutations: {
        // cambioRol(state, rolSeleccionado) {
        //     state.rol = rolSeleccionado
        //     console.log("funciona")
        //     console.log(rolSeleccionado)
        // },



    },
    actions: {

        // actualizarRol({ commit }, rolSeleccionado) {
        //     commit('cambioRol', rolSeleccionado)
        // }
        // Tus acciones aquí
    },
    getters: {
        // Tus getters aquí
    },
});

export default store;