require(["jquery"], function($) {
    $('.beizhen').hide()
    $('.jiaju').hide()
    $('.top span').on('click', function() {
        var index = $(this).index()
        console.log(index)
        $(this).addClass('bj').siblings().removeClass('bj')
    })
    $('.top span').eq(1).on('click', function() {
        $('.beizhen').show()
        $('.boxs').hide()
        $('.jiaju').hide()
    })
    $('.top span').eq(0).on('click', function() {
        $('.beizhen').hide()
        $('.boxs').show()
        $('.jiaju').hide()
    })
    $('.top span').eq(2).on('click', function() {
        $('.beizhen').hide()
        $('.boxs').hide()
        $('.jiaju').show()
    })
    $('.top span').eq(3).on('click', function() {
        $('.beizhen').show()
        $('.boxs').hide()
        $('.jiaju').hide()
    })
    $('.top span').eq(4).on('click', function() {
        $('.beizhen').hide()
        $('.boxs').hide()
        $('.jiaju').show()
    })
})