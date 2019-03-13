var Quarter = /** @class */ (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImgUrl = function () {
        return "img/quarter.png";
    };
    return Quarter;
}());
/// <reference path="coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoinQ = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var tC = document.getElementById("total");
            tC.innerHTML = _this.paid.toString();
        };
    }
    return VendingMachine;
}());
/// <reference path="vending.ts" />
var machine = new VendingMachine();
//# sourceMappingURL=index.js.map