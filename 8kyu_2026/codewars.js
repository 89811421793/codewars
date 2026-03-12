"use strict";
//Задача 1) https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }

/*Оператором расширения разворачиваю первый массив, добавляю туда второй и получаю единый массив; чтобы просуммировать нормально, все элементы должны быть числами; через фильтр отметаю все что не является типом number И сам NaN (хоть он и является формально числом, но он может помешать). Только потом я могу сложить отфильтрованные number методом reduce(для BigInt - не сработает). sum и acc - это по сути то же самое, num можно обозначить как current, 0 можно обозначить как initial. Если чисел вообще не будет, то фильтрация вроде как должна вернуть пустой массив, и раз складывать нечего, то reduce вернет, по идее initial, т.е ноль. Метод flat убирает рекурсивные вложенности у многомерных массивов (вложенные массивы тоже встречаются); в качестве аргумента можно выбрать любое число, но числовой тип Infinity уберет сразу любую вложенность ("разглаживание массива)"*/

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2]
    .flat(Infinity)
    .filter(elem => typeof elem === "number" && !isNaN(elem))
    .reduce((sum, num) => sum + num, 0);

console.log(arrayPlusArray([1, 2], [3, 4]));
console.log(
  arrayPlusArray([0.1, "100", NaN], [undefined, 2, [null, "blabla"]]),
);
console.log(arrayPlusArray([0.1, "100", NaN], [undefined, 2, [3, "blabla"]]));
// ____________________________________________________________________________________________

// Задача 2) https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// function findNeedle(haystack) {
//   // your code here
// }

/*indexOf просто ищет индекс по элементу сразу; findIndex - то же что-то похожее но ищет циклически как бы, пока не найдет */

// indexOf Variant:
const findNeedle = function (haystack) {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
};
console.log(
  findNeedle([
    "hay",
    "junk",
    "hay",
    "hay",
    "moreJunk",
    "needle",
    "randomStuff",
  ]),
);

// findIndex Variant:
function findNeedle2(haystack) {
  const index = haystack.findIndex(item => item === "needle");
  return `found the needle at position ${index}`;
}
console.log(
  findNeedle2([
    "hay",
    "junk",
    "hay",
    "hay",
    "moreJunk",
    "needle",
    "randomStuff",
  ]),
);

// ______________________________________________________________________________________________

// Задача 3) https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// function countSheeps(sheep) {
//   // TODO
// }

/*!sheep - данная инверсия обозначает: если sheep это null, undefined или не массив; i - это для итераций цикла, а count - непосредственный счет овец, который и надо вернуть. if (sheep[i]) вместо if (sheep[i] === true) лучше не писать иначе будут добавляться в счет любые истинные значения (а из истанных тут важно именно true). Array.isArray() проверит, является ли переданное значение массивом (пишется с заглавной буквы),!Array.isArray()- аналог инверсии !sheep(не Array) */

// Loop Variant
function countSheeps(sheep) {
  if (!sheep) return 0;

  let count = 0;
  let i = 0;

  while (i < sheep.length) {
    if (sheep[i] === true) {
      count++;
    }
    i++;
  }

  return count;
}

const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(sheepArray));
console.log(countSheeps([true, null, undefined, false, true, true, 1]));

// Filter Variant
function countSheeps(sheep) {
  if (!Array.isArray(sheep)) return 0;

  return sheep.filter(el => el === true).length;
}

console.log(countSheeps(sheepArray));
console.log(countSheeps([true, null, undefined, false, true, true, 1]));
// _______________________________________________________________________________________

// Задача 4) https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

// function stringToArray(string){
// 	// code code code
// }

/*метод join - противоположный split; второй вариант: в массив words складываются перебранные слова;word - сюда собирается каждое слово, но по букве (из chars или characters - символов); символом считается буква или пробел тоже; char === " " - значит это пробел; если слово уже составлено, то толкаем его в массив, а word надо очистить(пустая строка), следующее слово будет туда помещаться; если натыкаемся не на пробел, а на букву, то внутрь word и кладем ее (аналог аккамулятора, где эти буквы якобы копятся, составляя слово); готовый массив надо вернуть, чтоб отобразился в alert или консоли*/

// split variant
let stringToArray = string => string.split(" ");

const str = "this one is simpler";
console.log(stringToArray(str));

// loop(for/of) variant
let stringToArray2 = string => {
  let words = [];
  let word = "";

  for (let char of string) {
    if (char === " ") {
      if (word) words.push(word);
      word = "";
    } else {
      word += char;
    }
  }

  if (word) words.push(word);
  return words;
};

const string = "this one is more difficult";
console.log(stringToArray2(string));
// __________________________________________________________________________________________

//  Задача 5) https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

//  function distinct(a) {
//   return [];
// }

/*если по-быстрому, то обычно используют это: https://learn.javascript.ru/map-set; includes(включает в себя? если да, то не добавляем; каждому индексу, видимо, соответствует один элемент item (или elem)-совпадают ли индексы, если нет - исключить из массива(дубликат)*/

let distinct = function (arr) {
  return [...new Set(arr)];
};

console.log(distinct(["Vasya", "1", true, undefined, 10, 10]));

// reduce/includes variant
let distinct2 = arr =>
  arr.reduce((acc, item) => {
    return acc.includes(item) ? acc : [...acc, item];
  }, []);
console.log(distinct2(["Vasya", "1", true, undefined, 10, 10]));

