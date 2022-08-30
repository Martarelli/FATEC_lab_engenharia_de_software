document.querySelector("#button").addEventListener("click", arrayOrganization);
userArray = [];

function arrayOrganization(){
    
    let arrayList = document.querySelector(".arrayList");
    while (arrayList.firstChild){
        arrayList.removeChild(arrayList.firstChild);
    }

    userArray.push(document.querySelector("#word").value);
    userArray.sort();

    for(i of userArray){
        e = document.createElement("li"); 
        e.appendChild(document.createTextNode(i));
        e.setAttribute("class", "arrayItem");
        document.querySelector("ol").appendChild(e);
    }

    console.log(userArray)
}