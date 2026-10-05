const express = require("express");
const router = express.Router();


//Index - Posts

router.get("/", (req, res) => {
    res.send("Get form Posts");
});

// show - Posts

router.get("/:id", (req, res) => {
    res.send("Get for  Posts id");

});

//post -  Posts

router.post("/", (req, res) => {
    res.send("Post for users");
});

// Delete  Posts

router.delete("/:id", (req, res) => {
    res.send("Delete for posts");
});

module.exports = router;