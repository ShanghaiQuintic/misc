function alpha(ch) {
  return ((ch >= 'a' && ch <= 'z')
       || (ch >= 'A' && ch <= 'Z'))
}

function digit(ch) {
  return (ch >= '0' && ch <= '9')
}

function alphanum(ch) {
  return (digit(ch) || alpha(ch))
}
