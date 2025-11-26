function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  let total = "";
  total += first;
  console.log(total);
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    // return (first += second);
    return (total += second);
  };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding("first");
console.log(add5("second")); // logs 7
