const players = [{ name: "Player1", sign: "X`", score: 0 }];

function makeAdding(firstNumber) {
  const first = firstNumber;
  let total = "";
  total += first;
  console.log(total);
  return function resulting(secondNumber) {
    const second = secondNumber;

    return (total += second);
  };
}

const add5 = makeAdding("first");
console.log(add5("second"));
