let userData = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

let copiedUserData = JSON.parse(JSON.stringify(userData));

copiedUserData.name = "Bob";
copiedUserData.address.city = "Narnia";

console.log(userData.name);  // Alice
console.log(userData.address.city);  // Wonderland
console.log(copiedUserData.name);  // Bob
console.log(copiedUserData.address.city);  // Narnia
