$(function() {
    $(".header").after('<div id="m-nav" class="m-nav"><div class="m-wrap"></div><div id="m-btn" class="m-btn"><i class="fa fa-remove"></i></div>');
    $(".sub-menu").before('<em class="dot"><i class="fa fa-angle-down"></i></em>');
    $(".container .nav").clone(false).appendTo(".m-wrap");
    $(".m-btn").click(function() {
        $("#m-nav").toggleClass("m-open").siblings("#m-nav").removeClass("m-open");
        $("#mask").slideToggle(0).siblings("#mask").slideToggle(0);
        $("body").toggleClass("open").siblings("body").removeClass("open");
    });
    $(".dot").click(function(G) {
        f($(this), ".ul-subcates");
        G.stopPropagation();
    });
    function f(f, G) {
        f.next().slideToggle();
        f.parent().siblings().find(".fa").removeClass("open");
        f.parent().siblings().find(G).slideUp();
        var b = f.find(".fa");
        if (b.hasClass("open")) {
            b.removeClass("open");
        } else {
            b.addClass("open");
        }
    }
    $(".nav-bar li").hover(function() {
        $(this).addClass("on");
    }, function() {
        $(this).removeClass("on");
    });
    $(".s-btn").on("click", function() {
        var f = $(this);
        if (f.hasClass("off")) {
            f.removeClass("fa-search off").addClass("fa-remove no");
            $(".s-form").slideToggle(200);
        } else {
            f.removeClass("fa-remove no").addClass("fa-search off");
            $(".s-form").slideToggle(100);
        }
    });
    $("#mask").click(function() {
        $(this).hide();
        $(".search-bg").hide();
        $("#m-nav").removeClass("m-open");
        $("body").removeClass("open");
    });
});

jQuery(document).ready(function(f) {
    var G = f("#nav-box").attr("data-type");
    f(".nav>li").each(function() {
        try {
            var b = f(this).attr("id");
            if ("index" == G) {
                if (b == "nvabar-item-index") {
                    f("#nvabar-item-index").addClass("active");
                }
            } else if ("category" == G) {
                var T = f("#nav-box").attr("data-infoid");
                if (T != null) {
                    var fO = T.split(" ");
                    for (var d = 0; d < fO.length; d++) {
                        if (b == "navbar-category-" + fO[d]) {
                            f("#navbar-category-" + fO[d] + "").addClass("active");
                        }
                    }
                }
            } else if ("article" == G) {
                var T = f("#nav-box").attr("data-infoid");
                if (T != null) {
                    var fO = T.split(" ");
                    for (var d = 0; d < fO.length; d++) {
                        if (b == "navbar-category-" + fO[d]) {
                            f("#navbar-category-" + fO[d] + "").addClass("active");
                        }
                    }
                }
            } else if ("page" == G) {
                var T = f("#nav-box").attr("data-infoid");
                if (T != null) {
                    if (b == "navbar-page-" + T) {
                        f("#navbar-page-" + T + "").addClass("active");
                    }
                }
            } else if ("tag" == G) {
                var T = f("#nav-box").attr("data-infoid");
                if (T != null) {
                    if (b == "navbar-tag-" + T) {
                        f("#navbar-tag-" + T + "").addClass("active");
                    }
                }
            }
        } catch (f) {}
    });
    f("#nav-box").delegate("a", "click", function() {
        f(".nav>li").each(function() {
            f(this).removeClass("active");
        });
        if (f(this).closest("ul") != null && f(this).closest("ul").length != 0) {
            if (f(this).closest("ul").attr("id") == "munavber") {
                f(this).addClass("active");
            } else {
                f(this).closest("ul").closest("li").addClass("active");
            }
        }
    });
});

$(function() {
    $(window).scroll(function() {
        var f = $(window).scrollTop();
        if (f > 1) {
            $("#backtop").fadeIn().css({
                bottom:"170px"
            });
            $("#quick_submit").fadeIn().css({
                bottom:"220px"
            });
        } else {
            $("#backtop").fadeOut();
            $("#quick_submit").fadeOut();
        }
    });
    $("#backtop").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 300);
        $(this).animate({
            bottom:"1500px"
        }, 500);
    });
});

$(function() {

   $.ajax({url:"https://v1.hitokoto.cn/?encode=text",success:function(result){
        $(".typing").html(result);
    }
  });
  
  
  $.ajax({url:"https://data.alexa.com/data?cli=10&url=https://www.dandanzan.com",dataType: "jsonp",success:function(result){
        alert("123");
    }
  });
  
});


