// 图片网络接口
var imgArray = ["http://p1.so.qhimgs1.com/bdr/326__/t01a9f7f11254e3cffd.jpg", "http://p3.so.qhimgs1.com/bdr/326__/t01f3c2fbbfc190da13.jpg", "http://p4.so.qhmsg.com/sdr/400__/t010b4260151f5bbb69.jpg", "http://p0.so.qhmsg.com/sdr/400__/t01b1cf8bf92ccd7825.jpg", "http://p0.so.qhmsg.com/sdr/400__/t0184c244e241eb10cf.jpg"]
var imgUl = document.getElementById("imgUl");
var pointUl = document.getElementById("pointUl");
createImgsAndPointsUl();
var imgsLi = imgUl.getElementsByTagName("li");
var pointsLi = pointUl.getElementsByTagName("li");
var index = 0;//index表示第几张图片，第几张图片就会有active这个类名

// 点击导航点
for (let i = 0; i < pointsLi.length; i++) {
    pointsLi[i].addEventListener("click", function () {
        index = this.getAttribute("index");
        CheckIndex();
        clenActive();
        addActive();
        time -= stopTime;//停留4s
    })
}

//创建图片、导航点列表
function createImgsAndPointsUl() {
    for (let i = 0; i < imgArray.length; i++) {
        var imgLi = document.createElement("li");
        var img = document.createElement("img");
        var pointsLi = document.createElement("li");
        //初始化active
        if (i == 0) {
            imgLi.className = "img active";
            pointsLi.className = "point active";
        } else {
            imgLi.className = "img";
            pointsLi.className = "point";
        }
        img.src = imgArray[i];
        imgLi.appendChild(img);
        imgUl.appendChild(imgLi);
        pointsLi.setAttribute("index", i);
        pointUl.appendChild(pointsLi);
    }
}

var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
var points = document.getElementsByClassName("point");
var time = 0, stopTime = 4;//鼠标翻页时停留4s
backBtn.addEventListener("click", function () {
    goBack();
    time -= stopTime;//停留4s
});
nextBtn.addEventListener("click", function () {
    goNext();
    time -= stopTime;//停留4s
});

// 前翻页
function goBack() {
    clenActive();
    index--;
    CheckIndex();
    addActive();
}

//后翻页
function goNext() {
    clenActive();
    index++;
    CheckIndex();
    addActive();
}

//清除active
function clenActive() {
    for (let i = 0; i < imgsLi.length; i++) {
        imgsLi[i].className = "img"
        points[i].className = "point";
    }
}

//添加active
function addActive() {
    imgsLi[index].className = "img active";
    points[index].className = "point active";
}

//检查index范围
function CheckIndex() {
    if (index < 0) index = imgsLi.length - 1;
    if (index >= imgsLi.length) index = 0;
}

//定时器,轮播T=2s,
setInterval(() => {
    time++
    if (time == 2) {
        goNext();
        time = 0;
    }
}, 1000);