<template>

     <div class="project" :class="{complete:project.complete}" >
        <div class="flexing">
            <div @click="showDetail=!showDetail"><h3>{{project.title}}</h3></div>
            <div>
                <span class="material-icons" @click="deleteProject">delete</span>
                <span class="material-icons">edit</span>
                <span class="material-icons">done</span>
             </div>
        </div>
        <p v-if="showDetail">{{project.detail}}</p>
        <p>{{project.complete}}</p>
     </div>
</template>

<script>


export default {
  data(){
    return {
      showDetail:false,
      api:"http://localhost:3000/projects/"
    }
  },
  methods:{
      deleteProject(){
        let deleteRoute=this.api+this.project.id;
        fetch(deleteRoute,{method:"DELETE"}).
        then(()=>{
            this.$emit("delete",this.project.id);
        }).
        catch((err)=>{
          console.log(err.message);
        })
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
    border-left: 6px solid rgb(246, 1, 75);
    border-radius: 10px;
}
h3{
    color:indigo;
}
.flexing{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
span{
    margin-left: 10px;
}
span:hover{
    color:#777;
}
.complete{
  border-left-color: green;
}
</style>
