const fs = require('fs');
//fs: filesystem
//err: error

//write file
  fs.writeFile("hey.txt","hey hello kaise ho sab?",function(err) {
      if(err) console.error(err);
     else console.log("done");
  })

//append file
fs.appendFile(path,data[,options],callback=func)
  fs.appendFile("hey.txt","Arr mein badhiya",function(err) {
     if(err) console.error(err);
      else console.log("done");
 })

//Rename File
fs.name(old filename ,new filename,callback)
 fs.rename("hey.txt","hello.txt",function(err) {
     if(err) console.error(err);
     else console.log("done");

 })

//Copy File
fs.copyFile(src,dest[,mode],callback)
 fs.copyFile("hello.txt", "./copy2/file.txt",function(err) {
     if(err) console.error(err.message); //vl display reason of the error
     else console.log("done");
 })

//Unlink File
fs.unlink(path,callback)
 fs.unlink("hello.txt",function(err) {
     if(err) console.error(err); 
     else console.log("removed");
 })

//rmdir file
fs.rmdir(path[,options],callback)
 fs.rmdir("./copy",function(err) { //This vl give error as file is not empty
     if(err) console.error(err);
     else console.log("removed");
})

//rmdir file
 fs.rmdir("./copy", {recursive: true}, function(err) { //Now xopy file is removed
     if(err) console.error(err);
    else console.log("removed");
 })

//rm file can be used in place of rmdir
fs.rm("./copy", {recursive: true}, function(err) { 
    if(err) console.error(err);
    else console.log("removed");
})
