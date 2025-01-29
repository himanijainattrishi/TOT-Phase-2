const http=require("http")
const fsPromise=require("fs/promises")
const server=http.createServer(async(req,res)=>{
  
   if(req.url=="/"){
   
        const data= await fsPromise.readFile("./pages/homepage.html","utf-8")
   res.end(data)
   
      
    // res.end("<h1 style='color:red'>hello</h1>") 

   }
   else if(req.url=="/About")
    {
       const data= await fsPromise.readFile("./pages/About.html")
       res.end(data)
// res.end(`
//     <html>
//     <style>
//     body{
//     background-color:yellow
    
//     }
        
// </style>
// <body>
//     my page about
// </body>
//     </html>
//     `)

   }
   else{
    const data= await fsPromise.readFile("./pages/error.html")
   res.end(data)
   }

});
server.listen(2100)