// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me! `);
// }

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(giftsToWrap) {
  let i = 0;
  while (i < giftsToWrap.length) {
    console.log(`Wrapped ${giftsToWrap[i]} and added a bow!`);
    i++;
  }
  return giftsToWrap;
}

wrapGifts(gifts);

function writeCards(names, reason) {
  const messages = [];
  for (let name = 0; name < names.length; name++) {
    messages.push(`Thank you, ${names[name]}, for the wonderful ${reason} gift!`)
  }

  return messages;
}


// writeCards(["Brooke", "Marcus", "Arleigh"], "birthday")

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}