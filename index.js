// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me! `);
// }

const gifts = ["teddy bear", "drone", "doll"];

const wrapGifts = (giftsToWrap) => {
  let index = 0;
  while (index < giftsToWrap.length) {
    console.log(`Wrapped ${giftsToWrap[index]} and added a bow!`);
    index++;
  }
  return giftsToWrap;
};
wrapGifts(gifts);

const writeCards = (names, reason) => {
  const messages = [];
  for (let index = 0; index < names.length; index++) {
    messages.push(
      `Thank you, ${names[index]}, for the wonderful ${reason} gift!`,
    );
  }
  return messages;
};
writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");
//
//

const countDown = (number) => {
  let index = number;
  while (index >= 0) {
    console.log(index);
    index--;
  }
};
countDown(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function writeCards(names, reason) {
//   const messages = [];
//   for (let index = 0; index < names.length; index++) {
//     messages.push(
//       `Thank you, ${names[index]}, for the wonderful ${reason} gift!`,
//     );
//   }

//   return messages;
// }

// // writeCards(["Brooke", "Marcus", "Arleigh"], "birthday")

// function countDown(number) {
//   while (number >= 0) {
//     console.log(number);
//     number--;
//   }
// }
