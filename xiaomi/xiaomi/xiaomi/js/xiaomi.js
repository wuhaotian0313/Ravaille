let lis=document.querySelectorAll(".banner_img img")
let banner=document.getElementById("banner")
let dian=document.querySelectorAll(".banner_dian .banner_xiaodian")
let ljian=document.querySelector(".banner_lbtn")
let rjian=document.querySelector(".banner_rbtn")
let now=0;
let flax=true;
let widths=parseInt(getComputedStyle(lis[0],null).width);
let time=setInterval(move,1000)
let next=0;
banner.onmouseenter=function(){
    clearInterval(time)
}
banner.onmouseleave=function(){
    time=setInterval(move,1000)
}

ljian.onclick=function () {
    if(flax==false){
        return
    }
    move1()
    flax=false;
}
rjian.onclick=function () {
    if(flax==false){
        return
    }
    move()
    flax=false;
}



for(let i=0;i<dian.length;i++){
    dian[i].onclick=function () {
        for(let j=0;j<dian.length;j++){
            dian[j].classList.remove("banner_1")
        }
        dian[i].classList.add("banner_1")
        if(now == i){
            return;
        }
        if(now<i){
            lis[i].style.left=widths+"px"
            animate(lis[now],{left:-widths})
            animate(lis[i],{left:0})
        }
        if(now>i){
            lis[i].style.left=-widths+"px"
            animate(lis[now],{left:widths})
            animate(lis[i],{left:0})
        }
        next=now=i;
    }
}

//顺序
function move() {
    next++;
    for(let i=0;i<lis.length;i++){
        dian[i].classList.remove("banner_1")
    }

    if(next==lis.length){
        next=0;
    }
    dian[next].classList.add("banner_1")
    lis[next].style.left=widths+"px";
    animate(lis[now],{left:-widths},)
    animate(lis[next],{left:0},function () {
        flax=true;
    })
    now = next;
}


//倒序
function move1() {
    next--;
    for(let i=0;i<lis.length;i++){
        dian[i].classList.remove("banner_1")
    }
    if(next<0){
        next=lis.length-1;
    }
    dian[next].classList.add("banner_1")
    lis[next].style.left=-widths+"px";
    animate(lis[now],{left:widths},)
    animate(lis[next],{left:0},function () {
        flax=true;
    })
    now = next
}