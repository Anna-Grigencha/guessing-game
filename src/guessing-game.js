class GuessingGame {
    constructor() {}

    setRange(min, max) {
this.min = min;
this.max = max;
    }

    guess() {
        return this.middle = Math.floor((this.min + 1 + this.max)/2);

    }

    lower() {
        this.max = this.middle;
        this.guess();

    }

    greater() {
        this.min = this.middle;
        this.guess();

    }
}

module.exports = GuessingGame;
