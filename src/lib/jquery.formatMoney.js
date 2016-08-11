/**
 * Created by Administrator on 2016/8/11.
 */

/**
 * val:传过来的value
 * n:保留的位数
 */
;(function () {
    function formatMoney(val,n){
        this.val = val;
        this.n=n;
    };

    formatMoney.prototype={

        getValue:function(){
            var number = parseFloat(this.val).toFixed(this.n);
            var sub_dig = number.split(".")[0].split("").reverse();
            var sub_float = number.split(".")[1];
            var _result ="",result="";
            for(var i=0; i<sub_dig.length; i++){
                _result += sub_dig[i] +(((i+1)%3==0 && i+1 != sub_dig.length)?",":"");
            }

            if(this.n == 0){
                result = _result.split("").reverse().join("");
            }else{
                result =_result.split("").reverse().join("") +"."+sub_float;
            }

            return result;
        },

        parseFormatMoney:function(){
            if(this.n != 0){
                this.n = (this.n>0 && this.n<10) ? this.n :2;
            }

            return this.getValue();
        }
    }


    $.formatCurr = function(val,n){

        var _format = new formatMoney(val,n);

        return _format.parseFormatMoney();

    }



})(jQuery)
