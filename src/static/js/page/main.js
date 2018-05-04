//写效果
require(["jquery", "../commom/template", "../commom/banner"], function($, template, banner) {
    $.ajax({
        url: "/api/get_home_data",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log(data);
            template("#boxs-tpl", {
                data: data
            }, '.boxs');
        }
    })

})