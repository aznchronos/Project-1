$("#searchButton").on("click", function(){
    charityPull();
    populatePage();
    // console.log("search for this:" + charityPull);
});

function charityPull(){
    console.log("got into charityPull");
    var searchTerm = $("#search-term").val();
    console.log(searchTerm);
    var key = "b1bcb5038ce8b872aaf3c3f6c7d3b3eb";
    $("body").empty();
    var queryURL = "http://data.orghunter.com/v1/charitysearch?user_key=" + key + "&searchTerm=" + searchTerm;
    console.log(queryURL);
    $.ajax({
        headers: {"access-control-allow-origin": "https://orghunter.3scale.net", "access-control-allow-credentials": "true", "content-type" : "application/json"},
        url: queryURL,
        method: "POST",
        dataType: "jsonp",
        crossDomain: true,
    }).then(function(response){
        var result = response.data;
        console.log("got into then");   
        console.log(response);
    }).fail(function(message) {
        console.log("failed!");
        console.log(message.status);
    });
    
};

// function setHeader(xhr){
//     xhr.setRequestHeader("Authorization", "https://data.orghunter.com/");
// }

function populatePage(){
    newPage = "<div class='jumbotron'><h1 class='text-center'>Find That Charity!!!</h1></div>" +
    "<div class='form-group'><input type='text' class='form-control' id='search-term'>" +
    "<button type='submit' class='btn btn-default' id='searchButton'>Search</button>" +
    "</div>"
    $("body").html(newPage);
}