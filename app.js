// nested array spreading


const pets = new Array ( );
pets[0] = new Array ( "zunair", 17, "cat" );
pets[1] = new Array ( "abbas", 18, "dog" );
pets[2] = new Array ("mubeen",20,"hen" );
// spread  all nested arrays
const b=[...new Array(pets[0],pets[1],pets[2],)]
// b.splice(0,1);
console.log(b)
// spread any one value of array
const d=[...pets[1],"you add now any data"]
console.log(d);


// nested object destructuring
const object = {
    name:"mubeen",
    gender: "male",
    hobby: {
      hobbyname:"programing",
      favouritefood: {
        foodname:"briyani",
      },
    },
  }
//   target one object
  const newObject = { ...object, object: { ...object.hobby.favouritefood } }

console.log(newObject)
// target whole object
const new2object={...object}
console.log(new2object)