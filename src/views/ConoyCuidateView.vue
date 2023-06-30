<template>
    
    <nav-comp></nav-comp>
   <ConoceteyCuidateComp/>
   <footer-comp></footer-comp>
  
</template>
<script>



import FooterComp from '@/components/FooterComp.vue'
import ConoceteyCuidateComp from '@/components/ConoceteyCuidateComp.vue'
import NavComp from '@/components/NavComp.vue'
export default {
  components: {  FooterComp, ConoceteyCuidateComp, NavComp },
   name:'ConoyCuidateView' ,
   methods:{
      
   }
}
</script>


<style scoped>

</style>