/// <reference path="coin.ts" />

class VendingMachine{
    private paid = 0;
    acceptCoinQ = (coin: Quarter): void => {
        this.paid = this.paid + coin.Value;
        var tC = document.getElementById("total");
        tC.innerHTML = this.paid.toString();
    }
}