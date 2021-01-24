const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// let str = "";
button.onclick = function () {
   let str = input.value;
   input.value="";
   const li = document.createElement("li");
   const span = document.createElement("span");
   const removeButton = document.createElement("button");
   ul.append(li);
   li.append(span);
   li.append(removeButton);
   span.textContent=str;
   removeButton.innerText="delete";



    
} ;


