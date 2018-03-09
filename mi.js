/**
 * Created by Admin on 2018/1/27.
 */
// window.onload=function () {
// //  banner
//     let div=document.querySelector('.banner');
//     let banner=document.querySelectorAll('ul.img_box li');
//     let left=document.querySelector('.banner_jiantou_left');
//     let right=document.querySelector('.banner_jiantou_right');
//     let circle=document.querySelectorAll('ul.lunbodian li')
//     let n=0;
//     function move() {
//         n++;
//         if(n==banner.length){
//             n=0;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             circle[index].classList.remove('act');
//         })
//         banner[n].className='active';
//         circle[n].classList.add('act');
//     }
//     let time=setInterval(move,2000);
//     div.onmouseover=function () {
//         clearInterval(time);
//     }
//     div.onmouseout=function () {
//         time=setInterval(move,2000);
//     }
//     right.onclick=function () {
//         n++;
//         if(n==banner.length){
//             n=0;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             circle[index].classList.remove('act');
//         })
//         banner[n].className='active';
//         circle[n].classList.add('act');
//     }
//     left.onclick=function () {
//         n--;
//         if(n<0){
//             n=banner.length-1;
//         }
//         banner.forEach(function (value,index) {
//             value.classList.remove('active');
//             circle[index].classList.remove('act');
//         })
//         banner[n].className='active';
//         circle[n].classList.add('act');
//     }
//     circle.forEach(function (value,index) {
//         value.onclick=function () {
//             circle.forEach(function (val,ind) {
//                 val.classList.remove('act');
//                 banner[ind].classList.remove('active');
//             })
//             this.classList.add('act');
//             banner[index].classList.add('active');
//         }
//     })
//
// //banner_card
//     let asideCard=document.querySelector('.aside_card');
//     let asideBox=document.querySelectorAll('.aside_box li');
//     let cardBox=document.querySelectorAll('.card_box');
//     asideCard.onmouseenter=function () {
//         asideBox.forEach(function (value,index) {
//             value.onmouseenter=function () {
//                 cardBox.forEach(function (val,ind) {
//                     val.classList.remove('comein');
//                     asideBox[ind].classList.remove('special_');
//                 })
//                 value.classList.add('special_');
//                 cardBox[index].classList.add('comein');
//             }
//         })
//     }
//     asideCard.onmouseleave=function () {
//         asideBox.forEach(function (value,index) {
//             value.classList.remove('special_');
//             cardBox[index].classList.remove('comein');
//         })
//
//     }
//
// //   change
//     function change(a,b) {
//         let chose=document.querySelectorAll(a);
//         let main=document.querySelectorAll(b);
//         chose.forEach(function (dom,index) {
//             dom.onmouseover=function () {
//                 chose.forEach(function (val,ind) {
//                     val.classList.remove('active_');
//                     main[ind].classList.remove('active_');
//                 })
//                 this.classList.add('active_');
//                 main[index].classList.add('active_');
//             }
//         })
//     }
//     change('.top_right .right_remen','.jiadain .jiadian_bottom .bottom_right');
//     change('.zhineng_right .znright_remen','#zhineng .bottom_right');
//     change('.dapei_right a','#dapei .bottom_right');
//     change('.peijian_right a','#peijian .bottom_right')
//     change('.zhoubian a','#zhoubian .bottom_right')
//

