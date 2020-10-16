var isPrimeSync = function (number) {
    if (number < 0) number *= -1;

    if (number < 2) return false;

    for (var i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
};

var isPrime = function (number, cb) {

    setTimeout(function () {
        if (isNaN(number)) {
            return cb(new Error('Not a number'), null);
        }
        var result = isPrimeSync(number);
        cb(null, result);
    }, 1);
}

var countPrimesSync = function (min, max) {


    if (min >= max)
        throw new Error('Invalid Range'); //return error

    var count = 0;
    var range = max - min;
    var done = 0;
    for (var i = min; i < max; i++) {

        if (isPrimeSync(i)) {
            count++;
            process.send({
                type: 'prime',
                index: count,
                prime: i
            });
        }
    }

    process.send({
        type: 'done',
        total: count
    });

};


process.on('message', function (m) {

    var min = m.min;
    var max = m.max;
    console.log(`child process finding primes between ${min} and ${max}`);
    countPrimesSync(min, max);

});