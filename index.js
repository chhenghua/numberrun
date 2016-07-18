/**
 * Created by stonehage on 2016/7/18 0018.
 */

/*global window, require, define */
(function(_window) {
    'use strict';

    function errMsg(msg){
        return msg;
    }

    function checkNum(numArr){
        if(/^\d+\.?\d+$/.test(numArr.join()) === true){
            return true;
        } else {
            return "";
        }
    }

    function numberFormat(number){
        if(/\.\d{3,}^/.test(number.toString()) === true){
            var letter = number.toString().split(".")[1][2];
            if(letter >= 5){
                return parseInt((number + 0.01) * 100) / 100;
            } else {
                return parseInt(number * 100) / 100;
            }
        }
        return number;
    }

    //数字相加, 这里传入的是数字数组
    function numAdd(numArr){
        numArr = numArr || [];
        if(typeof(numArr) === 'string' || numArr.length === 0){
            return errMsg("The params must bu a number array.");
        }
        var checkRlt = checkNum(numArr);
        if(checkRlt != true){
            return errMsg(checkRlt);
        }

        var sum = 0.00;
        for(var i = 0; i < numArr.length; i ++){
            sum += numArr[i];
        }

        return numberFormat(sum);

    }

    //两个数相减
    function numMinus(num1, num2){
        if(typeof(num1) === 'string' || typeof(num2) === 'string'){
            return errMsg("The two numbers must be numbers.")
        }

        return numberFormat(num1 - num2);
    }

    //数字相乘
    function numMulti(numArr){
        numArr = numArr || [];
        if(typeof(numArr) === 'string' || numArr.length === 0){
            return errMsg("The params must bu a number array.");
        }
        var checkRlt = checkNum(numArr);
        if(checkRlt != true){
            return errMsg(checkRlt);
        }

        var product = 1.00;
        for(var i = 0; i < numArr.length; i ++){
            product = product * numArr[i];
        }
        return numberFormat(product);
    }

    //除法
    function numDivide(num1, num2){
        if(typeof(num1) === 'string' || typeof(num2) === 'string'){
            return errMsg("The two numbers must be numbers.")
        }

        if(num2 === 0){
            return errMsg("The divide number must not be zero.");
        }
        return numberFormat( num1 / num2);
    }

    var nf = {};
    nf.numAdd = numAdd;
    nf.numMinus = numMinus;
    nf.numMulti = numMulti;
    nf.numDivide = numDivide;

    if (('undefined' !== typeof module) && module.exports) {
        // Publish as node.js module
        module.exports = nf;
    } else if (typeof define === 'function' && define.amd) {
        // Publish as AMD module
        define(function() {return nf;});


    } else {
        _window.nf = nf;
    }
})('undefined' !== typeof window ? window : null);
