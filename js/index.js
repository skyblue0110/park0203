// $('.article1').slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true,
//     arrows:true,
//     pauseOnFocus:false,    // 화살표나 도트버튼 클릭시 자동실행 정지안함
//     prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>' ,
//     nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>'
// })

$('.article1 .plpa i').on('click', function(){
    if ( $(this).hasClass('fa-pause') ) {
        $('.article1 .slide_group').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.article1 .slide_group').slick('slickPlay')
        $(this).removeClass('fa-pause').addClass('fa-pause')
    }
})


