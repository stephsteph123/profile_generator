const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('Whats your name? Nicknames are also acceptable', (answer2) => {
    console.log("cool", answer2);
    rl.question('Whats an activity you like doing?', ( answer3) => {
      console.log("cool", answer3);
      rl.question('What do you listen to while doing that?', (answer4) => {
        console.log("cool", answer4);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer5) => {
          console.log("cool", answer5);
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            console.log("cool", answer6);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log("cool", answer7);
              rl.close();
            });
          });
        });
      });
    });
  });
});

// rl.question('Whats your name? Nicknames are also acceptable', (answer) => {
// rl.question('Whats an activity you like doing?', (answer) => {
// rl.question('What do you listen to while doing that?', (answer) => {
// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
// rl.question('What's your favourite thing to eat for that meal?', (answer) => {
// rl.question('Which sport is your absolute favourite?', (answer) => {
// rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {