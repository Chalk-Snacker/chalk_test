import chalk from "chalk";

const log = console.log;
const hexValues = "0123456789ABCDEF";
let color = "#";
const joke = "Hvorfor kan ikke du stole på et ion? -> Fordi de alltid er positive før de møter deg og deretter negative etterpå.";

function getRandomColor() {
  for (let i = 0; i < 6; i++) {
    // instead of using hexValues[i], i randomize to get random colors.
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

function funnyJoke() {
  const words = joke.split(" ");
  let coloredJoke = "";
  for (let i = 0; i < words.length; i++) {
    // applies the random color from function to current word in for-loop
    coloredJoke += chalk.hex(getRandomColor())(words[i]) + " ";
    color = "#";
  }
  log(coloredJoke);
}
funnyJoke();
