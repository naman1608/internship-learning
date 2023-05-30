let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

let time = {
  hour: 13,
  minute: 30,
  second: 20,
};

room.place = meetup;
meetup.time = time;
time.venue = room;

console.log(2+"2");
console.log(Boolean(0))