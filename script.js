var container=document.createElement('div');
var row=document.createElement('div');
container.className="container";
row.classList.add("row","m-3");
container.appendChild(row);
document.body.appendChild(container);

async function books(){
    try{
        var url= await fetch("https://www.anapioficeandfire.com/api/books");
    var api= await url.json();
    for(var i=0;i<api.length;i++){
        var date=new Date(api[i].released);
        var char=api[i].characters
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
              <h5 class="card-title">${api[i].name}</h5>
              <p class="card-text">ISBN : ${api[i].isbn} <br> No.of pages : ${api[i].numberOfPages}</p>
              <p class="card-text">Author : ${api[i].authors.join(",")}   Publisher : ${api[i].publisher}</p>
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

    }

    }catch{
        alert("Invalid url");
    }    
}
books()