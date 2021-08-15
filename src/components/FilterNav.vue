<template>
<nav class="filter-nav">
    <button @click="filterBy('all')" class="filter" v-bind:class="{active:current==='all'}">All</button>
    <button @click="filterBy('complete')" class="filter" v-bind:class="{active:current==='complete'}"> Complete</button>
    <button @click="filterBy('ongoing')" class="filter" v-bind:class="{active:current==='ongoing'}">Ongoing</button>
</nav>

</template>

<script>
export default {
   methods:{
       filterBy(value){
        //    console.log(value);
        this.$emit('filterValue',value);
       }
   },
   props:['current']
}
</script>

<style>
.filter-nav .filter{
    display: inline;
    margin-right:10px;
    background-color: transparent;
    color:gray;
    text-transform: uppercase;
    font-weight: bold;

    cursor:pointer;
}
.filter.active{
    color:#fff;
    background-color: seagreen;
}
</style>