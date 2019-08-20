const main = document.getElementById('main');

fetch("http://localhost:3000/")

.then((results) => {
    return results.json();
})
    .then((json)=>{
        for(var i = 0; i < json.length; i ++){  
        main.innerHTML += `
        <div class="card">
            <h2>${json[i].title}</h2>
            <img src="${json[i].photo}"></img>   
        </div>`
        }
     })



