// 第一部分
// 轮播图实现
var scorllImages = document.getElementById("content_scorll_images"); //图片
var scorllWords = document.getElementById("content_scorll_words");//文字
var words = scorllWords.children;

words[0].className = "title_selected";
var  index = 0;

wordsEvent();
setInterval(function(){
    // wordsEvent();
    clearCss();
    scorllImages.style.marginLeft = -820*index + "px";
    words[index].className =  "title_selected";
    index++;
    if (index == 5){
        index = 0;
    }
}, 3000)
function wordsEvent(){
    for (var i = 0; i < words.length; i++){
        words[i].index = i;
        words[i].onmouseover = function(){
            clearCss();
            this.className = "title_selected";
            scorllImages.style.marginLeft = -820*this.index + "px";
            index = this.index;
        }
    }
}
function clearCss(){
    for (var i = 0; i<words.length; i++){
        words[i].className = "";
    }

}

// 新闻区实现
//新闻
var newsTitle = document.getElementById("news_title");
var newsContent = document.getElementById("news_content");
newsContent.children[0].style.display = "block";
newsTitle.children[0].className = "select_news_title";
newsTitle.children[0].onmouseover = function () {
    newsContent.children[0].style.display = "block";
    newsContent.children[1].style.display = "none";
    newsContent.children[2].style.display = "none";
    newsContent.children[3].style.display = "none";
    newsContent.children[4].style.display = "none";
    newsTitle.children[0].className = "select_news_title";
    newsTitle.children[1].className = "";
    newsTitle.children[2].className = "";
    newsTitle.children[3].className = "";
    newsTitle.children[4].className = "";
};
newsTitle.children[1].onmouseover = function () {
    newsContent.children[0].style.display = "none";
    newsContent.children[1].style.display = "block";
    newsContent.children[2].style.display = "none";
    newsContent.children[3].style.display = "none";
    newsContent.children[4].style.display = "none";
    newsTitle.children[1].className = "select_news_title";
    newsTitle.children[0].className = "";
    newsTitle.children[2].className = "";
    newsTitle.children[3].className = "";
    newsTitle.children[4].className = "";
};
newsTitle.children[2].onmouseover = function () {
    newsContent.children[0].style.display = "none";
    newsContent.children[1].style.display = "none";
    newsContent.children[2].style.display = "block";
    newsContent.children[3].style.display = "none";
    newsContent.children[4].style.display = "none";
    newsTitle.children[2].className = "select_news_title";
    newsTitle.children[1].className = "";
    newsTitle.children[0].className = "";
    newsTitle.children[3].className = "";
    newsTitle.children[4].className = "";
};
newsTitle.children[3].onmouseover = function () {
    newsContent.children[0].style.display = "none";
    newsContent.children[1].style.display = "none";
    newsContent.children[2].style.display = "none";
    newsContent.children[3].style.display = "block";
    newsContent.children[4].style.display = "none";
    newsTitle.children[3].className = "select_news_title";
    newsTitle.children[1].className = "";
    newsTitle.children[2].className = "";
    newsTitle.children[0].className = "";
    newsTitle.children[4].className = "";
};
newsTitle.children[4].onmouseover = function () {
    newsContent.children[0].style.display = "none";
    newsContent.children[1].style.display = "none";
    newsContent.children[2].style.display = "none";
    newsContent.children[3].style.display = "none";
    newsContent.children[4].style.display = "block";
    newsTitle.children[4].className = "select_news_title";
    newsTitle.children[1].className = "";
    newsTitle.children[2].className = "";
    newsTitle.children[3].className = "";
    newsTitle.children[0].className = "";
};

// 热门活动实现
var  firstTitle = document.getElementById("first_titles");
var actLast = document.getElementById("act_last");
actLast.children[0].style.display = "block";
firstTitle.children[0].className = "";

firstTitle.children[0].onmouseover = function () {
    actLast.children[0].style.display = "block";
    actLast.children[2].style.display = "none";
    actLast.children[1].style.display = "none";
    firstTitle.children[0].className = "act_title_selected";
    firstTitle.children[1].className = "";
    firstTitle.children[2].className = "";
};
firstTitle.children[1].onmouseover = function () {
    actLast.children[1].style.display = "block";
    actLast.children[2].style.display = "none";
    actLast.children[0].style.display = "none";
    firstTitle.children[1].className = "act_title_selected";
    firstTitle.children[0].className = "";
    firstTitle.children[2].className = "";
};
firstTitle.children[2].onmouseover = function () {
    actLast.children[2].style.display = "block";
    actLast.children[1].style.display = "none";
    actLast.children[0].style.display = "none";
    firstTitle.children[2].className = "act_title_selected";
    firstTitle.children[0].className = "";
    firstTitle.children[1].className = "";
};


// 皮肤视频暂停与播放 与 更多的皮肤弹出
var ns = document.getElementById("new_skin");
var hns =document.getElementById("hover_new_skin")
var hoverV = document.getElementById("hover_video");
var ms = document.getElementById("more_skin");

ns.onmouseover  =  function(){
    ms.style.height = "117px";
    ms.style.marginTop = "22px";
    ms.style.paddingTop = "20px";//解决衔接处的抖动
    hns.style.display = "block";
    hns.style.animation = "scalein 0.5s";
    hoverV.play();
};
ns.onmouseout = function(){
    ms.style.height = "0px";
    ms.style.marginTop = "0px";
    ms.style.paddingTop = "0px";
    hns.style.display = "none";
    hoverV.pause();
};
ms.onmouseover = function(){
    ms.style.height = "117px";
    ms.style.marginTop = "22px";
    ms.style.paddingTop = "20px";
    hns.style.display = "block";
};
ms.onmouseout = function(){
    ms.style.height = "0px";
    ms.style.marginTop = "0px";
    ms.style.paddingTop = "0px";
    hns.style.display = "none";
};

// 下弹周免英雄
var wk = document.getElementById("week_free");
var hwk = document.getElementById("hover_week_free");

wk.onmouseover = function(){
    hwk.style.display = "block"
};
wk.onmouseout = function(){
    hwk.style.display = "none";
};
