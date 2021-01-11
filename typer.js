//DOM element to manipulate
const headerText = $(".bruh");

// constant variables
const sentence = "Can I eat gushers out of your ass?";

const handleType = (character, wait) => {
  setTimeout(() => {
      headerText.text(character);
  }, wait);

  return Math.random() / 2 * 350 + wait;
}

const type = () => {
  let speed = 0;
  for (let i = 0; i <= sentence.length; i++) {
    speed = handleType(sentence.slice(0, i), speed);
  }
};

type();