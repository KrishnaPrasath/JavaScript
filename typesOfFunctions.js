let x = 10;
let y = 50;
let z = 25;

let sample = function(a, b, c) {
  console.log("Function as a variable");
  if (a > b) {
    if (a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

sample(x, y, z);

(function(a, b, c) {
  console.log("Self invoke function");
  if (a > b) {
    if (a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
})(x, y, z);

function compare(a, b, c) {
  console.log("Basic function");
  if (a > b) {
    if (a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

compare(x, y, z);

let ans = (a, b, c) => {
  console.log("Aroow function");
  if (a > b) {
    if (a > c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

ans(x, y, z);
