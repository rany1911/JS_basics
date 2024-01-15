//from obj to JSON, from JSON to obj
let user = {
    name: "Василий Иванович",
    age: 35
};
  
user = JSON.stringify(user, null, 3);
  
console.log(user);
  
let man = JSON.parse(user);
  
console.log(man);

//exclude backlinks
let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));