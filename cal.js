var Cal = /** @class */ (function () {
    function Cal(num1, num2) {
        this.num1 = 0;
        this.num2 = 1;
        this.num1 = num1;
        this.num2 = num2;
    }
    Cal.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Cal.prototype.minus = function () {
        return this.num1 - this.num2;
    };
    Cal.prototype.multiple = function () {
        return this.num1 * this.num2;
    };
    Cal.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    Cal.prototype.getCalResult = function (op) {
        if (op == "+") {
            return this.add();
        }
        if (op == "-") {
            return this.minus();
        }
        if (op == "*") {
            return this.multiple();
        }
        if (op == "/") {
            return this.divide();
        }
        return 0;
    };
    Cal.prototype.printResult = function (op) {
        console.log(this.num1, op, this.num2, "=", this.getCalResult(op));
    };
    return Cal;
}());
var c = new Cal(1, 2);
c.printResult("+");
console.log(c.getCalResult("+"));
console.log(c.getCalResult("-"));
console.log(c.getCalResult("*"));
console.log(c.getCalResult("/"));
//# sourceMappingURL=cal.js.map