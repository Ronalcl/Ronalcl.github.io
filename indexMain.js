function createCard(formCard) {
    var template = $("#templateDiv").html();


    template = template.replace("@@IMAGEURL@@", formCard.photoUrl);
    template = template.replace("@@PLACE@@", formCard.place);
    template = template.replace("@@WEATHERNOW@@", formCard.currentOutlook);
    template = template.replace("@@TEMP@@", formCard.tempNow);

    return template;

}


function generateData() {
    var dataTest = {
        place: "TEKY, KY",
        currentOutlook: "Hellfire",
        tempNow: "132",
        photoUrl: "http://l.yimg.com/os/mit/media/m/weather/images/fallbacks/lead/clear_d-1394274.jpg"
    };
    var html = createCard(dataTest);
    $("#deck").append(html);


}






function LatLong_Complete(result) {
    var lat = result.results["0"].geometry.location.lat;
    var lng = result.results["0"].geometry.location.lng;
    var local = lat + "," + lng;

    console.log("The latitude and longitude is " + lat + ", " + lng);

    var darkSkyUrl = "https://api.darksky.net/forecast/18ed8459484711603ec79b3586a698bc/" + lat + "," + lng;
    var request = {
        url: darkSkyUrl,
        dataType: "jsonp",
        success: darksky_Complete
    };
    $.ajax(request);
}


function LatLong(city, state, postCode) {

    var address = "";
    if (postCode.length != 0) {
        address = postCode.trim();
    }
    else if (city.length != 0 && state != 0) {
        address = city.trim() + ", " + state;
    }
    else {
        return; // they didn't give me anything valid, so exit 
    }

    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDkN5p4kquTOqQ_1ZHFdEkZk2MIMbZhFy0";

    var request = {
        url: googleUrl,
        success: LatLong_Complete
    };

    $.ajax(request);
}

function postalCodeWeather_Click() {
    var zipCode = $("#postCode").val();
    LatLong("", "", zipCode);
}
function tellMeWeather() {
    var local = $(lat + "," + lng);
}

$(function () {
    $("#postalCodeWeather").on("click", postalCodeWeather_Click)
})
function darksky_Complete(result) {
    console.log(result.currently.summary);
};

$(document).ready(function () {
});




