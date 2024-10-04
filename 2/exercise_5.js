let countries = new Map();

countries.set(1, "Poland");
countries.set(2, "Germany");
countries.set(3, "USA");

console.log(countries)

console.log("Последний добавленный элемент:", countries.get(3));

countries.delete(2);

console.log("Germany is in map:", countries.has(2));