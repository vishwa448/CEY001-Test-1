<?php
// Js Plugin files list
define("JS_PLUGINS", [
    "modules/Component",
    "modules/EventManager",
    "modules/ToastManager",
    "modules/NotificationManager",
    "modules/ImageInputManager",
    "modules/AttributeObserver",
]);

//routes
define("ROUTES", [
    [
        "routes" => ["", "home"],
        "fileName" => "home",
        "title" => "asos",
        "js" => [ "home", "main", "package"],
        "css" => ["components", "home"],
        "isCustom" => false
    ],

    [
        "routes" => ["products"],
        "fileName" => "products",
        "title" => "Single products view | Product Page",
        "js" => ["app"],
        "css" => ["products"],
        "isCustom" => false
    ],


    [
        "routes" => ["product-details"],
        "fileName" => "product-details",
        "title" => "Single products view | Product Page",
        "js" => ["product-detail"],
        "css" => ["product-details"],
        "isCustom" => false
    ],



    [
        "routes" => ["about"],
        "fileName" => "about",
        "title" => "SOUL REFRESH HOLIDAY | About Us",
        "js" => ["home"],
        "css" => ["about"],
        "isCustom" => false
    ],


    [
        "routes" => ["tests"],
        "fileName" => "test",
        "title" => "CRISP PAISLEY | Test Page",
        "js" => ["main"],
        "css" => ["test", "home"],
        "isCustom" => false
    ],
]);
