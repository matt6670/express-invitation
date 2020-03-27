// TASK: 
// Redo the invitation task from earlier in the week. The expected behaviour is:
// serve a page (not called index.html - manually create the route)
// This page should have the form (styled!!) to enter the data
// On submission this form should be posted to an appropriately named route.
// This post route should handle(extract) the data from the form and present it in new html page
// No use of jquery of showing/hiding of css here - all done 'properly' using the power of the framework!! :muscle::skin-tone-3: (edited) 

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: false}));
//app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static('../public/', {index: 'invitationForm.html'}));
app.use(express.static('../public/', {index: 'styles.css'}));

app.post("/generateInvitation", (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.celebration);
    console.log(req.body.message);

    let name = req.body.name;
    let celebration = req.body.name;
    let message = req.body.name;

    // res.render({
    //     res.sendFile("invitationCard.html", { root: __dirname + "/public" });
    // });
    res.render("invitationCard.html");
    // document.addEventListener("DOMContentLoaded", init);
    // document.getElementById("name").innerHTML = `${name}`
    weddingImg = "https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pink-wedding-happy-show-board-background-boarddisplay-board-designweddingwedding-image_73622.jpg";
    birthdayImg = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-birthday-instagram-captions-1584723902.jpg?crop=1.00xw:0.752xh;0,0.197xh&resize=1200:";
    graduationImg = "https://lh3.googleusercontent.com/proxy/uzIyrwQtwB7Ybqxrmv7F9RQAl03BmBJ3_70lyxwBD6pXZmDtYVm_JaQ0zd56mp9ohvsp6c19Yq2Q1Qn6N7OujHHgvWK-W-82qLrpD23zQ9zZoP3-_1EiFZZDrzhph1RknjEvG3SGc7zGUQsI";

});

app.get("", (req, res) => {
    console.log("Hello world");
    res.sendFile("invitationForm.html", { root: __dirname + "/public" });
});

app.listen(PORT, () => {
    console.log(`listening on PORT : ${PORT}`);
});