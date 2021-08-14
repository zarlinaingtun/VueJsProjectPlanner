<template>
  <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'AddProject'}">Add Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
 nav{
    margin: 20px 0px;
    text-align: center;
 }
 a{
     color:gray;
     padding:10px 0px;
     text-decoration: none;
 }
a.router-link-active{
     color:springgreen;
     border-bottom: 1px solid springgreen;
     
 }
</style>