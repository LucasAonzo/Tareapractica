const personas = [
  { name: "Mary", age: 18 },
  { name: "Jesus", age: 29 },
  { name: "Carlos", age: 12 },
  { name: "Pierina", age: 5 },
  { name: "Ana Lucia", age: 40 },
  { name: "Federico", age: 1 },
  { name: "Enmanuel", age: 19 },
  { name: "Alejandro", age: 13 },
];

const familyGarcia = {
  name: "García",
  members: [
    {
      name: "Juan García",
      age: 65,
      children: [
        {
          name: "María García",
          age: 40,
        },
        {
          name: "Luis García",
          age: 35,
        },
      ],
    },
    {
      name: "Laura García",
      age: 35,
      children: [
        {
          name: "José García",
          age: 8,
        },
        {
          name: "Sofía García",
          age: 5,
        },
      ],
    },
    {
      name: "Ana García",
      age: 20,
    },
  ],
};

module.exports = { personas, familyGarcia };
