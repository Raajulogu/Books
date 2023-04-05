var container=document.createElement('div');
var row=document.createElement('div');
container.className="container";
row.classList.add("row","m-3");
var box=document.createElement('div');
box.className="box";
var search=document.createElement('input');
search.setAttribute("id","search");
search.setAttribute("type","number");
search.setAttribute("placeholder","Enter the book number 1-10")
var sbutton=document.createElement('button');
sbutton.classList.add("sbutton","btn","btn-primary");
sbutton.addEventListener('click',searching)
var i=document.createElement('i');
i.classList.add("fa","fa-search");
sbutton.appendChild(i);
box.append(search,sbutton);
container.append(box,row);
document.body.appendChild(container);

async function searching(){
var num=document.getElementById("search").value
try{
  var url= await fetch(`https://www.anapioficeandfire.com/api/books/${num}`);
var api= await url.json();
  var date=new Date(api.released);
  var char=api.characters
  var carr=[];
for(var j=0;j<15;j++){
var ur=await fetch(char[j]);
var li= await ur.json();
if(li.name!=="" && li.name!=="undefined"){
    carr.push(li.name);
}
}
row.innerHTML=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
<div class="row no-gutters">
<div class="col-md-4">
<img src="" alt="...">
</div>
<div class="col-md-8">
<div class="card-body">
<h5 class="card-title">${api.name}</h5>
<p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
<p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
<p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
<h4>Characters</h4>
<ul>
  <li>${carr[0]}</li>
  <li>${carr[1]}</li>
  <li>${carr[2]}</li>
  <li>${carr[3]}</li>
  <li>${carr[4]}</li>
</ul>
</div>
</div>
</div>
</div>`



}catch{
  row.innerHTML="Please Enter the correct book number(From 1-10)"
}

}

async function books(i){
    try{
        var url= await fetch(`https://www.anapioficeandfire.com/api/books/${i}`);
    var api= await url.json();
        var date=new Date(api.released);
        var char=api.characters
        var carr=[];
    for(var j=0;j<15;j++){
      var ur=await fetch(char[j]);
      var li= await ur.json();
      if(li.name!=="" && li.name!=="undefined"){
          carr.push(li.name);
      }
    }
  row.innerHTML+=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
  <div class="row no-gutters">
  <div class="col-md-4">
    <img src="" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${api.name}</h5>
      <p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
      <p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
      <p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
      <h4>Characters</h4>
      <ul>
        <li>${carr[0]}</li>
        <li>${carr[1]}</li>
        <li>${carr[2]}</li>
        <li>${carr[3]}</li>
        <li>${carr[4]}</li>
      </ul>
      </div>
      </div>
      </div>
      </div>`

    

    }catch{
        alert("Invalid url");
    }    
}
books(1)
books(2)
books(3)
books(4)var container=document.createElement('div');
var row=document.createElement('div');
container.className="container";
row.classList.add("row","m-3");
var box=document.createElement('div');
box.className="box";
var search=document.createElement('input');
search.setAttribute("id","search");
search.setAttribute("type","number");
search.setAttribute("placeholder","Enter the book number 1-10")
var sbutton=document.createElement('button');
sbutton.classList.add("sbutton","btn","btn-primary");
sbutton.addEventListener('click',searching)
var i=document.createElement('i');
i.classList.add("fa","fa-search");
sbutton.appendChild(i);
box.append(search,sbutton);
container.append(box,row);
document.body.appendChild(container);

async function searching(){
var num=document.getElementById("search").value
try{
  var url= await fetch(`https://www.anapioficeandfire.com/api/books/${num}`);
var api= await url.json();
  var date=new Date(api.released);
  var char=api.characters
  var carr=[];
for(var j=0;j<15;j++){
var ur=await fetch(char[j]);
var li= await ur.json();
if(li.name!=="" && li.name!=="undefined"){
    carr.push(li.name);
}
}
row.innerHTML=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
<div class="row no-gutters">
<div class="col-md-4">
<img src="" alt="...">
</div>
<div class="col-md-8">
<div class="card-body">
<h5 class="card-title">${api.name}</h5>
<p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
<p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
<p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
<h4>Characters</h4>
<ul>
  <li>${carr[0]}</li>
  <li>${carr[1]}</li>
  <li>${carr[2]}</li>
  <li>${carr[3]}</li>
  <li>${carr[4]}</li>
</ul>
</div>
</div>
</div>
</div>`



}catch{
  row.innerHTML="Please Enter the correct book number(From 1-10)"
}

}

async function books(i){
    try{
        var url= await fetch(`https://www.anapioficeandfire.com/api/books/${i}`);
    var api= await url.json();
        var date=new Date(api.released);
        var char=api.characters
        var carr=[];
    for(var j=0;j<15;j++){
      var ur=await fetch(char[j]);
      var li= await ur.json();
      if(li.name!=="" && li.name!=="undefined"){
          carr.push(li.name);
      }
    }
  row.innerHTML+=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
  <div class="row no-gutters">
  <div class="col-md-4">
    <img src="" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${api.name}</h5>
      <p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
      <p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
      <p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
      <h4>Characters</h4>
      <ul>
        <li>${carr[0]}</li>
        <li>${carr[1]}</li>
        <li>${carr[2]}</li>
        <li>${carr[3]}</li>
        <li>${carr[4]}</li>
      </ul>
      </div>
      </div>
      </div>
      </div>`

    

    }catch{
        alert("Invalid url");
    }    
}
books(1)
books(2)
books(3)
books(4)var container=document.createElement('div');
var row=document.createElement('div');
container.className="container";
row.classList.add("row","m-3");
var box=document.createElement('div');
box.className="box";
var search=document.createElement('input');
search.setAttribute("id","search");
search.setAttribute("type","number");
search.setAttribute("placeholder","Enter the book number 1-10")
var sbutton=document.createElement('button');
sbutton.classList.add("sbutton","btn","btn-primary");
sbutton.addEventListener('click',searching)
var i=document.createElement('i');
i.classList.add("fa","fa-search");
sbutton.appendChild(i);
box.append(search,sbutton);
container.append(box,row);
document.body.appendChild(container);

async function searching(){
var num=document.getElementById("search").value
try{
  var url= await fetch(`https://www.anapioficeandfire.com/api/books/${num}`);
var api= await url.json();
  var date=new Date(api.released);
  var char=api.characters
  var carr=[];
for(var j=0;j<15;j++){
var ur=await fetch(char[j]);
var li= await ur.json();
if(li.name!=="" && li.name!=="undefined"){
    carr.push(li.name);
}
}
row.innerHTML=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
<div class="row no-gutters">
<div class="col-md-4">
<img src="" alt="...">
</div>
<div class="col-md-8">
<div class="card-body">
<h5 class="card-title">${api.name}</h5>
<p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
<p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
<p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
<h4>Characters</h4>
<ul>
  <li>${carr[0]}</li>
  <li>${carr[1]}</li>
  <li>${carr[2]}</li>
  <li>${carr[3]}</li>
  <li>${carr[4]}</li>
</ul>
</div>
</div>
</div>
</div>`



}catch{
  row.innerHTML="Please Enter the correct book number(From 1-10)"
}

}

async function books(i){
    try{
        var url= await fetch(`https://www.anapioficeandfire.com/api/books/${i}`);
    var api= await url.json();
        var date=new Date(api.released);
        var char=api.characters
        var carr=[];
    for(var j=0;j<15;j++){
      var ur=await fetch(char[j]);
      var li= await ur.json();
      if(li.name!=="" && li.name!=="undefined"){
          carr.push(li.name);
      }
    }
  row.innerHTML+=`<div class="card mb-3" style="max-width: 590px; margin:5px;">
  <div class="row no-gutters">
  <div class="col-md-4">
    <img src="" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${api.name}</h5>
      <p class="card-text">ISBN : ${api.isbn} <br> No.of pages : ${api.numberOfPages}</p>
      <p class="card-text">Author : ${api.authors.join(",")}   Publisher : ${api.publisher}</p>
      <p class="card-text">Released Date : ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</p>
      <h4>Characters</h4>
      <ul>
        <li>${carr[0]}</li>
        <li>${carr[1]}</li>
        <li>${carr[2]}</li>
        <li>${carr[3]}</li>
        <li>${carr[4]}</li>
      </ul>
      </div>
      </div>
      </div>
      </div>`

    

    }catch{
        alert("Invalid url");
    }    
}
books(1)
books(2)
books(3)
books(4)
