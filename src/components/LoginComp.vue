<template>
  
  <div class="modal fade" id="modalinicio" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" ref="loginModal"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <!--INGRESO CODIGO DE REGISTRO EN ESTE DIV -->
                <div class="modal-body">
          <body class="text-center">
           

            <main class="form-signin w-100 m-auto text-center shadow-lg p-3 mb-5">



              <form @submit.prevent="postLogin()" autocomplete="off">
                <img class="mb-4" src="@/assets/images/Logo1.png" alt="" width="100" height="67">
                <h1 class="h3 mb-3 fw-normal">Ingresar</h1>

                <div class="form-floating  mb-2">
                  <input type="text" class="form-control rounded-4" id="n_documento" placeholder="Usuario"
                    v-model="persona.n_documento">
                  <label for="floatingInput" class="color-form"> <i class="bi bi-file-earmark-person-fill"></i>
                    Documento</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control rounded-4" id="contraseña" placeholder="Contraseña"
                    v-model="persona.contrasena">
                  <label for="floatingPassword" class="color-form"><i class="bi-lock"></i> Contraseña</label>
                </div>

                <div class="form-floating ">
                  {{ persona.rol }}

                  <select class="color-form form-select pt-1 rounded-4 mb-1" id="rol" v-model="persona.rol">
                    <option disabled value="">Seleccione Rol</option>
                    <option value="Aprendiz">Aprendiz</option>
                    <option value="Enfermera">Enfermera</option>
                    <option value="Psicologa">Psicologa</option>
                  </select>

                </div>

                <div class="checkbox mb-3">

                </div>
                <button class="w-100 btn btn-lg btn-bd-primary mb-2 rounded-4" type="submit" target="_blank">Iniciar</button>
                <br>
                <!-- <a href="/registro" class="w-100 btn btn-lg btn-bd-primary rounded-4">Registrarse</a> -->
                <!-- <router-link to="/registro" class="w-100 btn btn-lg btn-bd-primary rounded-4" target="_blank">Registrarse</router-link> -->





                <!--div para cambiar la contraseña-->
                <div class="mt-3">
                  <router-link to="/recuperar" class="contraseña" target="_blank">¿Olvidaste tu contraseña?</router-link>
                </div>
              </form>

              <p class="mt-5 mb-3 text-muted">&copy; Sintapujos 2023</p>
            </main>


          </body>

        </div>
                <!--TERMINA CODIGO DE REGISTRO-->

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button>-->
                </div>
            </div>
        </div>
        <!-- <div class="mb-4">
      <label for="nombre" class="form-label">Nombre</label>
      <tr v-for="usuario in usuarios" v-bind:key="usuario.id_persona">
        <td class="form-control" id="comentarios" rows="4">
          {{ usuario.n_documento }}
        </td>
      </tr>
    </div> -->
    </div>
        
</template>
 
<script>


//import Cookies from 'js-cookie'
import Swal from 'sweetalert2';
import axios from 'axios';

import { mapActions } from 'vuex'


export default {
  components: {},
  name: 'LoginComp',

  data() {
    return {

      persona: {

        n_documento: '',
        contrasena: '',
        rol: ''
      }

    }
  },

  methods: {

    ...mapActions({

      actualizarRol: 'actualizarRol'

    }),

    postLogin() {

      console.log(this.persona.rol)

      axios.post('http://localhost:4000/login', this.persona)
        .then((response) => {
          if (response.data.code === 201) {
            this.actualizarRol(this.persona.rol)
            localStorage.setItem('token', response.data.token); // Guardar el token en el Local Storage
            localStorage.setItem('persona', JSON.stringify(this.persona)); // Guardar los datos persona en el Local Storage 
                    // this.$router.push('/')
                    window.location.href = '/';                  
                 //   eslint-disable-next-line
            $(this.$refs.loginModal).modal('hide')
          }
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 6000
          })
        })

    },
    

  },




}
</script>
 
<style scoped>
.btn-bd-primary {
  font-weight: 600;
  color: #fff;
  background-color: #52b357;
  border-color: #20a754;
}

.btn-bd-primary:hover,
.btn-bd-primary:active {
  color: #fff;
  background-color: #61428f;
  border-color: #61428f;
}

.btn-bd-primary:focus {
  box-shadow: 0 0 0 3px rgba(121, 82, 179, 0.25)
}

.color-form {
  color: #20a754;
}

.contraseña {
  text-decoration: none;
}

.contraseña:hover {
  text-decoration-line: underline;

}
</style>