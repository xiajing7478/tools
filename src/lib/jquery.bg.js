/**
 * Created by Administrator on 2016/8/9.
 */

;
//$(function () {
//
//    $.fn.bgColor = function () {
//        $("a").css({"color":"red"});
//    }
//
//});

(function () {
    //$.fn.bgColor = function () {
    //    this.css({"color":"red"});
    //    return $.each(this, function () {
    //        $(this).append(''+ $(this).attr("href"));
    //    })
    //}


    $.fn.bgColor = function (options) {

        var defaults={
            'color':'red',
            'font-size':'16px'
        };

        var setting = $.extend([],defaults,options);

        return this.css({
           'color':setting.color,
           'font-size':setting.fontSize,
           'text-decoration':setting.decoration
        });

    }

})(jQuery);



