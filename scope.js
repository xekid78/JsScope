(function() {
    'use strict'

    function sum(x, y) {
        var a = 5;
        console.log("変数ａは" + a + "です。");
        return x + y;;
    }

    var a = 10;
    var b = 20;
    var gokei = sum(a, b);
    console.log("変数ａは" + a + "です。");
    console.log("変数bは" + b + "です。");
    console.log("合計は" + gokei + "です。");

})();
