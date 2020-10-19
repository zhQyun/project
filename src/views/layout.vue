<template>
  <div>
    <div class="box">
      <home></home>
   
      <div class="main">
  <router-view />  
      </div>
    
    </div>
  </div>
</template>
<script>
import home from './Home'

export default {
    components:{
        home, 
    }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.box {
  display: flex;
}
</style>