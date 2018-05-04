//引文件
require.config({
    baseUrl: "../static/js/lib",
    paths: {
        "jquery": "jquery-1.8.3.min",
        "hand": "handlebars-v4.0.11",
        "waterfall": "waterfall",
        "swiper": "swiper-3.4.2.min",
        "require": "require",
        "jq": "../page/jq"
    },
    shim: {
        'waterfall': {
            deps: ['jquery'],
            exports: 'jQuery.fn.waterfall'
        }
    }
})

{
    /* <script src="../static/js/lib/jquery-1.8.3.min.js"></script>
        <script src="../static/js/lib/swiper-3.4.2.min.js"></script>
        <script src="../static/js/page/config.js"></script>
        <script src="../static/js/page/main.js"></script> */
}