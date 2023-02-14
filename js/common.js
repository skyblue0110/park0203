// 개발자도구창의 toggle디바이스툴바 사용하지않았을 때 
// 테스트 상황(윈도우 넓이 조절)에서 생기는 오류를 해결하기 위한 코드
var deviceSize = 1024
function scrollox(status){
    $('html').css({
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
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if(ww<=deviceSize && !$('html').hasClass('mobile') ){
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    } 
}
$(window).on('resize', function(){
    init()
})

$(window).on('load', function(){

    let count = 0;
    let timer = setInterval(add, 25)

    function add() {
        count++
        if (count>=100) {
            clearInterval(timer)
            $('.introAni').animate({
                left:'-100%'
            }, 500, function(){
                $(this).hide()
            })
        }
        $('.introAni div').eq(1).text(count+'%')
    }


    $('html').animate({
        scrollTop:0
    }, 100)

    let imgh = ($('.slide .img').height() / 2) - 35
    $('.article1 .slick-arrow').css({
        top:'0%',
        transform:`translateY(${imgh}px)`,
    })
})



var ww = $(window).width()
if (ww>deviceSize) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}



$('#header .open').click(function(){
    $('#header').addClass('on')
})
$('#header .close').click(function(){
    $('#header').removeClass('on')
})

$('#header #nav .depth1 > li > a').on('click', function(){
    if ( $('html').hasClass('mobile') && $(this).next().is('.depth2') ) {
        $(this).next().stop().slideToggle()
        return false
    }
})


$('#header #nav .depth1 > li').on('mouseover', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideDown()
    }
})
$('#header #nav .depth1 > li').on('mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideUp()
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