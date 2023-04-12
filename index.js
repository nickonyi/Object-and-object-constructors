//let user = {
//    name: "Nick",
//    age: 23,
//    "likes basketball": true
//}
//
//user.isAdmin = true;
//delete user.age;
//let key = "Loves programming";
//user[key] = true;
//let key2 = prompt("What do you want to know about the user?", "name");
//
//
//console.log(user.name);
//console.log(user.age);
//console.log(user.isAdmin);
//console.log(user['likes basketball']);
//console.log(user);
//console.log(user[key2]);

//let fruit = prompt('Which fruit to buy?', 'apple');
//let bag = {};
//
//bag[fruit] = 5;
//
//console.log(bag);

const playerOne = {
    name: "Nick",
    marker: "X"
}

const playerTwo = {
    name: "Ownen",
    marker: "O"
}

function printName(player) {
    console.log(player.name);
    console.log(player.marker);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(`The name is ${name} and the marker is ${marker}`);
    }
}

const john = new Player("John", "X");
const susan = new Player("Susan", "O");
susan.sayName();

console.log(john.marker);
console.log(susan);