let names = new Set();

names.add("Bill");
names.add("Марк");
names.add("Олежа");
names.add("Kate");

console.log(names)

names.delete("Bill");

console.log("Bill в set:", names.has("Bill"));

console.log("Размер:", names.size);