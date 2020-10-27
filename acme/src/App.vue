<template>
<v-app>
  <v-app-bar app flat>
    <Header/>
  </v-app-bar>
    
  <v-body>
    <SolicitarCita/>
  </v-body>
  
  <v-footer>
    <Footer/>
  </v-footer>
</v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Index from "./components/Index.vue";
import Footer from "./components/Footer";
import SolicitarCita from "./components/SolicitarCita.vue";
import SeleccionCita from "./components/SeleccionCita.vue";

export default {
  data() {
    return {

    };
  },
  created() {

  },
  methods() {
    
  },
  components: {
    Header,
    Index,
    Footer,
    SolicitarCita,
    SeleccionCita,
  },
};
</script>

<style>
 .todo{
   margin: auto;
 }
 *{
   font-family: 'Capriola', sans-serif;
 }
</style>
