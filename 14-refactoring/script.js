// refactoring

// sebelum refactoring
function volumeDuaKubus(a, b) {
  let volumeA;
  let volumeB;
  let total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

volumeDuaKubus(4, 5);

// setelah refactoring
function volumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

volumeDuaKubus(4, 5);
