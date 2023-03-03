const { personas, familyGarcia } = require("./exports.js");
//PARTE 1: Acceder al valor solicitado mediante bracket notation y dot notation segun corresponda:

// Ejercicio 1:
// 1.1 Acceder al valor "phone2"
const employees = [
  {
    name: "John Doe",
    department: "Marketing",
    salary: 50000,
    contact: {
      email: "johndoe@company.com",
      phone: "111-111-1111",
    },
  },
  {
    name: "Jane Smith",
    department: "Sales",
    salary: 60000,
    contact: {
      email: "janesmith@company.com",
      phone: { phone1: "555-555-5555", phone2: "666-666-6666" },
    },
  },
];

let phone2 = employees[1].contact.phone.phone2;
console.log(phone2);

// 1.2 Cuanto cuesta el producto numero 1?
// 1.3 Cuales son las categorias del producto numero 2?
const products = [
  {
    name: "Product 1",
    price: 10.99,
    categories: ["category 1", "category 2"],
  },
  {
    name: "Product 2",
    price: 20.99,
    categories: ["category 3", "category 4"],
  },
];

let precion1 = products[0].price;
console.log(precion1);
let categorias = products[1].categories;
console.log(categorias);

// 1.4 Como se llama la capital que tiene una poblacion de 6827390974?
// 1.5 Cuanta poblacion tiene 'New York'?
// 1.6 Cuanta poblacion tiene 'Lyon'?
const countries = [
  {
    name: "United States",
    capital: {
      name: "Washington D.C.",
      population: 700000,
    },
    cities: [
      { name: "New York", population: 8000000 },
      { name: "Los Angeles", population: 4000000 },
    ],
  },
  {
    name: "France",
    capital: {
      name: "Paris",
      population: 6827390974,
    },
    cities: [
      { name: "Marseille", population: 860000 },
      { name: "Lyon", population: 520000 },
    ],
  },
];

let capital = countries[1].capital.name;
console.log(capital);
let poblacion = countries[0].cities[0].population;
console.log(poblacion);
let poblacion2 = countries[1].cities[1].population;
console.log(poblacion2);


// 1.7 Cuantas ordenes de compra tiene Jane?
// 1.8 Cuantos productos compro John en su orden con fecha '2022-02-15'?
const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
      zip: "12345",
    },
    orders: [
      {
        id: 1,
        date: "2022-02-01",
        products: [
          { name: "Product 1", price: 10.99, quantity: 2 },
          { name: "Product 2", price: 20.99, quantity: 1 },
        ],
      },
      {
        id: 2,
        date: "2022-02-15",
        products: [
          { name: "Product 3", price: 5.99, quantity: 3 },
          { name: "Product 4", price: 15.99, quantity: 2 },
        ],
      },
    ],
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "555-555-5555",
    address: {
      street: "456 Second St",
      city: "Othertown",
      state: "CA",
      zip: "67890",
    },
    orders: [
      {
        id: 3,
        date: "2022-03-01",
        products: [
          { name: "Product 1", price: 10.99, quantity: 1 },
          { name: "Product 5", price: 25.99, quantity: 2 },
        ],
      },
    ],
  },
];

let ordenes = users[1].orders.length;
console.log(ordenes);
let productos = users[0].orders[1].products.length;
console.log("John compro " + productos + " productos");


