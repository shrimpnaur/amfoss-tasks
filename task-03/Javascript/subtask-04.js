const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const match = data.match(/^n=(\d+)/m);
    if (!match) {
        console.error('No line starting with "n=" found.');
        return;
    }

    let n = parseInt(match[1], 10);
    if (n % 2 === 0) n++; // making n odd if it's even

    let pattern = '';
    for (let i = 1; i <= n; i += 2) {
        pattern += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }
    for (let i = n - 2; i > 0; i -= 2) {
        pattern += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    fs.writeFile('output.txt', pattern, (err) => {
        if (err) {
            console.error('Error writing output file:', err);
        }
    });
});
