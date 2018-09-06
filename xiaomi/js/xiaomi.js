/*
let car =document.querySelector('.head_car')
car.onmouseenter=function(){
    this.querySelector('#head_car-box').style.display='block';
}
car.onmouseleave=function(){
    this.querySelector('#head_car-box').style.display='none';
}


let banner =document.querySelectorAll('.banner-li')
for (let  i = 0; i <banner.length; i++) {
    banner[i].onmouseenter=function(){
        this.querySelector('#banner-nav').style.display='block';
    }
    banner[i].onmouseleave=function(){
        this.querySelector('#banner-nav').style.display='none';
    }
}*/
    //购物车
    let car=document.getElementsByClassName("head_car")[0]
    let carbox=document.getElementsByClassName("head_car-box")[0]
    car.onmouseenter=function () {
        carbox.style.height="98px";
        carbox.style.boxShadow="0 3px 1px 1px rgba(0,0,0,0.4)";
    }
    car.onmouseleave=function () {
        carbox.style.height=0;
        carbox.style.boxShadow="none";
    }



    //侧导航
    let banner=document.getElementById("banner");
    let lis=banner.getElementsByTagName("li");
    let bannerNav=document.getElementsByClassName("bannerNav");
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            bannerNav[i].style.display="block";
            lis[i].className="banner-li banner_nav-li";
        }
        lis[i].onmouseleave=function () {
            bannerNav[i].style.display="none";
            lis[i].className="banner-li";
        }
    }




    //家电
    function f(name) {
        let span=name.getElementsByTagName("span")
        let jiadianhe=name.getElementsByClassName("jiadianhe")
        for(let i=0;i<span.length;i++){
            span[i].onmouseenter=function () {
                for(let j=0;j<span.length;j++){
                    jiadianhe[j].style.display="none";
                    span[j].className=("none");
                }
                jiadianhe[i].style.display="block";
                span[i].className=("jiadiann-span")
            }
        }
    }
    let jiadian=document.getElementById("jiadian");
    let dapei=document.getElementById("dapei");
    let peijian=document.getElementById("peijian");
    let zhoubian=document.getElementById("zhoubian");
    f(jiadian);
    f(dapei);
    f(peijian);
    f(zhoubian);


    //banner图上
    let nav=document.getElementById("nav");
    let spann=nav.getElementsByClassName("nav_wenzi-span")
    let navHover=nav.getElementsByClassName("nav-hover")
    for(let i=0;i<spann.length-2;i++){
        for(let j=0;j<spann.length-2;j++){
            // navHover[j].style.display="none";
            navHover[j].style.height="0";
        }
        spann[i].onmouseenter=function () {
            // navHover[i].style.display="block";
            navHover[i].style.height="228px";
            nav.style.borderBottom= "1px solid #e0e0e0";
        }
        spann[i].onmouseleave=function () {
            // navHover[i].style.display="none";
            navHover[i].style.height="0";
            nav.style.borderBottom= "1px solid #fff";
        }
    }

    let bannerImg=document.getElementsByClassName("banner_img")[0]
    let ol=bannerImg.getElementsByTagName("img");
    let left=banner.getElementsByClassName("banner_lbtn")[0];
    let right=banner.getElementsByClassName("banner_rbtn")[0];
    let bannerDian=banner.getElementsByClassName("banner_dian")[0]
    let bannerol=bannerDian.getElementsByTagName("ol")
    //控制下标
    let num=0;
    //随着瞬间移动/变化
    let mi=setInterval(move,1000)

    banner.onmouseenter=function () {
        clearInterval(mi)
    }
    banner.onmouseleave=function () {
        mi=setInterval(move,1000);
    }
    //箭头点击效果
    left.onclick=function () {
        move1();
    }
    right.onclick=function () {
        move();
    }
    //顺序移动
    function move() {
        num++;
        if(num==ol.length){
            num=0;
        }
        for(let i=0;i<ol.length;i++){
            ol[i].style.zIndex="5";
            bannerol[i].className=("banner_xiaodian")
        }
        ol[num].style.zIndex="10";
        bannerol[num].className=("banner_xiaodian banner_1")
    }
    //倒着移动
    function move1() {
        num--;
        if(num<0){
            num=ol.length-1;
        }
        for(let i=0;i<ol.length;i++){
            ol[i].style.zIndex="5";
            bannerol[i].className=("banner_xiaodian")
        }
        ol[num].style.zIndex="10";
        bannerol[num].className=("banner_xiaodian banner_1")
    }

    //小点
    for(let i=0;i<bannerol.length;i++){
        bannerol[i].onclick=function () {
            for(let j=0;j<bannerol.length;j++){
                ol[j].style.zIndex="5";
                bannerol[j].className="banner_xiaodian"
            }
            ol[i].style.zIndex="10";
            bannerol[i].className="banner_xiaodian banner_1"
            num=i;
        }

    }





/*
let nlis=document.querySelectorAll(".nei_xiao li")
let ndian=document.querySelectorAll(" .nei_xiaodian")
let ljian=document.querySelector(".nei_xiao1 .nei_jianl")
let rjian=document.querySelector(".nei_xiao1 .nei_jianr")
*/





