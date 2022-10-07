
function getCSS()
{
        datetoday = new Date();
        timenow=datetoday.getTime();
        datetoday.setTime(timenow);
        thehour = datetoday.getHours();
        if (thehour<7)
            display = "down/assets/css/night.css";
        else if (thehour<19)
            display = "down/assets/css/day.css";
        else
            display = "down/assets/css/night.css";
        
        var css = '<';
        css+='link rel="stylesheet" href='+display+' \/';
        css+='>';
        document.write(css);
}

//鍙抽敭鑿滃崟
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("杩欐槸绉樺瘑閫氶亾:<br /><a href=\"http://www.qijishow.com/Brand/Brand5/index.htm\" style='color:#0099cc;' title=\"鍏紬鍙穃">鍏紬鍙�</a>    <a href=\"http://www.qijishow.com/\" style='color:#0099cc;' title=\"棣栭〉\">棣栭〉</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});
//榧犳爣鍦ㄦ秷鎭笂鏃�
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});
//榧犳爣鍦ㄤ笂鏂规椂
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["鏀惰棌濂囪抗绉€锛屾垜灏辫窡浣犵帺~", "绉€瀹濆彲杩滆涓嶅彲浜电帺锛�", "鎴戦兘闅愯韩鍟︼紝浣犺繕鎽革紒", "鍒姩鎵嬪姩鑴氱殑锛屾妸鎵嬫嬁寮€锛侊紒", "鍐嶄笉鎶婃墜鎷垮紑灏忓績鎴戞í绔栫珫浣狅紒锛�", "鑰佸ぇ锛屼粬鎽告垜锛屽憸鍛滃憸鍛渵~~", "浣犳妸鎵嬫嬁寮€鎴戝氨璺熶綘鐜╋紒", "浣犲叧娉ㄣ€屽杩圭銆嶅叕浼楀彿浜嗗悧锛熶笉瑕佹懜鎴戝暒锛�"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});
//寮€濮�
jQuery(document).ready(function ($) {
    if (isindex) { //濡傛灉鏄富椤�
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 浣犳槸澶滅尗瀛愬憖锛熻繕涓嶇潯瑙夛紝鏄庡ぉ璧风殑鏉ヤ箞浣狅紵', 20000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 鏃╀笂濂斤紝鏃╄捣鐨勯笩鍎挎湁铏悆鍣紒鏃╄捣鐨勮櫕鍎胯楦熷悆锛屼綘鏄笩鍎胯繕鏄櫕鍎匡紵鍢诲樆锛�', 20000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 涓崍浜嗭紝鍚冮キ浜嗕箞锛熶笉瑕侀タ鐫€浜嗭紝楗挎浜嗚皝鏉ョ湅鎴戝憖锛�', 20000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 涓嬪崍鐨勬椂鍏夌湡闅剧啲锛佽繕濂芥湁浣犲湪锛�', 20000);
        } else if (now > 18 && now <= 23) {
            showMessage(visitor + ' 澶滄櫄鐨勬垜锛岃瀹夐潤鐨勫涔犲暒锛�', 20000);
        } else {
            showMessage(visitor + ' 蹇潵閫楁垜鐜╁惂锛佹垜濂芥棤鑱婂晩~~', 20000);
        }
    }
    else {
        showMessage('娆㈣繋' + visitor + '鏉ュ埌濂囪抗绉€銆�' + title + '銆�', 10000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 190
    },
    {
        queue: false,
        duration: 1000
    });
