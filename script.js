const makeChange = (c) => {
  // your name here
  let amount = c;
  let q = 0, d = 0, n = 0, p = 0;
  
  while (amount > 0) {
    if (amount >= 25) {
      amount -= 25;
      q++;
    } else if (amount >= 10) {
      amount -= 10;
      d++;
    } else if (amount >= 5) {
      amount -= 5;
      n++;
    } else {
      amount -= 1;
      p++;
    }
  }
  
  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));