function ban(nei) {
    let nlis=nei.getElementsByTagName("li")
    let ndian=nei.getElementsByClassName("nei_xiaodian")
    let ljian=nei.getElementsByClassName("nei_jianl")[0]
    let rjian=nei.getElementsByClassName("nei_jianr")[0]
let nwidths=parseInt(getComputedStyle(nlis[0],null).width)
    // let nwidths=296;
    let now=0;
    let next=0;
    let set=setInterval(move3,3000)

    let flag=true;

    nei.onmouseenter=function(){
        clearInterval(set)
    }
    nei.onmouseleave=function(){
        set=setInterval(move3,3000)
    }

    ljian.onclick=function(){
        if(flag==false){
            return;
        }
        if(next==0){
            return;
        }
        move4();
        flag=false;
    }
    rjian.onclick=function(){
        if(flag==false){
            return;
        }

        if(next==nlis.length-1){
            return
        }
        move3();
        flag=false;
    }








    for(let i=0;i<ndian.length;i++){
        ndian[i].onclick=function () {
            // for(let j=0;j<ndian.length;j++){
            //     ndian[j].classList.remove("nei_da")
            // }
            ndian[now].classList.remove("nei_da")
            ndian[i].classList.add("nei_da")
            if(i==now){
                return;
            }
            if(now<i){
                nlis[i].style.left=nwidths+"px"
                animate(nlis[now],{left:-nwidths})
                animate(nlis[i],{left:0})
            }
            if(now>i){
                nlis[i].style.left=-nwidths+"px"
                animate(nlis[now],{left:nwidths})
                animate(nlis[i],{left:0})
            }
            next=now=i;
        }
    }





    function move3() {
        next++;
        // for(let i=0;i<ndian.length;i++){
        //     ndian[i].classList.remove("nei_da")
        // }
        if(next==nlis.length){
            next=0
        }
        ndian[now].classList.remove("nei_da")
        ndian[next].classList.add("nei_da")
        nlis[next].style.left=nwidths+"px"
        animate(nlis[now],{left:-nwidths});
        animate(nlis[next],{left:0},function () {
            flag=true;
        });
        now = next
    }
    function move4() {
        next--;
        // for(let i=0;i<ndian.length;i++){
        //     ndian[i].classList.remove("nei_da")
        // }
        if(next<0){
            next=nlis.length-1;
        }
        ndian[now].classList.remove("nei_da")
        ndian[next].classList.add("nei_da")
        nlis[next].style.left=-nwidths+"px"
        animate(nlis[now],{left:nwidths});
        animate(nlis[next],{left:0},function () {
            flag=true;
        });
        now = next
    }

}
let nei1=document.getElementsByClassName("nei_xiao1")[0]
ban(nei1)
let nei2=document.getElementsByClassName("nei_xiao2")[0]
ban(nei2)
let nei3=document.getElementsByClassName("nei_xiao3")[0]
ban(nei3)
let nei4=document.getElementsByClassName("nei_xiao4")[0]
ban(nei4)




function star(star1,num) {
    // let starL=document.querySelector(".shan .star_long")
    // let btnl=document.querySelector(".shan .star_btn1")
    // let btnr=document.querySelector(".shan .star_btn2")
    let starL=star1.getElementsByClassName("star_long")[0]
    let btnl=star1.getElementsByClassName("star_btn1")[0]
    let btnr=star1.getElementsByClassName("star_btn2")[0]
    let swidth=parseInt(getComputedStyle(starL,null).width)/num
    let times=0;
    let timess=num-1
    console.log(btnl);
    console.log(btnr);
    console.log(starL);
    console.log(swidth);

    btnl.onclick=function () {
        times --;
        if(times<=0){
            times=0
            btnl.classList.remove("star_1")
            btnr.classList.add("star_1")
        }
        if(times>0&&times<timess){
            btnr.classList.add("star_1")
        }
        starL.style.transform=`translateX(${-swidth*times}px)`;
    }
    btnr.onclick=function () {
        times++;
        if(times>=timess){
            times=timess
            btnr.classList.remove("star_1")
            btnl.classList.add("star_1")
        }
        if(times>0&&times<timess){
            btnl.classList.add("star_1")
        }

        starL.style.transform=`translateX(${-swidth*times}px)`;
    }
}
let shan=document.getElementsByClassName("shan")[0]
star(shan,2)
let star1=document.getElementsByClassName("star")[0]
star(star1,2)
let tuijian=document.getElementsByClassName("tuijian")[0]
star(tuijian,4)



move();
setInterval(move,1000)
function move() {
    let newtime = new Date()
    let liss = document.querySelectorAll(".star_dao li")
    let sa = newtime.getFullYear();
    let sb = newtime.getDate()
    let sc = newtime.getMonth()
    if (newtime.getHours() >= 18) {
        sb += 1;
    }
    let nexttime = new Date(sa, sc, sb, 18)
    let cha = Math.floor(nexttime.getTime() / 1000) - Math.floor(newtime.getTime() / 1000)
    let newh = 0;
    let newf = 0;
    let newm = 0;
    let a = [];
    hour = Math.floor(cha / (60 * 60))
    fen = Math.floor(cha % (60 * 60) / 60)
    miao = Math.floor(cha % 60)
    if (Math.floor(hour / 10) == 0) {
        newh = "0" + hour;
    } else {
        newh = hour
    }
    a.push(newh)
    if (Math.floor(fen / 10) == 0) {
        newf = "0" + fen;
    } else {
        newf = fen
    }
    a.push(newf)

    if (Math.floor(miao / 10) == 0) {
        newm = "0" + miao;
    } else {
        newm = miao
    }
    a.push(newm)
    for (let i = 0; i < liss.length; i++) {
        liss[i].innerText = a[i]
    }
}