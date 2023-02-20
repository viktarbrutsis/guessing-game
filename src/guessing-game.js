class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.number = 0;
    }
    //бинарный поиск - определить середину и посмотреть где guess число
    guess() {
        this.number = Math.round((this.min + this.max) / 2);
        return this.number;
    }
    //загаданное число меньше, чем середина
    //тогда середина становитсямакс
    lower() {
        this.max = this.number;
        this.guess();
    }
    //загаданное число больше, чем середина
    //тогда середина становится мин
    greater() {
        this.min = this.number;
        this.guess();
    }
}

module.exports = GuessingGame;
