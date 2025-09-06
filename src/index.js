module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const pairs = {};
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    const [open, close] = bracketsConfig[i];
    pairs[open] = close;
  }
  for (let i = 0; i < str.length; i += 1) {
    const bracket = str[i];
    const lastEl = stack[stack.length - 1];
    if (stack.length === 0) {
      stack.push(bracket);
    } else if (pairs[lastEl] === bracket) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  return stack.length === 0;
};
