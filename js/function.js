$(function(){
 
    const $gnbMenu = $('.mainGnb > .gnb > li');
    const $subMenu = $gnbMenu.children('.lnbBG');
    let idx = null;
    $('.gnb-bg').height($(window).height());
    $gnbMenu.hover(
        //mouseenter 했을 때
        function(){
            idx = $gnbMenu.index(this);
            $subMenu.eq(idx).show();
            $('.gnb-bg').show();

            $(this).addClass('on').children('a').css({
                color:'black'
            },400)
            if($(this).hasClass('on')){
                $(this).addClass('on').siblings().children('a').css({
                    color:'grey'
                })
            }
        }
        ,
        //mouseleave 했을 때
        function(){
            idx = $gnbMenu.index(this);
            $subMenu.eq(idx).hide();
            $('.gnb-bg').hide();
            $(this).removeClass('on');
            $(this).parent().find('a').css({
                color:'black'
            })
        }
    );
    
    // $(window).on('scroll',function(){
    //     let scroll= $(document).scrollTop();
    //     if(scroll>200){
    //         $('.gnb').css({
    //             position: 'fixed',
    //             top:0,
    //             left: '50%',
    //             height:70,
    //             width:'100%',
    //             marginLeft: -800,
    //             backgroundColor: '#fff',
    //             zIndex: 1000,
    //             borderBottom: '1px solid #000'
    //         })
    //         $gnbMenu.css({
    //             margin :0
    //         })
    //         $('.lnbBG').css({
    //             top :60
    //         })
    //     }else if(scroll<200){
    //         $('.gnb').css({
    //             position: 'absolute',
    //             top: 170
    //             // left: '50%',
    //             // height:70,
    //             // width:'100%',
    //             // marginLeft: -800,
    //             // backgroundColor: '#fff',
    //             // zIndex: 1000,
    //             // borderBottom: '1px solid #000'
    //         })
    //     }
    // })

    //검색창
    const $search = $('.search>p>a');
    const $searchSlide = $('.search > div');

    $search.on('click',function(evt){
        evt.preventDefault();

        if( $('.search>p').hasClass('off')){
            $searchSlide.slideUp(400);
            $('.search>p').removeClass('off');
        }else{
            $searchSlide.slideDown(400);
            $('.search>p').addClass('off')
        }
    });
    $('.search button').on('click',function(){
        $(this).css({
            backgroundColor:'rgb(168,153,110)'
        })
    });

    //팝업
    $('.rsvs > .rsvsRM > a').on('click',function(evt){
        evt.preventDefault();
        $('.rsvs').slideUp();
    });

    //visual
    const $visual = $('.CJmmca > p');
    const VIfadeFn = ()=>{
        $visual.eq(idx).fadeIn(2000).siblings().fadeOut(2000);
    }
    $(document).ready(function(){
        interval = setInterval(()=>{
            if(idx< $visual.length-1){
                idx++;
            }else{
                idx=0;
            }
            VIfadeFn();
        },3000)
    })



    // 전시 메뉴
    const $exhnav = $('.EXH > .exhnav > li');
    $(document).ready(function(){

    });
    $exhnav.on('click',function(evt){
        evt.preventDefault();
        idx = $exhnav.index(this);

        $exhnav.eq(idx).addClass('on').siblings().removeClass('on');
        $exhnav.eq(idx).children('.exhlist_1').css({left:-500});

        
        if($(this).hasClass('on')){
            
            $(this).addClass('on').children('a').css({
                color:'black'
            },400)
            $(this).addClass('on').siblings().children('a').css({
                color:'grey'
            })
            $(this).children('.exhlist_1').show();
            $(this).siblings().children('.exhlist_1').hide();
        }
        // $exhnav.eq(idx).find('exhlist_1').show();
        // $exhnav.hasClass('on').siblings().children('.exhlist_1').hide();
    })

    // 전시 이전,다음 클릭이벤트
    let nowidx=0;
    $('.EXH > .prev > a').on('click',function(evt){
        evt.preventDefault();
        $('.exhlist_1').stop().animate({
            left: -500
        })
        console.log(nowidx);
    });

    $('.EXH > .next > a').on('click',function(evt){
        evt.preventDefault();
        
        idx++;
        if(idx<=2){
            $('.exhlist_1').stop().animate({
                left:-500+(-440*idx)
            })
        }else{
            $('.exhlist_1').stop().animate({
                left:-1515
            })
        }
    });

    //소장품 클릭이벤트
    $('.COLT > .next > a').on('click',function(evt){
        evt.preventDefault();

        $('.COLTslide').stop().animate({
            left:-120
        })
    })
    $('.COLT > .prev > a').on('click',function(evt){
        evt.preventDefault();

        $('.COLTslide').stop().animate({
            left:0
        })
    })

    //뉴스레터 클릭이벤트
    $('.newsletter > .next > a').on('click',function(evt){
        evt.preventDefault();

        $('.newsletter >.nlslide> ul').stop().animate({
            left:-120
        })
    })
    $('.newsletter > .prev > a').on('click',function(evt){
        evt.preventDefault();

        $('.newsletter >.nlslide> ul').stop().animate({
            left:0
        })
    })

    //스크롤탑 
    $('.sidebar > .scrolltop  >a').on('click',function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop:0
        },1000)
    })

    
}); 