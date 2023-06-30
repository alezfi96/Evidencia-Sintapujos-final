<template>
    <nav-comp></nav-comp>
   <enfermera-view></enfermera-view>
    <footer-comp></footer-comp>
</template>



<script>

import NavComp from '@/components/NavComp.vue';
import FooterComp from '@/components/FooterComp.vue'
export default {
    name:'EventosView',
    components:{  FooterComp,NavComp}
}
</script>

<style scoped>

</style>