// const square = (x) => {
//   return x * x;
// };

// console.log(square(3));

// const event = {
//   name: "Birthday Party",
//   guestList: ["Ahmed", "Bilawal", "Ali"],
//   printGuestList: () => {
//     console.log("guest list for " + event.name);
//   },
//   this.guestList.foreach(function (guest){
//     console.log(guest + " is attending " + this.name)

//   })
// };
// event.printGuestList();

const event = {
  name: "Birthday Party",
  guestList: ["Ahmed", "Bilawal", "Ali"],

  printGuestList() {
    console.log("guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
