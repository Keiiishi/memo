var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", Post);
    // list.innerHTML = list.innerHTML + 
    // `<div class="article">
    //     <h2>${title.value}</h2>
    //     <p>${content.value}</p>    
    // </div>
    // `;

    function Post(){
        // list.innerHTML = list.innerHTML +
        document.getElementById("list").innerHTML = list.innerHTML + 
        `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>    
        </div>
        `;
        title.value = "";
        content.value = "";
    }
