$(document).ready(function () {
    $("div#foot").load("./public/foot.html", function (response, status, xhr) {
        $("div#foot").html(response);
    });
});