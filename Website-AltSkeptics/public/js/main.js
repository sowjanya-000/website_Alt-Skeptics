// const express =require('express');
// const sqlite3=require('sqlite3').verbose();
// const bodyParser=require('body-parser');
// const multer=require('multer');
// const path=require('path');
// const app=express();

//const { response } = require("express");

// app.use(bodyParser.utlencoded({extended:true}));
// app.use(express.static(public));

// //routes

// app.get('/',(req,res)=>{

//     res.sendFile(path.join(__dirname,"views","index.html"))
// })

// const PORT=process.env.PORT || 3000;
// app.listen(PORT,() =>{
//  console.log(`server runnin on port ${PORT}`);
// });

document.addEventListener("DOMContentLoaded" ,function(){

    fetch("/posts")
     .then((response)=>response.json())
     .then((posts)=>{
        const postContainer=document.getElementById("posts");

        postContainer.innerHTML=posts
        .map(
          (post)=> `
          <div class="post ${post.category}">
         ${
         post.image 
         ? `<img class="post-img" src="${post.image}" alt="${post.title}">`
         : ""
     }

    <h3 class="post-category">${post.category}</h3>
    <a href="/post-details/${encodeURIComponent(
        post.title.trim().replace(/\s+/g,"-").toLowerCase()
    )}">

    <h2 class="post-title">${post.title}</h2>
    </a>
    <div class="post-desc">${post.content}</div>
        <a href="/post-details/${encodeURIComponent(
        post.title.trim().replace(/\s+/g,"-").toLowerCase()
    )}" class="read-more">Read More </a>

  
         </div>
         `
        )
        .join("");

        })
        .catch((error)=>{
            console.error("Error fetching posts:",error);
            const postContainer=document.getElementById("posts");
            postContainer.innerHTML="<p>Error Fetching posts.</p>";
        });
    });


let header=document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY > 0);
});