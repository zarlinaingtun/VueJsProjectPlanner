<template>
  <h3>Add Project</h3>
  <form @submit.prevent="addProject">
      <label>Project Title</label>
      <input type="text" v-model="title" required/>
      <label>Project Detail</label>
      <input type="text" v-model="detail" required/>
      <button>Add project</button>
  </form>
</template>

<script>
export default {
   data(){
       return{
        title:'',
        detail:''

       }
   },
   methods:{
       addProject(){
          fetch('http://localhost:3000/projects',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:this.title,
                detail:this.detail,
                complete:false
            })
          })
          .then(()=>{
                return this.$router.push({name:'Home'})
          })
       }
   }
}

</script>

<style>
*{
    box-sizing: border-box;
}
h3{
    text-transform: uppercase;
    letter-spacing: 2px;
}
form{
    padding:20px;
    margin-top:30px;
    width:600px;
    background-color: rgb(113, 177, 236);
    color:#fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgb(109, 94, 206,0.3);
}
label{
       display: block;
       text-transform: uppercase;
       font-weight: bold;
       
       margin:10px 0px;
   }
input[type="text"]{
       color:springgreen;
       background-color: transparent;
       font-size:16px;
       width:100%;
       padding:10px;
       border:0;
       border-bottom: 1px solid #fff;
       margin-bottom: 10px;
   }
input:focus{
    outline:0;
    border-bottom-color: springgreen;
}
button{
    display: block;
    border:0;
    padding:10px 15px;
    color:#fff;
    background-color:springgreen;
    font-size: 16px;
    border-radius: 10px;
    margin:10px auto;
}
button:active{
    transform: scale(0.89);
}
</style>