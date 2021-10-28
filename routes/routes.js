const path = require("path");
const fs = require("fs");

app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    readNotes;
    let newNotes = req.body;
    notes.push(newNotes);
    res.json(newNotes);
    notesId();
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
    });
});

module.exports = { app }