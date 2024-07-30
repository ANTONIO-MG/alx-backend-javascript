process.stdin.setEncoding('utf8');

function great() {
  console.log('Welcome to Holberton School, what is your name?');
  
  process.stdin.on('data', function(chunk) {
    var name = chunk.toString().trim();
    console.log('Your name is: ' + name);
    console.log('This important software is now closing');
    process.exit();
  });
}

module.exports = great();
