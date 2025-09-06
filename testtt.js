function check(str, bracketsConfig) {
  const stack = [];
  const pairs = {};
  for (const pair of bracketsConfig) {
    const open = pair[0];
    const close = pair[1];
    pairs[open] = close;
  }
  for (let i = 0; i < str.length; i += 1) {
    const bracket = str[i];
    if (pairs[bracket]) {
      stack.push(bracket);
    } else {
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(
  check('||', [['|', '|']])
);
