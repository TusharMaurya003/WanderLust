const express = require("express");
const router = express.Router();

//Index - Users

router.get("/", (req, res) => {
    res.send("Get form users");
});

// show - users

router.get("/:id", (req, res) => {
    res.send("Get for user id");

});

//post - users

router.post("/", (req, res) => {
    res.send("Post for users");
});

// Delete users

router.delete("/:id", (req, res) => {
    res.send("Delete for users");
});

module.exports = router;