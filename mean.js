const addition = require('./addition');
function mean(a){
    let avg = 0;
    var x = addition.sum(a);
    avg = x/a.length;
    return avg;


}
module.exports = mean;