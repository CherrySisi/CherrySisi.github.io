$(document).ready(function () {
    $(".del").click(function () {
        var num = parseInt($(this).siblings("input").val());
        if (num == 1) {
        }
        else {
            num--;
            $(this).siblings("input").val(num);
            $(this).siblings("input").change();
        }
        totle();
    });
    $(".add").click(function () {
        var num = parseInt($(this).siblings("input").val());    
            num++;
            $(this).siblings("input").val(num);
            $(this).siblings("input").change();
            totle();
    });
    $(".form-control").change(function () {
        var price = parseInt($(this).val()) * parseFloat($(this).parents("td.goods-num").siblings("td.price").children("em").text());
        $(this).parents("td.goods-num").siblings("td.totle-price").children("em").text(price.toFixed(2));
    });
    function totle() {
        var price = 0;
        $("#table tr").each(function () {
            price += parseFloat(($(this).find("em.em-totle-price").text()));          
        });
        $("#totle-price").text(price.toFixed(2));
    }
    totle();
});