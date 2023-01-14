 //mode:'horizontal', 'vertical', 'fade'
$(document).ready(function() {
    $('.slide').bxSlider({
        mode:"fade",//슬라이드 방향
        auto:"true",//자동 실행됨
        controls:"false",//prev,next버튼 노출여부
        pager:"false",//현재 위치를 알려주는 블릿(아래 똥글이버튼)노출 여부
        easing:"easeInOutElastic",//가속도
        speed:3000//실행시간
    });
});