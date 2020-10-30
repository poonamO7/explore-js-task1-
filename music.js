$(document).ready(function(){
    $("#playBtn").click(function() {
        var newUrl = $("#inputUrl").val();
        $("#videoFrame").attr("src", newUrl);
    });
});
