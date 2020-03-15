const Calculator = require('./Calculator');
class Statistics extends Calculator {


    Variance(a,b) {
        return this.Difference(a,b);
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }
    Median(numbers) {

        var median = 0, numsLen = numbers.length;
        numbers.sort();
        if (numsLen % 2 === 0 ) {
            // average of two middle numbers
            median = (((numbers[numsLen / 2 - 1]) + (numbers[numsLen / 2])) / 2);
        } else { // is odd
            // middle number only
            median = numbers[((numsLen - 1) / 2)];
        }
        return median;
    }
    Mode(numbers) {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }
    StandardDeviation (values) {
        let meanValue = this.Mean(values);
        return Math.sqrt(values.reduce(function (sq, n) {
            return sq + Math.pow(n - meanValue, 2);
        }, 0) / (values.length - 1));
    }
    Quantile (arr, q) {
        const sorted = arr;
        const pos = (sorted.length - 1) * q;
        const base = Math.floor(pos);
        const rest = pos - base;
        if (sorted[base + 1] !== undefined) {
            return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
        } else {
            return sorted[base];
        }
    }
    Correlation (arr1, arr2, n){
        let sum_X = 0;
        let sum_Y = 0;
        let sum_XY = 0;
        let squareSum_X = 0;
        let squareSum_Y = 0;

        for (let i = 0; i < n; i++ ) {
            sum_X  = sum_X + arr1[i];
            sum_Y  = sum_Y + arr2[i];

            sum_XY = sum_XY + arr1[i] * arr2[i];

            squareSum_X = squareSum_X + arr1[i] * arr1[i];
            squareSum_Y = squareSum_Y + arr2[i] * arr2[i];

            let  corr = parseFloat((n * sum_XY - sum_X * sum_Y)/
                parseFloat ((Math.sqrt((n * squareSum_X -
                    sum_X * sum_X) * (n * squareSum_Y -
                    sum_Y * sum_Y)))));
            return corr;
        }
    }
    Zscore (values, x) {
        let zScore = ((x - this.Mean(values))/ this.StandardDeviation(values));

        return  parseFloat (zScore.toFixed(2));


    }
    MeanDeviation (values) {
        let sumDeviation = 0;
        let mean = this.Mean(values);
        for (let x=0; x < values.length; x++){
            sumDeviation += Math.abs( values[x] - mean);
        }
        return sumDeviation/values.length;
    }


}
module.exports = Statistics;