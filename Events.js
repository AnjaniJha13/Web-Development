let button = document.getElementById("btn")
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event

button.addEventListener("dblclick", ()=>{
    //alert("I was clicked")
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right click Please")
})  

button.addEventListener("keydown", (e)=>{
   console.log(e,e.key)
    
})
