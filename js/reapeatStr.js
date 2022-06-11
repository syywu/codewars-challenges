// repeat str
// repeat s by n times

function repeatStr(n, s) {
  return s.repeat(n);
}

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
