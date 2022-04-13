String.prototype.repeatify = function (num) {
    let repeated = this;
    for (let i = 0; i < num; i++) {
        repeated += this;
    }
    return repeated;
}



