document.getElementById("login").addEventListener("click", login);
document.getElementById("register").addEventListener("click", register);
document.getElementById("search").addEventListener("click", search);
document.getElementById("addNewVenue").addEventListener("click", addNewVenue);
function sessionStart(){
    $.ajax({
        url: "php/startSession.php",
        type: "POST",
    });
}
sessionStart();
function login(){
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
    $.ajax({
        url: "php/login.php",
        type: "POST",
        data: {
            username: username,
            password: password
        },
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    });
}
function register(){
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
    $.ajax({
        url: "php/register.php",
        type: "POST",
        data: {
            username: username,
            password: password
        },
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    });
}
function search(){
    let keyword= document.getElementById("keyword").value;
    let type= document.getElementById("type").value;
    document.getElementById('searchResults').innerHTML= "";
    $.ajax({
        url: "php/search.php",
        type: "POST",
        data: {
            keyword: keyword,
            type: type
        },
        success: function (data) {
            console.log(data);
            document.getElementById('searchResults').innerHTML+= data;
        },
        error: function (data) {
            console.log(data)
        }
    });
}
function addNewVenue(){
    let venueName= document.getElementById("newVenueName").value;
    let venueDescription= document.getElementById("newVenueDesc").value;
    let venueType= document.getElementById("newVenueType").value;
    $.ajax({
        url: "php/addVenue.php",
        type: "POST",
        data: {
            venueName: venueName,
            venueDescription: venueDescription,
            venueType: venueType
        },
        success: function (data) {
            console.log(data);

        },
        error: function (data) {
            console.log(data)
        }
    });
}