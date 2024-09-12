const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let n = parseInt(input, 10);
    if (isNaN(n) || n <= 0) {
        console.log('Invalid number.');
        rl.close();
        return;
    }
    if (n % 2 === 0) n++;
    for (let i = 1; i <= n; i += 2) {
        console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
    }
    for (let i = n - 2; i > 0; i -= 2) {
        console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
    }
    rl.close();
});
