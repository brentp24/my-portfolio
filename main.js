function setBackground() {
    var client_id = "RCxWMwEhzgzUqQu7IsYsENaOYusewqJSRQ2WcPni-Es";
    var query = "landscape";
    var unsplash = "https://api.unsplash.com/photos/random?&query=" + query + "&client_id=" + client_id;
    //console.log(unsplash);
    var unsplashWebsite = "https://unsplash.com/";
    $.ajax({
        url: unsplash,
        method: "GET"
    }).then(function (response) {
        var imageUrl = response.urls["full"];
        $("#backgroundPhotographer").html("Photo by <a href=" + response.links.html + ">" + response.user.name + "</a>" + " on <a href=" + unsplashWebsite + ">Unsplash</a>");
        //console.log(response);
        $("body")
            .css("background-image", "url(" + imageUrl + ")")
            .css("background-position", "center")
            .css("background-size", "cover");
    });
}
//set Background
setBackground();
