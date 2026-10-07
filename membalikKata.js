let kata = "i love vespa";
let kataTerbalik = "";

for (let i = kata.length - 1; i >= 0; i--) {
  kataTerbalik += kata[i];
}

console.log(kataTerbalik);