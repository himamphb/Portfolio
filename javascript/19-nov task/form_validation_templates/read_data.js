function displayUsers(datacollect){
    document.querySelector("tbody").innerHTML = ""
    datacollect.forEach((myUser,i)=>{
        var myTr = document.createElement("tr");
        for(a in myUser){
            var myTd = document.createElement("td");
            myTd.innerHTML = myUser[a]
            myTr.appendChild(myTd)
        }
  
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "EDIT";
        editTd.appendChild(editBtn);
        myTr.appendChild(editTd);
  
        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
        deleteBtn.innerHTML = "DELETE";
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd);
  
  
        document.querySelector("tbody").appendChild(myTr)
    })
  }
  