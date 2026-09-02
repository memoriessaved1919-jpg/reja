console.log("🥗🥗🥗🥗Web serverni boshlash🥗🥗🥗🥗");
const express = require('express');
const app = express();
const fs = require('fs');


// MongoDB chaqirish
const db = require("./server").db()


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
})

//1: Kirish codelar
app.use(express.static("public")); // Middleware DP - publicni frontendga ochiqlaydi
app.use(express.json()); // Middleware DP - Rest API access. (JSON => OBJECT, OBJECT => JSON)
app.use(express.urlencoded({extended: true})); // Middleware DP - Traditional API access. 
// Form orqaliy kelayotga requestlarni qabul qiladi. Ejsga bog'liq bogan masalalar 

//2: Session code
//3: Views code
app.set("views","views");
app.set("view engine", "ejs"); // ejslarni hammasi viewni ichida

//4: Routing code
app.post("/create-item", (req, res) => {
    console.log("STEP2: BACKENDga FRONTENDdan kirish!");
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body;
    console.log("STEP3: BACKENDdan DATABASEga jonash!");
        
    db.collection("plans").insertOne( new_reja , (err, data) => { 
        res.json(data.ops[0]); 
    })
} ); 

app.get('/author', (req, res) => {
    res.render ("author", { user: user });
});

app.get ("/", function (req, res) {
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
        res.end("something went wrong");
        } else {
                
        
        }
        console.log(data);
        res.render("reja", {items: data});
    })
    
});
module.exports = app;

 
