const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
//const { error } = require("console");
const app = express();
const db = new sqlite3.Database("./database.db");  //database 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// configure Multer for Image fileuploads

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Initialize database

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        category TEXT,
        content TEXT NOT NULL,
        image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);

});

//routes

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "index.html"));
});

//posts
app.get("/posts", (req, res) => {
    db.all("SELECT * FROM  posts ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get("/post/:title", (req, res) => {
    const postTitle = req.params.title.replace(/-/g, "").trim();
    db.get(
        "SELECT * FROM posts WHERE TRIM(LOWER(title)) =?",
            [postTitle.toLowerCase()],
            (err, row) => {
                if (err) {
                    res.status(500).json({ error: "Database Error" });
                    return;
                }
                if (!row) {
                    res.status(404).json({ error: "Post Not Found" });
                    return;
                }
                res.json(row);
            }
       );
});

app.get("/post-details/:title", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "post-details.html"));
});

app.post("/add",upload.single("image"),(req,res)=>{
    const {title,category,content}=req.body;
    const image=req.file ? `/uploads/${req.file.filename}` : null;
    
    db.run(
        "INSERT INTO posts (title,category,content,image,created_at) VALUES(?,?,?,?, CURRENT_TIMESTAMP)",
        [title,category,content, image],
        (err)=>{
            if(err){
                return console.log(err.message);
            }
            res.redirect("/");
        }
    );
});

//Delete Route
app.post("/delete/:id",(req,res)=>{
const id=req.params.id;
db.run("DELETE FROM posts WHERE id = ?", id, (err) => {
   if(err){
    return console.log(err.message);
   }
   res.status(200).send({message: "Post has been deleted"});
});
});


app.get("/add", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "add.html"));
});

app.get("/admin", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "admin.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server runnin on port ${PORT}`);
});


