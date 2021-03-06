/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-1-6.js
 * @description Array.prototype.every applied to Number object
 */


function testcase() {
        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return obj instanceof Number;
        }

        var obj = new Number(-128);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;
        return Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
