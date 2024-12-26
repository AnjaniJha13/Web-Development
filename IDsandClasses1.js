console.log("Hiiiiiii");

//let Box = document.getElementsByClassName("box")
//console.log(Box)

//Box[2].style.backgroundColor = "red"

//Id - getElement 
//Classes - getElements

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "yellow" //It will color only to first matched selector

//console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{  //To color all box at once
    e.style.backgroundColor = "pink";

})

e = document.getElementsByTagName("div")

e[4].matches("redbox")

e[3].matches("#redbox")

e[3].closest(".container")

e[2].closest("html")

document.querySelector(".container").contains(e[0])

document.querySelector(".container").contains(document.querySelector("body"))


document.querySelector(".body").contains(document.querySelector("container"))
