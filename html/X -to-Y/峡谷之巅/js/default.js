// 右侧导航和主导航栏
$(window).scroll(
    function(){
        if ($(window).scrollTop()> 924){
            $(".right_nav").css("right","20px");
            $(".page_nav").css({"position":"fixed","top":"0"});
        }
        else{
            $(".right_nav").css("right", "-240px");
            $(".page_nav").css({"position":"absolute","top":"811px"});
        }
    }
);

function playVideo() {
    $(".video_pop").css("display","block");
    $(".close_video").css("display","block");
    $("#video").get(0).play();
}
function closeVideo(){
    $(".video_pop").css("display","none");
    $(".close_video").css("display","none");
    $("#video").get(0).pause();
}