/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-291.js
 * @description Object.create - one property in 'Properties' is the global object that uses Object's [[Get]] method to access the 'set' property (8.10.5 step 8.a)
 */


function testcase() {
        var data = "data";

        try {
            fnGlobalObject().set = function (value) {
                data = value;
            };

            var newObj = Object.create({}, {
                prop: fnGlobalObject()
            });

            var hasProperty = newObj.hasOwnProperty("prop");

            newObj.prop = "overrideData";

            return hasProperty && data === "overrideData";
        } finally {
            delete fnGlobalObject().set;
        }
    }
runTestCase(testcase);
