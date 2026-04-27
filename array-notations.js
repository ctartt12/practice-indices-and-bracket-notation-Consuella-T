const libraryShelves = [
  ['twilight', 'insideout', 'falling star'],
  ['little engine', 'chicka chicka boom boom', 'Star Wars'], 
  ['Crazy Rich Asians', 'the wishing star', 'jurassic park'],
];

// Task: Access specific books (cleaned up)
console.log(libraryShelves[0][0]);
console.log(libraryShelves[0][1]);
console.log(libraryShelves[0][2]);

console.log(libraryShelves[1][0]);
console.log(libraryShelves[1][1]);
console.log(libraryShelves[1][2]);

console.log(libraryShelves[2][0]);
console.log(libraryShelves[2][1]);
console.log(libraryShelves[2][2]);

// Task: Loop through entire library (best practice)
for (let row = 0; row < libraryShelves.length; row++) {
  for (let item = 0; item < libraryShelves[row].length; item++) {
    console.log(libraryShelves[row][item]);
  }
}

// Task: Loop only second shelf
for (let i = 0; i < libraryShelves[1].length; i++) {
  console.log(libraryShelves[1][i]);
}
