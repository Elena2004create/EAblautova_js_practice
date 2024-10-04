let user1 = {
    name: "Олег",
    age: 25,
    city: "Москва"
  };
  
console.log("Данные пользователя 1:", user1);

user1.age = 26;
user1.country = "Берлин";

delete user1.city;

console.log("Обновленнные данные первого пользователя", user1);

let user2 = {
    name: "Виктория",
    age: 20,
    city: "Островцы"
  };

console.log("Данные пользователя 2:", user2);  
  
let totalAge = user1.age + user2.age;
console.log("Сумма возрастов:", totalAge);

