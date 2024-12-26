console.log("The Laws of Human Nature by Robert Greene") //1

console.log("The 48 laws of power") //2

setTimeout(() => {
    console.log("I am inside settimeout")    //4
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")    //5
}, 0);


console.log("The End") //3

const fn =() => {
    console.log("Nothing")
}

const callback =(arg, fn) => {
    console.log(arg)
    fn()
}


// const callback = (arg) => {
//     console.log(arg)
// }

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Hallo!");
    document.head.append(sc)
}

//loadScript("https://www.w3schools.com/js/", callback)

// loadScript("https://www.w3schools.com/js/", (arg, fn) => {
//     console.log(arg)
//     fn("firstarg", ()=>{
//         ddg("secondarg", () => {

//         })

//     })
// })