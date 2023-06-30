<template>
    <div>
        <header class="site-header" id="mificoencab">
            <div class="container">

                <div class="row">

                    <div class="col-lg-8 col-12 d-flex flex-wrap">
                        <p class="d-flex me-4 mb-0">
                            <i class="bi-geo-alt me-2"></i>
                            <a href="https://goo.gl/maps/YDaNsaeH6fuv5xUi7"> Sena CTPI reginal cauca, Popayan.</a>
                        </p>

                        <p class="d-flex mb-0">
                            <i class="bi-envelope me-2"></i>

                            <a href="mailto:info@company.com">
                                bienestaraprendizctpi@gmail.com
                            </a>
                        </p>
                    </div>

                    <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                        <ul class="social-icon">

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link bi-twitter"></a>
                            </li>

                            <li class="social-icon-item">
                                <a href="https://www.facebook.com/login" class="social-icon-link bi-facebook"></a>
                            </li>


                            <li class="social-icon-item">
                                <a href="https://web.whatsapp.com" class="social-icon-link bi-whatsapp"></a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </header>

        <nav class="navbar navbar-expand-lg bg-light shadow-lg mb-0 sticky-top fixed-top ">
            <div class="container p-0 ">
                <a class="navbar-brand" href="index.html">
                    <img src="../assets/images/Logo1.png" class="" width="150" id="logonav">
                    <span>

                        <small></small>
                    </span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>




                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ">

                            <router-link to="/" class="nav-link click-scroll ">Inicio</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="" class="nav-link click-scroll" @click="scrollToSection('section_2')"> Quienes
                                Somos</router-link>


                        </li>

                        <li class="nav-item">

                            <router-link to="/conoceteycuidate" class="nav-link click-scroll">Conocete y
                                cuidate</router-link>

                        </li>

                        <li class="nav-item dropdown">
                            <router-link to="/comentarios" class="nav-link click-scroll">Comentarios</router-link>
                        </li>

                        <!-- <li class="nav-item">
                            <router-link to="/agendacita" class="nav-link click-scroll"
                                v-if="getLocalStorageValue('persona').rol === 'Aprendiz'"> {{
                                    getLocalStorageValue('persona').rol }}</router-link>
                            <router-link to="/agendacita" class="nav-link click-scroll" v-if="varLocal != 'true'">{{
                                rol }} </router-link> -->
<!-- 
                        </li>  -->
                        <li class="nav-item">
                            <router-link to="/agendacita" class="nav-link click-scroll"
                                v-if="getLocalStorageValue('persona') !== null && getLocalStorageValue('persona').rol === 'Aprendiz'">
                                {{ getLocalStorageValue('persona').rol }}
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/enfermera" class="nav-link click-scroll" v-if="getLocalStorageValue('persona') !== null && getLocalStorageValue('persona').rol === 'Enfermera'">
                                {{ getLocalStorageValue('persona').rol }}
                                
                            </router-link>



                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard" class="nav-link click-scroll" v-if="getLocalStorageValue('persona') !== null && getLocalStorageValue('persona').rol === 'Psicologa'">
                                {{ getLocalStorageValue('persona').rol }} </router-link>

                        </li>

                    </ul>

                    <div class="Delet">

                        <button v-if="!varLocal" type="button"
                            class="btn btn-outline-success ms-1 btn-bd-primary rounded-5   " data-bs-toggle="modal"
                            data-bs-target="#modalinicio">Inicio sesion</button>


                        <!--BOTON INICIO DE Registro Y NODAL -->
                        <button v-if="!varLocal" type="button"
                            class="btn btn-outline-success ms-1 btn-bd-primary rounded-5 " data-bs-toggle="modal"
                            data-bs-target="#modalregistro">Registro</button>

                        <button v-if="varLocal" type="button" class=" btn btn-outline-success ms-1 btn-bd-primary rounded-5"
                            @click="cerrarSesion">
                            <i class="bi bi-box-arrow-right">{{ $store.state.rol.rol }}</i>
                        </button>

                    </div>

                </div>

            </div>

        </nav>

    </div>


    <login-comp></login-comp>
    <register-comp></register-comp>
</template>
<script>
import Swal from 'sweetalert2';
// import LoginComp from './LoginComp.vue';
import LoginComp from '../components/LoginComp.vue'
import RegisterComp from './RegisterComp.vue';
import { mapState } from 'vuex'

export default {

    components: {
        LoginComp, RegisterComp
    },
    name: 'NavComp',



    data() {

        return {
            variable: '',


            varLocal: localStorage.getItem('token'),//esto lo creo xiomara
            showTitle: true,
            showTitle1: true

            //  rol: "",
            //  rol: "Psicologa",
            // rol: "Enfermera"

        }

    },

    computed: {

        ...mapState({
            rol: 'rol'

        }),
    },


    // watch: {
    //     rol() {
    //         const objeto = JSON.parse(this.rol);
    //         console.log(objeto)

    //     }

    // },
    methods: {
        getLocalStorageValue(key) {
            const value = localStorage.getItem(key);
            return value !== null ? JSON.parse(value) : null;
        },




        cerrarSesion() {
            Swal.fire({
                title: 'Cerrar sesión',
                text: '¿Estás seguro de que deseas cerrar sesión?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, cerrar sesión',
                cancelButtonText: 'Cancelar',
                timer: 16000
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem("sesionrequest", false)
                    localStorage.removeItem('token')
                    localStorage.removeItem('persona')
                    // this.$router.push('/')
                    window.location.href = '/';

                }

            });
        },
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth' // Desplazamiento suave
                });
            }

        },

        mostrarTitulo() {
            this.showTitle = localStorage.getItem("sesionrequest");
            console.log("Varible: " + localStorage.getItem("sesionrequest"))
            console.log("Aquie estoy")
        },
        toggleTitle() {
            this.showTitle1 = !this.showTitle1
        }

    },






}



</script>
<style scoped>
.btn-bd-primary {
    font-weight: 600;
    color: #fff;
    background-color: #4BB5E7;
    border-color: #4BB5E7;

}

.btn-bd-primary:hover,
.btn-bd-primary:active {
    color: #fff;
    background-color: #61428f;
    border-color: #61428f;
}

.btn-bd-primary:focus {
    box-shadow: 0 0 0 3px rgba(179, 82, 174, 0.25)
}

.Delet {

    display: flex;
}</style>