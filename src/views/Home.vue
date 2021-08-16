<template>
<h1>Home </h1>

<FilterNav @filterValue="current=$event" :current="current"></FilterNav>
     <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
     </div>
     <!-- <h1>{{current}}</h1> -->
</template>

<script>


import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject'
export default {
  data(){
    return {
      projects:[],//[{},{},{}]
      current:'all'
    }
  },
  components: {
    FilterNav,
    SingleProject,
    
  },
  methods:{
    deleteProject(id){
      this.projects=this.projects.filter((project)=>{
        return project.id!=id;
      })
    },
    completeProject(id){
      let findProject=this.projects.find((project)=>{
        return project.id===id;
      });
      findProject.complete=!findProject.complete;
      console.log(findProject);
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects').
    then((response)=>{
      return response.json()
    }).
    then((datas)=>{
      this.projects=datas
    }).
    catch((err)=>{
      console.log(err.message)
    })
  },
  computed:{
    filteredProjects(){
      if(this.current==='complete'){
        return this.projects.filter((project)=>{
          return project.complete;
        })
      }
       if(this.current==='ongoing'){
        return this.projects.filter((project)=>{
          return !project.complete;
        })
      }
      return this.projects;
    }
  }
}
</script>
