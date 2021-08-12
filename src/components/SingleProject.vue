<template>

     <div class="project" @click="showDetail=!showDetail">
        <h3>{{project.title}}</h3>
        <p v-if="showDetail">{{project.detail}}</p>
     </div>
</template>

<script>


export default {
  data(){
    return {
      projects:[],
      showDetail:false
    }
  },
  props:['project']
 
}
</script>
<style scoped>
.project{
    padding:20px;
    margin:10px;
    background: rgb(241, 240, 240);
    cursor:pointer;
}
h3{
    color:indigo;
}
</style>
