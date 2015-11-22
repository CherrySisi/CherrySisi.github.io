$(document).ready(function () {
    console.log("loading...");
    //添加链接
    $(".ul-index-nav-bar a").attr('href', 'product_class.html')
    $(".shopClass_show a").attr('href', 'product_class.html')

    $("#shop_cart").click(function () {
        //.attr('href', 'shop_cart.html')
        window.location.href = "shop_cart.html";
    });
    $(".shop_item .shop_img").click(function () {
        //.attr('href', 'shop_cart.html')
        window.location.href = "product_detail.html";
    });
    $(".shopItem_sm").click(function () {
        //.attr('href', 'shop_cart.html')
        window.location.href = "product_detail.html";
    });

    //注册界面跳转到登陆界面

    $(".reg_btn").click(function(){
        window.location.href="login.html";
    });

    //登陆界面跳转到首页
    $(".login_btn").click(function(){
        window.location.href="index.html";
    });


    //商品详情中加入购物车，跳转
     //登陆界面跳转到首页
    $(".shop_buy .shopping_btn").click(function(){

        window.location.href="shop_cart.html";
    });

    $(".shop_buy .buy_btn").click(function(){

        window.location.href="shop_cart.html";
    });


    //商品筛选页面中直接加入购物车
    
    $(".item_cont .img_item").click(function(){

        window.location.href="product_detail.html";
    });

    $(".item_cont p a").click(function(){

        window.location.href="product_detail.html";
    });

    $(".item_cont .addCar").click(function(){

        window.location.href="shop_cart.html";
    });

//navCont_list
    
    $(".navCont_list a").click(function(){

        window.location.href="product_filter.html";
    });


    //(商品详情界面中队商品颜色进行选择)设置颜色
    $("#item_color_select div").click(function () {
        console.log("click ..." + this);

        function clearColorSelect() {
            var links = $("#item_color_select div");
            for (var i = 0, j = links.length; i < j; i++) {
                console.log("clear..." + i);
                var item = links[i];
                //item.style.
                $(item).removeClass("des_item_active");
            }
        }

        clearColorSelect();
        $(this).addClass("des_item_active");
    });

    //设置版本
    $("#item_version_select div").click(function () {
        console.log("click ..." + this);

        function clearVersionSelect() {
            var links = $("#item_version_select div");
            for (var i = 0, j = links.length; i < j; i++) {
                console.log("clear..." + i);
                var item = links[i];
                $(item).removeClass("des_item_active");
            }
        }

        clearVersionSelect();

        $(this).addClass("des_item_active");

        //this.addClass("des_item_active");

    });


});