function ucFirst(str) {
  // моя функция
  if (str.length === 0) {
    return '';
  } else if (str.length === 1) {
    return str.charAt(0).toUpperCase();
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
