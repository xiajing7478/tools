
 

/**
 * 若要编写一个复杂的插件，代码量会很大，如何组织代码就成了一个需要面临的问题，没有一个好的方式来组织这些代码，
 * 整体感觉会杂乱无章，同时也不好维护，所以将插件的所有方法属性包装到一个对象上，
 * 用面向对象的思维来进行开发，无疑会使工作轻松很多。
 *
 *
 * 为什么要有面向对象的思维，因为如果不这样，你可能需要一个方法的时候就去定义一个function，当需要另外一个方法的时候，
 * 再去随便定义一个function，同样，需要一个变量的时候，毫无规则地定义一些散落在代码各处的变量。
 */


;(function () {

    //定义Beautifier的构造函数
    function Beautifier(elements, opts) {
        this.ele = elements;
        this.defaults = {
            'color': 'red',
            'fontSize': '16px',
            'textDecoration':'none'
        };
        this.options = $.extend([],this.defaults,opts);
    }

    //定义Beautifier的方法
    Beautifier.prototype={
        beautify: function () {
            return this.ele.css({
                'color':this.options.color,
                'font-size':this.options.fontSize,
                'text-decoration':this.options.decoration
            });
        }
    }

    //在插件中使用Beautifier对象
    $.fn.bgColor = function (options) {
        //创建Beautifier实体
        var beautifier = new Beautifier(this,options);
        //调用其方法
        return beautifier.beautify();
    }


})(jQuery)