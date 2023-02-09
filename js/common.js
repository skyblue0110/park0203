// 개발자도구창의 toggle디바이스툴바 사용하지않았을 때 
// 테스트 상황(윈도우 넓이 조절)에서 생기는 오류를 해결하기 위한 코드
var deviceSize = 1024
function scrollox(status){
    4('html').css({
        overflowY:status
    })
    return $('html').width()
}
var scX = scrollox('hidden')
var scO = scrollox('scroll')
var scD = scX - scO
if (scD>0) {
    deviceSize = deviceSize - scD
}
function init(){
    let ww = $(window).width()
    if (ww>deviceSize) {
        $('html').addClass('pc').removeClass('mobile')
    } else {
        $('html').addClass('mobile').removeClass('pc')
    } 
}
init()
$(window).on('resize', function(){
    init()
})



var ww = $(window).width()
if (ww>1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('#header .open').on('click', function(){
    $(this).next().stop().slideToggle()
})

$('#nav .depth1 > li').on('mouseover mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideToggle()
    }
})

$('#nav .depth1 > li > button').on('click', function(){
    if ( $('html').hasClass('mobile') ) {
        if ( $(this).find('i').hasClass('fa-chevron-down') ) {
            $(this).next().stop().slideDown()
            $(this).find('i').removeClass('fa-chevron-down')
            .addClass('fa-chevron-up')
        } else {
            $(this).next().stop().slideUp()
            $(this).find('i').removeClass('fa-chevron-up')
            .addClass('fa-chevron-down')
        }
        return false
    }
})


// $('#header #nav .depth1 > li').on('mouseover', function(){
//     if ( $('html').hasClass('pc') ) {
//         $(this).find('.depth2').stop().slideDown()
//     }
// })
// $('#header #nav .depth1 > li').on('mouseout', function(){
//     if ( $('html').hasClass('pc') ) {
//         $(this).find('.depth2').stop().slidUp()
//     }
// })




// $('#header .open').on('click', function(){
//     $(this).parents('#header').addClass('on')
// })

// $('#header .close').on('click', function(){
//     $(this).parents('#header').removeClass('on')
// })

// $('#header #nav .depth1 > li > a').on('click', function(){
//     if ( $('html').hasClass('mobile') && $(this).next().is('.depth2') ) {
//         $(this).next().stop().slideToggle()
//         return false
//     }
// })