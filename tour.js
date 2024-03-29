
    $(".event-info-button").on("click", function () {
    event.preventDefault();
    var input = $("#search").val().trim();
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    console.log("event info button clicked");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#artist-name").empty();
        $("#artist-detail").empty();
        $("#artist-bio").empty();
        $("#event-info").empty();
        $("#logo-div").empty();
        $("#disco-body").empty();
        $("#disco-table-head").empty();
        $("#similar-info").empty();
        var newTable = $('<table>');

        //return an alert if artist is not currently on tour
        if (response.length === 0){
            $("#event-info").html('<p>' + 'Sorry, the artist you searched for does not have any upcoming events.' + '</p>');
            console.log("Not on tour");
        }
        else {
            var tourDate = 0;
            for (var j = 0; j < 2; j++) {
                var concertRow = $("<tr>");
                for (var i = 0; i < 3; i++) {
                    concertRow.append("<td>" + response[tourDate].datetime + "<br>" +
                        response[tourDate].venue.name + "<br>" +
                        response[tourDate].venue.city + " " +
                        response[tourDate].venue.region + "<br>" +
                        response[tourDate].venue.country + "<br></td>");
                    tourDate++;
                }
                newTable.append(concertRow);
            }
            $("#event-info").html(newTable);
            $("#logo-div").append('<img style="size: 5em" class="col-sm-2" src="assets/hand+logo.png">');
            $("#logo-div").append('<p class="col-sm-8">Powered By Bandsintown</p>');
        } 
    })
})
$(".material-icons").on("click", function() {
    $("#search").val("");
})
