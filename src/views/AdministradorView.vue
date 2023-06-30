<template>
  <nav-comp></nav-comp>
  <h1>Administrador SinTapujos</h1>
  <main class="form-signin w-100 m-auto text-center shadow-lg p-3 mb-5">
    <form @submit.prevent=postRegister()>
                <img class="mb-4" src="@/assets/images/Logo1.png" alt="" width="100" height="67">
                <h1 class="h3 mb-3 fw-normal">Registro</h1>
                <div class="form-floating">
                  <input type="text" class="form-control rounded-4 mb-1" id="nombre" placeholder="Nombres"
                    v-model="persona.nombre" required>
                  <label for="floatingInput" class="color-form">Nombres</label>
                </div>
                <div class="form-floating  ">
                  <input type="text" class="form-control rounded-4 mb-1" id="apellido" placeholder="Apellidos"
                    v-model="persona.apellido" required>
                  <label for="floatingInput" class="color-form">Apellidos</label>
                </div>
                <div class="form-floating ">
                  <select class=" color-form form-select pt-1 rounded-4 mb-1 " id="tipo_documento"
                    v-model.lazy="persona.tipo_documento" required>
                    <option disabled value="">Tipo documento</option>
                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                    <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                    <option value="Cedula de Extranjeria">Cedula de Extrenjeria</option>
                  </select>

                </div>


                <div class="form-floating">
                    <input type="text" class="form-control rounded-4 mb-1" id="n_documento"
                      placeholder="Numero de documento" v-model="persona.n_documento" required>
                    <label for="floatingInput" class="color-form">Numero de documento</label>
                  </div>


                <div class="form-floating">
                  <input type="text" class="form-control rounded-4 mb-1" id="n_ficha" placeholder="n_ficha"
                    v-model="persona.n_ficha" required>
                  <label for="floatingInput " class="color-form">Ficha</label>
                </div>

                <div class="form-floating">
                  <input type="number" class="form-control rounded-4 mb-1" id="telefono" v-model="persona.telefono"
                    required>
                  <label for="floatingPassword" class="color-form">Telefono</label>
                </div>
                <div class="form-floating">
                  <input type="email" class="form-control rounded-4 mb-1" id="email" placeholder="Correo"
                    v-model="persona.email" required>
                  <label for="email" class="color-form">Correo Electronico</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control rounded-4 mb-1" id="contraseña" placeholder="Contraseña"
                    v-model="persona.contrasena" required>
                  <label for="password" class="color-form">Contraseña</label>
                </div>
                <div class="form-floating ">
                  <select class=" color-form form-select pt-1 rounded-4 mb-1 " id="rol" v-model.lazy="persona.rol"
                    required>
                    <option disabled value="">Seleccione Rol</option>
                    <option value="Aprendiz">Aprendiz</option>
                    <option value="Aprendiz">Psicologa(o)</option>
                    <option value="Aprendiz">Enfermera(o)</option>

                  </select>

                </div>




                <br>
                <div>
                  <button type="submit" href="/register" data-bs-dismiss="modal"
                    class="w-100 btn btn-lg btn-bd-primary mb-2">Registrarse</button>
                  <button href="/login" class="w-100 btn btn-lg btn-bd-primary">Cancelar</button>
                </div>



              </form>




  </main>




  <footer-comp></footer-comp>
</template>
<script>

import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  components: { NavComp, FooterComp },
  name: 'AdministradorView',
  data() {
    return {

      persona: {
        // nombre:'',
        // lastname:'',
        // typeid:'',
        // idnumber:'',
        // file:'',
        // phone:'',
        // password:'',
        // email:''} "nombre":"holaassasa",
        nombre: '',
        apellido: "",
        contrasena: "",
        tipo_documento: "",
        n_documento: '',
        n_ficha: '',
        telefono: '',
        email: "",
        rol: ""
      }


    }
  },
  methods: {
    postRegister() {
      console.log(this.persona)
      axios.post('http://localhost:4000/persona', this.persona)
        .then((response) => {
          if (response.data.code === 204) {
            Cookies.set('token', response.data.token)
            this.$router.push('/')
            // eslint-disable-next-line
            $(this.$refs.regiModal).modal('hide')
          }
          Swal.fire({
            position: 'center',
            icon: response.data.icon,
            message: response.data.message,
            showConfirmButton: false,
            timer: 4000
          })
        })
    }
  }





}
</script>

<style scoped></style>