//filter/indexOf
let distinct3 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
console.log(distinct3(["Vasya", "1", true, undefined, 10, 10]));
// _____________________________________________________________________________________________

// Задача 6) https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

// function squareOrSquareRoot(array) {
//   return array;
// }

/*Integer(сокр.int) - целое число;Number.isInteger(root) - является ли корень целым числом; если число удовлетворяет условию проталкиваем его в массив иначе возводим во вторую степень.*/

// map variant
function squareOrSquareRoot(arr) {
  return arr.map(num => {
    const root = Math.sqrt(num);
    return Number.isInteger(root) ? root : num ** 2; // or Math.pow(num, 2)
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// loop&push variant
function squareOrSquareRoot(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const root = Math.sqrt(num);

    if (Number.isInteger(root)) {
      result.push(root);
    } else {
      result.push(num ** 2);
    }
  }
  return result;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// _____________________________________________________________________________________

// Задача 7) https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// function warnTheSheep(queue) {}
/*queue - условно массив будет очередью, и фермер стоит справа(наверное и считает по направлению налево); обнаружим волка (попробуем lastIndexOf, который ищет индекс с правого конца); далее нужно узнать сколько овец после волка или есть ли овцы после него(сам он последний или нет) - posFromEnd.Если posFromEnd(позиция с конца - нулевая, значит волк последний в очереди ну или после него никого.) Для этого всех, кто перед волком удалим и вычтем его самого(минус 1). wolfIndex - это длина отрезка до волка */

let warnTheSheep = queue => {
  const wolfIndex = queue.lastIndexOf("wolf");

  const posFromEnd = queue.length - wolfIndex - 1;

  if (posFromEnd === 0) return "Pls go away and stop eating my sheep";

  return `Oi! Sheep number ${posFromEnd}! You are about to be eaten by a wolf!`;
};

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ]),
);

// short for:
let warnTheSheep2 = queue => {
  const posFromEnd = queue.length - queue.lastIndexOf("wolf") - 1;

  return posFromEnd === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${posFromEnd}! You are about to be eaten by a wolf!`;
};

console.log(
  warnTheSheep2([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ]),
);
// ____________________________________________________________________________________
// Задача 8) https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// function fakeBin(x){}

/*Как я понял, здесь всё, что меньше 5, должно стать нулем, остальное(вероятно включая 5) — единицей; строка подставляется из чисел; последовательность нулей и единиц - это машинный код (финальный вывод не числовой, а строковый). Разбили строку на массив чисел, через карту выполнили проверку (условие выше), измененные мэпом элементы собрали из массива в строку. через фильтрацию мы оставляем только числовой тип, исключая пробелы и тип Not a Number*/
const fakeBin = x =>
  x
    .split("")
    .filter(n => n !== " " && !isNaN(n))
    .map(n => (n < 5 ? "0" : "1"))
    .join("");

console.log(fakeBin("4538 55931a07843568"));
console.log(fakeBin("453   abc"));

// spread operator instead of split
const fakeBin2 = x =>
  [...x]
    .filter(n => n !== " " && !isNaN(n))
    .map(n => (n < 5 ? "0" : "1"))
    .join("");

console.log(fakeBin2("4538 55931a07843568"));
console.log(fakeBin2("453   abc"));
// __________________________________________________________________________________________

//  Задача 9) https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

//  function invert(array) {
//    return ;
// }

/*Проходим картой(мэпом) по каждому числу в массиве и меняем его знак на противоположный, а если ноль, то оно так нулем и остается; пустой массив - ну, значит нет там чисел; фильтр уберет нечисловые типы (вместе с bigint);
В случае рекурсии: самый базовый простой случай, кот не требует доп манипуляций - это пустой массив с нулевой длиной, сразу вернуть его; Используем деструктурирующее присваивание, и самый первый элемент массива (индекс 0) попадает в first, а rest - это остаточные параметры(https://learn.javascript.ru/rest-parameters-spread-operator). Инвертируем rest пока весь массив не опустеет.Проверяем, является ли первый элемент числом. Если да, работаем с ним(либо это ноль, либо целым числам меняем знак на противоположный. Далее соединим все инверты в один массив(invertedRest - это уже спрэд); если first не число то помещаем инверты только из ...invertedRest и возвращаем*/

function invert(arr) {
  return arr
    .filter(num => typeof num === "number")
    .map(num => (num === 0 ? 0 : -num));
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([-1, -2, -3, -4, -5]));
console.log(invert([]));
console.log(invert([0]));
console.log(invert(["if not number", 0, 0, 1.1]));

// recursion
function invert(arr) {
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;
  const invertedRest = invert(rest);

  if (typeof first === "number") {
    const invertedFirst = first === 0 ? 0 : -first;
    return [invertedFirst, ...invertedRest];
  }

  return invertedRest;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([-1, -2, -3, -4, -5]));
console.log(invert([]));
console.log(invert([0]));
console.log(invert(["if not number", 0, 0, 1.1]));
// _________________________________________________________________________________________________

// Задача 10) https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// function removeEveryOther(arr){
//   //your code here
// }

/*либо шаг через 2- i += 2, либо continue*/
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(removeEveryOther([1, 2, 1, 2, 1, 2, 1, 2]));

// while/continue for a change
function removeEveryOther(arr) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    if (i % 2 !== 0) {
      i++;
      continue;
    }

    result.push(arr[i]);
    i++;
  }

  return result;
}

console.log(removeEveryOther([1, 2, 1, 2, 1, 2, 1, 2]));
