let datas=[
    {id:1,project:"project 1",title:"title 1"},
    {id:2,project:"project 2",title:"title 2"},
    {id:3,project:"project 3",title:"title 3"}
];
let loopdatas=datas.find((data)=>{
    return data.id===1;
});
loopdatas.id=5;//overwrite id in datas array
loopdatas.project="project 5";//overwrite project in datas array
console.log(loopdatas);
console.log(datas);