$("#searchButton").on("click", function(){
    charityPull();
    populatePage();
    console.log("search for this:" + charityPull);
});

function charityPull(){
    var searchTerm = $("#search-term").val();
    $("body").empty();
    var queryURL = "https://data.orghunter.com/v1/charitysearch?user_key=b1bcb5038ce8b872aaf3c3f6c7d3b3eb&searchTerm=" + searchTerm;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var result = response.data;
        console.log(result);
    });
    
};

function populatePage(){
    newPage = "<div class='jumbotron'><h1 class='text-center'>Find That Charity!!!</h1></div>" +
    "<div class='form-group'><input type='text' class='form-control' id='search-term'>" +
    "<button type='submit' class='btn btn-default' id='searchButton'>Search</button>" +
    "</div>"
    $("body").html(newPage);
}