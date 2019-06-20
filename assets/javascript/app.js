$("#searchButton").on("click", function () {
    charityPull();
    populatePage();
    // console.log("search for this:" + charityPull);
});

function charityPull() {
    console.log("got into charityPull");
    var searchTerm = $("#search-term").val();
    console.log(searchTerm);
    var key = "811f3796206861ae75e263c9f204ca17";
    var APP_ID = "caa9091c";
    var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=" + APP_ID + "&app_key=" + key + "&search=" + searchTerm;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
    }).then(function (response) {
        for (var i = 0; i < 10; i++) {
            var result = response[i].charityName;
            console.log("got into then");
            result = "<tr>"
            console.log(result);
        }
    })
        .fail(function (message) {
            console.log("failed!");
            console.log(message);
        });

};

function populatePage() {
    $("#contentInformation").empty();
    newPage = "<div class='card'><div class='card-header'>Charities</div>" +
        "<div class='card-body'><table class='table' id='contentInformation'>" +
        "<tr><th scope='col'>Charity Name</th></tr></table></div></div>";
    $("#contentInformation").html(newPage);
}