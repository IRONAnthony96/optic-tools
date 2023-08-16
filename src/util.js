function convert(value, factor) {
  return value * factor;
}

function calculateZr(pi, w, lamda) {
  return (pi * w * w) / lamda;
}

export { convert, calculateZr };
