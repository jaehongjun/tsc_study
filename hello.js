var Hello = /** @class */ (function () {
    function Hello() {
        this.str = "프리이베이트";
        this.str2 = "퍼블릭";
    }
    Hello.prototype.test1 = function () {
        console.log("123");
        this.str = "test"; // Hello
    };
    // private number 
    Hello.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Hello.prototype.test2 = function () {
        var num1 = 3;
        var num2 = 5;
        var numArr = [1, 2, 3];
        var numArr2 = [1, 2, 3];
        var tp;
        tp = ["1", 2];
        var anyType;
        anyType = "3";
        anyType = 1;
        anyType = new Number(2);
        anyType = true;
        console.log.apply(console, tp);
        console.log(num1 + num2);
        console.log("hello hello");
        this.test1();
        this.str2 = "214234";
    };
    return Hello;
}());
var h = new Hello();
h.test2();
console.log(h.str2);
h.str2 = "tdfsggfsdg";
//# sourceMappingURL=hello.js.map