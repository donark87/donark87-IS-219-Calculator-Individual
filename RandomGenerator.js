
class RandomGenerator  {

    constructor (min, max) {
        this.max = max;
        this.min = min;
    }


    GetRandomInt(min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    GetRandomIntWithSeed(min, max, seed) {
        Math.seed = seed;

        Math.seed = (Math.seed * 9301 + 49297) % 233280;
        var rnd = Math.seed / 233280.0;

        return this.min + rnd * (this.max - this.min);
    }
}
module.exports = RandomGenerator;