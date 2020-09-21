var player = document.getElementById("player");//摄像机
// 小摄像机替换
player.onmouseover = function(){
    player.className = "cartoon-camera2";
}
player.onmouseout = function(){
    player.className = "cartoon-camera1";
}

var PG = document.getElementById("position-gold");//通过定位容器触发依旧纯在边缘抖动
var PM = document.getElementById("position-mouse");
var PP = document.getElementById("position-phone");
var PT = document.getElementById("position-triangle");
// var PH = document.getElementById("position-handle");

var PH = document.getElementById("position-handle");//解决抖动;//没有解决

var HG = document.getElementById("hover-gold");
var HM = document.getElementById("hover-mouse");
var HT = document.getElementById("hover-triangle");
var HP = document.getElementById("hover-phone");
var HH = document.getElementById("hover-handle");

var CG = document.getElementById("cartoon-gold");
var CM = document.getElementById("cartoon-mouse");
var CP = document.getElementById("cartoon-phone");
var CT = document.getElementById("cartoon-triangle");
var CH = document.getElementById("cartoon-handle");

var PH = document.getElementById("position-handle");//解决抖动;//没有解决

var HG = document.getElementById("hover-gold");
var HM = document.getElementById("hover-mouse");
var HT = document.getElementById("hover-triangle");
var HP = document.getElementById("hover-phone");
var HH = document.getElementById("hover-handle");

PG.onmouseover = function(){
    HG.style.display = "block";
    CG.className = "cartoon-gold move";
    CM.style.animationPlayState = "paused";
    CP.style.animationPlayState = "paused";
    CT.style.animationPlayState = "paused";
    CH.style.animationPlayState = "paused";

};
PG.onmouseout = function(){
    HG.style.display = "none";
    CG.className = "cartoon-gold am-gold";
    CM.style.animationPlayState = "running";
    CP.style.animationPlayState = "running";
    CT.style.animationPlayState = "running";
    CH.style.animationPlayState = "running";
};

PM.onmouseover = function(){
    HM.style.display = "block";
    CG.style.animationPlayState = "paused";
    CM.className = "cartoon-mouse move";
    CP.style.animationPlayState = "paused";
    CT.style.animationPlayState = "paused";
    CH.style.animationPlayState = "paused";

};
PM.onmouseout = function(){
    HM.style.display = "none";
    CG.style.animationPlayState = "running";
    CM.className = "cartoon-mouse am-mouse";
    CP.style.animationPlayState = "running";
    CT.style.animationPlayState = "running";
    CH.style.animationPlayState = "running";
};

PP.onmouseover = function(){
    HP.style.display = "block";
    CG.style.animationPlayState = "paused";
    CM.style.animationPlayState = "paused";
    CP.className = "cartoon-phone move";
    CT.style.animationPlayState = "paused";
    CH.style.animationPlayState = "paused";

};
PP.onmouseout = function(){
    HP.style.display = "none";
    CG.style.animationPlayState = "running";
    CM.style.animationPlayState = "running";
    CP.className = "cartoon-phone am-phone";
    CT.style.animationPlayState = "running";
    CH.style.animationPlayState = "running";
};

PT.onmouseover = function(){
    // alert("dfasfaf");
    HT.style.display = "block";
    CG.style.animationPlayState = "paused";
    CM.style.animationPlayState = "paused";
    CP.style.animationPlayState = "paused";
    CT.className = "cartoon-triangle move";
    CH.style.animationPlayState = "paused";

};
PT.onmouseout = function(){
    HT.style.display = "none";
    CG.style.animationPlayState = "running";
    CM.style.animationPlayState = "running";
    CP.style.animationPlayState = "running";
    CT.className = "cartoon-triangle am-triangle";
    CH.style.animationPlayState = "running";
};

PH.onmouseover = function(){
    HH.style.display = "block";
    CG.style.animationPlayState = "paused";
    CM.style.animationPlayState = "paused";
    CP.style.animationPlayState = "paused";
    CT.style.animationPlayState = "paused";
    CH.className = "cartoon-handle move";

};
PH.onmouseout = function(){
    HH.style.display = "none";
    CG.style.animationPlayState = "running";
    CM.style.animationPlayState = "running";
    CP.style.animationPlayState = "running";
    CT.style.animationPlayState = "running";
    CH.className = "cartoon-handle am-handle";
};


// 导航
var nl1 = document.getElementById("nav-li1");
var ul2 = document.getElementById("nav-ul2");

nl1.onmouseover = function(){
    ul2.style.display = "block";
};
nl1.onmouseout = function(){
    ul2.style.display = "none";
};

//点击视频
var pv = document.getElementById("position-video");
var v = document.getElementById("video")
function play(){
    pv.style.display = "block";
    // cv.style.transform = "scale(1)";
    v.play();
}
function closev(){
    pv.style.display = "none";
    // cv.style.transform = "scale(0)";
    v.pause();
}

// 开屏动画
var OV = document.getElementById("open-video");
if(window.name == ""){
    // alert("aaaa");
    window.name = "isReload";
    OV.style.display = "block";

}else if(window.name == "isReload"){//模仿页面刷新也会有效
    // alert("refreash");
    OV.style.display = "block";
}
function openEvent(){
    OV.style.opacity = "1";
    var cnt = 1;
    var CT = setInterval(function(){
        cnt -= 0.02;
        OV.style.opacity = cnt;
        if(cnt < 0){//等于0无法起作用
            // alert("ddddd");
            clearInterval(CT);
            OV.style.opacity = "none";
            OV.style.display = "none";
        }
    },40);
}
