process.stdin.setEncoding('utf8');

function great() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('data', (chunk) => {
    const name = chunk.toString().trim();
    console.log(`Your name is: ${name}`);

    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
    }

    process.exit();
  });
}

module.exports = great();