//    window.setTimeout(function () {
//        showMessage("涓嬮潰鎾姤鏄庢棩澶╂皵<iframe name=\"xidie\" src=\"http://m.weather.com.cn/m/pn1/weather.htm\"frameborder=\鈥�0\鈥� scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});
//榧犳爣鍦ㄦ煇浜涘厓绱犱笂鏂规椂
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//鏍囬琚偣鍑绘椂
        showMessage('姝ｅ湪鐢ㄥ悆濂剁殑鍔插姞杞姐€�<span style="color:#0099cc;">' + $(this).text() + '</span>銆嬭绋嶅€�');
    });
    $('a').mouseover(function () {
        showMessage('鎯崇湅鐪嬨€�<span style="color:#0099cc;">' + $(this).text() + '</span>銆嬮噷闈㈡槸鍟ヤ箞锛�');
    });
    $('.tool-imgs').mouseover(function () {
        showMessage('濡傛灉鍠滄鍙互銆�<span style="color:#0099cc;">涓嬭浇</span>銆嬫參鎱㈢爺绌剁殑鍝︼紒');
    });
    $('#coontainer').mouseover(function () {
        showMessage('鎯冲幓銆�<span style="color:#0099cc;">濂囪抗璐�</span>銆嬮噷闈㈤€涢€涗箞锛�');
    });
    $('.about_logo').mouseover(function () {
        showMessage('瑕佸幓銆�<span style="color:#0099cc;">鎻愮瑪</span>銆嬮噷闈㈢湅鐪嬫枃绔犱箞锛�');
    });    
    $('#slider-wrapper').mouseover(function () {
        showMessage('瑕佸幓閲岄潰鐪嬬湅涔堬紵');
    });   
    $('.detail-download a').mouseover(function(){
        showMessage('浣犲ソ鑱槑鍝燂綖锛岃繖閮借兘琚綘鎵惧埌锛�');
    });
    $('#btneds').mouseover(function(){
        showMessage('鐐硅繖閲屽紑濮嬩笅杞�');
    });
    $('.float_lefts a').mouseover(function () {
        showMessage('瑕佸幓 <span style="color:#0099cc;">'+ 濂囪抗璐� + '</span> 閲岄潰閫涢€涘悧锛�');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 鍚戣瘎璁烘爮鍑哄彂鍚э紒');
    });
    $('#SOHUCS #SOHU_MAIN .module-cmt-box .post-wrap-w .wrap-action-w .action-issue-w .issue-btn-w a button.btn-fw').mouseover(function () {
        showMessage('纭鎻愪氦浜嗕箞锛�');
    });
    $('#s').mouseover(function () {
        showMessage('杈撳叆浣犳兂鎼滅储鐨勫叧閿瘝鍐嶆寜Enter(鍥炶溅)閿氨鍙互鎼滅储鍟�!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('鐐瑰畠鍙互鍚庨€€鍝︼紒');
    });
    $('#go-next').mouseover(function () {
        showMessage('鐐瑰畠鍙互鍓嶈繘鍝︼紒');
    });
    $('#refresh').mouseover(function () {
        showMessage('鐐瑰畠鍙互閲嶆柊杞藉叆姝ら〉鍝︼紒');
    });
    $('#logoqj a').mouseover(function () {
        showMessage('鍙湁浣犵煡閬擄紝鏇村绮惧僵鍦ㄩ椤碉綖锛�');
    });
    $('#xinlang').mouseover(function () {
        showMessage('鐐瑰畠鍙互缁欐垜銆�<span style="color:#0099cc;">鐣欒█</span>銆嬪摝锛�');
    });
    $('#ss-dropdown a').mouseover(function () {
        showMessage('鍢橈紝杩欓噷鍙互鐣欎笅浣犵殑蹇冩効鍝︼紒');
    });
    $('.donate-btn a').mouseover(function () {
        showMessage('鍝庡摕锝烇紒<br> 浣犳槸瑕併€� 鎵撹祻 銆嬫垜鍚楋紵鎴戠殑涓箹涔杶');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('鐐瑰畠鍙互鐩存帴璺冲埌璇勮鍒楄〃澶�.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('浣犵煡閬撳悧?鐐瑰畠鍙互鍒嗕韩鏈枃鍒�'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('鐐瑰嚮鍙互鍒囨崲鍒版墜鏈虹増鍗氬鐗堥潰');
    });
});
//鏃犺亰璁茬偣浠€涔�
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["闄垜鑱婂ぉ鍚э紒","濂芥棤鑱婂摝锛屼綘閮戒笉闄垜鐜╋紒", "鈥鈥︹€�!鈥︹€︹€�", "^%#&*!@*(&#)(!)(", "鎴戝彲鐖卞惂锛佸樆鍢�!~^_^!~~","璋佹帆鑽″憖?~璋佹帆鑽�?锛屼綘娣崱鍛€!~~浣犳帆鑽★紒~~","浠庡墠鏈夊骇灞憋紝灞变笂鏈夊骇搴欙紝搴欓噷鏈変釜鑰佸拰灏氱粰灏忓拰灏氳鏁呬簨锛岃锛氣€滀粠鍓嶆湁搴р€︹€︹€�"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});
//鏃犺亰鍔ㄥ姩
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["蹇揩鏀惰棌鎴戠殑鍗氬鍚э紒", "涔惧潳澶ф尓绉伙紒", "鎴戦杩囨潵浜嗭紒~", "鎴戦杩囧幓浜�", "鎴戝緱鎰忓湴椋橈紒~椋橈紒~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});
//璇勮璧勬枡
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("鐣欎笅浣犵殑灏婂澶у悕锛�");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function () {
        showMessage("鐣欎笅浣犵殑閭锛屼笉鐒跺氨鏄棤澶村儚浜哄＋浜嗭紒");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function () {
        showMessage("蹇揩鍛婅瘔鎴戜綘鐨勫鍦ㄥ摢閲岋紝濂借鎴戝幓鍙傝鍙傝锛�");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#SOHUCS").click(function () {
        showMessage("璇疯鐪熷～鍐欙紒鎴戜細灏藉揩鍥炲浣犵殑鍝燂綖");
        $(".spig").animate({
            top: $("#SOHUCS").offset().top - 70,
            left: $("#SOHUCS").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $(".donate-btn a").mouseover(function () {
        showMessage('鍝庡摕锝烇紒<br> 浣犳槸瑕併€�<span style="color:#0099cc;">鎵撹祻</span>銆嬫垜鍚楋紵鎴戠殑涓箹涔杶');
        $(".spig").animate({
            top: $(".donate-btn a").offset().top - 70,
            left: $(".donate-btn a").offset().left + 180
        },
        {
            queue: false,
            duration: 1000
        });
    }); 
    $(".detail-download a").mouseover(function () {
        showMessage("浣犲ソ鑱槑鍝燂綖锛岃繖閮借兘琚綘鎵惧埌锛�");
        $(".spig").animate({
            top: $(".detail-download a").offset().top + 100,
            left: $(".detail-download a").offset().left + 260
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#ss-dropdown a").mouseover(function () {
        showMessage("鍢橈紝杩欓噷鍙互鐣欎笅浣犵殑蹇冩効鍝︼紒");
        $(".spig").animate({
            top: $("#ss-dropdown a").offset().top - 70,
            left: $("#ss-dropdown a").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#logoqj a").mouseover(function () {
        showMessage("鍙湁浣犵煡閬擄紝鏇村绮惧僵鍦ㄩ椤碉綖锛�");
        $(".spig").animate({
            top: $("#logoqj a").offset().top + 50,
            left: $("#logoqj a").offset().left - 280
        },
        {
            queue: false,
            duration: 1000
        });
    });  
    $("#xinlang").mouseover(function () {
        showMessage('鐐瑰畠鍙互缁欐垜<br> 銆�<span style="color:#0099cc;">鐣欒█</span>銆嬪摝锛�');
        $(".spig").animate({
            top: $("#xinlang").offset().top + 50,
            left: $("#xinlang").offset().left + 90
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $(".about_logo").mouseover(function () {
        showMessage('瑕佸幓銆�<span style="color:#0099cc;">鎻愮瑪</span>銆嬮噷闈㈢湅鐪嬫枃绔犱箞锛�');
        $(".spig").animate({
            top: $(".about_logo").offset().top - 70,
            left: $(".about_logo").offset().left + 120
        },
        {
            queue: false,
            duration: 1000
        });
    });                    
});
var spig_top = 50;
//婊氬姩鏉＄Щ鍔�
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});
//榧犳爣鐐瑰嚮鏃�
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["浣犳湁瀹屾病瀹屽憖锛�", "浣犲凡缁忔懜鎴�" + stat_click + "娆′簡", "闈炵ぜ鍛€锛佹晳鍛斤紒OH锛孧y ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["绛嬫枟浜戯紒~鎴戦锛�", "鎴戣窇鍛€璺戝憖璺戯紒~~", "鍒懜鎴戯紝鎴戣鍏殑锛屾湁浠€涔堝ソ鎽哥殑锛�", "鎯逛笉璧蜂綘锛屾垜杩樿翰涓嶈捣浣犱箞锛�", "涓嶈鎽告垜浜嗭紝鎴戜細鍛婅瘔鑰佸﹩鏉ユ墦浣犵殑锛�", "骞插槢鍔ㄦ垜鍛€锛佸皬蹇冩垜鍜綘锛�"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});
//鏄剧ず娑堟伅鍑芥暟 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};
//鎷栧姩
var _move = false;
var ismove = false; //绉诲姩鏍囪
var _x, _y; //榧犳爣绂绘帶浠跺乏涓婅鐨勭浉瀵逛綅缃�
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //鎺т欢鏂颁綅缃�
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});

function loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
    //for IE
    //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
var dsq=null;
//鍘婚櫎鐣呰█骞垮憡
    dsq=setInterval('if(document.getElementById("feedAv")){document.getElementById("feedAv").id="feedAvi";window.clearInterval(dsq);}',1000);
    loadCssCode('#feedAvi{position: absolute !important;z-index: -9999;top: -1000px;}');