//
//
//
//
// //内容
//     function Star_(b,l,c,le,ri,c_a) {
//         let now=0;
//         let next=0;
//         let box=document.querySelector(b);
//         let lis=document.querySelectorAll(l);
//         let width=parseInt(window.getComputedStyle(box,null).width);
//         let circle=document.querySelectorAll(c)
//         let flag=true;
//         document.querySelector(ri).onclick=function () {
//             next=now+1;
//             if(!flag){
//                 return;
//             }
//             flag=false;
//             if(next>=lis.length){
//                 flag=true;
//                 return;
//             }
//             lis[next].style.left='100%';
//             animate(lis[now],{left:-width});
//             animate(lis[next],{left:0},function () {
//                 flag=true;
//             });
//             circle[now].classList.remove(c_a);
//             circle[next].classList.add(c_a);
//             now=next;
//         }
//         document.querySelector(le).onclick=function () {
//             next=now-1;
//             if(!flag){
//                 return;
//             }
//             flag=false;
//             if(next<0){
//                 flag=true;
//                 return;
//             }
//             lis[next].style.left='-100%';
//             animate(lis[now],{left:width});
//             animate(lis[next],{left:0},function () {
//                 flag=true;
//             });
//             circle[now].classList.remove(c_a);
//             circle[next].classList.add(c_a);
//             now=next;
//         }
//         for(let i=0;i<circle.length;i++){
//             circle[i].onclick=function () {
//                 if(!flag){
//                     return;
//                 }
//                 flag=false;
//                 next=i;
//                 if(next>now){
//                     lis[next].style.left='100%';
//                     animate(lis[now],{left:-width});
//                     animate(lis[next],{left:0},function () {
//                         flag=true;
//                     });
//                     circle[now].classList.remove(c_a);
//                     circle[next].classList.add(c_a);
//                     now=next;
//                 }
//                 else if(next<now){
//                     lis[next].style.left='-100%';
//                     animate(lis[now],{left:width});
//                     animate(lis[next],{left:0},function () {
//                         flag=true;
//                     });
//                     circle[now].classList.remove(c_a);
//                     circle[next].classList.add(c_a);
//                     now=next;
//                 }
//                 else {
//                     flag=true;
//                 }
//             }
//         }
//
//     }
//     Star_('#contain_list_1','#contain_list_1 .list_1','#contain_list_1 .yuandian .yd','#contain_list_1 .neirong_left','#contain_list_1 .neirong_right','yuan');
//     Star_('#contain_list_2','#contain_list_2 .list_2','#contain_list_2 .yuandian .yd','#contain_list_2 .neirong_left','#contain_list_2 .neirong_right','yuan');
//     Star_('#contain_list_3','#contain_list_3 .list_3','#contain_list_3 .yuandian .yd','#contain_list_3 .neirong_left','#contain_list_3 .neirong_right','yuan');
//     Star_('#contain_list_4','#contain_list_4 .list_4','#contain_list_4 .yuandian .yd','#contain_list_4 .neirong_left','#contain_list_4 .neirong_right','yuan');
//
//
// //隐藏
// let nav=document.querySelector('.nav');
// let nav_hidden=document.querySelector('.nav_hidden');
// let come=document.querySelectorAll('.come');
// let hidden_box=document.querySelectorAll('.hidden_list_box');
// nav.onmouseenter=function () {
//     animate(nav_hidden,{height:230},200);
//     nav_hidden.classList.add('nav_style');
//     come.forEach(function (val,index) {
//         val.onmouseenter=function () {
//             hidden_box.forEach(function (value) {
//                 value.classList.remove('comein');
//             })
//             hidden_box[index].classList.add('comein');
//         }
//     })
// }
// nav.onmouseleave=function () {
//     animate(nav_hidden,{height:0},200);
//     nav_hidden.classList.remove('nav_style');
// }
//
// //购物车
//     let shop=document.querySelector('.shoppingcar');
//     let shop_hidden=document.querySelector('.shopping_hidden');
//     shop.onmouseenter=function () {
//         animate(shop_hidden,{height:100},200);
//     }
//     shop.onmouseleave=function () {
//         animate(shop_hidden,{height:0},200);
//     }
// //推荐
//     let now_2=0;
//     let next_2=0;
//     let wntjs=document.querySelectorAll('.tuijian> div.wntj_bottom');
//     let tuijian=document.querySelector('div.tuijian');
//     let width_2=parseInt(getComputedStyle(tuijian,null).width)
//     let left_2=document.querySelector('#jt_left');
//     let right_2=document.querySelector('#jt_right');
//    left_2.onclick=function () {
//        next_2=now_2-1;
//        if(next_2<0){
//            next_2=wntjs.length-1;
//        }
//        wntjs[next_2].style.left='-100%';
//        animate(wntjs[now_2],{left:width_2});
//        animate(wntjs[next_2],{left:0});
//        now_2=next_2;
//     }
//    right_2.onclick=function () {
//         next_2=now_2+1;
//         if(next_2>=wntjs.length){
//             next_2=0;
//         }
//         wntjs[next_2].style.left='100%';
//         animate(wntjs[now_2],{left:-width_2});
//         animate(wntjs[next_2],{left:0});
//         now_2=next_2;
//     }
//
//
//
//
//
//
// }
window.onload=function () {
    function nav() {
        let tt;
        $('.come').mouseenter(function () {
            tt=setTimeout(function () {
                $('.nav_hidden').stop(true).slideDown('slow').addClass('nav_style')
            },500)
            $('.hidden_list_box').eq($(this).index()).show().siblings().hide();
        }).mouseleave(function () {
            clearTimeout(tt)
        });
        $('.no').mouseenter(function () {
            $('.nav_hidden').slideUp('slow').removeClass('nav_style');
        }).mouseleave(null);
        $('.nav').mouseenter(null).mouseleave(function () {
            $('.nav_hidden').slideUp('slow').removeClass('nav_style');
        })
    }
    nav();


    function shopping() {
        let ti;
            $('.shoppingcar>a').mouseenter(function () {
                ti=setTimeout(function () {
                    $('.shopping_hidden').slideDown('slow').children().show();
                },300)
            })
        $('.shoppingcar').mouseleave(function () {
            clearTimeout(ti);
            $('.shopping_hidden').slideUp('slow');
        })
    }
    shopping();

    let i=0;
    let len=$('.img_box li').length;
    function banner() {
        i++;
        if(i>=len){
            i=0;
        }
        $('.img_box li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    }
    $('.banner_jiantou_right').click(function () {
        i++;
        if(i>=len){
            i=0;
        }
        $('.img_box li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    });
    $('.banner_jiantou_left').click(function () {
        i--;
        if(i<0){
            i=len-1;
        }
        $('.img_box li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    });
    let t=setInterval(banner,2000);
    $('.banner').mouseenter(function () {
        clearInterval(t);
    }).mouseleave(function () {
        t=setInterval(banner,2000);
    })
    $('.lunbodian li').click(function () {
        i=$(this).index();
        $('.img_box li').eq(i).addClass('active').siblings().removeClass('active');
        $(this).addClass('act').siblings().removeClass('act');
    })

    $(document).ready(function () {
        $('.aside_box li').mouseenter(function () {
            let index=$(this).index();
            $(this).addClass('special_').siblings('.aside_box li').removeClass('special_');
            $('.card_box').eq(index).show().siblings('.card_box').hide();
        });
        $('.aside_card').mouseleave(function () {
            $('.card_box').hide();
            $('.aside_box li').removeClass('special_');
        })
    })

    function choseCard(a,r) {
        $(a).mouseenter(function () {
            let ind=$(this).index();
            $(this).addClass('active_').siblings(a).removeClass('active_');
            $(r).eq(ind).show().siblings(r).hide();
        })
    }
    choseCard('.right_remen','.bottom_right');
    choseCard('.znright_remen','.zhineng .jiadian_bottom .bottom_right');
    choseCard('.dapei_right a','#dapei .bottom_right');
    choseCard('.peijian_right a','#peijian .bottom_right');
    choseCard('.zhoubian a','#zhoubian .bottom_right');


    function neirong(list,ri,le,d) {
        let now=0;
        let next=0;
        let flag=true;
        let length=$(list).length;
        let width=$(list).width();
        $(ri).click(function () {
            next=now+1;
            if(next>=length){
                flag=true;
                return;
            }
            if(!flag){
                return;
            }
            $(list).eq(now).animate({left:-width},500,function () {
               flag=true;
            })
            $(list).eq(next).animate({left:0},500);
            $(d).eq(next).addClass('yuan').siblings().removeClass('yuan');
            now++;
        })
        $(le).click(function () {
            next=now-1;
            if(next<0){
                flag=true;
                return;
            }
            if(!flag){
                return
            }
            flag=false;
            $(list).eq(now).animate({left:width},500,function () {
               flag=true;
            });
            $(list).eq(next).animate({left:0},500);
            $(d).eq(next).addClass('yuan').siblings().removeClass('yuan');
            now--;
        })
    }
    neirong('.list_1','#contain_list_1 .neirong_right','#contain_list_1 .neirong_left','#contain_list_1 .yuandian .yd');
    neirong('.list_2','#contain_list_2 .neirong_right','#contain_list_2 .neirong_left','#contain_list_2 .yuandian .yd');
    neirong('.list_3','#contain_list_3 .neirong_right','#contain_list_3 .neirong_left','#contain_list_3 .yuandian .yd');
    neirong('.list_4','#contain_list_4 .neirong_right','#contain_list_4 .neirong_left','#contain_list_4 .yuandian .yd');
    neirong('.tuijian .wntj_bottom','#jt_right','#jt_left',null);


    //明星单品
    let now_1=0;
    let next_1=1;
    let main=document.querySelector('.danpin');
    let star=document.querySelectorAll('.danpin_main .danpin_bottom');
    let width_1=parseInt(getComputedStyle(main,null).width);
    let jt=document.querySelectorAll('.jiantou div');
    function Star() {
        if(now_1==0){
            star[next_1].style.left='100%';
            animate(star[now_1],{left:-width_1},1000);
            animate(star[next_1],{left:0},1000);
        }
        if(next_1==0){
            star[next_1].style.left='-100%';
            animate(star[now_1],{left:width_1},1000);
            animate(star[next_1],{left:0},1000);
        }
        let tmp=now_1;
        now_1=next_1;
        next_1=tmp;
        jt.forEach(function (value) {
            value.classList.remove('action');
        })
        jt[now_1].classList.add('action');
    }
    let t1=setInterval(Star,4000);
    main.onmouseenter=function () {
        clearInterval(t1);
    }
    main.onmouseleave=function () {
        t1=setInterval(Star,4000);
    }
    jt.forEach(function (value,index) {
        value.onclick=function () {
            if(index==0){
                next_1=1;
                star[next_1].style.left='100%';
                animate(star[now_1],{left:-width_1},1000);
                animate(star[next_1],{left:0},1000,function () {
                    now_1=1;
                    next_1=0;
                    jt[0].classList.remove('action');
                    jt[1].classList.add('action');
                    return;
                });
            }
            if(index==1){
                next_1=0;
                star[next_1].style.left='-100%';
                animate(star[now_1],{left:width_1},1000);
                animate(star[next_1],{left:0},1000,function () {
                    now_1=0;
                    next_1=1;
                    jt[1].classList.remove('action');
                    jt[0].classList.add('action');
                    return;
                });
            }
        }
    })
//     let nowStar=0;
//     let nextStar=1;
//     let widStar=$('.danpin_main').width();
//     function star() {
//         if(nowStar==0){
//             $('.danpin_bottom').eq(nowStar).animate({left:-widStar},1000);
//             $('.danpin_bottom').eq(nextStar).animate({left:0},1000);
//             $('.jiantou_right').addClass('aa').siblings().removeClass('aa');
//         }
//         if(nowStar==1){
//             $('.danpin_bottom').eq(nowStar).animate({left:widStar},1000);
//             $('.danpin_bottom').eq(nextStar).animate({left:0},1000);
//             $('.jiantou_left').addClass('aa').siblings().removeClass('aa');
//         }
//         let tmp=nowStar;
//         nowStar=nextStar;
//         nextStar=tmp;
//     }
//     $('.action').click(function () {
//         if (nowStar == 0) {
//             $('.danpin_bottom').eq(nowStar).animate({left: -widStar}, 1000);
//             $('.danpin_bottom').eq(nextStar).animate({left: 0}, 1000);
//             $('.jiantou_right').addClass('aa').siblings().removeClass('aa');
//             console.log(1);
//         }
//         if (nowStar==1) {
//             $('.danpin_bottom').eq(nowStar).animate({left: widStar}, 1000);
//             $('.danpin_bottom').eq(nextStar).animate({left: 0}, 1000);
//             $('.jiantou_left').addClass('aa').siblings().removeClass('aa');
//             console.log(2);
//         }
//     })
//     let time=setInterval(star,4000);
//     $('.danpin_main').mouseenter(function () {
//         clearInterval(time);
//     }).mouseleave(function () {
//         time=setInterval(star,4000);
//     })
}


