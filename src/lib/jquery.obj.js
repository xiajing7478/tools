
 

/**
 * ��Ҫ��дһ�����ӵĲ������������ܴ������֯����ͳ���һ����Ҫ���ٵ����⣬û��һ���õķ�ʽ����֯��Щ���룬
 * ����о����������£�ͬʱҲ����ά�������Խ���������з������԰�װ��һ�������ϣ�
 * ����������˼ά�����п��������ɻ�ʹ�������ɺܶࡣ
 *
 *
 * ΪʲôҪ����������˼ά����Ϊ������������������Ҫһ��������ʱ���ȥ����һ��function������Ҫ����һ��������ʱ��
 * ��ȥ��㶨��һ��function��ͬ������Ҫһ��������ʱ�򣬺��޹���ض���һЩɢ���ڴ�������ı�����
 */


;(function () {

    //����Beautifier�Ĺ��캯��
    function Beautifier(elements, opts) {
        this.ele = elements;
        this.defaults = {
            'color': 'red',
            'fontSize': '16px',
            'textDecoration':'none'
        };
        this.options = $.extend([],this.defaults,opts);
    }

    //����Beautifier�ķ���
    Beautifier.prototype={
        beautify: function () {
            return this.ele.css({
                'color':this.options.color,
                'font-size':this.options.fontSize,
                'text-decoration':this.options.decoration
            });
        }
    }

    //�ڲ����ʹ��Beautifier����
    $.fn.bgColor = function (options) {
        //����Beautifierʵ��
        var beautifier = new Beautifier(this,options);
        //�����䷽��
        return beautifier.beautify();
    }


})(jQuery)