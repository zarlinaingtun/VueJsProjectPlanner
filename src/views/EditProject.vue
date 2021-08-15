<template>
<h1>Edit Project</h1>
  <form @submit.prevent="updateProject">
      <label>Project Title</label>
      <input type="text" v-model="title" required/>
      <label>Project Detail</label>
      <input type="text" v-model="detail" required/>
      <button>Add project</button>
  </form>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:'',
            detail:''
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects/'+this.id)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.title=data.title,
            this.detail=data.detail
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },
    methods:{
        updateProject(){
            console.log('update');
            fetch('http://localhost:3000/projects/'+this.id,{
                method:"PATCH",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({
                    title:this.title,
                    detail:this.detail
                })
            }).
            then(()=>{
                return this.$router.push({name:'Home'})
            }).
            catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>