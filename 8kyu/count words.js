function countWords(str) {
  return str.split(/\s/).filter((elem) => elem).length;
}

/*function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}*/

/*function countWords(str) {
  str = str.trim();
  if (str === '') return 0;
  return str.split(/\s+/).length;
}*/

/*let countWords = str => str.split(/\s+/g).filter(el => el !== '').lengths*/