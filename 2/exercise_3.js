let array1 = [1, 2, 3, 4, 5];

console.log("Первый элемент:", array1[0]);
console.log("Последний элемент:", array1[array1.length - 1]);

array1[1] = 10;

let array2 = [...array1];

console.log("Массив 1:", array1);
console.log("Массив 2 (copy):", array2);

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let mergedArray = mergeArrays(array1, array2);
console.log("Объединение массивов:", mergedArray);

let users = [{ name: "Олег" }, { name: "Alice" }, { name: "Татьяна" }];

function getNames(userArray) {
  return userArray.map(user => user.name);
}

console.log("Имена:", getNames(users));

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log("Среднее значение в массиве:", average([1, 2, 3, 4, 5]));