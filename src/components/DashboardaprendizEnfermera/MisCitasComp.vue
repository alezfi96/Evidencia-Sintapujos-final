<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Mis Citas app</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
    </div>
  </div>
  <div>
    <div class="container">
      <h2>Citas Aceptadas</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">N° Documento</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <!-- <th scope="col">descripcion</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <th>{{ imagen.n_documento }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <!-- <td>{{ imagen.descripcion }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>
    <hr>
    <div v-if="citasAceptadas.length === 0">
      <p>No tienes citas.</p>
    </div>
    <div v-else>
      <table class="table table-striped table-hover">
        <thead class="table-primary table-hover">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">descripcion</th>
            <th scope="col">Eliminar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>{{ imagen.descripcion }}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

import axios from "axios";
export default {
  name: 'MisCitasComp',
  data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
      },
      imagenes: [],
      citasAceptadas: [],
      contadoresCitas: {},
      horasAgendadas: [],
      titleModal: "",
      modal: false,
      limiteCitasIniciales: 1,
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    async getuser() {
      try {
        // const n_documento = localStorage.getItem('n_documento'); // Obtener el valor de n_documento del local storage
        // const response = await axios.get(`http://localhost:4000/citas_n/${n_documento}`);
        const response = await axios.get(`http://localhost:4000/cita/`);

        this.imagenes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>


<style scoped></style>