// 导航列表弹出
var headNavSub = document.getElementById("head_nav_sub");
var nSub=  document.getElementById("n_sub");
var  headNav = document.getElementById("head_nav");
headNav.onmouseover = function () {
    headNavSub.style.display = "block";
};
headNav.onmouseout = function () {
    headNavSub.style.display = "block";
};
nSub.onmouseover = function () {
    headNavSub.style.display = "block";
};
nSub.onmouseout = function () {
    headNavSub.style.display = "none";
};

// 玩家信息弹出
var headUser = document.getElementById("head_user");
var userInfo = document.getElementById("user_info_sub");
headUser.onmouseover = function () {
    userInfo.style.display = "block";
};
headUser.onmouseout = function () {
    userInfo.style.display = "none";
    // userInfo.style.transition = "3s,ease-in-out";
};

// 掌上英雄联盟图标弹出
var headApp = document.getElementById("head_app");
var headAppSub = document.getElementById("head_app_sub");
headApp.onmouseover = function () {
    headAppSub.style.display = "block";
};
headApp.onmouseout = function () {
    headAppSub.style.display = "none";
};

// 搜索图标点击
var search = document.getElementById("search");
var searchSub = document.getElementById("search_sub");
var btnCloseSearch = document.getElementById("btn_close_search");
search.onclick =function () {
    searchSub.style.display = "block";
};
btnCloseSearch.onclick = function () {
    searchSub.style.display = "none";
};


// 开屏特效
var bigImage = document.getElementById("big_image");
var smallImage = document.getElementById("small_image");
var banner = document.getElementById("banner");
banner.style.height = "720px";
//监视滚动事件
$(window).scroll(function(){
    var before = $(window).scrollTop();
    $(window).scroll(function() {
        var after = $(window).scrollTop();
        if (before<after) {
            bigImage.style.display = "none";
            smallImage.style.display = "block";
            banner.style.height = "360px";
        }
    });
});