// 1.9 Cuantas subcategorias tiene la categoria "Horror"?
// 1.10 Cual es el "parentCategoryId" de la subCategoria "Suspense"?
const categories = [
  {
    id: 1,
    name: "Horror",
    parentCategoryId: null,
    subcategories: [
      {
        id: 2,
        name: "Suspense",
        parentCategoryId: 1,
        subcategories: [],
      },
      {
        id: 3,
        name: "Terrify",
        parentCategoryId: 1,
        subcategories: [
          {
            id: 4,
            name: "Scary",
            parentCategoryId: 3,
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Category 2",
    parentCategoryId: null,
    subcategories: [],
  },
];

let subcategorias = categories[0].subcategories.length;
console.log("existen " + subcategorias + " subcategorias en la categoria Horror");
let parentCategoryId = categories[0].subcategories[0].parentCategoryId;
console.log("el parentCategoryId de la subcategoria Suspense es " + parentCategoryId);

//PARTE 2: Acceder a los valores solicitados usando los metodos de arrays/objetos que consideres apropiados
//recuerda que dentro de los metodos tambien puedes y debes de usar bracket y dot notation,
//Por ejemplo: array.find(elemento=>elemento.nombre==="Loquebusco")

// 2.1 Encuentra el item que tiene por unit la palabra "tubo"
const shoppingList = [
  { item: "leche", quantity: 2, unit: "litros" },
  { item: "pan", quantity: 1, unit: "pieza" },
  { item: "huevos", quantity: 12, unit: "piezas" },
  { item: "arroz", quantity: 1, unit: "kilo" },
  { item: "pasta de dientes", quantity: 1, unit: "tubo" },
];

let encuentra = shoppingList.find((elemento) => elemento.unit === "tubo");
console.log("el item que tiene por unit la palabra tubo es " + encuentra.item );


//2.2 Cual es el nombre de la actividad que puede medirse en horas
const activities = [
  { name: "correr", duration: { fullTime: 30, partTime: 15 }, unit: "minutos" },
  { name: "nadar", duration: 45, unit: "minutos" },
  { name: "hacer yoga", duration: 60, unit: "minutos" },
  {
    name: "jugar tenis",
    duration: 90,
    unit: {
      unit1: "segundos",
      unit2: "minutos",
      unit3: "horas",
    },
  },
  { name: "caminar", duration: 60, unit: "minutos" },
];


//usando typeof
let actividad = activities.find((elemento) => typeof elemento.unit === "object");
console.log("la actividad que puede medirse en horas es " + actividad.name);

// 2.3 Devolver todos los animales que sean reptiles
// 2.4 Cuantos antropodos hay?
// 2.5 Existe en esta lista algun animal llamado gato? (Devolver true o false)
const animals = [
  { name: "Perro", legs: 4, type: "mamífero" },
  { name: "Pez", legs: 0, type: "pez" },
  { name: "Pájaro", legs: 2, type: "ave" },
  { name: "Cocodrilo", legs: 4, type: "reptil" },
  { name: "Araña", legs: 8, type: "artrópodo" },
  { name: "Serpiente", legs: 0, type: "reptil" },
  { name: "Tortuga", legs: 4, type: "reptil" },
  { name: "Iguana", legs: 4, type: "reptil" },
];

let reptiles = animals.filter((elemento) => elemento.type === "reptil");
console.log(reptiles);
let antropodos = animals.filter((elemento) => elemento.type === "artrópodo");
console.log("existen " + antropodos.length + " antropodos");
let gato = animals.some((elemento) => elemento.name === "Gato");
console.log(gato);


//PARTE 3: Dadas las siguiente funciones, retornar lo que se pide:

// 3.1 recibe un array de objetos, donde cada objeto tiene el nombre de la persona y su edad, y debe
// de retornar la lista (en un array) de personas que tenga 18 a*os o mas. Ej:
// const personas = [
//     { name: "Mary", age: 18 },
//     { name: "Jesus", age: 11 },
//     { name: "Carlos", age: 22 }]

//Debes de retornar:
// [{ name: "Mary", age: 18 },{ name: "Carlos", age: 22 }]
function mayoresDeEdad(personas) {
  let mayores = personas.filter((elemento) => elemento.age >= 18);
    console.log(mayores);    
}

// 3.2 La funcion recibe un objeto llamado Familia Garcia, dentro de este objeto cada miembro tiene su nombre, edad,
// y en caso de tener hijos, los datos de sus hijos. La funcion debe de retornar la lista de nombres de
//las  personas que tienen hijos (en un array).

//Ej:
//const familyGarcia = {
//     name: "García",
//     members: [
//       {
//         name: "Juan García",
//         age: 65,
//         children: [
//           {
//             name: "María García",
//             age: 40,
//           }
//         ],
//       },
//       {
//         name: "Laura García",
//         age: 35,
//      }
// }

//Debes de retornar:
// ["Juan García"]
function tienenHijos(familyGarcia) {
  let hijos = familyGarcia.members.filter((elemento) => elemento.children);
  let nombres = hijos.map((elemento) => elemento.name);
  console.log(nombres);

}



//NO MODIFICAR NADA ABAJO:
mayoresDeEdad(personas);
tienenHijos(familyGarcia);
