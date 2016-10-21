
function qsa(ele){
   return document.querySelectorAll(ele)
}
function qs(ele){
    return document.querySelector(ele)
}
var arrAnchors = qsa('.fixedBox.lef a'),
    len = qsa('.fixedBox.lef a').length,
    chosen = qs('.top .main .text').getElementsByTagName('em')[1],
    i = 0,
    currentIndex = 0;
for(;i < len;i++){
    arrAnchors[i].index = i;
    arrAnchors[i].onclick = function(){
        chosen.innerText = this.innerText;
        arrAnchors[currentIndex].classList.remove('current');
        this.classList.add('current');
        currentIndex = this.index
    }
}

/**/
var sideBar = qsa('.firstScreen ul li'),
    item = qsa('.firstScreen .item-sub'),
    hover = qsa('.firstScreen .hover'),
    sideBarLen = sideBar.length,
    j = 0;
for(;j < sideBarLen;j++){
    var icon4 = document.createElement('img');
    icon4.setAttribute('src','./img/icon4.png');
    icon4.className = 'append';
    hover[j].appendChild(icon4);
    hover[j].index = icon4;
    sideBar[j].index = icon4;
    sideBar[j].num = j;
    sideBar[j].onmouseover = function(){
        this.index.parentNode.removeChild(this.index);
        item[this.num].classList.remove('none');
        this.insertAdjacentElement('afterBegin',item[this.num]);
    };
    sideBar[j].onmouseout = function(){
        hover[this.num].appendChild(this.index);
        item[this.num].classList.add('none');
    }
}
/**/
var run = qsa('.firstScreen .sideBar-main img'),
    index = qsa('.firstScreen .sideBar-main .index'),
    indexAll = qs('.firstScreen .sideBar-main .index-all'),
    imgAll = qs('.firstScreen .sideBar-main .img-all'),
    lenRun = run.length,
    article = qs('.firstScreen .sideBar-main .article'),
    oLeft = document.getElementById('oLeft'),
    oRight = document.getElementById('oRight'),
    timer,
    tabRight,
    now = 0;
run[now].classList.add('appear');
index[now].classList.add('index-red');
function tab(){
    for(var k = 0;k < lenRun;k++){
        run[k].classList.remove('appear');
        index[k].classList.remove('index-red');
    }
    run[now].classList.add('appear');
    index[now].classList.add('index-red');
}
/**/
for(var k = 0;k < lenRun;k++){
    index[k].index = k;
    index[k].onmouseenter = function(){
        now = this.index;
        tab();
    }
}
/**/

tabRight = function(){
    now = (now + 1)%lenRun;
    tab();
};
tabLeft = function(){
    now == 0?now = 6: now;
    now = (now -1)%lenRun;
    console.log(now);
    tab();

};
timer = setInterval(tabRight,1000);
oRight.onclick = tabRight;
oLeft.onclick = tabLeft;

imgAll.onmouseenter = function(){
    article.classList.remove('none');
    clearInterval(timer);
};
imgAll.onmouseleave = function(){
    timer = setInterval(tabRight,1000);
    article.classList.add('none');

};
indexAll.onmouseenter = function(){
    article.classList.add('none');
};
indexAll.onmouseleave = function(){
    article.classList.remove('none');
};


